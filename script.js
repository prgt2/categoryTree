function skrypt() {
    //$(document).ready(function() {
        //$("button").click(function) {
            $.getJSON('https://www.lionsbet.com/rest/market/categories', function(data) {
                //document.querySelector('.place').innerHTML = data;
                console.log(data);
                var text = "hshs" ;//+ ${data[5]};
                $("place").html(data);
            });
            
       // };
    //});

}