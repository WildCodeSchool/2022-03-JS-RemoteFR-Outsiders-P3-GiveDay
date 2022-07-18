const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const models = require("../models");

class AuthController {
  /**
   * @desc Register a new user
   * @param req
   * @param res
   * @returns {Promise<null|*>}
   */
  static async register(req, res) {
    try {
      const { prenom, nom, email, password, repeatPassword, role } = req.body;
      if (password !== repeatPassword) {
        return res.status(400).json({
          status: 400,
          message: "Password is not correct",
        });
      }
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
        role: Joi.string(),
      }).validate({ prenom, nom, email, role }, { abortEarly: false }).error;
      if (validationErrors) {
        return res.status(400).json({
          status: 400,
          message: "INVALID DATA",
        });
      }
      const token = jwt.sign(
        {
          id: getEmail[0].id,
          email: getEmail[0].email,
          role: getEmail[0].role,
        },
        process.env.SECRET_JWT,
        { expiresIn: "36h" }
      );
      models.user
        .insert({ prenom, nom, email, password: hash, role })
        .then(([result]) => console.warn(result))
        .then(async () => {
          const getUser = await models.user.getUserByEmail(email);
          res
            .cookie("user_giveday", token)
            .status(201)
            .send({ message: "register user ok", user: getUser[0][0] });
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

  /**
   * @desc Login a user
   * @param req
   * @param res
   * @returns {Promise<null|*>}
   */
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const [user] = await models.user.getUserByEmail(email);
      /**
       * const [user] = await models.user.getUserByEmail(email);
       *
       * output :
       * {
       *   id: id,
       *   prenom: 'firstname',
       *   nom: 'lastname',
       *   email: 'email',
       *   password: 'password hash',
       *   role: 'role'
       * }
       */
      if (user[0]?.id === undefined) {
        return res.status(400).json({
          status: 400,
          message: "Email not found",
        });
      }
      const isPasswordValid = await bcrypt.compare(password, user[0].password);
      if (!isPasswordValid) {
        return res.status(400).json({
          status: 400,
          message: "Password is not correct",
        });
      }
      const token = jwt.sign(
        { id: user[0].id, email: user[0].email, role: user[0].role },
        process.env.SECRET_JWT,
        { expiresIn: "36h" }
      );

      res.cookie("user_giveday", token).status(200).json({
        status: "success",
        message: "User is logged",
        user: user[0],
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
    return null;
  }

  /**
   * @desc Logout a user
   * @param req
   * @param res
   */
  static logout = (req, res) => {
    res.clearCookie("user_giveday").json({
      status: "success",
      message: "User is logged out",
    });
  };
}

module.exports = AuthController;
