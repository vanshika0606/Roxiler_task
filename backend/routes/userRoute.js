const express = require("express");
const {
  registerUser, getUsers, loginUser, logout, coursesEnrolled
} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/users").get(getUsers);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/:id").get(coursesEnrolled)

module.exports = router;
