var express = require('express');
var router = express.Router();
var path = require('path');
var favourite = require('../models/favourite_model');


module.exports = router;

router.get("/", function(req, res, next) {

	favourite.find({})
  .exec(function(err, favourites) {
    if (err) return next(err);
    res.json(favourites);
  });

});


// POST /favourites
// Add to favourites
router.post("/", function(req, res, next) {
  console.log(req.body);

  favourite.create({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    url: req.body.url
  }, function(err, data) {
    if (!err) {
      res.status(200);
      res.json({
        message: "Added to favourite: " + req.body.favourite
      });
    }
  });

});
