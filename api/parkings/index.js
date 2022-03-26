const { Router } = require('express');
const { index } = require('./parkings.controller');

const router = Router();

router.get('/', index);

module.exports = router;
