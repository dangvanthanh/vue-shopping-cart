const faker = require('faker');
const Product = require('../product/product.model');
const Category = require('../category/category.model');

exports.seeder = (req, res, next) => {
  const categories = [
    'baby',
    'movies',
    'shoes',
    'books',
    'electronics',
    'computers',
    'kids'
  ];

  for (let i = 0; i < 50; i++) {
    let product = new Product({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      category: categories[Math.floor(Math.random() * categories.length)],
      description: faker.lorem.paragraph(),
      image: 'https://images-na.ssl-images-amazon.com/images/I/4196ru-rkjL.jpg'
    });

    product.save();
  }

  for (let i = 0; i < categories.length; i++) {
    let cat = new Category({
      title: categories[i]
    });
    cat.save();
  }

  res.json({ success: true });
};
