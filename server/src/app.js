/**
 * @fileoverview Main application file for setting up the Express server.
 */

const express = require("express"); // Importing the express module
const cors = require("cors"); // Importing the cors module for handling Cross-Origin Resource Sharing
const bodyParser = require("body-parser"); // Importing the body-parser module for parsing request bodies

const apiRouter = require("./routes/api"); // Importing the API routes

// Initialize the Express application
const app = express();

/**
 * Middleware to enable Cross-Origin Resource Sharing (CORS)
 * @see {@link https://expressjs.com/en/resources/middleware/cors.html}
 */
app.use(
  cors({
    origin: "http://localhost:5173/", // Allowing requests from this origin
  })
);

/**
 * Middleware to parse incoming JSON requests
 * @see {@link https://expressjs.com/en/api.html#express.json}
 */
app.use(express.json());

/**
 * Middleware to parse incoming request bodies in a middleware before your handlers, available under the req.body property
 * @see {@link https://www.npmjs.com/package/body-parser}
 */
app.use(bodyParser.json());

/**
 * Mount the API router at the /api path
 * @see {@link ./routes/api}
 */
app.use("/api", apiRouter);

module.exports = app; // Export the app module