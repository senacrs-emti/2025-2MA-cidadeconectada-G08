CREATE TABLE upas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    endereco TEXT,
    telefone VARCHAR(20),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6)
);

INSERT INTO upas (nome, endereco, telefone, latitude, longitude) VALUES
('UPA Zona Norte', 'Av. Assis Brasil, 6500 – Sarandi, Porto Alegre – RS', '(51) 3289-0000', -30.0048, -51.1595),
('UPA Cruzeiro', 'Av. Cruzeiro do Sul, 600 – Cruzeiro, Porto Alegre – RS', '(51) 3289-0010', -30.0924, -51.2292),
('UPA Moacyr Scliar (Zona Noroeste)', 'Av. Baltazar de Oliveira Garcia, 2132 – Rubem Berta, Porto Alegre – RS', '(51) 3289-0020', -30.0001, -51.1358),
('UPA Lomba do Pinheiro', 'Estr. João de Oliveira Remião, 7400 – Lomba do Pinheiro, Porto Alegre – RS', '(51) 3289-0030', -30.0917, -51.0946),
('UPA Restinga', 'Estr. João Antônio Silveira, 3700 – Restinga, Porto Alegre – RS', '(51) 3289-0040', -30.1679, -51.1621),
('UPA Zona Sul', 'Av. Otto Niemeyer, 3780 – Cavalhada, Porto Alegre – RS', '(51) 3289-0050', -30.1062, -51.2437);
