/* eslint-disable prefer-const */
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
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
    console.warn(req.body);
    try {
      let {
        prenom,
        nom,
        email,
        id,
        password,
        repeatPassword,
        adresse,
        ville,
        telephone,
        codePostal,
        pays,
      } = req.body;
      const getEmail = await models.user.getUserByEmail(email);
      if (getEmail[0].length > 0 && getEmail[0][0].email !== email) {
        return res.status(400).json({
          status: 400,
          message: "Email already exist",
        });
      }
      console.warn(getEmail[0][0].password);
      console.warn(password);
      if (password.length > 0 && password !== repeatPassword) {
        return res.status(400).json({
          status: 400,
          message: "Password is not correct",
        });
      }
      if (password === "" || password === undefined || password === null) {
        password = getEmail[0][0].password;
      }
      let validationErrors = null;
      if (email.length > 0) {
        validationErrors = Joi.object({
          email: Joi.string().email().max(255),
        }).validate(
          {
            email,
          },
          { abortEarly: false }
        ).error;
        if (validationErrors) {
          return res.status(400).json({
            status: 400,
            message: "INVALID DATA",
          });
        }
      }
      if (email === null || email === undefined || email === "") {
        email = undefined;
      }
      const token = jwt.sign(
        {
          id: getEmail[0].id,
          email: getEmail[0].email,
          role: getEmail[0].role,
        },
        process.env.SECRET_JWT,
        { expiresIn: "1h" }
      );
      const hash = await bcrypt.hash(password, 10);
      if (password.length > 0 && password === repeatPassword) {
        password = hash;
      }
      models.user
        .update({
          prenom,
          nom,
          id,
          email,
          adresse,
          ville,
          telephone,
          codePostal,
          pays,
          password,
        })
        .then(([result]) => console.warn(result))
        .then(async () => {
          const getUser = await models.user.getUserByEmail(email);
          res
            .cookie("user_giveday", token)
            .status(201)
            .send({ message: "user update ok", user: getUser[0][0] });
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
