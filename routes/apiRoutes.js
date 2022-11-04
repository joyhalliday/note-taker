const path = require("path");
const fs = require("fs");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});

router.post("/notes", (req, res) => {
  let note = fs.readFile("../db/db.json");
  note = JSON.parse(note);
  let newNote = {
    title: req.body.title,
    text: req.body.text,
  };
  note.push(newNote);
  fs.writeFile("../db/db.json", JSON.stringify(note));
  res.json(note);
});

module.exports = router