const bcrypt = require("bcryptjs");
const Joi = require("joi");
const models = require("../models");

class RegisterController {
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

  static edit = (req, res) => {
    const user = req.body;

    // TODO validations (length, format...)

    user.id = parseInt(req.params.id, 10);

    models.user
      .update(user)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static async add(req, res) {
    try {
      const { prenom, nom, email, password } = req.body;
      const hash = await bcrypt.hash(password, 10);
      let validationErrors = null;
      const getEmail = await models.user.getUserByEmail(email);
      if (getEmail[0].length > 0) {
        return res.status(400).json({
          status: 400,
          message: "Email already exist",
        });
      }
      validationErrors = Joi.object({
        email: Joi.string().email().max(255).required(),
        prenom: Joi.string().max(255).required(),
        nom: Joi.string().max(255).required(),
      }).validate({ prenom, nom, email }, { abortEarly: false }).error;
      if (validationErrors) {
        return res.status(400).json({
          status: 400,
          message: "INVALID DATA",
        });
      }

      models.user
        .insert({ prenom, nom, email, password: hash })
        .then(([result]) => {
          res
            .status(201)
            .send({ message: "register user ok", id: result.insertId });
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
}

module.exports = RegisterController;
