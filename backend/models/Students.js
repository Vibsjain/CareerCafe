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
  logo: {
    type: String,
    required: true,
  },
  testimonial: {
    type: String,
    required: false,
  },
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
