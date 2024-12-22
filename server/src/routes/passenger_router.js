/**
 * @fileoverview Defines the routes for passenger-related operations.
 * @module routes/passenger_router
 */

const express = require("express"); // Import the express module
const { passengerLogin, passengerSignup } = require("../controllers/passenger_controller"); // Import passenger controller functions

const passengerRouter = express.Router(); // Create a new router instance

/**
 * Route for passenger login.
 * @name post/login
 * @function
 * @memberof module:routes/passenger_router
 * @inner
 * @param {string} path - Express path
 * @param {function} passengerLogin - Controller function for passenger login
 */
passengerRouter.post("/login", passengerLogin);

/**
 * Route for passenger registration.
 * @name post/signup
 * @function
 * @memberof module:routes/passenger_router
 * @inner
 * @param {string} path - Express path
 * @param {function} passengerSignup - Controller function for passenger registration
 */
passengerRouter.post("/signup", passengerSignup);

module.exports = passengerRouter; // Export the router instance
