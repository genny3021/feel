<html>
<body>
<input type="hidden" name="visibility_grid" id="visibility_grid" value="{"trigger":"core_lang_c","values":{"Igbo":["Nnewi","Isiekenesi","Akokwa"],"Yoruba":["Kogi","Osun","Lagos"],"Hausa":["Niger","Kano","Kaduna"]}}">

<script type="text/javascript">
SUGAR.ddd = {};
SUGAR.util.doWhen("typeof($) != 'undefined'", function()
{
    //Load the jQueryUI CSS
    $('<link>', {

        rel: 'stylesheet',
        type: 'text/css',
        href: 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css'
    }).appendTo('head');

    var mapping = { };
    
    var parentOptions = {"igbo":"Igbo","yoruba":"Yoruba","hausa":"Hausa"};
    var childOptions = [{"value":"Nnewi","label":"Nnewi"},{"value":"Isiekenesi","label":"Isiekenesi"},{"value":"Akokwa","label":"Akokwa"},{"value":"Kogi","label":"Kogi"},{"value":"Osun","label":"Osun"},{"value":"Lagos","label":"Lagos"},{"value":"Niger","label":"Niger"},{"value":"Kano","label":"Kano"},{"value":"Kaduna","label":"Kaduna"}];
    //Load from the field if its on the page
    var targetId = "visibility_grid";
    var idFilterChars = /[^A-Za-z0-9-_]/g; // regex for keeping troublesome chars out of our id.
    
    if ($("#" + targetId).length > 0)
    {
        var data = $.parseJSON($("#" + targetId).val());
        if (data && data.values)
            mapping = data.values;
    }
    //Initialize the grids if mapping wasn't empty
    var p = $("#childTable");
    for(var i in mapping)
    {
        var vals = mapping[i];
        if (i === "") i = "--blank--";
        i = i.replace(idFilterChars, "_");
        var l = $("#ddd_" + i + "_list");
        for(var j = 0; j < vals.length; j++)
        {
            var v = vals[j] === "" ? "--blank--" : vals[j];
            var c  = p.children("li[val=\"" + v + "\"]");
            l.append(c.clone());
        }
    }

    //Disable text selection
    $("#visGridWindow").disableSelection();

    //Create a custom sortable list that prevents duplicate drops
    var listContainsItem = function(list, val)
    {
        var c = list.children('li[val="' + val + '"].original').not("li.ui-sortable-helper, li:hidden");
        return c.length != 0;
    }

    $.widget("ui.sugardddlist", $.extend({}, $.ui.sortable.prototype, {
        //Override the rearrange function to prevent drags into the availible option list or duplicate options into a list
        _rearrange: function(event, i, a, hardRefresh) {
            if(i){
                //If the target list isn't empty and contains the value we are dragging, return.
                var val = this.currentItem.attr("val");
                var p = i.item.parent();
                if (p.attr("id") == "childTable" || (listContainsItem(p, val) && this.currentItem.parent()[0] != p[0]))
                    return true;
            }

            //Call the parent function
            return $.ui.sortable.prototype._rearrange.call(this, event, i, a, hardRefresh);
        }
    }));

    //Child table is the list of items available from the child dropdown on the left side.
    SUGAR.ddd.childTable =  $( "#childTable" ).sugardddlist({
        connectWith: ".ddd_table",
        scope: "ddd_table",
        type: "semi-dynamic", //Semi-dynamic will prevent reordering within this list
        // Prevent the list from automatically scrolling when an item is picked up and moved to
        // the top or bottom of one of the target lists.
        scroll: false,
        helper: function(ev, el){
            return el.clone().show();
        },
        placeholder: {
            element: function(el) {
                if (el[0].id == "ddd_delete")
                    return false;
                //for the child table, we don't hide the item, we just create a clone for dragging
                el.hide();
                SUGAR.ddd.oldPos = el.prev();
                return el.clone().removeClass("original");
            },
            update: function(ev, el) {
                if (!ev.mouseDelayMet && $(el.context).parent()[0] != el.parent()[0]){
                    $(el.context).show();
                    el.css( "opacity", "0.5" );
                }
                el.show();
            }
        },
        remove: function(event, ui) {
            $("ul.ddd_parent_option").removeClass("valid invalid");
            //If the item is being removed, put a clone back in the original list.
            if (SUGAR.ddd.oldPos[0])
                SUGAR.ddd.oldPos.after(ui.item.clone());
            else {
                SUGAR.ddd.childTable.children().first().before(ui.item.clone());
            }
        },
        stop : function(){
            $("ul.ddd_parent_option").removeClass("valid invalid");
        }
    }).disableSelection();

    //Create a list for each option on the parent dropdown
    for (var i in parentOptions)
    {
        if (i == "") i = "--blank--";
        i = i.replace(idFilterChars, "_");
        $( "#ddd_" + i + "_list" ).sugardddlist({
            connectWith: ".ddd_table",
            scope: "ddd_table",
            helper: "clone",
            hoverClass: "hover",
            over: function(event, ui) {
                $("ul.ddd_parent_option").removeClass("valid invalid");
                if (listContainsItem($(this), $(ui.item).attr("val")))
                    $(this).addClass("invalid");
                else
                    $(this).addClass("valid");
            },
            placeholder: {
                element: function(el) {
                    //hide the original and create a clone for dragging
                    el.hide();
                    return el.clone().css( "opacity", "0.5" ).removeClass("original");
                },
                update: function(ev, el) {
                    el.show();
                }
            },
            stop : function(){
                $("ul.ddd_parent_option").removeClass("valid invalid");
            }
        }).disableSelection();
    }

    //Mark all the li's as originals so we can distinguish them from the placeholder clones
    $("ul.ddd_table li").addClass("original");

    //Turn the trash bin into a drop target for deleting items
    $("#ddd_delete").droppable({
        //accept: ".ddd_parent_option li",
        greedy: true,
        scope: "ddd_table",
        hoverClass: 'drophover',
        drop: function (event, ui) {
            $("ul.ddd_parent_option").removeClass("valid invalid");
            ui.draggable.parent("ul").sortable("cancel");
            if(ui.draggable.parent("ul.ddd_parent_option").length)
                ui.draggable.remove();
        }
    });

    var blank = "--blank--";
    //Get mapping is used to get the final output for saving to the vardefs
    SUGAR.ddd.getMapping = function()
    {
        var getlistValues = function(list)
        {
            var c = list.children();
            var ret = [];
            for(var i = 0; i < c.length; i++)
            {
                var v = $(c[i]).attr("val");
                if (v == blank)
                    v = "";
                ret.push(v);
            }
            return ret;
        }
        for (var i in parentOptions)
        {
            var k = i == "" ? blank : i.replace(idFilterChars, "_");
            mapping[i] = getlistValues($( "#ddd_" + k + "_list" ));
        }
        return {
            trigger: $("#parent_dd").val(),
            values : mapping
        };
    }
});
</script>
</body>
</html>