const router = require('express').Router();
const apiRoutes = require('./api');

// Prefix all routes defined in the api directory with `/api`
router.use('https://vast-stream-13430.herokuapp.com/api', apiRoutes);

module.exports = router;
