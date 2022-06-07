const express = require("express");

const { ItemController, UserController } = require("./controllers");

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

module.exports = router;
