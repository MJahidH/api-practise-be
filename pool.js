const mysql = require("mysql2/promise")
const dotenv = require("dotenv");
dotenv.config();




const pool = mysql.createPool({

    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,

})

module.exports = pool