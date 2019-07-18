<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['yourdate'])) {$yourdate = $_POST['yourdate'];}

 
 
$address = 'yourmail@gmail.com';
$sub = "Обратная связь";
$mes = "Имя: $name \nЕмейл: $email \nНомер телефона: $phone \nДата: $yourdate";
$verify = mail ($address,$sub,$mes, "Content-type:text/plain; charset = utf-8 \r\nFrom:$email");
$emailSent = true;
if ($verify == 'true')
{
$json = array();
echo json_encode($json); 
		die();
}
else 
{
echo json_encode($json); 
		die();
}
?>