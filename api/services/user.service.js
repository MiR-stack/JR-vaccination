const User = require("../model/user.model");
const error = require("../utils/error");

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

  await User.updateOne({ _id }, { status, appointment });
};

/**
 *
 * @param {string} field
 * @returns
 */
const getUserByNid = (nid) => {
  return User.findOne({ nid });
};

module.exports = { createUser, updateUser, getUserByNid };
