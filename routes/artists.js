const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//base route: localhost:4000/api/v1/artists
router.get('/', ctrl.artists.index);
router.get('/:id', ctrl.artists.show);

module.exports = router;
