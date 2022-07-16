const models = require("../models");

class AssoController {
  static browse = (req, res) => {
    models.asso
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = AssoController;
