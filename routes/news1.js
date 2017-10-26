var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/news1.html'));
});



router.get('/api', function(req, res, next) {

  request('https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=d8e2c7eb2cc4491fa50547eb54c1aa61', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    return res.json(body); // Print data to body.

  });
});

module.exports = router;










//
// // Filter Results Function
// function filterResources(data, key, query) {
//
//     // Check if query is empty
//     if (query) {
//
//       //Container for Results
//       var output = [];
//
//       for (var i = 0; i < data.length; i++) {
//         // If Key matchs query
//
//         if (data[i][key].toLowerCase().includes(query.toLowerCase())) {
//
//           // Puts matching information into output container
//           output.push(data[i]);
//         }
//       }
//       // Overwrite the data with output data
//       return output;
//     }
//     return data;
//   }
