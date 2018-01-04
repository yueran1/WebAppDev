var main=function(){
    "use strict";

    var toDos=[
        "Finish writing this book",
        "Take Gracie to the park",
        "Answer emails",
        "Prep for Monday;s class",
        "Make up some new ToDos",
        "Get Groceries"
    ];

    $(".tabs a span").toArray().forEach(function (element){
        //create a click handler for this element
        $(element).on("click",function(){
            //since we're using the jQuery version of element,
            //we'll go ahead and create a temporary variable
            //so we dont need to keep recreating it
            var $element = $(element);
            //This is the way to define content
            var $content, $input, $button;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if($element.parent().is(":nth-child(1)")){
                console.log("FIRST TAB CLICKED!");
            } else if($element.parent().is(":nth-child(2)")){
                $content =$("<ul>");
                toDos.forEach(function(todo){
                    $content.append($("<li>").text(todo));
                });
                $(".container .content").append($content);
            } else if($element.parent().is(":nth-child(3)")){
                console.log("THIRD TAB CLICKED!");
            } else if($element.parent().is(":nth-child(4)")){
                $input=$("<input>");
                $button =$("<button>").text("+");

                $button.on("click", function(){
                    toDos.push($input.val());
                    $input.val("");
                });
                $content= $("<div>").append($input).append($button);
                $(".content").append($content);
            }

            return false;
        });
    });
};

$(document).ready(function () {
    $.getJSON("todos.json", function (toDoObjects){
        main(toDoObjects);
    });
});