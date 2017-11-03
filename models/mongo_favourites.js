var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://138.68.160.137/news_favourites');

var Schema = mongoose.Schema;

var favouritesSchema = new Schema ({
    title: String,
    description: String,
    link: String
});

var favouritesModel = mongoose.model("favourite", favouritesSchema);

module.exports = {
    favourite: favouritesModel
};

