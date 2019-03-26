function skrypt() {
    $.getJSON('https://www.lionsbet.com/rest/market/categories', function(data) {
        var hierarchia = function(){
            var zrodlo = [];
            var sporty = [];

            for (i = 0; i < data.data.length; i++) {
                var sport = data.data[i];
                var nazwaSportu = sport.categoryName;
                var rodzicId = sport.parentCategory;
                var id = sport.categoryId;

                if (sporty[rodzicId]) {
                    
                }

            }
        }





        function dodaj(a, d, e) { // wypluwa posortowaną tablicę obiektów o zadanym levelu d z JSONA a
            var b = []; // b - tablica z obiektami o zadanym levelu
            for (i = 0; i <a.length; i++) { // a - caly JSON
                if (a[i].level === d && a[i].parentCategory === e) { // d - zadany level obiektu
                    b.push(a[i]); // b - tablica z obiektami o zadanym levelu
                }   
            }
            c = b.sort(function(x, y) { // c - posortowane obiekty (w formie tablicy)
                    return x.categoryId - y.categoryId;
                });
            return c;
        }
        var sportyLvl1Sorted = dodaj(data.data, 1, 0);
        console.log(sportyLvl1Sorted);
        console.log(data);
        for (i = 0; i < sportyLvl1Sorted.length; i++) {
            nowyElement = document.createElement('li');
            nowyElement.innerHTML = sportyLvl1Sorted[i].categoryName;
            listaSportyLvl1 = document.getElementById('sportyLvl1');
            listaSportyLvl1.appendChild(nowyElement);
        }
    });

    /*var MasterObject = new Object();
    MasterObject.lvl1 = function() {
        var lvl1 = dodaj(data.data, 1);
        for (i = 0; i < data.data; i++) {
            if (data.data[i].parentCategory === MasterObject.lvl1[i]) {

            }
        }
        
    }*/
};