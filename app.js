const express = require("express");
const app = express();
const { getNotes } = require("./functions");

app.use(express.json());

app.get("/notes", async (req, res) => {
  const notes = await getNotes();
  res.send(notes);
});

const server = app.listen(8080, () => {
  // console.log("server is running right now on 8080");
});

module.exports = {app,server};
