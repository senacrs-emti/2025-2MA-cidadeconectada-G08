USE geosaudepoa;
SELECT * FROM leitos;

--hospitais
INSERT INTO hospitais (nome, endereco, telefone, latitude, longitude) VALUES
('Hospital de Clínicas de Porto Alegre', 'Rua Ramiro Barcelos, 2350 – Santa Cecília, Porto Alegre – RS', '(51) 3359-8000', -30.038627694195746, -51.206663233657835),
('Hospital Moinhos de Vento', 'Rua Ramiro Barcelos, 910 – Moinhos de Vento, Porto Alegre – RS', '(51) 3314-3434',-30.02491222937995, -51.208507847149754),
('Hospital São Lucas da PUCRS', 'Av. Ipiranga, 6690 – Partenon, Porto Alegre – RS', '(51) 3320-3000', -30.05512998083029, -51.173375247148165),
('Hospital Ernesto Dornelles', 'Av. Ipiranga, 1801 – Azenha, Porto Alegre – RS', '(51) 3217-2000', -30.047482447557627, -51.21192365767104),
('Hospital Nossa Senhora da Conceição', 'Av. Francisco Trein, 596 – Cristo Redentor, Porto Alegre – RS', '(51) 3357-2000', -30.016001155393116, -51.158435757032635),
('Hospital de Pronto Socorro (HPS) Porto Alegre', 'Largo Teodoro Herzl, s/nº - Bom Fim, Porto Alegre - RS', '(51) 3289-7999', -30.036755642990677, -51.20965938956507),
('Hospital Vila Nova', 'R. Catarino Andreatta, 155 - Vila Nova, Porto Alegre - RS', '(51) 3245-8900', -30.11927093038986, -51.207368931891196),
('Hospital Restinga e Extremo-Sul', 'Estr. João Antônio da Silveira, 3700 - Restinga, Porto Alegre - RS', '(51) 3010-4700', -30.142530416140655, -51.1287106165481);

--upas
INSERT INTO upas (nome, endereco, telefone, latitude, longitude) VALUES
('UPA Cruzeiro do Sul', 'R. Prof. Manoel Lobato, 151 - Santa Tereza, Porto Alegre - RS', '(51) 3289-4046', -30.069554950289618, -51.216666789563654),
('UPA Moacyr Scliar', 'R. Jerônymo Zelmanovitz, 01 - São Sebastião, Porto Alegre - RS', '(51) 3368-1629', -30.00970513173758, -51.146159420250015),
('UPA Lomba do Pinheiro', 'Estr. João de Oliveira Remião, 5110 – Lomba do Pinheiro, Porto Alegre – RS', '(51) 3289-8245', -30.11065458320222, -51.11003019935835);

--ubs
INSERT INTO ubs (nome, endereco, telefone, latitude, longitude) VALUES
('UBS Santa Cecília', 'R. São Manoel, 543 Bairro - Santa Cecília, Porto Alegre - RS', '(51) 3359-8685', -30.038516658043708, -51.20504292655783),
('UBS IAPI', 'Rua Três de Abril, 90 – Passo d’Areia, Porto Alegre – RS', '(51) 3289-3445', -30.015001896674644, -51.177993920840805),
('UBS Navegantes', 'Av. Pres. Franklin Roosevelt, 5 - Navegantes, Porto Alegre - RS', '(51) 3289-8214', -30.000090725991313, -51.20010933670428),
('UBS Lomba do Pinheiro', 'Estr. João de Oliveira Remião, 5110 - Lomba do Pinheiro, Porto Alegre - RS', '(51) 3289-8245', -30.110776190744136, -51.110231614584805),
('UBS Restinga', 'R. Abolição, 850 - Restinga, Porto Alegre - RS', '(51) 3250-1142', -30.158576374713157, -51.14052087845738),
('UBS Bom Jesus', 'Rua Bom Jesus, 410 – Bom Jesus, Porto Alegre – RS', '(51) 3289-5438', -30.04319761529306, -51.153762076149434),
('UBS Alvaro Difini (Clínica da Família Álvaro Difini)', 'Rua Álvaro Difini, 520 – Restinga, Porto Alegre – RS', '(51) 4076-5011', -30.148694795500397, -51.14597481660804),
('UBS José Mauro Ceratti Lopes', 'Estr. João Antônio da Silveira, 3330 – Restinga, Porto Alegre – RS', '(51) 3289-5202', -30.143186813607386, -51.127640034973616),
('UBS Campo da Tuca (Clínica da Família)', 'Rua Cel. José Rodrigues Sobral, 958 – Partenon, Porto Alegre – RS', '(51) 3289-5660', -30.06808836905352, -51.177137629308284),
('UBS Moab Caldas', 'Av. Moab Caldas, 400 – Santa Tereza, Porto Alegre – RS', '(51) 3289-4000', -30.069522694563407, -51.216504077928114),
('UBS Morro Santana (Clínica da Família Morro Santana)', 'Rua Marieta Menna Barreto, 210 – Morro Santana, Porto Alegre – RS', '(51) 3289-5493', -30.039110312558787, -51.128258601931336),
('UBS Tristeza', 'Av. Wenceslau Escobar, 2442 – Tristeza, Porto Alegre – RS', '(51) 3289-5764', -30.111092440316273, -51.25466782217651),
('UBS Primeiro de Maio', 'Av. Prof. Oscar Pereira, 6199 – Cascata, Porto Alegre – RS', ' (51) 3289-5676 ', -30.09516410618855, -51.17842907195548),
('UBS Santa Marta', 'Rua Capitão Montanha, 27 – 4° andar - Centro Histórico, Porto Alegre – RS', '(51) 3289-2935', -30.028476128585506, -51.23244496157903),
('US Belém Novo', 'Rua Florêncio Farias, 195 – Belém Novo, Porto Alegre – RS', '(51) 3289-5723', -30.210783569592646, -51.17874478437433),
('UBS Modelo', 'Av. Jerônimo de Ornelas, 55 – Santana, Porto Alegre – RS', '(51) 3289-2555', -30.043241852896404, -51.21389558176897),
('UBS São Carlos', 'Av. Bento Gonçalves, 6670 – Partenon, Porto Alegre – RS', '(51) 3289-5525', -30.06577632038458, -51.15043349146241),
('UBS Floresta', 'Rua Conselheiro dÁvila, 111 - Jardim Floresta, Porto Alegre - RS', '(51) 3362-6727', -30.003282224646043, -51.16075416025271),
('UBS Cristal', 'R. Cruzeiro do Sul, 2702 - Santa Tereza, Porto Alegre - RS', '(51) 3289-5714', -30.084392091430473, -51.23027542388755),
('UBS Lomba do Pinheiro (US)', 'Estr. João de Oliveira Remião, 6111 - Lomba do Pinheiro, Porto Alegre - RS', '(51) 3289-5562', -30.11945942253231, -51.10879195435146),

--caps
INSERT INTO caps (nome, endereco, telefone, latitude, longitude) VALUES
('CAPS Centro (CAPS II Centro)', 'Rua José Bonifácio, 71 – Centro, Porto Alegre – RS', '(51) 3600-7175', -30.039996622910706, -51.21621077035037),
('CAPS AD Restinga (CAPS AD III Restinga)', 'Rua João Antônio da Silveira, 440 – Restinga, Porto Alegre – RS', '(51) 3248-7704', -30.163618493083263, -51.151344570988954),
('CAPS AD Cavalhada (CAPS AD III Cavalhada)', 'Av. Cavalhada, 1930 – Cavalhada, Porto Alegre – RS', '(51) 3230-6364', -30.096605413528376, -51.22709556938771),
('CAPS Passo a Passo (Jardim São Pedro)', 'Av. Carneiro da Fontoura, 57 – Jardim São Pedro, Porto Alegre – RS', '(51) 3345-1888', -30.01102245003532, -51.16613872258099);

--SERVIÇOS--

INSERT INTO servicos (nome, tipo, bairro, tipo_servico, horario, atendimento_24h) VALUES

-- hospitais
('Hospital de Clínicas de Porto Alegre', 'Hospital', 'Santa Cecília', 'Atendimento geral e emergências de alta complexidade', '24 horas', 'Sim'),
('Hospital Moinhos de Vento', 'Hospital', 'Moinhos de Vento', 'Atendimento geral, maternidade e urgência', '24 horas', 'Sim'),
('Hospital São Lucas da PUCRS', 'Hospital', 'Partenon', 'Cirurgias, internação e emergência', '24 horas', 'Sim'),
('Hospital Ernesto Dornelles', 'Hospital', 'Azenha', 'Pronto atendimento, cirurgias e maternidade', '24 horas', 'Sim'),
('Hospital Nossa Senhora da Conceição', 'Hospital', 'Cristo Redentor', 'Atendimento geral e pronto-socorro', '24 horas', 'Sim'),
('Hospital de Pronto Socorro (HPS) Porto Alegre', 'Hospital','Centro', 'Pronto-socorro e traumas (acidentes, ferimentos por arma de fogo, etc.)', '24 horas', 'Sim'),
('Hospital Vila Nova', 'Hospital', 'Vila Nova', 'Emergências e internações gerais', '24 horas', 'Sim'),
('Hospital Restinga e Extremo-Sul', 'Hospital', 'Restinga', 'Atendimento de urgência e emergência', '24 horas', 'Sim'),
('Hospital Cristo Redentor', 'Hospital', 'Cristo Redentor', 'Atendimento geral e emergências', '24 horas', 'Sim'),

-- upas
('UPA Cruzeiro', 'UPA', 'Cruzeiro', 'Urgência e emergência clínica', '24 horas', 'Sim'),
('UPA Moacyr Scliar', 'UPA', 'São Sebastião', 'Atendimento de urgência e traumas leves', '24 horas', 'Sim'),
('UPA Lomba do Pinheiro', 'UPA', 'Lomba do Pinheiro', 'Urgência e emergência', '24 horas', 'Sim'),

-- ubs
('UBS Santa Cecília', 'UBS', 'Santa Cecília', 'Atenção básica, consultas e vacinação', '8h às 17h', 'Não'),
('UBS IAPI', 'UBS', 'Passo d’Areia', 'Atenção básica e prevenção', '8h às 17h', 'Não'),
('UBS Navegantes', 'UBS', 'Navegantes', 'Atendimento clínico e vacinação', '8h às 17h', 'Não'),
('UBS Lomba do Pinheiro', 'UBS', 'Lomba do Pinheiro', 'Atenção primária e saúde da família', '8h às 17h', 'Não'),
('UBS Restinga', 'UBS', 'Restinga', 'Atenção básica e vacinação', '8h às 17h', 'Não'),
('UBS Bom Jesus', 'UBS', 'Bom Jesus', 'Atendimento clínico geral e saúde da família', '8h às 17h', 'Não'),
('UBS Alvaro Difini (Clínica da Família Álvaro Difini)', 'UBS', 'Restinga', 'Atendimento familiar, gestantes e pediatria', '8h às 17h', 'Não'),
('UBS José Mauro Ceratti Lopes', 'UBS', 'Restinga', 'Saúde da família e pediatria', '8h às 17h', 'Não'),
('UBS Campo da Tuca (Clínica da Família)', 'UBS', 'Partenon', 'Atenção básica e vacinação', '8h às 17h', 'Não'),
('UBS Moab Caldas', 'UBS', 'Santa Tereza', 'Atenção básica e consultas', '8h às 17h', 'Não'),
('UBS Morro Santana (Clínica da Família Morro Santana)', 'UBS', 'Morro Santana', 'Atenção básica e gestantes', '8h às 17h', 'Não'),
('UBS Navegantes', 'UBS', 'São Geraldo', 'Atendimento clínico e vacinação', '8h às 17h', 'Não'),
('UBS Tristeza', 'UBS', 'Tristeza', 'Atenção básica e vacinação', '8h às 17h', 'Não'),
('UBS Primeiro de Maio', 'UBS', 'Cascata', 'Atenção básica e saúde da família', '8h às 17h', 'Não'),
('UBS Santa Marta', 'UBS', 'Centro Histórico', 'Atendimento básico e saúde da família', '8h às 17h', 'Não'),
('US Belém Novo', 'UBS', 'Belém Novo', 'Atenção básica e consultas', '8h às 17h', 'Não'),
('UBS Modelo', 'UBS', 'Santana', 'Atenção básica e prevenção', '8h às 17h', 'Não'),
('UBS São Carlos', 'UBS', 'Partenon', 'Atenção básica e consultas', '8h às 17h', 'Não'),
('UBS Floresta', 'UBS', 'Floresta', 'Atenção básica e prevenção', '8h às 17h', 'Não'),
('UBS Cristal', 'UBS', 'Cristal', 'Atenção básica e pediatria', '8h às 17h', 'Não'),
('UBS Lomba do Pinheiro (US)', 'UBS', 'Lomba do Pinheiro', 'Atenção básica e atenção familiar', '8h às 17h', 'Não'),

-- caps
('CAPS Centro (CAPS II Centro)', 'CAPS', 'Centro', 'Saúde mental — atendimento psicológico e psiquiátrico', '8h às 18h', 'Não'),
('CAPS AD Restinga (CAPS AD III Restinga)', 'CAPS','Restinga', 'Tratamento para dependência química (álcool e drogas)', '24 horas', 'Sim'),
('CAPS AD Cavalhada (CAPS AD III Cavalhada)', 'CAPS', 'Cavalhada', 'Atenção psicossocial e dependência química', '24 horas', 'Sim'),
('CAPS Passo a Passo (Jardim São Pedro)', 'CAPS', 'Jardim São Pedro', 'Saúde mental e reabilitação psicossocial', '8h às 18h', 'Não');

-- leitos
INSERT INTO leitos (nome, tipo_unidade, total_leitos, leitos_disponiveis) VALUES
('Hospital de Clínicas de Porto Alegre', 'Hospital', 820, 120),
('Hospital Moinhos de Vento', 'Hospital', 380, 60),
('Hospital São Lucas da PUCRS', 'Hospital', 600, 90),
('Hospital Ernesto Dornelles', 'Hospital', 350, 40),
('Hospital Nossa Senhora da Conceição', 'Hospital', 700, 110),
('Hospital de Pronto Socorro (HPS) Porto Alegre', 'Hospital', 200, 25),
('Hospital Vila Nova', 'Hospital', 180, 20),
('Hospital Restinga e Extremo-Sul', 'Hospital', 260, 40);

INSERT INTO leitos (nome, tipo_unidade, total_leitos, leitos_disponiveis) VALUES
('UPA Cruzeiro do Sul', 'UPA', 18, 4),
('UPA Moacyr Scliar', 'UPA', 22, 5),
('UPA Lomba do Pinheiro', 'UPA', 20, 6);

INSERT INTO leitos (nome, tipo_unidade, total_leitos, leitos_disponiveis) VALUES
('UBS Santa Cecília', 'UBS', 2, 1),
('UBS IAPI', 'UBS', 2, 1),
('UBS Navegantes', 'UBS', 3, 1),
('UBS Lomba do Pinheiro', 'UBS', 2, 1),
('UBS Restinga', 'UBS', 3, 1),
('UBS Bom Jesus', 'UBS', 2, 1),
('UBS Alvaro Difini', 'UBS', 2, 1),
('UBS José Mauro Ceratti Lopes', 'UBS', 2, 1),
('UBS Campo da Tuca', 'UBS', 2, 1),
('UBS Moab Caldas', 'UBS', 2, 1),
('UBS Morro Santana', 'UBS', 2, 1),
('UBS Tristeza', 'UBS', 2, 1),
('UBS Primeiro de Maio', 'UBS', 2, 1),
('UBS Santa Marta', 'UBS', 1, 1),
('US Belém Novo', 'UBS', 2, 1),
('UBS Modelo', 'UBS', 2, 1),
('UBS São Carlos', 'UBS', 2, 1),
('UBS Floresta', 'UBS', 1, 1),
('UBS Cristal', 'UBS', 2, 1),
('UBS Lomba do Pinheiro (US)', 'UBS', 2, 1);

INSERT INTO leitos (nome, tipo_unidade, total_leitos, leitos_disponiveis) VALUES
('CAPS Centro', 'CAPS', 10, 3),
('CAPS AD Restinga', 'CAPS', 16, 4),
('CAPS AD Cavalhada', 'CAPS', 16, 5),
('CAPS Passo a Passo', 'CAPS', 8, 2);
