const pool = require("./pool");
const data = require("./data");
const {
  convertTimestampToDate,
  createRef,
  formatComments,
} = require("./utils");

const { format } = require("mysql2");

const seed = (notes) => {
  return pool
    .query(`DROP TABLE IF EXISTS notes;`)
    .then(() => {
      return pool.query(`
        CREATE TABLE notes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);`);
    })
    .then(() => {
      const values = notes.map(({ title, contents }) => {
        return [title, contents];
      });

      const insertDataQuery = pool.query(
        `INSERT INTO notes (title, contents)
         VALUES ?`,
        [values]
      );
      return insertDataQuery;
    });
};

module.exports = seed;
