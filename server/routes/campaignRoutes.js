// server/routes/campaignRoutes.js
const express = require("express");
const router = express.Router();
const Campaign = require("../models/campaign"); // Corrected model import
const Donation = require("../models/donation");

// Get all campaigns
router.get("/campaigns", async (req, res) => {
  try {
    // Log a message indicating that the route handler is being executed
    console.log("Fetching all campaigns...");

    // Query the database to fetch all campaigns
    const campaigns = await Campaign.find();

    // Log the fetched campaigns to inspect them
    console.log("Fetched campaigns:", campaigns);

    // Send the campaigns as JSON response
    res.json(campaigns);
  } catch (err) {
    // Log any errors that occur during the process
    console.error("Error fetching campaigns:", err);

    // Send an error response with the error message
    res.status(500).json({ message: err.message });
  }
});

// Get campaign by ID
router.get("/campaigns/:id", async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getCampaign(req, res, next) {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    res.campaign = campaign;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
