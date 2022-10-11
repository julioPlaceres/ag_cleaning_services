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

// turn on routes
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  console.log(path.join(__dirname, '../build'));
  app.use(express.static(path.join(__dirname, '../build')));
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
