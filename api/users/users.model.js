const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
