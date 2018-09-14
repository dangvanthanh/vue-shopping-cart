const mongoose = require('mongoose');
const config = require('./config');

// mongoose.set('debug', true);

exports.connect = () => {
  mongoose.connect(
    `${config.mongo.uri}${config.mongo.db}`,
    { useNewUrlParser: true }
  );
  return mongoose.connection;
};
