<?php

include "connection.php";

$username = $_POST["username"];
$pass = $_POST["password"];

$hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

$query = $connection -> prepare("INSERT INTO users(username, pass) VALUES (?,?)");

$query->bind_param("ss", $username, $hashed_pass);

$query->execute();

$result = $query->affected_rows;

if($result != 0){
    echo json_encode([
        "status" => "Successful", 
        "message" => "user $username is created",
    ]);
}else{
    echo json_encode([
        "status" => "Failed", 
        "message" => "user $username could not be created",
    ]);
}
