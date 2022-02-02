const mongoose = require("mongoose");

const BatchQuerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  passYear: {
    type: Number,
    required: true,
  },
  companies: {
    type: Array,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const BatchQuery = mongoose.model("BatchQuery", BatchQuerySchema);
module.exports = BatchQuery;
