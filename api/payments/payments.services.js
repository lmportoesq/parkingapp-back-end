const PaymentsModdel = require('./payments.model');

function getAllPayments() {
  return PaymentsModdel.find();
}

module.exports = { getAllPayments };
