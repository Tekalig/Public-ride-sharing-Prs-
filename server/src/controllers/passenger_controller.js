import { newPassenger, verifyPassenger } from "../models/passenger_model";

function passengerLogin(req, res) {
  try {
    const userId = verifyPassenger(req.body);
    return res
      .statusCode(200)
      .json({ message: "Login successful", token_id: userId });
  } catch (error) {}
}

function passengerRegister(req, res) {
  try {
    const values = [
      req.body.name,
      req.body.email,
      req.body.Password,
      req.body.phoneNumber,
    ];
    const userId = newPassenger(values);
    return res.statusCode(200).json({ token_id: userId });
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
}

module.exports = {
  passengerLogin,
  passengerRegister,
};
