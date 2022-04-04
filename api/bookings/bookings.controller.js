const {
  getAllBookings,
  getOneBooking,
  deleteBooking,
  createBooking,
  updateBooking,
} = require('./bookings.services');

async function handlerAllBookings(req, res) {
  const bookings = await getAllBookings();
  res.json(bookings);
}

async function handlerOneBooking(req, res) {
  const { id } = req.params;
  const booking = await getOneBooking(id);
  if (!booking) {
    res.status(404).json({ message: `Booking not found with id ${id}` });
  } else {
    res.json(booking);
  }
}

async function handlerDeleteBooking (req, res) {
  const { id } = req.params;
  const booking = await deleteBooking(id);
  if (!booking) {
    res.status(404).json({ message: `Booking not found with id: ${id}, it was not delete` });
  } else {
    res.json({ message: `Booking with id: ${id} was delete` });
  }
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

async function handlerUpdateBooking(req, res) {
  const newInfo = req.body;
  const {id} = req.params;
  try {
    const booking = await updateBooking(id, newInfo);
    res.status(201).json(booking);
  } catch (erro){
    res.status(500).json({ message: `Booking with id: ${id} can't be ubdate`})
  }
}
module.exports = {
  handlerAllBookings,
  handlerOneBooking,
  handlerDeleteBooking,
  handlerCreateBooking,
  handlerUpdateBooking,
};
