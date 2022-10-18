const path = require('path');
const fs = require('fs');

module.exports = (app) => {

    app.get('api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
    });


    app.post('api/notes', (req, res) => {
    let note = fs.readFile('db/db.json');
    note = JSON.parse(note);
    res.json(note);
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        };
    note.push(newNote);
    fs.writeFile('db/db.json', JSON.stringify(note));
    res.json(note);

    });
}