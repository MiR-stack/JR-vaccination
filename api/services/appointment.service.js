const Appointment = require("../model/appoinment.model");
const { getVaccineCenter } = require("./vaccineCenter.service");
const { getNextDay } = require("../utils");

const createAppointment = async ({ vaccineCenterId, userId }) => {
  const vaccineCenter = await getVaccineCenter(vaccineCenterId);

  const appointments = await Appointment.find({
    vaccineCenter: vaccineCenterId,
  });

  let isFound = false;
  let date = getNextDay(new Date(), true);
  let serial = null;

  while (!isFound) {
    const currentDateAppointments = appointments.filter(
      (appointment) => appointment.date.toISOString().split("T")[0] === date
    );

    const totalAppoinments = currentDateAppointments.length;

    if (totalAppoinments === vaccineCenter.dailyLimit) {
      date = getNextDay(new Date(date), true);
    } else if (totalAppoinments < 1) {
      serial = 1;
      isFound = true;
    } else {
      serial = currentDateAppointments[totalAppoinments - 1].serial + 1;
      isFound = true;
    }
  }

  const appointment = new Appointment({
    user: userId,
    vaccineCenter: vaccineCenterId,
    date,
    serial,
  });

  return appointment.save();
};

const getAppoinmentsByDate = async (date) => {
  const appointments = await Appointment.find({ date })
    .populate("user", "name email")
    .populate("vaccineCenter", "name location");

  return appointments;
};

module.exports = { createAppointment, getAppoinmentsByDate };
