const { Router } = require('express');

const { handlerLoginUser, handlerVerifyAccount } = require('./local.controller');

const router = Router();

// /auth/local/login
router.post('/login', handlerLoginUser);
router.get('verify-account/:token', handlerVerifyAccount);
// /auth/local/forgot-password
// /auth/local/verify-account

module.exports = router;
