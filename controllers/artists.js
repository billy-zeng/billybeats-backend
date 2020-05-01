const db = require('../models');

const index = (req, res) => {
  db.Artist.find({})
  .populate('songs')
  .exec((err, allArtists) => {
    if (err) return res.status(500).json({ message: "Something went wrong, try again"});
    res.status(200).json(allArtists);
  });
};

const show = (req, res) => {
  db.Artist.findById(req.params.id)
    .populate('songs')
    .exec((err, foundArtist) => {
      if (err) return res.status(500).json({ message: "Something went wrong, try again"});
    res.status(200).json(foundArtist);
  });
};

module.exports = {
  index,
  show,
}
