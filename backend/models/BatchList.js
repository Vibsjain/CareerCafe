const mongoose = require("mongoose");

const BatchListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const BatchList = mongoose.model("BatchList", BatchListSchema);
module.exports = BatchList;
