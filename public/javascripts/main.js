$.ajax('/api', {
  method: "GET",

  success: function(data){
  var myData = JSON.parse(data);
  console.log(myData);

  var textTitle = '<ul class="">';

  for (var i = 0; i < myData.sources.length; i++) {

    textTitle += '<li class=""><a href="' + myData.sources[i].url + '" onclick="myFunction()" target="_blank">' + myData.sources[i].name + '</a>';
    textTitle += '<p>' + myData.sources[i].description + '</p>';

  }

  textTitle += '<ul>';
  document.getElementById('sourceContainer').innerHTML = textTitle;

  },
  error:function(error){
      console.log('error: ' + error)
  }
});
