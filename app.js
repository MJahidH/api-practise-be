const express = require("express");
const app = express();
const { getNotes } = require("./functions");

app.use(express.json());

app.get("/notes", async (req, res) => {
  const notes = await getNotes();
  res.send(notes)
});



app.get("/notes", async (req, res) => {
  getNotes().then(() => {
    res.send(notes)
  }).catch((err)=> {
    console.error(err)
  })
  
});

// const server = app.listen(8080, () => {
//   // console.log("server is running right now on 8080");
// });

module.exports = app;
