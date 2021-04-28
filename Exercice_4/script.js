$(document).ready(function(){

    // on crée la fonction qui change la couleur du text sur click des divs colorées
    function changeTextColor(){

    // On cible toutes les divs colorées deja creés ou qui seront crees plus tard  
        $(".color").click(function(){
        // la boucle for permet de manipuler les divs qui ne sont pas encore crées
        // $(".color").length le nombre de toutes les divs avec la class='color' qui existe dans le html et 

            for(var i =0; i < $(".color").length; i++){
                var idOfColor = $(".color").attr("id");
                $("#texte").css("color", idOfColor);
            } 
         
    })
} 
    $("#texte").click(function(){
        $("body").append("<input type='text' >", "<butoon type='buton'>click</button>")
        $("button").click(function(){
            var newColor = $("input").val();
            var newDiv = $("<div class='color'></div>");
            var parent= $("#parentcolor").append(newDiv);
            var newDiv = $("#parentColor:last-child");
            newDiv.css("background-color", newColor);
            var newDiv.attr("id", newColor);
            
            

        })
    });
    
});
