const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
