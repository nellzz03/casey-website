const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Community signup schema
const communitySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Model
const CommunitySignup = mongoose.model(
  "CommunitySignup",
  communitySchema
);

// Test route
app.get("/", (req, res) => {
  res.send("Casey website backend is running!");
});

// Community signup
app.post("/api/community", async (req, res) => {
  try {
    const { email } = req.body;

    const newSignup = new CommunitySignup({
      email: email
    });

    await newSignup.save();

    console.log("New community signup:", email);

    res.json({
      success: true,
      message: "You have successfully joined the community!"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong."
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});