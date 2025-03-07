const express = require("express");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Secure Order Routes
router.post("/", protect, async (req, res) => { /* Place Order */ });
router.get("/", protect, async (req, res) => { /* Get Orders */ });

module.exports = router;
