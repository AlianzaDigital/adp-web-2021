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