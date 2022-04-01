const {
  getAllPayments,
  createPayment,
  getOnePayment,
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

async function handlerOnePayment(req, res) {
  const { id } = req.params;
  const payment = await getOnePayment(id);

  if (!payment) {
    res.status(404).json({ message: `Payment with ${id} is not found` });
  } else {
    res.json(payment);
  }
}

module.exports = {
  handlerAllPayments,
  handlerCreatePayment,
  handlerOnePayment,
};
