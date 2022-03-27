require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const configExpress = require('./config/express');
const routes = require('./routes');

const app = express();

configExpress(app);
routes(app);

const url = 'mongodb+srv://jlopezsa:veU1RfOrAevnUwSh@julianlopez.teizv.mongodb.net/ParkingApp?retryWrites=true&w=majority';
mongoose.connect(url);

const ParkingSchema = new mongoose.Schema({
  name: String,
  idciudad: Number,
  addres: String,
  tel: Number,
  mean: Number,
  value: Number,
  coords: Object,
});

const Parking = mongoose.model('Parking', ParkingSchema);

const parking = new Parking({
  name: 'El social',
  idciudad: 1,
  addres: 'Calle 84 # 103-56',
  tel: 579652,
  mean: 3.8,
  value: 2222,
  coords: {
    lat: 4.3,
    lng: -75.10010,
  },
});

parking.save();

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server runnig at http://localhost:${port}/`);
});
