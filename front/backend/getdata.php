<?php
$db_name = 'DB_NAME';


$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
if($conn->connect_error){
echo json_encode(['error' => 'Erro na conexão: '.$conn->connect_error]);
exit;
}
$conn->set_charset('utf8mb4');


// Contagens simples (assumindo três tabelas: upas, ubs, caps)
$counts = ['upas'=>0,'ubs'=>0,'caps'=>0];
$res = $conn->query("SELECT COUNT(*) as c FROM upas");
if($res) $counts['upas'] = (int)$res->fetch_assoc()['c'];
$res = $conn->query("SELECT COUNT(*) as c FROM ubs");
if($res) $counts['ubs'] = (int)$res->fetch_assoc()['c'];
$res = $conn->query("SELECT COUNT(*) as c FROM caps");
if($res) $counts['caps'] = (int)$res->fetch_assoc()['c'];


// Lista de todas as unidades (união das 3 tabelas)
$units = [];
$sql = "(
SELECT 'UPA' as type, id, name, address, available_beds, last_update
FROM upas
)
UNION ALL
(
SELECT 'UBS' as type, id, name, address, available_beds, last_update
FROM ubs
)
UNION ALL
(
SELECT 'CAPS' as type, id, name, address, available_beds, last_update
FROM caps
)
ORDER BY type, name
LIMIT 100"; // limite para não puxar dados demais


if($r = $conn->query($sql)){
while($row = $r->fetch_assoc()){
// Normalize keys (se sua coluna tiver nomes diferentes, ajuste aqui)
$units[] = [
'type' => $row['type'],
'id' => $row['id'],
'name' => $row['name'],
'address' => $row['address'],
'available_beds' => isset($row['available_beds']) ? (int)$row['available_beds'] : 0,
'last_update' => $row['last_update']
];
}
}


// Soma total de vagas (exemplo: soma available_beds)
$total_vagas = 0;
foreach($units as $u) $total_vagas += $u['available_beds'];


echo json_encode([
'counts' => $counts,
'total_vagas' => $total_vagas,
'units' => $units
], JSON_UNESCAPED_UNICODE);


$conn->close();
?>


<!-- FILE: sample_db.sql -->
