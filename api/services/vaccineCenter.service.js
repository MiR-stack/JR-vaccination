const Vaccine_center = require("../model/vaccineCenter.model");
const { getNextDay } = require("../utils");

const getVaccineCenter = async (_id) => {
  return await Vaccine_center.findOne({ _id });
};

/**
 *
 * @param {{name:string,_id:string,location:string,fields:string}} terms
 * @returns
 */
const getVaccineCenters = async ({ query, pageSize, page, fields }) => {
  const regex = new RegExp(query, "i");

  if (fields) {
    fields = fields.split(",").join(" ");
  }

  const skip = (page - 1) * pageSize;

  const centers = await Vaccine_center.find({
    $or: [{ name: regex }, { location: regex }],
  })
    .skip(skip)
    .limit(pageSize)
    .select(fields);

  const total = await Vaccine_center.countDocuments({
    $or: [{ name: regex }, { location: regex }],
  });

  const totalPage = Math.ceil(total / pageSize);

  return { data: centers, meta: { page, total, totalPage } };
};

const updateAvailableDate = async () => {
  const nextDate = getNextDay(new Date());

  return await Vaccine_center.updateMany(
    { availableDate: { $lt: nextDate } },
    { availableDate: nextDate }
  );
};

module.exports = {
  getVaccineCenter,
  getVaccineCenters,
  updateAvailableDate,
};
