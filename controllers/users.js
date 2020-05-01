const db = require('../models');

const show = (req, res) => {
  console.log(req.session)
  db.User.findById(req.session.currentUser.id)
  .populate('following')
  .populate('likes')
  // .populate('uploads')
  .exec((err, foundUser) => {
    if (err) return res.status(500).json({ message: "Something went wrong, try again" });
    res.status(200).json(foundUser);
  });
};

const edit = (req, res) => {
  db.User.findByIdAndUpdate(
    req.session.currentUser.id, 
    req.body,
    { new: true },
    (error, foundUser) => {
      if (error) return res.status(500).json({
        status: 500,
        message: error,
      });
    res.status(200).json(foundUser);
  });
};

// follow an artist
const addArtist = async (req, res) => {
  try {
    const updatedUser = await db.User.findById(req.session.currentUser.id);
    // const updatedUser = await db.User.findById(req.params.id);
    updatedUser.following.push(req.params.artistId);
    updatedUser.save();
    res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong, try again" });
  }
};

// unfollow an artist
const removeArtist = async (req, res) => {
  try {
    let updatedUser = await db.User.findById(req.session.currentUser.id);
    // const updatedUser = await db.User.findById(req.params.id);
    updatedUser.players.pull({ _id: req.params.artistId })
    updatedUser.save();
    res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong, try again", err: err });
  };
};

// add song to a user's likes
const addSong = async (req, res) => {
  try {
    console.log(req.session)
    const updatedUser = await db.User.findById(req.session.currentUser.id);
    // const updatedUser = await db.User.findById(req.params.id);
    updatedUser.likes.push(req.params.songId);
    updatedUser.save();
    res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong, try again" });
  }
};

// remove a song from a user's likes
const removeSong = async (req, res) => {
  try {
    const updatedUser = await db.User.findById(req.session.currentUser.id);
    // const updatedUser = await db.User.findById(req.params.id);
    updatedUser.likes.pull({ _id: req.params.songId })
    updatedUser.save();
    res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong, try again", err: err });
  };
};

// delete user's account
const destroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
  // db.User.findByIdAndDelete(req.session.currentUser.id, (err, deletedUser) => {
    if (err) return res.status(500).json({ message: "Something went wrong, try again" });
    res.status(200).json(deletedUser);  
  })
};

module.exports = {
  show,
  edit,
  addArtist,
  removeArtist,
  addSong,
  removeSong,
  destroy
};
