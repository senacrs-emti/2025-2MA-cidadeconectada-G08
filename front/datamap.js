const unidadesSaude = [
    { 
        nome: "UPA Moacyr Scliar", 
        tipo: "UPA", 
        bairro: "Jardim Carvalho / Zona Norte", 
        endereco: "Rua Moacyr Scliar, s/n",
        telefone: null,
        latitude: -30.00976, 
        longitude: -51.14589 
    },

    {
       nome: "Hospital de Pronto Socorro (HPS) Porto Alegre",
       tipo: "Hospital", 
       bairro: "Centro", 
       endereco: "Av. Independência, 75", 
       telefone: null, 
       latitude: -30.02228, 
       longitude: -51.22324 
    },
    {
       nome: "Hospital de Clínicas de Porto Alegre (HCPA)",
       tipo: "Hospital", 
       bairro: "Santa Cecília / Bom Fim",
       endereco: "Rua Ramiro Barcelos, 2350",
       telefone: null, 
       lat: -30.03637, 
        lng: -51.18421
     },
    { 
        nome: "UBS Alvaro Difini (Clínica da Família Álvaro Difini)", 
        tipo: "UBS", 
        bairro: "Restinga",
        endereco: "Rua Álvaro Difini, 520",
        telefone: null,
        latitude: -30.08345, 
        longitude: -51.18731 
    },
    { 
        nome: "UBS José Mauro Ceratti Lopes", 
        tipo: "UBS", 
        bairro: "Restinga",
        endereco: "Estr. João Antônio da Silveira, 3330",
        telefone: null,
        latitude: -30.10644, 
        lng: -51.20553
     },
    { 
        nome: "UBS Campo da Tuca (Clínica da Família)",
        tipo: "UBS",
        bairro: "Partenon",
        endereco: "Rua Cel. José Rodrigues Sobral, 958", 
        telefone: null,
        latitude: -30.03795, 
        longitude: -51.1619 
    },
    {
        nome: "UBS Moab Caldas", 
        tipo: "UBS", 
        bairro: "Santa Tereza", 
        endereco: "Av. Moab Caldas, 400", 
        telefone: null, 
        latitude: -30.03085, 
        longitude: -51.19562 
    },
    { 
        nome: "CAPS Centro (CAPS II Centro)",
        tipo: "CAPS", 
        bairro: "Centro", 
        endereco: "Rua José Bonifácio, 71", 
        telefone: null, 
        lat: -30.03012, 
        lng: -51.21487
     },
    { 
        nome: "CAPS AD Restinga (CAPS AD III Restinga)", 
        tipo: "CAPS AD", 
        bairro: "Restinga", 
        endereco: "Rua João Antônio da Silveira, 440", 
        telefone: null,
        latitude: -30.11298,
        longitude: -51.19912 
    },
    { 
        nome: "CAPS AD Cavalhada (CAPS AD III Cavalhada)", 
        tipo: "CAPS AD", 
        bairro: "Cavalhada", 
        endereco: "Av. Cavalhada, 1930", 
        telefone: null, 
        latitude: -30.07124, 
        longitude: -51.1789 
    },
    { 
        nome: "UBS Morro Santana (Clínica da Família Morro Santana)", 
        tipo: "UBS", 
        bairro: "Morro Santana", 
        endereco: "Rua Marieta Menna Barreto, 210", 
        telefone: null, 
        latitude: -30.00094, 
        longitude: -51.15814 
    },
    { 
        nome: "UBS Navegantes", 
        tipo: "UBS", 
        bairro: "São Geraldo", 
        endereco: "Av. Presidente Franklin Roosevelt, 5",
        telefone: null, 
        latitude: -30.01723, 
        longitude: -51.17645 
    },
    { 
        nome: "UBS Tristeza", 
        tipo: "UBS", 
        bairro: "Tristeza", 
        endereco: "Av. Wenceslau Escobar, 2442", 
        telefone: null, 
        latitude: -30.0678, 
        longitude: -51.20822 
    },
    { 
        nome: "UBS Primeiro de Maio", 
        tipo: "UBS", 
        bairro: "Cascata", 
        endereco: "Av. Prof. Oscar Pereira, 6199", 
        telefone: null, 
        latitude: -30.0621, 
        longitude: -51.17065 
    },
    { 
        nome: "UBS Santa Marta", 
        tipo: "UBS", 
        bairro: "Centro Histórico", 
        endereco: "Rua Capitão Montanha, 27", 
        telefone: null, 
        latitude: -30.0336, 
        longitude: -51.2183 
    },
    { 
        nome: "US Belém Novo", 
        tipo: "US / UBS", 
        bairro: "Belém Novo", 
        endereco: "Rua Florêncio Farias, 195", 
        telefone: null, 
        latitude: -30.0751, 
        longitude: -51.23412 
    },
    { 
        nome: "UPA Lomba do Pinheiro", 
        tipo: "UPA", 
        bairro: "Lomba do Pinheiro", 
        endereco: "Estr. João de Oliveira Remião, 5110", 
        telefone: null, 
        latitude: -30.05327, 
        longitude: -51.0968 
    },
    { 
        nome: "UBS Modelo", 
        tipo: "UBS", 
        bairro: "Santana", 
        endereco: "Av. Jerônimo de Ornelas, 55", 
        telefone: null, 
        latitude: -30.00722, 
        longitude: -51.15899 
    },
    { 
        nome: "UBS São Carlos", 
        tipo: "UBS", 
        bairro: "Partenon", 
        endereco: "Av. Bento Gonçalves, 6670", 
        telefone: null, 
        latitude: -30.0315, 
        longitude: -51.1534 
    },
    { 
        nome: "Clínica da Família Campo Novo", 
        tipo: "UBS", 
        bairro: "Bela Vista", 
        endereco: "Rua Leopoldo Scharlé, 1200", 
        telefone: null, 
        latitude: -30.0417, 
        longitude: -51.1905 
    },
    { 
        nome: "UBS Humaitá", 
        tipo: "UBS", 
        bairro: "Humaitá", 
        endereco: "Rua Carlos Gil, 150", 
        telefone: null, 
        latitude: -30.037, 
        longitude: -51.2142 
    },
    { 
        nome: "UBS Floresta", 
        tipo: "UBS", 
        bairro: "Floresta", 
        endereco: "Rua Dr. Bozano, 120", 
        telefone: null, 
        lat: -30.03102, lng: -51.1951 },
    { 
        nome: "Hospital São Lucas (PUCRS)", 
        tipo: "Hospital", 
        bairro: "Partenon", 
        endereco: "Av. Ipiranga, 6690", 
        telefone: null, 
        latitude: -30.0329, 
        longitude: -51.1538 
    },
    { 
        nome: "Hospital Vila Nova", 
        tipo: "Hospital", 
        bairro: "Vila Nova", 
        endereco: "Rua José Bonifácio, 3000", 
        telefone: null, 
        latitude: -30.0281, 
        longitude: -51.2354 },
    { 
        nome: "US Bom Jesus", 
        tipo: "UBS", 
        bairro: "Bom Jesus", 
        endereco: "Rua Bom Jesus, 410", 
        telefone: null, 
        latitude: -30.0502, 
        longitude: -51.1638 
    },
    { 
        nome: "UBS Cristal", 
        tipo: "UBS", 
        bairro: "Cristal", 
        endereco: "Av. Edgar Pires de Castro, 1200", 
        telefone: null, 
        lat: -30.0409, 
        lng: -51.2095 
    },
    { 
        nome: "CAPS Passo a Passo (Jardim São Pedro)", 
        tipo: "CAPS AD", 
        bairro: "Jardim São Pedro", 
        endereco: "Av. Carneiro da Fontoura, 57", 
        telefone: null, 
        latitude: -30.0195, 
        longitude: -51.1926 },
    { 
        nome: "UBS Lomba do Pinheiro (US)", 
        tipo: "UBS", 
        bairro: "Lomba do Pinheiro", 
        endereco: "Rua Nova Milano, 123", 
        telefone: null, 
        latitude: -30.0544, 
        longitude: -51.0992 
    },
    { 
        nome: "UBS Azenha", 
        tipo: "UBS", 
        bairro: "Azenha", 
        endereco: "Rua Doutor Timoteo, 800", 
        telefone: null, 
        latitude: -30.0277, 
        longitude: -51.187 
    }
  ];
  