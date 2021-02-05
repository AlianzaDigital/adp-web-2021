// SHOW POPOVERS
// $(function () {
//   $('[data-toggle="popover"]').popover()
// })

// $('.popover-dismiss').popover({
//   trigger: 'focus'
// })

// Cambiar icono menu principal xs
$(document).on("click",function(e) {
                    
  let container = $(".menu-adp-estilo");
                     
    if (!container.is(e.target) && container.has(e.target).length === 0) { 
   
      $("#navbarNav").collapse('hide')

      $('#transition-menu').removeClass("icon-menu-close");
      $('#transition-menu').addClass("icon-menu-default");

      $("#backdrop-menu-principal").remove();
      $(".menu-adp-estilo").css('z-index','800')
    }
});

$("#btn-menu-principal-xs").click(function () {
  if ($("#navbarNav").hasClass("show")){
    $('#transition-menu').removeClass("icon-menu-close");
    $('#transition-menu').addClass("icon-menu-default");

    $("#backdrop-menu-principal").remove();

    $(".menu-adp-estilo").css('z-index','800')
    $("#backdrop-menu-principal").css('z-index','1100')
  }
  else{
    $('#transition-menu').removeClass("icon-menu-default");
    $('#transition-menu').addClass("icon-menu-close");

    $('<div id="backdrop-menu-principal" class="modal-backdrop"></div>').appendTo(document.body);

    $(".menu-adp-estilo").css('z-index','1200')
    $("#backdrop-menu-principal").css('z-index','1100')
  }
});

$(document).on("click",function(e) {
                    
  let container = $("#nav-contacto-agil");
                     
    if (!container.is(e.target) && container.has(e.target).length === 0) { 

      $("#navbarMenuAgilMobile").collapse('hide')
      $("#btn_nav_fixed_xs").removeClass('d-none')
      
      $('#img_flecha_fixed').removeClass("icon-slider-anterior-desplegable-abajo");
      $('#img_flecha_fixed').addClass("icon-slider-anterior-desplegable-arriba");

      $("#backdrop-menu-agil").remove();
      $("#nav-contacto-agil").css('z-index','800')
    }
});

// Cambiar icono menu fixed
$("#btn_nav_fixed_xs, .icon-close-agil-xs").on('click', function() {
  $("#btn_nav_fixed_xs").toggleClass('d-none')

  if ($("#navbarMenuAgilMobile").hasClass("show")){
    $('#img_flecha_fixed').removeClass("icon-slider-anterior-desplegable-abajo");
    $('#img_flecha_fixed').addClass("icon-slider-anterior-desplegable-arriba");

    $("#backdrop-menu-agil").remove();
  }else{
    $('#img_flecha_fixed').removeClass("icon-slider-anterior-desplegable-arriba");
    $('#img_flecha_fixed').addClass("icon-slider-anterior-desplegable-abajo");

    $('<div id="backdrop-menu-agil" class="modal-backdrop"></div>').appendTo(document.body);

    $("#nav-contacto-agil").css('z-index','1200')
    $("#backdrop-menu-agil").css('z-index','1100')
  }
});

// HOVER TOOLTIPS XS
$( "#popover-xs-01-01" ).click(function() {
  $('#popover-xs-01-01').popover('toggle')
});
$( "#popover-xs-01-02" ).click(function() {
  $('#popover-xs-01-02').popover('toggle')
});
$( "#popover-xs-01-03" ).click(function() {
  $('#popover-xs-01-03').popover('toggle')
});
$( "#popover-xs-01-04" ).click(function() {
  $('#popover-xs-01-04').popover('toggle')
});
$( "#popover-xs-01-05" ).click(function() {
  $('#popover-xs-01-05').popover('toggle')
});


$( "#popover-xs-02-01" ).click(function() {
  $('#popover-xs-02-01').popover('toggle')
});
$( "#popover-xs-02-02" ).click(function() {
  $('#popover-xs-02-02').popover('toggle')
});


$( "#popover-xs-03-01" ).click(function() {
  $('#popover-xs-03-01').popover('toggle')
});
$( "#popover-xs-03-02" ).click(function() {
  $('#popover-xs-03-02').popover('toggle')
});
$( "#popover-xs-03-03" ).click(function() {
  $('#popover-xs-03-03').popover('toggle')
});
$( "#popover-xs-03-04" ).click(function() {
  $('#popover-xs-03-04').popover('toggle')
});
$( "#popover-xs-03-05" ).click(function() {
  $('#popover-xs-03-05').popover('toggle')
});
$( "#popover-xs-03-06" ).click(function() {
  $('#popover-xs-03-06').popover('toggle')
});
$( "#popover-xs-03-07" ).click(function() {
  $('#popover-xs-03-07').popover('toggle')
});
$( "#popover-xs-03-08" ).click(function() {
  $('#popover-xs-03-08').popover('toggle')
});


$( "#popover-xs-04-01" ).click(function() {
  $('#popover-xs-04-01').popover('toggle')
});
$( "#popover-xs-04-02" ).click(function() {
  $('#popover-xs-04-02').popover('toggle')
});
$( "#popover-xs-04-03" ).click(function() {
  $('#popover-xs-04-03').popover('toggle')
});
$( "#popover-xs-04-04" ).click(function() {
  $('#popover-xs-04-04').popover('toggle')
});
$( "#popover-xs-04-05" ).click(function() {
  $('#popover-xs-04-05').popover('toggle')
});

$( "#popover-xs-05-01" ).click(function() {
  $('#popover-xs-05-01').popover('toggle')
});
$( "#popover-xs-05-02" ).click(function() {
  $('#popover-xs-05-02').popover('toggle')
});
$( "#popover-xs-05-03" ).click(function() {
  $('#popover-xs-05-03').popover('toggle')
});

// HOVER TOOLTIPS WEB
$( "#popover-01-01" ).hover(function() {
  $('#popover-01-01').popover('toggle')
});
$( "#popover-01-02" ).hover(function() {
  $('#popover-01-02').popover('toggle')
});
$( "#popover-01-03" ).hover(function() {
  $('#popover-01-03').popover('toggle')
});
$( "#popover-01-04" ).hover(function() {
  $('#popover-01-04').popover('toggle')
});
$( "#popover-01-05" ).hover(function() {
  $('#popover-01-05').popover('toggle')
});


$( "#popover-02-01" ).hover(function() {
  $('#popover-02-01').popover('toggle')
});
$( "#popover-02-02" ).hover(function() {
  $('#popover-02-02').popover('toggle')
});


$( "#popover-03-01" ).hover(function() {
  $('#popover-03-01').popover('toggle')
});
$( "#popover-03-02" ).hover(function() {
  $('#popover-03-02').popover('toggle')
});
$( "#popover-03-03" ).hover(function() {
  $('#popover-03-03').popover('toggle')
});
$( "#popover-03-04" ).hover(function() {
  $('#popover-03-04').popover('toggle')
});
$( "#popover-03-05" ).hover(function() {
  $('#popover-03-05').popover('toggle')
});
$( "#popover-03-06" ).hover(function() {
  $('#popover-03-06').popover('toggle')
});
$( "#popover-03-07" ).hover(function() {
  $('#popover-03-07').popover('toggle')
});
$( "#popover-03-08" ).hover(function() {
  $('#popover-03-08').popover('toggle')
});


$( "#popover-04-01" ).hover(function() {
  $('#popover-04-01').popover('toggle')
});
$( "#popover-04-02" ).hover(function() {
  $('#popover-04-02').popover('toggle')
});
$( "#popover-04-03" ).hover(function() {
  $('#popover-04-03').popover('toggle')
});
$( "#popover-04-04" ).hover(function() {
  $('#popover-04-04').popover('toggle')
});
$( "#popover-04-05" ).hover(function() {
  $('#popover-04-05').popover('toggle')
});

$( "#popover-05-01" ).hover(function() {
  $('#popover-05-01').popover('toggle')
});
$( "#popover-05-02" ).hover(function() {
  $('#popover-05-02').popover('toggle')
});
$( "#popover-05-03" ).hover(function() {
  $('#popover-05-03').popover('toggle')
});


// Desplazar formulario en posicion fixed con scroll vertical FHD
$(document).ready(function(){
  
  $(window).scroll(function () {
    let offset01 = $('#main').height()  
    let offset02 = $('#section-web-01').height()  
    let offsetTotal = (offset01 + offset02)

    if ($(document).scrollTop() > offsetTotal){
      $('#form-content-fixed-web').addClass("fixed-form");
    } 
    else {
      $('#form-content-fixed-web').removeClass("fixed-form");
    }
  });

});


//AÑADIR CHECK VALIDO AL ABRIR POPUP
$("#aceptar_terminos_popUp_web").on("click", function() {

  if ($("#checkbox_web").is(':checked')){
      $('#modalTerminosCondiciones').modal('hide');
  }
  else{
      $('#modalTerminosCondiciones').modal('hide');
      $("#checkbox_web").prop("checked", true);
  }
});
