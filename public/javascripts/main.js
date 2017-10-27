// Source AJAX
$.ajax('/newsSources', {
  method: "GET",

  success: function(data){
    var myData = JSON.parse(data);

    var textTitle = '<ul class="">';

    for (var i = 0; i < myData.sources.length; i++) {

      textTitle += '<li class="newslink"><a href="#" data-source="'+ myData.sources[i].id +'">' + myData.sources[i].name + '</a>';
      textTitle += '<p>' + myData.sources[i].description + '</p>';

    }

    textTitle += '</ul>';
    $('#sourceContainer').append(textTitle);

    },
  error:function(error){
      console.log('error: ' + error)
  }
});


// Article AJAX
$('body').on('click', '.newslink a', function() {
    $.ajax('/news1/' + $(this).attr('data-source'), {
        method: "GET",

        success: function(data){
          
            var articleData = JSON.parse(data);
            var articleTitle = '<h2>'+ articleData.source +' Top Stories</h2>';

            for (var j = 0; j < articleData.articles.length; j++) {

                articleTitle += '<div class="articleImage" style=\"background-image: url(\''+articleData.articles[j].urlToImage +'\');\"></div>';
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
