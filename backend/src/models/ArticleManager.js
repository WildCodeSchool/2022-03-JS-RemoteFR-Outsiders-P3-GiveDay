const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  static table = "article";

  insert(article) {
    return this.connection.query(
      `insert into ${ArticleManager.table} (titre, date, texte, image) values (? , ? , ? , ? )`,
      [
        article.titre,
        article.date,
        article.texte,
        article.image,
        
      ]
    );
  }

  // update(article) {
  //   return this.connection.query(
  //     `update ${UserManager.table} set prenom = ? where id = ?`,
  //     [user.prenom, user.id]
  //   );
  // }
}

module.exports = ArticleManager;
