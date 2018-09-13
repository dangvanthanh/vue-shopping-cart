const express = require('express');
const router = express.Router();
const productRoute = require('./product');
const categoryRoute = require('./category');

router.use('/api/products', productRoute);
router.use('/api/categories', categoryRoute);

module.exports = router;
