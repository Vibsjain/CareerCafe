const express = require('express');
const router = express.Router();
const { getMessage,sendMessage,deleteMessage} = require("../controllers/message-ctrl")


router.get("/", getMessage);
router.post("/", sendMessage);
router.delete("/:id", deleteMessage);
module.exports = router;