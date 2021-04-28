$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("border","5px solid green")

    });
    $("input").blur(function(){
        $(this).css("border","5px solid red")

    });
})