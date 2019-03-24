function skrypt() {
    var data = $.getJSON('https://www.lionsbet.com/rest/market/categories');
    //document.querySelector('.place').innerHTML = data.data[5].categoryName;
    function dodaj(a, d, e) { // wypluwa posortowaną tablicę obiektów o zadanym levelu d z JSONA a
        var b = []; // b - tablica z obiektami o zadanym levelu
        for (i = 0; i <a.length; i++) { // a - caly JSON
            if (a[i].level === d && a[i].parentCategory === e) { // d - zadany level obiektu
                b.push(a[i]); // b - tablica z obiektami o zadanym levelu
            }   
        }
        c = b.sort(function(x, y) { // c - posortowane obiekty (e fotmie tablicy?)
                return x.categoryId - y.categoryId;
            });
        return c;
    }
    var sportyLvl1Sorted = dodaj(data, 1, 0);
    console.log(sportyLvl1Sorted);
    console.log(data[3]);
    for (i = 0; i < sportyLvl1Sorted.length; i++) {
        nowyElement = document.createElement('li');
        nowyElement.innerHTML = sportyLvl1Sorted[i].categoryName;
        listaSportyLvl1 = document.getElementById('sportyLvl1');
        listaSportyLvl1.appendChild(nowyElement);
    }
    var MasterObject = new Object();
    MasterObject.lvl1 = function() {
        var lvl1 = dodaj(data.data, 1);
        
    }
};