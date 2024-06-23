const express = require("express");
const app = express();
const { getNotes } = require("./functions");

app.use(express.json());

app.get("/", async (req, res) => {
  const notes = await getNotes();
  res.send(notes)
});



app.get('/notes', (req, res) => {
  getNotes()
    .then((notes) => {
      res.status(200).send(notes);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: 'Failed to get notes' });
    });
});

// const server = app.listen(8080, () => {
//   // console.log("server is running right now on 8080");
// });

module.exports = app;
