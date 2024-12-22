const bcrypt = require("bcryptjs");
const Passenger = require("../models/passenger_model");

// Passenger Signup
const passengerSignup = async (req, res) => {
  try {
    const { firstName,lastName, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newPassenger = await Passenger.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword,
    });
    const { password: _, ...passengerWithoutPassword } = newPassenger.toJSON();
    res.status(201).json({
      message: "Passenger registered successfully",
      passenger: passengerWithoutPassword,
    });
  } catch (error) {
    res.status(500).json({ message: "Error registering passenger", error });
  }
};

// Passenger Login
const passengerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const passenger = await Passenger.findOne({ where: { email } });
    if (!passenger) {
      return res.status(401).json({ message: "Invalid email" });
    }

    const isPasswordValid = await bcrypt.compare(password, passenger.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const { password: _, ...passengerWithoutPassword } = passenger.toJSON();
    res.status(200).json({ message: "Login successful", passenger: passengerWithoutPassword });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

module.exports = {
  passengerSignup,
  passengerLogin,
};
