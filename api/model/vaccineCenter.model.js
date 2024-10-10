const mongoose = require("mongoose");

const vaccineCenterSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a center name"],
    unique: true,
  },
  dailyLimit: {
    type: Number,
    default: 1,
  },
  location: {
    type: String,
    required: [true, "please add a location"],
  },
});

const Vaccine_center = mongoose.model("Vaccine_center", vaccineCenterSchema);

module.exports = Vaccine_center;
