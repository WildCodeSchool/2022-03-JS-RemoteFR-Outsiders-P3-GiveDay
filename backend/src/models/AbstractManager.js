class AbstractManager {
  constructor(connection, table) {
    this.connection = connection;
    this.table = table;
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findId() {
    return this.connection.query(
      `SELECT * FROM article WHERE id = (SELECT MAX(id) FROM article); `
    );
  }

  findTag() {
    return this.connection.query(`SELECT * FROM tag  `);
  }

  findTagFiltre(tag) {
    return this.connection.query(
      `SELECT * FROM article  INNER JOIN article_has_tag ON  article_has_tag.article_id = article.id   WHERE article_has_tag.tag_id = ${tag}`
    );
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = AbstractManager;
