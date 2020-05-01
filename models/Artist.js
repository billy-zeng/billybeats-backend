const mongoose = require('mongoose');

const ArtistSchema = mongoose.Schema({
  name: String,
  url: String,
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song'
  }],
  followers: Number
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
