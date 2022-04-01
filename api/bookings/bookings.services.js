const BookingsModel = require('./bookings.model');

function getAllBookings() {
  return BookingsModel.find();
}
function createBooking(newBooking) {
  const booking = BookingsModel.create(newBooking);
  return booking;
}
module.exports = {
  getAllBookings,
  createBooking,
};
