<?php 
if(isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['company'])){
    $email = 'yan@psyreply.com';
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $company = $_POST['company'];
    $mess = "Заявка с сайта edtech.psyreply.com\r\n\r\nИмя: $name\r\nТелефон: $phone\r\nНазвание компании: $company";
    mail($email, 'Заявка с сайта edtech.psyreply.com', $mess , "From: $email\r\nReply-To: $email\r\nReturn-Path: $email\r\nContent-Type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: 8bit");
    header('Location: ' . $_SERVER['HTTP_REFERER']);
   exit();
}
