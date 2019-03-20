function skrypt() {
   // $(document).ready(function() {
     //   $("button").click(function() {  //niepotrzebne,  bo w HTML jest  onclick.
            $.getJSON('https://www.lionsbet.com/rest/market/categories',  function(data){
                document.querySelector('.place').innerHTML = data;
                console.log(data);
             //  $(".place").html(data);  // tu html() usuwa tekst "Place", ale nie wstawia obiektu. append() wcale nie działa - w skrypt2 działają, czemu?!
            });
            var text = "hshs" ;//+ ${data[5]};
    //  })   
    //})
    };

//function skrypt2(){
    $(document).ready(function(){
        $("#but02").click(function(){     //tu w HTML nie ma onclick, za to tu jest click(). Obie metody są wymienne, ale ta ponoć nowocześniejsza. Ogólnie wygląda, że skrypty komunikują się ze sobą jako równorzędne (brak centralnego sterowania?)   
          $.getJSON("https://www.lionsbet.com/rest/market/categories", function(result){
            $.each(result, function(i, field){    //za https://www.w3schools.com/jquery/ajax_getjson.asp  i nie do końca kumam jak działa
              $("#id02").html(field + " ");  // tu html() podmienia tekst na obiekt,a append dopisuje obiekt do tekstu. load() tu nie działa.
            });
          });
        });
      });

//};