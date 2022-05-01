const { Router } = require('express');
const {
  handlerCreateImage,
} = require('./upload.controller');

const router = Router();

router.post('/', handlerCreateImage);

module.exports = router;
