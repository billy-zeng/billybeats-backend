const db = require('../models');

const index = (req, res) => {
  db.Team.find({})
  .populate('songs')
  .exec((err, allArtists) => {
    if (err) return res.status(500).json({ message: "Something went wrong, try again"});
    res.status(200).json(allArtists);
  });
};

const show = (req, res) => {
  db.Team.findById(req.params.id)
    .populate('songs')
    .exec((err, foundArtist) => {
      if (err) return res.status(500).json({ message: "Something went wrong, try again"});
    res.status(200).json(foundTeam);
  });
};

module.exports = {
  index,
  show,
}
