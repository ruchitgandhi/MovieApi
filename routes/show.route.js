const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const show_controller = require('../controllers/show.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/:id', show_controller.getShowById);
module.exports = router;