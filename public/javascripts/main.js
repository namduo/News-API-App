$.ajax('/api', {
  method: "GET",

  success: function(data){
  var myData = JSON.parse(data);
  console.log(myData);

  var textTitle = '<ul class="">';
  var artcilesLoad = '';

  for (var i = 0; i < myData.sources.length; i++) {

    textTitle += '<li class=""><a href="' + myData.sources[i].url + '" target="_blank">' + myData.sources[i].name + '</a>';
    textTitle += '<p>' + myData.sources[i].description + '</p>';
    textTitle += '<p class="top-stories">' + myData.sources[i].name +' Top Stories > </p>';
    artcilesLoad += '<div class="articles"></div>';

  }

  textTitle += '</ul>';
  document.getElementById('sourceContainer').innerHTML = textTitle;
  // document.getElementById('articlesContainer').innerHTML = artcilesLoad;

  },
  error:function(error){
      console.log('error: ' + error)
  }
});

// Selects .articles child of 'this' parent
$('body').on('click', 'p.top-stories', function () {
    $('.articles').toggleClass('hide');
    //  $(this).parent().find('.articles').toggleClass('hide');
});






//

$.ajax('/news1/api', {
  method: "GET",

  success: function(data){
  var articleData = JSON.parse(data);
	console.log(articleData);

	var articleTitle = '<h1>'+ articleData.source +' Top Stories</h1>';


  for (var j = 0; j < articleData.articles.length; j++) {

  // Image
	articleTitle += '<div class="articleImage" style=\"background-image: url(\''+articleData.articles[j].urlToImage +'\');\"></div>'


  articleTitle += '<a href="' + articleData.articles[j].url + '" target="_blank"><h4>' + articleData.articles[j].title + '</h4></a>';
	articleTitle += '<p>' + articleData.articles[j].description + '</p>';
	articleTitle += '<p class="published">' + '<strong>Published:</strong> ' + articleData.articles[j].publishedAt + '</p>';

  }
  document.getElementById('articlesContainer').innerHTML = articleTitle;


  },
  error:function(error){
      console.log('error: ' + error)
  }
});










//
