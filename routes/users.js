const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//base route: localhost:4000/api/v1/users
router.get('/:id', ctrl.users.show);
router.put('/:id/following/:artistId', ctrl.users.addArtist);
router.delete('/:id/following/:artistId', ctrl.users.removeArtist);
router.put('/:id/likes/:songId', ctrl.users.addSong);
router.delete('/:id/likes/:songId', ctrl.users.removeSong);
router.delete('/:id', ctrl.users.destroy)
router.put('/:id', ctrl.users.edit);

module.exports = router;
