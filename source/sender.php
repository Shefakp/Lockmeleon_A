<?php
	$to = "support@lockmeleon.com"; // Email отримувача
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	
	$subject = "Тема письма"; // Тема листа
	
	$name = $_POST['regname'];
	$email = $_POST['regemail'];
	$text = $_POST['regtext'];
	
	$msg="
		Name: $name		
		E-mail: $email 
        Text: $text 
		Time:  $date, в $time.";
 	
	mail($to, $subject, $msg, "From: lockmeleon.com ");
?>
 <?php
echo '<script type="text/javascript">';
echo 'alert("Your message successful sended!");';

echo '</script>';
 ?>
 
 <?php
echo '<script type="text/javascript">';
  echo 'history.back();';
echo '</script>';
 ?>

 

