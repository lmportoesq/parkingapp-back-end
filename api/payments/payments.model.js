const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const PaymentsSchema = new mongoose.Schema({
  idBooking: {
    type: ObjectId,
    ref: 'bookings',
  },
  refId: {
    type: String,
    required: true,
    trim: true,
  },
  dataPayment: {
    type: Date,
    // required: true,
    // default: Date.now,
    uppercase: true,
    trim: true,
  },
  hourPayment: {
    type: String,
    // required: true,
    trim: true,
  },
  valuePayment: {
    type: Number,
    require: true,
  },
  methodPayment: {
    type: String,
    // require: true,
    enum: ['credit', 'cash', 'debit'],
    // default: 'debit',
  },
  statusPayment: {
    type: Boolean,
    // require: true,
    default: false,
  },
  userId: {
    type: ObjectId,
    ref: 'users',
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Payments', PaymentsSchema);
