const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGO_DB_TEST_URI;

async function connectDB() {
  try {
    await mongoose.connect(URI);
    console.log('MongooDB (parkingapp) is connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;
