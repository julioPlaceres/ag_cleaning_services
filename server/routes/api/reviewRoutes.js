const router = require("express").Router();
const Review = require("../../models/Review");

// GET all Reviews
router.get("/", (req, res) => {
  Review.find({})
    .sort({ review_date: -1 })
    .then((dbReview) => {
      res.json(dbReview);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// CREATE a Review
router.post("/", ({ body }, res) => {
  Review.create(body)
    .then((dbReview) => {
      res.json(dbReview);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
