const express = require("express");
const router = express.Router();
const {
  submitQuery,
  getQueriesByServiceType,
} = require("../controllers/queryController");

console.log("✅ queryRoutes loaded");

router.get("/test", (req, res) => {
  res.send("API test route is working!");
});

router.post("/", submitQuery);

router.get("/queries/:type", getQueriesByServiceType);

module.exports = router;
