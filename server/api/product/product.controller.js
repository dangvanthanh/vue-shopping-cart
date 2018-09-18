const config = require('../../config/config');
const Product = require('./product.model');

exports.findAll = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const pagesize = 6;
    const products = await Product.paginate(
      {},
      { page: page, limit: pagesize }
    );

    res.status(200).json({
      products: products.docs,
      currentPage: page,
      pages: products.pages
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.findById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    res.json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};
