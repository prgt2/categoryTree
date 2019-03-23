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
    /*function compare(a, b) {
        a.categoryId < b.categoryId ? -1 :  1;
    }
    sportyLvl1Sorted = sportyLvl1.sort(compare)
    console.log(sportyLvl1);
    console.log(sportyLvl1Sorted);  */
    
    sportyLvl1Sorted = sportyLvl1.sort(function(a, b) {
            return a.categoryId - b.categoryId;
        });
        document.getElementById("demo").innerHTML = sportyLvl1Sorted[6].sportName;
        console.log(sportyLvl1Sorted);
    });
};

