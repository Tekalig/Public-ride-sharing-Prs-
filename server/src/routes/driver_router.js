const express = require("express");
const { driverLogin, driverRegister } = require("../controllers/driver_controller");

const driverRouter = express.Router();
driverRouter.post("/login", driverLogin);
driverRouter.post("/register", driverRegister);

module.exports = driverRouter;
