const {
  findAppointmentsByDate,
} = require("../controller/appointment.controller");

const router = require("express").Router();

router.post("/appointments", findAppointmentsByDate);

module.exports = router;
