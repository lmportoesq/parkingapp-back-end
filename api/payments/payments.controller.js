const { getAllPayments } = require('./payments.services');

async function handlerAllPayments(req, res) {
  const payments = await getAllPayments();
  res.json(payments);
}

module.exports = { handlerAllPayments };
