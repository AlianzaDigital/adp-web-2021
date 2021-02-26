//FORMULARIO PC
$(document).ready(function(){
  $("#btn_paso_01").click(function(){
    $("#contactForm").submit();
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


$('#telephone_fixed_web').on('input', function () { 
  this.value = this.value.replace(/[^0-9]/g,'');
});

// GET URL UTM CAMPAINGS
$( document ).ready(function() {
  let previousURL = document.referrer
  $('#previousURL').attr('value', previousURL)

  if (previousURL.includes('pauta-facebook-ads')) {
    $('#getPreviousURL').attr('value','pauta-facebook-ads')
  }
  else if (previousURL.includes('pauta-google-search')) {
    $('#getPreviousURL').attr('value','pauta-google-search')
  }
  else{
    $('#getPreviousURL').attr('value','seo-sitio-web')
  }
});

// Validate state First Name
$("#first_name_fixed_web").blur(function(){
  if ($("#first_name_fixed_web").val() === ""){
    $("#first_name_fixed_web").addClass("error");
  }
  else{
    $("#first_name_fixed_web").removeClass("error");
  }
});

// Validate state Email
$("#email_fixed_web").blur(function(){
  if ($("#email_fixed_web").val() === ""){
    $("#email_fixed_web").addClass("error");
  }
  else{
    $("#email_fixed_web").removeClass("error");
  }
});

// Validate state Telephone
$("#telephone_fixed_web").blur(function(){
  if ($("#telephone_fixed_web").val() === ""){
    $("#telephone_fixed_web").addClass("error");
  }
  else{
    $("#telephone_fixed_web").removeClass("error");
  }
});

// Validate state Tipo Casa
$("#tipo_casa_fixed_web").blur(function(){
  // console.log('Foco vida hpta!!!')
  if (!$("#tipo_casa_fixed_web").val()){
    $("#tipo_casa_fixed_web").addClass("error");
  }
  else{
    $("#tipo_casa_fixed_web").removeClass("error");
  }
});


// Validate state Tiempo Inversion
$("#inversion_fixed_web").blur(function(){
  // console.log('Foco vida hpta!!!')
  if (!$("#inversion_fixed_web").val()){
    $("#inversion_fixed_web").addClass("error");
  }
  else{
    $("#inversion_fixed_web").removeClass("error");
  }
});

// Select 01 Medio
$("#checkbox-opcion-medio-01").click(function(){
  if ($("#checkbox-opcion-medio-01").is(':checked')){
    $("#checkbox-opcion-medio-01").attr("value", "| Whatsapp |");
    $("#option-check-medio-01").addClass("option-checked");
  }else {
    $("#checkbox-opcion-medio-01").attr("value", "");
    $("#option-check-medio-01").removeClass("option-checked");
  }
});
// Select 02 Medio
$("#checkbox-opcion-medio-02").click(function(){
  if ($("#checkbox-opcion-medio-02").is(':checked')){
    $("#checkbox-opcion-medio-02").attr("value", "| Celular |");
    $("#option-check-medio-02").addClass("option-checked");
  }else {
    $("#checkbox-opcion-medio-02").attr("value", "");
    $("#option-check-medio-02").removeClass("option-checked");
  }
});
// Select 03 Medio
$("#checkbox-opcion-medio-03").click(function(){
  if ($("#checkbox-opcion-medio-03").is(':checked')){
    $("#checkbox-opcion-medio-03").attr("value", "| Correo electrónico |");
    $("#option-check-medio-03").addClass("option-checked");
  }else {
    $("#checkbox-opcion-medio-03").attr("value", "");
    $("#option-check-medio-03").removeClass("option-checked");
  }
});

//FORMULARIO DE CONTACTO - contactForm_fixed_web
$("#contactForm_fixed_web").validator().on("submit", function (event) {
  var valido_form = 0;
  // var valido_select_01 = 0;
  // var valido_select_02 = 0;
  var valido_select_03 = 0;
  var valido_check = 0;

  //Var Telefono Nombre Correo Etc
  if (event.isDefaultPrevented("Complete este campo")) {
    // handle the invalid form...
    if ($("#first_name_fixed_web").val() === ""){
      $("#first_name_fixed_web").addClass("error");
    }
    if ($("#email_fixed_web").val() === ""){
      $("#email_fixed_web").addClass("error");
    }
    if ($("#telephone_fixed_web").val() === ""){
      $("#telephone_fixed_web").addClass("error");
    }
    if (!$("#tipo_casa_fixed_web").val()){
      $("#tipo_casa_fixed_web").addClass("error");
    }
    if (!$("#inversion_fixed_web").val()){
      $("#inversion_fixed_web").addClass("error");
    }

    submitMSG_fixed_web(false, "Completa los campos que faltan.");
  }else {
      event.preventDefault();
      valido_form = 1;
  }


  //Opcion de tipo casa
  // if (!$('#tipo_casa_fixed_web').val() ){
  //     submitMSG_tipo_casa_fixed_web(false, "Seleccione una opción.");
  // }else {
  //     event.preventDefault();
  //     submitMSG_tipo_casa_fixed_web(true, "");
  //     valido_select_01 = 1;
  // }

  //Opcion de inversion
  // if (!$('#inversion_fixed_web').val() ){
  //     submitMSG_inversion_fixed_web(false, "Seleccione una opción.");
  // }else {
  //     event.preventDefault();
  //     submitMSG_inversion_fixed_web(true, "");
  //     valido_select_02 = 1;
  // }

  //Checkbox medio contacto
  if (($("input[name='checkbox-medio-contacto']").is(':checked') === false)){
    submitMSG_checkbox_medio_contacto(false, "Selecciona almenos una opción.");
    $(".container-option-check.medio, .tx-opcion-check.medio").addClass("error");
  }else {
    event.preventDefault();
    $(".container-option-check.medio, .tx-opcion-check.medio").removeClass("error");
    submitMSG_checkbox_medio_contacto(true, "");
    valido_select_03 = 1;
  }

  //Checkbox
  if ($("#checkbox_web").is(':checked') === false){
      submitMSG_condiciones_fixed_web(false, "Aún no acepta terminos y condiciones.");
  }else {
      event.preventDefault();
      submitMSG_condiciones_fixed_web(true, "");
      valido_check = 1;
  }

  //Validacion de que los campos estan completos
  // if ((valido_form)&&(valido_select_01)&&(valido_select_02)&&(valido_select_03)&&(valido_check) === 1) {
  if ((valido_form)&&(valido_select_03)&&(valido_check) === 1) {
    $("#form-submit").prop("disabled", true);
    submitForm_fixed_web();
    submitMSG_fixed_web(true, "");
  }else {
      event.preventDefault();
      submitMSG_fixed_web(false, "Complete los campos que faltan");
  }
});

function submitForm_fixed_web(){
  // Initiate Variables With Form Content
  let first_name_fixed_web = $("#first_name_fixed_web").val();
  let telephone_fixed_web = $("#telephone_fixed_web").val();
  let email_fixed_web = $("#email_fixed_web").val();
  let tipo_casa_fixed_web = ($('select[id=tipo_casa_fixed_web]').val());
  let inversion_fixed_web = ($('select[id=inversion_fixed_web]').val());

  let checkbox_seleccionados = 
    ($("#checkbox-opcion-medio-01").val()) + 
    ($("#checkbox-opcion-medio-02").val()) + 
    ($("#checkbox-opcion-medio-03").val());

  let getPreviousURL = ($('#getPreviousURL').val());
  let previousURL = ($('#previousURL').val());

  $.ajax({
      type: "POST",
      url:  "php/process_formulario_adp_xs.php",
      data: "first_name_fixed_web=" + first_name_fixed_web +
            "&telephone_fixed_web=" + telephone_fixed_web +
            "&email_fixed_web=" + email_fixed_web +
            "&tipo_casa_fixed_web=" + tipo_casa_fixed_web +
            "&inversion_fixed_web=" + inversion_fixed_web +
            "&checkbox_seleccionados=" + checkbox_seleccionados +
            "&getPreviousURL=" + getPreviousURL +
            "&previousURL=" + previousURL,

      success: function(text){
          if (text == "success"){
              formSuccess_fixed_web();
              window.location.href = "gracias.html";
          } else {
              submitMSG_fixed_web(false,text);
          }
      }
  });
}

function formSuccess_fixed_web(){
  $("#contactForm_fixed_web")[0].reset();
  submitMSG_fixed_web(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG_fixed_web(valid, msg){
  if(valid){
      var msgClasses = "h4 text-center text-warning tx_form_error";
  } else {
      var msgClasses = "h4 text-center text-danger tx_form_error";
  }
  $("#msgSubmit_fixed_web").removeClass().addClass(msgClasses).text(msg);
}

// function submitMSG_tipo_casa_fixed_web(valid, msg){
//   if(valid){
//       var msgClasses = "h4 text-center text-warning tx_form_error ";
//   } else {
//       var msgClasses = "h4 text-center text-danger tx_form_error ";
//   }
//   $("#msgSubmit_tipo_casa_fixed_web").removeClass().addClass(msgClasses).text(msg);
// }

// function submitMSG_inversion_fixed_web(valid, msg){
//   if(valid){
//       var msgClasses = "h4 text-center text-warning tx_form_error ";
//   } else {
//       var msgClasses = "h4 text-center text-danger tx_form_error ";
//   }
//   $("#msgSubmit_inversion_fixed_web").removeClass().addClass(msgClasses).text(msg);
// }

function submitMSG_checkbox_medio_contacto(valid, msg){
  if(valid){
    var msgClasses = "h4 text-center text-success";
  } else {
    var msgClasses = "h4 text-center text-danger";
  }
  $("#msgSubmit_checkbox_medio_contacto").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_fixed_web(valid, msg){
  if(valid){
      var msgClasses = "h4 text-center text-warning tx_form_error";
  } else {
      var msgClasses = "h4 text-center text-danger tx_form_error";
  }
  $("#msgSubmit_condiciones_fixed_web").removeClass().addClass(msgClasses).text(msg);
}
