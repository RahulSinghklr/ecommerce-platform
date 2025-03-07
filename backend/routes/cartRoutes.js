const express = require("express");
const Cart = require("../models/Cart");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Secure Cart Routes
router.post("/", protect, async (req, res) => { /* Add item */ });
router.get("/", protect, async (req, res) => { /* Get cart */ });
router.delete("/:productId", protect, async (req, res) => { /* Remove item */ });

module.exports = router;
