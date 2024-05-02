const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: false },
  contact: { type: Number, required: true },
  institution: { type: String, required: true },
  position: { type: String, required: true },
  registrationType: { type: String, required: true },
  comments: { type: String, required: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Attendees", registrationSchema);
