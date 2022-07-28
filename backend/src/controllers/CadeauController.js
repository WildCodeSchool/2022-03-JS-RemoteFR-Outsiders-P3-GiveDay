const models = require("../models");

class CadeauController {
  static add = (req, res) => {
    const cadeau = req.body;
    models.cadeau
      .insert(cadeau)
      .then(([result]) => {
        res.status(201).send({ ...cadeau, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.cadeau
      .deleteEvent(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static getList = (req, res) => {
    models.cadeau
      .getListCadeau(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = CadeauController;
