const express = require("express");
const router = express.Router();
const {
  getBatches,
  createBatch,
  deleteBatch,
  updateBatch,
} = require("../controllers/batchlist-ctrl");

// Get All Batch
router.get("/", getBatches);
router.post("/", createBatch);
router.delete("/:id", deleteBatch);
router.put("/:id", updateBatch);

module.exports = router;
