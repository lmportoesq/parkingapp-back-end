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

async function createParking(newParking) {
  const parking = await ParkingsModel.create(newParking);
  // ParkingsModel.name = 'HARCOD';
  return parking;
}

async function updateParking(id, newInfo) {
  const updateInfo = await ParkingsModel.findByIdAndUpdate(id, newInfo, { new: true });
  if (!updateInfo) {
    return null;
  }
  return updateInfo;
}

async function getParkingsByFilter(filterConditions) {
  const { cityName } = filterConditions;
  const parkingsFiltered = await ParkingsModel.find({ cityName });
  if (!parkingsFiltered) {
    return null;
  }
  return parkingsFiltered;
}

async function getParkingsByFilterAdmin(filterConditions) {
  const parkingsFiltered = await ParkingsModel.find(filterConditions);
  if (!parkingsFiltered) {
    return null;
  }
  return parkingsFiltered;
}

module.exports = {
  getAllParkings,
  getOneParking,
  deleteParking,
  createParking,
  updateParking,
  getParkingsByFilter,
  getParkingsByFilterAdmin,
};
