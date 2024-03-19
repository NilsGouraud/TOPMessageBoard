const express = require("express");
const router = express.Router();

const messages = require("../model/messages.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "the message board", messages: messages });
  next();
});

module.exports = router;
