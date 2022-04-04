const BookingsModel = require('./bookings.model');

function getAllBookings() {
  return BookingsModel.find();
}

async function getOneBooking(id) {
  const booking = await BookingsModel.findById(id);
  if (!booking) {
    return null;
  }
  return booking;
}

async function deleteBooking(id, newInfo) {
  const booking = BookingsModel.findByIdAndDelete(id);
  if (!booking) {
    return null;
  }
  return booking;
}

function createBooking(newBooking) {
  const booking = BookingsModel.create(newBooking);
  return booking;
}

async function updateBooking(id, newInfo) {
  const updateInfo = await BookingsModel.findByIdAndUpdate(id, newInfo, {
    returnOriginal: false,
  });
  if (!updateInfo) {
    return null;
  }
  return updateInfo;
}

module.exports = {
  getAllBookings,
  getOneBooking,
  deleteBooking,
  createBooking,
  updateBooking,
};
