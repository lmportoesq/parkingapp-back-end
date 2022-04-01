const { Router } = require('express');

const { handlerAllPayments } = require('./payments.controller');

const router = Router();

router.get('/', handlerAllPayments);

module.exports = router;
