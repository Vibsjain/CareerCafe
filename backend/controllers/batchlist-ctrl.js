const BatchList = require("../models/BatchList");

//Get All Batch
module.exports.getBatches = async (req, res) => {
  try {
    const batches = await BatchList.find();
    res.json(batches);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Create A batch
module.exports.createBatch = async (req, res) => {
  const { name, start, end, duration, desc } = req.body;
  const newBatch = new BatchList({
    name,
    start,
    end,
    duration,
    desc,
  });

  try {
    const batch = await newBatch.save();
    res.json(batch);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Delete A Batch
module.exports.deleteBatch = async (req, res) => {
  try {
    const batch = await BatchList.findById({ _id: req.params.id });

    if (!batch) {
      return res.status(404).json({ msg: "Batch not found" });
    }

    await batch.remove();
    res.json({ msg: "Batch removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Edit a Batch
module.exports.updateBatch = async (req, res) => {
  try {
    const batch = await BatchList.findById(req.params.id);

    if (!batch) {
      return res.status(404).json({ msg: "Batch not found" });
    }
    const { name, start, end, duration, desc } = req.body;

    batch.name = name;
    batch.start = start;
    batch.end = end;
    batch.duration = duration;
    batch.desc = desc;

    await batch.save();

    res.json(batch);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
