const Product = require('./api/product/product.model');
const Category = require('./api/category/category.model');

module.exports.initialize = () => {
  return {
    Product,
    Category
  };
};
