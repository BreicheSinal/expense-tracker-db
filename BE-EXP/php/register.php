<?php

Include  "connection.php";

$username = $_POST["username"];
$password = $_POST["password"];

$query = $connection -> prepare("INSERT INTO users(username, password) VALUES (?,?)");

$query->bind_param("ss", $username, $password);

$query->execute();

$result = $query->affect_rows;

if(!result){
    echo json_encode([
        "status" => "Succesfull", 
        "message" => "user $username is created",
    ]);
}else{
    echo json_encode([
        "status" => "Failed", 
        "message" => "user $username could not be created",
    ]);
}
