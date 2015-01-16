
<?php 

$To = 'gosuorji@interranetworks.com'; 

$Subject = 'Send Email'; 

$Message = 'This example demonstrates how you can send plain text email with PHP'; 

$Headers = "From: interranetworks.deployment@gmail.com \r\n" . 

"Reply-To: interranetworks.deployment@gmail.com \r\n" . 

"Content-type: text/html; charset=UTF-8 \r\n"; 

 

$send = mail($To, $Subject, $Message, $Headers); 

if ($send) {echo "successful";}
else {echo "not sent";}


?>