const express = require("express");
const router = express.Router();
const {
  getBatchQueries,
  postBatchQuery,
} = require("../controllers/batchquery-ctrl");

router.get("/", getBatchQueries);
router.post("/", postBatchQuery);

module.exports = router;
