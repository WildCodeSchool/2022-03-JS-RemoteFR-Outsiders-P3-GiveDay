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

  updateToken(tokenArray) {
    return this.connection.query(
      `UPDATE ${UserManager.table} SET tokenpwd = ? WHERE email = ?`,
      tokenArray
    );
  }

  getTokenExists(tokenjwt) {
    return this.connection.query(
      `SELECT * FROM user WHERE tokenpwd = ?`,
      tokenjwt
    );
  }

  unsetToken(tokenjwt) {
    return this.connection.query(
      `UPDATE ${UserManager.table} SET tokenpwd = null WHERE tokenpwd = ?`,
      tokenjwt
    );
  }
}

module.exports = UserManager;
