const mongoose = require('mongoose');

// const URI = process.env.MONGO_DB_URI;
const URI = 'mongodb+srv://admin:9okUqKK7QGeaNlEO@parking-app.hwkch.mongodb.net/test';

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
