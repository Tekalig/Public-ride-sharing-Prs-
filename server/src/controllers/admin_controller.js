function adminLogin(req, res) {
  return res.statusCode(200).json({ message: "Login successful" });
}

module.exports = {
  adminLogin,
};
