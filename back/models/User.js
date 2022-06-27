const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    require: true,
  },
  preferences: {
    type: Object,
    require: true,
  }
});

module.exports = mongoose.model('User', UserSchema);
