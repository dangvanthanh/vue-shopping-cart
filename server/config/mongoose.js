const mongoose = require('mongoose');
const config = require('./');

mongoose.set('debug', true);

exports.connect = () => {
  mongoose.connect(
    config.db,
    { useNewUrlParser: true }
  );
  return mongoose.connection;
};
