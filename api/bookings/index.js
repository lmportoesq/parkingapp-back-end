const { Router } = require('express');
const {
  handlerAllBookings,
  handlerCreateBooking,
} = require('./bookings.controller');

const router = Router();

router.get('/', handlerAllBookings);
router.post('/', handlerCreateBooking);

module.exports = router;
