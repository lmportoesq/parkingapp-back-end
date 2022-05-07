const { Router } = require('express');
const {
  handlerAllParkings,
  handlerOneParking,
  handlerDeleteParking,
  handlerCreateParking,
  handlerUpdateParking,
  handlerAllParkingsByAdmin,
} = require('./parkings.controller');

const { hasRole } = require('../../auth/auth.service');

const router = Router();

router.get('/', handlerAllParkings);
router.get('/byadmin', hasRole(['admin']), handlerAllParkingsByAdmin);
router.get('/:id', handlerOneParking);
router.delete('/:id', hasRole(['admin']), handlerDeleteParking);
router.post('/', hasRole(['admin']), handlerCreateParking);
router.patch('/:id', hasRole(['admin']), handlerUpdateParking);

module.exports = router;
