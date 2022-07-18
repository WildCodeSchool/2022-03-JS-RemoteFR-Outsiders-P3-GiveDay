const AbstractManager = require("./AbstractManager");

class AssoManager extends AbstractManager {
  static table = "asso";
  getAssoById(id) {
    return this.connection.query(`SELECT * FROM asso WHERE id = ?`, [id]);
  }
}

module.exports = AssoManager;
