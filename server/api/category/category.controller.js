const Category = require('./category.model');
const Product = require('../product/product.model');

exports.findByAll = async (req, res, next) => {
  try {
    const categories = await Category.find().lean();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.findByCategory = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const pagesize = 6;
    const category = await Category.findOne({
      title: req.params.category
    }).lean();
    const products = await Product.paginate(
      { category: category.title },
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
