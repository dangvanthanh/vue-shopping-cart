const express = require('express');
const router = express.Router();
const productController = require('./product.controller');

router.route('/').get(productController.findAll);
router.route('/:id').get(productController.findById);
router.route('/related').get(productController.findRelated);

module.exports = router;
