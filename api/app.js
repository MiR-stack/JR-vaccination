const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const userRoute = require("./router/user.route");
const appointmentRoute = require("./router/appointment.route");
const auth = require("./middleware/auth.middleware");

app.use(
  cors(),
  express.urlencoded({ extended: false }),
  express.json(),
  morgan("dev")
);

app.use("/api/v1/user", userRoute);
app.use("/api/v1", auth, appointmentRoute);

app.get("/helth", (_req, res) => {
  res.status(200).json({ msg: "connect successfully" });
});

app.use("*", (_req, res) => {
  res.status(404).json({ msg: "data not found" });
});

app.use((err, _req, res, _next) => {
  if (err.status) {
    res.status(err.status).json({ msg: err.msg });
  }
  res.status(500).json({ msg: "something went wrong" });
});

module.exports = app;
