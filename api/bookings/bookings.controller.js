const {
  getAllBookings,
  createBooking,
} = require('./bookings.services');

async function handlerAllBookings(req, res) {
  const bookings = await getAllBookings();
  res.json(bookings);
}
async function handlerCreateBooking(req, res) {
  const newBooking = req.body;
  try{
    const booking = await createBooking(newBooking);
    res.status(201).json(booking);
  }catch (error) {
    res.status(500).json(error);
  }
}
module.exports = {
  handlerAllBookings,
  handlerCreateBooking,
};
