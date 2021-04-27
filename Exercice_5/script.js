$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("border","3px solid green")

    });
    $("input").blur(function(){
        $(this).css("border","1px solid red")

    });
})