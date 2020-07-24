// check off specific Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// add a new item to the list
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$("#plus").click(function() {
    $("input[type='text']").fadeToggle();
})