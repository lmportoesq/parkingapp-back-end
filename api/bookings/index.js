const { Router } = require('express');
const {
  handlerAllBookings,

} = require('./bookings.controller');

const router = Router();

router.get('/', handlerAllBookings);

module.exports = router;
