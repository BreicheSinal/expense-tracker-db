<?php

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "expense_tracker_db";

$connection = new mysqli($host, $user, $pass, $dbname);

if($connection->connect_error){
    die("ERROR HAPPENED!")
}
?>