const express = require("express");
const { driverLogin, driverSignup } = require("../controllers/driver_controller");

const driverRouter = express.Router();
driverRouter.post("/login", driverLogin);
driverRouter.post("/signup", driverSignup);

module.exports = driverRouter;
