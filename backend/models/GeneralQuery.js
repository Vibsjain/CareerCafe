const mongoose = require("mongoose");

const GeneralQuerySchema = new mongoose.Schema({
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
  message: {
    type: String,
    required: true,
  },
});

const GeneralQuery = mongoose.model("GeneralQuery", GeneralQuerySchema);
module.exports = GeneralQuery;
