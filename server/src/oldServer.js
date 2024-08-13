const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hazi@besu21",
  database: "RideSharingApp",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    process.exit(1);
  }
  console.log("Connected to MySQL database.");
});

// Passenger registration
app.post("/PassengerRegisterPage", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const sql =
      "INSERT INTO users (user_name, email, password, phone_Number) VALUES (?, ?, ?, ?)";
    const values = [
      req.body.name,
      req.body.email,
      hashedPassword,
      req.body.phoneNumber,
    ];

    db.query(sql, values, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Database error");
      }
      return res.status(200).json({ token_id: data.insertId });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
});

// Passenger login
app.post("/PassengerLoginPage", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Database error");
    }
    if (data.length > 0) {
      const user = data[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        return res
          .status(200)
          .json({ message: "Login successful", token_id: user.user_id });
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    } else {
      return res.status(401).json({ message: "Invalid email" });
    }
  });
});

// Driver registration
app.post("/DriverRegisterPage", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const {
      name,
      email,
      driver_license,
      license_plate,
      car_model,
      carYear,
      numberOfSite,
    } = req.body;

    // Insert into drivers table
    const sqlDrivers =
      "INSERT INTO drivers (driver_name, email, password, driver_license) VALUES (?, ?, ?, ?)";
    const driverValues = [name, email, hashedPassword, driver_license];

    db.query(sqlDrivers, driverValues, (err, result) => {
      if (err) {
        console.error("Error inserting into drivers table:", err);
        return res.status(500).json("Database error");
      }
      const driver_id = result.insertId; // Get the driver_id from the result

      // Insert into carinfo table
      const sqlCarInfo =
        "INSERT INTO carinfo (driver_id, car_model, carYear, license_plate, numberOfSite) VALUES (?, ?, ?, ?, ?)";
      const carInfoValues = [
        driver_id,
        car_model,
        carYear,
        license_plate,
        numberOfSite,
      ];

      db.query(sqlCarInfo, carInfoValues, (err, result) => {
        if (err) {
          console.error("Error inserting into carinfo table:", err);
          return res.status(500).json("Database error");
        }

        return res.status(200).json({
          message: "Driver registered successfully",
          token_id: driver_id,
        });
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
});

// Driver login
app.post("/DriverLoginPage", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM drivers WHERE email = ?";

  db.query(sql, [email], async (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Database error");
    }
    if (data.length > 0) {
      const driver = data[0];
      const isPasswordValid = await bcrypt.compare(password, driver.password);
      if (isPasswordValid) {
        return res
          .status(200)
          .json({ message: "Login successful", token_id: driver.driver_id });
      } else {
        return res.status(401).json({ message: "Invalid email or password" });
      }
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  });
});

// Endpoint to fetch ride requests
app.get("/ride-request", (req, res) => {
  const query =
    "SELECT rr.user_id AS id, u.user_name AS passangerName, rr.s_address, rr.d_address, rr.numberOfSite FROM riderequest rr JOIN users u ON rr.user_id = u.user_id;";
  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
});

// Ride history
app.get("/ride-history", (req, res) => {
  const query =
    "SELECT rh.ride_id, rh.s_address, rh.d_address, u.user_name, ci.car_model AS car, p.amount AS fare, p.pay_method AS paymentMethod, rh.status, rh.travel_date FROM ridehistory rh INNER JOIN users u ON rh.user_id = u.user_id INNER JOIN carinfo ci ON rh.driver_id = ci.driver_id INNER JOIN payment p ON rh.ride_id = p.ride_id;";
  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
});

// Ride listings
app.get("/ride-listings", (req, res) => {
  const query =
    "SELECT rr.user_id AS id, u.user_name AS passangerName, rr.s_address, rr.d_address, rr.numberOfSite FROM riderequest rr JOIN users u ON rr.user_id = u.user_id;";
  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
});

// Create ride request
app.post("/createRideRequest", (req, res) => {
  const { user_id, s_address, d_address, numberOfSite } = req.body;
  const insertRequestSql =
    "INSERT INTO riderequest (user_id, s_address, d_address, numberOfSite) VALUES (?, ?, ?, ?)";

  db.query(
    insertRequestSql,
    [user_id, s_address, d_address, numberOfSite],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Database error" });
      }
      res.status(200).json({ message: "Ride request created successfully" });
    }
  );
});

// Decline accept ride requests
app.delete("/ride-requests-deletes", async (req, res) => {
  const user_id = req.body.requestId;
  const status = req.body.status;
  const driver_id = req.body.driver_id;
  const deleteQuery = "DELETE FROM riderequest WHERE user_id = ?";
  const updateQuery =
    "UPDATE ridehistory SET status = ?, driver_id = ? WHERE user_id = ?";

  db.query(deleteQuery, [user_id], (error) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    db.query(updateQuery, [status, driver_id, user_id], (error) => {
      if (error) {
        return res.status(500).json({ error: "Database query error" });
      }
      res.json("Delete is successful");
    });
  });
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
