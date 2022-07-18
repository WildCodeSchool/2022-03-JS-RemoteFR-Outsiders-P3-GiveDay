/* eslint-disable camelcase */
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

  static myEvents = (req, res) => {
    models.event
      .getEventUserId(req.params.id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static jointEvent = (req, res) => {
    models.event
      .getEventCode(req.params.code)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static async edit(req, res) {
    try {
      const { cagnotte_don_asso, cagnotte_somme_cadeau, id } = req.body;
      console.warn(req.body);
      models.event
        .update({
          cagnotte_don_asso,
          cagnotte_somme_cadeau,
          id,
        })
        .then(([result]) => console.warn(result))
        .then(async () => {
          res.status(201).send({ message: "event update ok" });
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
}

module.exports = EventController;
