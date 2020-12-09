const { Mongoose } = require("mongoose");

//create mongoose user schema
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: TextTrackCue
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model('User', UserSchema);
//export userSchema
module.exports = User;