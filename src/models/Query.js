const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // contact person
    email: { type: String, required: true },
    birthDate: { type: Date }, // person1
    birthTime: { type: String },
    birthPlace: { type: String },
    question: { type: String },
    serviceType: { type: String, enum: ["kundali", "milan", "sawal"] },

    person2: {
      name: { type: String },
      birthDate: { type: Date },
      birthTime: { type: String },
      birthPlace: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);
