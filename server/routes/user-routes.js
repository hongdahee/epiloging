const express = require("express");
const { check } = require("express-validator");

const userController = require("../controllers/user-controllers");

const router = express.Router();

router.get("/", userController.getUsers);

router.get("/:userId", userController.getUser);

router.post(
  "/signup",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 8 }),
  ],
  userController.signup
);

router.post("/login", userController.login);

router.patch("/:userId", userController.updateUser);

router.delete("/:userId", userController.deleteUser);

module.exports = router;
