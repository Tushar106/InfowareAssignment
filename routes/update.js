const express=require('express');
const { update } = require('../controllers/update');
const bodyparser=require('body-parser');

const updateRoute=express();
updateRoute.use(bodyparser())

updateRoute.post("/update",update)

module.exports=updateRoute;