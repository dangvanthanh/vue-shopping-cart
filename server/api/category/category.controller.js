const Category = require('./category.model');
const Product = require('../product/product.model');

exports.findByAll = (req, res, next) => {
  Category.find((err, categories) => {
    if (err) {
      return console.log(err);
    }

    res.status(200).json(categories);
  });
};

exports.findByCategory = async (req, res, next) => {
  try {
    const category = await Category.findOne({ title: req.params.category });
    const products = await Product.find({ category: category.title });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};
