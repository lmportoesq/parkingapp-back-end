const { Router } = require('express');
const {
  handlerAllParkings,
  handlerOneParking,
  handlerDeleteParking,
  handlerCreateParking,
 } = require('./parkings.controller');

const router = Router();

router.get('/', handlerAllParkings);
router.get('/:id', handlerOneParking);
router.delete('/:id', handlerDeleteParking);
router.post('/', handlerCreateParking);
//router.patch('/:id', index);

module.exports = router;
