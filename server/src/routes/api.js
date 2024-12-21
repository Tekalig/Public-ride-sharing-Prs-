/**
 * @fileoverview API routes configuration for the server.
 */

const express = require("express"); // Import the express module

const passengerRouter = require("./passenger_router"); // Import the passenger router
const driverRouter = require("./driver_router"); // Import the driver router
const adminRouter = require("./admin_router"); // Import the admin router

const apiRouter = express.Router(); // Create a new router instance

// Use the passenger router for routes starting with /passenger
apiRouter.use("/passenger", passengerRouter);

// Use the driver router for routes starting with /driver
apiRouter.use("/driver", driverRouter);

// Use the admin router for routes starting with /admin
apiRouter.use("/admin", adminRouter);

module.exports = apiRouter; // Export the configured router