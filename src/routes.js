const express = require("express");
const UsersController = require("./controllers/UsersController");
const Thought = require("./model/Thought")
const ThoughtsController = require("./controllers/ThoughtsController")
const router = express.Router();

router.post("/users", UsersController.createUser);
router.get("/user", UsersController.findAllUsers);
router.get("/user/:id", UsersController.findUser);
router.put("/users/:id", UsersController.updateUser);
router.delete("/users/:id", UsersController.deleteUser);

router.post("/thoughts", ThoughtsController.createThought);

module.exports = router;