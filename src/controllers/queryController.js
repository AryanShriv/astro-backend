const Query = require("../models/Query");

exports.submitQuery = async (req, res) => {
  try {
    const newQuery = new Query(req.body);
    await newQuery.save();
    res.status(201).json({ message: "Query submitted successfully" });
  } catch (err) {
    console.error("Error submitting query:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getQueriesByServiceType = async (req, res) => {
  const { type } = req.params;

  try {
    const queries = await Query.find({ serviceType: type }).sort({
      createdAt: -1,
    });
    res.status(200).json(queries);
  } catch (err) {
    console.error("Error fetching queries:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};