const express = require("express");

const {
  AuthController,
  EventController,
  CadeauController,
  UserController,
  ArticleController,
  ResetController,
  AssoController,
} = require("./controllers");

const router = express.Router();

/**
 * @desc Auth routes
 *
 * @api {post} /auth/register Register a new user
 * @api {post} /auth/login Login a user
 * @api {get} /auth/logout Logout a user
 */

router.post("/api/auth/register", AuthController.register);
router.post("/api/auth/login", AuthController.login);
router.get("/api/auth/logout", AuthController.logout);

/**
 * @desc Events routes
 *
 * @api {get} /api/events permet de voir tous les évènements enregistrés dans la bdd
 * @api {get} /api/events/:id permet de récupérer les infos d'un évènement
 * @api {post} /api/createEvent permet d'ajouter un évènement dans la base de données table event
 */
router.get("/api/events", EventController.browse);
router.get("/api/events/:id", EventController.read);
// router.put("/api/events/:id", EventController.edit);
router.post("/api/createEvent", EventController.add);
// router.delete("/api/events/:id", EventController.delete);

/**
 * @desc Cadeau routes
 *
 * @api {post} /api/cadeaux
 * @api {delete}
 * @api {get}
 */
router.get("/api/cadeaux", CadeauController.browse);
router.get("/api/cadeaux/:id", CadeauController.read);
// router.put("/api/cadeaux/:id", CadeauController.edit);
router.post("/api/cadeaux/add", CadeauController.add);
router.delete("/api/cadeaux/delete/:id", CadeauController.delete);

/**
 * @desc Article routes
 *
 * @api {get} /api/article   Récupérer tous les articles de la base de données (table article)
 * @api {get} /api/new-article   Récupérer le dernier article ?????
 * @api {delete} /api/article/delete/:id    Supprimer un article
 */
router.get("/api/articles", ArticleController.browse);
router.get("/api/articles/:id", ArticleController.read);
router.get("/api/tag", ArticleController.tag);
router.get("/api/tag/:id", ArticleController.readTag);
router.get("/api/new-article", ArticleController.newArticle);
// router.put("/api/article/:id", ArticleController.edit);
// router.post("/api/article", ArticleController.add);
router.delete("/api/article/delete/:id", ArticleController.delete);

/**
 * @desc Reset Password Routes
 *
 * @api {get} /api/reset/isemailexists/:id   ------Entrer la description-----
 * @api {get} /api/resetpassword-change/:id  ------Entrer la description-----
 */
router.get("/api/reset/isemailexists/:id", ResetController.isEmailExists);
router.get("/api/resetpassword-change/:id", ResetController.compareToken);

/**
 * @desc Users routes
 *
 * @api {get} /api/users Récupère tous les utilisateurs
 * @api {get} /api/users/:id Récupère un utilisateur
 * @api {put} /api/users/update/:id Update l'utilisateur (pour le moment juste le role)
 * @api {delete} /api/users/delete/:id Supprime un utilisateur de la base de données
 * @api {get} /api/users/count Récupère le nombre total d'utilisateurs
 
 */
router.get("/api/users", UserController.browse);
router.get("/api/users/:id", UserController.read);
router.put("/api/users/update/:id", UserController.edit);
router.delete("/api/users/delete/:id", UserController.delete);
router.get("/api/count", UserController.count);

/**
 * @desc Asso Routes
 *
 * @api {get} /api/users Récupère toutes les associations

 */
router.get("/api/asso", AssoController.browse);

module.exports = router;
