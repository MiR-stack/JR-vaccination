const {
  createUser,
  updateUser,
  getStatus,
} = require("../services/user.service");
const { getVaccineCenter } = require("../services/vaccineCenter.service");
const { createAppointment } = require("../services/appointment.service");

const register = async (req, res, next) => {
  const { name, email, nid, vaccineCenterId } = req.body;

  try {
    if (!name || !email || !nid || !vaccineCenterId)
      return res.status(400).json({ msg: "bad request" });

    const centerValidation = Boolean(await getVaccineCenter(vaccineCenterId));
    if (!centerValidation)
      return res.status(404).json({ msg: "vaccine center not found" });

    const user = await createUser({ name, email, nid });

    const appointment = await createAppointment({
      vaccineCenterId,
      userId: user._id,
    });

    await updateUser({
      _id: user._id,
      payload: {
        status: "scheduled",
        appointment: appointment._id,
      },
    });

    res
      .send({
        appoinment: appointment.date,
        serial: appointment.serial,
        status: "scheduled",
      })
      .status(201);
  } catch (err) {
    next(err);
  }
};

const findStatus = async (req, res, next) => {
  try {
    const { nid } = req.query;

    if (!nid) return res.status(400).json({ msg: "bad request" });

    const status = await getStatus(nid);

    res.send(status);
  } catch (err) {
    next(err);
  }
};

module.exports = { register, findStatus };
