const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "please provide an appointment id"],
    unique: true,
  },
  vaccineCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vaccine_center",
    required: [true, "please provide a vaccine center id"],
  },
  date: {
    type: Date,
    required: [true, "please give an appoinment date"],
  },
  serial: {
    type: Number,
    required: [true, "please provide an serial number"],
    default: 0,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
