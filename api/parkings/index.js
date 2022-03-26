const { Router } = require('express');
const {
  handlerAllParkings,
  handlerOneParking,
 } = require('./parkings.controller');

const router = Router();

router.get('/', handlerAllParkings);
router.get('/:id', handlerOneParking);
//router.delete('/:id', index);
//router.post('/', index);
//router.patch('/:id', index);

module.exports = router;
