const express= require('express');

const app = express();


app.use(express.json());

const delivery = require("./routes/MilkRoute.js");


app.use("/", delivery);


module.exports = app;