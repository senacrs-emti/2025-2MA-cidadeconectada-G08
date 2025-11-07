USE geosaudepoa;

--hospitais
INSERT INTO hospitais (nome, endereco, telefone, latitude, longitude) VALUES
('Hospital de Clínicas de Porto Alegre', 'Rua Ramiro Barcelos, 2350 – Santa Cecília, Porto Alegre – RS', '(51) 3359-8000', -30.0311, -51.2065),
('Hospital Moinhos de Vento', 'Rua Ramiro Barcelos, 910 – Moinhos de Vento, Porto Alegre – RS', '(51) 3314-3434', -30.0276, -51.2099),
('Hospital São Lucas da PUCRS', 'Av. Ipiranga, 6690 – Partenon, Porto Alegre – RS', '(51) 3320-3000', -30.0592, -51.1716),
('Hospital Ernesto Dornelles', 'Av. Ipiranga, 1801 – Azenha, Porto Alegre – RS', '(51) 3217-2000', -30.0457, -51.2170),
('Hospital Nossa Senhora da Conceição', 'Av. Francisco Trein, 596 – Cristo Redentor, Porto Alegre – RS', '(51) 3357-2000', -30.0086, -51.1639),
('Hospital São Lucas – Grupo Hospitalar Conceição', 'Av. Francisco Trein, 326 – Cristo Redentor, Porto Alegre – RS', '(51) 3357-2000', -30.0101, -51.1648),
('Hospital de Pronto Socorro (HPS) Porto Alegre', 'Av. Independência, 75 – Centro, Porto Alegre – RS', '(51) 3289-7999', -30.02228, -51.22324),
('Hospital de Clínicas de Porto Alegre (HCPA)', 'Rua Ramiro Barcelos, 2350 – Santa Cecília / Bom Fim, Porto Alegre – RS', '(51) 3359-8000', -30.03637, -51.18421),
('Hospital Vila Nova', 'Rua José Bonifácio, 3000 – Vila Nova, Porto Alegre – RS', '(51) 3245-8900', -30.0281, -51.2354);

--upas
INSERT INTO upas (nome, endereco, telefone, latitude, longitude) VALUES
('UPA Zona Norte', 'Av. Assis Brasil, 6500 – Sarandi, Porto Alegre – RS', '(51) 3289-0000', -30.0048, -51.1595),
('UPA Cruzeiro', 'Av. Cruzeiro do Sul, 600 – Cruzeiro, Porto Alegre – RS', '(51) 3289-0010', -30.0924, -51.2292),
('UPA Moacyr Scliar (Zona Noroeste)', 'Av. Baltazar de Oliveira Garcia, 2132 – Rubem Berta, Porto Alegre – RS', '(51) 3289-0020', -30.0001, -51.1358),
('UPA Lomba do Pinheiro', 'Estr. João de Oliveira Remião, 7400 – Lomba do Pinheiro, Porto Alegre – RS', '(51) 3289-0030', -30.0917, -51.0946),
('UPA Restinga', 'Estr. João Antônio Silveira, 3700 – Restinga, Porto Alegre – RS', '(51) 3289-0040', -30.1679, -51.1621),
('UPA Zona Sul', 'Av. Otto Niemeyer, 3780 – Cavalhada, Porto Alegre – RS', '(51) 3289-0050', -30.1062, -51.2437),
('UPA Moacyr Scliar', 'Rua Moacyr Scliar, s/n – Jardim Carvalho / Zona Norte, Porto Alegre – RS', '(51) 3368-1629', -30.00976, -51.14589),
('UPA Lomba do Pinheiro', 'Estr. João de Oliveira Remião, 5110 – Lomba do Pinheiro, Porto Alegre – RS', '(51) 3289-8245', -30.05327, -51.0968);

--ubs
INSERT INTO ubs (nome, endereco, telefone, latitude, longitude) VALUES
('UBS Santa Cecília', 'Rua Santa Cecília, 235 – Santa Cecília, Porto Alegre – RS', '(51) 3289-8001', -30.0312, -51.2021),
('UBS IAPI', 'Rua Três de Abril, 90 – Passo d’Areia, Porto Alegre – RS', '(51) 3289-8002', -30.0074, -51.1713),
('UBS Navegantes', 'Rua Santo Alfredo, 300 – Navegantes, Porto Alegre – RS', '(51) 3289-8003', -30.0021, -51.2058),
('UBS Lomba do Pinheiro', 'Estr. João de Oliveira Remião, 5400 – Lomba do Pinheiro, Porto Alegre – RS', '(51) 3289-8004', -30.0951, -51.0982),
('UBS Restinga', 'Av. João Antônio Silveira, 3500 – Restinga, Porto Alegre – RS', '(51) 3289-8005', -30.1683, -51.1625),
('UBS Bom Jesus', 'Rua Bom Jesus, 410 – Bom Jesus, Porto Alegre – RS', '(51) 3289-8006', -30.0468, -51.1610),
('UBS Alvaro Difini (Clínica da Família Álvaro Difini)', 'Rua Álvaro Difini, 520 – Restinga, Porto Alegre – RS', '(51) 4076-5011', -30.08345, -51.18731),
('UBS José Mauro Ceratti Lopes', 'Estr. João Antônio da Silveira, 3330 – Restinga, Porto Alegre – RS', '(51) 3289-5202', -30.10644, -51.20553),
('UBS Campo da Tuca (Clínica da Família)', 'Rua Cel. José Rodrigues Sobral, 958 – Partenon, Porto Alegre – RS', '(51) 3289-5660', -30.03795, -51.1619),
('UBS Moab Caldas', 'Av. Moab Caldas, 400 – Santa Tereza, Porto Alegre – RS', '(51) 3289-4070', -30.03085, -51.19562),
('UBS Morro Santana (Clínica da Família Morro Santana)', 'Rua Marieta Menna Barreto, 210 – Morro Santana, Porto Alegre – RS', '(51) 3289-5493', -30.00094, -51.15814),
('UBS Navegantes', 'Av. Presidente Franklin Roosevelt, 5 – São Geraldo, Porto Alegre – RS', '(51) 3289-8214', -30.01723, -51.17645),
('UBS Tristeza', 'Av. Wenceslau Escobar, 2442 – Tristeza, Porto Alegre – RS', '(51) 3289-5764', -30.0678, -51.20822),
('UBS Primeiro de Maio', 'Av. Prof. Oscar Pereira, 6199 – Cascata, Porto Alegre – RS', ' (51) 3289-5676 ', -30.0621, -51.17065),
('UBS Santa Marta', 'Rua Capitão Montanha, 27 – Centro Histórico, Porto Alegre – RS', '(51) 3289-2935', -30.0336, -51.2183),
('US Belém Novo', 'Rua Florêncio Farias, 195 – Belém Novo, Porto Alegre – RS', '(51) 3289-5723', -30.0751, -51.23412),
('UBS Modelo', 'Av. Jerônimo de Ornelas, 55 – Santana, Porto Alegre – RS', '(51) 3289-2555', -30.00722, -51.15899),
('UBS São Carlos', 'Av. Bento Gonçalves, 6670 – Partenon, Porto Alegre – RS', '(51) 3289-5526', -30.0315, -51.1534),
('UBS Humaitá', 'Rua Carlos Gil, 150 – Humaitá, Porto Alegre – RS', '55 99982-3830', -30.037, -51.2142),
('UBS Floresta', 'Rua Dr. Bozano, 120 – Floresta, Porto Alegre – RS', '(51) 3362-6727', -30.03102, -51.1951),
('UBS Cristal', 'Av. Edgar Pires de Castro, 1200 – Cristal, Porto Alegre – RS', '(51) 3289-5713', -30.0409, -51.2095),
('UBS Lomba do Pinheiro (US)', 'Rua Nova Milano, 123 – Lomba do Pinheiro, Porto Alegre – RS', '(51) 3289-5562', -30.0544, -51.0992),

--caps
INSERT INTO caps (nome, endereco, telefone, latitude, longitude) VALUES
('CAPS Centro (CAPS II Centro)', 'Rua José Bonifácio, 71 – Centro, Porto Alegre – RS', '(51) 3600-7175', -30.03012, -51.21487),
('CAPS AD Restinga (CAPS AD III Restinga)', 'Rua João Antônio da Silveira, 440 – Restinga, Porto Alegre – RS', '(51) 3248-7704', -30.11298, -51.19912),
('CAPS AD Cavalhada (CAPS AD III Cavalhada)', 'Av. Cavalhada, 1930 – Cavalhada, Porto Alegre – RS', '(51) 3230-6364', -30.07124, -51.1789),
('CAPS Passo a Passo (Jardim São Pedro)', 'Av. Carneiro da Fontoura, 57 – Jardim São Pedro, Porto Alegre – RS', '(51) 3345-1888', -30.0195, -51.1926);

