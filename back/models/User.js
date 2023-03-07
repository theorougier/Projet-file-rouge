const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: false,
    unique: true,
  },
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
  },
  fav: {
    type: Object,
    require: true,
  },
  frequency: {
    type: Number,
    require: true,
  },
  beginningNotification: {
    type: Number,
    require: true
  },
  stopNotification: {
    type: Number,
    require: true
  } 
});

module.exports = mongoose.model('User', UserSchema);
