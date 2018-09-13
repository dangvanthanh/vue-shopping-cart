const config = require('../../config');
const Product = require('./product.model');

exports.findAll = async (req, res, next) => {
  let perPage = 8;
  let page = parseInt(req.query.page, 10) || 0;
  let pages = 0;

  Product.countDocuments().exec((err, count) => {
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
};

exports.findById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};
