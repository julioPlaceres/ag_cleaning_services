const router = require("express").Router();
const Gallery = require("../../models/Gallery");

// Needs to be Modify for Gallery
router.get("/", (req, res) => {
  Gallery.find({})
    .then((dbImg) => {
      res.json(dbImg);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
