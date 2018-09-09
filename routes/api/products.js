const express = require('express');
const router = express.Router();
const config = require('../../config');
const Product = require('../../models/Product');

router.get('/', (req, res, next) => {
  let perPage = 6;
  let page = parseInt(req.query.page, 10) || 0;
  let pages = 0;

  Product.count().exec((err, count) => {
    Product.find()
      .limit(perPage)
      .skip(perPage * page)
      .exec((err, products) => {
        pages = Math.floor(count / perPage);

        if (page === 0) {
          res.json({
            products,
            currentPage: page,
            pages,
            count,
            prevUrl: ``,
            nextUrl: `${config.api}/products?page=${page + 1}`
          });
        } else if (page === pages - 1) {
          res.json({
            products,
            currentPage: page,
            pages,
            count,
            prevUrl: `${config.api}/products?page=${page - 1}`,
            nextUrl: ``
          });
        } else if (page > 0 && page < pages) {
          res.json({
            products,
            currentPage: page,
            pages,
            prevUrl: `${config.api}/products?page=${page - 1}`,
            nextUrl: `${config.api}/products?page=${page + 1}`
          });
        } else {
          res.redirect('/products');
        }
      });
  });
});

router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).json(product);
  });
});

module.exports = router;
