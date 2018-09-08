const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: String
});

module.exports = mongoose.model('Category', CategorySchema);
