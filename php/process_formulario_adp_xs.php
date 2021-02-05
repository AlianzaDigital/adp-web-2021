<?php

$errorMSG = "";


// URL DECODE ORIGIN
if (empty($_POST["getPreviousURL"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $getPreviousURL= $_POST["getPreviousURL"];
}

// URL
if (empty($_POST["previousURL"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $previousURL = $_POST["previousURL"];
}

// FIRST_NAME
if (empty($_POST["first_name_fixed_web"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $first_name_fixed_web = $_POST["first_name_fixed_web"];

}

// TELEFONO
if (empty($_POST["telephone_fixed_web"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $telephone_fixed_web = $_POST["telephone_fixed_web"];

}

// EMAIL
if (empty($_POST["email_fixed_web"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $email_fixed_web = $_POST["email_fixed_web"];

}

// TIPO CASA
if (empty($_POST["tipo_casa_fixed_web"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $tipo_casa_fixed_web = $_POST["tipo_casa_fixed_web"];

}


// TIEMPO DE INVERSION
if (empty($_POST["inversion_fixed_web"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $inversion_fixed_web = $_POST["inversion_fixed_web"];

}

// CHECKBOX SELECCIONADOS SERVICIOS
if (empty($_POST["checkbox_seleccionados"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $checkbox_seleccionados = $_POST["checkbox_seleccionados"];
}

/****************************** ENVIAR A CRM SALES UP ******************************/
$url = 'https://api.salesup.com/integraciones/P02AP1C17BE83-D701-42F2-A55D-61A2631F4F3E';
$params = array(

    'nombre' => ($first_name_fixed_web),
    'movil' => ($telephone_fixed_web),
    'correo' => ($email_fixed_web),
    'origen' => ($getPreviousURL),
    'comentarios' => ("Landing Mobile Nuevo Lead")." | ".("Tipo de casa: ".$tipo_casa_fixed_web)." | ".("Tiempo de inversion: ".$inversion_fixed_web)." | ".("Medio para contactar: ".$checkbox_seleccionados)." | ".("Call UTM: ".$previousURL)
);


$request = curl_init();
curl_setopt($request, CURLOPT_URL, $url);
curl_setopt($request, CURLOPT_POST, 1);
curl_setopt($request, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($request, CURLOPT_POSTFIELDS, http_build_query($params));
curl_setopt($request, CURLOPT_CONNECTTIMEOUT, 60);
curl_setopt($request, CURLOPT_TIMEOUT, 60);

$result = curl_exec($request);

curl_close($request);
//print_r($result); 



/****************************** ENVIAR EMAIL ******************************/
//CONTACTOS Y ASUNTO
$Contacts = array('altosdelpalmardigital@gmail.com', 'soluciones@grupo-alianza.com', 'vivianajoya@constructora-alianza.com', 'paulacamargo@constructora-alianza.com', 'controlmarketingleads@gmail.com');
$Subject = "Landing Mobile Nuevo Lead";

// CUERPO DE TEXTO MENSAJE
$Body = "";

$Body .= utf8_decode("Nombre completo: ");
$Body .= utf8_decode($first_name_fixed_web);
$Body .= "\n";

$Body .= utf8_decode("Número de Celular: ");
$Body .= utf8_decode($telephone_fixed_web);
$Body .= "\n";

$Body .= utf8_decode("Correo electrónico: ");
$Body .= utf8_decode($email_fixed_web);
$Body .= "\n";

$Body .= utf8_decode("Tipo de casa: ");
$Body .= utf8_decode($tipo_casa_fixed_web);
$Body .= "\n";

$Body .= utf8_decode("Tiempo de inversión: ");
$Body .= utf8_decode($inversion_fixed_web);
$Body .= "\n";

$Body .= utf8_decode("Medio para contactar: ");
$Body .= utf8_decode($checkbox_seleccionados);
$Body .= "\n";

$Body .= utf8_decode("Origen de campaña: ");
$Body .= utf8_decode($getPreviousURL);
$Body .= "\n";

$Body .= utf8_decode("Call UTM: ");
$Body .= utf8_decode($previousURL);
$Body .= "\n";


// send email
foreach ($Contacts as $Contact){
    $to =  $Contact;
    $success = mail($to, $Subject, $Body, "From:".$email_fixed_web);
}

// redirect to success page
if ($success && $errorMSG == ""){
    echo "success";
}
else{
    if($errorMSG == ""){
        echo "Algo salío mal :(";
    }
    else {
        echo $errorMSG;
    }
}

?>
