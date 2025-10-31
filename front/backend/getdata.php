<?php
include('connection.php');

$sql = "SELECT * FROM unidades_saude";
$result = $conn->query($sql);

$data = [];

while($row = $result->fetch_assoc()) {
    $data[] = $row;
}

header('Content-Type: application/json');
echo json_encode($data);
?>
