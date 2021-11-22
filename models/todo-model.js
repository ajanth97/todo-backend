const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo = new Schema(
  {
    id: { type: String, required: true },
    text: { type: String, required: true },
    checked: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todo", Todo);
