var express = require('express');
var router = express.Router();
var favourites = require('../models/mongo_favourites');


//to fetch the results based on the title
router.get('/', function(req, res, next){
    favourites.favourite.find({title: req.query.title}, function(err, data){
        console.log('success' + data);
        res.json(data);
    })
});

//to create a new favourite
router.post('/', function(req, res, next){
    favourites.favourite.create({
        title: req.body.title,
        description: req.body.description,
        link: req.body.link
    }, function(err, data){
        if(!err){
            res.status(200);
            res.json({
                status: 'All good'
            })
        }
    })
});

module.exports = router;