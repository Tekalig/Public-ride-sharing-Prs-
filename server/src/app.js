const express = require("express");
const cors = require("cors");

const {passengerRouter}  = require("./routes/passenger/passenger.router")
// init express app
const app = express();
// allowing cross origin resource service
app.use(
  cors({
    origin: "http://localhost:5173/",
  })
);
app.use(express.json());

// route to passenger 
app.use(passengerRouter)


module.exports = app;