const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: "user"
    },
    dob: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
