const express = require("express");
const {
  AddCourse, getCourses , enrollCourse, usersEnrolled
} = require("../controllers/courseController");

const router = express.Router();

router.route("/addCourse").post(AddCourse);
router.route("/courses").get(getCourses);
router.route("/:id").post(enrollCourse).get(usersEnrolled)

module.exports = router;
