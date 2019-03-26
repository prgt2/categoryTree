function skrypt() {
    $.getJSON('https://www.lionsbet.com/rest/market/categories', function(data) {
        var builddata = function () {
            var source = [];
            var items = [];
            for (i = 0; i < data.data.length; i++) {
                var item = data.data[i];
                var label = item["categoryName"];
                var parentid = item["parentCategory"];
                var id = item["categoryId"];

                if (items[parentid]) {
                    var item = { parentid: parentid, label: label, item: item };
                    if (!items[parentid].items) {
                     items[parentid].items = [];
                    }
                    items[parentid].items[items[parentid].items.length] = item;
                    items[id] = item;
                }
                else {
                    items[id] = { parentid: parentid, label: label, item: item };
                    source[id] = items[id];
                }
            }
            return source;
        }
        var source = builddata();
        console.log(source)
        document.getElementById('sportyLvl1').innerHTML = source
        
        var buildUL = function (parent, items) {
            $.each(items, function () {
                if (this.label) {
                    // create LI element and append it to the parent element.
                    var li = $("<li>" + this.label + "</li>");
                    li.appendTo(parent);
                    // if there are sub items, call the buildUL function.
                    if (this.items && this.items.length > 0) {
                        var ul = $("<ul></ul>");
                        ul.appendTo(li);
                        buildUL(ul, this.items);
                    }
                }
            });
        }
        var ul = $("<ul></ul>");
        ul.appendTo("#sportyLvl1");
        buildUL(ul, source);
                     
    })
}

