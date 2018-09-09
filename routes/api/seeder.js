const express = require('express');
const router = express.Router();
const faker = require('faker');
const Category = require('../../models/Category');
const Product = require('../../models/Product');

router.get('/', function(req, res, next) {
  const categories = [
    'Baby',
    'Movies',
    'Shoes',
    'Books',
    'Electronics',
    'Computers',
    'Kids'
  ];

  for (let i = 0; i < 20; i++) {
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
});

module.exports = router;
