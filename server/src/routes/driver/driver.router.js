const express = require("express");
const { driverLogin, driverRegister } = require("./driver.controller");

const driverRouter = express.Router();
driverRouter.post("/login", driverLogin);
driverRouter.post("/register", driverRegister);

module.exports = driverRouter;
