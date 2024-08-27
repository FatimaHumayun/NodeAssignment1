const express = require("express");

const router = express.Router();

const userController = require("../controllers/user");

router.get("/users", userController.getUsers);
router.post("/users", userController.createUsers);
router.get("/users/:id", userController.getSingleUser);
router.delete("/users/:id", userController.deleteUser);
router.put("/users/:id", userController.updateUser);

module.exports = router;
