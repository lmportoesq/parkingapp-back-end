const {
  getAllParkings,
  getOneParking,
  deleteParking,
  createParking,
  updateParking,
  getParkingsByFilter,
} = require('./parkings.services');

async function handlerAllParkings(req, res) {
  const filterConditions = req.query;
  if (Object.keys(filterConditions).length === 0) {
    const parkings = await getAllParkings();
    res.json(parkings);
  } else {
    const parkings = await getParkingsByFilter(filterConditions);
    res.json(parkings);
  }
}

async function handlerOneParking(req, res) {
  const { id } = req.params;
  const parking = await getOneParking(id);
  if (!parking) {
    res.status(404).json({ message: `Parking not found with id ${id}` });
  } else {
    res.json(parking);
  }
}

async function handlerDeleteParking(req, res) {
  const { id } = req.params;
  const parking = await deleteParking(id);
  if (!parking) {
    res.status(404).json({ message: `Parking not found with id: ${id}, it was not delete` });
  } else {
    res.json({ message: `Parking with id: ${id} was delete` });
  }
}

async function handlerCreateParking(req, res) {
  const newParking = req.body;
  console.log('CREATE: ', newParking);
  try {
    const parking = await createParking(newParking);
    res.status(201).json(parking);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerUpdateParking(req, res) {
  const newInfo = req.body;
  const { id } = req.params;

  const parking = await updateParking(id, newInfo);
  if (!parking) {
    res.status(404).json({ message: `Parking with id ${id} can not be update` });
  } else {
    res.status(201).json(parking);
  }
}

module.exports = {
  handlerAllParkings,
  handlerOneParking,
  handlerDeleteParking,
  handlerCreateParking,
  handlerUpdateParking,
};
