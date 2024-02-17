// models/campaign.js
const mongoose = require("mongoose");

// Define Campaign Schema
const campaignSchema = new mongoose.Schema({
  name: String,
  description: String,
  goal: Number,
  start_date: Date,
  end_date: Date,
});

// Create Campaign model
const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;
