const GeneralQuery = require("../models/GeneralQuery");

//Get All General Query
module.exports.getGeneralQueries = async (req, res) => {
  try {
    const generalQueries = await GeneralQuery.find();
    res.json(generalQueries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Post a General Query
module.exports.createGeneralQuery = async (req, res) => {
  const { name, email, phone, degree, college, passYear, companies, message } =
    req.body;
  const newGeneralQuery = new GeneralQuery({
    name,
    email,
    phone,
    degree,
    college,
    passYear,
    companies,
    message,
  });

  try {
    const generalQuery = await newGeneralQuery.save();
    res.json(generalQuery);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
