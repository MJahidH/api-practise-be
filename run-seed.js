const seed = require('./seed.js');
const pool = require("./pool.js")
const data = require("./data.js")

const runSeed = () => {
  return seed(data)
  .then(() => {
    console.log("database has been seeded")
  })
  .catch((err) => {
    console.log("error seeding database",err)
  })
  .finally(() => {
    pool.end()
  })
};

runSeed();
