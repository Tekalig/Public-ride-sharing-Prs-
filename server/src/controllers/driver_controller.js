const bcrypt = require("bcryptjs");
const Driver = require("../models/driver_model");

// Driver Signup
const driverSignup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber, licenseNumber } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newDriver = await Driver.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      licenseNumber,
      password: hashedPassword,
    });
    const { password: _, ...driverWithoutPassword } = newDriver.toJSON();
    res.status(201).json({
      message: "Driver registered successfully",
      driver: driverWithoutPassword,
    });
  } catch (error) {
    res.status(500).json({ message: "Error registering driver", error });
  }
};

// Driver Login
const driverLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const driver = await Driver.findOne({ where: { email } });
    if (!driver) {
      return res.status(401).json({ message: "Invalid email" });
    }

    const isPasswordValid = await bcrypt.compare(password, driver.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const { password: _, ...driverWithoutPassword } = driver.toJSON();
    res.status(200).json({ message: "Login successful", driver: driverWithoutPassword });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

module.exports = {
  driverSignup,
  driverLogin,
};
