const models = require("../models");

class EventController {
  static browse = (req, res) => {
    models.event
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
    models.event
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

  // static edit = (req, res) => {
  //   const event = req.body;

  //   // TODO validations (length, format...)

  //   event.id = parseInt(req.params.id, 10);

  //   models.event
  //     .update(event)
  //     .then(([result]) => {
  //       if (result.affectedRows === 0) {
  //         res.sendStatus(404);
  //       } else {
  //         res.sendStatus(204);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };

  static add = (req, res) => {
    const event = req.body;

    // TODO validations (length, format...)

    models.event
      .insert(event)
      .then(([result]) => {
        res.status(201).send({ ...event, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // static delete = (req, res) => {
  //   models.event
  //     .delete(req.params.id)
  //     .then(() => {
  //       res.sendStatus(204);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };
}

module.exports = EventController;
