const User = require("../model/user.model");
const error = require("../utils/error");
const { getAppointmentById } = require("./appointment.service");

const createUser = async ({ name, email, nid }) => {
  const isExist = await getUserByNid(nid);

  if (isExist) throw error("already registered", 403);

  const user = new User({
    name,
    email,
    nid,
  });

  return user.save();
};

const updateUser = async ({ _id, payload }) => {
  const { status, appointment } = payload;

  let updatedData = {};

  if (status) {
    updatedData.status = status;
  }
  if (appointment) {
    updatedData.appointment = appointment;
  }

  await User.updateOne({ _id }, updatedData);
};

/**
 *
 * @param {string} field
 * @returns
 */
const getUserByNid = (nid) => {
  return User.findOne({ nid });
};

const getStatus = async (nid) => {
  const user = await User.findOne({ nid });

  if (!user) throw error("user not found", 404);

  const appointment = await getAppointmentById(user.appointment);

  return {
    status: user.status,
    name: user.name,
    center: appointment.vaccineCenter.name,
    openTime: appointment.vaccineCenter.openTime,
    location: appointment.vaccineCenter.location,
    date: appointment.date,
    serial: appointment.serial,
  };
};

module.exports = { createUser, updateUser, getUserByNid, getStatus };
