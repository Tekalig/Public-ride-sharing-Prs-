const express = require("express");
const cors = require("cors");

const passengerRouter = require("./routes/passenger/passenger.router");
const driverRouter = require("./routes/driver/driver.router");
const adminRouter = require("./routes/admin/admin.router");
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
app.use("/passenger", passengerRouter);
// route to driver
app.use("/driver", driverRouter);
// route to admin
app.use("/admin", adminRouter);

module.exports = app;
