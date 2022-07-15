const AbstractManager = require("./AbstractManager");

class CadeauManager extends AbstractManager {
  static table = "cadeau";

  insert(cadeau) {
    return this.connection.query(
      `insert into ${CadeauManager.table} (titre, url_site, event_id) values (?, ?, ?)`,
      [cadeau.titre, cadeau.url_site, cadeau.event_id]
    );
  }

  deleteEvent(id) {
    return this.connection.query(
      `delete from ${this.table} where event_id = ${id}`,
      id
    );
  }
  // update(user) {
  //   return this.connection.query(
  //     `update ${UserManager.table} set prenom = ? where id = ?`,
  //     [user.prenom, user.id]
  //   );
  // }
}

module.exports = CadeauManager;
