const pool = require("./pool")

module.exports.getNotes = async function () {
    const [rows] = await pool.query("SELECT * FROM notes");
    return rows;
  };