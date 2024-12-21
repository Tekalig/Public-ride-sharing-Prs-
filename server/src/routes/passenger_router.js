const express = require("express");
const { passengerLogin, passengerRegister } = require("../controllers/passenger_controller");

const passengerRouter = express.Router();
passengerRouter.post("/login", passengerLogin);
passengerRouter.post("/register", passengerRegister);

module.exports = passengerRouter;
