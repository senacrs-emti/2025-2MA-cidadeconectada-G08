<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once "conexao.php"; // usa tua conexão

$response = [
    "upas" => 0,
    "ubs" => 0,
    "caps" => 0,
    "vagas" => [],
    "unidades" => []
];

// 1. Contagem por tipo
$sql = "SELECT tipo, COUNT(*) AS total FROM unidades GROUP BY tipo;";
$res = $conn->query($sql);

while ($row = $res->fetch_assoc()) {
    if ($row["tipo"] === "UPA")  $response["upas"] = intval($row["total"]);
    if ($row["tipo"] === "UBS")  $response["ubs"] = intval($row["total"]);
    if ($row["tipo"] === "CAPS") $response["caps"] = intval($row["total"]);
}

// 2. Consulta das vagas (se tua tabela tiver isso)
$sql2 = "SELECT nome, vagas FROM unidades ORDER BY vagas DESC LIMIT 8;";
$res2 = $conn->query($sql2);

while ($row = $res2->fetch_assoc()) {
    $response["vagas"][] = $row;
}

// 3. Lista de unidades para a tabela
$sql3 = "SELECT nome, tipo, regiao FROM unidades ORDER BY id DESC LIMIT 50;";
$res3 = $conn->query($sql3);

while ($row = $res3->fetch_assoc()) {
    $response["unidades"][] = $row;
}

echo json_encode($response);
