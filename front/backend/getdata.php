<?php
include('connection.php');

$sql = "SELECT * FROM geosaudepoa";
$result = $conn->query($sql);

$data = [];

while($row = $result->fetch_assoc()) {
    $data[] = $row;
}

header('Content-Type: application/json');
echo json_encode($data);
header('Content-Type: application/json; charset=utf-8');
echo json_encode($dados, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
?>
