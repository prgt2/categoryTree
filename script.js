
$(document).ready(function() {
    $("button").click(function) {
        $get("https://www.lionsbet.com/rest/market/categories", function(data) {
            document.querySelector('.place').innerHTML = JSON.parse(data);
            console.log(data);
        }, JSON);
    });
});


