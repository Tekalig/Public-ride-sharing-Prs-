const express = require("express");
const { adminLogin } = require("../controllers/admin_controller");

const adminRouter = express.Router();
adminRouter.post("./login", adminLogin);

module.exports = adminRouter;
