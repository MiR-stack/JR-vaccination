const { getAppoinmentsByDate } = require("../services/appointment.service");

const findAppointmentsByDate = async (req, res) => {
  const { date: userDate } = req.body;

  if (!userDate) return res.status(403).json({ msg: "bad request" });

  const date = new Date(userDate);

  const appointments = await getAppoinmentsByDate(date);

  res.send(appointments);
};

module.exports = { findAppointmentsByDate };
