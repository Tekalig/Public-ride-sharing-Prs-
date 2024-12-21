const bcrypt = require("bcrypt");
import db from "../server";

async function newPassenger([user_name, email, password, phoneNumber]) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const sql =
    "INSERT INTO users (user_name, email, password, phone_Number) VALUES (?, ?, ?, ?)";
  await db.query(
    sql,
    [user_name, email, hashedPassword, phoneNumber],
    (error, data) => {
      if (error) {
        return new Error({ error: "Database error" });
      } else {
        return data.insertId;
      }
    }
  );
}

async function verifyPassenger({ email, password }) {
  const sql = "SELECT * FROM users WHERE email = ?";
  await db.query(sql, [email], async (error, data) => {
    if (error) {
      return new Error({ error: "Database error" });
    }
    if (data.length > 0) {
      const user = data[0];
      return await bcrypt.compare(password, user.password);
    }
  });
}
