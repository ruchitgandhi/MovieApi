const express = require('express');
const router = express.Router();

const show_controller = require('../controllers/show.controller');

//Input parameter ID
router.get('/:id', show_controller.getShowById);
module.exports = router;