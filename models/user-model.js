const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    todos: { type: Array, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
