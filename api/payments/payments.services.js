const PaymentsModel = require('./payments.model');

function getAllPayments() {
  return PaymentsModel.find();
}

function createPayment(newPayment) {
  const payment = PaymentsModel.create(newPayment);
  return payment;
}

function getOnePayment(id) {
  const payment = PaymentsModel.findById(id);

  if (!payment) {
    return null;
  }
  return payment;
}

module.exports = {
  getAllPayments,
  createPayment,
  getOnePayment,
};
