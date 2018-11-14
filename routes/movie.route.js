const express = require('express');
const router = express.Router();

const movie_controller = require('../controllers/movie.controller');

router.get('/:id', movie_controller.getMovieById);
module.exports = router;