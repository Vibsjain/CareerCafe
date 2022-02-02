const mongoose = require("mongoose");

const JobListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  criteria: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const JobList = mongoose.model("JobList", JobListSchema);
module.exports = JobList;
