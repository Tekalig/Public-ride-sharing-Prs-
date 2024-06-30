const express = require("express");
const {postPassenger} = require("./passenger.controller")

const passengerRouter = express.Router();
passengerRouter.post("passengerLoginPage", postPassenger);

module.exports = {
    passengerRouter,
}