const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//base route: localhost:4000/api/v1/songs
router.get('/', ctrl.songs.index);
router.get('/:id', ctrl.songs.show);

module.exports = router;
