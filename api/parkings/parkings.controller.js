// const res = require('express/lib/response');

const {
  getAllParkings,
  getOneParking,
  deleteParking,
  createParking,
  //updateParking,
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

async function handlerDeleteParking(req, res) {
  const { id } = req.params;
  const parking = await deleteParking(id);

  if (!parking) {
    res.status(404).json({ message: `Parking not found with id: ${id}, it was not delete` });
  } else {
    res.json(parking);
  }
}

async function handlerCreateParking(req, res) {
  const newParking = req.body;

  try {
    const parking = await createParking(newParking);
    res.status(201).json(parking);
  } catch (error) {
    res.status(500).json(error);
  }
}

/*
function handlerUpdateParking(req, res) {
  const { newInfo } = req;
  const { id } = req.params;
  try {
    const parking = updateParking(id, newInfo);
    res.status(201).json(parking);
  } catch (error) {
    res.status(500).json(error);
  }
  //--------------
  // const id = req.params.id;
  // const { body } = req;

  // const task = updateTask(id, body);

  // if (!task) {
  //   res.status(404).json({ message: `Task not found with id: ${id}` });
  // } else {
  //   res.json(task);
  // }
}
*/

module.exports = {
  handlerAllParkings,
  handlerOneParking,
  handlerDeleteParking,
  handlerCreateParking,
  // handlerUpdateParking,
};
