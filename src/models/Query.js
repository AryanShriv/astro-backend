const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: String,
  birthDate: Date,
  birthTime: String,
  birthPlace: String,
});

const querySchema = new mongoose.Schema(
  {
    // For Kundali and Sawal
    person1: personSchema,

    // For Milan
    person2: personSchema,

    // Optional for Sawal
    question: String,

    // Contact Info (always present)
    contact: {
      name: { type: String, required: true },
      phone: String,
      email: { type: String, required: true },
    },

    // Service Type
    serviceType: {
      type: String,
      enum: ["kundali", "milan", "sawal"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);
