const Student = require("../models/students");

//Get All Students
module.exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Create A Student
module.exports.createStudent = async (req, res) => {
  const { name, company, image } = req.body;
  const newStudent = new Student({
    name,
    company,
    image,
  });

  try {
    const student = await newStudent.save();
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
