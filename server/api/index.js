const express = require('express');
const router = express.Router();
const productRoute = require('./product');
const categoryRoute = require('./category');
const seederRoute = require('./seeder');

router.use('/api/products', productRoute);
router.use('/api/categories', categoryRoute);
router.use('/api/seeders', seederRoute);

module.exports = router;
