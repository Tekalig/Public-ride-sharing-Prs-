function driverLogin(req, res) {
  return res.statusCode(200).json({ message: "Login successful" });
}

function driverRegister(req, res) {
  return res.statusCode(200).json({ token_id: data.insertId });
}

module.exports = {
  driverLogin,
  driverRegister,
};
