require("dotenv").config();

const models = require("../models");

class ResetController {
  static isEmailExists = (req, res) => {
    // console.log(`route works for me.` + req.params.id)
    models.user
      .getUserByEmail(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
          console.warn(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ResetController;
