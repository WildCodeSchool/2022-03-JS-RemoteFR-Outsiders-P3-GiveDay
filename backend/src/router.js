const express = require("express");

const {
  AuthController,
  EventController,
  CadeauController,
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

module.exports = router;
