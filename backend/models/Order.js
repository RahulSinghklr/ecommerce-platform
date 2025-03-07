const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  products: [{ productId: mongoose.Schema.Types.ObjectId, quantity: Number }],
  paymentStatus: String
});

module.exports = mongoose.model('Order', OrderSchema);
