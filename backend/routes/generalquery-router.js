const express = require("express");
const router = express.Router();
const {
  getGeneralQueries,
  createGeneralQuery,
} = require("../controllers/generalquery-ctrl");

router.get("/", getGeneralQueries);
router.post("/", createGeneralQuery);

module.exports = router;
