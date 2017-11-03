var posts = {};

// newsSources GET AJAX
$.ajax('/newsSources', {
  method: "GET",

  success: function(data){
    var myData = JSON.parse(data);

    var textTitle = '<ul class="">';

    for (var i = 0; i < myData.sources.length; i++) {

      textTitle += '<li class="newslink"><a href="#" data-source="'+ myData.sources[i].id +'">' + myData.sources[i].name +' </a><a class="addFavourites" href="#"><i class="fa fa-star" id="favourites" aria-hidden="true"></i></a>';
      textTitle += '<p>' + myData.sources[i].description + '</p>';

      //adds a property to the global posts variable for the 'current' news page in the loop
      posts[myData.sources[i].id] = {
        title: myData.sources[i].name,
        description: myData.sources[i].description,
        link: myData.sources[i].url
      };
    }

    textTitle += '</ul>';
    $('#sourceContainer').append(textTitle);

    },
  error:function(error){
      console.log('error: ' + error)
  }
});


// Favourites hover

$('body').on('click', '.addFavourites', function() {
  $(this).toggleClass("addedFavourites");
});

// //when clicking the 'Add to favourites' button, the ajax post request sends the specific news source object (within
// // the posts variable) to the favourites.js file, which then saves it to the favourites database.
//
// $('body').on('click', '#favourites', function(){
//     var id = $(this).parent().attr("identifier"); //gets the specific news source property by means of the identifier
//    $.ajax('../favourites', {
//        method: "POST",
//        data: posts[id], //posts the specific news source property by means of the id defined above
//        title: req.body.title,
//        description: req.body.description,
//        success: function(data){
//            console.log(data);
//        },
//        error: function(error){
//            console.log('error: ' + error)
//        }
//    })
// });


// Article AJAX
$('body').on('click', '.newslink a', function() {
    $.ajax('/news1/' + $(this).attr('data-source'), {
        method: "GET",

        success: function(data){

            var articleData = JSON.parse(data);
            var articleTitle = '<h2>'+ articleData.source +' Top Stories</h2>';

            for (var j = 0; j < articleData.articles.length; j++) {

                articleTitle += '<div class="articleImage" style=\"background-image: url(\''+ articleData.articles[j].urlToImage +'\');\"></div>';
                articleTitle += '<a href="' + articleData.articles[j].url + '" target="_blank"><h4>' + articleData.articles[j].title + '</h4></a>';
                articleTitle += '<p>' + articleData.articles[j].description + '</p>';
                articleTitle += '<p class="published">' + '<strong>Published:</strong> ' + articleData.articles[j].publishedAt + '</p>';

            }
            $('#articlesContainer').empty().append(articleTitle);
        },
        error: function(error){
            console.log('error: ' + error)
        }
    });

});
