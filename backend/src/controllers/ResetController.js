require("dotenv").config();
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const models = require("../models");
/*
 * email : giveday@propod.net
 * utilisateur : giveday@propod.net
 * password : [^U.QW9=KFNZ
 * smtp : palette.o2switch.net
 * port : 465
 */

// 0 - Generer un token (30)
// 1 - enregistrer le token dans la table user
// 2 - envoi d'un mail avec le lien pour modifier le mdp avec un token valide
// exemple : http://localhost:5000/reset-password?token=elsm46eRc...
// 3 - on clique sur le lien : un controller avec la route reset-password
// 4 - On affiche la page de changement de password...

/* Function : génère un token de longeur définie */
const generateRandomString = (myLength) => {
  const chars =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
  const randomArray = Array.from(
    { length: myLength },
    () => chars[Math.floor(Math.random() * chars.length)]
  );
  const randomString = randomArray.join("");
  return randomString;
};

/* CLASSE : Controle de l'envoi du token par mail */
class ResetController {
  /* FUNCTION : Check existance du token dans la BDD */
  static isTokenExists = (req, res) => {
    models.user
      .getTokenExists(req.params.id)
      .then((data) => {
        res.status(200).json(data[0]);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(204);
      });
  };

  /* FUNCTION : Check existance du mail dans la BDD */
  static isEmailExists = (req, res) => {
    models.user
      .getUserByEmail(req.params.id)
      // eslint-disable-next-line consistent-return
      .then(([rows]) => {
        const tokenArray = [];
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          const key = generateRandomString(30);
          tokenArray.push(key);
          tokenArray.push(rows[0].email);
          models.user.updateToken(tokenArray);
          res.json({ tokenArray });
          return tokenArray;
        }
      })
      .then((data) => {
        /* FUNCTION : si le mail existe envoi le token par mail */
        console.warn("Fonction sendMail :");
        console.warn(data);
        /* FUNCTION : Envoi du mail (attention aux identifiants de connection smtp) */
        async function main() {
          const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: process.env.MAIL_USER, // generated ethereal user
              pass: process.env.MAIL_PASS, // generated ethereal password
            },
          });

          const link = `${process.env.FRONTEND_URL}/reset/password-change/${data[0]}`;
          const info = await transporter.sendMail({
            from: '"Email from giveday 👻" <contact@giveday.com>', // sender address
            to: data[1], // list of receivers
            subject: "Reset Password give_day", // Subject line
            html: `Please reset your password by clicking this link : <br> <a href=${link}>Cliquer ce lien pour redéfinir votre mot de passe</a>`, // html body
          });
          console.warn(info);
        }
        main();
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  /* FUNCTION : update du password dans la BDD puis efface le token de la base */
  static updatePassword = async (req, res) => {
    const hash = await bcrypt.hash(req.body.newPassword, 10);
    models.user
      .updatePassword({ id: req.params.id, password: hash })
      .then((data) => {
        models.user.unsetToken(req.params.id);
        res.status(200).json(data[0]);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(204);
      });
  };
}

module.exports = ResetController;
