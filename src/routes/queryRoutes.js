const express = require("express");
const router = express.Router();
const {
  submitQuery,
  getQueriesByServiceType,
} = require("../controllers/queryController");

router.post("/", submitQuery);

router.get("/queries/:type", getQueriesByServiceType);

module.exports = router;
