const { Router } = require('express');

const {
  handlerAllPayments,
  handlerCreatePayment,
  handlerOnePayment,
  handlerDeletePayment,
  handlerUpdatePayment,
} = require('./payments.controller');

const router = Router();

router.get('/', handlerAllPayments);
router.post('/', handlerCreatePayment);
router.get('/:id', handlerOnePayment);
router.delete('/:id', handlerDeletePayment);
router.patch('/:id', handlerUpdatePayment);

module.exports = router;
