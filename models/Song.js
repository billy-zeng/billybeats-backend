const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({
  title: String,
  url: String,
  // genre: String,
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  }
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
