const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({
  title: String,
  url: String,
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  },
  likes: Number
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
