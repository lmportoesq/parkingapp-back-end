//const res = require('express/lib/response');

const {
  getAllParkings,
  getOneParking,
  deleteParking,
  createParking,
} = require('./parkings.services');

async function handlerAllParkings(req, res) {
  const parkings = await getAllParkings();
  res.json(parkings);
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

function handlerDeleteParking(req, res) {
  const { id } = req.params;
  const parking = deleteParking(id);

  if (!parking) {
    res.status(404).json({ message: `Task not found with id: ${id}, it was not delete` });
  } else {
    res.json(parking);
  }
}

async function handlerCreateParking(req, res) {
  const newParking = req.body;
  const parking = await createParking(newParking);

  res.status(201).json(parking);
}

module.exports = {
  handlerAllParkings,
  handlerOneParking,
  handlerDeleteParking,
  handlerCreateParking,
};
