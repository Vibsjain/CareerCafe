const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: String,
    reciever: String,
    message: String,
    date: { type: Date, default:Date.now},
})

module.exports = mongoose.model("Message", messageSchema);