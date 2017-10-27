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
  document.getElementById('articleContainer').innerHTML = articleTitle;


  },
  error:function(error){
      console.log('error: ' + error)
  }
});
