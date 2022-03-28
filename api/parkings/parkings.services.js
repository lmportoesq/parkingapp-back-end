const req = require('express/lib/request');
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
  console.log('-------> FLAG-04', parking);
  if (!parking) {
    return null;
  }
  return parking;
}

function createParking(newParking) {
  const parking = ParkingsModel.create(newParking);
  return parking;
}

function updateParking(id, newInfo) {
  let oldParking = ParkingsModel.findById(id);
  console.log('-------> FLAG-01', id);
  console.log('-------> FLAG-02', newInfo);
  console.log('-------> FLAG-03', oldParking);

  if (!oldParking) {
    return null;
  }
  const updateInfo = oldParking;
  // {
  //   ...oldParking,
  //   name: newInfo.name,
  // };

  console.log('-------> FLAG-04', updateInfo);
  return updateInfo;
  //----------------

  // const parking = await ParkingsModel.findById(id);

  // const parkingUpdate = await ParkingsModel.findByIdAndUpdate(id, newInfo, {
  //   returnOriginal: false,
  // });
  // if (!parking) {
  //   return null;
  // }
  // return parking;
}

module.exports = {
  getAllParkings,
  getOneParking,
  deleteParking,
  createParking,
  updateParking,
};
