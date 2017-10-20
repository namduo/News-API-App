$.ajax('../../routes/news1.js', {
    method: "GET",
    success: function(data){
        console.log(data);
        $('#newsData').append(data.status);
    },
    error:function(error){
        console.log('error: ' + error)
    }
});

