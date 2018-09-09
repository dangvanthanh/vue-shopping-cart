const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const config = require('./config');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set(express.static(__dirname + '/public'));

mongoose.connect(
  config.db,
  { useNewUrlParser: true }
);
mongoose.set('debug', true);

require('./models/Product');
require('./models/Category');

app.use(routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

const server = app.listen(3000, () => {
  console.log(`Listening on port ${server.address().port}`);
});
