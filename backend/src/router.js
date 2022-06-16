const express = require("express");

const {
  ItemController,
  UserController,
  EventController,
  CadeauController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/api/users", UserController.browse);
router.get("/api/users/:id", UserController.read);
router.put("/api/users/:id", UserController.edit);
router.post("/api/users", UserController.add);
router.delete("/api/users/:id", UserController.delete);

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
