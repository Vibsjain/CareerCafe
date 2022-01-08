const express = require("express");
const cors = require("cors");
const mentorRouter = require("./routes/mentor-router.js");
require("dotenv").config("/.env");
const db = require("./db/index.js");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.json({ statusCode: 200, condition: "Ok" });
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use("/api/mentors", mentorRouter);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
