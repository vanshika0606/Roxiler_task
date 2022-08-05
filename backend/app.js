const express= require('express');

const app = express();


app.use(express.json());

const user = require("./routes/userRoute.js");
const course = require("./routes/courseRoute.js");

app.use("/", user);
app.use("/", course);

module.exports = app;