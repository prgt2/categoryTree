function skrypt() {
    $.getJSON('https://www.lionsbet.com/rest/market/categories', function(data) {
        var builddata = function () {
            var source = [];
            var items = [];
            for (i = 0; i < data.data.length; i++) {
                var item = data.data[i];
                var label = item.categoryName;
                var parentid = item.parentCategory;
                var id = item.categoryId;
                var eventsCount = item.eventsCount;

                if (items[parentid]) {
                    var item = { parentid: parentid, label: label, item: item, eventsCount: eventsCount };
                    if (!items[parentid].items) {
                     items[parentid].items = [];
                    }
                    items[parentid].items[items[parentid].items.length] = item;
                    items[id] = item;
                }
                else {
                    items[id] = { parentid: parentid, label: label, item: item, eventsCount: eventsCount };
                    source[id] = items[id];
                }
            }
            return source; 
        }
        
        var source = builddata()
        source = source.filter(function(i) {
            return i != null
        })

        var buildMenu = function (parent, i) { 
            $.each(i, function () { //dla kazdego elementu iterowanego zbioru wykonuje funkcję
                if (this.items[0].items) { // uruchamia się, jeśli ten element ma dwie podtablice, ie jest najwyższej kategorii rodzicem
                    var button = $("<button class=\"collapsible Lvl1\"><span class =\"left\">" + this.label + "</span><span class =\"right\">" + this.eventsCount + "</span><span class=\"toggle-text right\">+</span></button>"); //dodaje buttona z klasą Lvl1
                    button.appendTo(parent)
                    if (this.items) { //dodaje divboxa po elemncie rodzicu dla dzieci
                        var divbox = $("<div class =\"content divlvl1\"></div>");
                        divbox.insertAfter(button)
                    }
                    
                    if (this.items && this.items.length > 0) {
                        buildMenuLvl2(divbox, this.items) //wywołuje całą fukcję na nowo, jako parent ustawiając divboxa i jako iterowany zbiór dzieci pierwszego poziomu
                    }
                    
                }
            });
        }

        var buildMenuLvl2 = function (parent, i) {
            $.each(i, function () {
                if (this.items) {
                    var button = $("<button class=\"collapsible Lvl2\"><span class =\"left\">" + this.label + "</span><span class =\"right\">" + this.eventsCount + "</span><span class=\"toggle-text right\">+</span></button>"); //dodaje buttona z klasą Lvl2
                    button.appendTo(parent)
                    if (this.items) {
                        var divbox = $("<div class =\"content divlvl2\"></div>");
                        divbox.insertAfter(button)
                    }
                    
                    if (this.items && this.items.length > 0) {
                        buildMenuLvl3(divbox, this.items)
                    }
                }
            })
        }

        var buildMenuLvl3 = function (parent, i) {
            $.each(i, function() {
                if (this.label) {
                    var button = $("<button class=\"Lvl3\"><span class =\"left\"><form><input type=\"checkbox\" name=\"match\" value=\"match_1\">" + this.label + "</form></span></button>"); //dodaje buttona z klasą Lvl3
                    button.appendTo(parent);
                }
            })
        }

        var nav = $("<nav></nav>")
        nav.appendTo("body")
        buildMenu(nav, source)   
        var coll =  $(".collapsible")

        $(coll).each(function() {
            $(this).on("click", function() {
                var rest = $(this).siblings(".collapsible");
                var restOfRest = $(this).siblings("div").children(".collapsible")
                    $(restOfRest).each(function() {
                        $(this).find(".toggle-text").text("+")
                    })
                if ($(this).find(".toggle-text").text() == "+") {
                    $(this).find(".toggle-text").text("-")
                    $(rest).each(function() {
                        console.group('this:    ' + this);
                        $(this).find(".toggle-text").text("+")
                    })
                } else if ($(this).find(".toggle-text").text() == "-") {
                    $(this).find(".toggle-text").text("+")
                } 
            })
        })
       
        $(coll).each(function() {
            $(this).on("click", function() {
                $(this).toggleClass("active")
                var content = $(this).next()
                var rest = $(content).siblings("div")
                if ($(rest).children("div").is(":visible")) {
                    $(rest).find(".divlvl2").hide()
                }
                if ($(content).find(".divlvl2").is(":visible")) {
                    $(content).find(".divlvl2").hide()
                }
                if ($(content).is(":visible")) {
                    $(content).hide("slow")
                } else {
                    $(content).show("slow")
                }
                if ($(rest).is(":visible")) {
                    $(rest).hide("slow")
                }
            })
        })
    })
}
