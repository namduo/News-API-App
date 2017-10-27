$.ajax('/api', {
  method: "GET",

  success: function(data){
  var myData = JSON.parse(data);
  console.log(myData);

  var textTitle = '<ul class="">';

  for (var i = 0; i < myData.sources.length; i++) {

    textTitle += '<li class=""><a href="' + myData.sources[i].url + '" target="_blank">' + myData.sources[i].name + '</a>';
    textTitle += '<p>' + myData.sources[i].description + '</p>';
    textTitle += '<p class="top-stories">Top Stories</p>';
    textTitle += '<div class="articles hide" id="' + myData.sources[i].id +'"></div>';

  }

  textTitle += '</ul>';
  document.getElementById('sourceContainer').innerHTML = textTitle;

  },
  error:function(error){
      console.log('error: ' + error)
  }
});

// Selects .articles child of 'this' parent
$('body').on('click', 'p.top-stories', function () {
     $(this).parent().find('.articles').toggleClass('hide');
});












//
