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

async function createCustomer(user, paymentMethod) {
  try {
    const customer = await stripe.customers.create({
      email: user.email,
      name: `${user.firstName} ${user.lastName}`,
      payment_method: paymentMethod.id,
    });
    return customer;
  } catch (error) {
    return null;
  }
}

async function makePayment({ paymentMethod, amount, customer }) {
  const { id } = paymentMethod;
  try {
    const payment = await stripe.paymentIntents.create({
      payment_method: id,
      amount,
      currency: 'usd',
      confirm: true,
      description: 'Example charge',
      // eslint-disable-next-line no-underscore-dangle
      customer: customer.id,
    });

    return payment;
  } catch (error) {
    console.log('ERROR', error);
    throw error;
  }
}

module.exports = {
  getAllPayments,
  createPayment,
  getOnePayment,
  deletePayment,
  updatePayment,
  createCustomer,
  makePayment,
  // checkoutPayment,
};
