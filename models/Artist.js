const mongoose = require('mongoose');

const ArtistSchema = mongoose.Schema({
  name: String,
  image: String,
  artistIndex: Number,
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song'
  }],
  followers: Number
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
