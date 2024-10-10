const User = require("../model/user.model");
const error = require("../utils/error");

const createUser = async ({ name, email, nid }) => {
  const isExist = await User.findOne({
    nid,
  });

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

module.exports = { createUser, updateUser };
