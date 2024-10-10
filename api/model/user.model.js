const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
    minlength: [3, "minimum 3 charater nedeed"],
    maxlength: [20, "max 20 charater "],
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          v
        );
      },
      message: (prop) => `${prop.value} this email is not validate`,
    },
    unique: true,
  },
  nid: {
    type: String,
    required: true,
    minLength: [10, "invalid nid"],
    maxLength: [17, "invalid nid"],
    unique: true,
  },
  status: {
    type: String,
    enum: ["not scheduled", "scheduled", "vaccinated"],
    default: "not scheduled",
  },
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointments" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
