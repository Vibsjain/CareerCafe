const express = require("express");
const router = express.Router();
const {
  getBatch,
  createBatch,
  deleteBatch,
  updateBatch,
} = require("../controllers/batchlist-ctrl");

// Get All Batch
router.get("/", getBatch);
router.post("/", createBatch);
router.delete("/:id", deleteBatch);
router.put("/:id", updateBatch);

module.exports = router;
