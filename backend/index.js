const express = require('express');
const cors = require('cors');
require('dotenv').config("/.env");
const messageRouter = require('./routes/message-routes');
const userRouter = require("./routes/user-routes");
const db = require("./db/index.js");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;


app.get("/", (req, res) => {
    res.json({ statusCode: 200, condition: "Ok" });
})

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use("/api/messages", messageRouter);
app.use("/api/user", userRouter);
app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
