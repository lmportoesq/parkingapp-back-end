const { Router } = require('express');

const {
  handlerAllPayments,
  handlerCreatePayment,
} = require('./payments.controller');

const router = Router();

router.get('/', handlerAllPayments);
router.post('/', handlerCreatePayment);

module.exports = router;
