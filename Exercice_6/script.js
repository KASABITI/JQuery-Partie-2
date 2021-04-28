 $(document).ready(function() {
    $("#red, #blue, #green").mouseenter(function () {
        var divColor = $(this).attr('id');
        $("#text").css("color", divColor);
      });
    
      $("#red, #blue, #green").mouseout(function(){
       $("#text").css("color", "black");
      });
    
     });