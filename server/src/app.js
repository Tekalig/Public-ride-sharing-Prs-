const express = require("express");
const cors = require("cors");

const {passengerRouter}  = require("./routes/passenger/passenger.router")

const app = express();
app.use(cors());
app.use(express.json());

// route to passenger 
app.use(passengerRouter)


module.exports = app;