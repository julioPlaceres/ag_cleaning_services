// Import and require express and mysql2
const express = require("express");
const routes = require("./routes");
const db = require("./config/connection");
const path = require("path");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// turn on routes
app.use(routes);

// To log out requests
app.use(logger("dev"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
