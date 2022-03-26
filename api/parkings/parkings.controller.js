const {
  getAllParkings,
  getOneParking,
} = require ('./parkings.services');

function handlerAllParkings(req, res) {
  const parkings = getAllParkings();
  res.json(parkings);
}

function handlerOneParking(req, res) {
  const { id } = req.params;
  const parking = getOneParking(id);

  if (!parking) {
    res.status(404).json({ message: `Parking not found with id ${id}` });
  } else {
    res.json(parking);
  }
}

module.exports = {
  handlerAllParkings,
  handlerOneParking,
};
