const mongoose = require("mongoose");

function connection(str) {
  return mongoose.connect(str, {
    serverSelectionTimeoutMS: 1000,
  });
}

module.exports = connection;
