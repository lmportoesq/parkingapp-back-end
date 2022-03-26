const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => { // '/' path of parkings folder
  res.send('<h1>Hello server parkingapp</h1>');
});

module.exports = router;
