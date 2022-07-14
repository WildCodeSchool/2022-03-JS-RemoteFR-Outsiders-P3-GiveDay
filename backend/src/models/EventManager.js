const AbstractManager = require("./AbstractManager");

class EventManager extends AbstractManager {
  static table = "event";

  insert(event) {
    return this.connection.query(
      `insert into ${EventManager.table} (code, prenom, age, date, heure_de_debut, heure_de_fin, lieu, telephone, mail, asso_event_id, user_id) values (? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ?)`,
      [
        event.code,
        event.prenom,
        event.age,
        event.date,
        event.heure_de_debut,
        event.heure_de_fin,
        event.lieu,
        event.telephone,
        event.mail,
        event.asso_event_id,
        event.user_id,
      ]
    );
  }

  getEventUserId(id) {
    return this.connection.query(`SELECT * FROM event WHERE user_id = ?`, [id]);
  }

  // update(event) {
  //   return this.connection.query(
  //     `update ${UserManager.table} set prenom = ? where id = ?`,
  //     [user.prenom, user.id]
  //   );
  // }
}

module.exports = EventManager;
