const JobList = require("../models/JobList");

//Get all Jobs
module.exports.getJobs = async (req, res) => {
  try {
    const jobs = await JobList.find();
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Post a Job
module.exports.createJob = async (req, res) => {
  const { title, logo, desc, criteria, link } = req.body;
  const newJob = new JobList({
    company,
    title,
    logo,
    desc,
    criteria,
    link,
  });

  try {
    const job = await newJob.save();
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Delete a Job
module.exports.deleteJob = async (req, res) => {
  try {
    const job = await JobList.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: "Job not found" });
    }

    await job.remove();

    res.json({ msg: "Job removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Update a Job
module.exports.updateJob = async (req, res) => {
  try {
    const job = await JobList.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: "Job not found" });
    }

    const { company, title, logo, desc, criteria, link } = req.body;

    job.company = company;
    job.title = title;
    job.logo = logo;
    job.desc = desc;
    job.criteria = criteria;
    job.link = link;

    await job.save();

    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
