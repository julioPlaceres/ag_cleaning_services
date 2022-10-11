const path = require('path');
require('dotenv').config();
require('./config/connection');
const express = require('express');
const routes = require('./routes');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

// To log out requests
app.use(logger('dev'));

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(`Check node env: ${process.env.NODE_ENV}`);

if (process.env.NODE_ENV === 'production') {
  console.log(`Serving files at: ${path.join(__dirname, '../client/build')}`);
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// turn on routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
