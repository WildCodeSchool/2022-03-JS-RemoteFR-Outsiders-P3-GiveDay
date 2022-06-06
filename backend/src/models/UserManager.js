const UserAbstractManager = require("./UserAbstractManager");

class UserManager extends UserAbstractManager {
  static table = "user";

  // insert(user) {
  //   return this.connection.query(
  //     `insert into ${UserManager.table} (prenom) values (?)`,
  //     [user.prenom]
  //   );
  // }

  // update(user) {
  //   return this.connection.query(
  //     `update ${UserManager.table} set prenom = ? where id = ?`,
  //     [user.prenom, user.id]
  //   );
  // }
}

module.exports = UserManager;
