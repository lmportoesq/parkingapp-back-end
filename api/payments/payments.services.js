const PaymentsModdel = require('./payments.model');

function getAllPayments() {
  return PaymentsModdel.find();
}

function createPayment(newPayment) {
  const payment = PaymentsModdel.create(newPayment);
  return payment;
}

module.exports = {
  getAllPayments,
  createPayment,
};
