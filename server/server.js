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
    // Optionally, you can terminate the application here or handle the error in some other way
    process.exit(1);
  }
  console.log("Connected to MySQL database.");
});

// passegener registration page
app.post("/PassangerRegisterPage", (req, res) => {
  const sql =
    "INSERT INTO users (name, email, password, phone_Number) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.phoneNumber, // Ensure consistent naming
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Database error");
    }
    return res.status(200).json(data);
  });
});
// for the passenger Login page
app.post("/PassangerLoginPage", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 8);

  db.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Database error");
    }
    if (data.length > 0) {
      return res
        .status(200)
        .json({ message: "Login successful", user: data[0] });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // const user_id = data.insertId; // Get the inserted user's ID
    // const token = jwt.sign({ id: user_id }, "supersecret", {
    //   expiresIn: 86400,
    // });

    // return res.status(200).json({ auth: true, token, user_id });
  });
});

//--------------------------------
app.post("/DriverRegisterPage", (req, res) => {
  const {
    name,
    email,
    password,
    driver_license,
    license_plate,
    car_model,
    carYear,
    numberOfSite,
    preferences,
  } = req.body;

  // Insert into drivers table
  const sqlDrivers =
    "INSERT INTO drivers (name, email, password, driver_license) VALUES (?, ?, ?, ?)";
  const driverValues = [name, email, password, driver_license];

  db.query(sqlDrivers, driverValues, (err, result) => {
    if (err) {
      console.error("Error inserting into drivers table:", err);
      return res.status(500).json("Database error");
    }

    const driver_id = result.insertId;

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

      // Insert into preferences table
      const sqlPreferences =
        "INSERT INTO preferences (driver_id, smoking, music, pet_friendly) VALUES (?, ?, ?, ?)";
      const preferencesValues = [
        driver_id,
        preferences.smoking,
        preferences.music,
        preferences.pet_friendly,
      ];

      db.query(sqlPreferences, preferencesValues, (err, result) => {
        if (err) {
          console.error("Error inserting into preferences table:", err);
          return res.status(500).json("Database error");
        }

        return res.status(200).json("Driver registered successfully");
      });
    });
  });
});

//for driver login
app.post("/DriverLoginPage", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM drivers WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Database error");
    }
    if (data.length > 0) {
      return res
        .status(200)
        .json({ message: "Login successful", user: data[0] });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  });
});
// for preference issues
app.post("/DriverRegisterPage", (req, res) => {
  const { driver_id, preference } = req.body;

  // Delete existing preference for this driver
  db.query(
    "DELETE FROM preference WHERE driver_id = ?",
    [driver_id],
    (err, result) => {
      if (err) {
        console.error("Error deleting existing preference:", err);
        return res.status(500).json("Database error");
      }

      // Insert new preference into the database
      const values = preference.map((preference) => [driver_id, preference]);
      db.query(
        "INSERT INTO preference (driver_id, preference) VALUES ?",
        [values],
        (err, result) => {
          if (err) {
            console.error("Error inserting new preference:", err);
            return res.status(500).json("Database error");
          }
          return res.status(200).json("Preference updated successfully");
        }
      );
    }
  );
});

// Endpoint to fetch ride requests
app.get("/ride-request", (req, res) => {
  const query =
    "SELECT rr.user_id AS id, u.name AS passangerName, rr.s_address, rr.d_address, rr.numberOfSite FROM riderequest rr JOIN users u ON rr.user_id = u.user_id;";
  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
});

//From database to ride history
app.get("/ride-history", (req, res) => {
  const query =
    "SELECT rh.ride_id, rh.s_address, rh.d_address, u.name, ci.car_model AS car, p.amount AS fare, p.pay_method AS paymentMethod, rh.status, rh.travel_date FROM ridehistory rh INNER JOIN Users u ON rh.user_id = u.user_id INNER JOIN carinfo ci ON rh.driver_id = ci.driver_id INNER JOIN payment p ON rh.ride_id = p.ride_id;";

  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
});
// from the joint database requestListing
app.get("/ride-listings", (req, res) => {
  const query =
    "SELECT rr.user_id AS id, u.name AS passangerName, rr.s_address, rr.d_address, rr.numberOfSite FROM riderequest rr JOIN users u ON rr.user_id = u.user_id;";
  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
});

// for the functionalities of select

app.post("/createRideRequest", (req, res) => {
  const values = req.body;

  const insertRequestSql =
    "INSERT INTO riderequest (user_id, s_address, d_address, numberOfSite) VALUES (?, ?, ?, ?)";

  db.query(insertRequestSql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json({ message: "Ride request created successfully" });
  });
});

//-decline accept
app.delete("/ride-requests-deletes", async (req, res) => {
  const id = req.body.requestId;
  const status = req.body.status;
  const deleteQuery = "DELETE FROM riderequest WHERE user_id = ?";
  const updateQuery = "UPDATE ridehistory SET status = ? WHERE user_id = ?";

  db.query(deleteQuery, [id], (error) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    connection.query(updateQuery, [status, id], (error) => {
      if (error) {
        return res.status(500).json({ error: "Database query error" });
      }
      res.json("delete is su");
    });
  });
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
