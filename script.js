function skrypt() {
    //$(document).ready(function() {
        //$("button").click(function) {
            $.getJSON('https://www.lionsbet.com/rest/market/categories', function(data) {
<<<<<<< HEAD
                //var a = JSON.parse(data.data)
                document.querySelector('.place').innerHTML = data.data[5].categoryName;
                console.log(a);
                var text = data ;//+ ${data[5]};
=======
                //document.querySelector('.place').innerHTML = data;
                console.log((data);
                var text = "hshs" ;//+ ${data[5]};
>>>>>>> 2310
                $("place").html(data);
            });
            
       // };
    //});

}