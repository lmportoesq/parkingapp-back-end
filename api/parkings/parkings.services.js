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

async function deleteParking(id) {
  const parking = await ParkingsModel.findByIdAndDelete(id);

  if (!parking) {
    return null;
  }
  return parking;
}

function createParking(newParking) {
  const parking = ParkingsModel.create(newParking);
  return parking;
}

async function updateParking(id, newInfo) {
  const updateInfo = await ParkingsModel.findByIdAndUpdate(id, newInfo, {
    returnOriginal: false,
  });

  if (!updateInfo) {
    return null;
  }
  return updateInfo;
}

module.exports = {
  getAllParkings,
  getOneParking,
  deleteParking,
  createParking,
  updateParking,
};
