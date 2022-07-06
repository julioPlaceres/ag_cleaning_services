const router = require("express").Router();
const Review = require("../../models/Review");

// GET all Reviews
router.get("/", async (req, res) => {
  const reviewData = await Review.findAll().catch((err) => {
    res.json(err);
  });
  res.json(reviewData);
  console.log(reviewData);
});

// CREATE a Review
router.post("/", async (req, res) => {
  const reviewData = await Review.create(req.body).catch((err) => {
    res.json(err);
  });
  res.json(reviewData);
});

module.exports = router;
