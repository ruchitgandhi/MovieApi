const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const search_controller = require('../controllers/search.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', search_controller.searchByName);
module.exports = router;