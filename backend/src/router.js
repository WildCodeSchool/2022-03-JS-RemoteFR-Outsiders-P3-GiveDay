const express = require("express");

const {
  AuthController,
  EventController,
  CadeauController,
  UserController,
  ArticleController,
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
 * @api {post}
 * @api {post}
 * @api {get}
 */
router.get("/api/events", EventController.browse);
router.get("/api/events/:id", EventController.read);
router.put("/api/events/:id", EventController.edit);
router.post("/api/events", EventController.add);
router.delete("/api/events/:id", EventController.delete);

/**
 * @desc Cadeau routes
 *
 * @api {post}
 * @api {post}
 * @api {get}
 */
router.get("/api/cadeaux", CadeauController.browse);
router.get("/api/cadeaux/:id", CadeauController.read);
router.put("/api/cadeaux/:id", CadeauController.edit);
router.post("/api/cadeaux", CadeauController.add);
router.delete("/api/cadeaux/:id", CadeauController.delete);

/**
 * @desc Article routes
 *
 * @api {get} /api/article   Récupérer tous les articles de la base de données (table article)
 * @api {get} /api/new-article   Récupérer le dernier article ?????
 * @api {delete} /api/article/delete/:id    Supprimer un article
 */
router.get("/api/articles", ArticleController.browse);
router.get("/api/new-article", ArticleController.newArticle);
// router.get("/api/article/:id", ArticleController.read);
// router.put("/api/article/:id", ArticleController.edit);
// router.post("/api/article", ArticleController.add);
router.delete("/api/article/delete/:id", ArticleController.delete);

router.get("/api/users", UserController.browse);
router.delete("/api/users/delete/:id", UserController.delete);
module.exports = router;
