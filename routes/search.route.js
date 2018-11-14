const express = require('express');
const router = express.Router();

const search_controller = require('../controllers/search.controller');

router.get('/', search_controller.searchByName);
module.exports = router;