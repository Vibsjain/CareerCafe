const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config("../.env");

module.exports.registerUser = async (req, res) => {
    let { name, email, password } = req.body;
    try {
        let userCheck = await User.findOne({ email: email });
        if (userCheck) {
            res.status(400).send("User Already Exists");
            return;
        }

        let salt = await bcrypt.genSalt(10);
        let secPass = await bcrypt.hash(password, salt);

        const user = new User({ name: name, email: email, password: secPass });
        await user.save().then(() => {
            res.status(200).send({message:"User Registration successfully"});
        }).catch((error) => {
            res.status(502).send("User Registration Failed");
        })
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports.loginUser = async (req, res) => {
    let { email, password } = req.body;
    try {
        let userCheck = await User.findOne({ email: email });
        if (!userCheck) {
            res.status(404).json({ message: "No Such User Exists" });
            return;
        }

        const passCheck = await bcrypt.compare(password, userCheck.password);
        if (!passCheck) {
            res.status(404).json({ message: "Wrong Password" });
            return;
        }


        const data = { id: userCheck._id };
        const token = jwt.sign(data, process.env.TOKEN_SECRET);
        res.header("auth-token",token).json({ message: "Login Successful", token: token });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}