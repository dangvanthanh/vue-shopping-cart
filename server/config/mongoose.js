const mongoose = require('mongoose');
const config = require('./config');

exports.connect = () => {
  const database = `${config.mongo.uri}${config.mongo.db}`;

  mongoose.connect(
    database,
    { useNewUrlParser: true }
  );

  return mongoose.connection
    .on('connected', () => {
      console.log(`Mongoose connection open on ${database}`);
    })
    .on('error', err => {
      console.log(`Connection error: ${err.message}`);
    });
};
