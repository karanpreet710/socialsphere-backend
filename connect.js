const mysql = require("mysql2");
const dotenv = require('dotenv');
dotenv.config({
    path:'./backend/.env'
});

const db = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
})

db.getConnection((err,conn)=>{
    if(err) console.log(err);
    console.log("Connected successfully");
})

module.exports = db.promise();