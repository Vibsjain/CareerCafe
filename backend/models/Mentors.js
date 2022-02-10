const mongoose = require("mongoose");

const MentorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: true,
  },
});

const Mentors = mongoose.model("Mentors", MentorsSchema);
module.exports = Mentors;
