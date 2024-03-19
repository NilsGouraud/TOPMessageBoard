const express = require("express");
const router = express.Router();
const messages = require("../model/messages.js");

/* GET users listing. */
router
  .get("/", function (req, res, next) {
    res.render("form", { title: "the message form" });
  })
  .post("/", function (req, res, next) {
    console.log(req.body);
    messages.push({
      user: req.body.user,
      text: req.body.text,
      added: new Date(),
    });
    console.log(req.body);
    res.redirect("/");
    next();
  });

module.exports = router;
