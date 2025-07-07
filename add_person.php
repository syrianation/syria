<?php
$conn = new mysqli("localhost", "kullanici", "sifre", "veritabani");
if ($conn->connect_error) die("Bağlantı hatası");

$name = $_POST['name'];
$description = $_POST['description'];
$date = $_POST['date'];
$place = $_POST['place'];
age = $_POST['age'];
gender = $_POST['gender'];
$status = $_POST['status'];
$detained_by = $_POST['detained_by'];
$contact = $_POST['contact'];
$notes = $_POST['notes'];
$image_url = $_POST['image_url'];

$sql = "INSERT INTO missing_persons (name, description, date, place, age, gender, status, detained_by, contact, notes, image_url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssissssss", $name, $description, $date, $place, $age, $gender, $status, $detained_by, $contact, $notes, $image_url);
$stmt->execute();
echo "Kayıt eklendi!";
?> 