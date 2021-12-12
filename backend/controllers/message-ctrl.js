const Message = require("../models/Message.js");
const bcrypt = require("bcryptjs");

module.exports.getMessage = async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports.sendMessage = async (req, res) => {
    // const salt = await bcrypt.genSalt(10);
    // const secMessage = await bcrypt.hash(req.body.message, salt);
    // req.body.message = secMessage;
    const message = new Message(req.body);
    
    try {
        await message.save()
            .then(() => {
                console.log(req.body);
                res.status(200).json(message);
            })
            .catch((e) => {
                res.status(400).json({ error: e.message });
        })
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports.deleteMessage = async (req, res) => {
    try {
        const idx = req.params.id;
        const message = await Message.findOneAndDelete({ _id: idx});
        res.status(200).json({message:"Deleted Successfully",id:idx});
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}