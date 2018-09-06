const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
  res.render('index', { title: 'Shopping Cart' });
});

module.exports = router;
