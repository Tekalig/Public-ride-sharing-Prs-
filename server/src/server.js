const http = require("http");

const app = require("./app");
const sequelize = require("./config/db");

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(PORT, async () => {
  sequelize
    .sync()
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log("Database connection failed", error);
    });
  console.log(`Server is running on http://localhost:${PORT}`);
});