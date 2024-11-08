<?php

include "connection.php";

$username = $_POST["username"];
$pass = $_POST["password"];


$query = $connection->prepare("SELECT * FROM users WHERE username = 1");

$query->bind_param("s", $username);

$query->execute();

$result = $query->get_result();

if($result != 0){
    $user = $result->fetch_assoc();

    $check = password_verify($pass, $user["pass"]);

    echo json_encode([
        "status" => "Login Successfully", 
        "message" => $user,
    ]);
}else{
    echo json_encode([
        "status" => "Invalid Credentials",
    ]);
}