const unidadesSaude = [
 // -----------------------
    // HOSPITAIS
    // -----------------------
    {
        nome: "Hospital de Clínicas de Porto Alegre",
        tipo: "Hospital",
        bairro: "Santa Cecília",
        endereco: "Rua Ramiro Barcelos, 2350",
        telefone: "(51) 3359-8000",
        latitude: -30.038627694195746,
        longitude: -51.206663233657835
    },
    {
        nome: "Hospital Moinhos de Vento",
        tipo: "Hospital",
        bairro: "Moinhos de Vento",
        endereco: "Rua Ramiro Barcelos, 910",
        telefone: "(51) 3314-3434",
        latitude: -30.02491222937995,
        longitude: -51.208507847149754
    },
    {
        nome: "Hospital São Lucas da PUCRS",
        tipo: "Hospital",
        bairro: "Partenon",
        endereco: "Av. Ipiranga, 6690",
        telefone: "(51) 3320-3000",
        latitude: -30.05512998083029,
        longitude: -51.173375247148165
    },
    {
        nome: "Hospital Ernesto Dornelles",
        tipo: "Hospital",
        bairro: "Azenha",
        endereco: "Av. Ipiranga, 1801",
        telefone: "(51) 3217-2000",
        latitude: -30.047482447557627,
        longitude: -51.21192365767104
    },
    {
        nome: "Hospital Nossa Senhora da Conceição",
        tipo: "Hospital",
        bairro: "Cristo Redentor",
        endereco: "Av. Francisco Trein, 596",
        telefone: "(51) 3357-2000",
        latitude: -30.016001155393116,
        longitude: -51.158435757032635
    },
    {
        nome: "Hospital de Pronto Socorro (HPS) Porto Alegre",
        tipo: "Hospital",
        bairro: "Bom Fim",
        endereco: "Largo Teodoro Herzl, s/nº",
        telefone: "(51) 3289-7999",
        latitude: -30.036755642990677,
        longitude: -51.20965938956507
    },
    {
        nome: "Hospital Vila Nova",
        tipo: "Hospital",
        bairro: "Vila Nova",
        endereco: "R. Catarino Andreatta, 155",
        telefone: "(51) 3245-8900",
        latitude: -30.11927093038986,
        longitude: -51.207368931891196
    },
    {
        nome: "Hospital Restinga e Extremo-Sul",
        tipo: "Hospital",
        bairro: "Restinga",
        endereco: "Estr. João Antônio da Silveira, 3700",
        telefone: "(51) 3010-4700",
        latitude: -30.142530416140655,
        longitude: -51.1287106165481
    },

    // -----------------------
    // UPAs
    // -----------------------
    {
        nome: "UPA Cruzeiro do Sul",
        tipo: "UPA",
        bairro: "Santa Tereza",
        endereco: "R. Prof. Manoel Lobato, 151",
        telefone: "(51) 3289-4046",
        latitude: -30.069554950289618,
        longitude: -51.216666789563654
    },
    {
        nome: "UPA Moacyr Scliar",
        tipo: "UPA",
        bairro: "São Sebastião",
        endereco: "R. Jerônymo Zelmanovitz, 01",
        telefone: "(51) 3368-1629",
        latitude: -30.00970513173758,
        longitude: -51.146159420250015
    },
    {
        nome: "UPA Lomba do Pinheiro",
        tipo: "UPA",
        bairro: "Lomba do Pinheiro",
        endereco: "Estr. João de Oliveira Remião, 5110",
        telefone: "(51) 3289-8245",
        latitude: -30.11065458320222,
        longitude: -51.11003019935835
    },

    // -----------------------
    // UBS
    // -----------------------
    {
        nome: "UBS Santa Cecília",
        tipo: "UBS",
        bairro: "Santa Cecília",
        endereco: "R. São Manoel, 543",
        telefone: "(51) 3359-8685",
        latitude: -30.038516658043708,
        longitude: -51.20504292655783
    },
    {
        nome: "UBS IAPI",
        tipo: "UBS",
        bairro: "Passo d’Areia",
        endereco: "Rua Três de Abril, 90",
        telefone: "(51) 3289-3445",
        latitude: -30.015001896674644,
        longitude: -51.177993920840805
    },
    {
        nome: "UBS Navegantes",
        tipo: "UBS",
        bairro: "Navegantes",
        endereco: "Av. Pres. Franklin Roosevelt, 5",
        telefone: "(51) 3289-8214",
        latitude: -30.000090725991313,
        longitude: -51.20010933670428
    },
    {
        nome: "UBS Lomba do Pinheiro",
        tipo: "UBS",
        bairro: "Lomba do Pinheiro",
        endereco: "Estr. João de Oliveira Remião, 5110",
        telefone: "(51) 3289-8245",
        latitude: -30.110776190744136,
        longitude: -51.110231614584805
    },
    {
        nome: "UBS Restinga",
        tipo: "UBS",
        bairro: "Restinga",
        endereco: "R. Abolição, 850",
        telefone: "(51) 3250-1142",
        latitude: -30.158576374713157,
        longitude: -51.14052087845738
    },
    {
        nome: "UBS Bom Jesus",
        tipo: "UBS",
        bairro: "Bom Jesus",
        endereco: "Rua Bom Jesus, 410",
        telefone: "(51) 3289-5438",
        latitude: -30.04319761529306,
        longitude: -51.153762076149434
    },
    {
        nome: "UBS Alvaro Difini (Clínica da Família Álvaro Difini)",
        tipo: "UBS",
        bairro: "Restinga",
        endereco: "Rua Álvaro Difini, 520 ",
        telefone: "(51) 4076-5011",
        latitude: -30.148694795500397,
        longitude: -51.14597481660804
    },
    {
        nome: "UBS José Mauro Ceratti Lopes",
        tipo: "UBS",
        bairro: "Restinga",
        endereco: "Estr. João Antônio da Silveira, 3330",
        telefone: "(51) 3289-5202",
        latitude: -30.143186813607386,
        longitude: -51.127640034973616
    },
    {
        nome: "UBS Campo da Tuca (Clínica da Família)",
        tipo: "UBS",
        bairro: "Partenon",
        endereco: "Rua Cel. José Rodrigues Sobral, 958",
        telefone: "(51) 3289-5660",
        latitude: -30.06808836905352,
        longitude: -51.177137629308284
    },
    {
        nome: "UBS Moab Caldas",
        tipo: "UBS",
        bairro: "Santa Tereza",
        endereco: "Av. Moab Caldas, 400",
        telefone: "(51) 3289-4000",
        latitude: -30.069522694563407,
        longitude: -51.216504077928114
    },
    {
        nome: "UBS Morro Santana (Clínica da Família Morro Santana)",
        tipo: "UBS",
        bairro: "Morro Santana",
        endereco: "Rua Marieta Menna Barreto, 210",
        telefone: "(51) 3289-5493",
        latitude: -30.039110312558787,
        longitude: -51.128258601931336
    },
    {
        nome: "UBS Tristeza",
        tipo: "UBS",
        bairro: "Tristeza",
        endereco: "Av. Wenceslau Escobar, 2442",
        telefone: "(51) 3289-5764",
        latitude: -30.111092440316273,
        longitude: -51.25466782217651
    },
    {
        nome: "UBS Primeiro de Maio",
        tipo: "UBS",
        bairro: "Cascata",
        endereco: "Av. Prof. Oscar Pereira, 6199",
        telefone: " (51) 3289-5676 ",
        latitude: -30.09516410618855,
        longitude: -51.17842907195548
    },
    {
        nome: "UBS Santa Marta",
        tipo: "UBS",
        bairro: "Centro Histórico",
        endereco: "Rua Capitão Montanha, 27 – 4° andar",
        telefone: "(51) 3289-2935",
        latitude: -30.028476128585506,
        longitude: -51.23244496157903
    },
    {
        nome: "US Belém Novo",
        tipo: "UBS",
        bairro: "Belém Novo",
        endereco: "Rua Florêncio Farias, 195",
        telefone: "(51) 3289-5723",
        latitude: -30.210783569592646,
        longitude: -51.17874478437433
    },
    {
        nome: "UBS Modelo",
        tipo: "UBS",
        bairro: "Santana",
        endereco: "Av. Jerônimo de Ornelas, 55",
        telefone: "(51) 3289-2555",
        latitude: -30.043241852896404,
        longitude: -51.21389558176897
    },
    {
        nome: "UBS São Carlos",
        tipo: "UBS",
        bairro: "Partenon",
        endereco: "Av. Bento Gonçalves, 6670",
        telefone: "(51) 3289-5525",
        latitude: -30.06577632038458,
        longitude: -51.15043349146241
    },
    {
        nome: "UBS Floresta",
        tipo: "UBS",
        bairro: "Jardim Floresta",
        endereco: "Rua Conselheiro dÁvila, 111",
        telefone: "(51) 3362-6727",
        latitude: -30.003282224646043,
        longitude: -51.16075416025271
    },
    {
        nome: "UBS Cristal",
        tipo: "UBS",
        bairro: "Santa Tereza",
        endereco: "R. Cruzeiro do Sul, 2702",
        telefone: "(51) 3289-5714",
        latitude: -30.084392091430473,
        longitude: -51.23027542388755
    },
    {
        nome: "UBS Lomba do Pinheiro (US)",
        tipo: "UBS",
        bairro: "Lomba do Pinheiro",
        endereco: "Estr. João de Oliveira Remião, 6111",
        telefone: "(51) 3289-5562",
        latitude: -30.11945942253231,
        longitude: -51.10879195435146
    },

    // -----------------------
    // CAPS
    // -----------------------
    {
        nome: "CAPS Centro (CAPS II Centro)",
        tipo: "CAPS",
        bairro: "Centro Histórico",
        endereco: "Rua José Bonifácio, 71",
        telefone: "(51) 3600-7175",
        latitude: -30.039996622910706,
        longitude: -51.21621077035037
    },
    {
        nome: "CAPS AD Restinga (CAPS AD III Restinga)",
        tipo: "CAPS AD",
        bairro: "Restinga",
        endereco: "Rua João Antônio da Silveira, 440",
        telefone: "(51) 3248-7704",
        latitude: -30.163618493083263,
        longitude: -51.151344570988954
    },
    {
        nome: "CAPS AD Cavalhada (CAPS AD III Cavalhada)",
        tipo: "CAPS AD",
        bairro: "Cavalhada",
        endereco: "Av. Cavalhada, 1930",
        telefone: "(51) 3230-6364",
        latitude: -30.096605413528376,
        longitude: -51.22709556938771
    },
    {
        nome: "CAPS Passo a Passo (Jardim São Pedro)",
        tipo: "CAPS",
        bairro: "Jardim São Pedro",
        endereco: "Av. Carneiro da Fontoura, 57",
        telefone: "(51) 3345-1888",
        latitude: -30.01102245003532,
        longitude: -51.16613872258099
    }
];