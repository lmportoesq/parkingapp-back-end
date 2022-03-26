const parkings = [
  {
    id: 1,
    name: 'Doña juana',
    idciudad: 1,
    addres: 'Cra.25 No. 15-43',
    tel: '3547890',
    mean: 4.5,
    value: 2500,
    coords: {
      lat: 4.632507,
      lng: -74.080506,
    },
  },
  {
    id: 2,
    name: 'El viajero',
    idciudad: 1,
    addres: 'Cra.25 No. 15-68',
    tel: '3547896',
    mean: 4.2,
    value: 3500,
    coords: {
      lat: 4.636181,
      lng: -74.091321,
    },
  },
  {
    id: 3,
    name: 'El paisa',
    idciudad: 3,
    addres: 'Cra.18 No. 12-43',
    tel: '3546890',
    mean: 3.5,
    value: 2500,
    coords: {
      lat: 6.242742,
      lng: -75.575300,
    },
  },
  {
    id: 4,
    name: 'El mayorista',
    idciudad: 4,
    addres: 'Cra.44 No. 16-22',
    tel: '3547770',
    mean: 4.9,
    value: 2600,
    coords: {
      lat: 10.393352,
      lng: -75.489281,
    },
  },
  {
    id: 5,
    name: 'El playon',
    idciudad: 5,
    addres: 'Cra.20a No. 07-43',
    tel: '3547390',
    mean: 4.3,
    value: 2800,
    coords: {
      lat: 7.114674,
      lng: -73.115995,
    },
  },
  {
    id: 6,
    name: 'Don Mario',
    idciudad: 5,
    addres: 'Cra.25f No. 15-15',
    tel: '3543390',
    mean: 3.2,
    value: 4500,
    coords: {
      lat: 7.114142,
      lng: -73.110781,
    },
  },
  {
    id: 7,
    name: 'La plazoleta',
    idciudad: 5,
    addres: 'Cra.10 No. 15-43',
    tel: '3557890',
    mean: 2.5,
    value: 2500,
    coords: {
      lat: 7.110619,
      lng: -73.116180,
    },
  },
  {
    id: 8,
    name: 'La pereirana',
    idciudad: 6,
    addres: 'Cra.22 No. 12-32',
    tel: '3546790',
    mean: 4.8,
    value: 1500,
    coords: {
      lat: 4.812029,
      lng: -75.693795,
    },
  },
  {
    id: 9,
    name: 'El calidoso',
    idciudad: 2,
    addres: 'Cra.08 No. 08-20',
    tel: '3547856',
    mean: 4.5,
    value: 7500,
    coords: {
      lat: 3.419942,
      lng: -76.520800,
    },
  },
  {
    id: 10,
    name: 'Don Julian',
    idciudad: 6,
    addres: 'Cra.22 No. 22-20',
    tel: '3547334',
    mean: 4.1,
    value: 2500,
    coords: {
      lat: 4.810729,
      lng: -75.681899,
    },
  },
  {
    id: 11,
    name: 'Don Matias',
    idciudad: 1,
    addres: 'Cra.78B No. 56-63',
    tel: '5243156',
    mean: 4,
    value: 3100,
    coords: {
      lat: 4.644539,
      lng: -74.078116,
    },
  },
];

function getAllParkings() {
  return parkings;
}

function getOneParking(id) {
  const parking = parkings.find((parkings) => parkings.id === Number(id));

  if (!parking) {
    return null;
  }
  return parking;
}

module.exports = {
  getAllParkings,
  getOneParking,
}
