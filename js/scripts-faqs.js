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


// SCRIPTS ACCORDIONS
$( '#heading01' ).click(function() {
  $('#icon-02, #icon-03, #icon-04, #icon-05, #icon-06, #icon-07, #icon-08, #icon-09, #icon-10, #icon-11').removeClass('icon-slider-anterior-desplegable-arriba')

  $('#icon-02, #icon-03, #icon-04, #icon-05, #icon-06, #icon-07, #icon-08, #icon-09, #icon-10, #icon-11').addClass('icon-slider-anterior-desplegable-abajo')

  if($("#collapse-01").hasClass('show')) {
    $('#icon-01').removeClass('icon-slider-anterior-desplegable-arriba')
    $('#icon-01').addClass('icon-slider-anterior-desplegable-abajo')
  } else{
    $('#icon-01').removeClass('icon-slider-anterior-desplegable-abajo')
    $('#icon-01').addClass('icon-slider-anterior-desplegable-arriba')
  }
})

$( '#heading02' ).click(function() {
  $('#icon-01, #icon-03, #icon-04, #icon-05, #icon-06, #icon-07, #icon-08, #icon-09, #icon-10, #icon-11').removeClass('icon-slider-anterior-desplegable-arriba')

  $('#icon-01, #icon-03, #icon-04, #icon-05, #icon-06, #icon-07, #icon-08, #icon-09, #icon-10, #icon-11').addClass('icon-slider-anterior-desplegable-abajo')

  if($("#collapse-02").hasClass('show')) {
    $('#icon-02').removeClass('icon-slider-anterior-desplegable-arriba')
    $('#icon-02').addClass('icon-slider-anterior-desplegable-abajo')
  } else{
    $('#icon-02').removeClass('icon-slider-anterior-desplegable-abajo')
    $('#icon-02').addClass('icon-slider-anterior-desplegable-arriba')
  }
})

$( '#heading03' ).click(function() {
  $('#icon-01, #icon-02, #icon-04, #icon-05, #icon-06, #icon-07, #icon-08, #icon-09, #icon-10, #icon-11').removeClass('icon-slider-anterior-desplegable-arriba')

  $('#icon-01, #icon-02, #icon-04, #icon-05, #icon-06, #icon-07, #icon-08, #icon-09, #icon-10, #icon-11').addClass('icon-slider-anterior-desplegable-abajo')

  if($("#collapse-03").hasClass('show')) {
    $('#icon-03').removeClass('icon-slider-anterior-desplegable-arriba')
    $('#icon-03').addClass('icon-slider-anterior-desplegable-abajo')
  } else{
    $('#icon-03').removeClass('icon-slider-anterior-desplegable-abajo')
    $('#icon-03').addClass('icon-slider-anterior-desplegable-arriba')
  }
})

$( '#heading04' ).click(function() {
  $('#icon-01, #icon-02, #icon-03, #icon-05, #icon-06, #icon-07, #icon-08, #icon-09, #icon-10, #icon-11').removeClass('icon-slider-anterior-desplegable-arriba')

  $('#icon-01, #icon-02, #icon-03, #icon-05, #icon-06, #icon-07, #icon-08, #icon-09, #icon-10, #icon-11').addClass('icon-slider-anterior-desplegable-abajo')

  if($("#collapse-04").hasClass('show')) {
    $('#icon-04').removeClass('icon-slider-anterior-desplegable-arriba')
    $('#icon-04').addClass('icon-slider-anterior-desplegable-abajo')
  } else{
    $('#icon-04').removeClass('icon-slider-anterior-desplegable-abajo')
    $('#icon-04').addClass('icon-slider-anterior-desplegable-arriba')
  }
})

$( '#heading05' ).click(function() {
  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-06, #icon-07, #icon-08, #icon-09, #icon-10, #icon-11').removeClass('icon-slider-anterior-desplegable-arriba')

  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-06, #icon-07, #icon-08, #icon-09, #icon-10, #icon-11').addClass('icon-slider-anterior-desplegable-abajo')

  if($("#collapse-05").hasClass('show')) {
    $('#icon-05').removeClass('icon-slider-anterior-desplegable-arriba')
    $('#icon-05').addClass('icon-slider-anterior-desplegable-abajo')
  } else{
    $('#icon-05').removeClass('icon-slider-anterior-desplegable-abajo')
    $('#icon-05').addClass('icon-slider-anterior-desplegable-arriba')
  }
})

$( '#heading06' ).click(function() {
  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-05, #icon-07, #icon-08, #icon-09, #icon-10, #icon-11').removeClass('icon-slider-anterior-desplegable-arriba')

  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-05, #icon-07, #icon-08, #icon-09, #icon-10, #icon-11').addClass('icon-slider-anterior-desplegable-abajo')

  if($("#collapse-06").hasClass('show')) {
    $('#icon-06').removeClass('icon-slider-anterior-desplegable-arriba')
    $('#icon-06').addClass('icon-slider-anterior-desplegable-abajo')
  } else{
    $('#icon-06').removeClass('icon-slider-anterior-desplegable-abajo')
    $('#icon-06').addClass('icon-slider-anterior-desplegable-arriba')
  }
})

$( '#heading07' ).click(function() {
  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-05, #icon-06, #icon-08, #icon-09, #icon-10, #icon-11').removeClass('icon-slider-anterior-desplegable-arriba')

  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-05, #icon-06, #icon-08, #icon-09, #icon-10, #icon-11').addClass('icon-slider-anterior-desplegable-abajo')

  if($("#collapse-07").hasClass('show')) {
    $('#icon-07').removeClass('icon-slider-anterior-desplegable-arriba')
    $('#icon-07').addClass('icon-slider-anterior-desplegable-abajo')
  } else{
    $('#icon-07').removeClass('icon-slider-anterior-desplegable-abajo')
    $('#icon-07').addClass('icon-slider-anterior-desplegable-arriba')
  }
})

$( '#heading08' ).click(function() {
  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-05, #icon-06, #icon-07, #icon-09, #icon-10, #icon-11').removeClass('icon-slider-anterior-desplegable-arriba')

  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-05, #icon-06, #icon-07, #icon-09, #icon-10, #icon-11').addClass('icon-slider-anterior-desplegable-abajo')

  if($("#collapse-08").hasClass('show')) {
    $('#icon-08').removeClass('icon-slider-anterior-desplegable-arriba')
    $('#icon-08').addClass('icon-slider-anterior-desplegable-abajo')
  } else{
    $('#icon-08').removeClass('icon-slider-anterior-desplegable-abajo')
    $('#icon-08').addClass('icon-slider-anterior-desplegable-arriba')
  }
})

$( '#heading09' ).click(function() {
  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-05, #icon-06, #icon-07, #icon-08, #icon-10, #icon-11').removeClass('icon-slider-anterior-desplegable-arriba')

  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-05, #icon-06, #icon-07, #icon-08, #icon-10, #icon-11').addClass('icon-slider-anterior-desplegable-abajo')

  if($("#collapse-09").hasClass('show')) {
    $('#icon-09').removeClass('icon-slider-anterior-desplegable-arriba')
    $('#icon-09').addClass('icon-slider-anterior-desplegable-abajo')
  } else{
    $('#icon-09').removeClass('icon-slider-anterior-desplegable-abajo')
    $('#icon-09').addClass('icon-slider-anterior-desplegable-arriba')
  }
})

$( '#heading10' ).click(function() {
  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-05, #icon-06, #icon-07, #icon-08, #icon-09, #icon-11').removeClass('icon-slider-anterior-desplegable-arriba')

  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-05, #icon-06, #icon-07, #icon-08, #icon-09, #icon-11').addClass('icon-slider-anterior-desplegable-abajo')

  if($("#collapse-10").hasClass('show')) {
    $('#icon-10').removeClass('icon-slider-anterior-desplegable-arriba')
    $('#icon-10').addClass('icon-slider-anterior-desplegable-abajo')
  } else{
    $('#icon-10').removeClass('icon-slider-anterior-desplegable-abajo')
    $('#icon-10').addClass('icon-slider-anterior-desplegable-arriba')
  }
})

$( '#heading11' ).click(function() {
  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-05, #icon-06, #icon-07, #icon-08, #icon-09, #icon-10').removeClass('icon-slider-anterior-desplegable-arriba')

  $('#icon-01, #icon-02, #icon-03, #icon-04, #icon-05, #icon-06, #icon-07, #icon-08, #icon-09, #icon-10').addClass('icon-slider-anterior-desplegable-abajo')

  if($("#collapse-11").hasClass('show')) {
    $('#icon-11').removeClass('icon-slider-anterior-desplegable-arriba')
    $('#icon-11').addClass('icon-slider-anterior-desplegable-abajo')
  } else{
    $('#icon-11').removeClass('icon-slider-anterior-desplegable-abajo')
    $('#icon-11').addClass('icon-slider-anterior-desplegable-arriba')
  }
})