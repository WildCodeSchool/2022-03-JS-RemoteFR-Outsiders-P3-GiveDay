const Joi = require("joi");
const models = require("../models");

class UserController {
  static browse = (req, res) => {
    models.user
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.user
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static async edit(req, res) {
    try {
      const { prenom, nom, email, id, password, repeatPassword } = req.body;
      const getEmail = await models.user.getUserByEmail(email);

      if (getEmail[0].length > 0) {
        return res.status(400).json({
          status: 400,
          message: "Email already exist",
        });
      }
      if (password !== repeatPassword) {
        return res.status(400).json({
          status: 400,
          message: "Password is not correct",
        });
      }
      let validationErrors = null;
      validationErrors = Joi.object({
        email: Joi.string().email().max(255),
        prenom: Joi.string().max(255),
        nom: Joi.string().max(255),
      }).validate({ prenom, nom, email }, { abortEarly: false }).error;
      if (validationErrors) {
        return res.status(400).json({
          status: 400,
          message: "INVALID DATA",
        });
      }

      models.user
        .update({ prenom, nom, id, email })
        .then(([result]) => {
          console.warn(result);
          res.status(201).send({ message: "update user ok" }).json({
            status: "success",
            message: "User is logged",
            id: getEmail[0].id,
          });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
    return null;
  }

  static delete = (req, res) => {
    models.user
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static count = (req, res) => {
    models.user
      .getCount()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserController;
