const ParkingsModel = require('./parkings.model');

function getAllParkings() {
  return ParkingsModel.find();
}

async function getOneParking(id) {
  const parking = await ParkingsModel.findById(id);

  if (!parking) {
    return null;
  }
  return parking;
}

function deleteParking(id) {
  const parking = ParkingsModel.findByIdAndDelete(id);
  if (!parking) {
    return null;
  }
  return parking;
}

function createParking(newParking) {
  const parking = ParkingsModel.create(newParking);
  return parking;
}

// function updateParking(id, parking){
//   return parking;
// }

module.exports = {
  getAllParkings,
  getOneParking,
  deleteParking,
  createParking,
};
