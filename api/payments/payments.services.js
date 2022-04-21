const Stripe = require('stripe');
const PaymentsModel = require('./payments.model');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function getAllPayments() {
  return PaymentsModel.find();
}

function createPayment(newPayment) {
  const payment = PaymentsModel.create(newPayment);
  return payment;
}

async function getOnePayment(id) {
  const payment = await PaymentsModel.findById(id);

  if (!payment) {
    return null;
  }
  return payment;
}

async function deletePayment(id) {
  const payment = await PaymentsModel.findByIdAndDelete(id);
  if (!payment) {
    return null;
  }
  return payment;
}

async function updatePayment(id, newInfo) {
  const updateInfo = await PaymentsModel.findByIdAndUpdate(id, newInfo, { new: true });
  if (!updateInfo) {
    return null;
  }
  return updateInfo;
}

async function checkoutPayment(paymentMethod, amount) {
  // const { id, card } = paymentMethod;
  const { id } = paymentMethod;
  const payment = await stripe.paymentIntents.create({
    payment_method: id,
    amount,
    currency: 'usd',
    confirm: true,
    description: 'Example charge',
  });
  if (!payment) {
    return null;
  }
  return payment;
}

module.exports = {
  getAllPayments,
  createPayment,
  getOnePayment,
  deletePayment,
  updatePayment,
  checkoutPayment,
};
