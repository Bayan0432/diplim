<?php

require('connect.php');

$sql = "SELECT * FROM users";

$query = $pdo->prepare($sql);
$query->execute();
$errInfo = $query->errorInfo();

if ($errInfo[0] !== PDO::ERR_NONE){
    echo $errInfo[2];
    exit();
}

$date = $query->fetch();

var_dump($date);

