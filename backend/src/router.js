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

router.get("/api/user", UserController.browse);
router.get("/api/user/:id", UserController.read);
router.put("/api/user/:id", UserController.edit);
router.post("/api/user", UserController.add);
router.delete("/api/user/:id", UserController.delete);

router.get("/api/event", EventController.browse);
router.get("/api/event/:id", EventController.read);
router.put("/api/event/:id", EventController.edit);
router.post("/api/event", EventController.add);
router.delete("/api/event/:id", EventController.delete);

router.get("/api/cadeau", CadeauController.browse);
router.get("/api/cadeau/:id", CadeauController.read);
router.put("/api/cadeau/:id", CadeauController.edit);
router.post("/api/cadeau", CadeauController.add);
router.delete("/api/cadeau/:id", CadeauController.delete);

module.exports = router;
