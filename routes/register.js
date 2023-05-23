const express=require('express');
const bodyparser=require('body-parser');
const register  = require('../controllers/register');
const registerRoute=express();
registerRoute.use(bodyparser.json())

registerRoute.post("/register",register)

module.exports=registerRoute;