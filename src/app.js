const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const queryRoutes = require("./routes/queryRoutes");
app.use("/api", queryRoutes);

app.get("/", (req, res) => {
  res.send("Astro backend is live!");
});

module.exports = app;
