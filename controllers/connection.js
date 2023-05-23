require('dotenv').config();
const mysql=require('mysql')
var connect=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"student"
})

module.exports=connect;