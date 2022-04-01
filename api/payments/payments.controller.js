const {
  getAllPayments,
  createPayment,
} = require('./payments.services');

async function handlerAllPayments(req, res) {
  const payments = await getAllPayments();
  res.json(payments);
}

async function handlerCreatePayment(req, res) {
  const newPayment = req.body;

  try {
    const payment = await createPayment(newPayment);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  handlerAllPayments,
  handlerCreatePayment,
};
