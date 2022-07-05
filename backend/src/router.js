const express = require("express");

const {
  RegisterController,
  LoginController,
  EventController,
  CadeauController,
  LogoutController,
  ArticleController,
} = require("./controllers");

const router = express.Router();

router.get("/api/auth/register", RegisterController.browse);
router.get("/api/auth/register/:id", RegisterController.read);
router.put("/api/auth/register/:id", RegisterController.edit);
router.post("/api/auth/register", RegisterController.add);
router.delete("/api/auth/register/:id", RegisterController.delete);

router.get("/api/auth/login", LoginController.browse);
router.get("/api/auth/login/:id", LoginController.read);
router.put("/api/auth/login/:id", LoginController.edit);
router.post("/api/auth/login", LoginController.browse);
router.delete("/api/auth/login/:id", LoginController.delete);

router.get("/api/auth/logout", LogoutController.logout);

router.get("/api/events", EventController.browse);
router.get("/api/events/:id", EventController.read);
router.put("/api/events/:id", EventController.edit);
router.post("/api/events", EventController.add);
router.delete("/api/events/:id", EventController.delete);

router.get("/api/cadeaux", CadeauController.browse);
router.get("/api/cadeaux/:id", CadeauController.read);
router.put("/api/cadeaux/:id", CadeauController.edit);
router.post("/api/cadeaux", CadeauController.add);
router.delete("/api/cadeaux/:id", CadeauController.delete);

router.get("/api/article", ArticleController.browse);
router.get("/api/article/:id", ArticleController.read);
router.put("/api/article/:id", ArticleController.edit);
router.post("/api/article", ArticleController.add);
router.delete("/api/article/:id", ArticleController.delete);

module.exports = router;
