const router = require("express").Router();
const reviewRoutes = require("./reviewRoutes");

// Prefix all routes defined in `reviewRoutes.js` with `/reviews
router.use("/reviews", reviewRoutes);

module.exports = router;
