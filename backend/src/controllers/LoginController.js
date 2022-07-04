require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const models = require("../models");

class LoginController {
  static async browse(req, res) {
    try {
      const { email, password } = req.body;
      const user = await models.user.getUserByEmail(email);
      if (user[0].length === 0) {
        return res.status(400).json({
          status: 400,
          message: "Email not found",
        });
      }
      const isPasswordValid = await bcrypt.compare(
        password,
        user[0][0].password
      );
      if (!isPasswordValid) {
        return res.status(400).json({
          status: 400,
          message: "Password is not correct",
        });
      }
      const token = jwt.sign(
        {
          id: user[0].id,
          email: user[0].email,
        },
        process.env.SECRET_JWT,
        {
          expiresIn: "1h",
        }
      );
      res.cookie("user_giveday", token).json({
        message: "User is logged",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
    return null;
  }

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

  static add = (req, res) => {
    const user = req.body;

    // TODO validations (length, format...)

    models.user
      .insert(user)
      .then(([result]) => {
        res.status(201).send({ ...user, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

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

module.exports = LoginController;
