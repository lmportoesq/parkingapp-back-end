const mongoose = require('mongoose');

const PaymentsSchema = new mongoose.Schema({
  dataPayment: {
    type: Date,
    required: true,
    uppercase: true,
    trim: true,
  },
  hourPayment: {
    type: String,
    required: true,
    trim: true,
  }
}, {
  timestamps: true,
  versionKey: true,
});

module.exports = mongoose.model('Payments', PaymentsSchema);
