const express = require("express");
const Stripe = require("stripe");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ Create Payment Intent
router.post("/pay", protect, async (req, res) => {
  try {
    const { amount, currency } = req.body;

    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe works with cents
      currency: currency || "usd",
      payment_method_types: ["card"],
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
