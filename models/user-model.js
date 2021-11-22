const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    todos: [{ id: String, text: String, checked: Boolean }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
