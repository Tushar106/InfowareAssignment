const express = require('express');
const con = require('./controllers/connection')
const bodyparser = require('body-parser');
// const { register } = require('./controllers/register');
// const { update } = require('./controllers/update');

// const updateRoute=require('./routes/update')
// const registerRoute=require('./routes/register');
const update = require('./controllers/update');
const register = require('./controllers/register');
const list = require('./controllers/list');
const delete_employee = require('./controllers/delete');
const getEmployee = require('./controllers/getEmployee');

const app = express();

//Middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.get("/", function (req, res) {
    res.send("hello")
})

app.post("/update", update);
app.post("/register", register);
app.get("/list", list);
app.post("/delete", delete_employee)
app.get("/getEmployee/:id",getEmployee)

app.listen(8800, (req, res) => {
    console.log("Server Started")
})