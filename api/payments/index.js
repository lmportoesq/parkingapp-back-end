const { Router } = require('express');

const {
  handlerAllPayments,
  handlerCreatePayment,
  handlerOnePayment,
} = require('./payments.controller');

const router = Router();

router.get('/', handlerAllPayments);
router.post('/', handlerCreatePayment);
router.get('/:id', handlerOnePayment);

module.exports = router;
