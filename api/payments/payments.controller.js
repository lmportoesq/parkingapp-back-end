const { updateUser } = require('../users/users.services');
const {
  getAllPayments,
  createPayment,
  getOnePayment,
  deletePayment,
  updatePayment,
  createCustomer,
  makePayment,
} = require('./payments.services');

async function handlerAllPayments(req, res) {
  const payments = await getAllPayments();
  res.json(payments);
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

async function handlerCreatePayment(req, res) {
  const { paymentMethod, amount } = req.body;
  const { card } = paymentMethod;

  try {
    // create customer
    const customer = await createCustomer(req.user, paymentMethod);

    // update user with customer info
    const userToUpdate = {
      payment: {
        customerId: customer.id,
        cards: [paymentMethod.card],
      },
    };
    // console.log('FLAG-CONCAT:', userToUpdate.payment.cards.concat([222]));
    await updateUser(req.user._id, userToUpdate);

    // associate payment with user
    const payment = await makePayment({ paymentMethod, amount, customer });

    // save payment data to DB
    const registeredPayment = {
      refId: payment.id,
      dataPayment: Date(payment.created),
      hourPayment: '0:0:0',
      valuePayment: amount / 100,
      methodPayment: card.funding,
      userId: req.user._id,
    };
    await createPayment(registeredPayment);
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
};
