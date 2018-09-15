const config = require('../../config/config');
const Product = require('./product.model');

exports.findAll = async (req, res, next) => {
  try {
    let page = parseInt(req.query.page, 10) || 1;
    let limit = 6;

    const products = await Product.paginate({}, { page: page, limit: limit });

    let pages = Math.ceil(products.total / limit);

    res.status(200).json({
      products: products.docs,
      currentPage: page,
      pages
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.findById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};
