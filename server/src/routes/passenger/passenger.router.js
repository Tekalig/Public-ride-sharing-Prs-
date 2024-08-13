const express = require("express");
const { passengerLogin, passengerRegister } = require("./passenger.controller");

const passengerRouter = express.Router();
passengerRouter.post("/login", passengerLogin);
passengerRouter.post("/register", passengerRegister);

module.exports = passengerRouter;
