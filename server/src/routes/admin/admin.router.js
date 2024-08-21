const express = require("express");
const { adminLogin } = require("./admin.controller");

const adminRouter = express.Router();
adminRouter.post("./login", adminLogin);

module.exports = adminRouter;