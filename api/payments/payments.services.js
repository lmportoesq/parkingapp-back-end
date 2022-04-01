const PaymentsModel = require('./payments.model');

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

module.exports = {
  getAllPayments,
  createPayment,
  getOnePayment,
  deletePayment,
  updatePayment,
};
