const Appointment = require("../model/appoinment.model");
const { getVaccineCenter } = require("./vaccineCenter.service");
const { getNextDay } = require("../utils");

const createAppointment = async ({ vaccineCenterId, userId }) => {
  const vaccineCenter = await getVaccineCenter(vaccineCenterId);

  const appointments = await Appointment.find({
    vaccineCenter: vaccineCenterId,
  });

  let isFound = false;
  let date = vaccineCenter.availableDate;
  let serial = null;

  while (!isFound) {
    const currentDateAppointments = appointments.filter(
      (appointment) => `${appointment.date}` === `${date}`
    );

    const totalAppoinments = currentDateAppointments.length;

    if (totalAppoinments >= vaccineCenter.dailyLimit) {
      date = getNextDay(new Date(date), true);
    } else if (totalAppoinments < 1) {
      serial = 1;
      isFound = true;
    } else {
      serial = currentDateAppointments[totalAppoinments - 1].serial + 1;
      isFound = true;
    }
  }

  if (typeof date === "string") {
    vaccineCenter.availableDate = date;
    await vaccineCenter.save();
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

const getAppointmentById = async (_id) => {
  const appoinment = await Appointment.findOne({ _id }).populate(
    "vaccineCenter",
    "name location openTime"
  );

  return appoinment;
};

module.exports = {
  createAppointment,
  getAppoinmentsByDate,
  getAppointmentById,
};
