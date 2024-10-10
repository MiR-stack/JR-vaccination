const Vaccine_center = require("../model/vaccineCenter.model");

const getVaccineCenter = async (_id) => {
  return await Vaccine_center.findOne({ _id });
};

module.exports = {
  getVaccineCenter,
};
