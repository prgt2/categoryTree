function skrypt() {
    $.getJSON('https://www.lionsbet.com/rest/market/categories', function(data) {
    document.querySelector('.place').innerHTML = data.data[5].categoryName;
    var sporty = data.data;
    var sportyLvl1 = [];
    var sportyLvl1Sorted = [];
    for (i = 0; i <sporty.length; i++) {
        if (sporty[i].level === 1) {
            sportyLvl1.push(sporty[i]);
        }   
    }
    sportyLvl1Sorted = sportyLvl1.sort(function(a, b) {
            return a.categoryId - b.categoryId;
        });
    //document.getElementById('demo').innerHTML = sportyLvl1Sorted[5].categoryName;
    console.log(sportyLvl1Sorted[5].categoryName);
    for (i = 0; i < sportyLvl1.length; i++) {
        nowyElement = document.createElement('li');
        nowyElement.innerHTML = sportyLvl1Sorted[i].categoryName;
        listaSportyLvl1 = document.getElementById('sportyLvl1');
        listaSportyLvl1.appendChild(nowyElement);
    }
    //console.log(sportyLvl1Sorted[5].categoryName);
    });
};

