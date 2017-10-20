$.ajax('/news1/api', {
    method: "GET",

    success: function(data){
    var myData = JSON.parse(data);
    console.log(myData);

    // for (var i = 0; i < myData.articles.length; i++) {
    //   // console.log(myData.articles[i]);
    //   // $('.newsAuthor').append(myData.articles[i].author);
    // }

    },
    error:function(error){
        console.log('error: ' + error)
    }
});

$.ajax('/api', {
  method: "GET",

  success: function(data){
  var myData = JSON.parse(data);
  console.log(myData);

  // $('.url').attr("href", myData.sources[4].url);
  // $('.name').append(myData.sources[4].name);
  // $('.description').append(myData.sources[4].description);



  for (var i = 0; i < myData.sources.length; i++) {

    var sourceTitle = $("<a>").attr("href", myData.sources[i].url).append($("<h2>", { text: myData.sources[i].name }).addClass("name"));
    $(".sourceContainer").append(sourceTitle);

    // for (var ii = 0; ii < myData.sources[i].description.length; ii++) {
    //
    //   var sourceDescription = $("<p>", { text: myData.sources[ii].description });
    //   $(sourceTitle).append(sourceDescription);
    //
    // }




    // $(".description").after( $( "h2" ) );
    // var sourceDescription = $("")

  }




  },
  error:function(error){
      console.log('error: ' + error)
  }
});
