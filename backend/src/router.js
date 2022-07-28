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
 * @api {get} /api/users/:id/events permet de récupérer les infos des évènements de l'user connected
 * @api {get} /api/events/code/:code permet de récupérer les infos d'un évènement avec son code
 * @api {put} /api/events/:id permet de modifier les infos d'un évènement avec son id (cagnottes)
 * @api {post} /api/createEvent permet d'ajouter un évènement dans la base de données table event
 */
router.get("/api/events", EventController.browse);
router.get("/api/users/:id/events", EventController.myEvents);
router.get("/api/events/code/:code", EventController.jointEvent);
router.put("/api/events/:id", EventController.edit);
router.post("/api/createEvent", EventController.add);

/**
 * @desc Cadeau routes
 *
 * @api {post} /api/cadeaux/add permet d'ajouter un cadeau à la bdd
 * @api {get} /api/cadeaux/event/:id permet de récuperer la liste des cadeaux d'un event
 * @api {delete} /api/cadeaux/delete/:id permet de supprimer les cadeaux liés à un évènement
 */
router.post("/api/cadeaux/add", CadeauController.add);
router.get("/api/cadeaux/event/:id", CadeauController.getList);
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
router.get("/Blog/articleDetail/:id", ArticleController.read);
router.get("/api/tag", ArticleController.tag);
router.get("/api/tag/:id", ArticleController.readTag);
router.get("/api/new-article", ArticleController.newArticle);
// router.put("/api/article/:id", ArticleController.edit);

router.post("/api/article/add", ArticleController.add);
router.delete("/api/article/delete/:id", ArticleController.delete);

/**
 * @desc Reset Password Routes
 *

 * @api {get} /api/reset/isemailexists/:id   pour s'assurer que le mail est dans la bdd
 * @api {get} /api/reset/checktoken/:id vérifie que le token dans le mail est le même que dans la bdd
 * @api {get} /api/reset/updatepassword/:id si lo token de la bdd et le mail sont identiques, mise à jour de mp

 */
router.get("/api/reset/isemailexists/:id", ResetController.isEmailExists);
router.get("/api/reset/checktoken/:id", ResetController.isTokenExists);
router.put("/api/reset/updatepassword/:id", ResetController.updatePassword);

/**
 * @desc Users routes
 *
 * @api {get} /api/users Récupère tous les utilisateurs
 * @api {get} /api/users/:id Récupère un utilisateur
 * @api {put} /api/users/update/:id Update les infos de l'utilisateur (sur le compte privé de l'uilisateur)
 * @api {delete} /api/users/delete/:id Supprime un utilisateur de la base de données
 * @api {get} /api/users/count Récupère le nombre total d'utilisateurs
 * @api {put} /api/users/roleUpdate/:id Update le role nom et prénom de l'utilisateur (sur le dashboard de l'admin)

 */
router.get("/api/users", UserController.browse);
router.get("/api/users/:id", UserController.read);
router.put("/api/users/update/:id", UserController.edit);
router.delete("/api/users/delete/:id", UserController.delete);
router.get("/api/admin/count", UserController.count);
router.put("/api/admin/roleUpdate/:id", UserController.roleUpdate);

/**
 * @desc Asso routes
 *
 * @api {get} /api/Asso Récupère tous les associations
 * @api {get} /api/Asso/:id Récupère tout d'une association
 */

router.get("/api/asso", AssoController.browse);
router.get("/api/asso/:id", AssoController.read);

module.exports = router;
