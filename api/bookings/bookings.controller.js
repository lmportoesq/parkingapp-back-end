const {
  getAllParkings,
} = require('./parkings.services');

async function handlerAllBookings(req, res) {
  const bookings = await getAllBookings();
  res.json(bookings);
}

module.exports = {
  handlerAllBookings,
};
