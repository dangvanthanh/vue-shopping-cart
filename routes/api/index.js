const router = require('express').Router();
const products = require('./products');
const categories = require('./categories');
const seeder = require('./seeder');

router.use('/products', products);
router.use('/categories', categories);
router.use('/seeder', seeder);

module.exports = router;
