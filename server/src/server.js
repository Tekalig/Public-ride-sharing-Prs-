const mysql = require("mysql");
const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 8080;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hazi@besu21",
  database: "RideSharingApp",
});

const server = http.createServer(app);

server.listen(PORT, async () => {
  await db.connect((err) => {
    if (err) {
      console.error("Database connection failed: " + err.stack);
      process.exit(1);
    }
    console.log("Connected to MySQL database.");
  });
  console.log(`Listening on port ${PORT}`);
});

module.exports = db;
