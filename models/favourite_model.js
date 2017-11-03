
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/addFavourites');

var Schema = mongoose.Schema;

var favouritesSchema = new Schema ({
    name: String,
    description: String,
    url: String
});

var favouritesModel = mongoose.model("favourite", favouritesSchema);

module.exports = {
    favourite: favouritesModel
};
