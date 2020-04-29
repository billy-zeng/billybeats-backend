const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song'
  }],
  uploads: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song'
  }],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
