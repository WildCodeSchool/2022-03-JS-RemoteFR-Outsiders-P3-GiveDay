const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  getUserByEmail(email) {
    return this.connection.query(`SELECT * FROM user WHERE email = ?`, [email]);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (prenom, nom, email, password, role) values (?, ?, ?, ?, "user")`,
      [user.prenom, user.nom, user.email, user.password]
    );
  }

  // update(user) {
  //   return this.connection.query(
  //     `update ${UserManager.table} set prenom = ? where id = ?`,
  //     [user.prenom, user.id]
  //   );
  // }
}

module.exports = UserManager;
