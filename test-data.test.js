const request = require("supertest");
const {app,server} = require("./app.js");
const { getNotes } = require("./functions.js");
const pool = require("./pool.js");
const seed = require("./seed.js");
const data = require("./data.js");

beforeEach(() => {
  return seed(data).catch((err) => {
    console.error(err, "this is before each block");
  });
});

afterAll(() => {
  return pool.end().then(() => {
    new Promise((resolve) => {
      server.close(resolve);
    });
  });
});

describe("GET notes", () => {
  test("this is the first test", () => {
    return request(app)
      .get("/notes")
      .expect(200)
      .then((res) => {
        const arrayOfNotes = res.body;
        // console.log(arrayOfNotes)
      });
  });
});
