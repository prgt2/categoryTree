function skrypt() {
   // $(document).ready(function() {
     //   $("button").click(function() {
            $.getJSON('https://www.lionsbet.com/rest/market/categories', data1, function(data1){
                document.querySelector('.place').innerHTML = data1;
                console.log(data1);
            });
            var text = "hshs" ;//+ ${data[5]};
    //  })   
    //})
    };

function skrypt2(){
    $(document).ready(function(){
        $("button").click(function(){
          $.getJSON("https://www.lionsbet.com/rest/market/categories", function(result){
            $.each(result, function(i, field){
              $("#div01").append(field + " ");
            });
          });
        });
      });

};