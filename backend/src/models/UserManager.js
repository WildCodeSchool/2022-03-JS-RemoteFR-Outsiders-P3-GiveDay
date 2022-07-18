const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  getUserByEmail(email) {
    return this.connection.query(`SELECT * FROM user WHERE email = ?`, [email]);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (prenom, nom, email, password, role) values (?, ?, ?, ?, ?)`,
      [user.prenom, user.nom, user.email, user.password, user.role]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set prenom = ?, nom= ?, email= ?, adresse= ?, ville= ?, telephone= ?, codePostal= ?, pays= ?, password= ? where id = ?`,
      [
        user.prenom,
        user.nom,
        user.email,
        user.adresse,
        user.ville,
        user.telephone,
        user.codePostal,
        user.pays,
        user.password,
        user.id,
      ]
    );
  }

  getCount() {
    return this.connection.query(
      `SELECT Count(*) as count FROM ${UserManager.table} `
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
      `SELECT id, prenom, nom, email, role, tokenpwd FROM user WHERE tokenpwd = ?`,
      tokenjwt
    );
  }

  unsetToken(id) {
    return this.connection.query(
      `UPDATE ${UserManager.table} SET tokenpwd = '' WHERE id = ?`,
      [id]
    );
  }

  updatePassword(user) {
    return this.connection.query(
      `UPDATE ${UserManager.table} SET password = ? WHERE id = ?`,
      [user.password, user.id]
    );
  }
}

module.exports = UserManager;
