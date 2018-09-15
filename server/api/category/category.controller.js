const Category = require('./category.model');
const Product = require('../product/product.model');

exports.findByAll = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.findByCategory = async (req, res, next) => {
  try {
    const category = await Category.findOne({ title: req.params.category });
    const products = await Product.find({ category: category.title });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};
