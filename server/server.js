require("./config/connection");
const express = require("express");
const routes = require("./routes");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

// To log out requests
app.use(logger("dev"));

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// turn on routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
