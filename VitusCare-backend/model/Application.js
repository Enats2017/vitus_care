// model/Application.js
const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  department: { type: String, required: true },
  cv: { type: String, required: true }, // store file path
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);
