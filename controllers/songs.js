const db = require('../models');

const index = (req, res) => {
  db.Song.find({})
  .populate('artist')
  .exec((err, allSongs) => {
    if (err) return res.status(500).json({ message: "Something went wrong, try again"});
    res.status(200).json(allSongs);
  });
};

const show = (req, res) => {
  db.Song.findById(req.params.id)
    .populate('artist')
    .exec((err, foundSong) => {
      if (err) return res.status(500).json({ message: "Something went wrong, try again"});
    res.status(200).json(foundSong);
  });
};

module.exports = {
  index,
  show,
}
