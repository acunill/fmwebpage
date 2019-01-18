<?php

// Llamando a los campos
$name = $_POST("name");
$email = $_POST("email");
$message = $_POST("message");

// Datos para el correo
$sendto = "acunill86@gmail.com";
$issue = "Fuel Moisture";

$mailcnt = "From: $name \n";
$mailcnt .= "Mail: $email \n";
$mailcnt .= "Message: $message \n";

//Enviando mensaje
mail($sendto, $issue, $mailcnt);
if (mail($sendto, $issue, $mailcnt)) {
   echo "<p style='font-size:20px;'>El formulario se ha enviado correctamente</p>";
} else {
   echo "Ha habido un error al enviar el formulario, inténtalo de nuevo por favor";
};

?>