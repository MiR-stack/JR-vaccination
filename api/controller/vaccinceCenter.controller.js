const { getVaccineCenters } = require("../services/vaccineCenter.service");

const findVaccineCenters = async (req, res, next) => {
  try {
    const { id, q, fields, page, pageSize } = req.query;

    const centers = await getVaccineCenters({
      id,
      query: q,
      fields,
      page,
      pageSize,
    });

    if (!centers) return res.status(404);

    res.send(centers);
  } catch (err) {
    next(err);
  }
};

module.exports = { findVaccineCenters };
