const Mentor = require("../models/Mentors");

// @route   GET api/mentors
// @desc    Get all mentors
// @access  Public
module.exports.getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports.createMentor = async (req, res) => {
  const { name, logo, company, userImage } = req.body;
  const newMentor = new Mentor({
    name,
    logo,
    company,
    userImage,
  });

  try {
    const mentor = await newMentor.save();
    res.json(mentor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
