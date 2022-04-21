const {
  getAllPayments,
  createPayment,
  getOnePayment,
  deletePayment,
  updatePayment,
  checkoutPayment,
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

async function handlerDeletePayment(req, res) {
  const { id } = req.params;

  const payment = await deletePayment(id);
  if (!payment) {
    res.status(404).json({ message: 'Payment not found' });
  } else {
    res.json({ message: `Payment with id ${id} was deleted` });
  }
}

async function handlerUpdatePayment(req, res) {
  const newInfo = req.body;
  const { id } = req.params;
  try {
    const payment = await updatePayment(id, newInfo);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: `Parking with id ${id} can not be update` });
  }
}

async function handlerCheckoutCard(req, res) {
  const { paymentMethod, amount } = req.body;
  try {
    const payment = await checkoutPayment(paymentMethod, amount);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  handlerAllPayments,
  handlerCreatePayment,
  handlerOnePayment,
  handlerDeletePayment,
  handlerUpdatePayment,
  handlerCheckoutCard,
};
