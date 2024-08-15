<?php
include ('databases.php');


$name = $_POST['$name'];
$department = $_POST['$department'];
$class = $_POST['$class'];
$rollno = $_POST['$rollno'];
$Phone = $_POST['$Phone'];
$Email = $_POST['$Email'];

$sql = "INSERT INTO registration VALUES (NULL, '$name', '$department', '$class', '$rollno', '$Phone')";
if ($conn->query($sql) == true) {
    echo 'alert("Registration Sucessfull");';
    header("location:./index.html");
} else {
    echo 'alert("Registration Unsucessfull");';
}
?>
