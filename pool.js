const mysql = require("mysql2/promise")
const dotenv = require("dotenv");
dotenv.config();




const pool = mysql.createPool({

    host: process.env.HOST,
    user: "",
    password: "",
    database: "",

})

module.exports = pool