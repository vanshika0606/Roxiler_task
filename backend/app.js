const express= require('express');
const db= require("./database/db")

const connectDatabase = require("./database/seed.js");
const app = express();



app.use(express.json());
connectDatabase();
// db();
const booking = require("./routes/BookingRoute")

app.use("/", booking);


module.exports = app;