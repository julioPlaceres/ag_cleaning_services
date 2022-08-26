const router = require("express").Router();
const reviewRoutes = require("./reviewRoutes");
const galleryRoutes = require("./galleryRoutes");

// Prefix all routes defined in `reviewRoutes.js` with `/reviews
router.use("/reviews", reviewRoutes);
router.use("/gallery", galleryRoutes);

module.exports = router;
