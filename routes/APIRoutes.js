const app = require("express").Router();
const fs = require("fs");
const uniqid = require('uniqid');

app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, dbNotes) => {
        if(err) throw err;
        return res.json(JSON.parse(dbNotes));
    });
});

app.post("/api/notes", (req, res) => {
    let note = {
        id: uniqid('note'),
        title: req.body.title,
        text: req.body.text
    };
    fs.readFile("./db/db.json", (err, dbNotes) => {
        if (err) throw err;
        let noteList = JSON.parse(dbNotes);
        noteList.push(note);
        fs.writeFile("./db/db.json", JSON.stringify(noteList), (err) => {
            if (err) throw err;
            return res.json(noteList);
        });
    });
});

app.get("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    let noteList = JSON.parse(dbNotes);
      for (let i = 0; i < noteList.length; i++) {
    if (chosen === noteList[i].routeName) {
      return res.json(noteList[i]);
    }
}
});

// app.delete('/api/notes/:id', (req, res) => {
//     const chosenId = req.params.id;
//     for (let i = 0; i < noteList.length; i++) {
//         if (noteList[i].id === chosen) {
//             noteList.splice(i, 1);
//         }
//     };
//     writeNotes(noteList);
//     res.end();
// });

module.exports = app;