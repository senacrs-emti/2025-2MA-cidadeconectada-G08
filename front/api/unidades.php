<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// CONFIGURAÇÕES DO BANCO
$host = 'localhost';
$db   = 'geosaude_poa';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

// CONEXÃO PDO
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    echo json_encode(['erro' => 'Falha na conexão: ' . $e->getMessage()]);
    exit;
}

// BUSCA OS DADOS
$sql = "SELECT id, nome, tipo, bairro, endereco, telefone, latitude, longitude, vagas_totais, ocupacao, atendimentosHoje
        FROM unidades_saude";

$stmt = $pdo->query($sql);
$dados = $stmt->fetchAll();

// RETORNA COMO JSON
echo json_encode($dados, JSON_UNESCAPED_UNICODE);
