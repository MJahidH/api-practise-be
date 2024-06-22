const mysql = require("mysql2/promise")

const pool = mysql.createPool({

    host: "root",
    user: "",
    password: "",
    database: "",

})

module.exports = pool