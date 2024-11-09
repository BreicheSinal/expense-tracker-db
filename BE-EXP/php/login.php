<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET");

include "connection.php";

$username = $_POST["username"];
$password = $_POST["password"];
    
echo json_encode($username);

$query = $connection->prepare("SELECT * FROM users WHERE username = ?");
$query->bind_param("s", $username);
$query->execute();
    
$result = $query->get_result();

if ($result->num_rows != 0) {
    $user = $result->fetch_assoc();

    if (password_verify($password, $user["password"])) {
        echo json_encode([
            "status" => "Login Successfully", 
            "message" => $user,
        ]);
    } else {
        echo json_encode([
        "status" => "Invalid Credentials",
        ]);
    }
} else {
    echo json_encode([
        "status" => "Invalid Credentials",
    ]);
}