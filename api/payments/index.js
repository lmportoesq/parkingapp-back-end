const { Router } = require('express');

const {
  handlerAllPayments,
  handlerCreatePayment,
  handlerOnePayment,
  handlerDeletePayment,
  handlerUpdatePayment,
  handlerCheckoutCard,
} = require('./payments.controller');

const router = Router();

router.get('/', handlerAllPayments);
router.post('/', handlerCreatePayment);
router.get('/:id', handlerOnePayment);
router.delete('/:id', handlerDeletePayment);
router.patch('/:id', handlerUpdatePayment);
router.post('/', handlerCheckoutCard);

module.exports = router;
