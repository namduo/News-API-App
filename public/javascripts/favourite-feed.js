$.ajax('/favourites', {
    method: 'GET',
    success: function(data){
        console.log(data);
    },
    error: function(error){
        console.log("error: " + error);
    }
});