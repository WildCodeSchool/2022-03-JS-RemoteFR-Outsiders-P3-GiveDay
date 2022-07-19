const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  static table = "article";

  insert(article) {
    return this.connection.query(
      `insert into ${ArticleManager.table} (titre, date, texte, image) values (? , ? , ? , ? )`,
      [article.titre, article.date, article.texte, article.image]
    );
  }
}

module.exports = ArticleManager;
