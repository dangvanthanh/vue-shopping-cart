const express = require('express');
const router = express.Router();
const seederController = require('./seeder.controller');

router.route('/').get(seederController.seeder);

module.exports = router;
