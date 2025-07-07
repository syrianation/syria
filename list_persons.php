<?php
$conn = new mysqli("localhost", "kullanici", "sifre", "veritabani");
$result = $conn->query("SELECT * FROM missing_persons ORDER BY created_at DESC");
$data = [];
while($row = $result->fetch_assoc()) $data[] = $row;
echo json_encode($data);
?> 