const express = require("express");
const router = express.Router();
const { getMentors, createMentor } = require("../controllers/mentor-ctrl.js");

router.get("/", getMentors);
router.post("/", createMentor);

module.exports = router;
