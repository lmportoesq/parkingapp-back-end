const BookingsModel = require('./bookings.model');

function getAllBookings() {
  return BookingsModel.find();

}

module.exports = {
  getAllBookings,
};
