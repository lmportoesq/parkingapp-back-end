const { Router } = require('express');
const {
  handlerAllBookings,
  handlerOneBooking,
  handlerDeleteBooking,
  handlerCreateBooking,
  handlerUpdateBooking,
} = require('./bookings.controller');

const router = Router();

router.get('/', handlerAllBookings);
router.get('/:id', handlerOneBooking);
router.delete('/:id', handlerDeleteBooking);
router.post('/', handlerCreateBooking);
router.patch('/:id', handlerUpdateBooking);
module.exports = router;
