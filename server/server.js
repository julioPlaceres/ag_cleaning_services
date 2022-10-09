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

// app.use(
//   '/images',
//   express.static(path.join(__dirname, '../client/src/components/images'))
// );

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// turn on routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
