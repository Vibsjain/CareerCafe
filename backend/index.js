const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mentorRouter = require("./routes/mentor-router.js");
const JobListRouter = require("./routes/joblist-router.js");
const BatchQueryRouter = require("./routes/batchquery-router.js");
const GeneralQueryRouter = require("./routes/generalquery-router.js");
const BatchListRouter = require("./routes/batchlist-router.js");
const StudentRouter = require("./routes/student-router.js");
require("dotenv").config("/.env");
const db = require("./db/index.js");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ statusCode: 200, condition: "Ok" });
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use("/api/mentors", mentorRouter);
app.use("/api/joblist", JobListRouter);
app.use("/api/batchquery", BatchQueryRouter);
app.use("/api/generalquery", GeneralQueryRouter);
app.use("/api/batchlist", BatchListRouter);
app.use("/api/students", StudentRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
