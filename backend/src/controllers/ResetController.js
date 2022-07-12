require("dotenv").config();
const nodemailer = require("nodemailer");
const models = require("../models");
/*
 * email : giveday@propod.net
 * utilisateur : giveday@propod.net
 * password : [^U.QW9=KFNZ
 * smtp : palette.o2switch.net
 * port : 465
 */

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

class ResetController {
  static isTokenExists = (req, res) => {
    models.user
      .getTokenExists(req.params.id)
      .then((data) => {
        console.warn(data[0]);
        res.status(200).json(data[0]);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(204);
      });
  };

  static isEmailExists = (req, res) => {
    models.user
      .getUserByEmail(req.params.id)
      // eslint-disable-next-line consistent-return
      .then(([rows]) => {
        const tokenArray = [];
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          console.warn(`Email found : ${rows[0]}`);
          const key = generateRandomString(30);
          tokenArray.push(key);
          tokenArray.push(rows[0].email);
          models.user.updateToken(tokenArray);
          res.json({ tokenArray });
          return tokenArray;
        }
      })
      .then((data) => {
        // 0 - Generer un token (30)
        // 1 - enregistrer le token dans la table user
        // 2 - envoi d'un mail avec le lien pour modifier le mdp avec un token valide
        // exemple : http://localhost:5000/reset-password?token=elsm46eRc...
        // 3 - on clique sur le lien : un controller avec la route reset-password
        // 4 - On affiche la page de changement de password...
        console.warn(data);
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
          console.warn(link);
          const info = await transporter.sendMail({
            from: '"Email from giveday 👻" <contact@giveday.com>', // sender address
            to: "o.pochic@gmail.com", // list of receivers
            subject: "Reset Password give_day", // Subject line
            html: `Please reset your password by clicking this link : <br> <a href=${link}>Cliquer ce lien pour redéfinir votre mot de passe</a>`, // html body
          });
          console.warn(info.messageId);
        }
        main();
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ResetController;
