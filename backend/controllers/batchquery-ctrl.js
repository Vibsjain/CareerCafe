const BatchQuery = require("../models/BatchQuery");

//Get All BatchQueries
module.exports.getBatchQueries = async (req, res) => {
  try {
    const batchQueries = await BatchQuery.find();
    res.json(batchQueries);
  } catch (err) {
    res.json({ message: err });
  }
};

//Post BatchQuery
module.exports.postBatchQuery = async (req, res) => {
  const batchQuery = new BatchQuery({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    degree: req.body.degree,
    college: req.body.college,
    passYear: req.body.passYear,
    companies: req.body.companies,
    message: req.body.message,
  });
  try {
    const savedBatchQuery = await batchQuery.save();
    res.json(savedBatchQuery);
  } catch (err) {
    res.json({ message: err });
  }
};
