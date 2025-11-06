CREATE DATABASE geosaudepoa;
USE geosaudepoa;

CREATE TABLE hospitais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_hospital VARCHAR(150),
    endereco VARCHAR(255),
    telefone VARCHAR(25),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6)
);

INSERT INTO hospitais (nome_hospital, endereco, telefone, latitude, longitude) VALUES
('Hospital de Clínicas de Porto Alegre', 'Rua Ramiro Barcelos, 2350 – Santa Cecília, Porto Alegre – RS', '(51) 3359-8000', -30.0311, -51.2065),
('Hospital Moinhos de Vento', 'Rua Ramiro Barcelos, 910 – Moinhos de Vento, Porto Alegre – RS', '(51) 3314-3434', -30.0276, -51.2099),
('Hospital São Lucas da PUCRS', 'Av. Ipiranga, 6690 – Partenon, Porto Alegre – RS', '(51) 3320-3000', -30.0592, -51.1716),
('Hospital Ernesto Dornelles', 'Av. Ipiranga, 1801 – Azenha, Porto Alegre – RS', '(51) 3217-2000', -30.0457, -51.2170),
('Hospital Nossa Senhora da Conceição', 'Av. Francisco Trein, 596 – Cristo Redentor, Porto Alegre – RS', '(51) 3357-2000', -30.0086, -51.1639),
('Hospital São Lucas – Grupo Hospitalar Conceição', 'Av. Francisco Trein, 326 – Cristo Redentor, Porto Alegre – RS', '(51) 3357-2000', -30.0101, -51.1648);

CREATE TABLE upas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_upa VARCHAR(150),
    endereco VARCHAR(255),
    telefone VARCHAR(25),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6)
);

INSERT INTO upas (nome_upa, endereco, telefone, latitude, longitude) VALUES
('UPA Zona Norte', 'Av. Assis Brasil, 6500 – Sarandi, Porto Alegre – RS', '(51) 3289-0000', -30.0048, -51.1595),
('UPA Cruzeiro', 'Av. Cruzeiro do Sul, 600 – Cruzeiro, Porto Alegre – RS', '(51) 3289-0010', -30.0924, -51.2292),
('UPA Moacyr Scliar (Zona Noroeste)', 'Av. Baltazar de Oliveira Garcia, 2132 – Rubem Berta, Porto Alegre – RS', '(51) 3289-0020', -30.0001, -51.1358),
('UPA Lomba do Pinheiro', 'Estr. João de Oliveira Remião, 7400 – Lomba do Pinheiro, Porto Alegre – RS', '(51) 3289-0030', -30.0917, -51.0946),
('UPA Restinga', 'Estr. João Antônio Silveira, 3700 – Restinga, Porto Alegre – RS', '(51) 3289-0040', -30.1679, -51.1621),
('UPA Zona Sul', 'Av. Otto Niemeyer, 3780 – Cavalhada, Porto Alegre – RS', '(51) 3289-0050', -30.1062, -51.2437);

CREATE TABLE ubs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_ubs VARCHAR(150),
    endereco VARCHAR(255),
    telefone VARCHAR(25),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6)
);

INSERT INTO ubs (nome_ubs, endereco, telefone, latitude, longitude) VALUES
('UBS Santa Cecília', 'Rua Santa Cecília, 235 – Santa Cecília, Porto Alegre – RS', '(51) 3289-8001', -30.0312, -51.2021),
('UBS IAPI', 'Rua Três de Abril, 90 – Passo d’Areia, Porto Alegre – RS', '(51) 3289-8002', -30.0074, -51.1713),
('UBS Navegantes', 'Rua Santo Alfredo, 300 – Navegantes, Porto Alegre – RS', '(51) 3289-8003', -30.0021, -51.2058),
('UBS Lomba do Pinheiro', 'Estr. João de Oliveira Remião, 5400 – Lomba do Pinheiro, Porto Alegre – RS', '(51) 3289-8004', -30.0951, -51.0982),
('UBS Restinga', 'Av. João Antônio Silveira, 3500 – Restinga, Porto Alegre – RS', '(51) 3289-8005', -30.1683, -51.1625),
('UBS Bom Jesus', 'Rua Bom Jesus, 410 – Bom Jesus, Porto Alegre – RS', '(51) 3289-8006', -30.0468, -51.1610);