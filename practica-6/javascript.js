/*Efecto animation sobre las imagenes de quieres saber más...*/ 
$(document).ready(function(){
  $('#hide').click(function(){
    $("#hide").show();
  });
    $('.prueba').mouseenter(function(){
        var div = $('.prueba');
        div.animate({width: '100px'},"slow");
        div.animate({fontSize: '20px'},"slow");
    });
    $('.prueba').dblclick(function(){
      var div = $('.prueba');
      div.animate({width: '250px'});
      div.animate({fontSize: '22px'});
     });

  /*Boton que realiza el efecto de slideUp y SlideDown*/
      $("button").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(1500);
      });      
});
