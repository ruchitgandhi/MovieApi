const express = require('express');
const router = express.Router();

const search_controller = require('../controllers/search.controller');

//Return all movies/shows with Title containing input string.
//Case insensitive check done
router.get('/', search_controller.searchByName);
module.exports = router;