const express = require('express');
const router = express.Router();
const categoryController = require('./category.controller');

router.route('/').get(categoryController.findByAll);
router.route('/:category').get(categoryController.findByCategory);

module.exports = router;
