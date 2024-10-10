const app = require("./app");
require("dotenv").config();
const dbConnection = require("./db");
const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 8080;

dbConnection(`${process.env.DB_STRING}`)
  .then(() => {
    console.log("database connected successfully");

    app.listen(PORT, () => {
      console.log(`your app is running sucessfully on ${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
