const Query = require("../models/Query");

console.log("✅ queryController loaded");

exports.submitQuery = async (req, res) => {
  try {
    const { serviceType } = req.body;

    let newQuery;

    if (serviceType === "milan") {
      const { person1, person2, contact } = req.body;

      newQuery = new Query({
        person1: {
          name: person1?.name,
          birthDate: person1?.birthDate,
          birthTime: person1?.birthTime,
          birthPlace: person1?.birthPlace,
        },
        person2: {
          name: person2?.name,
          birthDate: person2?.birthDate,
          birthTime: person2?.birthTime,
          birthPlace: person2?.birthPlace,
        },
        contact,
        serviceType,
      });
    } else {
      const { person1, contact, question, serviceType } = req.body;

      newQuery = new Query({
        person1: {
          name: person1?.name,
          birthDate: person1?.birthDate,
          birthTime: person1?.birthTime,
          birthPlace: person1?.birthPlace,
        },
        question,
        contact,
        serviceType,
      });
    }

    await newQuery.save();
    res.status(201).json({ message: "Query submitted successfully" });
  } catch (err) {
    console.error("Error submitting query:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
exports.getQueriesByServiceType = async (req, res) => {
  try {
    const { type } = req.params;
    const queries = await Query.find({ serviceType: type }).sort({
      createdAt: -1,
    });
    res.status(200).json(queries);
  } catch (err) {
    console.error("Error fetching queries:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
