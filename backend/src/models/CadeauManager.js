const AbstractManager = require("./AbstractManager");

class CadeauManager extends AbstractManager {
  static table = "cadeau";

  insert(cadeau) {
    return this.connection.query(
      `insert into ${CadeauManager.table} (titre, site_url, event_id) values (?, ?, ?)`,
      [cadeau.titre, cadeau.site_url, cadeau.event_id]
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
