//create mongoose user schema
const mongoose = require('mongoose');
require('mongoose-type-email');

//TODO: add bookmarks and favorites to schema

//type designates type of data coming in
//unique designates something must be unique and not already used
//required designates a required field
//trim will remove leading and trailing whitespace
//select: false will keep that data from being sent back from db
//minlength: 4 means must be 4 chars or more
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: 4
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    trim:true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  bookmarks: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
  ]
});

const User = mongoose.model('User', UserSchema);

//export userSchema
module.exports = User;