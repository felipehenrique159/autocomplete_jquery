const cidades = [
	{
		"id" : 883,
		"nome" : "Abadia de Goiás",
		"codigo_ibge" : 5200050,
		"sigla" : "GO"
	},
	{
		"id" : 1565,
		"nome" : "Abadia dos Dourados",
		"codigo_ibge" : 3100104,
		"sigla" : "MG"
	},
	{
		"id" : 884,
		"nome" : "Abadiânia",
		"codigo_ibge" : 5200100,
		"sigla" : "GO"
	},
	{
		"id" : 1566,
		"nome" : "Abaeté",
		"codigo_ibge" : 3100203,
		"sigla" : "MG"
	},
	{
		"id" : 2418,
		"nome" : "Abaetetuba",
		"codigo_ibge" : 1500107,
		"sigla" : "PA"
	},
	{
		"id" : 698,
		"nome" : "Abaiara",
		"codigo_ibge" : 2300101,
		"sigla" : "CE"
	},
	{
		"id" : 281,
		"nome" : "Abaíra",
		"codigo_ibge" : 2900108,
		"sigla" : "BA"
	},
	{
		"id" : 282,
		"nome" : "Abaré",
		"codigo_ibge" : 2900207,
		"sigla" : "BA"
	},
	{
		"id" : 2784,
		"nome" : "Abatiá",
		"codigo_ibge" : 4100103,
		"sigla" : "PR"
	},
	{
		"id" : 4413,
		"nome" : "Abdon Batista",
		"codigo_ibge" : 4200051,
		"sigla" : "SC"
	},
	{
		"id" : 2419,
		"nome" : "Abel Figueiredo",
		"codigo_ibge" : 1500131,
		"sigla" : "PA"
	},
	{
		"id" : 4414,
		"nome" : "Abelardo Luz",
		"codigo_ibge" : 4200101,
		"sigla" : "SC"
	},
	{
		"id" : 1567,
		"nome" : "Abre Campo",
		"codigo_ibge" : 3100302,
		"sigla" : "MG"
	},
	{
		"id" : 3183,
		"nome" : "Abreu e Lima",
		"codigo_ibge" : 2600054,
		"sigla" : "PE"
	},
	{
		"id" : 5426,
		"nome" : "Abreulândia",
		"codigo_ibge" : 1700251,
		"sigla" : "TO"
	},
	{
		"id" : 1568,
		"nome" : "Acaiaca",
		"codigo_ibge" : 3100401,
		"sigla" : "MG"
	},
	{
		"id" : 1129,
		"nome" : "Açailândia",
		"codigo_ibge" : 2100055,
		"sigla" : "MA"
	},
	{
		"id" : 283,
		"nome" : "Acajutiba",
		"codigo_ibge" : 2900306,
		"sigla" : "BA"
	},
	{
		"id" : 2420,
		"nome" : "Acará",
		"codigo_ibge" : 1500206,
		"sigla" : "PA"
	},
	{
		"id" : 699,
		"nome" : "Acarape",
		"codigo_ibge" : 2300150,
		"sigla" : "CE"
	},
	{
		"id" : 700,
		"nome" : "Acaraú",
		"codigo_ibge" : 2300200,
		"sigla" : "CE"
	},
	{
		"id" : 3683,
		"nome" : "Acari",
		"codigo_ibge" : 2400109,
		"sigla" : "RN"
	},
	{
		"id" : 3368,
		"nome" : "Acauã",
		"codigo_ibge" : 2200053,
		"sigla" : "PI"
	},
	{
		"id" : 3850,
		"nome" : "Aceguá",
		"codigo_ibge" : 4300034,
		"sigla" : "RS"
	},
	{
		"id" : 701,
		"nome" : "Acopiara",
		"codigo_ibge" : 2300309,
		"sigla" : "CE"
	},
	{
		"id" : 1346,
		"nome" : "Acorizal",
		"codigo_ibge" : 5100102,
		"sigla" : "MT"
	},
	{
		"id" : 79,
		"nome" : "Acrelândia",
		"codigo_ibge" : 1200013,
		"sigla" : "AC"
	},
	{
		"id" : 885,
		"nome" : "Acreúna",
		"codigo_ibge" : 5200134,
		"sigla" : "GO"
	},
	{
		"id" : 3684,
		"nome" : "Açu",
		"codigo_ibge" : 2400208,
		"sigla" : "RN"
	},
	{
		"id" : 1569,
		"nome" : "Açucena",
		"codigo_ibge" : 3100500,
		"sigla" : "MG"
	},
	{
		"id" : 4706,
		"nome" : "Adamantina",
		"codigo_ibge" : 3500105,
		"sigla" : "SP"
	},
	{
		"id" : 886,
		"nome" : "Adelândia",
		"codigo_ibge" : 5200159,
		"sigla" : "GO"
	},
	{
		"id" : 4707,
		"nome" : "Adolfo",
		"codigo_ibge" : 3500204,
		"sigla" : "SP"
	},
	{
		"id" : 2785,
		"nome" : "Adrianópolis",
		"codigo_ibge" : 4100202,
		"sigla" : "PR"
	},
	{
		"id" : 284,
		"nome" : "Adustina",
		"codigo_ibge" : 2900355,
		"sigla" : "BA"
	},
	{
		"id" : 3184,
		"nome" : "Afogados da Ingazeira",
		"codigo_ibge" : 2600104,
		"sigla" : "PE"
	},
	{
		"id" : 3685,
		"nome" : "Afonso Bezerra",
		"codigo_ibge" : 2400307,
		"sigla" : "RN"
	},
	{
		"id" : 1,
		"nome" : "Afonso Cláudio",
		"codigo_ibge" : 3200102,
		"sigla" : "ES"
	},
	{
		"id" : 1130,
		"nome" : "Afonso Cunha",
		"codigo_ibge" : 2100105,
		"sigla" : "MA"
	},
	{
		"id" : 3185,
		"nome" : "Afrânio",
		"codigo_ibge" : 2600203,
		"sigla" : "PE"
	},
	{
		"id" : 2421,
		"nome" : "Afuá",
		"codigo_ibge" : 1500305,
		"sigla" : "PA"
	},
	{
		"id" : 3186,
		"nome" : "Agrestina",
		"codigo_ibge" : 2600302,
		"sigla" : "PE"
	},
	{
		"id" : 3369,
		"nome" : "Agricolândia",
		"codigo_ibge" : 2200103,
		"sigla" : "PI"
	},
	{
		"id" : 4415,
		"nome" : "Agrolândia",
		"codigo_ibge" : 4200200,
		"sigla" : "SC"
	},
	{
		"id" : 4416,
		"nome" : "Agronômica",
		"codigo_ibge" : 4200309,
		"sigla" : "SC"
	},
	{
		"id" : 2422,
		"nome" : "Água Azul do Norte",
		"codigo_ibge" : 1500347,
		"sigla" : "PA"
	},
	{
		"id" : 1347,
		"nome" : "Água Boa",
		"codigo_ibge" : 5100201,
		"sigla" : "MT"
	},
	{
		"id" : 1570,
		"nome" : "Água Boa",
		"codigo_ibge" : 3100609,
		"sigla" : "MG"
	},
	{
		"id" : 101,
		"nome" : "Água Branca",
		"codigo_ibge" : 2700102,
		"sigla" : "AL"
	},
	{
		"id" : 2561,
		"nome" : "Água Branca",
		"codigo_ibge" : 2500106,
		"sigla" : "PB"
	},
	{
		"id" : 3370,
		"nome" : "Água Branca",
		"codigo_ibge" : 2200202,
		"sigla" : "PI"
	},
	{
		"id" : 1487,
		"nome" : "Água Clara",
		"codigo_ibge" : 5000203,
		"sigla" : "MS"
	},
	{
		"id" : 1571,
		"nome" : "Água Comprida",
		"codigo_ibge" : 3100708,
		"sigla" : "MG"
	},
	{
		"id" : 4417,
		"nome" : "Água Doce",
		"codigo_ibge" : 4200408,
		"sigla" : "SC"
	},
	{
		"id" : 1131,
		"nome" : "Água Doce do Maranhão",
		"codigo_ibge" : 2100154,
		"sigla" : "MA"
	},
	{
		"id" : 2,
		"nome" : "Água Doce do Norte",
		"codigo_ibge" : 3200169,
		"sigla" : "ES"
	},
	{
		"id" : 285,
		"nome" : "Água Fria",
		"codigo_ibge" : 2900405,
		"sigla" : "BA"
	},
	{
		"id" : 887,
		"nome" : "Água Fria de Goiás",
		"codigo_ibge" : 5200175,
		"sigla" : "GO"
	},
	{
		"id" : 888,
		"nome" : "Água Limpa",
		"codigo_ibge" : 5200209,
		"sigla" : "GO"
	},
	{
		"id" : 3686,
		"nome" : "Água Nova",
		"codigo_ibge" : 2400406,
		"sigla" : "RN"
	},
	{
		"id" : 3187,
		"nome" : "Água Preta",
		"codigo_ibge" : 2600401,
		"sigla" : "PE"
	},
	{
		"id" : 3851,
		"nome" : "Água Santa",
		"codigo_ibge" : 4300059,
		"sigla" : "RS"
	},
	{
		"id" : 4708,
		"nome" : "Aguaí",
		"codigo_ibge" : 3500303,
		"sigla" : "SP"
	},
	{
		"id" : 1572,
		"nome" : "Aguanil",
		"codigo_ibge" : 3100807,
		"sigla" : "MG"
	},
	{
		"id" : 3188,
		"nome" : "Águas Belas",
		"codigo_ibge" : 2600500,
		"sigla" : "PE"
	},
	{
		"id" : 4709,
		"nome" : "Águas da Prata",
		"codigo_ibge" : 3500402,
		"sigla" : "SP"
	},
	{
		"id" : 4418,
		"nome" : "Águas de Chapecó",
		"codigo_ibge" : 4200507,
		"sigla" : "SC"
	},
	{
		"id" : 4710,
		"nome" : "Águas de Lindóia",
		"codigo_ibge" : 3500501,
		"sigla" : "SP"
	},
	{
		"id" : 4711,
		"nome" : "Águas de Santa Bárbara",
		"codigo_ibge" : 3500550,
		"sigla" : "SP"
	},
	{
		"id" : 4712,
		"nome" : "Águas de São Pedro",
		"codigo_ibge" : 3500600,
		"sigla" : "SP"
	},
	{
		"id" : 1573,
		"nome" : "Águas Formosas",
		"codigo_ibge" : 3100906,
		"sigla" : "MG"
	},
	{
		"id" : 4419,
		"nome" : "Águas Frias",
		"codigo_ibge" : 4200556,
		"sigla" : "SC"
	},
	{
		"id" : 889,
		"nome" : "Águas Lindas de Goiás",
		"codigo_ibge" : 5200258,
		"sigla" : "GO"
	},
	{
		"id" : 4420,
		"nome" : "Águas Mornas",
		"codigo_ibge" : 4200606,
		"sigla" : "SC"
	},
	{
		"id" : 1574,
		"nome" : "Águas Vermelhas",
		"codigo_ibge" : 3101003,
		"sigla" : "MG"
	},
	{
		"id" : 3852,
		"nome" : "Agudo",
		"codigo_ibge" : 4300109,
		"sigla" : "RS"
	},
	{
		"id" : 4713,
		"nome" : "Agudos",
		"codigo_ibge" : 3500709,
		"sigla" : "SP"
	},
	{
		"id" : 2786,
		"nome" : "Agudos do Sul",
		"codigo_ibge" : 4100301,
		"sigla" : "PR"
	},
	{
		"id" : 3,
		"nome" : "Águia Branca",
		"codigo_ibge" : 3200136,
		"sigla" : "ES"
	},
	{
		"id" : 2562,
		"nome" : "Aguiar",
		"codigo_ibge" : 2500205,
		"sigla" : "PB"
	},
	{
		"id" : 5427,
		"nome" : "Aguiarnópolis",
		"codigo_ibge" : 1700301,
		"sigla" : "TO"
	},
	{
		"id" : 1575,
		"nome" : "Aimorés",
		"codigo_ibge" : 3101102,
		"sigla" : "MG"
	},
	{
		"id" : 286,
		"nome" : "Aiquara",
		"codigo_ibge" : 2900603,
		"sigla" : "BA"
	},
	{
		"id" : 702,
		"nome" : "Aiuaba",
		"codigo_ibge" : 2300408,
		"sigla" : "CE"
	},
	{
		"id" : 1576,
		"nome" : "Aiuruoca",
		"codigo_ibge" : 3101201,
		"sigla" : "MG"
	},
	{
		"id" : 3853,
		"nome" : "Ajuricaba",
		"codigo_ibge" : 4300208,
		"sigla" : "RS"
	},
	{
		"id" : 1577,
		"nome" : "Alagoa",
		"codigo_ibge" : 3101300,
		"sigla" : "MG"
	},
	{
		"id" : 2563,
		"nome" : "Alagoa Grande",
		"codigo_ibge" : 2500304,
		"sigla" : "PB"
	},
	{
		"id" : 2564,
		"nome" : "Alagoa Nova",
		"codigo_ibge" : 2500403,
		"sigla" : "PB"
	},
	{
		"id" : 2565,
		"nome" : "Alagoinha",
		"codigo_ibge" : 2500502,
		"sigla" : "PB"
	},
	{
		"id" : 3189,
		"nome" : "Alagoinha",
		"codigo_ibge" : 2600609,
		"sigla" : "PE"
	},
	{
		"id" : 3371,
		"nome" : "Alagoinha do Piauí",
		"codigo_ibge" : 2200251,
		"sigla" : "PI"
	},
	{
		"id" : 287,
		"nome" : "Alagoinhas",
		"codigo_ibge" : 2900702,
		"sigla" : "BA"
	},
	{
		"id" : 4714,
		"nome" : "Alambari",
		"codigo_ibge" : 3500758,
		"sigla" : "SP"
	},
	{
		"id" : 1578,
		"nome" : "Albertina",
		"codigo_ibge" : 3101409,
		"sigla" : "MG"
	},
	{
		"id" : 1132,
		"nome" : "Alcântara",
		"codigo_ibge" : 2100204,
		"sigla" : "MA"
	},
	{
		"id" : 703,
		"nome" : "Alcântaras",
		"codigo_ibge" : 2300507,
		"sigla" : "CE"
	},
	{
		"id" : 2566,
		"nome" : "Alcantil",
		"codigo_ibge" : 2500536,
		"sigla" : "PB"
	},
	{
		"id" : 1488,
		"nome" : "Alcinópolis",
		"codigo_ibge" : 5000252,
		"sigla" : "MS"
	},
	{
		"id" : 288,
		"nome" : "Alcobaça",
		"codigo_ibge" : 2900801,
		"sigla" : "BA"
	},
	{
		"id" : 1133,
		"nome" : "Aldeias Altas",
		"codigo_ibge" : 2100303,
		"sigla" : "MA"
	},
	{
		"id" : 3854,
		"nome" : "Alecrim",
		"codigo_ibge" : 4300307,
		"sigla" : "RS"
	},
	{
		"id" : 4,
		"nome" : "Alegre",
		"codigo_ibge" : 3200201,
		"sigla" : "ES"
	},
	{
		"id" : 3855,
		"nome" : "Alegrete",
		"codigo_ibge" : 4300406,
		"sigla" : "RS"
	},
	{
		"id" : 3372,
		"nome" : "Alegrete do Piauí",
		"codigo_ibge" : 2200277,
		"sigla" : "PI"
	},
	{
		"id" : 3856,
		"nome" : "Alegria",
		"codigo_ibge" : 4300455,
		"sigla" : "RS"
	},
	{
		"id" : 1579,
		"nome" : "Além Paraíba",
		"codigo_ibge" : 3101508,
		"sigla" : "MG"
	},
	{
		"id" : 2423,
		"nome" : "Alenquer",
		"codigo_ibge" : 1500404,
		"sigla" : "PA"
	},
	{
		"id" : 3687,
		"nome" : "Alexandria",
		"codigo_ibge" : 2400505,
		"sigla" : "RN"
	},
	{
		"id" : 890,
		"nome" : "Alexânia",
		"codigo_ibge" : 5200308,
		"sigla" : "GO"
	},
	{
		"id" : 1580,
		"nome" : "Alfenas",
		"codigo_ibge" : 3101607,
		"sigla" : "MG"
	},
	{
		"id" : 5,
		"nome" : "Alfredo Chaves",
		"codigo_ibge" : 3200300,
		"sigla" : "ES"
	},
	{
		"id" : 4715,
		"nome" : "Alfredo Marcondes",
		"codigo_ibge" : 3500808,
		"sigla" : "SP"
	},
	{
		"id" : 1581,
		"nome" : "Alfredo Vasconcelos",
		"codigo_ibge" : 3101631,
		"sigla" : "MG"
	},
	{
		"id" : 4421,
		"nome" : "Alfredo Wagner",
		"codigo_ibge" : 4200705,
		"sigla" : "SC"
	},
	{
		"id" : 2567,
		"nome" : "Algodão de Jandaíra",
		"codigo_ibge" : 2500577,
		"sigla" : "PB"
	},
	{
		"id" : 2568,
		"nome" : "Alhandra",
		"codigo_ibge" : 2500601,
		"sigla" : "PB"
	},
	{
		"id" : 3190,
		"nome" : "Aliança",
		"codigo_ibge" : 2600708,
		"sigla" : "PE"
	},
	{
		"id" : 5428,
		"nome" : "Aliança do Tocantins",
		"codigo_ibge" : 1700350,
		"sigla" : "TO"
	},
	{
		"id" : 289,
		"nome" : "Almadina",
		"codigo_ibge" : 2900900,
		"sigla" : "BA"
	},
	{
		"id" : 5429,
		"nome" : "Almas",
		"codigo_ibge" : 1700400,
		"sigla" : "TO"
	},
	{
		"id" : 2424,
		"nome" : "Almeirim",
		"codigo_ibge" : 1500503,
		"sigla" : "PA"
	},
	{
		"id" : 1582,
		"nome" : "Almenara",
		"codigo_ibge" : 3101706,
		"sigla" : "MG"
	},
	{
		"id" : 3688,
		"nome" : "Almino Afonso",
		"codigo_ibge" : 2400604,
		"sigla" : "RN"
	},
	{
		"id" : 2787,
		"nome" : "Almirante Tamandaré",
		"codigo_ibge" : 4100400,
		"sigla" : "PR"
	},
	{
		"id" : 3857,
		"nome" : "Almirante Tamandaré do Sul",
		"codigo_ibge" : 4300471,
		"sigla" : "RS"
	},
	{
		"id" : 891,
		"nome" : "Aloândia",
		"codigo_ibge" : 5200506,
		"sigla" : "GO"
	},
	{
		"id" : 1583,
		"nome" : "Alpercata",
		"codigo_ibge" : 3101805,
		"sigla" : "MG"
	},
	{
		"id" : 3858,
		"nome" : "Alpestre",
		"codigo_ibge" : 4300505,
		"sigla" : "RS"
	},
	{
		"id" : 1584,
		"nome" : "Alpinópolis",
		"codigo_ibge" : 3101904,
		"sigla" : "MG"
	},
	{
		"id" : 1348,
		"nome" : "Alta Floresta",
		"codigo_ibge" : 5100250,
		"sigla" : "MT"
	},
	{
		"id" : 4346,
		"nome" : "Alta Floresta d Oeste",
		"codigo_ibge" : 1100015,
		"sigla" : "RO"
	},
	{
		"id" : 4716,
		"nome" : "Altair",
		"codigo_ibge" : 3500907,
		"sigla" : "SP"
	},
	{
		"id" : 2425,
		"nome" : "Altamira",
		"codigo_ibge" : 1500602,
		"sigla" : "PA"
	},
	{
		"id" : 1134,
		"nome" : "Altamira do Maranhão",
		"codigo_ibge" : 2100402,
		"sigla" : "MA"
	},
	{
		"id" : 2788,
		"nome" : "Altamira do Paraná",
		"codigo_ibge" : 4100459,
		"sigla" : "PR"
	},
	{
		"id" : 704,
		"nome" : "Altaneira",
		"codigo_ibge" : 2300606,
		"sigla" : "CE"
	},
	{
		"id" : 1585,
		"nome" : "Alterosa",
		"codigo_ibge" : 3102001,
		"sigla" : "MG"
	},
	{
		"id" : 3191,
		"nome" : "Altinho",
		"codigo_ibge" : 2600807,
		"sigla" : "PE"
	},
	{
		"id" : 4717,
		"nome" : "Altinópolis",
		"codigo_ibge" : 3501004,
		"sigla" : "SP"
	},
	{
		"id" : 4398,
		"nome" : "Alto Alegre",
		"codigo_ibge" : 1400050,
		"sigla" : "RR"
	},
	{
		"id" : 3859,
		"nome" : "Alto Alegre",
		"codigo_ibge" : 4300554,
		"sigla" : "RS"
	},
	{
		"id" : 4718,
		"nome" : "Alto Alegre",
		"codigo_ibge" : 3501103,
		"sigla" : "SP"
	},
	{
		"id" : 1135,
		"nome" : "Alto Alegre do Maranhão",
		"codigo_ibge" : 2100436,
		"sigla" : "MA"
	},
	{
		"id" : 1136,
		"nome" : "Alto Alegre do Pindaré",
		"codigo_ibge" : 2100477,
		"sigla" : "MA"
	},
	{
		"id" : 4347,
		"nome" : "Alto Alegre dos Parecis",
		"codigo_ibge" : 1100379,
		"sigla" : "RO"
	},
	{
		"id" : 1349,
		"nome" : "Alto Araguaia",
		"codigo_ibge" : 5100300,
		"sigla" : "MT"
	},
	{
		"id" : 4422,
		"nome" : "Alto Bela Vista",
		"codigo_ibge" : 4200754,
		"sigla" : "SC"
	},
	{
		"id" : 1350,
		"nome" : "Alto Boa Vista",
		"codigo_ibge" : 5100359,
		"sigla" : "MT"
	},
	{
		"id" : 1586,
		"nome" : "Alto Caparaó",
		"codigo_ibge" : 3102050,
		"sigla" : "MG"
	},
	{
		"id" : 3689,
		"nome" : "Alto do Rodrigues",
		"codigo_ibge" : 2400703,
		"sigla" : "RN"
	},
	{
		"id" : 3860,
		"nome" : "Alto Feliz",
		"codigo_ibge" : 4300570,
		"sigla" : "RS"
	},
	{
		"id" : 1351,
		"nome" : "Alto Garças",
		"codigo_ibge" : 5100409,
		"sigla" : "MT"
	},
	{
		"id" : 892,
		"nome" : "Alto Horizonte",
		"codigo_ibge" : 5200555,
		"sigla" : "GO"
	},
	{
		"id" : 1587,
		"nome" : "Alto Jequitibá",
		"codigo_ibge" : 3153509,
		"sigla" : "MG"
	},
	{
		"id" : 3373,
		"nome" : "Alto Longá",
		"codigo_ibge" : 2200301,
		"sigla" : "PI"
	},
	{
		"id" : 1352,
		"nome" : "Alto Paraguai",
		"codigo_ibge" : 5100508,
		"sigla" : "MT"
	},
	{
		"id" : 2789,
		"nome" : "Alto Paraíso",
		"codigo_ibge" : 4128625,
		"sigla" : "PR"
	},
	{
		"id" : 4348,
		"nome" : "Alto Paraíso",
		"codigo_ibge" : 1100403,
		"sigla" : "RO"
	},
	{
		"id" : 893,
		"nome" : "Alto Paraíso de Goiás",
		"codigo_ibge" : 5200605,
		"sigla" : "GO"
	},
	{
		"id" : 2790,
		"nome" : "Alto Paraná",
		"codigo_ibge" : 4100608,
		"sigla" : "PR"
	},
	{
		"id" : 1137,
		"nome" : "Alto Parnaíba",
		"codigo_ibge" : 2100501,
		"sigla" : "MA"
	},
	{
		"id" : 2791,
		"nome" : "Alto Piquiri",
		"codigo_ibge" : 4100707,
		"sigla" : "PR"
	},
	{
		"id" : 1588,
		"nome" : "Alto Rio Doce",
		"codigo_ibge" : 3102100,
		"sigla" : "MG"
	},
	{
		"id" : 6,
		"nome" : "Alto Rio Novo",
		"codigo_ibge" : 3200359,
		"sigla" : "ES"
	},
	{
		"id" : 705,
		"nome" : "Alto Santo",
		"codigo_ibge" : 2300705,
		"sigla" : "CE"
	},
	{
		"id" : 1353,
		"nome" : "Alto Taquari",
		"codigo_ibge" : 5100607,
		"sigla" : "MT"
	},
	{
		"id" : 2792,
		"nome" : "Altônia",
		"codigo_ibge" : 4100509,
		"sigla" : "PR"
	},
	{
		"id" : 3374,
		"nome" : "Altos",
		"codigo_ibge" : 2200400,
		"sigla" : "PI"
	},
	{
		"id" : 4719,
		"nome" : "Alumínio",
		"codigo_ibge" : 3501152,
		"sigla" : "SP"
	},
	{
		"id" : 219,
		"nome" : "Alvarães",
		"codigo_ibge" : 1300029,
		"sigla" : "AM"
	},
	{
		"id" : 1589,
		"nome" : "Alvarenga",
		"codigo_ibge" : 3102209,
		"sigla" : "MG"
	},
	{
		"id" : 4720,
		"nome" : "Álvares Florence",
		"codigo_ibge" : 3501202,
		"sigla" : "SP"
	},
	{
		"id" : 4721,
		"nome" : "Álvares Machado",
		"codigo_ibge" : 3501301,
		"sigla" : "SP"
	},
	{
		"id" : 4722,
		"nome" : "Álvaro de Carvalho",
		"codigo_ibge" : 3501400,
		"sigla" : "SP"
	},
	{
		"id" : 4723,
		"nome" : "Alvinlândia",
		"codigo_ibge" : 3501509,
		"sigla" : "SP"
	},
	{
		"id" : 1590,
		"nome" : "Alvinópolis",
		"codigo_ibge" : 3102308,
		"sigla" : "MG"
	},
	{
		"id" : 3861,
		"nome" : "Alvorada",
		"codigo_ibge" : 4300604,
		"sigla" : "RS"
	},
	{
		"id" : 5430,
		"nome" : "Alvorada",
		"codigo_ibge" : 1700707,
		"sigla" : "TO"
	},
	{
		"id" : 4349,
		"nome" : "Alvorada d Oeste",
		"codigo_ibge" : 1100346,
		"sigla" : "RO"
	},
	{
		"id" : 1591,
		"nome" : "Alvorada de Minas",
		"codigo_ibge" : 3102407,
		"sigla" : "MG"
	},
	{
		"id" : 3375,
		"nome" : "Alvorada do Gurguéia",
		"codigo_ibge" : 2200459,
		"sigla" : "PI"
	},
	{
		"id" : 894,
		"nome" : "Alvorada do Norte",
		"codigo_ibge" : 5200803,
		"sigla" : "GO"
	},
	{
		"id" : 2793,
		"nome" : "Alvorada do Sul",
		"codigo_ibge" : 4100806,
		"sigla" : "PR"
	},
	{
		"id" : 4399,
		"nome" : "Amajari",
		"codigo_ibge" : 1400027,
		"sigla" : "RR"
	},
	{
		"id" : 1489,
		"nome" : "Amambai",
		"codigo_ibge" : 5000609,
		"sigla" : "MS"
	},
	{
		"id" : 203,
		"nome" : "Amapá",
		"codigo_ibge" : 1600105,
		"sigla" : "AP"
	},
	{
		"id" : 1138,
		"nome" : "Amapá do Maranhão",
		"codigo_ibge" : 2100550,
		"sigla" : "MA"
	},
	{
		"id" : 2794,
		"nome" : "Amaporã",
		"codigo_ibge" : 4100905,
		"sigla" : "PR"
	},
	{
		"id" : 3192,
		"nome" : "Amaraji",
		"codigo_ibge" : 2600906,
		"sigla" : "PE"
	},
	{
		"id" : 3862,
		"nome" : "Amaral Ferrador",
		"codigo_ibge" : 4300638,
		"sigla" : "RS"
	},
	{
		"id" : 895,
		"nome" : "Amaralina",
		"codigo_ibge" : 5200829,
		"sigla" : "GO"
	},
	{
		"id" : 3376,
		"nome" : "Amarante",
		"codigo_ibge" : 2200509,
		"sigla" : "PI"
	},
	{
		"id" : 1139,
		"nome" : "Amarante do Maranhão",
		"codigo_ibge" : 2100600,
		"sigla" : "MA"
	},
	{
		"id" : 290,
		"nome" : "Amargosa",
		"codigo_ibge" : 2901007,
		"sigla" : "BA"
	},
	{
		"id" : 220,
		"nome" : "Amaturá",
		"codigo_ibge" : 1300060,
		"sigla" : "AM"
	},
	{
		"id" : 291,
		"nome" : "Amélia Rodrigues",
		"codigo_ibge" : 2901106,
		"sigla" : "BA"
	},
	{
		"id" : 292,
		"nome" : "América Dourada",
		"codigo_ibge" : 2901155,
		"sigla" : "BA"
	},
	{
		"id" : 4724,
		"nome" : "Americana",
		"codigo_ibge" : 3501608,
		"sigla" : "SP"
	},
	{
		"id" : 896,
		"nome" : "Americano do Brasil",
		"codigo_ibge" : 5200852,
		"sigla" : "GO"
	},
	{
		"id" : 4725,
		"nome" : "Américo Brasiliense",
		"codigo_ibge" : 3501707,
		"sigla" : "SP"
	},
	{
		"id" : 4726,
		"nome" : "Américo de Campos",
		"codigo_ibge" : 3501806,
		"sigla" : "SP"
	},
	{
		"id" : 3863,
		"nome" : "Ametista do Sul",
		"codigo_ibge" : 4300646,
		"sigla" : "RS"
	},
	{
		"id" : 706,
		"nome" : "Amontada",
		"codigo_ibge" : 2300754,
		"sigla" : "CE"
	},
	{
		"id" : 897,
		"nome" : "Amorinópolis",
		"codigo_ibge" : 5200902,
		"sigla" : "GO"
	},
	{
		"id" : 4727,
		"nome" : "Amparo",
		"codigo_ibge" : 3501905,
		"sigla" : "SP"
	},
	{
		"id" : 2569,
		"nome" : "Amparo",
		"codigo_ibge" : 2500734,
		"sigla" : "PB"
	},
	{
		"id" : 5351,
		"nome" : "Amparo de São Francisco",
		"codigo_ibge" : 2800100,
		"sigla" : "SE"
	},
	{
		"id" : 1592,
		"nome" : "Amparo do Serra",
		"codigo_ibge" : 3102506,
		"sigla" : "MG"
	},
	{
		"id" : 2795,
		"nome" : "Ampére",
		"codigo_ibge" : 4101002,
		"sigla" : "PR"
	},
	{
		"id" : 102,
		"nome" : "Anadia",
		"codigo_ibge" : 2700201,
		"sigla" : "AL"
	},
	{
		"id" : 293,
		"nome" : "Anagé",
		"codigo_ibge" : 2901205,
		"sigla" : "BA"
	},
	{
		"id" : 2796,
		"nome" : "Anahy",
		"codigo_ibge" : 4101051,
		"sigla" : "PR"
	},
	{
		"id" : 2426,
		"nome" : "Anajás",
		"codigo_ibge" : 1500701,
		"sigla" : "PA"
	},
	{
		"id" : 1140,
		"nome" : "Anajatuba",
		"codigo_ibge" : 2100709,
		"sigla" : "MA"
	},
	{
		"id" : 4728,
		"nome" : "Analândia",
		"codigo_ibge" : 3502002,
		"sigla" : "SP"
	},
	{
		"id" : 221,
		"nome" : "Anamã",
		"codigo_ibge" : 1300086,
		"sigla" : "AM"
	},
	{
		"id" : 5431,
		"nome" : "Ananás",
		"codigo_ibge" : 1701002,
		"sigla" : "TO"
	},
	{
		"id" : 2427,
		"nome" : "Ananindeua",
		"codigo_ibge" : 1500800,
		"sigla" : "PA"
	},
	{
		"id" : 898,
		"nome" : "Anápolis",
		"codigo_ibge" : 5201108,
		"sigla" : "GO"
	},
	{
		"id" : 2428,
		"nome" : "Anapu",
		"codigo_ibge" : 1500859,
		"sigla" : "PA"
	},
	{
		"id" : 1141,
		"nome" : "Anapurus",
		"codigo_ibge" : 2100808,
		"sigla" : "MA"
	},
	{
		"id" : 1490,
		"nome" : "Anastácio",
		"codigo_ibge" : 5000708,
		"sigla" : "MS"
	},
	{
		"id" : 1491,
		"nome" : "Anaurilândia",
		"codigo_ibge" : 5000807,
		"sigla" : "MS"
	},
	{
		"id" : 7,
		"nome" : "Anchieta",
		"codigo_ibge" : 3200409,
		"sigla" : "ES"
	},
	{
		"id" : 4423,
		"nome" : "Anchieta",
		"codigo_ibge" : 4200804,
		"sigla" : "SC"
	},
	{
		"id" : 294,
		"nome" : "Andaraí",
		"codigo_ibge" : 2901304,
		"sigla" : "BA"
	},
	{
		"id" : 2797,
		"nome" : "Andirá",
		"codigo_ibge" : 4101101,
		"sigla" : "PR"
	},
	{
		"id" : 295,
		"nome" : "Andorinha",
		"codigo_ibge" : 2901353,
		"sigla" : "BA"
	},
	{
		"id" : 1593,
		"nome" : "Andradas",
		"codigo_ibge" : 3102605,
		"sigla" : "MG"
	},
	{
		"id" : 4729,
		"nome" : "Andradina",
		"codigo_ibge" : 3502101,
		"sigla" : "SP"
	},
	{
		"id" : 3864,
		"nome" : "André da Rocha",
		"codigo_ibge" : 4300661,
		"sigla" : "RS"
	},
	{
		"id" : 1594,
		"nome" : "Andrelândia",
		"codigo_ibge" : 3102803,
		"sigla" : "MG"
	},
	{
		"id" : 4730,
		"nome" : "Angatuba",
		"codigo_ibge" : 3502200,
		"sigla" : "SP"
	},
	{
		"id" : 1595,
		"nome" : "Angelândia",
		"codigo_ibge" : 3102852,
		"sigla" : "MG"
	},
	{
		"id" : 1492,
		"nome" : "Angélica",
		"codigo_ibge" : 5000856,
		"sigla" : "MS"
	},
	{
		"id" : 3193,
		"nome" : "Angelim",
		"codigo_ibge" : 2601003,
		"sigla" : "PE"
	},
	{
		"id" : 4424,
		"nome" : "Angelina",
		"codigo_ibge" : 4200903,
		"sigla" : "SC"
	},
	{
		"id" : 296,
		"nome" : "Angical",
		"codigo_ibge" : 2901403,
		"sigla" : "BA"
	},
	{
		"id" : 3377,
		"nome" : "Angical do Piauí",
		"codigo_ibge" : 2200608,
		"sigla" : "PI"
	},
	{
		"id" : 5432,
		"nome" : "Angico",
		"codigo_ibge" : 1701051,
		"sigla" : "TO"
	},
	{
		"id" : 3690,
		"nome" : "Angicos",
		"codigo_ibge" : 2400802,
		"sigla" : "RN"
	},
	{
		"id" : 3591,
		"nome" : "Angra dos Reis",
		"codigo_ibge" : 3300100,
		"sigla" : "RJ"
	},
	{
		"id" : 297,
		"nome" : "Anguera",
		"codigo_ibge" : 2901502,
		"sigla" : "BA"
	},
	{
		"id" : 2798,
		"nome" : "Ângulo",
		"codigo_ibge" : 4101150,
		"sigla" : "PR"
	},
	{
		"id" : 899,
		"nome" : "Anhanguera",
		"codigo_ibge" : 5201207,
		"sigla" : "GO"
	},
	{
		"id" : 4731,
		"nome" : "Anhembi",
		"codigo_ibge" : 3502309,
		"sigla" : "SP"
	},
	{
		"id" : 4732,
		"nome" : "Anhumas",
		"codigo_ibge" : 3502408,
		"sigla" : "SP"
	},
	{
		"id" : 900,
		"nome" : "Anicuns",
		"codigo_ibge" : 5201306,
		"sigla" : "GO"
	},
	{
		"id" : 3378,
		"nome" : "Anísio de Abreu",
		"codigo_ibge" : 2200707,
		"sigla" : "PI"
	},
	{
		"id" : 4425,
		"nome" : "Anita Garibaldi",
		"codigo_ibge" : 4201000,
		"sigla" : "SC"
	},
	{
		"id" : 4426,
		"nome" : "Anitápolis",
		"codigo_ibge" : 4201109,
		"sigla" : "SC"
	},
	{
		"id" : 222,
		"nome" : "Anori",
		"codigo_ibge" : 1300102,
		"sigla" : "AM"
	},
	{
		"id" : 3865,
		"nome" : "Anta Gorda",
		"codigo_ibge" : 4300703,
		"sigla" : "RS"
	},
	{
		"id" : 298,
		"nome" : "Antas",
		"codigo_ibge" : 2901601,
		"sigla" : "BA"
	},
	{
		"id" : 2799,
		"nome" : "Antonina",
		"codigo_ibge" : 4101200,
		"sigla" : "PR"
	},
	{
		"id" : 707,
		"nome" : "Antonina do Norte",
		"codigo_ibge" : 2300804,
		"sigla" : "CE"
	},
	{
		"id" : 3379,
		"nome" : "Antônio Almeida",
		"codigo_ibge" : 2200806,
		"sigla" : "PI"
	},
	{
		"id" : 299,
		"nome" : "Antônio Cardoso",
		"codigo_ibge" : 2901700,
		"sigla" : "BA"
	},
	{
		"id" : 1596,
		"nome" : "Antônio Carlos",
		"codigo_ibge" : 3102902,
		"sigla" : "MG"
	},
	{
		"id" : 4427,
		"nome" : "Antônio Carlos",
		"codigo_ibge" : 4201208,
		"sigla" : "SC"
	},
	{
		"id" : 1597,
		"nome" : "Antônio Dias",
		"codigo_ibge" : 3103009,
		"sigla" : "MG"
	},
	{
		"id" : 300,
		"nome" : "Antônio Gonçalves",
		"codigo_ibge" : 2901809,
		"sigla" : "BA"
	},
	{
		"id" : 1493,
		"nome" : "Antônio João",
		"codigo_ibge" : 5000906,
		"sigla" : "MS"
	},
	{
		"id" : 3691,
		"nome" : "Antônio Martins",
		"codigo_ibge" : 2400901,
		"sigla" : "RN"
	},
	{
		"id" : 2800,
		"nome" : "Antônio Olinto",
		"codigo_ibge" : 4101309,
		"sigla" : "PR"
	},
	{
		"id" : 3866,
		"nome" : "Antônio Prado",
		"codigo_ibge" : 4300802,
		"sigla" : "RS"
	},
	{
		"id" : 1598,
		"nome" : "Antônio Prado de Minas",
		"codigo_ibge" : 3103108,
		"sigla" : "MG"
	},
	{
		"id" : 4733,
		"nome" : "Aparecida",
		"codigo_ibge" : 3502507,
		"sigla" : "SP"
	},
	{
		"id" : 2570,
		"nome" : "Aparecida",
		"codigo_ibge" : 2500775,
		"sigla" : "PB"
	},
	{
		"id" : 4734,
		"nome" : "Aparecida d Oeste",
		"codigo_ibge" : 3502606,
		"sigla" : "SP"
	},
	{
		"id" : 901,
		"nome" : "Aparecida de Goiânia",
		"codigo_ibge" : 5201405,
		"sigla" : "GO"
	},
	{
		"id" : 902,
		"nome" : "Aparecida do Rio Doce",
		"codigo_ibge" : 5201454,
		"sigla" : "GO"
	},
	{
		"id" : 5433,
		"nome" : "Aparecida do Rio Negro",
		"codigo_ibge" : 1701101,
		"sigla" : "TO"
	},
	{
		"id" : 1494,
		"nome" : "Aparecida do Taboado",
		"codigo_ibge" : 5001003,
		"sigla" : "MS"
	},
	{
		"id" : 3592,
		"nome" : "Aperibé",
		"codigo_ibge" : 3300159,
		"sigla" : "RJ"
	},
	{
		"id" : 8,
		"nome" : "Apiacá",
		"codigo_ibge" : 3200508,
		"sigla" : "ES"
	},
	{
		"id" : 1354,
		"nome" : "Apiacás",
		"codigo_ibge" : 5100805,
		"sigla" : "MT"
	},
	{
		"id" : 4735,
		"nome" : "Apiaí",
		"codigo_ibge" : 3502705,
		"sigla" : "SP"
	},
	{
		"id" : 1142,
		"nome" : "Apicum Açu",
		"codigo_ibge" : 2100832,
		"sigla" : "MA"
	},
	{
		"id" : 4428,
		"nome" : "Apiúna",
		"codigo_ibge" : 4201257,
		"sigla" : "SC"
	},
	{
		"id" : 3692,
		"nome" : "Apodi",
		"codigo_ibge" : 2401008,
		"sigla" : "RN"
	},
	{
		"id" : 301,
		"nome" : "Aporá",
		"codigo_ibge" : 2901908,
		"sigla" : "BA"
	},
	{
		"id" : 903,
		"nome" : "Aporé",
		"codigo_ibge" : 5201504,
		"sigla" : "GO"
	},
	{
		"id" : 302,
		"nome" : "Apuarema",
		"codigo_ibge" : 2901957,
		"sigla" : "BA"
	},
	{
		"id" : 2801,
		"nome" : "Apucarana",
		"codigo_ibge" : 4101408,
		"sigla" : "PR"
	},
	{
		"id" : 223,
		"nome" : "Apuí",
		"codigo_ibge" : 1300144,
		"sigla" : "AM"
	},
	{
		"id" : 708,
		"nome" : "Apuiarés",
		"codigo_ibge" : 2300903,
		"sigla" : "CE"
	},
	{
		"id" : 5352,
		"nome" : "Aquidabã",
		"codigo_ibge" : 2800209,
		"sigla" : "SE"
	},
	{
		"id" : 1495,
		"nome" : "Aquidauana",
		"codigo_ibge" : 5001102,
		"sigla" : "MS"
	},
	{
		"id" : 709,
		"nome" : "Aquiraz",
		"codigo_ibge" : 2301000,
		"sigla" : "CE"
	},
	{
		"id" : 4429,
		"nome" : "Arabutã",
		"codigo_ibge" : 4201273,
		"sigla" : "SC"
	},
	{
		"id" : 2571,
		"nome" : "Araçagi",
		"codigo_ibge" : 2500809,
		"sigla" : "PB"
	},
	{
		"id" : 1599,
		"nome" : "Araçaí",
		"codigo_ibge" : 3103207,
		"sigla" : "MG"
	},
	{
		"id" : 5353,
		"nome" : "Aracaju",
		"codigo_ibge" : 2800308,
		"sigla" : "SE"
	},
	{
		"id" : 4736,
		"nome" : "Araçariguama",
		"codigo_ibge" : 3502754,
		"sigla" : "SP"
	},
	{
		"id" : 303,
		"nome" : "Araçás",
		"codigo_ibge" : 2902054,
		"sigla" : "BA"
	},
	{
		"id" : 710,
		"nome" : "Aracati",
		"codigo_ibge" : 2301109,
		"sigla" : "CE"
	},
	{
		"id" : 304,
		"nome" : "Aracatu",
		"codigo_ibge" : 2902005,
		"sigla" : "BA"
	},
	{
		"id" : 4737,
		"nome" : "Araçatuba",
		"codigo_ibge" : 3502804,
		"sigla" : "SP"
	},
	{
		"id" : 305,
		"nome" : "Araci",
		"codigo_ibge" : 2902104,
		"sigla" : "BA"
	},
	{
		"id" : 1600,
		"nome" : "Aracitaba",
		"codigo_ibge" : 3103306,
		"sigla" : "MG"
	},
	{
		"id" : 711,
		"nome" : "Aracoiaba",
		"codigo_ibge" : 2301208,
		"sigla" : "CE"
	},
	{
		"id" : 3194,
		"nome" : "Araçoiaba",
		"codigo_ibge" : 2601052,
		"sigla" : "PE"
	},
	{
		"id" : 4738,
		"nome" : "Araçoiaba da Serra",
		"codigo_ibge" : 3502903,
		"sigla" : "SP"
	},
	{
		"id" : 9,
		"nome" : "Aracruz",
		"codigo_ibge" : 3200607,
		"sigla" : "ES"
	},
	{
		"id" : 904,
		"nome" : "Araçu",
		"codigo_ibge" : 5201603,
		"sigla" : "GO"
	},
	{
		"id" : 1601,
		"nome" : "Araçuaí",
		"codigo_ibge" : 3103405,
		"sigla" : "MG"
	},
	{
		"id" : 905,
		"nome" : "Aragarças",
		"codigo_ibge" : 5201702,
		"sigla" : "GO"
	},
	{
		"id" : 906,
		"nome" : "Aragoiânia",
		"codigo_ibge" : 5201801,
		"sigla" : "GO"
	},
	{
		"id" : 5434,
		"nome" : "Aragominas",
		"codigo_ibge" : 1701309,
		"sigla" : "TO"
	},
	{
		"id" : 5435,
		"nome" : "Araguacema",
		"codigo_ibge" : 1701903,
		"sigla" : "TO"
	},
	{
		"id" : 5436,
		"nome" : "Araguaçu",
		"codigo_ibge" : 1702000,
		"sigla" : "TO"
	},
	{
		"id" : 1355,
		"nome" : "Araguaiana",
		"codigo_ibge" : 5101001,
		"sigla" : "MT"
	},
	{
		"id" : 5437,
		"nome" : "Araguaína",
		"codigo_ibge" : 1702109,
		"sigla" : "TO"
	},
	{
		"id" : 1356,
		"nome" : "Araguainha",
		"codigo_ibge" : 5101209,
		"sigla" : "MT"
	},
	{
		"id" : 1143,
		"nome" : "Araguanã",
		"codigo_ibge" : 2100873,
		"sigla" : "MA"
	},
	{
		"id" : 5438,
		"nome" : "Araguanã",
		"codigo_ibge" : 1702158,
		"sigla" : "TO"
	},
	{
		"id" : 907,
		"nome" : "Araguapaz",
		"codigo_ibge" : 5202155,
		"sigla" : "GO"
	},
	{
		"id" : 1602,
		"nome" : "Araguari",
		"codigo_ibge" : 3103504,
		"sigla" : "MG"
	},
	{
		"id" : 5439,
		"nome" : "Araguatins",
		"codigo_ibge" : 1702208,
		"sigla" : "TO"
	},
	{
		"id" : 1144,
		"nome" : "Araioses",
		"codigo_ibge" : 2100907,
		"sigla" : "MA"
	},
	{
		"id" : 1496,
		"nome" : "Aral Moreira",
		"codigo_ibge" : 5001243,
		"sigla" : "MS"
	},
	{
		"id" : 306,
		"nome" : "Aramari",
		"codigo_ibge" : 2902203,
		"sigla" : "BA"
	},
	{
		"id" : 3867,
		"nome" : "Arambaré",
		"codigo_ibge" : 4300851,
		"sigla" : "RS"
	},
	{
		"id" : 1145,
		"nome" : "Arame",
		"codigo_ibge" : 2100956,
		"sigla" : "MA"
	},
	{
		"id" : 4739,
		"nome" : "Aramina",
		"codigo_ibge" : 3503000,
		"sigla" : "SP"
	},
	{
		"id" : 4740,
		"nome" : "Arandu",
		"codigo_ibge" : 3503109,
		"sigla" : "SP"
	},
	{
		"id" : 1603,
		"nome" : "Arantina",
		"codigo_ibge" : 3103603,
		"sigla" : "MG"
	},
	{
		"id" : 4741,
		"nome" : "Arapeí",
		"codigo_ibge" : 3503158,
		"sigla" : "SP"
	},
	{
		"id" : 103,
		"nome" : "Arapiraca",
		"codigo_ibge" : 2700300,
		"sigla" : "AL"
	},
	{
		"id" : 5440,
		"nome" : "Arapoema",
		"codigo_ibge" : 1702307,
		"sigla" : "TO"
	},
	{
		"id" : 1604,
		"nome" : "Araponga",
		"codigo_ibge" : 3103702,
		"sigla" : "MG"
	},
	{
		"id" : 2802,
		"nome" : "Arapongas",
		"codigo_ibge" : 4101507,
		"sigla" : "PR"
	},
	{
		"id" : 1605,
		"nome" : "Araporã",
		"codigo_ibge" : 3103751,
		"sigla" : "MG"
	},
	{
		"id" : 2803,
		"nome" : "Arapoti",
		"codigo_ibge" : 4101606,
		"sigla" : "PR"
	},
	{
		"id" : 2804,
		"nome" : "Arapuã",
		"codigo_ibge" : 4101655,
		"sigla" : "PR"
	},
	{
		"id" : 1606,
		"nome" : "Arapuá",
		"codigo_ibge" : 3103801,
		"sigla" : "MG"
	},
	{
		"id" : 1357,
		"nome" : "Araputanga",
		"codigo_ibge" : 5101258,
		"sigla" : "MT"
	},
	{
		"id" : 4430,
		"nome" : "Araquari",
		"codigo_ibge" : 4201307,
		"sigla" : "SC"
	},
	{
		"id" : 2572,
		"nome" : "Arara",
		"codigo_ibge" : 2500908,
		"sigla" : "PB"
	},
	{
		"id" : 4431,
		"nome" : "Araranguá",
		"codigo_ibge" : 4201406,
		"sigla" : "SC"
	},
	{
		"id" : 4742,
		"nome" : "Araraquara",
		"codigo_ibge" : 3503208,
		"sigla" : "SP"
	},
	{
		"id" : 4743,
		"nome" : "Araras",
		"codigo_ibge" : 3503307,
		"sigla" : "SP"
	},
	{
		"id" : 712,
		"nome" : "Ararendá",
		"codigo_ibge" : 2301257,
		"sigla" : "CE"
	},
	{
		"id" : 1146,
		"nome" : "Arari",
		"codigo_ibge" : 2101004,
		"sigla" : "MA"
	},
	{
		"id" : 3868,
		"nome" : "Araricá",
		"codigo_ibge" : 4300877,
		"sigla" : "RS"
	},
	{
		"id" : 713,
		"nome" : "Araripe",
		"codigo_ibge" : 2301307,
		"sigla" : "CE"
	},
	{
		"id" : 3195,
		"nome" : "Araripina",
		"codigo_ibge" : 2601102,
		"sigla" : "PE"
	},
	{
		"id" : 3593,
		"nome" : "Araruama",
		"codigo_ibge" : 3300209,
		"sigla" : "RJ"
	},
	{
		"id" : 2573,
		"nome" : "Araruna",
		"codigo_ibge" : 2501005,
		"sigla" : "PB"
	},
	{
		"id" : 2805,
		"nome" : "Araruna",
		"codigo_ibge" : 4101705,
		"sigla" : "PR"
	},
	{
		"id" : 307,
		"nome" : "Arataca",
		"codigo_ibge" : 2902252,
		"sigla" : "BA"
	},
	{
		"id" : 3869,
		"nome" : "Aratiba",
		"codigo_ibge" : 4300901,
		"sigla" : "RS"
	},
	{
		"id" : 714,
		"nome" : "Aratuba",
		"codigo_ibge" : 2301406,
		"sigla" : "CE"
	},
	{
		"id" : 308,
		"nome" : "Aratuípe",
		"codigo_ibge" : 2902302,
		"sigla" : "BA"
	},
	{
		"id" : 5354,
		"nome" : "Arauá",
		"codigo_ibge" : 2800407,
		"sigla" : "SE"
	},
	{
		"id" : 2806,
		"nome" : "Araucária",
		"codigo_ibge" : 4101804,
		"sigla" : "PR"
	},
	{
		"id" : 1607,
		"nome" : "Araújos",
		"codigo_ibge" : 3103900,
		"sigla" : "MG"
	},
	{
		"id" : 1608,
		"nome" : "Araxá",
		"codigo_ibge" : 3104007,
		"sigla" : "MG"
	},
	{
		"id" : 1609,
		"nome" : "Arceburgo",
		"codigo_ibge" : 3104106,
		"sigla" : "MG"
	},
	{
		"id" : 4744,
		"nome" : "Arco Íris",
		"codigo_ibge" : 3503356,
		"sigla" : "SP"
	},
	{
		"id" : 1610,
		"nome" : "Arcos",
		"codigo_ibge" : 3104205,
		"sigla" : "MG"
	},
	{
		"id" : 3196,
		"nome" : "Arcoverde",
		"codigo_ibge" : 2601201,
		"sigla" : "PE"
	},
	{
		"id" : 1611,
		"nome" : "Areado",
		"codigo_ibge" : 3104304,
		"sigla" : "MG"
	},
	{
		"id" : 3594,
		"nome" : "Areal",
		"codigo_ibge" : 3300225,
		"sigla" : "RJ"
	},
	{
		"id" : 4745,
		"nome" : "Arealva",
		"codigo_ibge" : 3503406,
		"sigla" : "SP"
	},
	{
		"id" : 2574,
		"nome" : "Areia",
		"codigo_ibge" : 2501104,
		"sigla" : "PB"
	},
	{
		"id" : 3693,
		"nome" : "Areia Branca",
		"codigo_ibge" : 2401107,
		"sigla" : "RN"
	},
	{
		"id" : 5355,
		"nome" : "Areia Branca",
		"codigo_ibge" : 2800506,
		"sigla" : "SE"
	},
	{
		"id" : 2575,
		"nome" : "Areia de Baraúnas",
		"codigo_ibge" : 2501153,
		"sigla" : "PB"
	},
	{
		"id" : 2576,
		"nome" : "Areial",
		"codigo_ibge" : 2501203,
		"sigla" : "PB"
	},
	{
		"id" : 4746,
		"nome" : "Areias",
		"codigo_ibge" : 3503505,
		"sigla" : "SP"
	},
	{
		"id" : 4747,
		"nome" : "Areiópolis",
		"codigo_ibge" : 3503604,
		"sigla" : "SP"
	},
	{
		"id" : 1358,
		"nome" : "Arenápolis",
		"codigo_ibge" : 5101308,
		"sigla" : "MT"
	},
	{
		"id" : 908,
		"nome" : "Arenópolis",
		"codigo_ibge" : 5202353,
		"sigla" : "GO"
	},
	{
		"id" : 3694,
		"nome" : "Arês",
		"codigo_ibge" : 2401206,
		"sigla" : "RN"
	},
	{
		"id" : 1612,
		"nome" : "Argirita",
		"codigo_ibge" : 3104403,
		"sigla" : "MG"
	},
	{
		"id" : 1613,
		"nome" : "Aricanduva",
		"codigo_ibge" : 3104452,
		"sigla" : "MG"
	},
	{
		"id" : 1614,
		"nome" : "Arinos",
		"codigo_ibge" : 3104502,
		"sigla" : "MG"
	},
	{
		"id" : 1359,
		"nome" : "Aripuanã",
		"codigo_ibge" : 5101407,
		"sigla" : "MT"
	},
	{
		"id" : 4350,
		"nome" : "Ariquemes",
		"codigo_ibge" : 1100023,
		"sigla" : "RO"
	},
	{
		"id" : 4748,
		"nome" : "Ariranha",
		"codigo_ibge" : 3503703,
		"sigla" : "SP"
	},
	{
		"id" : 2807,
		"nome" : "Ariranha do Ivaí",
		"codigo_ibge" : 4101853,
		"sigla" : "PR"
	},
	{
		"id" : 3595,
		"nome" : "Armação dos Búzios",
		"codigo_ibge" : 3300233,
		"sigla" : "RJ"
	},
	{
		"id" : 4432,
		"nome" : "Armazém",
		"codigo_ibge" : 4201505,
		"sigla" : "SC"
	},
	{
		"id" : 715,
		"nome" : "Arneiroz",
		"codigo_ibge" : 2301505,
		"sigla" : "CE"
	},
	{
		"id" : 3380,
		"nome" : "Aroazes",
		"codigo_ibge" : 2200905,
		"sigla" : "PI"
	},
	{
		"id" : 2577,
		"nome" : "Aroeiras",
		"codigo_ibge" : 2501302,
		"sigla" : "PB"
	},
	{
		"id" : 3381,
		"nome" : "Aroeiras do Itaim",
		"codigo_ibge" : 2200954,
		"sigla" : "PI"
	},
	{
		"id" : 3382,
		"nome" : "Arraial",
		"codigo_ibge" : 2201002,
		"sigla" : "PI"
	},
	{
		"id" : 3596,
		"nome" : "Arraial do Cabo",
		"codigo_ibge" : 3300258,
		"sigla" : "RJ"
	},
	{
		"id" : 5441,
		"nome" : "Arraias",
		"codigo_ibge" : 1702406,
		"sigla" : "TO"
	},
	{
		"id" : 3870,
		"nome" : "Arroio do Meio",
		"codigo_ibge" : 4301008,
		"sigla" : "RS"
	},
	{
		"id" : 3871,
		"nome" : "Arroio do Padre",
		"codigo_ibge" : 4301073,
		"sigla" : "RS"
	},
	{
		"id" : 3872,
		"nome" : "Arroio do Sal",
		"codigo_ibge" : 4301057,
		"sigla" : "RS"
	},
	{
		"id" : 3873,
		"nome" : "Arroio do Tigre",
		"codigo_ibge" : 4301206,
		"sigla" : "RS"
	},
	{
		"id" : 3874,
		"nome" : "Arroio dos Ratos",
		"codigo_ibge" : 4301107,
		"sigla" : "RS"
	},
	{
		"id" : 3875,
		"nome" : "Arroio Grande",
		"codigo_ibge" : 4301305,
		"sigla" : "RS"
	},
	{
		"id" : 4433,
		"nome" : "Arroio Trinta",
		"codigo_ibge" : 4201604,
		"sigla" : "SC"
	},
	{
		"id" : 4749,
		"nome" : "Artur Nogueira",
		"codigo_ibge" : 3503802,
		"sigla" : "SP"
	},
	{
		"id" : 909,
		"nome" : "Aruanã",
		"codigo_ibge" : 5202502,
		"sigla" : "GO"
	},
	{
		"id" : 4750,
		"nome" : "Arujá",
		"codigo_ibge" : 3503901,
		"sigla" : "SP"
	},
	{
		"id" : 4434,
		"nome" : "Arvoredo",
		"codigo_ibge" : 4201653,
		"sigla" : "SC"
	},
	{
		"id" : 3876,
		"nome" : "Arvorezinha",
		"codigo_ibge" : 4301404,
		"sigla" : "RS"
	},
	{
		"id" : 4435,
		"nome" : "Ascurra",
		"codigo_ibge" : 4201703,
		"sigla" : "SC"
	},
	{
		"id" : 4751,
		"nome" : "Aspásia",
		"codigo_ibge" : 3503950,
		"sigla" : "SP"
	},
	{
		"id" : 2808,
		"nome" : "Assaí",
		"codigo_ibge" : 4101903,
		"sigla" : "PR"
	},
	{
		"id" : 716,
		"nome" : "Assaré",
		"codigo_ibge" : 2301604,
		"sigla" : "CE"
	},
	{
		"id" : 4752,
		"nome" : "Assis",
		"codigo_ibge" : 3504008,
		"sigla" : "SP"
	},
	{
		"id" : 80,
		"nome" : "Assis Brasil",
		"codigo_ibge" : 1200054,
		"sigla" : "AC"
	},
	{
		"id" : 2809,
		"nome" : "Assis Chateaubriand",
		"codigo_ibge" : 4102000,
		"sigla" : "PR"
	},
	{
		"id" : 2578,
		"nome" : "Assunção",
		"codigo_ibge" : 2501351,
		"sigla" : "PB"
	},
	{
		"id" : 3383,
		"nome" : "Assunção do Piauí",
		"codigo_ibge" : 2201051,
		"sigla" : "PI"
	},
	{
		"id" : 1615,
		"nome" : "Astolfo Dutra",
		"codigo_ibge" : 3104601,
		"sigla" : "MG"
	},
	{
		"id" : 2810,
		"nome" : "Astorga",
		"codigo_ibge" : 4102109,
		"sigla" : "PR"
	},
	{
		"id" : 2811,
		"nome" : "Atalaia",
		"codigo_ibge" : 4102208,
		"sigla" : "PR"
	},
	{
		"id" : 104,
		"nome" : "Atalaia",
		"codigo_ibge" : 2700409,
		"sigla" : "AL"
	},
	{
		"id" : 224,
		"nome" : "Atalaia do Norte",
		"codigo_ibge" : 1300201,
		"sigla" : "AM"
	},
	{
		"id" : 4436,
		"nome" : "Atalanta",
		"codigo_ibge" : 4201802,
		"sigla" : "SC"
	},
	{
		"id" : 1616,
		"nome" : "Ataléia",
		"codigo_ibge" : 3104700,
		"sigla" : "MG"
	},
	{
		"id" : 4753,
		"nome" : "Atibaia",
		"codigo_ibge" : 3504107,
		"sigla" : "SP"
	},
	{
		"id" : 10,
		"nome" : "Atílio Vivacqua",
		"codigo_ibge" : 3200706,
		"sigla" : "ES"
	},
	{
		"id" : 5442,
		"nome" : "Augustinópolis",
		"codigo_ibge" : 1702554,
		"sigla" : "TO"
	},
	{
		"id" : 2429,
		"nome" : "Augusto Corrêa",
		"codigo_ibge" : 1500909,
		"sigla" : "PA"
	},
	{
		"id" : 1617,
		"nome" : "Augusto de Lima",
		"codigo_ibge" : 3104809,
		"sigla" : "MG"
	},
	{
		"id" : 3877,
		"nome" : "Augusto Pestana",
		"codigo_ibge" : 4301503,
		"sigla" : "RS"
	},
	{
		"id" : 3878,
		"nome" : "Áurea",
		"codigo_ibge" : 4301552,
		"sigla" : "RS"
	},
	{
		"id" : 309,
		"nome" : "Aurelino Leal",
		"codigo_ibge" : 2902401,
		"sigla" : "BA"
	},
	{
		"id" : 4754,
		"nome" : "Auriflama",
		"codigo_ibge" : 3504206,
		"sigla" : "SP"
	},
	{
		"id" : 910,
		"nome" : "Aurilândia",
		"codigo_ibge" : 5202601,
		"sigla" : "GO"
	},
	{
		"id" : 717,
		"nome" : "Aurora",
		"codigo_ibge" : 2301703,
		"sigla" : "CE"
	},
	{
		"id" : 4437,
		"nome" : "Aurora",
		"codigo_ibge" : 4201901,
		"sigla" : "SC"
	},
	{
		"id" : 2430,
		"nome" : "Aurora do Pará",
		"codigo_ibge" : 1500958,
		"sigla" : "PA"
	},
	{
		"id" : 5443,
		"nome" : "Aurora do Tocantins",
		"codigo_ibge" : 1702703,
		"sigla" : "TO"
	},
	{
		"id" : 225,
		"nome" : "Autazes",
		"codigo_ibge" : 1300300,
		"sigla" : "AM"
	},
	{
		"id" : 4755,
		"nome" : "Avaí",
		"codigo_ibge" : 3504305,
		"sigla" : "SP"
	},
	{
		"id" : 4756,
		"nome" : "Avanhandava",
		"codigo_ibge" : 3504404,
		"sigla" : "SP"
	},
	{
		"id" : 4757,
		"nome" : "Avaré",
		"codigo_ibge" : 3504503,
		"sigla" : "SP"
	},
	{
		"id" : 2431,
		"nome" : "Aveiro",
		"codigo_ibge" : 1501006,
		"sigla" : "PA"
	},
	{
		"id" : 3384,
		"nome" : "Avelino Lopes",
		"codigo_ibge" : 2201101,
		"sigla" : "PI"
	},
	{
		"id" : 911,
		"nome" : "Avelinópolis",
		"codigo_ibge" : 5202809,
		"sigla" : "GO"
	},
	{
		"id" : 1147,
		"nome" : "Axixá",
		"codigo_ibge" : 2101103,
		"sigla" : "MA"
	},
	{
		"id" : 5444,
		"nome" : "Axixá do Tocantins",
		"codigo_ibge" : 1702901,
		"sigla" : "TO"
	},
	{
		"id" : 5445,
		"nome" : "Babaçulândia",
		"codigo_ibge" : 1703008,
		"sigla" : "TO"
	},
	{
		"id" : 1148,
		"nome" : "Bacabal",
		"codigo_ibge" : 2101202,
		"sigla" : "MA"
	},
	{
		"id" : 1149,
		"nome" : "Bacabeira",
		"codigo_ibge" : 2101251,
		"sigla" : "MA"
	},
	{
		"id" : 1150,
		"nome" : "Bacuri",
		"codigo_ibge" : 2101301,
		"sigla" : "MA"
	},
	{
		"id" : 1151,
		"nome" : "Bacurituba",
		"codigo_ibge" : 2101350,
		"sigla" : "MA"
	},
	{
		"id" : 4758,
		"nome" : "Bady Bassitt",
		"codigo_ibge" : 3504602,
		"sigla" : "SP"
	},
	{
		"id" : 1618,
		"nome" : "Baependi",
		"codigo_ibge" : 3104908,
		"sigla" : "MG"
	},
	{
		"id" : 3879,
		"nome" : "Bagé",
		"codigo_ibge" : 4301602,
		"sigla" : "RS"
	},
	{
		"id" : 2432,
		"nome" : "Bagre",
		"codigo_ibge" : 1501105,
		"sigla" : "PA"
	},
	{
		"id" : 2579,
		"nome" : "Baía da Traição",
		"codigo_ibge" : 2501401,
		"sigla" : "PB"
	},
	{
		"id" : 3696,
		"nome" : "Baía Formosa",
		"codigo_ibge" : 2401404,
		"sigla" : "RN"
	},
	{
		"id" : 310,
		"nome" : "Baianópolis",
		"codigo_ibge" : 2902500,
		"sigla" : "BA"
	},
	{
		"id" : 2433,
		"nome" : "Baião",
		"codigo_ibge" : 1501204,
		"sigla" : "PA"
	},
	{
		"id" : 311,
		"nome" : "Baixa Grande",
		"codigo_ibge" : 2902609,
		"sigla" : "BA"
	},
	{
		"id" : 3385,
		"nome" : "Baixa Grande do Ribeiro",
		"codigo_ibge" : 2201150,
		"sigla" : "PI"
	},
	{
		"id" : 718,
		"nome" : "Baixio",
		"codigo_ibge" : 2301802,
		"sigla" : "CE"
	},
	{
		"id" : 11,
		"nome" : "Baixo Guandu",
		"codigo_ibge" : 3200805,
		"sigla" : "ES"
	},
	{
		"id" : 4759,
		"nome" : "Balbinos",
		"codigo_ibge" : 3504701,
		"sigla" : "SP"
	},
	{
		"id" : 1619,
		"nome" : "Baldim",
		"codigo_ibge" : 3105004,
		"sigla" : "MG"
	},
	{
		"id" : 912,
		"nome" : "Baliza",
		"codigo_ibge" : 5203104,
		"sigla" : "GO"
	},
	{
		"id" : 4438,
		"nome" : "Balneário Arroio do Silva",
		"codigo_ibge" : 4201950,
		"sigla" : "SC"
	},
	{
		"id" : 4439,
		"nome" : "Balneário Barra do Sul",
		"codigo_ibge" : 4202057,
		"sigla" : "SC"
	},
	{
		"id" : 4440,
		"nome" : "Balneário Camboriú",
		"codigo_ibge" : 4202008,
		"sigla" : "SC"
	},
	{
		"id" : 4441,
		"nome" : "Balneário Gaivota",
		"codigo_ibge" : 4202073,
		"sigla" : "SC"
	},
	{
		"id" : 4606,
		"nome" : "Balneário Piçarras",
		"codigo_ibge" : 4212809,
		"sigla" : "SC"
	},
	{
		"id" : 3880,
		"nome" : "Balneário Pinhal",
		"codigo_ibge" : 4301636,
		"sigla" : "RS"
	},
	{
		"id" : 5568,
		"nome" : "Balneário Rincão",
		"codigo_ibge" : 4220000,
		"sigla" : "SC"
	},
	{
		"id" : 2812,
		"nome" : "Balsa Nova",
		"codigo_ibge" : 4102307,
		"sigla" : "PR"
	},
	{
		"id" : 4760,
		"nome" : "Bálsamo",
		"codigo_ibge" : 3504800,
		"sigla" : "SP"
	},
	{
		"id" : 1152,
		"nome" : "Balsas",
		"codigo_ibge" : 2101400,
		"sigla" : "MA"
	},
	{
		"id" : 1620,
		"nome" : "Bambuí",
		"codigo_ibge" : 3105103,
		"sigla" : "MG"
	},
	{
		"id" : 719,
		"nome" : "Banabuiú",
		"codigo_ibge" : 2301851,
		"sigla" : "CE"
	},
	{
		"id" : 4761,
		"nome" : "Bananal",
		"codigo_ibge" : 3504909,
		"sigla" : "SP"
	},
	{
		"id" : 2580,
		"nome" : "Bananeiras",
		"codigo_ibge" : 2501500,
		"sigla" : "PB"
	},
	{
		"id" : 1621,
		"nome" : "Bandeira",
		"codigo_ibge" : 3105202,
		"sigla" : "MG"
	},
	{
		"id" : 1622,
		"nome" : "Bandeira do Sul",
		"codigo_ibge" : 3105301,
		"sigla" : "MG"
	},
	{
		"id" : 4442,
		"nome" : "Bandeirante",
		"codigo_ibge" : 4202081,
		"sigla" : "SC"
	},
	{
		"id" : 1497,
		"nome" : "Bandeirantes",
		"codigo_ibge" : 5001508,
		"sigla" : "MS"
	},
	{
		"id" : 2813,
		"nome" : "Bandeirantes",
		"codigo_ibge" : 4102406,
		"sigla" : "PR"
	},
	{
		"id" : 5446,
		"nome" : "Bandeirantes do Tocantins",
		"codigo_ibge" : 1703057,
		"sigla" : "TO"
	},
	{
		"id" : 2434,
		"nome" : "Bannach",
		"codigo_ibge" : 1501253,
		"sigla" : "PA"
	},
	{
		"id" : 312,
		"nome" : "Banzaê",
		"codigo_ibge" : 2902658,
		"sigla" : "BA"
	},
	{
		"id" : 3881,
		"nome" : "Barão",
		"codigo_ibge" : 4301651,
		"sigla" : "RS"
	},
	{
		"id" : 4762,
		"nome" : "Barão de Antonina",
		"codigo_ibge" : 3505005,
		"sigla" : "SP"
	},
	{
		"id" : 1623,
		"nome" : "Barão de Cocais",
		"codigo_ibge" : 3105400,
		"sigla" : "MG"
	},
	{
		"id" : 3882,
		"nome" : "Barão de Cotegipe",
		"codigo_ibge" : 4301701,
		"sigla" : "RS"
	},
	{
		"id" : 1153,
		"nome" : "Barão de Grajaú",
		"codigo_ibge" : 2101509,
		"sigla" : "MA"
	},
	{
		"id" : 1360,
		"nome" : "Barão de Melgaço",
		"codigo_ibge" : 5101605,
		"sigla" : "MT"
	},
	{
		"id" : 1624,
		"nome" : "Barão de Monte Alto",
		"codigo_ibge" : 3105509,
		"sigla" : "MG"
	},
	{
		"id" : 3883,
		"nome" : "Barão do Triunfo",
		"codigo_ibge" : 4301750,
		"sigla" : "RS"
	},
	{
		"id" : 2581,
		"nome" : "Baraúna",
		"codigo_ibge" : 2501534,
		"sigla" : "PB"
	},
	{
		"id" : 3697,
		"nome" : "Baraúna",
		"codigo_ibge" : 2401453,
		"sigla" : "RN"
	},
	{
		"id" : 1625,
		"nome" : "Barbacena",
		"codigo_ibge" : 3105608,
		"sigla" : "MG"
	},
	{
		"id" : 720,
		"nome" : "Barbalha",
		"codigo_ibge" : 2301901,
		"sigla" : "CE"
	},
	{
		"id" : 4763,
		"nome" : "Barbosa",
		"codigo_ibge" : 3505104,
		"sigla" : "SP"
	},
	{
		"id" : 2814,
		"nome" : "Barbosa Ferraz",
		"codigo_ibge" : 4102505,
		"sigla" : "PR"
	},
	{
		"id" : 2435,
		"nome" : "Barcarena",
		"codigo_ibge" : 1501303,
		"sigla" : "PA"
	},
	{
		"id" : 3698,
		"nome" : "Barcelona",
		"codigo_ibge" : 2401503,
		"sigla" : "RN"
	},
	{
		"id" : 226,
		"nome" : "Barcelos",
		"codigo_ibge" : 1300409,
		"sigla" : "AM"
	},
	{
		"id" : 4764,
		"nome" : "Bariri",
		"codigo_ibge" : 3505203,
		"sigla" : "SP"
	},
	{
		"id" : 313,
		"nome" : "Barra",
		"codigo_ibge" : 2902708,
		"sigla" : "BA"
	},
	{
		"id" : 4443,
		"nome" : "Barra Bonita",
		"codigo_ibge" : 4202099,
		"sigla" : "SC"
	},
	{
		"id" : 4765,
		"nome" : "Barra Bonita",
		"codigo_ibge" : 3505302,
		"sigla" : "SP"
	},
	{
		"id" : 3386,
		"nome" : "Barra d Alcântara",
		"codigo_ibge" : 2201176,
		"sigla" : "PI"
	},
	{
		"id" : 314,
		"nome" : "Barra da Estiva",
		"codigo_ibge" : 2902807,
		"sigla" : "BA"
	},
	{
		"id" : 3197,
		"nome" : "Barra de Guabiraba",
		"codigo_ibge" : 2601300,
		"sigla" : "PE"
	},
	{
		"id" : 2582,
		"nome" : "Barra de Santa Rosa",
		"codigo_ibge" : 2501609,
		"sigla" : "PB"
	},
	{
		"id" : 2583,
		"nome" : "Barra de Santana",
		"codigo_ibge" : 2501575,
		"sigla" : "PB"
	},
	{
		"id" : 105,
		"nome" : "Barra de Santo Antônio",
		"codigo_ibge" : 2700508,
		"sigla" : "AL"
	},
	{
		"id" : 12,
		"nome" : "Barra de São Francisco",
		"codigo_ibge" : 3200904,
		"sigla" : "ES"
	},
	{
		"id" : 106,
		"nome" : "Barra de São Miguel",
		"codigo_ibge" : 2700607,
		"sigla" : "AL"
	},
	{
		"id" : 2584,
		"nome" : "Barra de São Miguel",
		"codigo_ibge" : 2501708,
		"sigla" : "PB"
	},
	{
		"id" : 1361,
		"nome" : "Barra do Bugres",
		"codigo_ibge" : 5101704,
		"sigla" : "MT"
	},
	{
		"id" : 4766,
		"nome" : "Barra do Chapéu",
		"codigo_ibge" : 3505351,
		"sigla" : "SP"
	},
	{
		"id" : 315,
		"nome" : "Barra do Choça",
		"codigo_ibge" : 2902906,
		"sigla" : "BA"
	},
	{
		"id" : 1154,
		"nome" : "Barra do Corda",
		"codigo_ibge" : 2101608,
		"sigla" : "MA"
	},
	{
		"id" : 1362,
		"nome" : "Barra do Garças",
		"codigo_ibge" : 5101803,
		"sigla" : "MT"
	},
	{
		"id" : 3884,
		"nome" : "Barra do Guarita",
		"codigo_ibge" : 4301859,
		"sigla" : "RS"
	},
	{
		"id" : 2815,
		"nome" : "Barra do Jacaré",
		"codigo_ibge" : 4102703,
		"sigla" : "PR"
	},
	{
		"id" : 316,
		"nome" : "Barra do Mendes",
		"codigo_ibge" : 2903003,
		"sigla" : "BA"
	},
	{
		"id" : 5447,
		"nome" : "Barra do Ouro",
		"codigo_ibge" : 1703073,
		"sigla" : "TO"
	},
	{
		"id" : 3597,
		"nome" : "Barra do Piraí",
		"codigo_ibge" : 3300308,
		"sigla" : "RJ"
	},
	{
		"id" : 3885,
		"nome" : "Barra do Quaraí",
		"codigo_ibge" : 4301875,
		"sigla" : "RS"
	},
	{
		"id" : 3886,
		"nome" : "Barra do Ribeiro",
		"codigo_ibge" : 4301909,
		"sigla" : "RS"
	},
	{
		"id" : 3887,
		"nome" : "Barra do Rio Azul",
		"codigo_ibge" : 4301925,
		"sigla" : "RS"
	},
	{
		"id" : 317,
		"nome" : "Barra do Rocha",
		"codigo_ibge" : 2903102,
		"sigla" : "BA"
	},
	{
		"id" : 4767,
		"nome" : "Barra do Turvo",
		"codigo_ibge" : 3505401,
		"sigla" : "SP"
	},
	{
		"id" : 5356,
		"nome" : "Barra dos Coqueiros",
		"codigo_ibge" : 2800605,
		"sigla" : "SE"
	},
	{
		"id" : 3888,
		"nome" : "Barra Funda",
		"codigo_ibge" : 4301958,
		"sigla" : "RS"
	},
	{
		"id" : 1626,
		"nome" : "Barra Longa",
		"codigo_ibge" : 3105707,
		"sigla" : "MG"
	},
	{
		"id" : 3598,
		"nome" : "Barra Mansa",
		"codigo_ibge" : 3300407,
		"sigla" : "RJ"
	},
	{
		"id" : 4444,
		"nome" : "Barra Velha",
		"codigo_ibge" : 4202107,
		"sigla" : "SC"
	},
	{
		"id" : 3889,
		"nome" : "Barracão",
		"codigo_ibge" : 4301800,
		"sigla" : "RS"
	},
	{
		"id" : 2816,
		"nome" : "Barracão",
		"codigo_ibge" : 4102604,
		"sigla" : "PR"
	},
	{
		"id" : 3387,
		"nome" : "Barras",
		"codigo_ibge" : 2201200,
		"sigla" : "PI"
	},
	{
		"id" : 721,
		"nome" : "Barreira",
		"codigo_ibge" : 2301950,
		"sigla" : "CE"
	},
	{
		"id" : 318,
		"nome" : "Barreiras",
		"codigo_ibge" : 2903201,
		"sigla" : "BA"
	},
	{
		"id" : 3388,
		"nome" : "Barreiras do Piauí",
		"codigo_ibge" : 2201309,
		"sigla" : "PI"
	},
	{
		"id" : 227,
		"nome" : "Barreirinha",
		"codigo_ibge" : 1300508,
		"sigla" : "AM"
	},
	{
		"id" : 1155,
		"nome" : "Barreirinhas",
		"codigo_ibge" : 2101707,
		"sigla" : "MA"
	},
	{
		"id" : 3198,
		"nome" : "Barreiros",
		"codigo_ibge" : 2601409,
		"sigla" : "PE"
	},
	{
		"id" : 4768,
		"nome" : "Barretos",
		"codigo_ibge" : 3505500,
		"sigla" : "SP"
	},
	{
		"id" : 4769,
		"nome" : "Barrinha",
		"codigo_ibge" : 3505609,
		"sigla" : "SP"
	},
	{
		"id" : 722,
		"nome" : "Barro",
		"codigo_ibge" : 2302008,
		"sigla" : "CE"
	},
	{
		"id" : 319,
		"nome" : "Barro Alto",
		"codigo_ibge" : 2903235,
		"sigla" : "BA"
	},
	{
		"id" : 913,
		"nome" : "Barro Alto",
		"codigo_ibge" : 5203203,
		"sigla" : "GO"
	},
	{
		"id" : 3389,
		"nome" : "Barro Duro",
		"codigo_ibge" : 2201408,
		"sigla" : "PI"
	},
	{
		"id" : 320,
		"nome" : "Barro Preto",
		"codigo_ibge" : 2903300,
		"sigla" : "BA"
	},
	{
		"id" : 321,
		"nome" : "Barrocas",
		"codigo_ibge" : 2903276,
		"sigla" : "BA"
	},
	{
		"id" : 5448,
		"nome" : "Barrolândia",
		"codigo_ibge" : 1703107,
		"sigla" : "TO"
	},
	{
		"id" : 723,
		"nome" : "Barroquinha",
		"codigo_ibge" : 2302057,
		"sigla" : "CE"
	},
	{
		"id" : 3890,
		"nome" : "Barros Cassal",
		"codigo_ibge" : 4302006,
		"sigla" : "RS"
	},
	{
		"id" : 1627,
		"nome" : "Barroso",
		"codigo_ibge" : 3105905,
		"sigla" : "MG"
	},
	{
		"id" : 4770,
		"nome" : "Barueri",
		"codigo_ibge" : 3505708,
		"sigla" : "SP"
	},
	{
		"id" : 4771,
		"nome" : "Bastos",
		"codigo_ibge" : 3505807,
		"sigla" : "SP"
	},
	{
		"id" : 1498,
		"nome" : "Bataguassu",
		"codigo_ibge" : 5001904,
		"sigla" : "MS"
	},
	{
		"id" : 3390,
		"nome" : "Batalha",
		"codigo_ibge" : 2201507,
		"sigla" : "PI"
	},
	{
		"id" : 107,
		"nome" : "Batalha",
		"codigo_ibge" : 2700706,
		"sigla" : "AL"
	},
	{
		"id" : 4772,
		"nome" : "Batatais",
		"codigo_ibge" : 3505906,
		"sigla" : "SP"
	},
	{
		"id" : 1499,
		"nome" : "Batayporã",
		"codigo_ibge" : 5002001,
		"sigla" : "MS"
	},
	{
		"id" : 724,
		"nome" : "Baturité",
		"codigo_ibge" : 2302107,
		"sigla" : "CE"
	},
	{
		"id" : 4773,
		"nome" : "Bauru",
		"codigo_ibge" : 3506003,
		"sigla" : "SP"
	},
	{
		"id" : 2585,
		"nome" : "Bayeux",
		"codigo_ibge" : 2501807,
		"sigla" : "PB"
	},
	{
		"id" : 4774,
		"nome" : "Bebedouro",
		"codigo_ibge" : 3506102,
		"sigla" : "SP"
	},
	{
		"id" : 725,
		"nome" : "Beberibe",
		"codigo_ibge" : 2302206,
		"sigla" : "CE"
	},
	{
		"id" : 726,
		"nome" : "Bela Cruz",
		"codigo_ibge" : 2302305,
		"sigla" : "CE"
	},
	{
		"id" : 1500,
		"nome" : "Bela Vista",
		"codigo_ibge" : 5002100,
		"sigla" : "MS"
	},
	{
		"id" : 2817,
		"nome" : "Bela Vista da Caroba",
		"codigo_ibge" : 4102752,
		"sigla" : "PR"
	},
	{
		"id" : 914,
		"nome" : "Bela Vista de Goiás",
		"codigo_ibge" : 5203302,
		"sigla" : "GO"
	},
	{
		"id" : 1628,
		"nome" : "Bela Vista de Minas",
		"codigo_ibge" : 3106002,
		"sigla" : "MG"
	},
	{
		"id" : 1156,
		"nome" : "Bela Vista do Maranhão",
		"codigo_ibge" : 2101772,
		"sigla" : "MA"
	},
	{
		"id" : 2818,
		"nome" : "Bela Vista do Paraíso",
		"codigo_ibge" : 4102802,
		"sigla" : "PR"
	},
	{
		"id" : 3391,
		"nome" : "Bela Vista do Piauí",
		"codigo_ibge" : 2201556,
		"sigla" : "PI"
	},
	{
		"id" : 4445,
		"nome" : "Bela Vista do Toldo",
		"codigo_ibge" : 4202131,
		"sigla" : "SC"
	},
	{
		"id" : 1157,
		"nome" : "Belágua",
		"codigo_ibge" : 2101731,
		"sigla" : "MA"
	},
	{
		"id" : 108,
		"nome" : "Belém",
		"codigo_ibge" : 2700805,
		"sigla" : "AL"
	},
	{
		"id" : 2436,
		"nome" : "Belém",
		"codigo_ibge" : 1501402,
		"sigla" : "PA"
	},
	{
		"id" : 2586,
		"nome" : "Belém",
		"codigo_ibge" : 2501906,
		"sigla" : "PB"
	},
	{
		"id" : 3199,
		"nome" : "Belém de Maria",
		"codigo_ibge" : 2601508,
		"sigla" : "PE"
	},
	{
		"id" : 2587,
		"nome" : "Belém do Brejo do Cruz",
		"codigo_ibge" : 2502003,
		"sigla" : "PB"
	},
	{
		"id" : 3392,
		"nome" : "Belém do Piauí",
		"codigo_ibge" : 2201572,
		"sigla" : "PI"
	},
	{
		"id" : 3200,
		"nome" : "Belém do São Francisco",
		"codigo_ibge" : 2601607,
		"sigla" : "PE"
	},
	{
		"id" : 3599,
		"nome" : "Belford Roxo",
		"codigo_ibge" : 3300456,
		"sigla" : "RJ"
	},
	{
		"id" : 1629,
		"nome" : "Belmiro Braga",
		"codigo_ibge" : 3106101,
		"sigla" : "MG"
	},
	{
		"id" : 322,
		"nome" : "Belmonte",
		"codigo_ibge" : 2903409,
		"sigla" : "BA"
	},
	{
		"id" : 4446,
		"nome" : "Belmonte",
		"codigo_ibge" : 4202156,
		"sigla" : "SC"
	},
	{
		"id" : 323,
		"nome" : "Belo Campo",
		"codigo_ibge" : 2903508,
		"sigla" : "BA"
	},
	{
		"id" : 1630,
		"nome" : "Belo Horizonte",
		"codigo_ibge" : 3106200,
		"sigla" : "MG"
	},
	{
		"id" : 3201,
		"nome" : "Belo Jardim",
		"codigo_ibge" : 2601706,
		"sigla" : "PE"
	},
	{
		"id" : 109,
		"nome" : "Belo Monte",
		"codigo_ibge" : 2700904,
		"sigla" : "AL"
	},
	{
		"id" : 1631,
		"nome" : "Belo Oriente",
		"codigo_ibge" : 3106309,
		"sigla" : "MG"
	},
	{
		"id" : 1632,
		"nome" : "Belo Vale",
		"codigo_ibge" : 3106408,
		"sigla" : "MG"
	},
	{
		"id" : 2437,
		"nome" : "Belterra",
		"codigo_ibge" : 1501451,
		"sigla" : "PA"
	},
	{
		"id" : 3393,
		"nome" : "Beneditinos",
		"codigo_ibge" : 2201606,
		"sigla" : "PI"
	},
	{
		"id" : 1158,
		"nome" : "Benedito Leite",
		"codigo_ibge" : 2101806,
		"sigla" : "MA"
	},
	{
		"id" : 4447,
		"nome" : "Benedito Novo",
		"codigo_ibge" : 4202206,
		"sigla" : "SC"
	},
	{
		"id" : 2438,
		"nome" : "Benevides",
		"codigo_ibge" : 1501501,
		"sigla" : "PA"
	},
	{
		"id" : 228,
		"nome" : "Benjamin Constant",
		"codigo_ibge" : 1300607,
		"sigla" : "AM"
	},
	{
		"id" : 3891,
		"nome" : "Benjamin Constant do Sul",
		"codigo_ibge" : 4302055,
		"sigla" : "RS"
	},
	{
		"id" : 4775,
		"nome" : "Bento de Abreu",
		"codigo_ibge" : 3506201,
		"sigla" : "SP"
	},
	{
		"id" : 3699,
		"nome" : "Bento Fernandes",
		"codigo_ibge" : 2401602,
		"sigla" : "RN"
	},
	{
		"id" : 3892,
		"nome" : "Bento Gonçalves",
		"codigo_ibge" : 4302105,
		"sigla" : "RS"
	},
	{
		"id" : 1159,
		"nome" : "Bequimão",
		"codigo_ibge" : 2101905,
		"sigla" : "MA"
	},
	{
		"id" : 1633,
		"nome" : "Berilo",
		"codigo_ibge" : 3106507,
		"sigla" : "MG"
	},
	{
		"id" : 1634,
		"nome" : "Berizal",
		"codigo_ibge" : 3106655,
		"sigla" : "MG"
	},
	{
		"id" : 2588,
		"nome" : "Bernardino Batista",
		"codigo_ibge" : 2502052,
		"sigla" : "PB"
	},
	{
		"id" : 4776,
		"nome" : "Bernardino de Campos",
		"codigo_ibge" : 3506300,
		"sigla" : "SP"
	},
	{
		"id" : 1160,
		"nome" : "Bernardo do Mearim",
		"codigo_ibge" : 2101939,
		"sigla" : "MA"
	},
	{
		"id" : 5449,
		"nome" : "Bernardo Sayão",
		"codigo_ibge" : 1703206,
		"sigla" : "TO"
	},
	{
		"id" : 4777,
		"nome" : "Bertioga",
		"codigo_ibge" : 3506359,
		"sigla" : "SP"
	},
	{
		"id" : 3394,
		"nome" : "Bertolínia",
		"codigo_ibge" : 2201705,
		"sigla" : "PI"
	},
	{
		"id" : 1635,
		"nome" : "Bertópolis",
		"codigo_ibge" : 3106606,
		"sigla" : "MG"
	},
	{
		"id" : 229,
		"nome" : "Beruri",
		"codigo_ibge" : 1300631,
		"sigla" : "AM"
	},
	{
		"id" : 3202,
		"nome" : "Betânia",
		"codigo_ibge" : 2601805,
		"sigla" : "PE"
	},
	{
		"id" : 3395,
		"nome" : "Betânia do Piauí",
		"codigo_ibge" : 2201739,
		"sigla" : "PI"
	},
	{
		"id" : 1636,
		"nome" : "Betim",
		"codigo_ibge" : 3106705,
		"sigla" : "MG"
	},
	{
		"id" : 3203,
		"nome" : "Bezerros",
		"codigo_ibge" : 2601904,
		"sigla" : "PE"
	},
	{
		"id" : 1637,
		"nome" : "Bias Fortes",
		"codigo_ibge" : 3106804,
		"sigla" : "MG"
	},
	{
		"id" : 1638,
		"nome" : "Bicas",
		"codigo_ibge" : 3106903,
		"sigla" : "MG"
	},
	{
		"id" : 4448,
		"nome" : "Biguaçu",
		"codigo_ibge" : 4202305,
		"sigla" : "SC"
	},
	{
		"id" : 4778,
		"nome" : "Bilac",
		"codigo_ibge" : 3506409,
		"sigla" : "SP"
	},
	{
		"id" : 1639,
		"nome" : "Biquinhas",
		"codigo_ibge" : 3107000,
		"sigla" : "MG"
	},
	{
		"id" : 4779,
		"nome" : "Birigui",
		"codigo_ibge" : 3506508,
		"sigla" : "SP"
	},
	{
		"id" : 4780,
		"nome" : "Biritiba Mirim",
		"codigo_ibge" : 3506607,
		"sigla" : "SP"
	},
	{
		"id" : 324,
		"nome" : "Biritinga",
		"codigo_ibge" : 2903607,
		"sigla" : "BA"
	},
	{
		"id" : 2819,
		"nome" : "Bituruna",
		"codigo_ibge" : 4102901,
		"sigla" : "PR"
	},
	{
		"id" : 4449,
		"nome" : "Blumenau",
		"codigo_ibge" : 4202404,
		"sigla" : "SC"
	},
	{
		"id" : 2820,
		"nome" : "Boa Esperança",
		"codigo_ibge" : 4103008,
		"sigla" : "PR"
	},
	{
		"id" : 13,
		"nome" : "Boa Esperança",
		"codigo_ibge" : 3201001,
		"sigla" : "ES"
	},
	{
		"id" : 1640,
		"nome" : "Boa Esperança",
		"codigo_ibge" : 3107109,
		"sigla" : "MG"
	},
	{
		"id" : 2821,
		"nome" : "Boa Esperança do Iguaçu",
		"codigo_ibge" : 4103024,
		"sigla" : "PR"
	},
	{
		"id" : 4781,
		"nome" : "Boa Esperança do Sul",
		"codigo_ibge" : 3506706,
		"sigla" : "SP"
	},
	{
		"id" : 3396,
		"nome" : "Boa Hora",
		"codigo_ibge" : 2201770,
		"sigla" : "PI"
	},
	{
		"id" : 325,
		"nome" : "Boa Nova",
		"codigo_ibge" : 2903706,
		"sigla" : "BA"
	},
	{
		"id" : 2589,
		"nome" : "Boa Ventura",
		"codigo_ibge" : 2502102,
		"sigla" : "PB"
	},
	{
		"id" : 2822,
		"nome" : "Boa Ventura de São Roque",
		"codigo_ibge" : 4103040,
		"sigla" : "PR"
	},
	{
		"id" : 727,
		"nome" : "Boa Viagem",
		"codigo_ibge" : 2302404,
		"sigla" : "CE"
	},
	{
		"id" : 4400,
		"nome" : "Boa Vista",
		"codigo_ibge" : 1400100,
		"sigla" : "RR"
	},
	{
		"id" : 2590,
		"nome" : "Boa Vista",
		"codigo_ibge" : 2502151,
		"sigla" : "PB"
	},
	{
		"id" : 2823,
		"nome" : "Boa Vista da Aparecida",
		"codigo_ibge" : 4103057,
		"sigla" : "PR"
	},
	{
		"id" : 3893,
		"nome" : "Boa Vista das Missões",
		"codigo_ibge" : 4302154,
		"sigla" : "RS"
	},
	{
		"id" : 3894,
		"nome" : "Boa Vista do Buricá",
		"codigo_ibge" : 4302204,
		"sigla" : "RS"
	},
	{
		"id" : 3895,
		"nome" : "Boa Vista do Cadeado",
		"codigo_ibge" : 4302220,
		"sigla" : "RS"
	},
	{
		"id" : 1161,
		"nome" : "Boa Vista do Gurupi",
		"codigo_ibge" : 2101970,
		"sigla" : "MA"
	},
	{
		"id" : 3896,
		"nome" : "Boa Vista do Incra",
		"codigo_ibge" : 4302238,
		"sigla" : "RS"
	},
	{
		"id" : 230,
		"nome" : "Boa Vista do Ramos",
		"codigo_ibge" : 1300680,
		"sigla" : "AM"
	},
	{
		"id" : 3897,
		"nome" : "Boa Vista do Sul",
		"codigo_ibge" : 4302253,
		"sigla" : "RS"
	},
	{
		"id" : 326,
		"nome" : "Boa Vista do Tupim",
		"codigo_ibge" : 2903805,
		"sigla" : "BA"
	},
	{
		"id" : 110,
		"nome" : "Boca da Mata",
		"codigo_ibge" : 2701001,
		"sigla" : "AL"
	},
	{
		"id" : 231,
		"nome" : "Boca do Acre",
		"codigo_ibge" : 1300706,
		"sigla" : "AM"
	},
	{
		"id" : 4782,
		"nome" : "Bocaina",
		"codigo_ibge" : 3506805,
		"sigla" : "SP"
	},
	{
		"id" : 3397,
		"nome" : "Bocaina",
		"codigo_ibge" : 2201804,
		"sigla" : "PI"
	},
	{
		"id" : 1641,
		"nome" : "Bocaina de Minas",
		"codigo_ibge" : 3107208,
		"sigla" : "MG"
	},
	{
		"id" : 4450,
		"nome" : "Bocaina do Sul",
		"codigo_ibge" : 4202438,
		"sigla" : "SC"
	},
	{
		"id" : 1642,
		"nome" : "Bocaiúva",
		"codigo_ibge" : 3107307,
		"sigla" : "MG"
	},
	{
		"id" : 2824,
		"nome" : "Bocaiúva do Sul",
		"codigo_ibge" : 4103107,
		"sigla" : "PR"
	},
	{
		"id" : 3700,
		"nome" : "Bodó",
		"codigo_ibge" : 2401651,
		"sigla" : "RN"
	},
	{
		"id" : 3204,
		"nome" : "Bodocó",
		"codigo_ibge" : 2602001,
		"sigla" : "PE"
	},
	{
		"id" : 1501,
		"nome" : "Bodoquena",
		"codigo_ibge" : 5002159,
		"sigla" : "MS"
	},
	{
		"id" : 4783,
		"nome" : "Bofete",
		"codigo_ibge" : 3506904,
		"sigla" : "SP"
	},
	{
		"id" : 4784,
		"nome" : "Boituva",
		"codigo_ibge" : 3507001,
		"sigla" : "SP"
	},
	{
		"id" : 3205,
		"nome" : "Bom Conselho",
		"codigo_ibge" : 2602100,
		"sigla" : "PE"
	},
	{
		"id" : 1643,
		"nome" : "Bom Despacho",
		"codigo_ibge" : 3107406,
		"sigla" : "MG"
	},
	{
		"id" : 1162,
		"nome" : "Bom Jardim",
		"codigo_ibge" : 2102002,
		"sigla" : "MA"
	},
	{
		"id" : 3206,
		"nome" : "Bom Jardim",
		"codigo_ibge" : 2602209,
		"sigla" : "PE"
	},
	{
		"id" : 3600,
		"nome" : "Bom Jardim",
		"codigo_ibge" : 3300506,
		"sigla" : "RJ"
	},
	{
		"id" : 4451,
		"nome" : "Bom Jardim da Serra",
		"codigo_ibge" : 4202503,
		"sigla" : "SC"
	},
	{
		"id" : 915,
		"nome" : "Bom Jardim de Goiás",
		"codigo_ibge" : 5203401,
		"sigla" : "GO"
	},
	{
		"id" : 1644,
		"nome" : "Bom Jardim de Minas",
		"codigo_ibge" : 3107505,
		"sigla" : "MG"
	},
	{
		"id" : 3898,
		"nome" : "Bom Jesus",
		"codigo_ibge" : 4302303,
		"sigla" : "RS"
	},
	{
		"id" : 4452,
		"nome" : "Bom Jesus",
		"codigo_ibge" : 4202537,
		"sigla" : "SC"
	},
	{
		"id" : 2591,
		"nome" : "Bom Jesus",
		"codigo_ibge" : 2502201,
		"sigla" : "PB"
	},
	{
		"id" : 3398,
		"nome" : "Bom Jesus",
		"codigo_ibge" : 2201903,
		"sigla" : "PI"
	},
	{
		"id" : 3701,
		"nome" : "Bom Jesus",
		"codigo_ibge" : 2401701,
		"sigla" : "RN"
	},
	{
		"id" : 327,
		"nome" : "Bom Jesus da Lapa",
		"codigo_ibge" : 2903904,
		"sigla" : "BA"
	},
	{
		"id" : 1645,
		"nome" : "Bom Jesus da Penha",
		"codigo_ibge" : 3107604,
		"sigla" : "MG"
	},
	{
		"id" : 328,
		"nome" : "Bom Jesus da Serra",
		"codigo_ibge" : 2903953,
		"sigla" : "BA"
	},
	{
		"id" : 1163,
		"nome" : "Bom Jesus das Selvas",
		"codigo_ibge" : 2102036,
		"sigla" : "MA"
	},
	{
		"id" : 916,
		"nome" : "Bom Jesus de Goiás",
		"codigo_ibge" : 5203500,
		"sigla" : "GO"
	},
	{
		"id" : 1646,
		"nome" : "Bom Jesus do Amparo",
		"codigo_ibge" : 3107703,
		"sigla" : "MG"
	},
	{
		"id" : 1363,
		"nome" : "Bom Jesus do Araguaia",
		"codigo_ibge" : 5101852,
		"sigla" : "MT"
	},
	{
		"id" : 1647,
		"nome" : "Bom Jesus do Galho",
		"codigo_ibge" : 3107802,
		"sigla" : "MG"
	},
	{
		"id" : 3601,
		"nome" : "Bom Jesus do Itabapoana",
		"codigo_ibge" : 3300605,
		"sigla" : "RJ"
	},
	{
		"id" : 14,
		"nome" : "Bom Jesus do Norte",
		"codigo_ibge" : 3201100,
		"sigla" : "ES"
	},
	{
		"id" : 4453,
		"nome" : "Bom Jesus do Oeste",
		"codigo_ibge" : 4202578,
		"sigla" : "SC"
	},
	{
		"id" : 2825,
		"nome" : "Bom Jesus do Sul",
		"codigo_ibge" : 4103156,
		"sigla" : "PR"
	},
	{
		"id" : 2439,
		"nome" : "Bom Jesus do Tocantins",
		"codigo_ibge" : 1501576,
		"sigla" : "PA"
	},
	{
		"id" : 5450,
		"nome" : "Bom Jesus do Tocantins",
		"codigo_ibge" : 1703305,
		"sigla" : "TO"
	},
	{
		"id" : 4785,
		"nome" : "Bom Jesus dos Perdões",
		"codigo_ibge" : 3507100,
		"sigla" : "SP"
	},
	{
		"id" : 1164,
		"nome" : "Bom Lugar",
		"codigo_ibge" : 2102077,
		"sigla" : "MA"
	},
	{
		"id" : 3899,
		"nome" : "Bom Princípio",
		"codigo_ibge" : 4302352,
		"sigla" : "RS"
	},
	{
		"id" : 3399,
		"nome" : "Bom Princípio do Piauí",
		"codigo_ibge" : 2201919,
		"sigla" : "PI"
	},
	{
		"id" : 3900,
		"nome" : "Bom Progresso",
		"codigo_ibge" : 4302378,
		"sigla" : "RS"
	},
	{
		"id" : 1648,
		"nome" : "Bom Repouso",
		"codigo_ibge" : 3107901,
		"sigla" : "MG"
	},
	{
		"id" : 4454,
		"nome" : "Bom Retiro",
		"codigo_ibge" : 4202602,
		"sigla" : "SC"
	},
	{
		"id" : 3901,
		"nome" : "Bom Retiro do Sul",
		"codigo_ibge" : 4302402,
		"sigla" : "RS"
	},
	{
		"id" : 2592,
		"nome" : "Bom Sucesso",
		"codigo_ibge" : 2502300,
		"sigla" : "PB"
	},
	{
		"id" : 2826,
		"nome" : "Bom Sucesso",
		"codigo_ibge" : 4103206,
		"sigla" : "PR"
	},
	{
		"id" : 1649,
		"nome" : "Bom Sucesso",
		"codigo_ibge" : 3108008,
		"sigla" : "MG"
	},
	{
		"id" : 4786,
		"nome" : "Bom Sucesso de Itararé",
		"codigo_ibge" : 3507159,
		"sigla" : "SP"
	},
	{
		"id" : 2827,
		"nome" : "Bom Sucesso do Sul",
		"codigo_ibge" : 4103222,
		"sigla" : "PR"
	},
	{
		"id" : 4455,
		"nome" : "Bombinhas",
		"codigo_ibge" : 4202453,
		"sigla" : "SC"
	},
	{
		"id" : 4401,
		"nome" : "Bonfim",
		"codigo_ibge" : 1400159,
		"sigla" : "RR"
	},
	{
		"id" : 1650,
		"nome" : "Bonfim",
		"codigo_ibge" : 3108107,
		"sigla" : "MG"
	},
	{
		"id" : 3400,
		"nome" : "Bonfim do Piauí",
		"codigo_ibge" : 2201929,
		"sigla" : "PI"
	},
	{
		"id" : 917,
		"nome" : "Bonfinópolis",
		"codigo_ibge" : 5203559,
		"sigla" : "GO"
	},
	{
		"id" : 1651,
		"nome" : "Bonfinópolis de Minas",
		"codigo_ibge" : 3108206,
		"sigla" : "MG"
	},
	{
		"id" : 329,
		"nome" : "Boninal",
		"codigo_ibge" : 2904001,
		"sigla" : "BA"
	},
	{
		"id" : 330,
		"nome" : "Bonito",
		"codigo_ibge" : 2904050,
		"sigla" : "BA"
	},
	{
		"id" : 1502,
		"nome" : "Bonito",
		"codigo_ibge" : 5002209,
		"sigla" : "MS"
	},
	{
		"id" : 2440,
		"nome" : "Bonito",
		"codigo_ibge" : 1501600,
		"sigla" : "PA"
	},
	{
		"id" : 3207,
		"nome" : "Bonito",
		"codigo_ibge" : 2602308,
		"sigla" : "PE"
	},
	{
		"id" : 1652,
		"nome" : "Bonito de Minas",
		"codigo_ibge" : 3108255,
		"sigla" : "MG"
	},
	{
		"id" : 2593,
		"nome" : "Bonito de Santa Fé",
		"codigo_ibge" : 2502409,
		"sigla" : "PB"
	},
	{
		"id" : 918,
		"nome" : "Bonópolis",
		"codigo_ibge" : 5203575,
		"sigla" : "GO"
	},
	{
		"id" : 2594,
		"nome" : "Boqueirão",
		"codigo_ibge" : 2502508,
		"sigla" : "PB"
	},
	{
		"id" : 3902,
		"nome" : "Boqueirão do Leão",
		"codigo_ibge" : 4302451,
		"sigla" : "RS"
	},
	{
		"id" : 3401,
		"nome" : "Boqueirão do Piauí",
		"codigo_ibge" : 2201945,
		"sigla" : "PI"
	},
	{
		"id" : 5357,
		"nome" : "Boquim",
		"codigo_ibge" : 2800670,
		"sigla" : "SE"
	},
	{
		"id" : 331,
		"nome" : "Boquira",
		"codigo_ibge" : 2904100,
		"sigla" : "BA"
	},
	{
		"id" : 4787,
		"nome" : "Borá",
		"codigo_ibge" : 3507209,
		"sigla" : "SP"
	},
	{
		"id" : 4788,
		"nome" : "Boracéia",
		"codigo_ibge" : 3507308,
		"sigla" : "SP"
	},
	{
		"id" : 232,
		"nome" : "Borba",
		"codigo_ibge" : 1300805,
		"sigla" : "AM"
	},
	{
		"id" : 2595,
		"nome" : "Borborema",
		"codigo_ibge" : 2502706,
		"sigla" : "PB"
	},
	{
		"id" : 4789,
		"nome" : "Borborema",
		"codigo_ibge" : 3507407,
		"sigla" : "SP"
	},
	{
		"id" : 1653,
		"nome" : "Borda da Mata",
		"codigo_ibge" : 3108305,
		"sigla" : "MG"
	},
	{
		"id" : 4790,
		"nome" : "Borebi",
		"codigo_ibge" : 3507456,
		"sigla" : "SP"
	},
	{
		"id" : 2828,
		"nome" : "Borrazópolis",
		"codigo_ibge" : 4103305,
		"sigla" : "PR"
	},
	{
		"id" : 3903,
		"nome" : "Bossoroca",
		"codigo_ibge" : 4302501,
		"sigla" : "RS"
	},
	{
		"id" : 1654,
		"nome" : "Botelhos",
		"codigo_ibge" : 3108404,
		"sigla" : "MG"
	},
	{
		"id" : 4791,
		"nome" : "Botucatu",
		"codigo_ibge" : 3507506,
		"sigla" : "SP"
	},
	{
		"id" : 1655,
		"nome" : "Botumirim",
		"codigo_ibge" : 3108503,
		"sigla" : "MG"
	},
	{
		"id" : 332,
		"nome" : "Botuporã",
		"codigo_ibge" : 2904209,
		"sigla" : "BA"
	},
	{
		"id" : 4456,
		"nome" : "Botuverá",
		"codigo_ibge" : 4202701,
		"sigla" : "SC"
	},
	{
		"id" : 3904,
		"nome" : "Bozano",
		"codigo_ibge" : 4302584,
		"sigla" : "RS"
	},
	{
		"id" : 4457,
		"nome" : "Braço do Norte",
		"codigo_ibge" : 4202800,
		"sigla" : "SC"
	},
	{
		"id" : 4458,
		"nome" : "Braço do Trombudo",
		"codigo_ibge" : 4202859,
		"sigla" : "SC"
	},
	{
		"id" : 3905,
		"nome" : "Braga",
		"codigo_ibge" : 4302600,
		"sigla" : "RS"
	},
	{
		"id" : 2441,
		"nome" : "Bragança",
		"codigo_ibge" : 1501709,
		"sigla" : "PA"
	},
	{
		"id" : 4792,
		"nome" : "Bragança Paulista",
		"codigo_ibge" : 3507605,
		"sigla" : "SP"
	},
	{
		"id" : 2829,
		"nome" : "Braganey",
		"codigo_ibge" : 4103354,
		"sigla" : "PR"
	},
	{
		"id" : 111,
		"nome" : "Branquinha",
		"codigo_ibge" : 2701100,
		"sigla" : "AL"
	},
	{
		"id" : 1656,
		"nome" : "Brás Pires",
		"codigo_ibge" : 3108701,
		"sigla" : "MG"
	},
	{
		"id" : 2442,
		"nome" : "Brasil Novo",
		"codigo_ibge" : 1501725,
		"sigla" : "PA"
	},
	{
		"id" : 1503,
		"nome" : "Brasilândia",
		"codigo_ibge" : 5002308,
		"sigla" : "MS"
	},
	{
		"id" : 1657,
		"nome" : "Brasilândia de Minas",
		"codigo_ibge" : 3108552,
		"sigla" : "MG"
	},
	{
		"id" : 2830,
		"nome" : "Brasilândia do Sul",
		"codigo_ibge" : 4103370,
		"sigla" : "PR"
	},
	{
		"id" : 5451,
		"nome" : "Brasilândia do Tocantins",
		"codigo_ibge" : 1703602,
		"sigla" : "TO"
	},
	{
		"id" : 81,
		"nome" : "Brasiléia",
		"codigo_ibge" : 1200104,
		"sigla" : "AC"
	},
	{
		"id" : 3402,
		"nome" : "Brasileira",
		"codigo_ibge" : 2201960,
		"sigla" : "PI"
	},
	{
		"id" : 882,
		"nome" : "Brasília",
		"codigo_ibge" : 5300108,
		"sigla" : "DF"
	},
	{
		"id" : 1658,
		"nome" : "Brasília de Minas",
		"codigo_ibge" : 3108602,
		"sigla" : "MG"
	},
	{
		"id" : 1364,
		"nome" : "Brasnorte",
		"codigo_ibge" : 5101902,
		"sigla" : "MT"
	},
	{
		"id" : 4793,
		"nome" : "Braúna",
		"codigo_ibge" : 3507704,
		"sigla" : "SP"
	},
	{
		"id" : 1660,
		"nome" : "Braúnas",
		"codigo_ibge" : 3108800,
		"sigla" : "MG"
	},
	{
		"id" : 919,
		"nome" : "Brazabrantes",
		"codigo_ibge" : 5203609,
		"sigla" : "GO"
	},
	{
		"id" : 1659,
		"nome" : "Brazópolis",
		"codigo_ibge" : 3108909,
		"sigla" : "MG"
	},
	{
		"id" : 3208,
		"nome" : "Brejão",
		"codigo_ibge" : 2602407,
		"sigla" : "PE"
	},
	{
		"id" : 15,
		"nome" : "Brejetuba",
		"codigo_ibge" : 3201159,
		"sigla" : "ES"
	},
	{
		"id" : 3209,
		"nome" : "Brejinho",
		"codigo_ibge" : 2602506,
		"sigla" : "PE"
	},
	{
		"id" : 3702,
		"nome" : "Brejinho",
		"codigo_ibge" : 2401800,
		"sigla" : "RN"
	},
	{
		"id" : 5452,
		"nome" : "Brejinho de Nazaré",
		"codigo_ibge" : 1703701,
		"sigla" : "TO"
	},
	{
		"id" : 1165,
		"nome" : "Brejo",
		"codigo_ibge" : 2102101,
		"sigla" : "MA"
	},
	{
		"id" : 4794,
		"nome" : "Brejo Alegre",
		"codigo_ibge" : 3507753,
		"sigla" : "SP"
	},
	{
		"id" : 3210,
		"nome" : "Brejo da Madre de Deus",
		"codigo_ibge" : 2602605,
		"sigla" : "PE"
	},
	{
		"id" : 1166,
		"nome" : "Brejo de Areia",
		"codigo_ibge" : 2102150,
		"sigla" : "MA"
	},
	{
		"id" : 2596,
		"nome" : "Brejo do Cruz",
		"codigo_ibge" : 2502805,
		"sigla" : "PB"
	},
	{
		"id" : 3403,
		"nome" : "Brejo do Piauí",
		"codigo_ibge" : 2201988,
		"sigla" : "PI"
	},
	{
		"id" : 2597,
		"nome" : "Brejo dos Santos",
		"codigo_ibge" : 2502904,
		"sigla" : "PB"
	},
	{
		"id" : 5358,
		"nome" : "Brejo Grande",
		"codigo_ibge" : 2800704,
		"sigla" : "SE"
	},
	{
		"id" : 2443,
		"nome" : "Brejo Grande do Araguaia",
		"codigo_ibge" : 1501758,
		"sigla" : "PA"
	},
	{
		"id" : 728,
		"nome" : "Brejo Santo",
		"codigo_ibge" : 2302503,
		"sigla" : "CE"
	},
	{
		"id" : 333,
		"nome" : "Brejões",
		"codigo_ibge" : 2904308,
		"sigla" : "BA"
	},
	{
		"id" : 334,
		"nome" : "Brejolândia",
		"codigo_ibge" : 2904407,
		"sigla" : "BA"
	},
	{
		"id" : 2444,
		"nome" : "Breu Branco",
		"codigo_ibge" : 1501782,
		"sigla" : "PA"
	},
	{
		"id" : 2445,
		"nome" : "Breves",
		"codigo_ibge" : 1501808,
		"sigla" : "PA"
	},
	{
		"id" : 920,
		"nome" : "Britânia",
		"codigo_ibge" : 5203807,
		"sigla" : "GO"
	},
	{
		"id" : 3906,
		"nome" : "Brochier",
		"codigo_ibge" : 4302659,
		"sigla" : "RS"
	},
	{
		"id" : 4795,
		"nome" : "Brodowski",
		"codigo_ibge" : 3507803,
		"sigla" : "SP"
	},
	{
		"id" : 4796,
		"nome" : "Brotas",
		"codigo_ibge" : 3507902,
		"sigla" : "SP"
	},
	{
		"id" : 335,
		"nome" : "Brotas de Macaúbas",
		"codigo_ibge" : 2904506,
		"sigla" : "BA"
	},
	{
		"id" : 1661,
		"nome" : "Brumadinho",
		"codigo_ibge" : 3109006,
		"sigla" : "MG"
	},
	{
		"id" : 336,
		"nome" : "Brumado",
		"codigo_ibge" : 2904605,
		"sigla" : "BA"
	},
	{
		"id" : 4459,
		"nome" : "Brunópolis",
		"codigo_ibge" : 4202875,
		"sigla" : "SC"
	},
	{
		"id" : 4460,
		"nome" : "Brusque",
		"codigo_ibge" : 4202909,
		"sigla" : "SC"
	},
	{
		"id" : 1662,
		"nome" : "Bueno Brandão",
		"codigo_ibge" : 3109105,
		"sigla" : "MG"
	},
	{
		"id" : 1663,
		"nome" : "Buenópolis",
		"codigo_ibge" : 3109204,
		"sigla" : "MG"
	},
	{
		"id" : 3211,
		"nome" : "Buenos Aires",
		"codigo_ibge" : 2602704,
		"sigla" : "PE"
	},
	{
		"id" : 337,
		"nome" : "Buerarema",
		"codigo_ibge" : 2904704,
		"sigla" : "BA"
	},
	{
		"id" : 1664,
		"nome" : "Bugre",
		"codigo_ibge" : 3109253,
		"sigla" : "MG"
	},
	{
		"id" : 3212,
		"nome" : "Buíque",
		"codigo_ibge" : 2602803,
		"sigla" : "PE"
	},
	{
		"id" : 82,
		"nome" : "Bujari",
		"codigo_ibge" : 1200138,
		"sigla" : "AC"
	},
	{
		"id" : 2446,
		"nome" : "Bujaru",
		"codigo_ibge" : 1501907,
		"sigla" : "PA"
	},
	{
		"id" : 4797,
		"nome" : "Buri",
		"codigo_ibge" : 3508009,
		"sigla" : "SP"
	},
	{
		"id" : 4798,
		"nome" : "Buritama",
		"codigo_ibge" : 3508108,
		"sigla" : "SP"
	},
	{
		"id" : 1167,
		"nome" : "Buriti",
		"codigo_ibge" : 2102200,
		"sigla" : "MA"
	},
	{
		"id" : 921,
		"nome" : "Buriti Alegre",
		"codigo_ibge" : 5203906,
		"sigla" : "GO"
	},
	{
		"id" : 1168,
		"nome" : "Buriti Bravo",
		"codigo_ibge" : 2102309,
		"sigla" : "MA"
	},
	{
		"id" : 922,
		"nome" : "Buriti de Goiás",
		"codigo_ibge" : 5203939,
		"sigla" : "GO"
	},
	{
		"id" : 5453,
		"nome" : "Buriti do Tocantins",
		"codigo_ibge" : 1703800,
		"sigla" : "TO"
	},
	{
		"id" : 3404,
		"nome" : "Buriti dos Lopes",
		"codigo_ibge" : 2202000,
		"sigla" : "PI"
	},
	{
		"id" : 3405,
		"nome" : "Buriti dos Montes",
		"codigo_ibge" : 2202026,
		"sigla" : "PI"
	},
	{
		"id" : 1169,
		"nome" : "Buriticupu",
		"codigo_ibge" : 2102325,
		"sigla" : "MA"
	},
	{
		"id" : 923,
		"nome" : "Buritinópolis",
		"codigo_ibge" : 5203962,
		"sigla" : "GO"
	},
	{
		"id" : 338,
		"nome" : "Buritirama",
		"codigo_ibge" : 2904753,
		"sigla" : "BA"
	},
	{
		"id" : 1170,
		"nome" : "Buritirana",
		"codigo_ibge" : 2102358,
		"sigla" : "MA"
	},
	{
		"id" : 1665,
		"nome" : "Buritis",
		"codigo_ibge" : 3109303,
		"sigla" : "MG"
	},
	{
		"id" : 4351,
		"nome" : "Buritis",
		"codigo_ibge" : 1100452,
		"sigla" : "RO"
	},
	{
		"id" : 4799,
		"nome" : "Buritizal",
		"codigo_ibge" : 3508207,
		"sigla" : "SP"
	},
	{
		"id" : 1666,
		"nome" : "Buritizeiro",
		"codigo_ibge" : 3109402,
		"sigla" : "MG"
	},
	{
		"id" : 3907,
		"nome" : "Butiá",
		"codigo_ibge" : 4302709,
		"sigla" : "RS"
	},
	{
		"id" : 233,
		"nome" : "Caapiranga",
		"codigo_ibge" : 1300839,
		"sigla" : "AM"
	},
	{
		"id" : 2598,
		"nome" : "Caaporã",
		"codigo_ibge" : 2503001,
		"sigla" : "PB"
	},
	{
		"id" : 1504,
		"nome" : "Caarapó",
		"codigo_ibge" : 5002407,
		"sigla" : "MS"
	},
	{
		"id" : 339,
		"nome" : "Caatiba",
		"codigo_ibge" : 2904803,
		"sigla" : "BA"
	},
	{
		"id" : 2599,
		"nome" : "Cabaceiras",
		"codigo_ibge" : 2503100,
		"sigla" : "PB"
	},
	{
		"id" : 340,
		"nome" : "Cabaceiras do Paraguaçu",
		"codigo_ibge" : 2904852,
		"sigla" : "BA"
	},
	{
		"id" : 1667,
		"nome" : "Cabeceira Grande",
		"codigo_ibge" : 3109451,
		"sigla" : "MG"
	},
	{
		"id" : 924,
		"nome" : "Cabeceiras",
		"codigo_ibge" : 5204003,
		"sigla" : "GO"
	},
	{
		"id" : 3406,
		"nome" : "Cabeceiras do Piauí",
		"codigo_ibge" : 2202059,
		"sigla" : "PI"
	},
	{
		"id" : 2600,
		"nome" : "Cabedelo",
		"codigo_ibge" : 2503209,
		"sigla" : "PB"
	},
	{
		"id" : 4352,
		"nome" : "Cabixi",
		"codigo_ibge" : 1100031,
		"sigla" : "RO"
	},
	{
		"id" : 3213,
		"nome" : "Cabo de Santo Agostinho",
		"codigo_ibge" : 2602902,
		"sigla" : "PE"
	},
	{
		"id" : 3602,
		"nome" : "Cabo Frio",
		"codigo_ibge" : 3300704,
		"sigla" : "RJ"
	},
	{
		"id" : 1668,
		"nome" : "Cabo Verde",
		"codigo_ibge" : 3109501,
		"sigla" : "MG"
	},
	{
		"id" : 4800,
		"nome" : "Cabrália Paulista",
		"codigo_ibge" : 3508306,
		"sigla" : "SP"
	},
	{
		"id" : 4801,
		"nome" : "Cabreúva",
		"codigo_ibge" : 3508405,
		"sigla" : "SP"
	},
	{
		"id" : 3214,
		"nome" : "Cabrobó",
		"codigo_ibge" : 2603009,
		"sigla" : "PE"
	},
	{
		"id" : 4461,
		"nome" : "Caçador",
		"codigo_ibge" : 4203006,
		"sigla" : "SC"
	},
	{
		"id" : 4802,
		"nome" : "Caçapava",
		"codigo_ibge" : 3508504,
		"sigla" : "SP"
	},
	{
		"id" : 3908,
		"nome" : "Caçapava do Sul",
		"codigo_ibge" : 4302808,
		"sigla" : "RS"
	},
	{
		"id" : 4353,
		"nome" : "Cacaulândia",
		"codigo_ibge" : 1100601,
		"sigla" : "RO"
	},
	{
		"id" : 3909,
		"nome" : "Cacequi",
		"codigo_ibge" : 4302907,
		"sigla" : "RS"
	},
	{
		"id" : 1365,
		"nome" : "Cáceres",
		"codigo_ibge" : 5102504,
		"sigla" : "MT"
	},
	{
		"id" : 341,
		"nome" : "Cachoeira",
		"codigo_ibge" : 2904902,
		"sigla" : "BA"
	},
	{
		"id" : 925,
		"nome" : "Cachoeira Alta",
		"codigo_ibge" : 5204102,
		"sigla" : "GO"
	},
	{
		"id" : 1669,
		"nome" : "Cachoeira da Prata",
		"codigo_ibge" : 3109600,
		"sigla" : "MG"
	},
	{
		"id" : 926,
		"nome" : "Cachoeira de Goiás",
		"codigo_ibge" : 5204201,
		"sigla" : "GO"
	},
	{
		"id" : 1670,
		"nome" : "Cachoeira de Minas",
		"codigo_ibge" : 3109709,
		"sigla" : "MG"
	},
	{
		"id" : 1671,
		"nome" : "Cachoeira de Pajeú",
		"codigo_ibge" : 3102704,
		"sigla" : "MG"
	},
	{
		"id" : 2447,
		"nome" : "Cachoeira do Arari",
		"codigo_ibge" : 1502004,
		"sigla" : "PA"
	},
	{
		"id" : 2448,
		"nome" : "Cachoeira do Piriá",
		"codigo_ibge" : 1501956,
		"sigla" : "PA"
	},
	{
		"id" : 3910,
		"nome" : "Cachoeira do Sul",
		"codigo_ibge" : 4303004,
		"sigla" : "RS"
	},
	{
		"id" : 2601,
		"nome" : "Cachoeira dos Índios",
		"codigo_ibge" : 2503308,
		"sigla" : "PB"
	},
	{
		"id" : 927,
		"nome" : "Cachoeira Dourada",
		"codigo_ibge" : 5204250,
		"sigla" : "GO"
	},
	{
		"id" : 1672,
		"nome" : "Cachoeira Dourada",
		"codigo_ibge" : 3109808,
		"sigla" : "MG"
	},
	{
		"id" : 1171,
		"nome" : "Cachoeira Grande",
		"codigo_ibge" : 2102374,
		"sigla" : "MA"
	},
	{
		"id" : 4803,
		"nome" : "Cachoeira Paulista",
		"codigo_ibge" : 3508603,
		"sigla" : "SP"
	},
	{
		"id" : 3603,
		"nome" : "Cachoeiras de Macacu",
		"codigo_ibge" : 3300803,
		"sigla" : "RJ"
	},
	{
		"id" : 3215,
		"nome" : "Cachoeirinha",
		"codigo_ibge" : 2603108,
		"sigla" : "PE"
	},
	{
		"id" : 3911,
		"nome" : "Cachoeirinha",
		"codigo_ibge" : 4303103,
		"sigla" : "RS"
	},
	{
		"id" : 5454,
		"nome" : "Cachoeirinha",
		"codigo_ibge" : 1703826,
		"sigla" : "TO"
	},
	{
		"id" : 16,
		"nome" : "Cachoeiro de Itapemirim",
		"codigo_ibge" : 3201209,
		"sigla" : "ES"
	},
	{
		"id" : 2602,
		"nome" : "Cacimba de Areia",
		"codigo_ibge" : 2503407,
		"sigla" : "PB"
	},
	{
		"id" : 2603,
		"nome" : "Cacimba de Dentro",
		"codigo_ibge" : 2503506,
		"sigla" : "PB"
	},
	{
		"id" : 2604,
		"nome" : "Cacimbas",
		"codigo_ibge" : 2503555,
		"sigla" : "PB"
	},
	{
		"id" : 112,
		"nome" : "Cacimbinhas",
		"codigo_ibge" : 2701209,
		"sigla" : "AL"
	},
	{
		"id" : 3912,
		"nome" : "Cacique Doble",
		"codigo_ibge" : 4303202,
		"sigla" : "RS"
	},
	{
		"id" : 4354,
		"nome" : "Cacoal",
		"codigo_ibge" : 1100049,
		"sigla" : "RO"
	},
	{
		"id" : 4804,
		"nome" : "Caconde",
		"codigo_ibge" : 3508702,
		"sigla" : "SP"
	},
	{
		"id" : 928,
		"nome" : "Caçu",
		"codigo_ibge" : 5204300,
		"sigla" : "GO"
	},
	{
		"id" : 342,
		"nome" : "Caculé",
		"codigo_ibge" : 2905008,
		"sigla" : "BA"
	},
	{
		"id" : 343,
		"nome" : "Caém",
		"codigo_ibge" : 2905107,
		"sigla" : "BA"
	},
	{
		"id" : 1673,
		"nome" : "Caetanópolis",
		"codigo_ibge" : 3109907,
		"sigla" : "MG"
	},
	{
		"id" : 344,
		"nome" : "Caetanos",
		"codigo_ibge" : 2905156,
		"sigla" : "BA"
	},
	{
		"id" : 1674,
		"nome" : "Caeté",
		"codigo_ibge" : 3110004,
		"sigla" : "MG"
	},
	{
		"id" : 3216,
		"nome" : "Caetés",
		"codigo_ibge" : 2603207,
		"sigla" : "PE"
	},
	{
		"id" : 345,
		"nome" : "Caetité",
		"codigo_ibge" : 2905206,
		"sigla" : "BA"
	},
	{
		"id" : 346,
		"nome" : "Cafarnaum",
		"codigo_ibge" : 2905305,
		"sigla" : "BA"
	},
	{
		"id" : 2831,
		"nome" : "Cafeara",
		"codigo_ibge" : 4103404,
		"sigla" : "PR"
	},
	{
		"id" : 2832,
		"nome" : "Cafelândia",
		"codigo_ibge" : 4103453,
		"sigla" : "PR"
	},
	{
		"id" : 4805,
		"nome" : "Cafelândia",
		"codigo_ibge" : 3508801,
		"sigla" : "SP"
	},
	{
		"id" : 2833,
		"nome" : "Cafezal do Sul",
		"codigo_ibge" : 4103479,
		"sigla" : "PR"
	},
	{
		"id" : 4806,
		"nome" : "Caiabu",
		"codigo_ibge" : 3508900,
		"sigla" : "SP"
	},
	{
		"id" : 1675,
		"nome" : "Caiana",
		"codigo_ibge" : 3110103,
		"sigla" : "MG"
	},
	{
		"id" : 929,
		"nome" : "Caiapônia",
		"codigo_ibge" : 5204409,
		"sigla" : "GO"
	},
	{
		"id" : 3913,
		"nome" : "Caibaté",
		"codigo_ibge" : 4303301,
		"sigla" : "RS"
	},
	{
		"id" : 4462,
		"nome" : "Caibi",
		"codigo_ibge" : 4203105,
		"sigla" : "SC"
	},
	{
		"id" : 3914,
		"nome" : "Caiçara",
		"codigo_ibge" : 4303400,
		"sigla" : "RS"
	},
	{
		"id" : 2605,
		"nome" : "Caiçara",
		"codigo_ibge" : 2503605,
		"sigla" : "PB"
	},
	{
		"id" : 3703,
		"nome" : "Caiçara do Norte",
		"codigo_ibge" : 2401859,
		"sigla" : "RN"
	},
	{
		"id" : 3704,
		"nome" : "Caiçara do Rio do Vento",
		"codigo_ibge" : 2401909,
		"sigla" : "RN"
	},
	{
		"id" : 3705,
		"nome" : "Caicó",
		"codigo_ibge" : 2402006,
		"sigla" : "RN"
	},
	{
		"id" : 4807,
		"nome" : "Caieiras",
		"codigo_ibge" : 3509007,
		"sigla" : "SP"
	},
	{
		"id" : 347,
		"nome" : "Cairu",
		"codigo_ibge" : 2905404,
		"sigla" : "BA"
	},
	{
		"id" : 4808,
		"nome" : "Caiuá",
		"codigo_ibge" : 3509106,
		"sigla" : "SP"
	},
	{
		"id" : 4809,
		"nome" : "Cajamar",
		"codigo_ibge" : 3509205,
		"sigla" : "SP"
	},
	{
		"id" : 1172,
		"nome" : "Cajapió",
		"codigo_ibge" : 2102408,
		"sigla" : "MA"
	},
	{
		"id" : 1173,
		"nome" : "Cajari",
		"codigo_ibge" : 2102507,
		"sigla" : "MA"
	},
	{
		"id" : 4810,
		"nome" : "Cajati",
		"codigo_ibge" : 3509254,
		"sigla" : "SP"
	},
	{
		"id" : 2606,
		"nome" : "Cajazeiras",
		"codigo_ibge" : 2503704,
		"sigla" : "PB"
	},
	{
		"id" : 3407,
		"nome" : "Cajazeiras do Piauí",
		"codigo_ibge" : 2202075,
		"sigla" : "PI"
	},
	{
		"id" : 2607,
		"nome" : "Cajazeirinhas",
		"codigo_ibge" : 2503753,
		"sigla" : "PB"
	},
	{
		"id" : 4811,
		"nome" : "Cajobi",
		"codigo_ibge" : 3509304,
		"sigla" : "SP"
	},
	{
		"id" : 113,
		"nome" : "Cajueiro",
		"codigo_ibge" : 2701308,
		"sigla" : "AL"
	},
	{
		"id" : 3408,
		"nome" : "Cajueiro da Praia",
		"codigo_ibge" : 2202083,
		"sigla" : "PI"
	},
	{
		"id" : 1676,
		"nome" : "Cajuri",
		"codigo_ibge" : 3110202,
		"sigla" : "MG"
	},
	{
		"id" : 4812,
		"nome" : "Cajuru",
		"codigo_ibge" : 3509403,
		"sigla" : "SP"
	},
	{
		"id" : 3217,
		"nome" : "Calçado",
		"codigo_ibge" : 2603306,
		"sigla" : "PE"
	},
	{
		"id" : 204,
		"nome" : "Calçoene",
		"codigo_ibge" : 1600204,
		"sigla" : "AP"
	},
	{
		"id" : 1677,
		"nome" : "Caldas",
		"codigo_ibge" : 3110301,
		"sigla" : "MG"
	},
	{
		"id" : 2608,
		"nome" : "Caldas Brandão",
		"codigo_ibge" : 2503803,
		"sigla" : "PB"
	},
	{
		"id" : 930,
		"nome" : "Caldas Novas",
		"codigo_ibge" : 5204508,
		"sigla" : "GO"
	},
	{
		"id" : 931,
		"nome" : "Caldazinha",
		"codigo_ibge" : 5204557,
		"sigla" : "GO"
	},
	{
		"id" : 348,
		"nome" : "Caldeirão Grande",
		"codigo_ibge" : 2905503,
		"sigla" : "BA"
	},
	{
		"id" : 3409,
		"nome" : "Caldeirão Grande do Piauí",
		"codigo_ibge" : 2202091,
		"sigla" : "PI"
	},
	{
		"id" : 2834,
		"nome" : "Califórnia",
		"codigo_ibge" : 4103503,
		"sigla" : "PR"
	},
	{
		"id" : 4463,
		"nome" : "Calmon",
		"codigo_ibge" : 4203154,
		"sigla" : "SC"
	},
	{
		"id" : 3218,
		"nome" : "Calumbi",
		"codigo_ibge" : 2603405,
		"sigla" : "PE"
	},
	{
		"id" : 349,
		"nome" : "Camacan",
		"codigo_ibge" : 2905602,
		"sigla" : "BA"
	},
	{
		"id" : 350,
		"nome" : "Camaçari",
		"codigo_ibge" : 2905701,
		"sigla" : "BA"
	},
	{
		"id" : 1678,
		"nome" : "Camacho",
		"codigo_ibge" : 3110400,
		"sigla" : "MG"
	},
	{
		"id" : 2609,
		"nome" : "Camalaú",
		"codigo_ibge" : 2503902,
		"sigla" : "PB"
	},
	{
		"id" : 351,
		"nome" : "Camamu",
		"codigo_ibge" : 2905800,
		"sigla" : "BA"
	},
	{
		"id" : 1679,
		"nome" : "Camanducaia",
		"codigo_ibge" : 3110509,
		"sigla" : "MG"
	},
	{
		"id" : 1505,
		"nome" : "Camapuã",
		"codigo_ibge" : 5002605,
		"sigla" : "MS"
	},
	{
		"id" : 3915,
		"nome" : "Camaquã",
		"codigo_ibge" : 4303509,
		"sigla" : "RS"
	},
	{
		"id" : 3219,
		"nome" : "Camaragibe",
		"codigo_ibge" : 2603454,
		"sigla" : "PE"
	},
	{
		"id" : 3916,
		"nome" : "Camargo",
		"codigo_ibge" : 4303558,
		"sigla" : "RS"
	},
	{
		"id" : 2835,
		"nome" : "Cambará",
		"codigo_ibge" : 4103602,
		"sigla" : "PR"
	},
	{
		"id" : 3917,
		"nome" : "Cambará do Sul",
		"codigo_ibge" : 4303608,
		"sigla" : "RS"
	},
	{
		"id" : 2836,
		"nome" : "Cambé",
		"codigo_ibge" : 4103701,
		"sigla" : "PR"
	},
	{
		"id" : 2837,
		"nome" : "Cambira",
		"codigo_ibge" : 4103800,
		"sigla" : "PR"
	},
	{
		"id" : 4464,
		"nome" : "Camboriú",
		"codigo_ibge" : 4203204,
		"sigla" : "SC"
	},
	{
		"id" : 3604,
		"nome" : "Cambuci",
		"codigo_ibge" : 3300902,
		"sigla" : "RJ"
	},
	{
		"id" : 1680,
		"nome" : "Cambuí",
		"codigo_ibge" : 3110608,
		"sigla" : "MG"
	},
	{
		"id" : 1681,
		"nome" : "Cambuquira",
		"codigo_ibge" : 3110707,
		"sigla" : "MG"
	},
	{
		"id" : 2449,
		"nome" : "Cametá",
		"codigo_ibge" : 1502103,
		"sigla" : "PA"
	},
	{
		"id" : 729,
		"nome" : "Camocim",
		"codigo_ibge" : 2302602,
		"sigla" : "CE"
	},
	{
		"id" : 3220,
		"nome" : "Camocim de São Félix",
		"codigo_ibge" : 2603504,
		"sigla" : "PE"
	},
	{
		"id" : 1682,
		"nome" : "Campanário",
		"codigo_ibge" : 3110806,
		"sigla" : "MG"
	},
	{
		"id" : 1683,
		"nome" : "Campanha",
		"codigo_ibge" : 3110905,
		"sigla" : "MG"
	},
	{
		"id" : 114,
		"nome" : "Campestre",
		"codigo_ibge" : 2701357,
		"sigla" : "AL"
	},
	{
		"id" : 1684,
		"nome" : "Campestre",
		"codigo_ibge" : 3111002,
		"sigla" : "MG"
	},
	{
		"id" : 3918,
		"nome" : "Campestre da Serra",
		"codigo_ibge" : 4303673,
		"sigla" : "RS"
	},
	{
		"id" : 932,
		"nome" : "Campestre de Goiás",
		"codigo_ibge" : 5204607,
		"sigla" : "GO"
	},
	{
		"id" : 1174,
		"nome" : "Campestre do Maranhão",
		"codigo_ibge" : 2102556,
		"sigla" : "MA"
	},
	{
		"id" : 2838,
		"nome" : "Campina da Lagoa",
		"codigo_ibge" : 4103909,
		"sigla" : "PR"
	},
	{
		"id" : 3919,
		"nome" : "Campina das Missões",
		"codigo_ibge" : 4303707,
		"sigla" : "RS"
	},
	{
		"id" : 4813,
		"nome" : "Campina do Monte Alegre",
		"codigo_ibge" : 3509452,
		"sigla" : "SP"
	},
	{
		"id" : 2839,
		"nome" : "Campina do Simão",
		"codigo_ibge" : 4103958,
		"sigla" : "PR"
	},
	{
		"id" : 2610,
		"nome" : "Campina Grande",
		"codigo_ibge" : 2504009,
		"sigla" : "PB"
	},
	{
		"id" : 2840,
		"nome" : "Campina Grande do Sul",
		"codigo_ibge" : 4104006,
		"sigla" : "PR"
	},
	{
		"id" : 1685,
		"nome" : "Campina Verde",
		"codigo_ibge" : 3111101,
		"sigla" : "MG"
	},
	{
		"id" : 933,
		"nome" : "Campinaçu",
		"codigo_ibge" : 5204656,
		"sigla" : "GO"
	},
	{
		"id" : 1366,
		"nome" : "Campinápolis",
		"codigo_ibge" : 5102603,
		"sigla" : "MT"
	},
	{
		"id" : 4814,
		"nome" : "Campinas",
		"codigo_ibge" : 3509502,
		"sigla" : "SP"
	},
	{
		"id" : 3410,
		"nome" : "Campinas do Piauí",
		"codigo_ibge" : 2202109,
		"sigla" : "PI"
	},
	{
		"id" : 3920,
		"nome" : "Campinas do Sul",
		"codigo_ibge" : 4303806,
		"sigla" : "RS"
	},
	{
		"id" : 934,
		"nome" : "Campinorte",
		"codigo_ibge" : 5204706,
		"sigla" : "GO"
	},
	{
		"id" : 115,
		"nome" : "Campo Alegre",
		"codigo_ibge" : 2701407,
		"sigla" : "AL"
	},
	{
		"id" : 4465,
		"nome" : "Campo Alegre",
		"codigo_ibge" : 4203303,
		"sigla" : "SC"
	},
	{
		"id" : 935,
		"nome" : "Campo Alegre de Goiás",
		"codigo_ibge" : 5204805,
		"sigla" : "GO"
	},
	{
		"id" : 352,
		"nome" : "Campo Alegre de Lourdes",
		"codigo_ibge" : 2905909,
		"sigla" : "BA"
	},
	{
		"id" : 3411,
		"nome" : "Campo Alegre do Fidalgo",
		"codigo_ibge" : 2202117,
		"sigla" : "PI"
	},
	{
		"id" : 1686,
		"nome" : "Campo Azul",
		"codigo_ibge" : 3111150,
		"sigla" : "MG"
	},
	{
		"id" : 1687,
		"nome" : "Campo Belo",
		"codigo_ibge" : 3111200,
		"sigla" : "MG"
	},
	{
		"id" : 4466,
		"nome" : "Campo Belo do Sul",
		"codigo_ibge" : 4203402,
		"sigla" : "SC"
	},
	{
		"id" : 3921,
		"nome" : "Campo Bom",
		"codigo_ibge" : 4303905,
		"sigla" : "RS"
	},
	{
		"id" : 2841,
		"nome" : "Campo Bonito",
		"codigo_ibge" : 4104055,
		"sigla" : "PR"
	},
	{
		"id" : 5359,
		"nome" : "Campo do Brito",
		"codigo_ibge" : 2801009,
		"sigla" : "SE"
	},
	{
		"id" : 1688,
		"nome" : "Campo do Meio",
		"codigo_ibge" : 3111309,
		"sigla" : "MG"
	},
	{
		"id" : 2842,
		"nome" : "Campo do Tenente",
		"codigo_ibge" : 4104105,
		"sigla" : "PR"
	},
	{
		"id" : 4467,
		"nome" : "Campo Erê",
		"codigo_ibge" : 4203501,
		"sigla" : "SC"
	},
	{
		"id" : 1689,
		"nome" : "Campo Florido",
		"codigo_ibge" : 3111408,
		"sigla" : "MG"
	},
	{
		"id" : 353,
		"nome" : "Campo Formoso",
		"codigo_ibge" : 2906006,
		"sigla" : "BA"
	},
	{
		"id" : 116,
		"nome" : "Campo Grande",
		"codigo_ibge" : 2701506,
		"sigla" : "AL"
	},
	{
		"id" : 1506,
		"nome" : "Campo Grande",
		"codigo_ibge" : 5002704,
		"sigla" : "MS"
	},
	{
		"id" : 3695,
		"nome" : "Campo grande",
		"codigo_ibge" : 2401305,
		"sigla" : "RN"
	},
	{
		"id" : 3412,
		"nome" : "Campo Grande do Piauí",
		"codigo_ibge" : 2202133,
		"sigla" : "PI"
	},
	{
		"id" : 2843,
		"nome" : "Campo Largo",
		"codigo_ibge" : 4104204,
		"sigla" : "PR"
	},
	{
		"id" : 3413,
		"nome" : "Campo Largo do Piauí",
		"codigo_ibge" : 2202174,
		"sigla" : "PI"
	},
	{
		"id" : 936,
		"nome" : "Campo Limpo de Goiás",
		"codigo_ibge" : 5204854,
		"sigla" : "GO"
	},
	{
		"id" : 4815,
		"nome" : "Campo Limpo Paulista",
		"codigo_ibge" : 3509601,
		"sigla" : "SP"
	},
	{
		"id" : 2844,
		"nome" : "Campo Magro",
		"codigo_ibge" : 4104253,
		"sigla" : "PR"
	},
	{
		"id" : 3414,
		"nome" : "Campo Maior",
		"codigo_ibge" : 2202208,
		"sigla" : "PI"
	},
	{
		"id" : 2845,
		"nome" : "Campo Mourão",
		"codigo_ibge" : 4104303,
		"sigla" : "PR"
	},
	{
		"id" : 3922,
		"nome" : "Campo Novo",
		"codigo_ibge" : 4304002,
		"sigla" : "RS"
	},
	{
		"id" : 4355,
		"nome" : "Campo Novo de Rondônia",
		"codigo_ibge" : 1100700,
		"sigla" : "RO"
	},
	{
		"id" : 1367,
		"nome" : "Campo Novo do Parecis",
		"codigo_ibge" : 5102637,
		"sigla" : "MT"
	},
	{
		"id" : 3706,
		"nome" : "Campo Redondo",
		"codigo_ibge" : 2402105,
		"sigla" : "RN"
	},
	{
		"id" : 1368,
		"nome" : "Campo Verde",
		"codigo_ibge" : 5102678,
		"sigla" : "MT"
	},
	{
		"id" : 1690,
		"nome" : "Campos Altos",
		"codigo_ibge" : 3111507,
		"sigla" : "MG"
	},
	{
		"id" : 937,
		"nome" : "Campos Belos",
		"codigo_ibge" : 5204904,
		"sigla" : "GO"
	},
	{
		"id" : 3923,
		"nome" : "Campos Borges",
		"codigo_ibge" : 4304101,
		"sigla" : "RS"
	},
	{
		"id" : 1369,
		"nome" : "Campos de Júlio",
		"codigo_ibge" : 5102686,
		"sigla" : "MT"
	},
	{
		"id" : 4816,
		"nome" : "Campos do Jordão",
		"codigo_ibge" : 3509700,
		"sigla" : "SP"
	},
	{
		"id" : 3605,
		"nome" : "Campos dos Goytacazes",
		"codigo_ibge" : 3301009,
		"sigla" : "RJ"
	},
	{
		"id" : 1691,
		"nome" : "Campos Gerais",
		"codigo_ibge" : 3111606,
		"sigla" : "MG"
	},
	{
		"id" : 5455,
		"nome" : "Campos Lindos",
		"codigo_ibge" : 1703842,
		"sigla" : "TO"
	},
	{
		"id" : 4468,
		"nome" : "Campos Novos",
		"codigo_ibge" : 4203600,
		"sigla" : "SC"
	},
	{
		"id" : 4817,
		"nome" : "Campos Novos Paulista",
		"codigo_ibge" : 3509809,
		"sigla" : "SP"
	},
	{
		"id" : 730,
		"nome" : "Campos Sales",
		"codigo_ibge" : 2302701,
		"sigla" : "CE"
	},
	{
		"id" : 938,
		"nome" : "Campos Verdes",
		"codigo_ibge" : 5204953,
		"sigla" : "GO"
	},
	{
		"id" : 3221,
		"nome" : "Camutanga",
		"codigo_ibge" : 2603603,
		"sigla" : "PE"
	},
	{
		"id" : 1692,
		"nome" : "Cana Verde",
		"codigo_ibge" : 3111903,
		"sigla" : "MG"
	},
	{
		"id" : 1693,
		"nome" : "Canaã",
		"codigo_ibge" : 3111705,
		"sigla" : "MG"
	},
	{
		"id" : 2450,
		"nome" : "Canaã dos Carajás",
		"codigo_ibge" : 1502152,
		"sigla" : "PA"
	},
	{
		"id" : 1370,
		"nome" : "Canabrava do Norte",
		"codigo_ibge" : 5102694,
		"sigla" : "MT"
	},
	{
		"id" : 4818,
		"nome" : "Cananéia",
		"codigo_ibge" : 3509908,
		"sigla" : "SP"
	},
	{
		"id" : 117,
		"nome" : "Canapi",
		"codigo_ibge" : 2701605,
		"sigla" : "AL"
	},
	{
		"id" : 354,
		"nome" : "Canápolis",
		"codigo_ibge" : 2906105,
		"sigla" : "BA"
	},
	{
		"id" : 1694,
		"nome" : "Canápolis",
		"codigo_ibge" : 3111804,
		"sigla" : "MG"
	},
	{
		"id" : 355,
		"nome" : "Canarana",
		"codigo_ibge" : 2906204,
		"sigla" : "BA"
	},
	{
		"id" : 1371,
		"nome" : "Canarana",
		"codigo_ibge" : 5102702,
		"sigla" : "MT"
	},
	{
		"id" : 4819,
		"nome" : "Canas",
		"codigo_ibge" : 3509957,
		"sigla" : "SP"
	},
	{
		"id" : 3415,
		"nome" : "Canavieira",
		"codigo_ibge" : 2202251,
		"sigla" : "PI"
	},
	{
		"id" : 356,
		"nome" : "Canavieiras",
		"codigo_ibge" : 2906303,
		"sigla" : "BA"
	},
	{
		"id" : 357,
		"nome" : "Candeal",
		"codigo_ibge" : 2906402,
		"sigla" : "BA"
	},
	{
		"id" : 358,
		"nome" : "Candeias",
		"codigo_ibge" : 2906501,
		"sigla" : "BA"
	},
	{
		"id" : 1695,
		"nome" : "Candeias",
		"codigo_ibge" : 3112000,
		"sigla" : "MG"
	},
	{
		"id" : 4356,
		"nome" : "Candeias do Jamari",
		"codigo_ibge" : 1100809,
		"sigla" : "RO"
	},
	{
		"id" : 3924,
		"nome" : "Candelária",
		"codigo_ibge" : 4304200,
		"sigla" : "RS"
	},
	{
		"id" : 359,
		"nome" : "Candiba",
		"codigo_ibge" : 2906600,
		"sigla" : "BA"
	},
	{
		"id" : 2846,
		"nome" : "Cândido de Abreu",
		"codigo_ibge" : 4104402,
		"sigla" : "PR"
	},
	{
		"id" : 3925,
		"nome" : "Cândido Godói",
		"codigo_ibge" : 4304309,
		"sigla" : "RS"
	},
	{
		"id" : 1175,
		"nome" : "Cândido Mendes",
		"codigo_ibge" : 2102606,
		"sigla" : "MA"
	},
	{
		"id" : 4820,
		"nome" : "Cândido Mota",
		"codigo_ibge" : 3510005,
		"sigla" : "SP"
	},
	{
		"id" : 4821,
		"nome" : "Cândido Rodrigues",
		"codigo_ibge" : 3510104,
		"sigla" : "SP"
	},
	{
		"id" : 360,
		"nome" : "Cândido Sales",
		"codigo_ibge" : 2906709,
		"sigla" : "BA"
	},
	{
		"id" : 3926,
		"nome" : "Candiota",
		"codigo_ibge" : 4304358,
		"sigla" : "RS"
	},
	{
		"id" : 2847,
		"nome" : "Candói",
		"codigo_ibge" : 4104428,
		"sigla" : "PR"
	},
	{
		"id" : 3927,
		"nome" : "Canela",
		"codigo_ibge" : 4304408,
		"sigla" : "RS"
	},
	{
		"id" : 4469,
		"nome" : "Canelinha",
		"codigo_ibge" : 4203709,
		"sigla" : "SC"
	},
	{
		"id" : 3707,
		"nome" : "Canguaretama",
		"codigo_ibge" : 2402204,
		"sigla" : "RN"
	},
	{
		"id" : 3928,
		"nome" : "Canguçu",
		"codigo_ibge" : 4304507,
		"sigla" : "RS"
	},
	{
		"id" : 5360,
		"nome" : "Canhoba",
		"codigo_ibge" : 2801108,
		"sigla" : "SE"
	},
	{
		"id" : 3222,
		"nome" : "Canhotinho",
		"codigo_ibge" : 2603702,
		"sigla" : "PE"
	},
	{
		"id" : 731,
		"nome" : "Canindé",
		"codigo_ibge" : 2302800,
		"sigla" : "CE"
	},
	{
		"id" : 5361,
		"nome" : "Canindé de São Francisco",
		"codigo_ibge" : 2801207,
		"sigla" : "SE"
	},
	{
		"id" : 4822,
		"nome" : "Canitar",
		"codigo_ibge" : 3510153,
		"sigla" : "SP"
	},
	{
		"id" : 3929,
		"nome" : "Canoas",
		"codigo_ibge" : 4304606,
		"sigla" : "RS"
	},
	{
		"id" : 4470,
		"nome" : "Canoinhas",
		"codigo_ibge" : 4203808,
		"sigla" : "SC"
	},
	{
		"id" : 361,
		"nome" : "Cansanção",
		"codigo_ibge" : 2906808,
		"sigla" : "BA"
	},
	{
		"id" : 4402,
		"nome" : "Cantá",
		"codigo_ibge" : 1400175,
		"sigla" : "RR"
	},
	{
		"id" : 2848,
		"nome" : "Cantagalo",
		"codigo_ibge" : 4104451,
		"sigla" : "PR"
	},
	{
		"id" : 3606,
		"nome" : "Cantagalo",
		"codigo_ibge" : 3301108,
		"sigla" : "RJ"
	},
	{
		"id" : 1696,
		"nome" : "Cantagalo",
		"codigo_ibge" : 3112059,
		"sigla" : "MG"
	},
	{
		"id" : 1176,
		"nome" : "Cantanhede",
		"codigo_ibge" : 2102705,
		"sigla" : "MA"
	},
	{
		"id" : 3416,
		"nome" : "Canto do Buriti",
		"codigo_ibge" : 2202307,
		"sigla" : "PI"
	},
	{
		"id" : 362,
		"nome" : "Canudos",
		"codigo_ibge" : 2906824,
		"sigla" : "BA"
	},
	{
		"id" : 3930,
		"nome" : "Canudos do Vale",
		"codigo_ibge" : 4304614,
		"sigla" : "RS"
	},
	{
		"id" : 234,
		"nome" : "Canutama",
		"codigo_ibge" : 1300904,
		"sigla" : "AM"
	},
	{
		"id" : 2451,
		"nome" : "Capanema",
		"codigo_ibge" : 1502202,
		"sigla" : "PA"
	},
	{
		"id" : 2849,
		"nome" : "Capanema",
		"codigo_ibge" : 4104501,
		"sigla" : "PR"
	},
	{
		"id" : 4471,
		"nome" : "Capão Alto",
		"codigo_ibge" : 4203253,
		"sigla" : "SC"
	},
	{
		"id" : 4823,
		"nome" : "Capão Bonito",
		"codigo_ibge" : 3510203,
		"sigla" : "SP"
	},
	{
		"id" : 3931,
		"nome" : "Capão Bonito do Sul",
		"codigo_ibge" : 4304622,
		"sigla" : "RS"
	},
	{
		"id" : 3932,
		"nome" : "Capão da Canoa",
		"codigo_ibge" : 4304630,
		"sigla" : "RS"
	},
	{
		"id" : 3933,
		"nome" : "Capão do Cipó",
		"codigo_ibge" : 4304655,
		"sigla" : "RS"
	},
	{
		"id" : 3934,
		"nome" : "Capão do Leão",
		"codigo_ibge" : 4304663,
		"sigla" : "RS"
	},
	{
		"id" : 1697,
		"nome" : "Caparaó",
		"codigo_ibge" : 3112109,
		"sigla" : "MG"
	},
	{
		"id" : 118,
		"nome" : "Capela",
		"codigo_ibge" : 2701704,
		"sigla" : "AL"
	},
	{
		"id" : 5362,
		"nome" : "Capela",
		"codigo_ibge" : 2801306,
		"sigla" : "SE"
	},
	{
		"id" : 3935,
		"nome" : "Capela de Santana",
		"codigo_ibge" : 4304689,
		"sigla" : "RS"
	},
	{
		"id" : 4824,
		"nome" : "Capela do Alto",
		"codigo_ibge" : 3510302,
		"sigla" : "SP"
	},
	{
		"id" : 363,
		"nome" : "Capela do Alto Alegre",
		"codigo_ibge" : 2906857,
		"sigla" : "BA"
	},
	{
		"id" : 1698,
		"nome" : "Capela Nova",
		"codigo_ibge" : 3112208,
		"sigla" : "MG"
	},
	{
		"id" : 1699,
		"nome" : "Capelinha",
		"codigo_ibge" : 3112307,
		"sigla" : "MG"
	},
	{
		"id" : 1700,
		"nome" : "Capetinga",
		"codigo_ibge" : 3112406,
		"sigla" : "MG"
	},
	{
		"id" : 2612,
		"nome" : "Capim",
		"codigo_ibge" : 2504033,
		"sigla" : "PB"
	},
	{
		"id" : 1701,
		"nome" : "Capim Branco",
		"codigo_ibge" : 3112505,
		"sigla" : "MG"
	},
	{
		"id" : 364,
		"nome" : "Capim Grosso",
		"codigo_ibge" : 2906873,
		"sigla" : "BA"
	},
	{
		"id" : 1702,
		"nome" : "Capinópolis",
		"codigo_ibge" : 3112604,
		"sigla" : "MG"
	},
	{
		"id" : 4472,
		"nome" : "Capinzal",
		"codigo_ibge" : 4203907,
		"sigla" : "SC"
	},
	{
		"id" : 1177,
		"nome" : "Capinzal do Norte",
		"codigo_ibge" : 2102754,
		"sigla" : "MA"
	},
	{
		"id" : 732,
		"nome" : "Capistrano",
		"codigo_ibge" : 2302909,
		"sigla" : "CE"
	},
	{
		"id" : 3936,
		"nome" : "Capitão",
		"codigo_ibge" : 4304697,
		"sigla" : "RS"
	},
	{
		"id" : 1703,
		"nome" : "Capitão Andrade",
		"codigo_ibge" : 3112653,
		"sigla" : "MG"
	},
	{
		"id" : 3417,
		"nome" : "Capitão de Campos",
		"codigo_ibge" : 2202406,
		"sigla" : "PI"
	},
	{
		"id" : 1704,
		"nome" : "Capitão Enéas",
		"codigo_ibge" : 3112703,
		"sigla" : "MG"
	},
	{
		"id" : 3418,
		"nome" : "Capitão Gervásio Oliveira",
		"codigo_ibge" : 2202455,
		"sigla" : "PI"
	},
	{
		"id" : 2850,
		"nome" : "Capitão Leônidas Marques",
		"codigo_ibge" : 4104600,
		"sigla" : "PR"
	},
	{
		"id" : 2452,
		"nome" : "Capitão Poço",
		"codigo_ibge" : 1502301,
		"sigla" : "PA"
	},
	{
		"id" : 1705,
		"nome" : "Capitólio",
		"codigo_ibge" : 3112802,
		"sigla" : "MG"
	},
	{
		"id" : 4825,
		"nome" : "Capivari",
		"codigo_ibge" : 3510401,
		"sigla" : "SP"
	},
	{
		"id" : 4473,
		"nome" : "Capivari de Baixo",
		"codigo_ibge" : 4203956,
		"sigla" : "SC"
	},
	{
		"id" : 3937,
		"nome" : "Capivari do Sul",
		"codigo_ibge" : 4304671,
		"sigla" : "RS"
	},
	{
		"id" : 83,
		"nome" : "Capixaba",
		"codigo_ibge" : 1200179,
		"sigla" : "AC"
	},
	{
		"id" : 3223,
		"nome" : "Capoeiras",
		"codigo_ibge" : 2603801,
		"sigla" : "PE"
	},
	{
		"id" : 1706,
		"nome" : "Caputira",
		"codigo_ibge" : 3112901,
		"sigla" : "MG"
	},
	{
		"id" : 3938,
		"nome" : "Caraá",
		"codigo_ibge" : 4304713,
		"sigla" : "RS"
	},
	{
		"id" : 4403,
		"nome" : "Caracaraí",
		"codigo_ibge" : 1400209,
		"sigla" : "RR"
	},
	{
		"id" : 1507,
		"nome" : "Caracol",
		"codigo_ibge" : 5002803,
		"sigla" : "MS"
	},
	{
		"id" : 3419,
		"nome" : "Caracol",
		"codigo_ibge" : 2202505,
		"sigla" : "PI"
	},
	{
		"id" : 4826,
		"nome" : "Caraguatatuba",
		"codigo_ibge" : 3510500,
		"sigla" : "SP"
	},
	{
		"id" : 1707,
		"nome" : "Caraí",
		"codigo_ibge" : 3113008,
		"sigla" : "MG"
	},
	{
		"id" : 365,
		"nome" : "Caraíbas",
		"codigo_ibge" : 2906899,
		"sigla" : "BA"
	},
	{
		"id" : 2851,
		"nome" : "Carambeí",
		"codigo_ibge" : 4104659,
		"sigla" : "PR"
	},
	{
		"id" : 1708,
		"nome" : "Caranaíba",
		"codigo_ibge" : 3113107,
		"sigla" : "MG"
	},
	{
		"id" : 1709,
		"nome" : "Carandaí",
		"codigo_ibge" : 3113206,
		"sigla" : "MG"
	},
	{
		"id" : 1710,
		"nome" : "Carangola",
		"codigo_ibge" : 3113305,
		"sigla" : "MG"
	},
	{
		"id" : 3607,
		"nome" : "Carapebus",
		"codigo_ibge" : 3300936,
		"sigla" : "RJ"
	},
	{
		"id" : 4827,
		"nome" : "Carapicuíba",
		"codigo_ibge" : 3510609,
		"sigla" : "SP"
	},
	{
		"id" : 1711,
		"nome" : "Caratinga",
		"codigo_ibge" : 3113404,
		"sigla" : "MG"
	},
	{
		"id" : 235,
		"nome" : "Carauari",
		"codigo_ibge" : 1301001,
		"sigla" : "AM"
	},
	{
		"id" : 2613,
		"nome" : "Caraúbas",
		"codigo_ibge" : 2504074,
		"sigla" : "PB"
	},
	{
		"id" : 3708,
		"nome" : "Caraúbas",
		"codigo_ibge" : 2402303,
		"sigla" : "RN"
	},
	{
		"id" : 3420,
		"nome" : "Caraúbas do Piauí",
		"codigo_ibge" : 2202539,
		"sigla" : "PI"
	},
	{
		"id" : 366,
		"nome" : "Caravelas",
		"codigo_ibge" : 2906907,
		"sigla" : "BA"
	},
	{
		"id" : 3939,
		"nome" : "Carazinho",
		"codigo_ibge" : 4304705,
		"sigla" : "RS"
	},
	{
		"id" : 1712,
		"nome" : "Carbonita",
		"codigo_ibge" : 3113503,
		"sigla" : "MG"
	},
	{
		"id" : 367,
		"nome" : "Cardeal da Silva",
		"codigo_ibge" : 2907004,
		"sigla" : "BA"
	},
	{
		"id" : 4828,
		"nome" : "Cardoso",
		"codigo_ibge" : 3510708,
		"sigla" : "SP"
	},
	{
		"id" : 3608,
		"nome" : "Cardoso Moreira",
		"codigo_ibge" : 3301157,
		"sigla" : "RJ"
	},
	{
		"id" : 1713,
		"nome" : "Careaçu",
		"codigo_ibge" : 3113602,
		"sigla" : "MG"
	},
	{
		"id" : 236,
		"nome" : "Careiro",
		"codigo_ibge" : 1301100,
		"sigla" : "AM"
	},
	{
		"id" : 237,
		"nome" : "Careiro da Várzea",
		"codigo_ibge" : 1301159,
		"sigla" : "AM"
	},
	{
		"id" : 17,
		"nome" : "Cariacica",
		"codigo_ibge" : 3201308,
		"sigla" : "ES"
	},
	{
		"id" : 733,
		"nome" : "Caridade",
		"codigo_ibge" : 2303006,
		"sigla" : "CE"
	},
	{
		"id" : 3421,
		"nome" : "Caridade do Piauí",
		"codigo_ibge" : 2202554,
		"sigla" : "PI"
	},
	{
		"id" : 368,
		"nome" : "Carinhanha",
		"codigo_ibge" : 2907103,
		"sigla" : "BA"
	},
	{
		"id" : 5363,
		"nome" : "Carira",
		"codigo_ibge" : 2801405,
		"sigla" : "SE"
	},
	{
		"id" : 734,
		"nome" : "Cariré",
		"codigo_ibge" : 2303105,
		"sigla" : "CE"
	},
	{
		"id" : 5456,
		"nome" : "Cariri do Tocantins",
		"codigo_ibge" : 1703867,
		"sigla" : "TO"
	},
	{
		"id" : 735,
		"nome" : "Caririaçu",
		"codigo_ibge" : 2303204,
		"sigla" : "CE"
	},
	{
		"id" : 736,
		"nome" : "Cariús",
		"codigo_ibge" : 2303303,
		"sigla" : "CE"
	},
	{
		"id" : 1372,
		"nome" : "Carlinda",
		"codigo_ibge" : 5102793,
		"sigla" : "MT"
	},
	{
		"id" : 2852,
		"nome" : "Carlópolis",
		"codigo_ibge" : 4104709,
		"sigla" : "PR"
	},
	{
		"id" : 3940,
		"nome" : "Carlos Barbosa",
		"codigo_ibge" : 4304804,
		"sigla" : "RS"
	},
	{
		"id" : 1714,
		"nome" : "Carlos Chagas",
		"codigo_ibge" : 3113701,
		"sigla" : "MG"
	},
	{
		"id" : 3941,
		"nome" : "Carlos Gomes",
		"codigo_ibge" : 4304853,
		"sigla" : "RS"
	},
	{
		"id" : 1715,
		"nome" : "Carmésia",
		"codigo_ibge" : 3113800,
		"sigla" : "MG"
	},
	{
		"id" : 3609,
		"nome" : "Carmo",
		"codigo_ibge" : 3301207,
		"sigla" : "RJ"
	},
	{
		"id" : 1716,
		"nome" : "Carmo da Cachoeira",
		"codigo_ibge" : 3113909,
		"sigla" : "MG"
	},
	{
		"id" : 1717,
		"nome" : "Carmo da Mata",
		"codigo_ibge" : 3114006,
		"sigla" : "MG"
	},
	{
		"id" : 1718,
		"nome" : "Carmo de Minas",
		"codigo_ibge" : 3114105,
		"sigla" : "MG"
	},
	{
		"id" : 1719,
		"nome" : "Carmo do Cajuru",
		"codigo_ibge" : 3114204,
		"sigla" : "MG"
	},
	{
		"id" : 1720,
		"nome" : "Carmo do Paranaíba",
		"codigo_ibge" : 3114303,
		"sigla" : "MG"
	},
	{
		"id" : 1721,
		"nome" : "Carmo do Rio Claro",
		"codigo_ibge" : 3114402,
		"sigla" : "MG"
	},
	{
		"id" : 939,
		"nome" : "Carmo do Rio Verde",
		"codigo_ibge" : 5205000,
		"sigla" : "GO"
	},
	{
		"id" : 5457,
		"nome" : "Carmolândia",
		"codigo_ibge" : 1703883,
		"sigla" : "TO"
	},
	{
		"id" : 5364,
		"nome" : "Carmópolis",
		"codigo_ibge" : 2801504,
		"sigla" : "SE"
	},
	{
		"id" : 1722,
		"nome" : "Carmópolis de Minas",
		"codigo_ibge" : 3114501,
		"sigla" : "MG"
	},
	{
		"id" : 3224,
		"nome" : "Carnaíba",
		"codigo_ibge" : 2603900,
		"sigla" : "PE"
	},
	{
		"id" : 3709,
		"nome" : "Carnaúba dos Dantas",
		"codigo_ibge" : 2402402,
		"sigla" : "RN"
	},
	{
		"id" : 3710,
		"nome" : "Carnaubais",
		"codigo_ibge" : 2402501,
		"sigla" : "RN"
	},
	{
		"id" : 737,
		"nome" : "Carnaubal",
		"codigo_ibge" : 2303402,
		"sigla" : "CE"
	},
	{
		"id" : 3225,
		"nome" : "Carnaubeira da Penha",
		"codigo_ibge" : 2603926,
		"sigla" : "PE"
	},
	{
		"id" : 1723,
		"nome" : "Carneirinho",
		"codigo_ibge" : 3114550,
		"sigla" : "MG"
	},
	{
		"id" : 119,
		"nome" : "Carneiros",
		"codigo_ibge" : 2701803,
		"sigla" : "AL"
	},
	{
		"id" : 4404,
		"nome" : "Caroebe",
		"codigo_ibge" : 1400233,
		"sigla" : "RR"
	},
	{
		"id" : 1178,
		"nome" : "Carolina",
		"codigo_ibge" : 2102804,
		"sigla" : "MA"
	},
	{
		"id" : 3226,
		"nome" : "Carpina",
		"codigo_ibge" : 2604007,
		"sigla" : "PE"
	},
	{
		"id" : 1724,
		"nome" : "Carrancas",
		"codigo_ibge" : 3114600,
		"sigla" : "MG"
	},
	{
		"id" : 2614,
		"nome" : "Carrapateira",
		"codigo_ibge" : 2504108,
		"sigla" : "PB"
	},
	{
		"id" : 5458,
		"nome" : "Carrasco Bonito",
		"codigo_ibge" : 1703891,
		"sigla" : "TO"
	},
	{
		"id" : 3227,
		"nome" : "Caruaru",
		"codigo_ibge" : 2604106,
		"sigla" : "PE"
	},
	{
		"id" : 1179,
		"nome" : "Carutapera",
		"codigo_ibge" : 2102903,
		"sigla" : "MA"
	},
	{
		"id" : 1725,
		"nome" : "Carvalhópolis",
		"codigo_ibge" : 3114709,
		"sigla" : "MG"
	},
	{
		"id" : 1726,
		"nome" : "Carvalhos",
		"codigo_ibge" : 3114808,
		"sigla" : "MG"
	},
	{
		"id" : 4829,
		"nome" : "Casa Branca",
		"codigo_ibge" : 3510807,
		"sigla" : "SP"
	},
	{
		"id" : 1727,
		"nome" : "Casa Grande",
		"codigo_ibge" : 3114907,
		"sigla" : "MG"
	},
	{
		"id" : 369,
		"nome" : "Casa Nova",
		"codigo_ibge" : 2907202,
		"sigla" : "BA"
	},
	{
		"id" : 3942,
		"nome" : "Casca",
		"codigo_ibge" : 4304903,
		"sigla" : "RS"
	},
	{
		"id" : 1728,
		"nome" : "Cascalho Rico",
		"codigo_ibge" : 3115003,
		"sigla" : "MG"
	},
	{
		"id" : 738,
		"nome" : "Cascavel",
		"codigo_ibge" : 2303501,
		"sigla" : "CE"
	},
	{
		"id" : 2853,
		"nome" : "Cascavel",
		"codigo_ibge" : 4104808,
		"sigla" : "PR"
	},
	{
		"id" : 5459,
		"nome" : "Caseara",
		"codigo_ibge" : 1703909,
		"sigla" : "TO"
	},
	{
		"id" : 3943,
		"nome" : "Caseiros",
		"codigo_ibge" : 4304952,
		"sigla" : "RS"
	},
	{
		"id" : 3610,
		"nome" : "Casimiro de Abreu",
		"codigo_ibge" : 3301306,
		"sigla" : "RJ"
	},
	{
		"id" : 3228,
		"nome" : "Casinhas",
		"codigo_ibge" : 2604155,
		"sigla" : "PE"
	},
	{
		"id" : 2615,
		"nome" : "Casserengue",
		"codigo_ibge" : 2504157,
		"sigla" : "PB"
	},
	{
		"id" : 1729,
		"nome" : "Cássia",
		"codigo_ibge" : 3115102,
		"sigla" : "MG"
	},
	{
		"id" : 4830,
		"nome" : "Cássia dos Coqueiros",
		"codigo_ibge" : 3510906,
		"sigla" : "SP"
	},
	{
		"id" : 1508,
		"nome" : "Cassilândia",
		"codigo_ibge" : 5002902,
		"sigla" : "MS"
	},
	{
		"id" : 2453,
		"nome" : "Castanhal",
		"codigo_ibge" : 1502400,
		"sigla" : "PA"
	},
	{
		"id" : 1373,
		"nome" : "Castanheira",
		"codigo_ibge" : 5102850,
		"sigla" : "MT"
	},
	{
		"id" : 4357,
		"nome" : "Castanheiras",
		"codigo_ibge" : 1100908,
		"sigla" : "RO"
	},
	{
		"id" : 940,
		"nome" : "Castelândia",
		"codigo_ibge" : 5205059,
		"sigla" : "GO"
	},
	{
		"id" : 18,
		"nome" : "Castelo",
		"codigo_ibge" : 3201407,
		"sigla" : "ES"
	},
	{
		"id" : 3422,
		"nome" : "Castelo do Piauí",
		"codigo_ibge" : 2202604,
		"sigla" : "PI"
	},
	{
		"id" : 4831,
		"nome" : "Castilho",
		"codigo_ibge" : 3511003,
		"sigla" : "SP"
	},
	{
		"id" : 2854,
		"nome" : "Castro",
		"codigo_ibge" : 4104907,
		"sigla" : "PR"
	},
	{
		"id" : 370,
		"nome" : "Castro Alves",
		"codigo_ibge" : 2907301,
		"sigla" : "BA"
	},
	{
		"id" : 1730,
		"nome" : "Cataguases",
		"codigo_ibge" : 3115300,
		"sigla" : "MG"
	},
	{
		"id" : 941,
		"nome" : "Catalão",
		"codigo_ibge" : 5205109,
		"sigla" : "GO"
	},
	{
		"id" : 4832,
		"nome" : "Catanduva",
		"codigo_ibge" : 3511102,
		"sigla" : "SP"
	},
	{
		"id" : 4474,
		"nome" : "Catanduvas",
		"codigo_ibge" : 4204004,
		"sigla" : "SC"
	},
	{
		"id" : 2855,
		"nome" : "Catanduvas",
		"codigo_ibge" : 4105003,
		"sigla" : "PR"
	},
	{
		"id" : 739,
		"nome" : "Catarina",
		"codigo_ibge" : 2303600,
		"sigla" : "CE"
	},
	{
		"id" : 1731,
		"nome" : "Catas Altas",
		"codigo_ibge" : 3115359,
		"sigla" : "MG"
	},
	{
		"id" : 1732,
		"nome" : "Catas Altas da Noruega",
		"codigo_ibge" : 3115409,
		"sigla" : "MG"
	},
	{
		"id" : 3229,
		"nome" : "Catende",
		"codigo_ibge" : 2604205,
		"sigla" : "PE"
	},
	{
		"id" : 4833,
		"nome" : "Catiguá",
		"codigo_ibge" : 3511201,
		"sigla" : "SP"
	},
	{
		"id" : 2616,
		"nome" : "Catingueira",
		"codigo_ibge" : 2504207,
		"sigla" : "PB"
	},
	{
		"id" : 371,
		"nome" : "Catolândia",
		"codigo_ibge" : 2907400,
		"sigla" : "BA"
	},
	{
		"id" : 2617,
		"nome" : "Catolé do Rocha",
		"codigo_ibge" : 2504306,
		"sigla" : "PB"
	},
	{
		"id" : 372,
		"nome" : "Catu",
		"codigo_ibge" : 2907509,
		"sigla" : "BA"
	},
	{
		"id" : 3944,
		"nome" : "Catuípe",
		"codigo_ibge" : 4305009,
		"sigla" : "RS"
	},
	{
		"id" : 1733,
		"nome" : "Catuji",
		"codigo_ibge" : 3115458,
		"sigla" : "MG"
	},
	{
		"id" : 740,
		"nome" : "Catunda",
		"codigo_ibge" : 2303659,
		"sigla" : "CE"
	},
	{
		"id" : 942,
		"nome" : "Caturaí",
		"codigo_ibge" : 5205208,
		"sigla" : "GO"
	},
	{
		"id" : 373,
		"nome" : "Caturama",
		"codigo_ibge" : 2907558,
		"sigla" : "BA"
	},
	{
		"id" : 2618,
		"nome" : "Caturité",
		"codigo_ibge" : 2504355,
		"sigla" : "PB"
	},
	{
		"id" : 1734,
		"nome" : "Catuti",
		"codigo_ibge" : 3115474,
		"sigla" : "MG"
	},
	{
		"id" : 741,
		"nome" : "Caucaia",
		"codigo_ibge" : 2303709,
		"sigla" : "CE"
	},
	{
		"id" : 943,
		"nome" : "Cavalcante",
		"codigo_ibge" : 5205307,
		"sigla" : "GO"
	},
	{
		"id" : 1735,
		"nome" : "Caxambu",
		"codigo_ibge" : 3115508,
		"sigla" : "MG"
	},
	{
		"id" : 4475,
		"nome" : "Caxambu do Sul",
		"codigo_ibge" : 4204103,
		"sigla" : "SC"
	},
	{
		"id" : 1180,
		"nome" : "Caxias",
		"codigo_ibge" : 2103000,
		"sigla" : "MA"
	},
	{
		"id" : 3945,
		"nome" : "Caxias do Sul",
		"codigo_ibge" : 4305108,
		"sigla" : "RS"
	},
	{
		"id" : 3423,
		"nome" : "Caxingó",
		"codigo_ibge" : 2202653,
		"sigla" : "PI"
	},
	{
		"id" : 3711,
		"nome" : "Ceará Mirim",
		"codigo_ibge" : 2402600,
		"sigla" : "RN"
	},
	{
		"id" : 4834,
		"nome" : "Cedral",
		"codigo_ibge" : 3511300,
		"sigla" : "SP"
	},
	{
		"id" : 1181,
		"nome" : "Cedral",
		"codigo_ibge" : 2103109,
		"sigla" : "MA"
	},
	{
		"id" : 742,
		"nome" : "Cedro",
		"codigo_ibge" : 2303808,
		"sigla" : "CE"
	},
	{
		"id" : 3230,
		"nome" : "Cedro",
		"codigo_ibge" : 2604304,
		"sigla" : "PE"
	},
	{
		"id" : 5365,
		"nome" : "Cedro de São João",
		"codigo_ibge" : 2801603,
		"sigla" : "SE"
	},
	{
		"id" : 1736,
		"nome" : "Cedro do Abaeté",
		"codigo_ibge" : 3115607,
		"sigla" : "MG"
	},
	{
		"id" : 4476,
		"nome" : "Celso Ramos",
		"codigo_ibge" : 4204152,
		"sigla" : "SC"
	},
	{
		"id" : 3946,
		"nome" : "Centenário",
		"codigo_ibge" : 4305116,
		"sigla" : "RS"
	},
	{
		"id" : 5460,
		"nome" : "Centenário",
		"codigo_ibge" : 1704105,
		"sigla" : "TO"
	},
	{
		"id" : 2856,
		"nome" : "Centenário do Sul",
		"codigo_ibge" : 4105102,
		"sigla" : "PR"
	},
	{
		"id" : 374,
		"nome" : "Central",
		"codigo_ibge" : 2907608,
		"sigla" : "BA"
	},
	{
		"id" : 1737,
		"nome" : "Central de Minas",
		"codigo_ibge" : 3115706,
		"sigla" : "MG"
	},
	{
		"id" : 1182,
		"nome" : "Central do Maranhão",
		"codigo_ibge" : 2103125,
		"sigla" : "MA"
	},
	{
		"id" : 1738,
		"nome" : "Centralina",
		"codigo_ibge" : 3115805,
		"sigla" : "MG"
	},
	{
		"id" : 1183,
		"nome" : "Centro do Guilherme",
		"codigo_ibge" : 2103158,
		"sigla" : "MA"
	},
	{
		"id" : 1184,
		"nome" : "Centro Novo do Maranhão",
		"codigo_ibge" : 2103174,
		"sigla" : "MA"
	},
	{
		"id" : 4358,
		"nome" : "Cerejeiras",
		"codigo_ibge" : 1100056,
		"sigla" : "RO"
	},
	{
		"id" : 944,
		"nome" : "Ceres",
		"codigo_ibge" : 5205406,
		"sigla" : "GO"
	},
	{
		"id" : 4835,
		"nome" : "Cerqueira César",
		"codigo_ibge" : 3511409,
		"sigla" : "SP"
	},
	{
		"id" : 4836,
		"nome" : "Cerquilho",
		"codigo_ibge" : 3511508,
		"sigla" : "SP"
	},
	{
		"id" : 3947,
		"nome" : "Cerrito",
		"codigo_ibge" : 4305124,
		"sigla" : "RS"
	},
	{
		"id" : 2857,
		"nome" : "Cerro Azul",
		"codigo_ibge" : 4105201,
		"sigla" : "PR"
	},
	{
		"id" : 3948,
		"nome" : "Cerro Branco",
		"codigo_ibge" : 4305132,
		"sigla" : "RS"
	},
	{
		"id" : 3712,
		"nome" : "Cerro Corá",
		"codigo_ibge" : 2402709,
		"sigla" : "RN"
	},
	{
		"id" : 3949,
		"nome" : "Cerro Grande",
		"codigo_ibge" : 4305157,
		"sigla" : "RS"
	},
	{
		"id" : 3950,
		"nome" : "Cerro Grande do Sul",
		"codigo_ibge" : 4305173,
		"sigla" : "RS"
	},
	{
		"id" : 3951,
		"nome" : "Cerro Largo",
		"codigo_ibge" : 4305207,
		"sigla" : "RS"
	},
	{
		"id" : 4477,
		"nome" : "Cerro Negro",
		"codigo_ibge" : 4204178,
		"sigla" : "SC"
	},
	{
		"id" : 4837,
		"nome" : "Cesário Lange",
		"codigo_ibge" : 3511607,
		"sigla" : "SP"
	},
	{
		"id" : 2858,
		"nome" : "Céu Azul",
		"codigo_ibge" : 4105300,
		"sigla" : "PR"
	},
	{
		"id" : 945,
		"nome" : "Cezarina",
		"codigo_ibge" : 5205455,
		"sigla" : "GO"
	},
	{
		"id" : 3231,
		"nome" : "Chã de Alegria",
		"codigo_ibge" : 2604403,
		"sigla" : "PE"
	},
	{
		"id" : 3232,
		"nome" : "Chã Grande",
		"codigo_ibge" : 2604502,
		"sigla" : "PE"
	},
	{
		"id" : 120,
		"nome" : "Chã Preta",
		"codigo_ibge" : 2701902,
		"sigla" : "AL"
	},
	{
		"id" : 1739,
		"nome" : "Chácara",
		"codigo_ibge" : 3115904,
		"sigla" : "MG"
	},
	{
		"id" : 1740,
		"nome" : "Chalé",
		"codigo_ibge" : 3116001,
		"sigla" : "MG"
	},
	{
		"id" : 3952,
		"nome" : "Chapada",
		"codigo_ibge" : 4305306,
		"sigla" : "RS"
	},
	{
		"id" : 5461,
		"nome" : "Chapada da Natividade",
		"codigo_ibge" : 1705102,
		"sigla" : "TO"
	},
	{
		"id" : 5462,
		"nome" : "Chapada de Areia",
		"codigo_ibge" : 1704600,
		"sigla" : "TO"
	},
	{
		"id" : 1741,
		"nome" : "Chapada do Norte",
		"codigo_ibge" : 3116100,
		"sigla" : "MG"
	},
	{
		"id" : 1374,
		"nome" : "Chapada dos Guimarães",
		"codigo_ibge" : 5103007,
		"sigla" : "MT"
	},
	{
		"id" : 1742,
		"nome" : "Chapada Gaúcha",
		"codigo_ibge" : 3116159,
		"sigla" : "MG"
	},
	{
		"id" : 946,
		"nome" : "Chapadão do Céu",
		"codigo_ibge" : 5205471,
		"sigla" : "GO"
	},
	{
		"id" : 4478,
		"nome" : "Chapadão do Lageado",
		"codigo_ibge" : 4204194,
		"sigla" : "SC"
	},
	{
		"id" : 1509,
		"nome" : "Chapadão do Sul",
		"codigo_ibge" : 5002951,
		"sigla" : "MS"
	},
	{
		"id" : 1185,
		"nome" : "Chapadinha",
		"codigo_ibge" : 2103208,
		"sigla" : "MA"
	},
	{
		"id" : 4479,
		"nome" : "Chapecó",
		"codigo_ibge" : 4204202,
		"sigla" : "SC"
	},
	{
		"id" : 4838,
		"nome" : "Charqueada",
		"codigo_ibge" : 3511706,
		"sigla" : "SP"
	},
	{
		"id" : 3953,
		"nome" : "Charqueadas",
		"codigo_ibge" : 4305355,
		"sigla" : "RS"
	},
	{
		"id" : 3954,
		"nome" : "Charrua",
		"codigo_ibge" : 4305371,
		"sigla" : "RS"
	},
	{
		"id" : 743,
		"nome" : "Chaval",
		"codigo_ibge" : 2303907,
		"sigla" : "CE"
	},
	{
		"id" : 4839,
		"nome" : "Chavantes",
		"codigo_ibge" : 3557204,
		"sigla" : "SP"
	},
	{
		"id" : 2454,
		"nome" : "Chaves",
		"codigo_ibge" : 1502509,
		"sigla" : "PA"
	},
	{
		"id" : 1743,
		"nome" : "Chiador",
		"codigo_ibge" : 3116209,
		"sigla" : "MG"
	},
	{
		"id" : 3955,
		"nome" : "Chiapetta",
		"codigo_ibge" : 4305405,
		"sigla" : "RS"
	},
	{
		"id" : 2859,
		"nome" : "Chopinzinho",
		"codigo_ibge" : 4105409,
		"sigla" : "PR"
	},
	{
		"id" : 744,
		"nome" : "Choró",
		"codigo_ibge" : 2303931,
		"sigla" : "CE"
	},
	{
		"id" : 745,
		"nome" : "Chorozinho",
		"codigo_ibge" : 2303956,
		"sigla" : "CE"
	},
	{
		"id" : 375,
		"nome" : "Chorrochó",
		"codigo_ibge" : 2907707,
		"sigla" : "BA"
	},
	{
		"id" : 3956,
		"nome" : "Chuí",
		"codigo_ibge" : 4305439,
		"sigla" : "RS"
	},
	{
		"id" : 4359,
		"nome" : "Chupinguaia",
		"codigo_ibge" : 1100924,
		"sigla" : "RO"
	},
	{
		"id" : 3957,
		"nome" : "Chuvisca",
		"codigo_ibge" : 4305447,
		"sigla" : "RS"
	},
	{
		"id" : 2860,
		"nome" : "Cianorte",
		"codigo_ibge" : 4105508,
		"sigla" : "PR"
	},
	{
		"id" : 376,
		"nome" : "Cícero Dantas",
		"codigo_ibge" : 2907806,
		"sigla" : "BA"
	},
	{
		"id" : 2861,
		"nome" : "Cidade Gaúcha",
		"codigo_ibge" : 4105607,
		"sigla" : "PR"
	},
	{
		"id" : 947,
		"nome" : "Cidade Ocidental",
		"codigo_ibge" : 5205497,
		"sigla" : "GO"
	},
	{
		"id" : 1186,
		"nome" : "Cidelândia",
		"codigo_ibge" : 2103257,
		"sigla" : "MA"
	},
	{
		"id" : 3958,
		"nome" : "Cidreira",
		"codigo_ibge" : 4305454,
		"sigla" : "RS"
	},
	{
		"id" : 377,
		"nome" : "Cipó",
		"codigo_ibge" : 2907905,
		"sigla" : "BA"
	},
	{
		"id" : 1744,
		"nome" : "Cipotânea",
		"codigo_ibge" : 3116308,
		"sigla" : "MG"
	},
	{
		"id" : 3959,
		"nome" : "Ciríaco",
		"codigo_ibge" : 4305504,
		"sigla" : "RS"
	},
	{
		"id" : 1745,
		"nome" : "Claraval",
		"codigo_ibge" : 3116407,
		"sigla" : "MG"
	},
	{
		"id" : 1746,
		"nome" : "Claro dos Poções",
		"codigo_ibge" : 3116506,
		"sigla" : "MG"
	},
	{
		"id" : 1375,
		"nome" : "Cláudia",
		"codigo_ibge" : 5103056,
		"sigla" : "MT"
	},
	{
		"id" : 1747,
		"nome" : "Cláudio",
		"codigo_ibge" : 3116605,
		"sigla" : "MG"
	},
	{
		"id" : 4840,
		"nome" : "Clementina",
		"codigo_ibge" : 3511904,
		"sigla" : "SP"
	},
	{
		"id" : 2862,
		"nome" : "Clevelândia",
		"codigo_ibge" : 4105706,
		"sigla" : "PR"
	},
	{
		"id" : 378,
		"nome" : "Coaraci",
		"codigo_ibge" : 2908002,
		"sigla" : "BA"
	},
	{
		"id" : 238,
		"nome" : "Coari",
		"codigo_ibge" : 1301209,
		"sigla" : "AM"
	},
	{
		"id" : 3424,
		"nome" : "Cocal",
		"codigo_ibge" : 2202703,
		"sigla" : "PI"
	},
	{
		"id" : 3425,
		"nome" : "Cocal de Telha",
		"codigo_ibge" : 2202711,
		"sigla" : "PI"
	},
	{
		"id" : 4480,
		"nome" : "Cocal do Sul",
		"codigo_ibge" : 4204251,
		"sigla" : "SC"
	},
	{
		"id" : 3426,
		"nome" : "Cocal dos Alves",
		"codigo_ibge" : 2202729,
		"sigla" : "PI"
	},
	{
		"id" : 1376,
		"nome" : "Cocalinho",
		"codigo_ibge" : 5103106,
		"sigla" : "MT"
	},
	{
		"id" : 948,
		"nome" : "Cocalzinho de Goiás",
		"codigo_ibge" : 5205513,
		"sigla" : "GO"
	},
	{
		"id" : 379,
		"nome" : "Cocos",
		"codigo_ibge" : 2908101,
		"sigla" : "BA"
	},
	{
		"id" : 239,
		"nome" : "Codajás",
		"codigo_ibge" : 1301308,
		"sigla" : "AM"
	},
	{
		"id" : 1187,
		"nome" : "Codó",
		"codigo_ibge" : 2103307,
		"sigla" : "MA"
	},
	{
		"id" : 1188,
		"nome" : "Coelho Neto",
		"codigo_ibge" : 2103406,
		"sigla" : "MA"
	},
	{
		"id" : 1748,
		"nome" : "Coimbra",
		"codigo_ibge" : 3116704,
		"sigla" : "MG"
	},
	{
		"id" : 121,
		"nome" : "Coité do Nóia",
		"codigo_ibge" : 2702009,
		"sigla" : "AL"
	},
	{
		"id" : 3427,
		"nome" : "Coivaras",
		"codigo_ibge" : 2202737,
		"sigla" : "PI"
	},
	{
		"id" : 2455,
		"nome" : "Colares",
		"codigo_ibge" : 1502608,
		"sigla" : "PA"
	},
	{
		"id" : 19,
		"nome" : "Colatina",
		"codigo_ibge" : 3201506,
		"sigla" : "ES"
	},
	{
		"id" : 1377,
		"nome" : "Colíder",
		"codigo_ibge" : 5103205,
		"sigla" : "MT"
	},
	{
		"id" : 4841,
		"nome" : "Colina",
		"codigo_ibge" : 3512001,
		"sigla" : "SP"
	},
	{
		"id" : 3960,
		"nome" : "Colinas",
		"codigo_ibge" : 4305587,
		"sigla" : "RS"
	},
	{
		"id" : 1189,
		"nome" : "Colinas",
		"codigo_ibge" : 2103505,
		"sigla" : "MA"
	},
	{
		"id" : 949,
		"nome" : "Colinas do Sul",
		"codigo_ibge" : 5205521,
		"sigla" : "GO"
	},
	{
		"id" : 5463,
		"nome" : "Colinas do Tocantins",
		"codigo_ibge" : 1705508,
		"sigla" : "TO"
	},
	{
		"id" : 5464,
		"nome" : "Colméia",
		"codigo_ibge" : 1716703,
		"sigla" : "TO"
	},
	{
		"id" : 1378,
		"nome" : "Colniza",
		"codigo_ibge" : 5103254,
		"sigla" : "MT"
	},
	{
		"id" : 4842,
		"nome" : "Colômbia",
		"codigo_ibge" : 3512100,
		"sigla" : "SP"
	},
	{
		"id" : 2863,
		"nome" : "Colombo",
		"codigo_ibge" : 4105805,
		"sigla" : "PR"
	},
	{
		"id" : 3428,
		"nome" : "Colônia do Gurguéia",
		"codigo_ibge" : 2202752,
		"sigla" : "PI"
	},
	{
		"id" : 3429,
		"nome" : "Colônia do Piauí",
		"codigo_ibge" : 2202778,
		"sigla" : "PI"
	},
	{
		"id" : 122,
		"nome" : "Colônia Leopoldina",
		"codigo_ibge" : 2702108,
		"sigla" : "AL"
	},
	{
		"id" : 2864,
		"nome" : "Colorado",
		"codigo_ibge" : 4105904,
		"sigla" : "PR"
	},
	{
		"id" : 3961,
		"nome" : "Colorado",
		"codigo_ibge" : 4305603,
		"sigla" : "RS"
	},
	{
		"id" : 4360,
		"nome" : "Colorado do Oeste",
		"codigo_ibge" : 1100064,
		"sigla" : "RO"
	},
	{
		"id" : 1749,
		"nome" : "Coluna",
		"codigo_ibge" : 3116803,
		"sigla" : "MG"
	},
	{
		"id" : 5465,
		"nome" : "Combinado",
		"codigo_ibge" : 1705557,
		"sigla" : "TO"
	},
	{
		"id" : 1750,
		"nome" : "Comendador Gomes",
		"codigo_ibge" : 3116902,
		"sigla" : "MG"
	},
	{
		"id" : 3611,
		"nome" : "Comendador Levy Gasparian",
		"codigo_ibge" : 3300951,
		"sigla" : "RJ"
	},
	{
		"id" : 1751,
		"nome" : "Comercinho",
		"codigo_ibge" : 3117009,
		"sigla" : "MG"
	},
	{
		"id" : 1379,
		"nome" : "Comodoro",
		"codigo_ibge" : 5103304,
		"sigla" : "MT"
	},
	{
		"id" : 2619,
		"nome" : "Conceição",
		"codigo_ibge" : 2504405,
		"sigla" : "PB"
	},
	{
		"id" : 1752,
		"nome" : "Conceição da Aparecida",
		"codigo_ibge" : 3117108,
		"sigla" : "MG"
	},
	{
		"id" : 20,
		"nome" : "Conceição da Barra",
		"codigo_ibge" : 3201605,
		"sigla" : "ES"
	},
	{
		"id" : 1753,
		"nome" : "Conceição da Barra de Minas",
		"codigo_ibge" : 3115201,
		"sigla" : "MG"
	},
	{
		"id" : 380,
		"nome" : "Conceição da Feira",
		"codigo_ibge" : 2908200,
		"sigla" : "BA"
	},
	{
		"id" : 1754,
		"nome" : "Conceição das Alagoas",
		"codigo_ibge" : 3117306,
		"sigla" : "MG"
	},
	{
		"id" : 1755,
		"nome" : "Conceição das Pedras",
		"codigo_ibge" : 3117207,
		"sigla" : "MG"
	},
	{
		"id" : 1756,
		"nome" : "Conceição de Ipanema",
		"codigo_ibge" : 3117405,
		"sigla" : "MG"
	},
	{
		"id" : 3612,
		"nome" : "Conceição de Macabu",
		"codigo_ibge" : 3301405,
		"sigla" : "RJ"
	},
	{
		"id" : 381,
		"nome" : "Conceição do Almeida",
		"codigo_ibge" : 2908309,
		"sigla" : "BA"
	},
	{
		"id" : 2456,
		"nome" : "Conceição do Araguaia",
		"codigo_ibge" : 1502707,
		"sigla" : "PA"
	},
	{
		"id" : 3430,
		"nome" : "Conceição do Canindé",
		"codigo_ibge" : 2202802,
		"sigla" : "PI"
	},
	{
		"id" : 21,
		"nome" : "Conceição do Castelo",
		"codigo_ibge" : 3201704,
		"sigla" : "ES"
	},
	{
		"id" : 382,
		"nome" : "Conceição do Coité",
		"codigo_ibge" : 2908408,
		"sigla" : "BA"
	},
	{
		"id" : 383,
		"nome" : "Conceição do Jacuípe",
		"codigo_ibge" : 2908507,
		"sigla" : "BA"
	},
	{
		"id" : 1190,
		"nome" : "Conceição do Lago Açu",
		"codigo_ibge" : 2103554,
		"sigla" : "MA"
	},
	{
		"id" : 1757,
		"nome" : "Conceição do Mato Dentro",
		"codigo_ibge" : 3117504,
		"sigla" : "MG"
	},
	{
		"id" : 1758,
		"nome" : "Conceição do Pará",
		"codigo_ibge" : 3117603,
		"sigla" : "MG"
	},
	{
		"id" : 1759,
		"nome" : "Conceição do Rio Verde",
		"codigo_ibge" : 3117702,
		"sigla" : "MG"
	},
	{
		"id" : 5466,
		"nome" : "Conceição do Tocantins",
		"codigo_ibge" : 1705607,
		"sigla" : "TO"
	},
	{
		"id" : 1760,
		"nome" : "Conceição dos Ouros",
		"codigo_ibge" : 3117801,
		"sigla" : "MG"
	},
	{
		"id" : 4843,
		"nome" : "Conchal",
		"codigo_ibge" : 3512209,
		"sigla" : "SP"
	},
	{
		"id" : 4844,
		"nome" : "Conchas",
		"codigo_ibge" : 3512308,
		"sigla" : "SP"
	},
	{
		"id" : 4481,
		"nome" : "Concórdia",
		"codigo_ibge" : 4204301,
		"sigla" : "SC"
	},
	{
		"id" : 2457,
		"nome" : "Concórdia do Pará",
		"codigo_ibge" : 1502756,
		"sigla" : "PA"
	},
	{
		"id" : 2620,
		"nome" : "Condado",
		"codigo_ibge" : 2504504,
		"sigla" : "PB"
	},
	{
		"id" : 3233,
		"nome" : "Condado",
		"codigo_ibge" : 2604601,
		"sigla" : "PE"
	},
	{
		"id" : 2621,
		"nome" : "Conde",
		"codigo_ibge" : 2504603,
		"sigla" : "PB"
	},
	{
		"id" : 384,
		"nome" : "Conde",
		"codigo_ibge" : 2908606,
		"sigla" : "BA"
	},
	{
		"id" : 385,
		"nome" : "Condeúba",
		"codigo_ibge" : 2908705,
		"sigla" : "BA"
	},
	{
		"id" : 3962,
		"nome" : "Condor",
		"codigo_ibge" : 4305702,
		"sigla" : "RS"
	},
	{
		"id" : 1761,
		"nome" : "Cônego Marinho",
		"codigo_ibge" : 3117836,
		"sigla" : "MG"
	},
	{
		"id" : 1762,
		"nome" : "Confins",
		"codigo_ibge" : 3117876,
		"sigla" : "MG"
	},
	{
		"id" : 1380,
		"nome" : "Confresa",
		"codigo_ibge" : 5103353,
		"sigla" : "MT"
	},
	{
		"id" : 2622,
		"nome" : "Congo",
		"codigo_ibge" : 2504702,
		"sigla" : "PB"
	},
	{
		"id" : 1763,
		"nome" : "Congonhal",
		"codigo_ibge" : 3117900,
		"sigla" : "MG"
	},
	{
		"id" : 1764,
		"nome" : "Congonhas",
		"codigo_ibge" : 3118007,
		"sigla" : "MG"
	},
	{
		"id" : 1765,
		"nome" : "Congonhas do Norte",
		"codigo_ibge" : 3118106,
		"sigla" : "MG"
	},
	{
		"id" : 2865,
		"nome" : "Congonhinhas",
		"codigo_ibge" : 4106001,
		"sigla" : "PR"
	},
	{
		"id" : 1766,
		"nome" : "Conquista",
		"codigo_ibge" : 3118205,
		"sigla" : "MG"
	},
	{
		"id" : 1381,
		"nome" : "Conquista d Oeste",
		"codigo_ibge" : 5103361,
		"sigla" : "MT"
	},
	{
		"id" : 1767,
		"nome" : "Conselheiro Lafaiete",
		"codigo_ibge" : 3118304,
		"sigla" : "MG"
	},
	{
		"id" : 2866,
		"nome" : "Conselheiro Mairinck",
		"codigo_ibge" : 4106100,
		"sigla" : "PR"
	},
	{
		"id" : 1768,
		"nome" : "Conselheiro Pena",
		"codigo_ibge" : 3118403,
		"sigla" : "MG"
	},
	{
		"id" : 1769,
		"nome" : "Consolação",
		"codigo_ibge" : 3118502,
		"sigla" : "MG"
	},
	{
		"id" : 3963,
		"nome" : "Constantina",
		"codigo_ibge" : 4305801,
		"sigla" : "RS"
	},
	{
		"id" : 1770,
		"nome" : "Contagem",
		"codigo_ibge" : 3118601,
		"sigla" : "MG"
	},
	{
		"id" : 2867,
		"nome" : "Contenda",
		"codigo_ibge" : 4106209,
		"sigla" : "PR"
	},
	{
		"id" : 386,
		"nome" : "Contendas do Sincorá",
		"codigo_ibge" : 2908804,
		"sigla" : "BA"
	},
	{
		"id" : 1771,
		"nome" : "Coqueiral",
		"codigo_ibge" : 3118700,
		"sigla" : "MG"
	},
	{
		"id" : 3964,
		"nome" : "Coqueiro Baixo",
		"codigo_ibge" : 4305835,
		"sigla" : "RS"
	},
	{
		"id" : 123,
		"nome" : "Coqueiro Seco",
		"codigo_ibge" : 2702207,
		"sigla" : "AL"
	},
	{
		"id" : 3965,
		"nome" : "Coqueiros do Sul",
		"codigo_ibge" : 4305850,
		"sigla" : "RS"
	},
	{
		"id" : 1772,
		"nome" : "Coração de Jesus",
		"codigo_ibge" : 3118809,
		"sigla" : "MG"
	},
	{
		"id" : 387,
		"nome" : "Coração de Maria",
		"codigo_ibge" : 2908903,
		"sigla" : "BA"
	},
	{
		"id" : 2868,
		"nome" : "Corbélia",
		"codigo_ibge" : 4106308,
		"sigla" : "PR"
	},
	{
		"id" : 3613,
		"nome" : "Cordeiro",
		"codigo_ibge" : 3301504,
		"sigla" : "RJ"
	},
	{
		"id" : 4845,
		"nome" : "Cordeirópolis",
		"codigo_ibge" : 3512407,
		"sigla" : "SP"
	},
	{
		"id" : 388,
		"nome" : "Cordeiros",
		"codigo_ibge" : 2909000,
		"sigla" : "BA"
	},
	{
		"id" : 4482,
		"nome" : "Cordilheira Alta",
		"codigo_ibge" : 4204350,
		"sigla" : "SC"
	},
	{
		"id" : 1773,
		"nome" : "Cordisburgo",
		"codigo_ibge" : 3118908,
		"sigla" : "MG"
	},
	{
		"id" : 1774,
		"nome" : "Cordislândia",
		"codigo_ibge" : 3119005,
		"sigla" : "MG"
	},
	{
		"id" : 746,
		"nome" : "Coreaú",
		"codigo_ibge" : 2304004,
		"sigla" : "CE"
	},
	{
		"id" : 2623,
		"nome" : "Coremas",
		"codigo_ibge" : 2504801,
		"sigla" : "PB"
	},
	{
		"id" : 1510,
		"nome" : "Corguinho",
		"codigo_ibge" : 5003108,
		"sigla" : "MS"
	},
	{
		"id" : 389,
		"nome" : "Coribe",
		"codigo_ibge" : 2909109,
		"sigla" : "BA"
	},
	{
		"id" : 1775,
		"nome" : "Corinto",
		"codigo_ibge" : 3119104,
		"sigla" : "MG"
	},
	{
		"id" : 2869,
		"nome" : "Cornélio Procópio",
		"codigo_ibge" : 4106407,
		"sigla" : "PR"
	},
	{
		"id" : 1776,
		"nome" : "Coroaci",
		"codigo_ibge" : 3119203,
		"sigla" : "MG"
	},
	{
		"id" : 4846,
		"nome" : "Coroados",
		"codigo_ibge" : 3512506,
		"sigla" : "SP"
	},
	{
		"id" : 1191,
		"nome" : "Coroatá",
		"codigo_ibge" : 2103604,
		"sigla" : "MA"
	},
	{
		"id" : 1777,
		"nome" : "Coromandel",
		"codigo_ibge" : 3119302,
		"sigla" : "MG"
	},
	{
		"id" : 3966,
		"nome" : "Coronel Barros",
		"codigo_ibge" : 4305871,
		"sigla" : "RS"
	},
	{
		"id" : 3967,
		"nome" : "Coronel Bicaco",
		"codigo_ibge" : 4305900,
		"sigla" : "RS"
	},
	{
		"id" : 2870,
		"nome" : "Coronel Domingos Soares",
		"codigo_ibge" : 4106456,
		"sigla" : "PR"
	},
	{
		"id" : 3713,
		"nome" : "Coronel Ezequiel",
		"codigo_ibge" : 2402808,
		"sigla" : "RN"
	},
	{
		"id" : 1778,
		"nome" : "Coronel Fabriciano",
		"codigo_ibge" : 3119401,
		"sigla" : "MG"
	},
	{
		"id" : 4483,
		"nome" : "Coronel Freitas",
		"codigo_ibge" : 4204400,
		"sigla" : "SC"
	},
	{
		"id" : 3714,
		"nome" : "Coronel João Pessoa",
		"codigo_ibge" : 2402907,
		"sigla" : "RN"
	},
	{
		"id" : 390,
		"nome" : "Coronel João Sá",
		"codigo_ibge" : 2909208,
		"sigla" : "BA"
	},
	{
		"id" : 3431,
		"nome" : "Coronel José Dias",
		"codigo_ibge" : 2202851,
		"sigla" : "PI"
	},
	{
		"id" : 4847,
		"nome" : "Coronel Macedo",
		"codigo_ibge" : 3512605,
		"sigla" : "SP"
	},
	{
		"id" : 4484,
		"nome" : "Coronel Martins",
		"codigo_ibge" : 4204459,
		"sigla" : "SC"
	},
	{
		"id" : 1779,
		"nome" : "Coronel Murta",
		"codigo_ibge" : 3119500,
		"sigla" : "MG"
	},
	{
		"id" : 1780,
		"nome" : "Coronel Pacheco",
		"codigo_ibge" : 3119609,
		"sigla" : "MG"
	},
	{
		"id" : 3968,
		"nome" : "Coronel Pilar",
		"codigo_ibge" : 4305934,
		"sigla" : "RS"
	},
	{
		"id" : 1511,
		"nome" : "Coronel Sapucaia",
		"codigo_ibge" : 5003157,
		"sigla" : "MS"
	},
	{
		"id" : 2871,
		"nome" : "Coronel Vivida",
		"codigo_ibge" : 4106506,
		"sigla" : "PR"
	},
	{
		"id" : 1781,
		"nome" : "Coronel Xavier Chaves",
		"codigo_ibge" : 3119708,
		"sigla" : "MG"
	},
	{
		"id" : 1782,
		"nome" : "Córrego Danta",
		"codigo_ibge" : 3119807,
		"sigla" : "MG"
	},
	{
		"id" : 1783,
		"nome" : "Córrego do Bom Jesus",
		"codigo_ibge" : 3119906,
		"sigla" : "MG"
	},
	{
		"id" : 950,
		"nome" : "Córrego do Ouro",
		"codigo_ibge" : 5205703,
		"sigla" : "GO"
	},
	{
		"id" : 1784,
		"nome" : "Córrego Fundo",
		"codigo_ibge" : 3119955,
		"sigla" : "MG"
	},
	{
		"id" : 1785,
		"nome" : "Córrego Novo",
		"codigo_ibge" : 3120003,
		"sigla" : "MG"
	},
	{
		"id" : 4485,
		"nome" : "Correia Pinto",
		"codigo_ibge" : 4204558,
		"sigla" : "SC"
	},
	{
		"id" : 3432,
		"nome" : "Corrente",
		"codigo_ibge" : 2202901,
		"sigla" : "PI"
	},
	{
		"id" : 3234,
		"nome" : "Correntes",
		"codigo_ibge" : 2604700,
		"sigla" : "PE"
	},
	{
		"id" : 391,
		"nome" : "Correntina",
		"codigo_ibge" : 2909307,
		"sigla" : "BA"
	},
	{
		"id" : 3235,
		"nome" : "Cortês",
		"codigo_ibge" : 2604809,
		"sigla" : "PE"
	},
	{
		"id" : 1512,
		"nome" : "Corumbá",
		"codigo_ibge" : 5003207,
		"sigla" : "MS"
	},
	{
		"id" : 951,
		"nome" : "Corumbá de Goiás",
		"codigo_ibge" : 5205802,
		"sigla" : "GO"
	},
	{
		"id" : 952,
		"nome" : "Corumbaíba",
		"codigo_ibge" : 5205901,
		"sigla" : "GO"
	},
	{
		"id" : 4848,
		"nome" : "Corumbataí",
		"codigo_ibge" : 3512704,
		"sigla" : "SP"
	},
	{
		"id" : 2872,
		"nome" : "Corumbataí do Sul",
		"codigo_ibge" : 4106555,
		"sigla" : "PR"
	},
	{
		"id" : 4361,
		"nome" : "Corumbiara",
		"codigo_ibge" : 1100072,
		"sigla" : "RO"
	},
	{
		"id" : 4486,
		"nome" : "Corupá",
		"codigo_ibge" : 4204509,
		"sigla" : "SC"
	},
	{
		"id" : 124,
		"nome" : "Coruripe",
		"codigo_ibge" : 2702306,
		"sigla" : "AL"
	},
	{
		"id" : 4849,
		"nome" : "Cosmópolis",
		"codigo_ibge" : 3512803,
		"sigla" : "SP"
	},
	{
		"id" : 4850,
		"nome" : "Cosmorama",
		"codigo_ibge" : 3512902,
		"sigla" : "SP"
	},
	{
		"id" : 4362,
		"nome" : "Costa Marques",
		"codigo_ibge" : 1100080,
		"sigla" : "RO"
	},
	{
		"id" : 1513,
		"nome" : "Costa Rica",
		"codigo_ibge" : 5003256,
		"sigla" : "MS"
	},
	{
		"id" : 392,
		"nome" : "Cotegipe",
		"codigo_ibge" : 2909406,
		"sigla" : "BA"
	},
	{
		"id" : 4851,
		"nome" : "Cotia",
		"codigo_ibge" : 3513009,
		"sigla" : "SP"
	},
	{
		"id" : 3969,
		"nome" : "Cotiporã",
		"codigo_ibge" : 4305959,
		"sigla" : "RS"
	},
	{
		"id" : 1382,
		"nome" : "Cotriguaçu",
		"codigo_ibge" : 5103379,
		"sigla" : "MT"
	},
	{
		"id" : 1786,
		"nome" : "Couto de Magalhães de Minas",
		"codigo_ibge" : 3120102,
		"sigla" : "MG"
	},
	{
		"id" : 5467,
		"nome" : "Couto Magalhães",
		"codigo_ibge" : 1706001,
		"sigla" : "TO"
	},
	{
		"id" : 3970,
		"nome" : "Coxilha",
		"codigo_ibge" : 4305975,
		"sigla" : "RS"
	},
	{
		"id" : 1514,
		"nome" : "Coxim",
		"codigo_ibge" : 5003306,
		"sigla" : "MS"
	},
	{
		"id" : 2624,
		"nome" : "Coxixola",
		"codigo_ibge" : 2504850,
		"sigla" : "PB"
	},
	{
		"id" : 125,
		"nome" : "Craíbas",
		"codigo_ibge" : 2702355,
		"sigla" : "AL"
	},
	{
		"id" : 747,
		"nome" : "Crateús",
		"codigo_ibge" : 2304103,
		"sigla" : "CE"
	},
	{
		"id" : 748,
		"nome" : "Crato",
		"codigo_ibge" : 2304202,
		"sigla" : "CE"
	},
	{
		"id" : 4852,
		"nome" : "Cravinhos",
		"codigo_ibge" : 3513108,
		"sigla" : "SP"
	},
	{
		"id" : 393,
		"nome" : "Cravolândia",
		"codigo_ibge" : 2909505,
		"sigla" : "BA"
	},
	{
		"id" : 4487,
		"nome" : "Criciúma",
		"codigo_ibge" : 4204608,
		"sigla" : "SC"
	},
	{
		"id" : 1787,
		"nome" : "Crisólita",
		"codigo_ibge" : 3120151,
		"sigla" : "MG"
	},
	{
		"id" : 394,
		"nome" : "Crisópolis",
		"codigo_ibge" : 2909604,
		"sigla" : "BA"
	},
	{
		"id" : 3971,
		"nome" : "Crissiumal",
		"codigo_ibge" : 4306007,
		"sigla" : "RS"
	},
	{
		"id" : 1788,
		"nome" : "Cristais",
		"codigo_ibge" : 3120201,
		"sigla" : "MG"
	},
	{
		"id" : 4853,
		"nome" : "Cristais Paulista",
		"codigo_ibge" : 3513207,
		"sigla" : "SP"
	},
	{
		"id" : 3972,
		"nome" : "Cristal",
		"codigo_ibge" : 4306056,
		"sigla" : "RS"
	},
	{
		"id" : 3973,
		"nome" : "Cristal do Sul",
		"codigo_ibge" : 4306072,
		"sigla" : "RS"
	},
	{
		"id" : 5468,
		"nome" : "Cristalândia",
		"codigo_ibge" : 1706100,
		"sigla" : "TO"
	},
	{
		"id" : 3433,
		"nome" : "Cristalândia do Piauí",
		"codigo_ibge" : 2203008,
		"sigla" : "PI"
	},
	{
		"id" : 1789,
		"nome" : "Cristália",
		"codigo_ibge" : 3120300,
		"sigla" : "MG"
	},
	{
		"id" : 953,
		"nome" : "Cristalina",
		"codigo_ibge" : 5206206,
		"sigla" : "GO"
	},
	{
		"id" : 1790,
		"nome" : "Cristiano Otoni",
		"codigo_ibge" : 3120409,
		"sigla" : "MG"
	},
	{
		"id" : 954,
		"nome" : "Cristianópolis",
		"codigo_ibge" : 5206305,
		"sigla" : "GO"
	},
	{
		"id" : 1791,
		"nome" : "Cristina",
		"codigo_ibge" : 3120508,
		"sigla" : "MG"
	},
	{
		"id" : 5366,
		"nome" : "Cristinápolis",
		"codigo_ibge" : 2801702,
		"sigla" : "SE"
	},
	{
		"id" : 3434,
		"nome" : "Cristino Castro",
		"codigo_ibge" : 2203107,
		"sigla" : "PI"
	},
	{
		"id" : 395,
		"nome" : "Cristópolis",
		"codigo_ibge" : 2909703,
		"sigla" : "BA"
	},
	{
		"id" : 955,
		"nome" : "Crixás",
		"codigo_ibge" : 5206404,
		"sigla" : "GO"
	},
	{
		"id" : 5469,
		"nome" : "Crixás do Tocantins",
		"codigo_ibge" : 1706258,
		"sigla" : "TO"
	},
	{
		"id" : 749,
		"nome" : "Croatá",
		"codigo_ibge" : 2304236,
		"sigla" : "CE"
	},
	{
		"id" : 956,
		"nome" : "Cromínia",
		"codigo_ibge" : 5206503,
		"sigla" : "GO"
	},
	{
		"id" : 1792,
		"nome" : "Crucilândia",
		"codigo_ibge" : 3120607,
		"sigla" : "MG"
	},
	{
		"id" : 750,
		"nome" : "Cruz",
		"codigo_ibge" : 2304251,
		"sigla" : "CE"
	},
	{
		"id" : 3974,
		"nome" : "Cruz Alta",
		"codigo_ibge" : 4306106,
		"sigla" : "RS"
	},
	{
		"id" : 396,
		"nome" : "Cruz das Almas",
		"codigo_ibge" : 2909802,
		"sigla" : "BA"
	},
	{
		"id" : 2625,
		"nome" : "Cruz do Espírito Santo",
		"codigo_ibge" : 2504900,
		"sigla" : "PB"
	},
	{
		"id" : 2873,
		"nome" : "Cruz Machado",
		"codigo_ibge" : 4106803,
		"sigla" : "PR"
	},
	{
		"id" : 4854,
		"nome" : "Cruzália",
		"codigo_ibge" : 3513306,
		"sigla" : "SP"
	},
	{
		"id" : 3975,
		"nome" : "Cruzaltense",
		"codigo_ibge" : 4306130,
		"sigla" : "RS"
	},
	{
		"id" : 4855,
		"nome" : "Cruzeiro",
		"codigo_ibge" : 3513405,
		"sigla" : "SP"
	},
	{
		"id" : 1793,
		"nome" : "Cruzeiro da Fortaleza",
		"codigo_ibge" : 3120706,
		"sigla" : "MG"
	},
	{
		"id" : 2874,
		"nome" : "Cruzeiro do Iguaçu",
		"codigo_ibge" : 4106571,
		"sigla" : "PR"
	},
	{
		"id" : 2875,
		"nome" : "Cruzeiro do Oeste",
		"codigo_ibge" : 4106605,
		"sigla" : "PR"
	},
	{
		"id" : 2876,
		"nome" : "Cruzeiro do Sul",
		"codigo_ibge" : 4106704,
		"sigla" : "PR"
	},
	{
		"id" : 84,
		"nome" : "Cruzeiro do Sul",
		"codigo_ibge" : 1200203,
		"sigla" : "AC"
	},
	{
		"id" : 3976,
		"nome" : "Cruzeiro do Sul",
		"codigo_ibge" : 4306205,
		"sigla" : "RS"
	},
	{
		"id" : 3715,
		"nome" : "Cruzeta",
		"codigo_ibge" : 2403004,
		"sigla" : "RN"
	},
	{
		"id" : 1794,
		"nome" : "Cruzília",
		"codigo_ibge" : 3120805,
		"sigla" : "MG"
	},
	{
		"id" : 2877,
		"nome" : "Cruzmaltina",
		"codigo_ibge" : 4106852,
		"sigla" : "PR"
	},
	{
		"id" : 4856,
		"nome" : "Cubatão",
		"codigo_ibge" : 3513504,
		"sigla" : "SP"
	},
	{
		"id" : 2626,
		"nome" : "Cubati",
		"codigo_ibge" : 2505006,
		"sigla" : "PB"
	},
	{
		"id" : 1383,
		"nome" : "Cuiabá",
		"codigo_ibge" : 5103403,
		"sigla" : "MT"
	},
	{
		"id" : 2627,
		"nome" : "Cuité",
		"codigo_ibge" : 2505105,
		"sigla" : "PB"
	},
	{
		"id" : 2628,
		"nome" : "Cuité de Mamanguape",
		"codigo_ibge" : 2505238,
		"sigla" : "PB"
	},
	{
		"id" : 2629,
		"nome" : "Cuitegi",
		"codigo_ibge" : 2505204,
		"sigla" : "PB"
	},
	{
		"id" : 4363,
		"nome" : "Cujubim",
		"codigo_ibge" : 1100940,
		"sigla" : "RO"
	},
	{
		"id" : 957,
		"nome" : "Cumari",
		"codigo_ibge" : 5206602,
		"sigla" : "GO"
	},
	{
		"id" : 3236,
		"nome" : "Cumaru",
		"codigo_ibge" : 2604908,
		"sigla" : "PE"
	},
	{
		"id" : 2458,
		"nome" : "Cumaru do Norte",
		"codigo_ibge" : 1502764,
		"sigla" : "PA"
	},
	{
		"id" : 5367,
		"nome" : "Cumbe",
		"codigo_ibge" : 2801900,
		"sigla" : "SE"
	},
	{
		"id" : 4857,
		"nome" : "Cunha",
		"codigo_ibge" : 3513603,
		"sigla" : "SP"
	},
	{
		"id" : 4488,
		"nome" : "Cunha Porã",
		"codigo_ibge" : 4204707,
		"sigla" : "SC"
	},
	{
		"id" : 4489,
		"nome" : "Cunhataí",
		"codigo_ibge" : 4204756,
		"sigla" : "SC"
	},
	{
		"id" : 1795,
		"nome" : "Cuparaque",
		"codigo_ibge" : 3120839,
		"sigla" : "MG"
	},
	{
		"id" : 3237,
		"nome" : "Cupira",
		"codigo_ibge" : 2605004,
		"sigla" : "PE"
	},
	{
		"id" : 397,
		"nome" : "Curaçá",
		"codigo_ibge" : 2909901,
		"sigla" : "BA"
	},
	{
		"id" : 3435,
		"nome" : "Curimatá",
		"codigo_ibge" : 2203206,
		"sigla" : "PI"
	},
	{
		"id" : 2459,
		"nome" : "Curionópolis",
		"codigo_ibge" : 1502772,
		"sigla" : "PA"
	},
	{
		"id" : 2878,
		"nome" : "Curitiba",
		"codigo_ibge" : 4106902,
		"sigla" : "PR"
	},
	{
		"id" : 4490,
		"nome" : "Curitibanos",
		"codigo_ibge" : 4204806,
		"sigla" : "SC"
	},
	{
		"id" : 2879,
		"nome" : "Curiúva",
		"codigo_ibge" : 4107009,
		"sigla" : "PR"
	},
	{
		"id" : 3436,
		"nome" : "Currais",
		"codigo_ibge" : 2203230,
		"sigla" : "PI"
	},
	{
		"id" : 3716,
		"nome" : "Currais Novos",
		"codigo_ibge" : 2403103,
		"sigla" : "RN"
	},
	{
		"id" : 2630,
		"nome" : "Curral de Cima",
		"codigo_ibge" : 2505279,
		"sigla" : "PB"
	},
	{
		"id" : 1796,
		"nome" : "Curral de Dentro",
		"codigo_ibge" : 3120870,
		"sigla" : "MG"
	},
	{
		"id" : 3437,
		"nome" : "Curral Novo do Piauí",
		"codigo_ibge" : 2203271,
		"sigla" : "PI"
	},
	{
		"id" : 2631,
		"nome" : "Curral Velho",
		"codigo_ibge" : 2505303,
		"sigla" : "PB"
	},
	{
		"id" : 2460,
		"nome" : "Curralinho",
		"codigo_ibge" : 1502806,
		"sigla" : "PA"
	},
	{
		"id" : 3438,
		"nome" : "Curralinhos",
		"codigo_ibge" : 2203255,
		"sigla" : "PI"
	},
	{
		"id" : 2461,
		"nome" : "Curuá",
		"codigo_ibge" : 1502855,
		"sigla" : "PA"
	},
	{
		"id" : 2462,
		"nome" : "Curuçá",
		"codigo_ibge" : 1502905,
		"sigla" : "PA"
	},
	{
		"id" : 1192,
		"nome" : "Cururupu",
		"codigo_ibge" : 2103703,
		"sigla" : "MA"
	},
	{
		"id" : 1384,
		"nome" : "Curvelândia",
		"codigo_ibge" : 5103437,
		"sigla" : "MT"
	},
	{
		"id" : 1797,
		"nome" : "Curvelo",
		"codigo_ibge" : 3120904,
		"sigla" : "MG"
	},
	{
		"id" : 3238,
		"nome" : "Custódia",
		"codigo_ibge" : 2605103,
		"sigla" : "PE"
	},
	{
		"id" : 205,
		"nome" : "Cutias",
		"codigo_ibge" : 1600212,
		"sigla" : "AP"
	},
	{
		"id" : 958,
		"nome" : "Damianópolis",
		"codigo_ibge" : 5206701,
		"sigla" : "GO"
	},
	{
		"id" : 2632,
		"nome" : "Damião",
		"codigo_ibge" : 2505352,
		"sigla" : "PB"
	},
	{
		"id" : 959,
		"nome" : "Damolândia",
		"codigo_ibge" : 5206800,
		"sigla" : "GO"
	},
	{
		"id" : 5470,
		"nome" : "Darcinópolis",
		"codigo_ibge" : 1706506,
		"sigla" : "TO"
	},
	{
		"id" : 398,
		"nome" : "Dário Meira",
		"codigo_ibge" : 2910008,
		"sigla" : "BA"
	},
	{
		"id" : 1798,
		"nome" : "Datas",
		"codigo_ibge" : 3121001,
		"sigla" : "MG"
	},
	{
		"id" : 3977,
		"nome" : "David Canabarro",
		"codigo_ibge" : 4306304,
		"sigla" : "RS"
	},
	{
		"id" : 960,
		"nome" : "Davinópolis",
		"codigo_ibge" : 5206909,
		"sigla" : "GO"
	},
	{
		"id" : 1193,
		"nome" : "Davinópolis",
		"codigo_ibge" : 2103752,
		"sigla" : "MA"
	},
	{
		"id" : 1799,
		"nome" : "Delfim Moreira",
		"codigo_ibge" : 3121100,
		"sigla" : "MG"
	},
	{
		"id" : 1800,
		"nome" : "Delfinópolis",
		"codigo_ibge" : 3121209,
		"sigla" : "MG"
	},
	{
		"id" : 126,
		"nome" : "Delmiro Gouveia",
		"codigo_ibge" : 2702405,
		"sigla" : "AL"
	},
	{
		"id" : 1801,
		"nome" : "Delta",
		"codigo_ibge" : 3121258,
		"sigla" : "MG"
	},
	{
		"id" : 3439,
		"nome" : "Demerval Lobão",
		"codigo_ibge" : 2203305,
		"sigla" : "PI"
	},
	{
		"id" : 1386,
		"nome" : "Denise",
		"codigo_ibge" : 5103452,
		"sigla" : "MT"
	},
	{
		"id" : 1515,
		"nome" : "Deodápolis",
		"codigo_ibge" : 5003454,
		"sigla" : "MS"
	},
	{
		"id" : 751,
		"nome" : "Deputado Irapuan Pinheiro",
		"codigo_ibge" : 2304269,
		"sigla" : "CE"
	},
	{
		"id" : 3978,
		"nome" : "Derrubadas",
		"codigo_ibge" : 4306320,
		"sigla" : "RS"
	},
	{
		"id" : 4858,
		"nome" : "Descalvado",
		"codigo_ibge" : 3513702,
		"sigla" : "SP"
	},
	{
		"id" : 4491,
		"nome" : "Descanso",
		"codigo_ibge" : 4204905,
		"sigla" : "SC"
	},
	{
		"id" : 1802,
		"nome" : "Descoberto",
		"codigo_ibge" : 3121308,
		"sigla" : "MG"
	},
	{
		"id" : 2633,
		"nome" : "Desterro",
		"codigo_ibge" : 2505402,
		"sigla" : "PB"
	},
	{
		"id" : 1803,
		"nome" : "Desterro de Entre Rios",
		"codigo_ibge" : 3121407,
		"sigla" : "MG"
	},
	{
		"id" : 1804,
		"nome" : "Desterro do Melo",
		"codigo_ibge" : 3121506,
		"sigla" : "MG"
	},
	{
		"id" : 3979,
		"nome" : "Dezesseis de Novembro",
		"codigo_ibge" : 4306353,
		"sigla" : "RS"
	},
	{
		"id" : 4859,
		"nome" : "Diadema",
		"codigo_ibge" : 3513801,
		"sigla" : "SP"
	},
	{
		"id" : 2634,
		"nome" : "Diamante",
		"codigo_ibge" : 2505600,
		"sigla" : "PB"
	},
	{
		"id" : 2880,
		"nome" : "Diamante d Oeste",
		"codigo_ibge" : 4107157,
		"sigla" : "PR"
	},
	{
		"id" : 2881,
		"nome" : "Diamante do Norte",
		"codigo_ibge" : 4107108,
		"sigla" : "PR"
	},
	{
		"id" : 2882,
		"nome" : "Diamante do Sul",
		"codigo_ibge" : 4107124,
		"sigla" : "PR"
	},
	{
		"id" : 1805,
		"nome" : "Diamantina",
		"codigo_ibge" : 3121605,
		"sigla" : "MG"
	},
	{
		"id" : 1387,
		"nome" : "Diamantino",
		"codigo_ibge" : 5103502,
		"sigla" : "MT"
	},
	{
		"id" : 5471,
		"nome" : "Dianópolis",
		"codigo_ibge" : 1707009,
		"sigla" : "TO"
	},
	{
		"id" : 399,
		"nome" : "Dias d Ávila",
		"codigo_ibge" : 2910057,
		"sigla" : "BA"
	},
	{
		"id" : 3980,
		"nome" : "Dilermando de Aguiar",
		"codigo_ibge" : 4306379,
		"sigla" : "RS"
	},
	{
		"id" : 1806,
		"nome" : "Diogo de Vasconcelos",
		"codigo_ibge" : 3121704,
		"sigla" : "MG"
	},
	{
		"id" : 1807,
		"nome" : "Dionísio",
		"codigo_ibge" : 3121803,
		"sigla" : "MG"
	},
	{
		"id" : 4492,
		"nome" : "Dionísio Cerqueira",
		"codigo_ibge" : 4205001,
		"sigla" : "SC"
	},
	{
		"id" : 961,
		"nome" : "Diorama",
		"codigo_ibge" : 5207105,
		"sigla" : "GO"
	},
	{
		"id" : 4860,
		"nome" : "Dirce Reis",
		"codigo_ibge" : 3513850,
		"sigla" : "SP"
	},
	{
		"id" : 3440,
		"nome" : "Dirceu Arcoverde",
		"codigo_ibge" : 2203354,
		"sigla" : "PI"
	},
	{
		"id" : 5368,
		"nome" : "Divina Pastora",
		"codigo_ibge" : 2802007,
		"sigla" : "SE"
	},
	{
		"id" : 1808,
		"nome" : "Divinésia",
		"codigo_ibge" : 3121902,
		"sigla" : "MG"
	},
	{
		"id" : 1809,
		"nome" : "Divino",
		"codigo_ibge" : 3122009,
		"sigla" : "MG"
	},
	{
		"id" : 1810,
		"nome" : "Divino das Laranjeiras",
		"codigo_ibge" : 3122108,
		"sigla" : "MG"
	},
	{
		"id" : 22,
		"nome" : "Divino de São Lourenço",
		"codigo_ibge" : 3201803,
		"sigla" : "ES"
	},
	{
		"id" : 4861,
		"nome" : "Divinolândia",
		"codigo_ibge" : 3513900,
		"sigla" : "SP"
	},
	{
		"id" : 1811,
		"nome" : "Divinolândia de Minas",
		"codigo_ibge" : 3122207,
		"sigla" : "MG"
	},
	{
		"id" : 1812,
		"nome" : "Divinópolis",
		"codigo_ibge" : 3122306,
		"sigla" : "MG"
	},
	{
		"id" : 962,
		"nome" : "Divinópolis de Goiás",
		"codigo_ibge" : 5208301,
		"sigla" : "GO"
	},
	{
		"id" : 5472,
		"nome" : "Divinópolis do Tocantins",
		"codigo_ibge" : 1707108,
		"sigla" : "TO"
	},
	{
		"id" : 1813,
		"nome" : "Divisa Alegre",
		"codigo_ibge" : 3122355,
		"sigla" : "MG"
	},
	{
		"id" : 1814,
		"nome" : "Divisa Nova",
		"codigo_ibge" : 3122405,
		"sigla" : "MG"
	},
	{
		"id" : 1815,
		"nome" : "Divisópolis",
		"codigo_ibge" : 3122454,
		"sigla" : "MG"
	},
	{
		"id" : 4862,
		"nome" : "Dobrada",
		"codigo_ibge" : 3514007,
		"sigla" : "SP"
	},
	{
		"id" : 4863,
		"nome" : "Dois Córregos",
		"codigo_ibge" : 3514106,
		"sigla" : "SP"
	},
	{
		"id" : 3981,
		"nome" : "Dois Irmãos",
		"codigo_ibge" : 4306403,
		"sigla" : "RS"
	},
	{
		"id" : 3982,
		"nome" : "Dois Irmãos das Missões",
		"codigo_ibge" : 4306429,
		"sigla" : "RS"
	},
	{
		"id" : 1516,
		"nome" : "Dois Irmãos do Buriti",
		"codigo_ibge" : 5003488,
		"sigla" : "MS"
	},
	{
		"id" : 5473,
		"nome" : "Dois Irmãos do Tocantins",
		"codigo_ibge" : 1707207,
		"sigla" : "TO"
	},
	{
		"id" : 3983,
		"nome" : "Dois Lajeados",
		"codigo_ibge" : 4306452,
		"sigla" : "RS"
	},
	{
		"id" : 127,
		"nome" : "Dois Riachos",
		"codigo_ibge" : 2702504,
		"sigla" : "AL"
	},
	{
		"id" : 2883,
		"nome" : "Dois Vizinhos",
		"codigo_ibge" : 4107207,
		"sigla" : "PR"
	},
	{
		"id" : 4864,
		"nome" : "Dolcinópolis",
		"codigo_ibge" : 3514205,
		"sigla" : "SP"
	},
	{
		"id" : 1388,
		"nome" : "Dom Aquino",
		"codigo_ibge" : 5103601,
		"sigla" : "MT"
	},
	{
		"id" : 400,
		"nome" : "Dom Basílio",
		"codigo_ibge" : 2910107,
		"sigla" : "BA"
	},
	{
		"id" : 1816,
		"nome" : "Dom Bosco",
		"codigo_ibge" : 3122470,
		"sigla" : "MG"
	},
	{
		"id" : 1817,
		"nome" : "Dom Cavati",
		"codigo_ibge" : 3122504,
		"sigla" : "MG"
	},
	{
		"id" : 2463,
		"nome" : "Dom Eliseu",
		"codigo_ibge" : 1502939,
		"sigla" : "PA"
	},
	{
		"id" : 3441,
		"nome" : "Dom Expedito Lopes",
		"codigo_ibge" : 2203404,
		"sigla" : "PI"
	},
	{
		"id" : 3984,
		"nome" : "Dom Feliciano",
		"codigo_ibge" : 4306502,
		"sigla" : "RS"
	},
	{
		"id" : 3442,
		"nome" : "Dom Inocêncio",
		"codigo_ibge" : 2203453,
		"sigla" : "PI"
	},
	{
		"id" : 1818,
		"nome" : "Dom Joaquim",
		"codigo_ibge" : 3122603,
		"sigla" : "MG"
	},
	{
		"id" : 401,
		"nome" : "Dom Macedo Costa",
		"codigo_ibge" : 2910206,
		"sigla" : "BA"
	},
	{
		"id" : 3985,
		"nome" : "Dom Pedrito",
		"codigo_ibge" : 4306601,
		"sigla" : "RS"
	},
	{
		"id" : 1194,
		"nome" : "Dom Pedro",
		"codigo_ibge" : 2103802,
		"sigla" : "MA"
	},
	{
		"id" : 3986,
		"nome" : "Dom Pedro de Alcântara",
		"codigo_ibge" : 4306551,
		"sigla" : "RS"
	},
	{
		"id" : 1819,
		"nome" : "Dom Silvério",
		"codigo_ibge" : 3122702,
		"sigla" : "MG"
	},
	{
		"id" : 1820,
		"nome" : "Dom Viçoso",
		"codigo_ibge" : 3122801,
		"sigla" : "MG"
	},
	{
		"id" : 23,
		"nome" : "Domingos Martins",
		"codigo_ibge" : 3201902,
		"sigla" : "ES"
	},
	{
		"id" : 3443,
		"nome" : "Domingos Mourão",
		"codigo_ibge" : 2203420,
		"sigla" : "PI"
	},
	{
		"id" : 4493,
		"nome" : "Dona Emma",
		"codigo_ibge" : 4205100,
		"sigla" : "SC"
	},
	{
		"id" : 1821,
		"nome" : "Dona Euzébia",
		"codigo_ibge" : 3122900,
		"sigla" : "MG"
	},
	{
		"id" : 3987,
		"nome" : "Dona Francisca",
		"codigo_ibge" : 4306700,
		"sigla" : "RS"
	},
	{
		"id" : 2635,
		"nome" : "Dona Inês",
		"codigo_ibge" : 2505709,
		"sigla" : "PB"
	},
	{
		"id" : 1822,
		"nome" : "Dores de Campos",
		"codigo_ibge" : 3123007,
		"sigla" : "MG"
	},
	{
		"id" : 1823,
		"nome" : "Dores de Guanhães",
		"codigo_ibge" : 3123106,
		"sigla" : "MG"
	},
	{
		"id" : 1824,
		"nome" : "Dores do Indaiá",
		"codigo_ibge" : 3123205,
		"sigla" : "MG"
	},
	{
		"id" : 24,
		"nome" : "Dores do Rio Preto",
		"codigo_ibge" : 3202009,
		"sigla" : "ES"
	},
	{
		"id" : 1825,
		"nome" : "Dores do Turvo",
		"codigo_ibge" : 3123304,
		"sigla" : "MG"
	},
	{
		"id" : 1826,
		"nome" : "Doresópolis",
		"codigo_ibge" : 3123403,
		"sigla" : "MG"
	},
	{
		"id" : 3239,
		"nome" : "Dormentes",
		"codigo_ibge" : 2605152,
		"sigla" : "PE"
	},
	{
		"id" : 1517,
		"nome" : "Douradina",
		"codigo_ibge" : 5003504,
		"sigla" : "MS"
	},
	{
		"id" : 2884,
		"nome" : "Douradina",
		"codigo_ibge" : 4107256,
		"sigla" : "PR"
	},
	{
		"id" : 4865,
		"nome" : "Dourado",
		"codigo_ibge" : 3514304,
		"sigla" : "SP"
	},
	{
		"id" : 1827,
		"nome" : "Douradoquara",
		"codigo_ibge" : 3123502,
		"sigla" : "MG"
	},
	{
		"id" : 1518,
		"nome" : "Dourados",
		"codigo_ibge" : 5003702,
		"sigla" : "MS"
	},
	{
		"id" : 2885,
		"nome" : "Doutor Camargo",
		"codigo_ibge" : 4107306,
		"sigla" : "PR"
	},
	{
		"id" : 3988,
		"nome" : "Doutor Maurício Cardoso",
		"codigo_ibge" : 4306734,
		"sigla" : "RS"
	},
	{
		"id" : 4494,
		"nome" : "Doutor Pedrinho",
		"codigo_ibge" : 4205159,
		"sigla" : "SC"
	},
	{
		"id" : 3989,
		"nome" : "Doutor Ricardo",
		"codigo_ibge" : 4306759,
		"sigla" : "RS"
	},
	{
		"id" : 3717,
		"nome" : "Doutor Severiano",
		"codigo_ibge" : 2403202,
		"sigla" : "RN"
	},
	{
		"id" : 2886,
		"nome" : "Doutor Ulysses",
		"codigo_ibge" : 4128633,
		"sigla" : "PR"
	},
	{
		"id" : 963,
		"nome" : "Doverlândia",
		"codigo_ibge" : 5207253,
		"sigla" : "GO"
	},
	{
		"id" : 4866,
		"nome" : "Dracena",
		"codigo_ibge" : 3514403,
		"sigla" : "SP"
	},
	{
		"id" : 4867,
		"nome" : "Duartina",
		"codigo_ibge" : 3514502,
		"sigla" : "SP"
	},
	{
		"id" : 3614,
		"nome" : "Duas Barras",
		"codigo_ibge" : 3301603,
		"sigla" : "RJ"
	},
	{
		"id" : 2636,
		"nome" : "Duas Estradas",
		"codigo_ibge" : 2505808,
		"sigla" : "PB"
	},
	{
		"id" : 5474,
		"nome" : "Dueré",
		"codigo_ibge" : 1707306,
		"sigla" : "TO"
	},
	{
		"id" : 4868,
		"nome" : "Dumont",
		"codigo_ibge" : 3514601,
		"sigla" : "SP"
	},
	{
		"id" : 1195,
		"nome" : "Duque Bacelar",
		"codigo_ibge" : 2103901,
		"sigla" : "MA"
	},
	{
		"id" : 3615,
		"nome" : "Duque de Caxias",
		"codigo_ibge" : 3301702,
		"sigla" : "RJ"
	},
	{
		"id" : 1828,
		"nome" : "Durandé",
		"codigo_ibge" : 3123528,
		"sigla" : "MG"
	},
	{
		"id" : 4869,
		"nome" : "Echaporã",
		"codigo_ibge" : 3514700,
		"sigla" : "SP"
	},
	{
		"id" : 25,
		"nome" : "Ecoporanga",
		"codigo_ibge" : 3202108,
		"sigla" : "ES"
	},
	{
		"id" : 964,
		"nome" : "Edealina",
		"codigo_ibge" : 5207352,
		"sigla" : "GO"
	},
	{
		"id" : 965,
		"nome" : "Edéia",
		"codigo_ibge" : 5207402,
		"sigla" : "GO"
	},
	{
		"id" : 240,
		"nome" : "Eirunepé",
		"codigo_ibge" : 1301407,
		"sigla" : "AM"
	},
	{
		"id" : 1519,
		"nome" : "Eldorado",
		"codigo_ibge" : 5003751,
		"sigla" : "MS"
	},
	{
		"id" : 4870,
		"nome" : "Eldorado",
		"codigo_ibge" : 3514809,
		"sigla" : "SP"
	},
	{
		"id" : 2464,
		"nome" : "Eldorado do Carajás",
		"codigo_ibge" : 1502954,
		"sigla" : "PA"
	},
	{
		"id" : 3990,
		"nome" : "Eldorado do Sul",
		"codigo_ibge" : 4306767,
		"sigla" : "RS"
	},
	{
		"id" : 3444,
		"nome" : "Elesbão Veloso",
		"codigo_ibge" : 2203503,
		"sigla" : "PI"
	},
	{
		"id" : 4871,
		"nome" : "Elias Fausto",
		"codigo_ibge" : 3514908,
		"sigla" : "SP"
	},
	{
		"id" : 3445,
		"nome" : "Eliseu Martins",
		"codigo_ibge" : 2203602,
		"sigla" : "PI"
	},
	{
		"id" : 4872,
		"nome" : "Elisiário",
		"codigo_ibge" : 3514924,
		"sigla" : "SP"
	},
	{
		"id" : 402,
		"nome" : "Elísio Medrado",
		"codigo_ibge" : 2910305,
		"sigla" : "BA"
	},
	{
		"id" : 1829,
		"nome" : "Elói Mendes",
		"codigo_ibge" : 3123601,
		"sigla" : "MG"
	},
	{
		"id" : 2637,
		"nome" : "Emas",
		"codigo_ibge" : 2505907,
		"sigla" : "PB"
	},
	{
		"id" : 4873,
		"nome" : "Embaúba",
		"codigo_ibge" : 3514957,
		"sigla" : "SP"
	},
	{
		"id" : 4874,
		"nome" : "Embu das Artes",
		"codigo_ibge" : 3515004,
		"sigla" : "SP"
	},
	{
		"id" : 4875,
		"nome" : "Embu Guaçu",
		"codigo_ibge" : 3515103,
		"sigla" : "SP"
	},
	{
		"id" : 4876,
		"nome" : "Emilianópolis",
		"codigo_ibge" : 3515129,
		"sigla" : "SP"
	},
	{
		"id" : 3991,
		"nome" : "Encantado",
		"codigo_ibge" : 4306809,
		"sigla" : "RS"
	},
	{
		"id" : 3718,
		"nome" : "Encanto",
		"codigo_ibge" : 2403301,
		"sigla" : "RN"
	},
	{
		"id" : 403,
		"nome" : "Encruzilhada",
		"codigo_ibge" : 2910404,
		"sigla" : "BA"
	},
	{
		"id" : 3992,
		"nome" : "Encruzilhada do Sul",
		"codigo_ibge" : 4306908,
		"sigla" : "RS"
	},
	{
		"id" : 2887,
		"nome" : "Enéas Marques",
		"codigo_ibge" : 4107405,
		"sigla" : "PR"
	},
	{
		"id" : 2888,
		"nome" : "Engenheiro Beltrão",
		"codigo_ibge" : 4107504,
		"sigla" : "PR"
	},
	{
		"id" : 1830,
		"nome" : "Engenheiro Caldas",
		"codigo_ibge" : 3123700,
		"sigla" : "MG"
	},
	{
		"id" : 4877,
		"nome" : "Engenheiro Coelho",
		"codigo_ibge" : 3515152,
		"sigla" : "SP"
	},
	{
		"id" : 1831,
		"nome" : "Engenheiro Navarro",
		"codigo_ibge" : 3123809,
		"sigla" : "MG"
	},
	{
		"id" : 3616,
		"nome" : "Engenheiro Paulo de Frontin",
		"codigo_ibge" : 3301801,
		"sigla" : "RJ"
	},
	{
		"id" : 3993,
		"nome" : "Engenho Velho",
		"codigo_ibge" : 4306924,
		"sigla" : "RS"
	},
	{
		"id" : 1832,
		"nome" : "Entre Folhas",
		"codigo_ibge" : 3123858,
		"sigla" : "MG"
	},
	{
		"id" : 3995,
		"nome" : "Entre Ijuís",
		"codigo_ibge" : 4306932,
		"sigla" : "RS"
	},
	{
		"id" : 4495,
		"nome" : "Entre Rios",
		"codigo_ibge" : 4205175,
		"sigla" : "SC"
	},
	{
		"id" : 404,
		"nome" : "Entre Rios",
		"codigo_ibge" : 2910503,
		"sigla" : "BA"
	},
	{
		"id" : 1833,
		"nome" : "Entre Rios de Minas",
		"codigo_ibge" : 3123908,
		"sigla" : "MG"
	},
	{
		"id" : 2889,
		"nome" : "Entre Rios do Oeste",
		"codigo_ibge" : 4107538,
		"sigla" : "PR"
	},
	{
		"id" : 3994,
		"nome" : "Entre Rios do Sul",
		"codigo_ibge" : 4306957,
		"sigla" : "RS"
	},
	{
		"id" : 241,
		"nome" : "Envira",
		"codigo_ibge" : 1301506,
		"sigla" : "AM"
	},
	{
		"id" : 85,
		"nome" : "Epitaciolândia",
		"codigo_ibge" : 1200252,
		"sigla" : "AC"
	},
	{
		"id" : 3719,
		"nome" : "Equador",
		"codigo_ibge" : 2403400,
		"sigla" : "RN"
	},
	{
		"id" : 3996,
		"nome" : "Erebango",
		"codigo_ibge" : 4306973,
		"sigla" : "RS"
	},
	{
		"id" : 3997,
		"nome" : "Erechim",
		"codigo_ibge" : 4307005,
		"sigla" : "RS"
	},
	{
		"id" : 752,
		"nome" : "Ereré",
		"codigo_ibge" : 2304277,
		"sigla" : "CE"
	},
	{
		"id" : 405,
		"nome" : "Érico Cardoso",
		"codigo_ibge" : 2900504,
		"sigla" : "BA"
	},
	{
		"id" : 4496,
		"nome" : "Ermo",
		"codigo_ibge" : 4205191,
		"sigla" : "SC"
	},
	{
		"id" : 3998,
		"nome" : "Ernestina",
		"codigo_ibge" : 4307054,
		"sigla" : "RS"
	},
	{
		"id" : 3999,
		"nome" : "Erval Grande",
		"codigo_ibge" : 4307203,
		"sigla" : "RS"
	},
	{
		"id" : 4000,
		"nome" : "Erval Seco",
		"codigo_ibge" : 4307302,
		"sigla" : "RS"
	},
	{
		"id" : 4497,
		"nome" : "Erval Velho",
		"codigo_ibge" : 4205209,
		"sigla" : "SC"
	},
	{
		"id" : 1834,
		"nome" : "Ervália",
		"codigo_ibge" : 3124005,
		"sigla" : "MG"
	},
	{
		"id" : 3240,
		"nome" : "Escada",
		"codigo_ibge" : 2605202,
		"sigla" : "PE"
	},
	{
		"id" : 4001,
		"nome" : "Esmeralda",
		"codigo_ibge" : 4307401,
		"sigla" : "RS"
	},
	{
		"id" : 1835,
		"nome" : "Esmeraldas",
		"codigo_ibge" : 3124104,
		"sigla" : "MG"
	},
	{
		"id" : 1836,
		"nome" : "Espera Feliz",
		"codigo_ibge" : 3124203,
		"sigla" : "MG"
	},
	{
		"id" : 2638,
		"nome" : "Esperança",
		"codigo_ibge" : 2506004,
		"sigla" : "PB"
	},
	{
		"id" : 4002,
		"nome" : "Esperança do Sul",
		"codigo_ibge" : 4307450,
		"sigla" : "RS"
	},
	{
		"id" : 2890,
		"nome" : "Esperança Nova",
		"codigo_ibge" : 4107520,
		"sigla" : "PR"
	},
	{
		"id" : 3446,
		"nome" : "Esperantina",
		"codigo_ibge" : 2203701,
		"sigla" : "PI"
	},
	{
		"id" : 5475,
		"nome" : "Esperantina",
		"codigo_ibge" : 1707405,
		"sigla" : "TO"
	},
	{
		"id" : 1196,
		"nome" : "Esperantinópolis",
		"codigo_ibge" : 2104008,
		"sigla" : "MA"
	},
	{
		"id" : 2891,
		"nome" : "Espigão Alto do Iguaçu",
		"codigo_ibge" : 4107546,
		"sigla" : "PR"
	},
	{
		"id" : 4364,
		"nome" : "Espigão d Oeste",
		"codigo_ibge" : 1100098,
		"sigla" : "RO"
	},
	{
		"id" : 1837,
		"nome" : "Espinosa",
		"codigo_ibge" : 3124302,
		"sigla" : "MG"
	},
	{
		"id" : 3720,
		"nome" : "Espírito Santo",
		"codigo_ibge" : 2403509,
		"sigla" : "RN"
	},
	{
		"id" : 1838,
		"nome" : "Espírito Santo do Dourado",
		"codigo_ibge" : 3124401,
		"sigla" : "MG"
	},
	{
		"id" : 4878,
		"nome" : "Espírito Santo do Pinhal",
		"codigo_ibge" : 3515186,
		"sigla" : "SP"
	},
	{
		"id" : 4879,
		"nome" : "Espírito Santo do Turvo",
		"codigo_ibge" : 3515194,
		"sigla" : "SP"
	},
	{
		"id" : 406,
		"nome" : "Esplanada",
		"codigo_ibge" : 2910602,
		"sigla" : "BA"
	},
	{
		"id" : 4003,
		"nome" : "Espumoso",
		"codigo_ibge" : 4307500,
		"sigla" : "RS"
	},
	{
		"id" : 4004,
		"nome" : "Estação",
		"codigo_ibge" : 4307559,
		"sigla" : "RS"
	},
	{
		"id" : 5369,
		"nome" : "Estância",
		"codigo_ibge" : 2802106,
		"sigla" : "SE"
	},
	{
		"id" : 4005,
		"nome" : "Estância Velha",
		"codigo_ibge" : 4307609,
		"sigla" : "RS"
	},
	{
		"id" : 4006,
		"nome" : "Esteio",
		"codigo_ibge" : 4307708,
		"sigla" : "RS"
	},
	{
		"id" : 1839,
		"nome" : "Estiva",
		"codigo_ibge" : 3124500,
		"sigla" : "MG"
	},
	{
		"id" : 4880,
		"nome" : "Estiva Gerbi",
		"codigo_ibge" : 3557303,
		"sigla" : "SP"
	},
	{
		"id" : 1197,
		"nome" : "Estreito",
		"codigo_ibge" : 2104057,
		"sigla" : "MA"
	},
	{
		"id" : 4007,
		"nome" : "Estrela",
		"codigo_ibge" : 4307807,
		"sigla" : "RS"
	},
	{
		"id" : 4881,
		"nome" : "Estrela d Oeste",
		"codigo_ibge" : 3515202,
		"sigla" : "SP"
	},
	{
		"id" : 1840,
		"nome" : "Estrela Dalva",
		"codigo_ibge" : 3124609,
		"sigla" : "MG"
	},
	{
		"id" : 128,
		"nome" : "Estrela de Alagoas",
		"codigo_ibge" : 2702553,
		"sigla" : "AL"
	},
	{
		"id" : 1841,
		"nome" : "Estrela do Indaiá",
		"codigo_ibge" : 3124708,
		"sigla" : "MG"
	},
	{
		"id" : 966,
		"nome" : "Estrela do Norte",
		"codigo_ibge" : 5207501,
		"sigla" : "GO"
	},
	{
		"id" : 4882,
		"nome" : "Estrela do Norte",
		"codigo_ibge" : 3515301,
		"sigla" : "SP"
	},
	{
		"id" : 1842,
		"nome" : "Estrela do Sul",
		"codigo_ibge" : 3124807,
		"sigla" : "MG"
	},
	{
		"id" : 4008,
		"nome" : "Estrela Velha",
		"codigo_ibge" : 4307815,
		"sigla" : "RS"
	},
	{
		"id" : 407,
		"nome" : "Euclides da Cunha",
		"codigo_ibge" : 2910701,
		"sigla" : "BA"
	},
	{
		"id" : 4883,
		"nome" : "Euclides da Cunha Paulista",
		"codigo_ibge" : 3515350,
		"sigla" : "SP"
	},
	{
		"id" : 4009,
		"nome" : "Eugênio de Castro",
		"codigo_ibge" : 4307831,
		"sigla" : "RS"
	},
	{
		"id" : 1843,
		"nome" : "Eugenópolis",
		"codigo_ibge" : 3124906,
		"sigla" : "MG"
	},
	{
		"id" : 408,
		"nome" : "Eunápolis",
		"codigo_ibge" : 2910727,
		"sigla" : "BA"
	},
	{
		"id" : 753,
		"nome" : "Eusébio",
		"codigo_ibge" : 2304285,
		"sigla" : "CE"
	},
	{
		"id" : 1844,
		"nome" : "Ewbank da Câmara",
		"codigo_ibge" : 3125002,
		"sigla" : "MG"
	},
	{
		"id" : 1845,
		"nome" : "Extrema",
		"codigo_ibge" : 3125101,
		"sigla" : "MG"
	},
	{
		"id" : 3721,
		"nome" : "Extremoz",
		"codigo_ibge" : 2403608,
		"sigla" : "RN"
	},
	{
		"id" : 3241,
		"nome" : "Exu",
		"codigo_ibge" : 2605301,
		"sigla" : "PE"
	},
	{
		"id" : 2639,
		"nome" : "Fagundes",
		"codigo_ibge" : 2506103,
		"sigla" : "PB"
	},
	{
		"id" : 4010,
		"nome" : "Fagundes Varela",
		"codigo_ibge" : 4307864,
		"sigla" : "RS"
	},
	{
		"id" : 967,
		"nome" : "Faina",
		"codigo_ibge" : 5207535,
		"sigla" : "GO"
	},
	{
		"id" : 1846,
		"nome" : "Fama",
		"codigo_ibge" : 3125200,
		"sigla" : "MG"
	},
	{
		"id" : 1847,
		"nome" : "Faria Lemos",
		"codigo_ibge" : 3125309,
		"sigla" : "MG"
	},
	{
		"id" : 754,
		"nome" : "Farias Brito",
		"codigo_ibge" : 2304301,
		"sigla" : "CE"
	},
	{
		"id" : 2465,
		"nome" : "Faro",
		"codigo_ibge" : 1503002,
		"sigla" : "PA"
	},
	{
		"id" : 2892,
		"nome" : "Farol",
		"codigo_ibge" : 4107553,
		"sigla" : "PR"
	},
	{
		"id" : 4011,
		"nome" : "Farroupilha",
		"codigo_ibge" : 4307906,
		"sigla" : "RS"
	},
	{
		"id" : 4884,
		"nome" : "Fartura",
		"codigo_ibge" : 3515400,
		"sigla" : "SP"
	},
	{
		"id" : 3447,
		"nome" : "Fartura do Piauí",
		"codigo_ibge" : 2203750,
		"sigla" : "PI"
	},
	{
		"id" : 5476,
		"nome" : "Fátima",
		"codigo_ibge" : 1707553,
		"sigla" : "TO"
	},
	{
		"id" : 409,
		"nome" : "Fátima",
		"codigo_ibge" : 2910750,
		"sigla" : "BA"
	},
	{
		"id" : 1520,
		"nome" : "Fátima do Sul",
		"codigo_ibge" : 5003801,
		"sigla" : "MS"
	},
	{
		"id" : 2893,
		"nome" : "Faxinal",
		"codigo_ibge" : 4107603,
		"sigla" : "PR"
	},
	{
		"id" : 4012,
		"nome" : "Faxinal do Soturno",
		"codigo_ibge" : 4308003,
		"sigla" : "RS"
	},
	{
		"id" : 4498,
		"nome" : "Faxinal dos Guedes",
		"codigo_ibge" : 4205308,
		"sigla" : "SC"
	},
	{
		"id" : 4013,
		"nome" : "Faxinalzinho",
		"codigo_ibge" : 4308052,
		"sigla" : "RS"
	},
	{
		"id" : 968,
		"nome" : "Fazenda Nova",
		"codigo_ibge" : 5207600,
		"sigla" : "GO"
	},
	{
		"id" : 2894,
		"nome" : "Fazenda Rio Grande",
		"codigo_ibge" : 4107652,
		"sigla" : "PR"
	},
	{
		"id" : 4014,
		"nome" : "Fazenda Vilanova",
		"codigo_ibge" : 4308078,
		"sigla" : "RS"
	},
	{
		"id" : 86,
		"nome" : "Feijó",
		"codigo_ibge" : 1200302,
		"sigla" : "AC"
	},
	{
		"id" : 410,
		"nome" : "Feira da Mata",
		"codigo_ibge" : 2910776,
		"sigla" : "BA"
	},
	{
		"id" : 411,
		"nome" : "Feira de Santana",
		"codigo_ibge" : 2910800,
		"sigla" : "BA"
	},
	{
		"id" : 129,
		"nome" : "Feira Grande",
		"codigo_ibge" : 2702603,
		"sigla" : "AL"
	},
	{
		"id" : 3242,
		"nome" : "Feira Nova",
		"codigo_ibge" : 2605400,
		"sigla" : "PE"
	},
	{
		"id" : 5370,
		"nome" : "Feira Nova",
		"codigo_ibge" : 2802205,
		"sigla" : "SE"
	},
	{
		"id" : 1198,
		"nome" : "Feira Nova do Maranhão",
		"codigo_ibge" : 2104073,
		"sigla" : "MA"
	},
	{
		"id" : 1848,
		"nome" : "Felício dos Santos",
		"codigo_ibge" : 3125408,
		"sigla" : "MG"
	},
	{
		"id" : 3722,
		"nome" : "Felipe Guerra",
		"codigo_ibge" : 2403707,
		"sigla" : "RN"
	},
	{
		"id" : 1849,
		"nome" : "Felisburgo",
		"codigo_ibge" : 3125606,
		"sigla" : "MG"
	},
	{
		"id" : 1850,
		"nome" : "Felixlândia",
		"codigo_ibge" : 3125705,
		"sigla" : "MG"
	},
	{
		"id" : 4015,
		"nome" : "Feliz",
		"codigo_ibge" : 4308102,
		"sigla" : "RS"
	},
	{
		"id" : 130,
		"nome" : "Feliz Deserto",
		"codigo_ibge" : 2702702,
		"sigla" : "AL"
	},
	{
		"id" : 1389,
		"nome" : "Feliz Natal",
		"codigo_ibge" : 5103700,
		"sigla" : "MT"
	},
	{
		"id" : 2895,
		"nome" : "Fênix",
		"codigo_ibge" : 4107702,
		"sigla" : "PR"
	},
	{
		"id" : 2896,
		"nome" : "Fernandes Pinheiro",
		"codigo_ibge" : 4107736,
		"sigla" : "PR"
	},
	{
		"id" : 1851,
		"nome" : "Fernandes Tourinho",
		"codigo_ibge" : 3125804,
		"sigla" : "MG"
	},
	{
		"id" : 3243,
		"nome" : "Fernando de Noronha",
		"codigo_ibge" : 2605459,
		"sigla" : "PE"
	},
	{
		"id" : 1199,
		"nome" : "Fernando Falcão",
		"codigo_ibge" : 2104081,
		"sigla" : "MA"
	},
	{
		"id" : 3723,
		"nome" : "Fernando Pedroza",
		"codigo_ibge" : 2403756,
		"sigla" : "RN"
	},
	{
		"id" : 4885,
		"nome" : "Fernando Prestes",
		"codigo_ibge" : 3515608,
		"sigla" : "SP"
	},
	{
		"id" : 4886,
		"nome" : "Fernandópolis",
		"codigo_ibge" : 3515509,
		"sigla" : "SP"
	},
	{
		"id" : 4887,
		"nome" : "Fernão",
		"codigo_ibge" : 3515657,
		"sigla" : "SP"
	},
	{
		"id" : 4888,
		"nome" : "Ferraz de Vasconcelos",
		"codigo_ibge" : 3515707,
		"sigla" : "SP"
	},
	{
		"id" : 206,
		"nome" : "Ferreira Gomes",
		"codigo_ibge" : 1600238,
		"sigla" : "AP"
	},
	{
		"id" : 3244,
		"nome" : "Ferreiros",
		"codigo_ibge" : 2605509,
		"sigla" : "PE"
	},
	{
		"id" : 1852,
		"nome" : "Ferros",
		"codigo_ibge" : 3125903,
		"sigla" : "MG"
	},
	{
		"id" : 1853,
		"nome" : "Fervedouro",
		"codigo_ibge" : 3125952,
		"sigla" : "MG"
	},
	{
		"id" : 2897,
		"nome" : "Figueira",
		"codigo_ibge" : 4107751,
		"sigla" : "PR"
	},
	{
		"id" : 1521,
		"nome" : "Figueirão",
		"codigo_ibge" : 5003900,
		"sigla" : "MS"
	},
	{
		"id" : 5477,
		"nome" : "Figueirópolis",
		"codigo_ibge" : 1707652,
		"sigla" : "TO"
	},
	{
		"id" : 1390,
		"nome" : "Figueirópolis d Oeste",
		"codigo_ibge" : 5103809,
		"sigla" : "MT"
	},
	{
		"id" : 412,
		"nome" : "Filadélfia",
		"codigo_ibge" : 2910859,
		"sigla" : "BA"
	},
	{
		"id" : 5478,
		"nome" : "Filadélfia",
		"codigo_ibge" : 1707702,
		"sigla" : "TO"
	},
	{
		"id" : 413,
		"nome" : "Firmino Alves",
		"codigo_ibge" : 2910909,
		"sigla" : "BA"
	},
	{
		"id" : 969,
		"nome" : "Firminópolis",
		"codigo_ibge" : 5207808,
		"sigla" : "GO"
	},
	{
		"id" : 131,
		"nome" : "Flexeiras",
		"codigo_ibge" : 2702801,
		"sigla" : "AL"
	},
	{
		"id" : 2898,
		"nome" : "Flor da Serra do Sul",
		"codigo_ibge" : 4107850,
		"sigla" : "PR"
	},
	{
		"id" : 4499,
		"nome" : "Flor do Sertão",
		"codigo_ibge" : 4205357,
		"sigla" : "SC"
	},
	{
		"id" : 4889,
		"nome" : "Flora Rica",
		"codigo_ibge" : 3515806,
		"sigla" : "SP"
	},
	{
		"id" : 2899,
		"nome" : "Floraí",
		"codigo_ibge" : 4107801,
		"sigla" : "PR"
	},
	{
		"id" : 3724,
		"nome" : "Florânia",
		"codigo_ibge" : 2403806,
		"sigla" : "RN"
	},
	{
		"id" : 4890,
		"nome" : "Floreal",
		"codigo_ibge" : 3515905,
		"sigla" : "SP"
	},
	{
		"id" : 3245,
		"nome" : "Flores",
		"codigo_ibge" : 2605608,
		"sigla" : "PE"
	},
	{
		"id" : 4016,
		"nome" : "Flores da Cunha",
		"codigo_ibge" : 4308201,
		"sigla" : "RS"
	},
	{
		"id" : 970,
		"nome" : "Flores de Goiás",
		"codigo_ibge" : 5207907,
		"sigla" : "GO"
	},
	{
		"id" : 3448,
		"nome" : "Flores do Piauí",
		"codigo_ibge" : 2203800,
		"sigla" : "PI"
	},
	{
		"id" : 3246,
		"nome" : "Floresta",
		"codigo_ibge" : 2605707,
		"sigla" : "PE"
	},
	{
		"id" : 2900,
		"nome" : "Floresta",
		"codigo_ibge" : 4107900,
		"sigla" : "PR"
	},
	{
		"id" : 414,
		"nome" : "Floresta Azul",
		"codigo_ibge" : 2911006,
		"sigla" : "BA"
	},
	{
		"id" : 2466,
		"nome" : "Floresta do Araguaia",
		"codigo_ibge" : 1503044,
		"sigla" : "PA"
	},
	{
		"id" : 3449,
		"nome" : "Floresta do Piauí",
		"codigo_ibge" : 2203859,
		"sigla" : "PI"
	},
	{
		"id" : 1854,
		"nome" : "Florestal",
		"codigo_ibge" : 3126000,
		"sigla" : "MG"
	},
	{
		"id" : 2901,
		"nome" : "Florestópolis",
		"codigo_ibge" : 4108007,
		"sigla" : "PR"
	},
	{
		"id" : 3450,
		"nome" : "Floriano",
		"codigo_ibge" : 2203909,
		"sigla" : "PI"
	},
	{
		"id" : 4017,
		"nome" : "Floriano Peixoto",
		"codigo_ibge" : 4308250,
		"sigla" : "RS"
	},
	{
		"id" : 4500,
		"nome" : "Florianópolis",
		"codigo_ibge" : 4205407,
		"sigla" : "SC"
	},
	{
		"id" : 2902,
		"nome" : "Flórida",
		"codigo_ibge" : 4108106,
		"sigla" : "PR"
	},
	{
		"id" : 4891,
		"nome" : "Flórida Paulista",
		"codigo_ibge" : 3516002,
		"sigla" : "SP"
	},
	{
		"id" : 4892,
		"nome" : "Florínea",
		"codigo_ibge" : 3516101,
		"sigla" : "SP"
	},
	{
		"id" : 242,
		"nome" : "Fonte Boa",
		"codigo_ibge" : 1301605,
		"sigla" : "AM"
	},
	{
		"id" : 4018,
		"nome" : "Fontoura Xavier",
		"codigo_ibge" : 4308300,
		"sigla" : "RS"
	},
	{
		"id" : 1855,
		"nome" : "Formiga",
		"codigo_ibge" : 3126109,
		"sigla" : "MG"
	},
	{
		"id" : 4019,
		"nome" : "Formigueiro",
		"codigo_ibge" : 4308409,
		"sigla" : "RS"
	},
	{
		"id" : 971,
		"nome" : "Formosa",
		"codigo_ibge" : 5208004,
		"sigla" : "GO"
	},
	{
		"id" : 1200,
		"nome" : "Formosa da Serra Negra",
		"codigo_ibge" : 2104099,
		"sigla" : "MA"
	},
	{
		"id" : 2903,
		"nome" : "Formosa do Oeste",
		"codigo_ibge" : 4108205,
		"sigla" : "PR"
	},
	{
		"id" : 415,
		"nome" : "Formosa do Rio Preto",
		"codigo_ibge" : 2911105,
		"sigla" : "BA"
	},
	{
		"id" : 4501,
		"nome" : "Formosa do Sul",
		"codigo_ibge" : 4205431,
		"sigla" : "SC"
	},
	{
		"id" : 972,
		"nome" : "Formoso",
		"codigo_ibge" : 5208103,
		"sigla" : "GO"
	},
	{
		"id" : 1856,
		"nome" : "Formoso",
		"codigo_ibge" : 3126208,
		"sigla" : "MG"
	},
	{
		"id" : 5479,
		"nome" : "Formoso do Araguaia",
		"codigo_ibge" : 1708205,
		"sigla" : "TO"
	},
	{
		"id" : 4020,
		"nome" : "Forquetinha",
		"codigo_ibge" : 4308433,
		"sigla" : "RS"
	},
	{
		"id" : 755,
		"nome" : "Forquilha",
		"codigo_ibge" : 2304350,
		"sigla" : "CE"
	},
	{
		"id" : 4502,
		"nome" : "Forquilhinha",
		"codigo_ibge" : 4205456,
		"sigla" : "SC"
	},
	{
		"id" : 756,
		"nome" : "Fortaleza",
		"codigo_ibge" : 2304400,
		"sigla" : "CE"
	},
	{
		"id" : 1857,
		"nome" : "Fortaleza de Minas",
		"codigo_ibge" : 3126307,
		"sigla" : "MG"
	},
	{
		"id" : 1201,
		"nome" : "Fortaleza dos Nogueiras",
		"codigo_ibge" : 2104107,
		"sigla" : "MA"
	},
	{
		"id" : 4021,
		"nome" : "Fortaleza dos Valos",
		"codigo_ibge" : 4308458,
		"sigla" : "RS"
	},
	{
		"id" : 757,
		"nome" : "Fortim",
		"codigo_ibge" : 2304459,
		"sigla" : "CE"
	},
	{
		"id" : 1202,
		"nome" : "Fortuna",
		"codigo_ibge" : 2104206,
		"sigla" : "MA"
	},
	{
		"id" : 1858,
		"nome" : "Fortuna de Minas",
		"codigo_ibge" : 3126406,
		"sigla" : "MG"
	},
	{
		"id" : 2904,
		"nome" : "Foz do Iguaçu",
		"codigo_ibge" : 4108304,
		"sigla" : "PR"
	},
	{
		"id" : 2905,
		"nome" : "Foz do Jordão",
		"codigo_ibge" : 4108452,
		"sigla" : "PR"
	},
	{
		"id" : 4503,
		"nome" : "Fraiburgo",
		"codigo_ibge" : 4205506,
		"sigla" : "SC"
	},
	{
		"id" : 4893,
		"nome" : "Franca",
		"codigo_ibge" : 3516200,
		"sigla" : "SP"
	},
	{
		"id" : 3451,
		"nome" : "Francinópolis",
		"codigo_ibge" : 2204006,
		"sigla" : "PI"
	},
	{
		"id" : 2906,
		"nome" : "Francisco Alves",
		"codigo_ibge" : 4108320,
		"sigla" : "PR"
	},
	{
		"id" : 3452,
		"nome" : "Francisco Ayres",
		"codigo_ibge" : 2204105,
		"sigla" : "PI"
	},
	{
		"id" : 1859,
		"nome" : "Francisco Badaró",
		"codigo_ibge" : 3126505,
		"sigla" : "MG"
	},
	{
		"id" : 2907,
		"nome" : "Francisco Beltrão",
		"codigo_ibge" : 4108403,
		"sigla" : "PR"
	},
	{
		"id" : 3725,
		"nome" : "Francisco Dantas",
		"codigo_ibge" : 2403905,
		"sigla" : "RN"
	},
	{
		"id" : 1860,
		"nome" : "Francisco Dumont",
		"codigo_ibge" : 3126604,
		"sigla" : "MG"
	},
	{
		"id" : 3453,
		"nome" : "Francisco Macedo",
		"codigo_ibge" : 2204154,
		"sigla" : "PI"
	},
	{
		"id" : 4894,
		"nome" : "Francisco Morato",
		"codigo_ibge" : 3516309,
		"sigla" : "SP"
	},
	{
		"id" : 1861,
		"nome" : "Francisco Sá",
		"codigo_ibge" : 3126703,
		"sigla" : "MG"
	},
	{
		"id" : 3454,
		"nome" : "Francisco Santos",
		"codigo_ibge" : 2204204,
		"sigla" : "PI"
	},
	{
		"id" : 1862,
		"nome" : "Franciscópolis",
		"codigo_ibge" : 3126752,
		"sigla" : "MG"
	},
	{
		"id" : 4895,
		"nome" : "Franco da Rocha",
		"codigo_ibge" : 3516408,
		"sigla" : "SP"
	},
	{
		"id" : 758,
		"nome" : "Frecheirinha",
		"codigo_ibge" : 2304509,
		"sigla" : "CE"
	},
	{
		"id" : 4022,
		"nome" : "Frederico Westphalen",
		"codigo_ibge" : 4308508,
		"sigla" : "RS"
	},
	{
		"id" : 1863,
		"nome" : "Frei Gaspar",
		"codigo_ibge" : 3126802,
		"sigla" : "MG"
	},
	{
		"id" : 1864,
		"nome" : "Frei Inocêncio",
		"codigo_ibge" : 3126901,
		"sigla" : "MG"
	},
	{
		"id" : 1865,
		"nome" : "Frei Lagonegro",
		"codigo_ibge" : 3126950,
		"sigla" : "MG"
	},
	{
		"id" : 2640,
		"nome" : "Frei Martinho",
		"codigo_ibge" : 2506202,
		"sigla" : "PB"
	},
	{
		"id" : 3247,
		"nome" : "Frei Miguelinho",
		"codigo_ibge" : 2605806,
		"sigla" : "PE"
	},
	{
		"id" : 5371,
		"nome" : "Frei Paulo",
		"codigo_ibge" : 2802304,
		"sigla" : "SE"
	},
	{
		"id" : 4504,
		"nome" : "Frei Rogério",
		"codigo_ibge" : 4205555,
		"sigla" : "SC"
	},
	{
		"id" : 1866,
		"nome" : "Fronteira",
		"codigo_ibge" : 3127008,
		"sigla" : "MG"
	},
	{
		"id" : 1867,
		"nome" : "Fronteira dos Vales",
		"codigo_ibge" : 3127057,
		"sigla" : "MG"
	},
	{
		"id" : 3455,
		"nome" : "Fronteiras",
		"codigo_ibge" : 2204303,
		"sigla" : "PI"
	},
	{
		"id" : 1868,
		"nome" : "Fruta de Leite",
		"codigo_ibge" : 3127073,
		"sigla" : "MG"
	},
	{
		"id" : 1869,
		"nome" : "Frutal",
		"codigo_ibge" : 3127107,
		"sigla" : "MG"
	},
	{
		"id" : 3726,
		"nome" : "Frutuoso Gomes",
		"codigo_ibge" : 2404002,
		"sigla" : "RN"
	},
	{
		"id" : 26,
		"nome" : "Fundão",
		"codigo_ibge" : 3202207,
		"sigla" : "ES"
	},
	{
		"id" : 1870,
		"nome" : "Funilândia",
		"codigo_ibge" : 3127206,
		"sigla" : "MG"
	},
	{
		"id" : 4896,
		"nome" : "Gabriel Monteiro",
		"codigo_ibge" : 3516507,
		"sigla" : "SP"
	},
	{
		"id" : 2641,
		"nome" : "Gado Bravo",
		"codigo_ibge" : 2506251,
		"sigla" : "PB"
	},
	{
		"id" : 4897,
		"nome" : "Gália",
		"codigo_ibge" : 3516606,
		"sigla" : "SP"
	},
	{
		"id" : 1871,
		"nome" : "Galiléia",
		"codigo_ibge" : 3127305,
		"sigla" : "MG"
	},
	{
		"id" : 3727,
		"nome" : "Galinhos",
		"codigo_ibge" : 2404101,
		"sigla" : "RN"
	},
	{
		"id" : 4505,
		"nome" : "Galvão",
		"codigo_ibge" : 4205605,
		"sigla" : "SC"
	},
	{
		"id" : 3248,
		"nome" : "Gameleira",
		"codigo_ibge" : 2605905,
		"sigla" : "PE"
	},
	{
		"id" : 973,
		"nome" : "Gameleira de Goiás",
		"codigo_ibge" : 5208152,
		"sigla" : "GO"
	},
	{
		"id" : 1872,
		"nome" : "Gameleiras",
		"codigo_ibge" : 3127339,
		"sigla" : "MG"
	},
	{
		"id" : 416,
		"nome" : "Gandu",
		"codigo_ibge" : 2911204,
		"sigla" : "BA"
	},
	{
		"id" : 3249,
		"nome" : "Garanhuns",
		"codigo_ibge" : 2606002,
		"sigla" : "PE"
	},
	{
		"id" : 5372,
		"nome" : "Gararu",
		"codigo_ibge" : 2802403,
		"sigla" : "SE"
	},
	{
		"id" : 4898,
		"nome" : "Garça",
		"codigo_ibge" : 3516705,
		"sigla" : "SP"
	},
	{
		"id" : 4023,
		"nome" : "Garibaldi",
		"codigo_ibge" : 4308607,
		"sigla" : "RS"
	},
	{
		"id" : 4506,
		"nome" : "Garopaba",
		"codigo_ibge" : 4205704,
		"sigla" : "SC"
	},
	{
		"id" : 2467,
		"nome" : "Garrafão do Norte",
		"codigo_ibge" : 1503077,
		"sigla" : "PA"
	},
	{
		"id" : 4024,
		"nome" : "Garruchos",
		"codigo_ibge" : 4308656,
		"sigla" : "RS"
	},
	{
		"id" : 4507,
		"nome" : "Garuva",
		"codigo_ibge" : 4205803,
		"sigla" : "SC"
	},
	{
		"id" : 4508,
		"nome" : "Gaspar",
		"codigo_ibge" : 4205902,
		"sigla" : "SC"
	},
	{
		"id" : 4899,
		"nome" : "Gastão Vidigal",
		"codigo_ibge" : 3516804,
		"sigla" : "SP"
	},
	{
		"id" : 1391,
		"nome" : "Gaúcha do Norte",
		"codigo_ibge" : 5103858,
		"sigla" : "MT"
	},
	{
		"id" : 4025,
		"nome" : "Gaurama",
		"codigo_ibge" : 4308706,
		"sigla" : "RS"
	},
	{
		"id" : 417,
		"nome" : "Gavião",
		"codigo_ibge" : 2911253,
		"sigla" : "BA"
	},
	{
		"id" : 4900,
		"nome" : "Gavião Peixoto",
		"codigo_ibge" : 3516853,
		"sigla" : "SP"
	},
	{
		"id" : 3456,
		"nome" : "Geminiano",
		"codigo_ibge" : 2204352,
		"sigla" : "PI"
	},
	{
		"id" : 4026,
		"nome" : "General Câmara",
		"codigo_ibge" : 4308805,
		"sigla" : "RS"
	},
	{
		"id" : 1392,
		"nome" : "General Carneiro",
		"codigo_ibge" : 5103908,
		"sigla" : "MT"
	},
	{
		"id" : 2908,
		"nome" : "General Carneiro",
		"codigo_ibge" : 4108502,
		"sigla" : "PR"
	},
	{
		"id" : 5373,
		"nome" : "General Maynard",
		"codigo_ibge" : 2802502,
		"sigla" : "SE"
	},
	{
		"id" : 4901,
		"nome" : "General Salgado",
		"codigo_ibge" : 3516903,
		"sigla" : "SP"
	},
	{
		"id" : 759,
		"nome" : "General Sampaio",
		"codigo_ibge" : 2304608,
		"sigla" : "CE"
	},
	{
		"id" : 4027,
		"nome" : "Gentil",
		"codigo_ibge" : 4308854,
		"sigla" : "RS"
	},
	{
		"id" : 418,
		"nome" : "Gentio do Ouro",
		"codigo_ibge" : 2911303,
		"sigla" : "BA"
	},
	{
		"id" : 4902,
		"nome" : "Getulina",
		"codigo_ibge" : 3517000,
		"sigla" : "SP"
	},
	{
		"id" : 4028,
		"nome" : "Getúlio Vargas",
		"codigo_ibge" : 4308904,
		"sigla" : "RS"
	},
	{
		"id" : 3457,
		"nome" : "Gilbués",
		"codigo_ibge" : 2204402,
		"sigla" : "PI"
	},
	{
		"id" : 132,
		"nome" : "Girau do Ponciano",
		"codigo_ibge" : 2702900,
		"sigla" : "AL"
	},
	{
		"id" : 4029,
		"nome" : "Giruá",
		"codigo_ibge" : 4309001,
		"sigla" : "RS"
	},
	{
		"id" : 1873,
		"nome" : "Glaucilândia",
		"codigo_ibge" : 3127354,
		"sigla" : "MG"
	},
	{
		"id" : 4903,
		"nome" : "Glicério",
		"codigo_ibge" : 3517109,
		"sigla" : "SP"
	},
	{
		"id" : 419,
		"nome" : "Glória",
		"codigo_ibge" : 2911402,
		"sigla" : "BA"
	},
	{
		"id" : 1393,
		"nome" : "Glória d Oeste",
		"codigo_ibge" : 5103957,
		"sigla" : "MT"
	},
	{
		"id" : 1522,
		"nome" : "Glória de Dourados",
		"codigo_ibge" : 5004007,
		"sigla" : "MS"
	},
	{
		"id" : 3250,
		"nome" : "Glória do Goitá",
		"codigo_ibge" : 2606101,
		"sigla" : "PE"
	},
	{
		"id" : 4030,
		"nome" : "Glorinha",
		"codigo_ibge" : 4309050,
		"sigla" : "RS"
	},
	{
		"id" : 1203,
		"nome" : "Godofredo Viana",
		"codigo_ibge" : 2104305,
		"sigla" : "MA"
	},
	{
		"id" : 2909,
		"nome" : "Godoy Moreira",
		"codigo_ibge" : 4108551,
		"sigla" : "PR"
	},
	{
		"id" : 1874,
		"nome" : "Goiabeira",
		"codigo_ibge" : 3127370,
		"sigla" : "MG"
	},
	{
		"id" : 1875,
		"nome" : "Goianá",
		"codigo_ibge" : 3127388,
		"sigla" : "MG"
	},
	{
		"id" : 3251,
		"nome" : "Goiana",
		"codigo_ibge" : 2606200,
		"sigla" : "PE"
	},
	{
		"id" : 974,
		"nome" : "Goianápolis",
		"codigo_ibge" : 5208400,
		"sigla" : "GO"
	},
	{
		"id" : 975,
		"nome" : "Goiandira",
		"codigo_ibge" : 5208509,
		"sigla" : "GO"
	},
	{
		"id" : 976,
		"nome" : "Goianésia",
		"codigo_ibge" : 5208608,
		"sigla" : "GO"
	},
	{
		"id" : 2468,
		"nome" : "Goianésia do Pará",
		"codigo_ibge" : 1503093,
		"sigla" : "PA"
	},
	{
		"id" : 977,
		"nome" : "Goiânia",
		"codigo_ibge" : 5208707,
		"sigla" : "GO"
	},
	{
		"id" : 3728,
		"nome" : "Goianinha",
		"codigo_ibge" : 2404200,
		"sigla" : "RN"
	},
	{
		"id" : 978,
		"nome" : "Goianira",
		"codigo_ibge" : 5208806,
		"sigla" : "GO"
	},
	{
		"id" : 5481,
		"nome" : "Goianorte",
		"codigo_ibge" : 1708304,
		"sigla" : "TO"
	},
	{
		"id" : 979,
		"nome" : "Goiás",
		"codigo_ibge" : 5208905,
		"sigla" : "GO"
	},
	{
		"id" : 5482,
		"nome" : "Goiatins",
		"codigo_ibge" : 1709005,
		"sigla" : "TO"
	},
	{
		"id" : 980,
		"nome" : "Goiatuba",
		"codigo_ibge" : 5209101,
		"sigla" : "GO"
	},
	{
		"id" : 2910,
		"nome" : "Goioerê",
		"codigo_ibge" : 4108601,
		"sigla" : "PR"
	},
	{
		"id" : 2911,
		"nome" : "Goioxim",
		"codigo_ibge" : 4108650,
		"sigla" : "PR"
	},
	{
		"id" : 1876,
		"nome" : "Gonçalves",
		"codigo_ibge" : 3127404,
		"sigla" : "MG"
	},
	{
		"id" : 1204,
		"nome" : "Gonçalves Dias",
		"codigo_ibge" : 2104404,
		"sigla" : "MA"
	},
	{
		"id" : 420,
		"nome" : "Gongogi",
		"codigo_ibge" : 2911501,
		"sigla" : "BA"
	},
	{
		"id" : 1877,
		"nome" : "Gonzaga",
		"codigo_ibge" : 3127503,
		"sigla" : "MG"
	},
	{
		"id" : 1878,
		"nome" : "Gouveia",
		"codigo_ibge" : 3127602,
		"sigla" : "MG"
	},
	{
		"id" : 981,
		"nome" : "Gouvelândia",
		"codigo_ibge" : 5209150,
		"sigla" : "GO"
	},
	{
		"id" : 1205,
		"nome" : "Governador Archer",
		"codigo_ibge" : 2104503,
		"sigla" : "MA"
	},
	{
		"id" : 4509,
		"nome" : "Governador Celso Ramos",
		"codigo_ibge" : 4206009,
		"sigla" : "SC"
	},
	{
		"id" : 3729,
		"nome" : "Governador Dix Sept Rosado",
		"codigo_ibge" : 2404309,
		"sigla" : "RN"
	},
	{
		"id" : 1206,
		"nome" : "Governador Edison Lobão",
		"codigo_ibge" : 2104552,
		"sigla" : "MA"
	},
	{
		"id" : 1207,
		"nome" : "Governador Eugênio Barros",
		"codigo_ibge" : 2104602,
		"sigla" : "MA"
	},
	{
		"id" : 4365,
		"nome" : "Governador Jorge Teixeira",
		"codigo_ibge" : 1101005,
		"sigla" : "RO"
	},
	{
		"id" : 27,
		"nome" : "Governador Lindenberg",
		"codigo_ibge" : 3202256,
		"sigla" : "ES"
	},
	{
		"id" : 1208,
		"nome" : "Governador Luiz Rocha",
		"codigo_ibge" : 2104628,
		"sigla" : "MA"
	},
	{
		"id" : 421,
		"nome" : "Governador Mangabeira",
		"codigo_ibge" : 2911600,
		"sigla" : "BA"
	},
	{
		"id" : 1209,
		"nome" : "Governador Newton Bello",
		"codigo_ibge" : 2104651,
		"sigla" : "MA"
	},
	{
		"id" : 1210,
		"nome" : "Governador Nunes Freire",
		"codigo_ibge" : 2104677,
		"sigla" : "MA"
	},
	{
		"id" : 1879,
		"nome" : "Governador Valadares",
		"codigo_ibge" : 3127701,
		"sigla" : "MG"
	},
	{
		"id" : 760,
		"nome" : "Graça",
		"codigo_ibge" : 2304657,
		"sigla" : "CE"
	},
	{
		"id" : 1211,
		"nome" : "Graça Aranha",
		"codigo_ibge" : 2104701,
		"sigla" : "MA"
	},
	{
		"id" : 5374,
		"nome" : "Gracho Cardoso",
		"codigo_ibge" : 2802601,
		"sigla" : "SE"
	},
	{
		"id" : 1212,
		"nome" : "Grajaú",
		"codigo_ibge" : 2104800,
		"sigla" : "MA"
	},
	{
		"id" : 4031,
		"nome" : "Gramado",
		"codigo_ibge" : 4309100,
		"sigla" : "RS"
	},
	{
		"id" : 4032,
		"nome" : "Gramado dos Loureiros",
		"codigo_ibge" : 4309126,
		"sigla" : "RS"
	},
	{
		"id" : 4033,
		"nome" : "Gramado Xavier",
		"codigo_ibge" : 4309159,
		"sigla" : "RS"
	},
	{
		"id" : 2912,
		"nome" : "Grandes Rios",
		"codigo_ibge" : 4108700,
		"sigla" : "PR"
	},
	{
		"id" : 3252,
		"nome" : "Granito",
		"codigo_ibge" : 2606309,
		"sigla" : "PE"
	},
	{
		"id" : 761,
		"nome" : "Granja",
		"codigo_ibge" : 2304707,
		"sigla" : "CE"
	},
	{
		"id" : 762,
		"nome" : "Granjeiro",
		"codigo_ibge" : 2304806,
		"sigla" : "CE"
	},
	{
		"id" : 1880,
		"nome" : "Grão Mogol",
		"codigo_ibge" : 3127800,
		"sigla" : "MG"
	},
	{
		"id" : 4510,
		"nome" : "Grão Pará",
		"codigo_ibge" : 4206108,
		"sigla" : "SC"
	},
	{
		"id" : 3253,
		"nome" : "Gravatá",
		"codigo_ibge" : 2606408,
		"sigla" : "PE"
	},
	{
		"id" : 4034,
		"nome" : "Gravataí",
		"codigo_ibge" : 4309209,
		"sigla" : "RS"
	},
	{
		"id" : 4511,
		"nome" : "Gravatal",
		"codigo_ibge" : 4206207,
		"sigla" : "SC"
	},
	{
		"id" : 763,
		"nome" : "Groaíras",
		"codigo_ibge" : 2304905,
		"sigla" : "CE"
	},
	{
		"id" : 3730,
		"nome" : "Grossos",
		"codigo_ibge" : 2404408,
		"sigla" : "RN"
	},
	{
		"id" : 1881,
		"nome" : "Grupiara",
		"codigo_ibge" : 3127909,
		"sigla" : "MG"
	},
	{
		"id" : 4035,
		"nome" : "Guabiju",
		"codigo_ibge" : 4309258,
		"sigla" : "RS"
	},
	{
		"id" : 4512,
		"nome" : "Guabiruba",
		"codigo_ibge" : 4206306,
		"sigla" : "SC"
	},
	{
		"id" : 28,
		"nome" : "Guaçuí",
		"codigo_ibge" : 3202306,
		"sigla" : "ES"
	},
	{
		"id" : 3458,
		"nome" : "Guadalupe",
		"codigo_ibge" : 2204501,
		"sigla" : "PI"
	},
	{
		"id" : 4036,
		"nome" : "Guaíba",
		"codigo_ibge" : 4309308,
		"sigla" : "RS"
	},
	{
		"id" : 4904,
		"nome" : "Guaiçara",
		"codigo_ibge" : 3517208,
		"sigla" : "SP"
	},
	{
		"id" : 4905,
		"nome" : "Guaimbê",
		"codigo_ibge" : 3517307,
		"sigla" : "SP"
	},
	{
		"id" : 4906,
		"nome" : "Guaíra",
		"codigo_ibge" : 3517406,
		"sigla" : "SP"
	},
	{
		"id" : 2913,
		"nome" : "Guaíra",
		"codigo_ibge" : 4108809,
		"sigla" : "PR"
	},
	{
		"id" : 2914,
		"nome" : "Guairaçá",
		"codigo_ibge" : 4108908,
		"sigla" : "PR"
	},
	{
		"id" : 764,
		"nome" : "Guaiúba",
		"codigo_ibge" : 2304954,
		"sigla" : "CE"
	},
	{
		"id" : 243,
		"nome" : "Guajará",
		"codigo_ibge" : 1301654,
		"sigla" : "AM"
	},
	{
		"id" : 4366,
		"nome" : "Guajará Mirim",
		"codigo_ibge" : 1100106,
		"sigla" : "RO"
	},
	{
		"id" : 422,
		"nome" : "Guajeru",
		"codigo_ibge" : 2911659,
		"sigla" : "BA"
	},
	{
		"id" : 3731,
		"nome" : "Guamaré",
		"codigo_ibge" : 2404507,
		"sigla" : "RN"
	},
	{
		"id" : 2915,
		"nome" : "Guamiranga",
		"codigo_ibge" : 4108957,
		"sigla" : "PR"
	},
	{
		"id" : 423,
		"nome" : "Guanambi",
		"codigo_ibge" : 2911709,
		"sigla" : "BA"
	},
	{
		"id" : 1882,
		"nome" : "Guanhães",
		"codigo_ibge" : 3128006,
		"sigla" : "MG"
	},
	{
		"id" : 1883,
		"nome" : "Guapé",
		"codigo_ibge" : 3128105,
		"sigla" : "MG"
	},
	{
		"id" : 4907,
		"nome" : "Guapiaçu",
		"codigo_ibge" : 3517505,
		"sigla" : "SP"
	},
	{
		"id" : 4908,
		"nome" : "Guapiara",
		"codigo_ibge" : 3517604,
		"sigla" : "SP"
	},
	{
		"id" : 3617,
		"nome" : "Guapimirim",
		"codigo_ibge" : 3301850,
		"sigla" : "RJ"
	},
	{
		"id" : 2916,
		"nome" : "Guapirama",
		"codigo_ibge" : 4109005,
		"sigla" : "PR"
	},
	{
		"id" : 982,
		"nome" : "Guapó",
		"codigo_ibge" : 5209200,
		"sigla" : "GO"
	},
	{
		"id" : 4037,
		"nome" : "Guaporé",
		"codigo_ibge" : 4309407,
		"sigla" : "RS"
	},
	{
		"id" : 2917,
		"nome" : "Guaporema",
		"codigo_ibge" : 4109104,
		"sigla" : "PR"
	},
	{
		"id" : 4909,
		"nome" : "Guará",
		"codigo_ibge" : 3517703,
		"sigla" : "SP"
	},
	{
		"id" : 2642,
		"nome" : "Guarabira",
		"codigo_ibge" : 2506301,
		"sigla" : "PB"
	},
	{
		"id" : 4910,
		"nome" : "Guaraçaí",
		"codigo_ibge" : 3517802,
		"sigla" : "SP"
	},
	{
		"id" : 4911,
		"nome" : "Guaraci",
		"codigo_ibge" : 3517901,
		"sigla" : "SP"
	},
	{
		"id" : 2918,
		"nome" : "Guaraci",
		"codigo_ibge" : 4109203,
		"sigla" : "PR"
	},
	{
		"id" : 4513,
		"nome" : "Guaraciaba",
		"codigo_ibge" : 4206405,
		"sigla" : "SC"
	},
	{
		"id" : 1884,
		"nome" : "Guaraciaba",
		"codigo_ibge" : 3128204,
		"sigla" : "MG"
	},
	{
		"id" : 765,
		"nome" : "Guaraciaba do Norte",
		"codigo_ibge" : 2305001,
		"sigla" : "CE"
	},
	{
		"id" : 1885,
		"nome" : "Guaraciama",
		"codigo_ibge" : 3128253,
		"sigla" : "MG"
	},
	{
		"id" : 5483,
		"nome" : "Guaraí",
		"codigo_ibge" : 1709302,
		"sigla" : "TO"
	},
	{
		"id" : 983,
		"nome" : "Guaraíta",
		"codigo_ibge" : 5209291,
		"sigla" : "GO"
	},
	{
		"id" : 766,
		"nome" : "Guaramiranga",
		"codigo_ibge" : 2305100,
		"sigla" : "CE"
	},
	{
		"id" : 4514,
		"nome" : "Guaramirim",
		"codigo_ibge" : 4206504,
		"sigla" : "SC"
	},
	{
		"id" : 1886,
		"nome" : "Guaranésia",
		"codigo_ibge" : 3128303,
		"sigla" : "MG"
	},
	{
		"id" : 1887,
		"nome" : "Guarani",
		"codigo_ibge" : 3128402,
		"sigla" : "MG"
	},
	{
		"id" : 4912,
		"nome" : "Guarani d Oeste",
		"codigo_ibge" : 3518008,
		"sigla" : "SP"
	},
	{
		"id" : 4038,
		"nome" : "Guarani das Missões",
		"codigo_ibge" : 4309506,
		"sigla" : "RS"
	},
	{
		"id" : 984,
		"nome" : "Guarani de Goiás",
		"codigo_ibge" : 5209408,
		"sigla" : "GO"
	},
	{
		"id" : 2919,
		"nome" : "Guaraniaçu",
		"codigo_ibge" : 4109302,
		"sigla" : "PR"
	},
	{
		"id" : 4913,
		"nome" : "Guarantã",
		"codigo_ibge" : 3518107,
		"sigla" : "SP"
	},
	{
		"id" : 1394,
		"nome" : "Guarantã do Norte",
		"codigo_ibge" : 5104104,
		"sigla" : "MT"
	},
	{
		"id" : 29,
		"nome" : "Guarapari",
		"codigo_ibge" : 3202405,
		"sigla" : "ES"
	},
	{
		"id" : 2920,
		"nome" : "Guarapuava",
		"codigo_ibge" : 4109401,
		"sigla" : "PR"
	},
	{
		"id" : 2921,
		"nome" : "Guaraqueçaba",
		"codigo_ibge" : 4109500,
		"sigla" : "PR"
	},
	{
		"id" : 1888,
		"nome" : "Guarará",
		"codigo_ibge" : 3128501,
		"sigla" : "MG"
	},
	{
		"id" : 4914,
		"nome" : "Guararapes",
		"codigo_ibge" : 3518206,
		"sigla" : "SP"
	},
	{
		"id" : 4915,
		"nome" : "Guararema",
		"codigo_ibge" : 3518305,
		"sigla" : "SP"
	},
	{
		"id" : 424,
		"nome" : "Guaratinga",
		"codigo_ibge" : 2911808,
		"sigla" : "BA"
	},
	{
		"id" : 4916,
		"nome" : "Guaratinguetá",
		"codigo_ibge" : 3518404,
		"sigla" : "SP"
	},
	{
		"id" : 2922,
		"nome" : "Guaratuba",
		"codigo_ibge" : 4109609,
		"sigla" : "PR"
	},
	{
		"id" : 1889,
		"nome" : "Guarda Mor",
		"codigo_ibge" : 3128600,
		"sigla" : "MG"
	},
	{
		"id" : 4917,
		"nome" : "Guareí",
		"codigo_ibge" : 3518503,
		"sigla" : "SP"
	},
	{
		"id" : 4918,
		"nome" : "Guariba",
		"codigo_ibge" : 3518602,
		"sigla" : "SP"
	},
	{
		"id" : 3459,
		"nome" : "Guaribas",
		"codigo_ibge" : 2204550,
		"sigla" : "PI"
	},
	{
		"id" : 985,
		"nome" : "Guarinos",
		"codigo_ibge" : 5209457,
		"sigla" : "GO"
	},
	{
		"id" : 4919,
		"nome" : "Guarujá",
		"codigo_ibge" : 3518701,
		"sigla" : "SP"
	},
	{
		"id" : 4515,
		"nome" : "Guarujá do Sul",
		"codigo_ibge" : 4206603,
		"sigla" : "SC"
	},
	{
		"id" : 4920,
		"nome" : "Guarulhos",
		"codigo_ibge" : 3518800,
		"sigla" : "SP"
	},
	{
		"id" : 4516,
		"nome" : "Guatambú",
		"codigo_ibge" : 4206652,
		"sigla" : "SC"
	},
	{
		"id" : 4921,
		"nome" : "Guatapará",
		"codigo_ibge" : 3518859,
		"sigla" : "SP"
	},
	{
		"id" : 1890,
		"nome" : "Guaxupé",
		"codigo_ibge" : 3128709,
		"sigla" : "MG"
	},
	{
		"id" : 1523,
		"nome" : "Guia Lopes da Laguna",
		"codigo_ibge" : 5004106,
		"sigla" : "MS"
	},
	{
		"id" : 1891,
		"nome" : "Guidoval",
		"codigo_ibge" : 3128808,
		"sigla" : "MG"
	},
	{
		"id" : 1213,
		"nome" : "Guimarães",
		"codigo_ibge" : 2104909,
		"sigla" : "MA"
	},
	{
		"id" : 1892,
		"nome" : "Guimarânia",
		"codigo_ibge" : 3128907,
		"sigla" : "MG"
	},
	{
		"id" : 1395,
		"nome" : "Guiratinga",
		"codigo_ibge" : 5104203,
		"sigla" : "MT"
	},
	{
		"id" : 1893,
		"nome" : "Guiricema",
		"codigo_ibge" : 3129004,
		"sigla" : "MG"
	},
	{
		"id" : 1894,
		"nome" : "Gurinhatã",
		"codigo_ibge" : 3129103,
		"sigla" : "MG"
	},
	{
		"id" : 2643,
		"nome" : "Gurinhém",
		"codigo_ibge" : 2506400,
		"sigla" : "PB"
	},
	{
		"id" : 2644,
		"nome" : "Gurjão",
		"codigo_ibge" : 2506509,
		"sigla" : "PB"
	},
	{
		"id" : 2469,
		"nome" : "Gurupá",
		"codigo_ibge" : 1503101,
		"sigla" : "PA"
	},
	{
		"id" : 5484,
		"nome" : "Gurupi",
		"codigo_ibge" : 1709500,
		"sigla" : "TO"
	},
	{
		"id" : 4922,
		"nome" : "Guzolândia",
		"codigo_ibge" : 3518909,
		"sigla" : "SP"
	},
	{
		"id" : 4039,
		"nome" : "Harmonia",
		"codigo_ibge" : 4309555,
		"sigla" : "RS"
	},
	{
		"id" : 986,
		"nome" : "Heitoraí",
		"codigo_ibge" : 5209606,
		"sigla" : "GO"
	},
	{
		"id" : 1895,
		"nome" : "Heliodora",
		"codigo_ibge" : 3129202,
		"sigla" : "MG"
	},
	{
		"id" : 425,
		"nome" : "Heliópolis",
		"codigo_ibge" : 2911857,
		"sigla" : "BA"
	},
	{
		"id" : 4923,
		"nome" : "Herculândia",
		"codigo_ibge" : 3519006,
		"sigla" : "SP"
	},
	{
		"id" : 4040,
		"nome" : "Herval",
		"codigo_ibge" : 4307104,
		"sigla" : "RS"
	},
	{
		"id" : 4517,
		"nome" : "Herval d Oeste",
		"codigo_ibge" : 4206702,
		"sigla" : "SC"
	},
	{
		"id" : 4041,
		"nome" : "Herveiras",
		"codigo_ibge" : 4309571,
		"sigla" : "RS"
	},
	{
		"id" : 767,
		"nome" : "Hidrolândia",
		"codigo_ibge" : 2305209,
		"sigla" : "CE"
	},
	{
		"id" : 987,
		"nome" : "Hidrolândia",
		"codigo_ibge" : 5209705,
		"sigla" : "GO"
	},
	{
		"id" : 988,
		"nome" : "Hidrolina",
		"codigo_ibge" : 5209804,
		"sigla" : "GO"
	},
	{
		"id" : 4924,
		"nome" : "Holambra",
		"codigo_ibge" : 3519055,
		"sigla" : "SP"
	},
	{
		"id" : 2923,
		"nome" : "Honório Serpa",
		"codigo_ibge" : 4109658,
		"sigla" : "PR"
	},
	{
		"id" : 768,
		"nome" : "Horizonte",
		"codigo_ibge" : 2305233,
		"sigla" : "CE"
	},
	{
		"id" : 4042,
		"nome" : "Horizontina",
		"codigo_ibge" : 4309605,
		"sigla" : "RS"
	},
	{
		"id" : 4925,
		"nome" : "Hortolândia",
		"codigo_ibge" : 3519071,
		"sigla" : "SP"
	},
	{
		"id" : 3460,
		"nome" : "Hugo Napoleão",
		"codigo_ibge" : 2204600,
		"sigla" : "PI"
	},
	{
		"id" : 4043,
		"nome" : "Hulha Negra",
		"codigo_ibge" : 4309654,
		"sigla" : "RS"
	},
	{
		"id" : 4044,
		"nome" : "Humaitá",
		"codigo_ibge" : 4309704,
		"sigla" : "RS"
	},
	{
		"id" : 244,
		"nome" : "Humaitá",
		"codigo_ibge" : 1301704,
		"sigla" : "AM"
	},
	{
		"id" : 1214,
		"nome" : "Humberto de Campos",
		"codigo_ibge" : 2105005,
		"sigla" : "MA"
	},
	{
		"id" : 4926,
		"nome" : "Iacanga",
		"codigo_ibge" : 3519105,
		"sigla" : "SP"
	},
	{
		"id" : 989,
		"nome" : "Iaciara",
		"codigo_ibge" : 5209903,
		"sigla" : "GO"
	},
	{
		"id" : 4927,
		"nome" : "Iacri",
		"codigo_ibge" : 3519204,
		"sigla" : "SP"
	},
	{
		"id" : 426,
		"nome" : "Iaçu",
		"codigo_ibge" : 2911907,
		"sigla" : "BA"
	},
	{
		"id" : 1896,
		"nome" : "Iapu",
		"codigo_ibge" : 3129301,
		"sigla" : "MG"
	},
	{
		"id" : 4928,
		"nome" : "Iaras",
		"codigo_ibge" : 3519253,
		"sigla" : "SP"
	},
	{
		"id" : 3254,
		"nome" : "Iati",
		"codigo_ibge" : 2606507,
		"sigla" : "PE"
	},
	{
		"id" : 2924,
		"nome" : "Ibaiti",
		"codigo_ibge" : 4109708,
		"sigla" : "PR"
	},
	{
		"id" : 4045,
		"nome" : "Ibarama",
		"codigo_ibge" : 4309753,
		"sigla" : "RS"
	},
	{
		"id" : 769,
		"nome" : "Ibaretama",
		"codigo_ibge" : 2305266,
		"sigla" : "CE"
	},
	{
		"id" : 4929,
		"nome" : "Ibaté",
		"codigo_ibge" : 3519303,
		"sigla" : "SP"
	},
	{
		"id" : 133,
		"nome" : "Ibateguara",
		"codigo_ibge" : 2703007,
		"sigla" : "AL"
	},
	{
		"id" : 30,
		"nome" : "Ibatiba",
		"codigo_ibge" : 3202454,
		"sigla" : "ES"
	},
	{
		"id" : 2925,
		"nome" : "Ibema",
		"codigo_ibge" : 4109757,
		"sigla" : "PR"
	},
	{
		"id" : 1897,
		"nome" : "Ibertioga",
		"codigo_ibge" : 3129400,
		"sigla" : "MG"
	},
	{
		"id" : 1898,
		"nome" : "Ibiá",
		"codigo_ibge" : 3129509,
		"sigla" : "MG"
	},
	{
		"id" : 4046,
		"nome" : "Ibiaçá",
		"codigo_ibge" : 4309803,
		"sigla" : "RS"
	},
	{
		"id" : 1899,
		"nome" : "Ibiaí",
		"codigo_ibge" : 3129608,
		"sigla" : "MG"
	},
	{
		"id" : 4518,
		"nome" : "Ibiam",
		"codigo_ibge" : 4206751,
		"sigla" : "SC"
	},
	{
		"id" : 770,
		"nome" : "Ibiapina",
		"codigo_ibge" : 2305308,
		"sigla" : "CE"
	},
	{
		"id" : 2645,
		"nome" : "Ibiara",
		"codigo_ibge" : 2506608,
		"sigla" : "PB"
	},
	{
		"id" : 427,
		"nome" : "Ibiassucê",
		"codigo_ibge" : 2912004,
		"sigla" : "BA"
	},
	{
		"id" : 428,
		"nome" : "Ibicaraí",
		"codigo_ibge" : 2912103,
		"sigla" : "BA"
	},
	{
		"id" : 4519,
		"nome" : "Ibicaré",
		"codigo_ibge" : 4206801,
		"sigla" : "SC"
	},
	{
		"id" : 429,
		"nome" : "Ibicoara",
		"codigo_ibge" : 2912202,
		"sigla" : "BA"
	},
	{
		"id" : 430,
		"nome" : "Ibicuí",
		"codigo_ibge" : 2912301,
		"sigla" : "BA"
	},
	{
		"id" : 771,
		"nome" : "Ibicuitinga",
		"codigo_ibge" : 2305332,
		"sigla" : "CE"
	},
	{
		"id" : 3255,
		"nome" : "Ibimirim",
		"codigo_ibge" : 2606606,
		"sigla" : "PE"
	},
	{
		"id" : 431,
		"nome" : "Ibipeba",
		"codigo_ibge" : 2912400,
		"sigla" : "BA"
	},
	{
		"id" : 432,
		"nome" : "Ibipitanga",
		"codigo_ibge" : 2912509,
		"sigla" : "BA"
	},
	{
		"id" : 2926,
		"nome" : "Ibiporã",
		"codigo_ibge" : 4109807,
		"sigla" : "PR"
	},
	{
		"id" : 433,
		"nome" : "Ibiquera",
		"codigo_ibge" : 2912608,
		"sigla" : "BA"
	},
	{
		"id" : 4930,
		"nome" : "Ibirá",
		"codigo_ibge" : 3519402,
		"sigla" : "SP"
	},
	{
		"id" : 1900,
		"nome" : "Ibiracatu",
		"codigo_ibge" : 3129657,
		"sigla" : "MG"
	},
	{
		"id" : 1901,
		"nome" : "Ibiraci",
		"codigo_ibge" : 3129707,
		"sigla" : "MG"
	},
	{
		"id" : 31,
		"nome" : "Ibiraçu",
		"codigo_ibge" : 3202504,
		"sigla" : "ES"
	},
	{
		"id" : 4047,
		"nome" : "Ibiraiaras",
		"codigo_ibge" : 4309902,
		"sigla" : "RS"
	},
	{
		"id" : 3256,
		"nome" : "Ibirajuba",
		"codigo_ibge" : 2606705,
		"sigla" : "PE"
	},
	{
		"id" : 4520,
		"nome" : "Ibirama",
		"codigo_ibge" : 4206900,
		"sigla" : "SC"
	},
	{
		"id" : 434,
		"nome" : "Ibirapitanga",
		"codigo_ibge" : 2912707,
		"sigla" : "BA"
	},
	{
		"id" : 435,
		"nome" : "Ibirapuã",
		"codigo_ibge" : 2912806,
		"sigla" : "BA"
	},
	{
		"id" : 4048,
		"nome" : "Ibirapuitã",
		"codigo_ibge" : 4309951,
		"sigla" : "RS"
	},
	{
		"id" : 4931,
		"nome" : "Ibirarema",
		"codigo_ibge" : 3519501,
		"sigla" : "SP"
	},
	{
		"id" : 436,
		"nome" : "Ibirataia",
		"codigo_ibge" : 2912905,
		"sigla" : "BA"
	},
	{
		"id" : 1902,
		"nome" : "Ibirité",
		"codigo_ibge" : 3129806,
		"sigla" : "MG"
	},
	{
		"id" : 4049,
		"nome" : "Ibirubá",
		"codigo_ibge" : 4310009,
		"sigla" : "RS"
	},
	{
		"id" : 437,
		"nome" : "Ibitiara",
		"codigo_ibge" : 2913002,
		"sigla" : "BA"
	},
	{
		"id" : 4932,
		"nome" : "Ibitinga",
		"codigo_ibge" : 3519600,
		"sigla" : "SP"
	},
	{
		"id" : 32,
		"nome" : "Ibitirama",
		"codigo_ibge" : 3202553,
		"sigla" : "ES"
	},
	{
		"id" : 438,
		"nome" : "Ibititá",
		"codigo_ibge" : 2913101,
		"sigla" : "BA"
	},
	{
		"id" : 1903,
		"nome" : "Ibitiúra de Minas",
		"codigo_ibge" : 3129905,
		"sigla" : "MG"
	},
	{
		"id" : 1904,
		"nome" : "Ibituruna",
		"codigo_ibge" : 3130002,
		"sigla" : "MG"
	},
	{
		"id" : 4933,
		"nome" : "Ibiúna",
		"codigo_ibge" : 3519709,
		"sigla" : "SP"
	},
	{
		"id" : 439,
		"nome" : "Ibotirama",
		"codigo_ibge" : 2913200,
		"sigla" : "BA"
	},
	{
		"id" : 772,
		"nome" : "Icapuí",
		"codigo_ibge" : 2305357,
		"sigla" : "CE"
	},
	{
		"id" : 4521,
		"nome" : "Içara",
		"codigo_ibge" : 4207007,
		"sigla" : "SC"
	},
	{
		"id" : 1905,
		"nome" : "Icaraí de Minas",
		"codigo_ibge" : 3130051,
		"sigla" : "MG"
	},
	{
		"id" : 2927,
		"nome" : "Icaraíma",
		"codigo_ibge" : 4109906,
		"sigla" : "PR"
	},
	{
		"id" : 1215,
		"nome" : "Icatu",
		"codigo_ibge" : 2105104,
		"sigla" : "MA"
	},
	{
		"id" : 4934,
		"nome" : "Icém",
		"codigo_ibge" : 3519808,
		"sigla" : "SP"
	},
	{
		"id" : 440,
		"nome" : "Ichu",
		"codigo_ibge" : 2913309,
		"sigla" : "BA"
	},
	{
		"id" : 773,
		"nome" : "Icó",
		"codigo_ibge" : 2305407,
		"sigla" : "CE"
	},
	{
		"id" : 33,
		"nome" : "Iconha",
		"codigo_ibge" : 3202603,
		"sigla" : "ES"
	},
	{
		"id" : 3732,
		"nome" : "Ielmo Marinho",
		"codigo_ibge" : 2404606,
		"sigla" : "RN"
	},
	{
		"id" : 4935,
		"nome" : "Iepê",
		"codigo_ibge" : 3519907,
		"sigla" : "SP"
	},
	{
		"id" : 134,
		"nome" : "Igaci",
		"codigo_ibge" : 2703106,
		"sigla" : "AL"
	},
	{
		"id" : 441,
		"nome" : "Igaporã",
		"codigo_ibge" : 2913408,
		"sigla" : "BA"
	},
	{
		"id" : 4936,
		"nome" : "Igaraçu do Tietê",
		"codigo_ibge" : 3520004,
		"sigla" : "SP"
	},
	{
		"id" : 2646,
		"nome" : "Igaracy",
		"codigo_ibge" : 2502607,
		"sigla" : "PB"
	},
	{
		"id" : 4937,
		"nome" : "Igarapava",
		"codigo_ibge" : 3520103,
		"sigla" : "SP"
	},
	{
		"id" : 1906,
		"nome" : "Igarapé",
		"codigo_ibge" : 3130101,
		"sigla" : "MG"
	},
	{
		"id" : 2470,
		"nome" : "Igarapé Açu",
		"codigo_ibge" : 1503200,
		"sigla" : "PA"
	},
	{
		"id" : 1216,
		"nome" : "Igarapé do Meio",
		"codigo_ibge" : 2105153,
		"sigla" : "MA"
	},
	{
		"id" : 1217,
		"nome" : "Igarapé Grande",
		"codigo_ibge" : 2105203,
		"sigla" : "MA"
	},
	{
		"id" : 2471,
		"nome" : "Igarapé Miri",
		"codigo_ibge" : 1503309,
		"sigla" : "PA"
	},
	{
		"id" : 3257,
		"nome" : "Igarassu",
		"codigo_ibge" : 2606804,
		"sigla" : "PE"
	},
	{
		"id" : 4938,
		"nome" : "Igaratá",
		"codigo_ibge" : 3520202,
		"sigla" : "SP"
	},
	{
		"id" : 1907,
		"nome" : "Igaratinga",
		"codigo_ibge" : 3130200,
		"sigla" : "MG"
	},
	{
		"id" : 442,
		"nome" : "Igrapiúna",
		"codigo_ibge" : 2913457,
		"sigla" : "BA"
	},
	{
		"id" : 135,
		"nome" : "Igreja Nova",
		"codigo_ibge" : 2703205,
		"sigla" : "AL"
	},
	{
		"id" : 4050,
		"nome" : "Igrejinha",
		"codigo_ibge" : 4310108,
		"sigla" : "RS"
	},
	{
		"id" : 3618,
		"nome" : "Iguaba Grande",
		"codigo_ibge" : 3301876,
		"sigla" : "RJ"
	},
	{
		"id" : 443,
		"nome" : "Iguaí",
		"codigo_ibge" : 2913507,
		"sigla" : "BA"
	},
	{
		"id" : 4939,
		"nome" : "Iguape",
		"codigo_ibge" : 3520301,
		"sigla" : "SP"
	},
	{
		"id" : 2928,
		"nome" : "Iguaraçu",
		"codigo_ibge" : 4110003,
		"sigla" : "PR"
	},
	{
		"id" : 3258,
		"nome" : "Iguaracy",
		"codigo_ibge" : 2606903,
		"sigla" : "PE"
	},
	{
		"id" : 1908,
		"nome" : "Iguatama",
		"codigo_ibge" : 3130309,
		"sigla" : "MG"
	},
	{
		"id" : 1524,
		"nome" : "Iguatemi",
		"codigo_ibge" : 5004304,
		"sigla" : "MS"
	},
	{
		"id" : 2929,
		"nome" : "Iguatu",
		"codigo_ibge" : 4110052,
		"sigla" : "PR"
	},
	{
		"id" : 774,
		"nome" : "Iguatu",
		"codigo_ibge" : 2305506,
		"sigla" : "CE"
	},
	{
		"id" : 1909,
		"nome" : "Ijaci",
		"codigo_ibge" : 3130408,
		"sigla" : "MG"
	},
	{
		"id" : 4051,
		"nome" : "Ijuí",
		"codigo_ibge" : 4310207,
		"sigla" : "RS"
	},
	{
		"id" : 4940,
		"nome" : "Ilha Comprida",
		"codigo_ibge" : 3520426,
		"sigla" : "SP"
	},
	{
		"id" : 5375,
		"nome" : "Ilha das Flores",
		"codigo_ibge" : 2802700,
		"sigla" : "SE"
	},
	{
		"id" : 3259,
		"nome" : "Ilha de Itamaracá",
		"codigo_ibge" : 2607604,
		"sigla" : "PE"
	},
	{
		"id" : 3461,
		"nome" : "Ilha Grande",
		"codigo_ibge" : 2204659,
		"sigla" : "PI"
	},
	{
		"id" : 4941,
		"nome" : "Ilha Solteira",
		"codigo_ibge" : 3520442,
		"sigla" : "SP"
	},
	{
		"id" : 4942,
		"nome" : "Ilhabela",
		"codigo_ibge" : 3520400,
		"sigla" : "SP"
	},
	{
		"id" : 444,
		"nome" : "Ilhéus",
		"codigo_ibge" : 2913606,
		"sigla" : "BA"
	},
	{
		"id" : 4522,
		"nome" : "Ilhota",
		"codigo_ibge" : 4207106,
		"sigla" : "SC"
	},
	{
		"id" : 1910,
		"nome" : "Ilicínea",
		"codigo_ibge" : 3130507,
		"sigla" : "MG"
	},
	{
		"id" : 4052,
		"nome" : "Ilópolis",
		"codigo_ibge" : 4310306,
		"sigla" : "RS"
	},
	{
		"id" : 2647,
		"nome" : "Imaculada",
		"codigo_ibge" : 2506707,
		"sigla" : "PB"
	},
	{
		"id" : 4523,
		"nome" : "Imaruí",
		"codigo_ibge" : 4207205,
		"sigla" : "SC"
	},
	{
		"id" : 2930,
		"nome" : "Imbaú",
		"codigo_ibge" : 4110078,
		"sigla" : "PR"
	},
	{
		"id" : 4053,
		"nome" : "Imbé",
		"codigo_ibge" : 4310330,
		"sigla" : "RS"
	},
	{
		"id" : 1911,
		"nome" : "Imbé de Minas",
		"codigo_ibge" : 3130556,
		"sigla" : "MG"
	},
	{
		"id" : 4524,
		"nome" : "Imbituba",
		"codigo_ibge" : 4207304,
		"sigla" : "SC"
	},
	{
		"id" : 2931,
		"nome" : "Imbituva",
		"codigo_ibge" : 4110102,
		"sigla" : "PR"
	},
	{
		"id" : 4525,
		"nome" : "Imbuia",
		"codigo_ibge" : 4207403,
		"sigla" : "SC"
	},
	{
		"id" : 4054,
		"nome" : "Imigrante",
		"codigo_ibge" : 4310363,
		"sigla" : "RS"
	},
	{
		"id" : 1218,
		"nome" : "Imperatriz",
		"codigo_ibge" : 2105302,
		"sigla" : "MA"
	},
	{
		"id" : 2932,
		"nome" : "Inácio Martins",
		"codigo_ibge" : 4110201,
		"sigla" : "PR"
	},
	{
		"id" : 990,
		"nome" : "Inaciolândia",
		"codigo_ibge" : 5209937,
		"sigla" : "GO"
	},
	{
		"id" : 3260,
		"nome" : "Inajá",
		"codigo_ibge" : 2607000,
		"sigla" : "PE"
	},
	{
		"id" : 2933,
		"nome" : "Inajá",
		"codigo_ibge" : 4110300,
		"sigla" : "PR"
	},
	{
		"id" : 1912,
		"nome" : "Inconfidentes",
		"codigo_ibge" : 3130606,
		"sigla" : "MG"
	},
	{
		"id" : 1913,
		"nome" : "Indaiabira",
		"codigo_ibge" : 3130655,
		"sigla" : "MG"
	},
	{
		"id" : 4526,
		"nome" : "Indaial",
		"codigo_ibge" : 4207502,
		"sigla" : "SC"
	},
	{
		"id" : 4943,
		"nome" : "Indaiatuba",
		"codigo_ibge" : 3520509,
		"sigla" : "SP"
	},
	{
		"id" : 4055,
		"nome" : "Independência",
		"codigo_ibge" : 4310405,
		"sigla" : "RS"
	},
	{
		"id" : 775,
		"nome" : "Independência",
		"codigo_ibge" : 2305605,
		"sigla" : "CE"
	},
	{
		"id" : 4944,
		"nome" : "Indiana",
		"codigo_ibge" : 3520608,
		"sigla" : "SP"
	},
	{
		"id" : 2934,
		"nome" : "Indianópolis",
		"codigo_ibge" : 4110409,
		"sigla" : "PR"
	},
	{
		"id" : 1914,
		"nome" : "Indianópolis",
		"codigo_ibge" : 3130705,
		"sigla" : "MG"
	},
	{
		"id" : 4945,
		"nome" : "Indiaporã",
		"codigo_ibge" : 3520707,
		"sigla" : "SP"
	},
	{
		"id" : 991,
		"nome" : "Indiara",
		"codigo_ibge" : 5209952,
		"sigla" : "GO"
	},
	{
		"id" : 5376,
		"nome" : "Indiaroba",
		"codigo_ibge" : 2802809,
		"sigla" : "SE"
	},
	{
		"id" : 1396,
		"nome" : "Indiavaí",
		"codigo_ibge" : 5104500,
		"sigla" : "MT"
	},
	{
		"id" : 2648,
		"nome" : "Ingá",
		"codigo_ibge" : 2506806,
		"sigla" : "PB"
	},
	{
		"id" : 1915,
		"nome" : "Ingaí",
		"codigo_ibge" : 3130804,
		"sigla" : "MG"
	},
	{
		"id" : 3261,
		"nome" : "Ingazeira",
		"codigo_ibge" : 2607109,
		"sigla" : "PE"
	},
	{
		"id" : 4056,
		"nome" : "Inhacorá",
		"codigo_ibge" : 4310413,
		"sigla" : "RS"
	},
	{
		"id" : 445,
		"nome" : "Inhambupe",
		"codigo_ibge" : 2913705,
		"sigla" : "BA"
	},
	{
		"id" : 2472,
		"nome" : "Inhangapi",
		"codigo_ibge" : 1503408,
		"sigla" : "PA"
	},
	{
		"id" : 136,
		"nome" : "Inhapi",
		"codigo_ibge" : 2703304,
		"sigla" : "AL"
	},
	{
		"id" : 1916,
		"nome" : "Inhapim",
		"codigo_ibge" : 3130903,
		"sigla" : "MG"
	},
	{
		"id" : 1917,
		"nome" : "Inhaúma",
		"codigo_ibge" : 3131000,
		"sigla" : "MG"
	},
	{
		"id" : 3462,
		"nome" : "Inhuma",
		"codigo_ibge" : 2204709,
		"sigla" : "PI"
	},
	{
		"id" : 992,
		"nome" : "Inhumas",
		"codigo_ibge" : 5210000,
		"sigla" : "GO"
	},
	{
		"id" : 1918,
		"nome" : "Inimutaba",
		"codigo_ibge" : 3131109,
		"sigla" : "MG"
	},
	{
		"id" : 1525,
		"nome" : "Inocência",
		"codigo_ibge" : 5004403,
		"sigla" : "MS"
	},
	{
		"id" : 4946,
		"nome" : "Inúbia Paulista",
		"codigo_ibge" : 3520806,
		"sigla" : "SP"
	},
	{
		"id" : 4527,
		"nome" : "Iomerê",
		"codigo_ibge" : 4207577,
		"sigla" : "SC"
	},
	{
		"id" : 1919,
		"nome" : "Ipaba",
		"codigo_ibge" : 3131158,
		"sigla" : "MG"
	},
	{
		"id" : 993,
		"nome" : "Ipameri",
		"codigo_ibge" : 5210109,
		"sigla" : "GO"
	},
	{
		"id" : 1920,
		"nome" : "Ipanema",
		"codigo_ibge" : 3131208,
		"sigla" : "MG"
	},
	{
		"id" : 3733,
		"nome" : "Ipanguaçu",
		"codigo_ibge" : 2404705,
		"sigla" : "RN"
	},
	{
		"id" : 776,
		"nome" : "Ipaporanga",
		"codigo_ibge" : 2305654,
		"sigla" : "CE"
	},
	{
		"id" : 1921,
		"nome" : "Ipatinga",
		"codigo_ibge" : 3131307,
		"sigla" : "MG"
	},
	{
		"id" : 777,
		"nome" : "Ipaumirim",
		"codigo_ibge" : 2305704,
		"sigla" : "CE"
	},
	{
		"id" : 4947,
		"nome" : "Ipaussu",
		"codigo_ibge" : 3520905,
		"sigla" : "SP"
	},
	{
		"id" : 4057,
		"nome" : "Ipê",
		"codigo_ibge" : 4310439,
		"sigla" : "RS"
	},
	{
		"id" : 446,
		"nome" : "Ipecaetá",
		"codigo_ibge" : 2913804,
		"sigla" : "BA"
	},
	{
		"id" : 4948,
		"nome" : "Iperó",
		"codigo_ibge" : 3521002,
		"sigla" : "SP"
	},
	{
		"id" : 4949,
		"nome" : "Ipeúna",
		"codigo_ibge" : 3521101,
		"sigla" : "SP"
	},
	{
		"id" : 1922,
		"nome" : "Ipiaçu",
		"codigo_ibge" : 3131406,
		"sigla" : "MG"
	},
	{
		"id" : 447,
		"nome" : "Ipiaú",
		"codigo_ibge" : 2913903,
		"sigla" : "BA"
	},
	{
		"id" : 4950,
		"nome" : "Ipiguá",
		"codigo_ibge" : 3521150,
		"sigla" : "SP"
	},
	{
		"id" : 4528,
		"nome" : "Ipira",
		"codigo_ibge" : 4207601,
		"sigla" : "SC"
	},
	{
		"id" : 448,
		"nome" : "Ipirá",
		"codigo_ibge" : 2914000,
		"sigla" : "BA"
	},
	{
		"id" : 2935,
		"nome" : "Ipiranga",
		"codigo_ibge" : 4110508,
		"sigla" : "PR"
	},
	{
		"id" : 994,
		"nome" : "Ipiranga de Goiás",
		"codigo_ibge" : 5210158,
		"sigla" : "GO"
	},
	{
		"id" : 1397,
		"nome" : "Ipiranga do Norte",
		"codigo_ibge" : 5104526,
		"sigla" : "MT"
	},
	{
		"id" : 3463,
		"nome" : "Ipiranga do Piauí",
		"codigo_ibge" : 2204808,
		"sigla" : "PI"
	},
	{
		"id" : 4058,
		"nome" : "Ipiranga do Sul",
		"codigo_ibge" : 4310462,
		"sigla" : "RS"
	},
	{
		"id" : 245,
		"nome" : "Ipixuna",
		"codigo_ibge" : 1301803,
		"sigla" : "AM"
	},
	{
		"id" : 2473,
		"nome" : "Ipixuna do Pará",
		"codigo_ibge" : 1503457,
		"sigla" : "PA"
	},
	{
		"id" : 3262,
		"nome" : "Ipojuca",
		"codigo_ibge" : 2607208,
		"sigla" : "PE"
	},
	{
		"id" : 2936,
		"nome" : "Iporã",
		"codigo_ibge" : 4110607,
		"sigla" : "PR"
	},
	{
		"id" : 995,
		"nome" : "Iporá",
		"codigo_ibge" : 5210208,
		"sigla" : "GO"
	},
	{
		"id" : 4529,
		"nome" : "Iporã do Oeste",
		"codigo_ibge" : 4207650,
		"sigla" : "SC"
	},
	{
		"id" : 4951,
		"nome" : "Iporanga",
		"codigo_ibge" : 3521200,
		"sigla" : "SP"
	},
	{
		"id" : 778,
		"nome" : "Ipu",
		"codigo_ibge" : 2305803,
		"sigla" : "CE"
	},
	{
		"id" : 4952,
		"nome" : "Ipuã",
		"codigo_ibge" : 3521309,
		"sigla" : "SP"
	},
	{
		"id" : 4530,
		"nome" : "Ipuaçu",
		"codigo_ibge" : 4207684,
		"sigla" : "SC"
	},
	{
		"id" : 3263,
		"nome" : "Ipubi",
		"codigo_ibge" : 2607307,
		"sigla" : "PE"
	},
	{
		"id" : 3734,
		"nome" : "Ipueira",
		"codigo_ibge" : 2404804,
		"sigla" : "RN"
	},
	{
		"id" : 779,
		"nome" : "Ipueiras",
		"codigo_ibge" : 2305902,
		"sigla" : "CE"
	},
	{
		"id" : 5485,
		"nome" : "Ipueiras",
		"codigo_ibge" : 1709807,
		"sigla" : "TO"
	},
	{
		"id" : 1923,
		"nome" : "Ipuiúna",
		"codigo_ibge" : 3131505,
		"sigla" : "MG"
	},
	{
		"id" : 4531,
		"nome" : "Ipumirim",
		"codigo_ibge" : 4207700,
		"sigla" : "SC"
	},
	{
		"id" : 449,
		"nome" : "Ipupiara",
		"codigo_ibge" : 2914109,
		"sigla" : "BA"
	},
	{
		"id" : 780,
		"nome" : "Iracema",
		"codigo_ibge" : 2306009,
		"sigla" : "CE"
	},
	{
		"id" : 4405,
		"nome" : "Iracema",
		"codigo_ibge" : 1400282,
		"sigla" : "RR"
	},
	{
		"id" : 2937,
		"nome" : "Iracema do Oeste",
		"codigo_ibge" : 4110656,
		"sigla" : "PR"
	},
	{
		"id" : 4953,
		"nome" : "Iracemápolis",
		"codigo_ibge" : 3521408,
		"sigla" : "SP"
	},
	{
		"id" : 4532,
		"nome" : "Iraceminha",
		"codigo_ibge" : 4207759,
		"sigla" : "SC"
	},
	{
		"id" : 4059,
		"nome" : "Iraí",
		"codigo_ibge" : 4310504,
		"sigla" : "RS"
	},
	{
		"id" : 1924,
		"nome" : "Iraí de Minas",
		"codigo_ibge" : 3131604,
		"sigla" : "MG"
	},
	{
		"id" : 450,
		"nome" : "Irajuba",
		"codigo_ibge" : 2914208,
		"sigla" : "BA"
	},
	{
		"id" : 451,
		"nome" : "Iramaia",
		"codigo_ibge" : 2914307,
		"sigla" : "BA"
	},
	{
		"id" : 246,
		"nome" : "Iranduba",
		"codigo_ibge" : 1301852,
		"sigla" : "AM"
	},
	{
		"id" : 4533,
		"nome" : "Irani",
		"codigo_ibge" : 4207809,
		"sigla" : "SC"
	},
	{
		"id" : 4954,
		"nome" : "Irapuã",
		"codigo_ibge" : 3521507,
		"sigla" : "SP"
	},
	{
		"id" : 4955,
		"nome" : "Irapuru",
		"codigo_ibge" : 3521606,
		"sigla" : "SP"
	},
	{
		"id" : 452,
		"nome" : "Iraquara",
		"codigo_ibge" : 2914406,
		"sigla" : "BA"
	},
	{
		"id" : 453,
		"nome" : "Irará",
		"codigo_ibge" : 2914505,
		"sigla" : "BA"
	},
	{
		"id" : 2938,
		"nome" : "Irati",
		"codigo_ibge" : 4110706,
		"sigla" : "PR"
	},
	{
		"id" : 4534,
		"nome" : "Irati",
		"codigo_ibge" : 4207858,
		"sigla" : "SC"
	},
	{
		"id" : 781,
		"nome" : "Irauçuba",
		"codigo_ibge" : 2306108,
		"sigla" : "CE"
	},
	{
		"id" : 454,
		"nome" : "Irecê",
		"codigo_ibge" : 2914604,
		"sigla" : "BA"
	},
	{
		"id" : 2939,
		"nome" : "Iretama",
		"codigo_ibge" : 4110805,
		"sigla" : "PR"
	},
	{
		"id" : 4535,
		"nome" : "Irineópolis",
		"codigo_ibge" : 4207908,
		"sigla" : "SC"
	},
	{
		"id" : 2474,
		"nome" : "Irituia",
		"codigo_ibge" : 1503507,
		"sigla" : "PA"
	},
	{
		"id" : 34,
		"nome" : "Irupi",
		"codigo_ibge" : 3202652,
		"sigla" : "ES"
	},
	{
		"id" : 3464,
		"nome" : "Isaías Coelho",
		"codigo_ibge" : 2204907,
		"sigla" : "PI"
	},
	{
		"id" : 996,
		"nome" : "Israelândia",
		"codigo_ibge" : 5210307,
		"sigla" : "GO"
	},
	{
		"id" : 4536,
		"nome" : "Itá",
		"codigo_ibge" : 4208005,
		"sigla" : "SC"
	},
	{
		"id" : 4060,
		"nome" : "Itaara",
		"codigo_ibge" : 4310538,
		"sigla" : "RS"
	},
	{
		"id" : 5377,
		"nome" : "Itabaiana",
		"codigo_ibge" : 2802908,
		"sigla" : "SE"
	},
	{
		"id" : 2649,
		"nome" : "Itabaiana",
		"codigo_ibge" : 2506905,
		"sigla" : "PB"
	},
	{
		"id" : 5378,
		"nome" : "Itabaianinha",
		"codigo_ibge" : 2803005,
		"sigla" : "SE"
	},
	{
		"id" : 455,
		"nome" : "Itabela",
		"codigo_ibge" : 2914653,
		"sigla" : "BA"
	},
	{
		"id" : 4956,
		"nome" : "Itaberá",
		"codigo_ibge" : 3521705,
		"sigla" : "SP"
	},
	{
		"id" : 456,
		"nome" : "Itaberaba",
		"codigo_ibge" : 2914703,
		"sigla" : "BA"
	},
	{
		"id" : 997,
		"nome" : "Itaberaí",
		"codigo_ibge" : 5210406,
		"sigla" : "GO"
	},
	{
		"id" : 5379,
		"nome" : "Itabi",
		"codigo_ibge" : 2803104,
		"sigla" : "SE"
	},
	{
		"id" : 1925,
		"nome" : "Itabira",
		"codigo_ibge" : 3131703,
		"sigla" : "MG"
	},
	{
		"id" : 1926,
		"nome" : "Itabirinha",
		"codigo_ibge" : 3131802,
		"sigla" : "MG"
	},
	{
		"id" : 1927,
		"nome" : "Itabirito",
		"codigo_ibge" : 3131901,
		"sigla" : "MG"
	},
	{
		"id" : 3619,
		"nome" : "Itaboraí",
		"codigo_ibge" : 3301900,
		"sigla" : "RJ"
	},
	{
		"id" : 457,
		"nome" : "Itabuna",
		"codigo_ibge" : 2914802,
		"sigla" : "BA"
	},
	{
		"id" : 5486,
		"nome" : "Itacajá",
		"codigo_ibge" : 1710508,
		"sigla" : "TO"
	},
	{
		"id" : 1928,
		"nome" : "Itacambira",
		"codigo_ibge" : 3132008,
		"sigla" : "MG"
	},
	{
		"id" : 1929,
		"nome" : "Itacarambi",
		"codigo_ibge" : 3132107,
		"sigla" : "MG"
	},
	{
		"id" : 458,
		"nome" : "Itacaré",
		"codigo_ibge" : 2914901,
		"sigla" : "BA"
	},
	{
		"id" : 247,
		"nome" : "Itacoatiara",
		"codigo_ibge" : 1301902,
		"sigla" : "AM"
	},
	{
		"id" : 3264,
		"nome" : "Itacuruba",
		"codigo_ibge" : 2607406,
		"sigla" : "PE"
	},
	{
		"id" : 4061,
		"nome" : "Itacurubi",
		"codigo_ibge" : 4310553,
		"sigla" : "RS"
	},
	{
		"id" : 459,
		"nome" : "Itaeté",
		"codigo_ibge" : 2915007,
		"sigla" : "BA"
	},
	{
		"id" : 460,
		"nome" : "Itagi",
		"codigo_ibge" : 2915106,
		"sigla" : "BA"
	},
	{
		"id" : 461,
		"nome" : "Itagibá",
		"codigo_ibge" : 2915205,
		"sigla" : "BA"
	},
	{
		"id" : 462,
		"nome" : "Itagimirim",
		"codigo_ibge" : 2915304,
		"sigla" : "BA"
	},
	{
		"id" : 35,
		"nome" : "Itaguaçu",
		"codigo_ibge" : 3202702,
		"sigla" : "ES"
	},
	{
		"id" : 463,
		"nome" : "Itaguaçu da Bahia",
		"codigo_ibge" : 2915353,
		"sigla" : "BA"
	},
	{
		"id" : 3620,
		"nome" : "Itaguaí",
		"codigo_ibge" : 3302007,
		"sigla" : "RJ"
	},
	{
		"id" : 2940,
		"nome" : "Itaguajé",
		"codigo_ibge" : 4110904,
		"sigla" : "PR"
	},
	{
		"id" : 1930,
		"nome" : "Itaguara",
		"codigo_ibge" : 3132206,
		"sigla" : "MG"
	},
	{
		"id" : 998,
		"nome" : "Itaguari",
		"codigo_ibge" : 5210562,
		"sigla" : "GO"
	},
	{
		"id" : 999,
		"nome" : "Itaguaru",
		"codigo_ibge" : 5210604,
		"sigla" : "GO"
	},
	{
		"id" : 5487,
		"nome" : "Itaguatins",
		"codigo_ibge" : 1710706,
		"sigla" : "TO"
	},
	{
		"id" : 4957,
		"nome" : "Itaí",
		"codigo_ibge" : 3521804,
		"sigla" : "SP"
	},
	{
		"id" : 3265,
		"nome" : "Itaíba",
		"codigo_ibge" : 2607505,
		"sigla" : "PE"
	},
	{
		"id" : 782,
		"nome" : "Itaiçaba",
		"codigo_ibge" : 2306207,
		"sigla" : "CE"
	},
	{
		"id" : 3465,
		"nome" : "Itainópolis",
		"codigo_ibge" : 2205003,
		"sigla" : "PI"
	},
	{
		"id" : 4537,
		"nome" : "Itaiópolis",
		"codigo_ibge" : 4208104,
		"sigla" : "SC"
	},
	{
		"id" : 1219,
		"nome" : "Itaipava do Grajaú",
		"codigo_ibge" : 2105351,
		"sigla" : "MA"
	},
	{
		"id" : 1931,
		"nome" : "Itaipé",
		"codigo_ibge" : 3132305,
		"sigla" : "MG"
	},
	{
		"id" : 2941,
		"nome" : "Itaipulândia",
		"codigo_ibge" : 4110953,
		"sigla" : "PR"
	},
	{
		"id" : 783,
		"nome" : "Itaitinga",
		"codigo_ibge" : 2306256,
		"sigla" : "CE"
	},
	{
		"id" : 2475,
		"nome" : "Itaituba",
		"codigo_ibge" : 1503606,
		"sigla" : "PA"
	},
	{
		"id" : 3735,
		"nome" : "Itajá",
		"codigo_ibge" : 2404853,
		"sigla" : "RN"
	},
	{
		"id" : 1000,
		"nome" : "Itajá",
		"codigo_ibge" : 5210802,
		"sigla" : "GO"
	},
	{
		"id" : 4538,
		"nome" : "Itajaí",
		"codigo_ibge" : 4208203,
		"sigla" : "SC"
	},
	{
		"id" : 4958,
		"nome" : "Itajobi",
		"codigo_ibge" : 3521903,
		"sigla" : "SP"
	},
	{
		"id" : 4959,
		"nome" : "Itaju",
		"codigo_ibge" : 3522000,
		"sigla" : "SP"
	},
	{
		"id" : 464,
		"nome" : "Itaju do Colônia",
		"codigo_ibge" : 2915403,
		"sigla" : "BA"
	},
	{
		"id" : 1932,
		"nome" : "Itajubá",
		"codigo_ibge" : 3132404,
		"sigla" : "MG"
	},
	{
		"id" : 465,
		"nome" : "Itajuípe",
		"codigo_ibge" : 2915502,
		"sigla" : "BA"
	},
	{
		"id" : 3621,
		"nome" : "Italva",
		"codigo_ibge" : 3302056,
		"sigla" : "RJ"
	},
	{
		"id" : 466,
		"nome" : "Itamaraju",
		"codigo_ibge" : 2915601,
		"sigla" : "BA"
	},
	{
		"id" : 1933,
		"nome" : "Itamarandiba",
		"codigo_ibge" : 3132503,
		"sigla" : "MG"
	},
	{
		"id" : 248,
		"nome" : "Itamarati",
		"codigo_ibge" : 1301951,
		"sigla" : "AM"
	},
	{
		"id" : 1934,
		"nome" : "Itamarati de Minas",
		"codigo_ibge" : 3132602,
		"sigla" : "MG"
	},
	{
		"id" : 467,
		"nome" : "Itamari",
		"codigo_ibge" : 2915700,
		"sigla" : "BA"
	},
	{
		"id" : 1935,
		"nome" : "Itambacuri",
		"codigo_ibge" : 3132701,
		"sigla" : "MG"
	},
	{
		"id" : 2942,
		"nome" : "Itambaracá",
		"codigo_ibge" : 4111001,
		"sigla" : "PR"
	},
	{
		"id" : 3266,
		"nome" : "Itambé",
		"codigo_ibge" : 2607653,
		"sigla" : "PE"
	},
	{
		"id" : 2943,
		"nome" : "Itambé",
		"codigo_ibge" : 4111100,
		"sigla" : "PR"
	},
	{
		"id" : 468,
		"nome" : "Itambé",
		"codigo_ibge" : 2915809,
		"sigla" : "BA"
	},
	{
		"id" : 1936,
		"nome" : "Itambé do Mato Dentro",
		"codigo_ibge" : 3132800,
		"sigla" : "MG"
	},
	{
		"id" : 1937,
		"nome" : "Itamogi",
		"codigo_ibge" : 3132909,
		"sigla" : "MG"
	},
	{
		"id" : 1938,
		"nome" : "Itamonte",
		"codigo_ibge" : 3133006,
		"sigla" : "MG"
	},
	{
		"id" : 469,
		"nome" : "Itanagra",
		"codigo_ibge" : 2915908,
		"sigla" : "BA"
	},
	{
		"id" : 4960,
		"nome" : "Itanhaém",
		"codigo_ibge" : 3522109,
		"sigla" : "SP"
	},
	{
		"id" : 1939,
		"nome" : "Itanhandu",
		"codigo_ibge" : 3133105,
		"sigla" : "MG"
	},
	{
		"id" : 1398,
		"nome" : "Itanhangá",
		"codigo_ibge" : 5104542,
		"sigla" : "MT"
	},
	{
		"id" : 470,
		"nome" : "Itanhém",
		"codigo_ibge" : 2916005,
		"sigla" : "BA"
	},
	{
		"id" : 1940,
		"nome" : "Itanhomi",
		"codigo_ibge" : 3133204,
		"sigla" : "MG"
	},
	{
		"id" : 1941,
		"nome" : "Itaobim",
		"codigo_ibge" : 3133303,
		"sigla" : "MG"
	},
	{
		"id" : 4961,
		"nome" : "Itaoca",
		"codigo_ibge" : 3522158,
		"sigla" : "SP"
	},
	{
		"id" : 3622,
		"nome" : "Itaocara",
		"codigo_ibge" : 3302106,
		"sigla" : "RJ"
	},
	{
		"id" : 1001,
		"nome" : "Itapaci",
		"codigo_ibge" : 5210901,
		"sigla" : "GO"
	},
	{
		"id" : 1942,
		"nome" : "Itapagipe",
		"codigo_ibge" : 3133402,
		"sigla" : "MG"
	},
	{
		"id" : 784,
		"nome" : "Itapajé",
		"codigo_ibge" : 2306306,
		"sigla" : "CE"
	},
	{
		"id" : 471,
		"nome" : "Itaparica",
		"codigo_ibge" : 2916104,
		"sigla" : "BA"
	},
	{
		"id" : 472,
		"nome" : "Itapé",
		"codigo_ibge" : 2916203,
		"sigla" : "BA"
	},
	{
		"id" : 473,
		"nome" : "Itapebi",
		"codigo_ibge" : 2916302,
		"sigla" : "BA"
	},
	{
		"id" : 1943,
		"nome" : "Itapecerica",
		"codigo_ibge" : 3133501,
		"sigla" : "MG"
	},
	{
		"id" : 4962,
		"nome" : "Itapecerica da Serra",
		"codigo_ibge" : 3522208,
		"sigla" : "SP"
	},
	{
		"id" : 1220,
		"nome" : "Itapecuru Mirim",
		"codigo_ibge" : 2105401,
		"sigla" : "MA"
	},
	{
		"id" : 2944,
		"nome" : "Itapejara d Oeste",
		"codigo_ibge" : 4111209,
		"sigla" : "PR"
	},
	{
		"id" : 4539,
		"nome" : "Itapema",
		"codigo_ibge" : 4208302,
		"sigla" : "SC"
	},
	{
		"id" : 36,
		"nome" : "Itapemirim",
		"codigo_ibge" : 3202801,
		"sigla" : "ES"
	},
	{
		"id" : 2945,
		"nome" : "Itaperuçu",
		"codigo_ibge" : 4111258,
		"sigla" : "PR"
	},
	{
		"id" : 3623,
		"nome" : "Itaperuna",
		"codigo_ibge" : 3302205,
		"sigla" : "RJ"
	},
	{
		"id" : 3267,
		"nome" : "Itapetim",
		"codigo_ibge" : 2607703,
		"sigla" : "PE"
	},
	{
		"id" : 474,
		"nome" : "Itapetinga",
		"codigo_ibge" : 2916401,
		"sigla" : "BA"
	},
	{
		"id" : 4963,
		"nome" : "Itapetininga",
		"codigo_ibge" : 3522307,
		"sigla" : "SP"
	},
	{
		"id" : 4964,
		"nome" : "Itapeva",
		"codigo_ibge" : 3522406,
		"sigla" : "SP"
	},
	{
		"id" : 1944,
		"nome" : "Itapeva",
		"codigo_ibge" : 3133600,
		"sigla" : "MG"
	},
	{
		"id" : 4965,
		"nome" : "Itapevi",
		"codigo_ibge" : 3522505,
		"sigla" : "SP"
	},
	{
		"id" : 475,
		"nome" : "Itapicuru",
		"codigo_ibge" : 2916500,
		"sigla" : "BA"
	},
	{
		"id" : 785,
		"nome" : "Itapipoca",
		"codigo_ibge" : 2306405,
		"sigla" : "CE"
	},
	{
		"id" : 4966,
		"nome" : "Itapira",
		"codigo_ibge" : 3522604,
		"sigla" : "SP"
	},
	{
		"id" : 4540,
		"nome" : "Itapiranga",
		"codigo_ibge" : 4208401,
		"sigla" : "SC"
	},
	{
		"id" : 249,
		"nome" : "Itapiranga",
		"codigo_ibge" : 1302009,
		"sigla" : "AM"
	},
	{
		"id" : 1002,
		"nome" : "Itapirapuã",
		"codigo_ibge" : 5211008,
		"sigla" : "GO"
	},
	{
		"id" : 4967,
		"nome" : "Itapirapuã Paulista",
		"codigo_ibge" : 3522653,
		"sigla" : "SP"
	},
	{
		"id" : 5488,
		"nome" : "Itapiratins",
		"codigo_ibge" : 1710904,
		"sigla" : "TO"
	},
	{
		"id" : 3268,
		"nome" : "Itapissuma",
		"codigo_ibge" : 2607752,
		"sigla" : "PE"
	},
	{
		"id" : 476,
		"nome" : "Itapitanga",
		"codigo_ibge" : 2916609,
		"sigla" : "BA"
	},
	{
		"id" : 786,
		"nome" : "Itapiúna",
		"codigo_ibge" : 2306504,
		"sigla" : "CE"
	},
	{
		"id" : 4541,
		"nome" : "Itapoá",
		"codigo_ibge" : 4208450,
		"sigla" : "SC"
	},
	{
		"id" : 4968,
		"nome" : "Itápolis",
		"codigo_ibge" : 3522703,
		"sigla" : "SP"
	},
	{
		"id" : 1526,
		"nome" : "Itaporã",
		"codigo_ibge" : 5004502,
		"sigla" : "MS"
	},
	{
		"id" : 5489,
		"nome" : "Itaporã do Tocantins",
		"codigo_ibge" : 1711100,
		"sigla" : "TO"
	},
	{
		"id" : 4969,
		"nome" : "Itaporanga",
		"codigo_ibge" : 3522802,
		"sigla" : "SP"
	},
	{
		"id" : 2650,
		"nome" : "Itaporanga",
		"codigo_ibge" : 2507002,
		"sigla" : "PB"
	},
	{
		"id" : 5380,
		"nome" : "Itaporanga d Ajuda",
		"codigo_ibge" : 2803203,
		"sigla" : "SE"
	},
	{
		"id" : 2651,
		"nome" : "Itapororoca",
		"codigo_ibge" : 2507101,
		"sigla" : "PB"
	},
	{
		"id" : 4367,
		"nome" : "Itapuã do Oeste",
		"codigo_ibge" : 1101104,
		"sigla" : "RO"
	},
	{
		"id" : 4062,
		"nome" : "Itapuca",
		"codigo_ibge" : 4310579,
		"sigla" : "RS"
	},
	{
		"id" : 4970,
		"nome" : "Itapuí",
		"codigo_ibge" : 3522901,
		"sigla" : "SP"
	},
	{
		"id" : 4971,
		"nome" : "Itapura",
		"codigo_ibge" : 3523008,
		"sigla" : "SP"
	},
	{
		"id" : 1003,
		"nome" : "Itapuranga",
		"codigo_ibge" : 5211206,
		"sigla" : "GO"
	},
	{
		"id" : 4972,
		"nome" : "Itaquaquecetuba",
		"codigo_ibge" : 3523107,
		"sigla" : "SP"
	},
	{
		"id" : 477,
		"nome" : "Itaquara",
		"codigo_ibge" : 2916708,
		"sigla" : "BA"
	},
	{
		"id" : 4063,
		"nome" : "Itaqui",
		"codigo_ibge" : 4310603,
		"sigla" : "RS"
	},
	{
		"id" : 1527,
		"nome" : "Itaquiraí",
		"codigo_ibge" : 5004601,
		"sigla" : "MS"
	},
	{
		"id" : 3269,
		"nome" : "Itaquitinga",
		"codigo_ibge" : 2607802,
		"sigla" : "PE"
	},
	{
		"id" : 37,
		"nome" : "Itarana",
		"codigo_ibge" : 3202900,
		"sigla" : "ES"
	},
	{
		"id" : 478,
		"nome" : "Itarantim",
		"codigo_ibge" : 2916807,
		"sigla" : "BA"
	},
	{
		"id" : 4973,
		"nome" : "Itararé",
		"codigo_ibge" : 3523206,
		"sigla" : "SP"
	},
	{
		"id" : 787,
		"nome" : "Itarema",
		"codigo_ibge" : 2306553,
		"sigla" : "CE"
	},
	{
		"id" : 4974,
		"nome" : "Itariri",
		"codigo_ibge" : 3523305,
		"sigla" : "SP"
	},
	{
		"id" : 1004,
		"nome" : "Itarumã",
		"codigo_ibge" : 5211305,
		"sigla" : "GO"
	},
	{
		"id" : 4064,
		"nome" : "Itati",
		"codigo_ibge" : 4310652,
		"sigla" : "RS"
	},
	{
		"id" : 3624,
		"nome" : "Itatiaia",
		"codigo_ibge" : 3302254,
		"sigla" : "RJ"
	},
	{
		"id" : 1945,
		"nome" : "Itatiaiuçu",
		"codigo_ibge" : 3133709,
		"sigla" : "MG"
	},
	{
		"id" : 4975,
		"nome" : "Itatiba",
		"codigo_ibge" : 3523404,
		"sigla" : "SP"
	},
	{
		"id" : 4065,
		"nome" : "Itatiba do Sul",
		"codigo_ibge" : 4310702,
		"sigla" : "RS"
	},
	{
		"id" : 479,
		"nome" : "Itatim",
		"codigo_ibge" : 2916856,
		"sigla" : "BA"
	},
	{
		"id" : 4976,
		"nome" : "Itatinga",
		"codigo_ibge" : 3523503,
		"sigla" : "SP"
	},
	{
		"id" : 788,
		"nome" : "Itatira",
		"codigo_ibge" : 2306603,
		"sigla" : "CE"
	},
	{
		"id" : 2652,
		"nome" : "Itatuba",
		"codigo_ibge" : 2507200,
		"sigla" : "PB"
	},
	{
		"id" : 3736,
		"nome" : "Itaú",
		"codigo_ibge" : 2404903,
		"sigla" : "RN"
	},
	{
		"id" : 1946,
		"nome" : "Itaú de Minas",
		"codigo_ibge" : 3133758,
		"sigla" : "MG"
	},
	{
		"id" : 1399,
		"nome" : "Itaúba",
		"codigo_ibge" : 5104559,
		"sigla" : "MT"
	},
	{
		"id" : 207,
		"nome" : "Itaubal",
		"codigo_ibge" : 1600253,
		"sigla" : "AP"
	},
	{
		"id" : 1005,
		"nome" : "Itauçu",
		"codigo_ibge" : 5211404,
		"sigla" : "GO"
	},
	{
		"id" : 3466,
		"nome" : "Itaueira",
		"codigo_ibge" : 2205102,
		"sigla" : "PI"
	},
	{
		"id" : 1947,
		"nome" : "Itaúna",
		"codigo_ibge" : 3133808,
		"sigla" : "MG"
	},
	{
		"id" : 2946,
		"nome" : "Itaúna do Sul",
		"codigo_ibge" : 4111308,
		"sigla" : "PR"
	},
	{
		"id" : 1948,
		"nome" : "Itaverava",
		"codigo_ibge" : 3133907,
		"sigla" : "MG"
	},
	{
		"id" : 1949,
		"nome" : "Itinga",
		"codigo_ibge" : 3134004,
		"sigla" : "MG"
	},
	{
		"id" : 1221,
		"nome" : "Itinga do Maranhão",
		"codigo_ibge" : 2105427,
		"sigla" : "MA"
	},
	{
		"id" : 1400,
		"nome" : "Itiquira",
		"codigo_ibge" : 5104609,
		"sigla" : "MT"
	},
	{
		"id" : 4977,
		"nome" : "Itirapina",
		"codigo_ibge" : 3523602,
		"sigla" : "SP"
	},
	{
		"id" : 4978,
		"nome" : "Itirapuã",
		"codigo_ibge" : 3523701,
		"sigla" : "SP"
	},
	{
		"id" : 480,
		"nome" : "Itiruçu",
		"codigo_ibge" : 2916906,
		"sigla" : "BA"
	},
	{
		"id" : 481,
		"nome" : "Itiúba",
		"codigo_ibge" : 2917003,
		"sigla" : "BA"
	},
	{
		"id" : 4979,
		"nome" : "Itobi",
		"codigo_ibge" : 3523800,
		"sigla" : "SP"
	},
	{
		"id" : 482,
		"nome" : "Itororó",
		"codigo_ibge" : 2917102,
		"sigla" : "BA"
	},
	{
		"id" : 4980,
		"nome" : "Itu",
		"codigo_ibge" : 3523909,
		"sigla" : "SP"
	},
	{
		"id" : 483,
		"nome" : "Ituaçu",
		"codigo_ibge" : 2917201,
		"sigla" : "BA"
	},
	{
		"id" : 484,
		"nome" : "Ituberá",
		"codigo_ibge" : 2917300,
		"sigla" : "BA"
	},
	{
		"id" : 1950,
		"nome" : "Itueta",
		"codigo_ibge" : 3134103,
		"sigla" : "MG"
	},
	{
		"id" : 1951,
		"nome" : "Ituiutaba",
		"codigo_ibge" : 3134202,
		"sigla" : "MG"
	},
	{
		"id" : 1006,
		"nome" : "Itumbiara",
		"codigo_ibge" : 5211503,
		"sigla" : "GO"
	},
	{
		"id" : 1952,
		"nome" : "Itumirim",
		"codigo_ibge" : 3134301,
		"sigla" : "MG"
	},
	{
		"id" : 4981,
		"nome" : "Itupeva",
		"codigo_ibge" : 3524006,
		"sigla" : "SP"
	},
	{
		"id" : 2476,
		"nome" : "Itupiranga",
		"codigo_ibge" : 1503705,
		"sigla" : "PA"
	},
	{
		"id" : 4542,
		"nome" : "Ituporanga",
		"codigo_ibge" : 4208500,
		"sigla" : "SC"
	},
	{
		"id" : 1953,
		"nome" : "Iturama",
		"codigo_ibge" : 3134400,
		"sigla" : "MG"
	},
	{
		"id" : 1954,
		"nome" : "Itutinga",
		"codigo_ibge" : 3134509,
		"sigla" : "MG"
	},
	{
		"id" : 4982,
		"nome" : "Ituverava",
		"codigo_ibge" : 3524105,
		"sigla" : "SP"
	},
	{
		"id" : 485,
		"nome" : "Iuiu",
		"codigo_ibge" : 2917334,
		"sigla" : "BA"
	},
	{
		"id" : 38,
		"nome" : "Iúna",
		"codigo_ibge" : 3203007,
		"sigla" : "ES"
	},
	{
		"id" : 2947,
		"nome" : "Ivaí",
		"codigo_ibge" : 4111407,
		"sigla" : "PR"
	},
	{
		"id" : 2948,
		"nome" : "Ivaiporã",
		"codigo_ibge" : 4111506,
		"sigla" : "PR"
	},
	{
		"id" : 2949,
		"nome" : "Ivaté",
		"codigo_ibge" : 4111555,
		"sigla" : "PR"
	},
	{
		"id" : 2950,
		"nome" : "Ivatuba",
		"codigo_ibge" : 4111605,
		"sigla" : "PR"
	},
	{
		"id" : 1528,
		"nome" : "Ivinhema",
		"codigo_ibge" : 5004700,
		"sigla" : "MS"
	},
	{
		"id" : 1007,
		"nome" : "Ivolândia",
		"codigo_ibge" : 5211602,
		"sigla" : "GO"
	},
	{
		"id" : 4066,
		"nome" : "Ivorá",
		"codigo_ibge" : 4310751,
		"sigla" : "RS"
	},
	{
		"id" : 4067,
		"nome" : "Ivoti",
		"codigo_ibge" : 4310801,
		"sigla" : "RS"
	},
	{
		"id" : 3270,
		"nome" : "Jaboatão dos Guararapes",
		"codigo_ibge" : 2607901,
		"sigla" : "PE"
	},
	{
		"id" : 4543,
		"nome" : "Jaborá",
		"codigo_ibge" : 4208609,
		"sigla" : "SC"
	},
	{
		"id" : 4983,
		"nome" : "Jaborandi",
		"codigo_ibge" : 3524204,
		"sigla" : "SP"
	},
	{
		"id" : 486,
		"nome" : "Jaborandi",
		"codigo_ibge" : 2917359,
		"sigla" : "BA"
	},
	{
		"id" : 2951,
		"nome" : "Jaboti",
		"codigo_ibge" : 4111704,
		"sigla" : "PR"
	},
	{
		"id" : 4068,
		"nome" : "Jaboticaba",
		"codigo_ibge" : 4310850,
		"sigla" : "RS"
	},
	{
		"id" : 4984,
		"nome" : "Jaboticabal",
		"codigo_ibge" : 3524303,
		"sigla" : "SP"
	},
	{
		"id" : 1955,
		"nome" : "Jaboticatubas",
		"codigo_ibge" : 3134608,
		"sigla" : "MG"
	},
	{
		"id" : 3737,
		"nome" : "Jaçanã",
		"codigo_ibge" : 2405009,
		"sigla" : "RN"
	},
	{
		"id" : 487,
		"nome" : "Jacaraci",
		"codigo_ibge" : 2917409,
		"sigla" : "BA"
	},
	{
		"id" : 2653,
		"nome" : "Jacaraú",
		"codigo_ibge" : 2507309,
		"sigla" : "PB"
	},
	{
		"id" : 137,
		"nome" : "Jacaré dos Homens",
		"codigo_ibge" : 2703403,
		"sigla" : "AL"
	},
	{
		"id" : 2477,
		"nome" : "Jacareacanga",
		"codigo_ibge" : 1503754,
		"sigla" : "PA"
	},
	{
		"id" : 4985,
		"nome" : "Jacareí",
		"codigo_ibge" : 3524402,
		"sigla" : "SP"
	},
	{
		"id" : 2952,
		"nome" : "Jacarezinho",
		"codigo_ibge" : 4111803,
		"sigla" : "PR"
	},
	{
		"id" : 4986,
		"nome" : "Jaci",
		"codigo_ibge" : 3524501,
		"sigla" : "SP"
	},
	{
		"id" : 1401,
		"nome" : "Jaciara",
		"codigo_ibge" : 5104807,
		"sigla" : "MT"
	},
	{
		"id" : 1956,
		"nome" : "Jacinto",
		"codigo_ibge" : 3134707,
		"sigla" : "MG"
	},
	{
		"id" : 4544,
		"nome" : "Jacinto Machado",
		"codigo_ibge" : 4208708,
		"sigla" : "SC"
	},
	{
		"id" : 488,
		"nome" : "Jacobina",
		"codigo_ibge" : 2917508,
		"sigla" : "BA"
	},
	{
		"id" : 3467,
		"nome" : "Jacobina do Piauí",
		"codigo_ibge" : 2205151,
		"sigla" : "PI"
	},
	{
		"id" : 1957,
		"nome" : "Jacuí",
		"codigo_ibge" : 3134806,
		"sigla" : "MG"
	},
	{
		"id" : 138,
		"nome" : "Jacuípe",
		"codigo_ibge" : 2703502,
		"sigla" : "AL"
	},
	{
		"id" : 4069,
		"nome" : "Jacuizinho",
		"codigo_ibge" : 4310876,
		"sigla" : "RS"
	},
	{
		"id" : 2478,
		"nome" : "Jacundá",
		"codigo_ibge" : 1503804,
		"sigla" : "PA"
	},
	{
		"id" : 4987,
		"nome" : "Jacupiranga",
		"codigo_ibge" : 3524600,
		"sigla" : "SP"
	},
	{
		"id" : 4070,
		"nome" : "Jacutinga",
		"codigo_ibge" : 4310900,
		"sigla" : "RS"
	},
	{
		"id" : 1958,
		"nome" : "Jacutinga",
		"codigo_ibge" : 3134905,
		"sigla" : "MG"
	},
	{
		"id" : 2953,
		"nome" : "Jaguapitã",
		"codigo_ibge" : 4111902,
		"sigla" : "PR"
	},
	{
		"id" : 489,
		"nome" : "Jaguaquara",
		"codigo_ibge" : 2917607,
		"sigla" : "BA"
	},
	{
		"id" : 1959,
		"nome" : "Jaguaraçu",
		"codigo_ibge" : 3135001,
		"sigla" : "MG"
	},
	{
		"id" : 4071,
		"nome" : "Jaguarão",
		"codigo_ibge" : 4311007,
		"sigla" : "RS"
	},
	{
		"id" : 490,
		"nome" : "Jaguarari",
		"codigo_ibge" : 2917706,
		"sigla" : "BA"
	},
	{
		"id" : 39,
		"nome" : "Jaguaré",
		"codigo_ibge" : 3203056,
		"sigla" : "ES"
	},
	{
		"id" : 789,
		"nome" : "Jaguaretama",
		"codigo_ibge" : 2306702,
		"sigla" : "CE"
	},
	{
		"id" : 4072,
		"nome" : "Jaguari",
		"codigo_ibge" : 4311106,
		"sigla" : "RS"
	},
	{
		"id" : 2954,
		"nome" : "Jaguariaíva",
		"codigo_ibge" : 4112009,
		"sigla" : "PR"
	},
	{
		"id" : 790,
		"nome" : "Jaguaribara",
		"codigo_ibge" : 2306801,
		"sigla" : "CE"
	},
	{
		"id" : 791,
		"nome" : "Jaguaribe",
		"codigo_ibge" : 2306900,
		"sigla" : "CE"
	},
	{
		"id" : 491,
		"nome" : "Jaguaripe",
		"codigo_ibge" : 2917805,
		"sigla" : "BA"
	},
	{
		"id" : 4988,
		"nome" : "Jaguariúna",
		"codigo_ibge" : 3524709,
		"sigla" : "SP"
	},
	{
		"id" : 792,
		"nome" : "Jaguaruana",
		"codigo_ibge" : 2307007,
		"sigla" : "CE"
	},
	{
		"id" : 4545,
		"nome" : "Jaguaruna",
		"codigo_ibge" : 4208807,
		"sigla" : "SC"
	},
	{
		"id" : 1960,
		"nome" : "Jaíba",
		"codigo_ibge" : 3135050,
		"sigla" : "MG"
	},
	{
		"id" : 3468,
		"nome" : "Jaicós",
		"codigo_ibge" : 2205201,
		"sigla" : "PI"
	},
	{
		"id" : 4989,
		"nome" : "Jales",
		"codigo_ibge" : 3524808,
		"sigla" : "SP"
	},
	{
		"id" : 4990,
		"nome" : "Jambeiro",
		"codigo_ibge" : 3524907,
		"sigla" : "SP"
	},
	{
		"id" : 1961,
		"nome" : "Jampruca",
		"codigo_ibge" : 3135076,
		"sigla" : "MG"
	},
	{
		"id" : 1962,
		"nome" : "Janaúba",
		"codigo_ibge" : 3135100,
		"sigla" : "MG"
	},
	{
		"id" : 1008,
		"nome" : "Jandaia",
		"codigo_ibge" : 5211701,
		"sigla" : "GO"
	},
	{
		"id" : 2955,
		"nome" : "Jandaia do Sul",
		"codigo_ibge" : 4112108,
		"sigla" : "PR"
	},
	{
		"id" : 3738,
		"nome" : "Jandaíra",
		"codigo_ibge" : 2405108,
		"sigla" : "RN"
	},
	{
		"id" : 492,
		"nome" : "Jandaíra",
		"codigo_ibge" : 2917904,
		"sigla" : "BA"
	},
	{
		"id" : 4991,
		"nome" : "Jandira",
		"codigo_ibge" : 3525003,
		"sigla" : "SP"
	},
	{
		"id" : 3739,
		"nome" : "Janduís",
		"codigo_ibge" : 2405207,
		"sigla" : "RN"
	},
	{
		"id" : 1402,
		"nome" : "Jangada",
		"codigo_ibge" : 5104906,
		"sigla" : "MT"
	},
	{
		"id" : 2956,
		"nome" : "Janiópolis",
		"codigo_ibge" : 4112207,
		"sigla" : "PR"
	},
	{
		"id" : 1963,
		"nome" : "Januária",
		"codigo_ibge" : 3135209,
		"sigla" : "MG"
	},
	{
		"id" : 3740,
		"nome" : "Januário Cicco",
		"codigo_ibge" : 2405306,
		"sigla" : "RN"
	},
	{
		"id" : 1964,
		"nome" : "Japaraíba",
		"codigo_ibge" : 3135308,
		"sigla" : "MG"
	},
	{
		"id" : 139,
		"nome" : "Japaratinga",
		"codigo_ibge" : 2703601,
		"sigla" : "AL"
	},
	{
		"id" : 5381,
		"nome" : "Japaratuba",
		"codigo_ibge" : 2803302,
		"sigla" : "SE"
	},
	{
		"id" : 3625,
		"nome" : "Japeri",
		"codigo_ibge" : 3302270,
		"sigla" : "RJ"
	},
	{
		"id" : 3741,
		"nome" : "Japi",
		"codigo_ibge" : 2405405,
		"sigla" : "RN"
	},
	{
		"id" : 2957,
		"nome" : "Japira",
		"codigo_ibge" : 4112306,
		"sigla" : "PR"
	},
	{
		"id" : 5382,
		"nome" : "Japoatã",
		"codigo_ibge" : 2803401,
		"sigla" : "SE"
	},
	{
		"id" : 1965,
		"nome" : "Japonvar",
		"codigo_ibge" : 3135357,
		"sigla" : "MG"
	},
	{
		"id" : 1529,
		"nome" : "Japorã",
		"codigo_ibge" : 5004809,
		"sigla" : "MS"
	},
	{
		"id" : 2958,
		"nome" : "Japurá",
		"codigo_ibge" : 4112405,
		"sigla" : "PR"
	},
	{
		"id" : 250,
		"nome" : "Japurá",
		"codigo_ibge" : 1302108,
		"sigla" : "AM"
	},
	{
		"id" : 3271,
		"nome" : "Jaqueira",
		"codigo_ibge" : 2607950,
		"sigla" : "PE"
	},
	{
		"id" : 4073,
		"nome" : "Jaquirana",
		"codigo_ibge" : 4311122,
		"sigla" : "RS"
	},
	{
		"id" : 1009,
		"nome" : "Jaraguá",
		"codigo_ibge" : 5211800,
		"sigla" : "GO"
	},
	{
		"id" : 4546,
		"nome" : "Jaraguá do Sul",
		"codigo_ibge" : 4208906,
		"sigla" : "SC"
	},
	{
		"id" : 1530,
		"nome" : "Jaraguari",
		"codigo_ibge" : 5004908,
		"sigla" : "MS"
	},
	{
		"id" : 140,
		"nome" : "Jaramataia",
		"codigo_ibge" : 2703700,
		"sigla" : "AL"
	},
	{
		"id" : 793,
		"nome" : "Jardim",
		"codigo_ibge" : 2307106,
		"sigla" : "CE"
	},
	{
		"id" : 1531,
		"nome" : "Jardim",
		"codigo_ibge" : 5005004,
		"sigla" : "MS"
	},
	{
		"id" : 2959,
		"nome" : "Jardim Alegre",
		"codigo_ibge" : 4112504,
		"sigla" : "PR"
	},
	{
		"id" : 3742,
		"nome" : "Jardim de Angicos",
		"codigo_ibge" : 2405504,
		"sigla" : "RN"
	},
	{
		"id" : 3743,
		"nome" : "Jardim de Piranhas",
		"codigo_ibge" : 2405603,
		"sigla" : "RN"
	},
	{
		"id" : 3469,
		"nome" : "Jardim do Mulato",
		"codigo_ibge" : 2205250,
		"sigla" : "PI"
	},
	{
		"id" : 3744,
		"nome" : "Jardim do Seridó",
		"codigo_ibge" : 2405702,
		"sigla" : "RN"
	},
	{
		"id" : 2960,
		"nome" : "Jardim Olinda",
		"codigo_ibge" : 4112603,
		"sigla" : "PR"
	},
	{
		"id" : 4547,
		"nome" : "Jardinópolis",
		"codigo_ibge" : 4208955,
		"sigla" : "SC"
	},
	{
		"id" : 4992,
		"nome" : "Jardinópolis",
		"codigo_ibge" : 3525102,
		"sigla" : "SP"
	},
	{
		"id" : 4074,
		"nome" : "Jari",
		"codigo_ibge" : 4311130,
		"sigla" : "RS"
	},
	{
		"id" : 4993,
		"nome" : "Jarinu",
		"codigo_ibge" : 3525201,
		"sigla" : "SP"
	},
	{
		"id" : 4368,
		"nome" : "Jaru",
		"codigo_ibge" : 1100114,
		"sigla" : "RO"
	},
	{
		"id" : 1010,
		"nome" : "Jataí",
		"codigo_ibge" : 5211909,
		"sigla" : "GO"
	},
	{
		"id" : 2961,
		"nome" : "Jataizinho",
		"codigo_ibge" : 4112702,
		"sigla" : "PR"
	},
	{
		"id" : 3272,
		"nome" : "Jataúba",
		"codigo_ibge" : 2608008,
		"sigla" : "PE"
	},
	{
		"id" : 1532,
		"nome" : "Jateí",
		"codigo_ibge" : 5005103,
		"sigla" : "MS"
	},
	{
		"id" : 794,
		"nome" : "Jati",
		"codigo_ibge" : 2307205,
		"sigla" : "CE"
	},
	{
		"id" : 1222,
		"nome" : "Jatobá",
		"codigo_ibge" : 2105450,
		"sigla" : "MA"
	},
	{
		"id" : 3273,
		"nome" : "Jatobá",
		"codigo_ibge" : 2608057,
		"sigla" : "PE"
	},
	{
		"id" : 3470,
		"nome" : "Jatobá do Piauí",
		"codigo_ibge" : 2205276,
		"sigla" : "PI"
	},
	{
		"id" : 4994,
		"nome" : "Jaú",
		"codigo_ibge" : 3525300,
		"sigla" : "SP"
	},
	{
		"id" : 5490,
		"nome" : "Jaú do Tocantins",
		"codigo_ibge" : 1711506,
		"sigla" : "TO"
	},
	{
		"id" : 1011,
		"nome" : "Jaupaci",
		"codigo_ibge" : 5212006,
		"sigla" : "GO"
	},
	{
		"id" : 1403,
		"nome" : "Jauru",
		"codigo_ibge" : 5105002,
		"sigla" : "MT"
	},
	{
		"id" : 1966,
		"nome" : "Jeceaba",
		"codigo_ibge" : 3135407,
		"sigla" : "MG"
	},
	{
		"id" : 1967,
		"nome" : "Jenipapo de Minas",
		"codigo_ibge" : 3135456,
		"sigla" : "MG"
	},
	{
		"id" : 1223,
		"nome" : "Jenipapo dos Vieiras",
		"codigo_ibge" : 2105476,
		"sigla" : "MA"
	},
	{
		"id" : 1968,
		"nome" : "Jequeri",
		"codigo_ibge" : 3135506,
		"sigla" : "MG"
	},
	{
		"id" : 141,
		"nome" : "Jequiá da Praia",
		"codigo_ibge" : 2703759,
		"sigla" : "AL"
	},
	{
		"id" : 493,
		"nome" : "Jequié",
		"codigo_ibge" : 2918001,
		"sigla" : "BA"
	},
	{
		"id" : 1969,
		"nome" : "Jequitaí",
		"codigo_ibge" : 3135605,
		"sigla" : "MG"
	},
	{
		"id" : 1970,
		"nome" : "Jequitibá",
		"codigo_ibge" : 3135704,
		"sigla" : "MG"
	},
	{
		"id" : 1971,
		"nome" : "Jequitinhonha",
		"codigo_ibge" : 3135803,
		"sigla" : "MG"
	},
	{
		"id" : 494,
		"nome" : "Jeremoabo",
		"codigo_ibge" : 2918100,
		"sigla" : "BA"
	},
	{
		"id" : 2654,
		"nome" : "Jericó",
		"codigo_ibge" : 2507408,
		"sigla" : "PB"
	},
	{
		"id" : 4995,
		"nome" : "Jeriquara",
		"codigo_ibge" : 3525409,
		"sigla" : "SP"
	},
	{
		"id" : 40,
		"nome" : "Jerônimo Monteiro",
		"codigo_ibge" : 3203106,
		"sigla" : "ES"
	},
	{
		"id" : 3471,
		"nome" : "Jerumenha",
		"codigo_ibge" : 2205300,
		"sigla" : "PI"
	},
	{
		"id" : 1972,
		"nome" : "Jesuânia",
		"codigo_ibge" : 3135902,
		"sigla" : "MG"
	},
	{
		"id" : 2962,
		"nome" : "Jesuítas",
		"codigo_ibge" : 4112751,
		"sigla" : "PR"
	},
	{
		"id" : 1012,
		"nome" : "Jesúpolis",
		"codigo_ibge" : 5212055,
		"sigla" : "GO"
	},
	{
		"id" : 4369,
		"nome" : "Ji Paraná",
		"codigo_ibge" : 1100122,
		"sigla" : "RO"
	},
	{
		"id" : 795,
		"nome" : "Jijoca de Jericoacoara",
		"codigo_ibge" : 2307254,
		"sigla" : "CE"
	},
	{
		"id" : 495,
		"nome" : "Jiquiriçá",
		"codigo_ibge" : 2918209,
		"sigla" : "BA"
	},
	{
		"id" : 496,
		"nome" : "Jitaúna",
		"codigo_ibge" : 2918308,
		"sigla" : "BA"
	},
	{
		"id" : 4548,
		"nome" : "Joaçaba",
		"codigo_ibge" : 4209003,
		"sigla" : "SC"
	},
	{
		"id" : 1973,
		"nome" : "Joaíma",
		"codigo_ibge" : 3136009,
		"sigla" : "MG"
	},
	{
		"id" : 1974,
		"nome" : "Joanésia",
		"codigo_ibge" : 3136108,
		"sigla" : "MG"
	},
	{
		"id" : 4996,
		"nome" : "Joanópolis",
		"codigo_ibge" : 3525508,
		"sigla" : "SP"
	},
	{
		"id" : 3274,
		"nome" : "João Alfredo",
		"codigo_ibge" : 2608107,
		"sigla" : "PE"
	},
	{
		"id" : 3745,
		"nome" : "João Câmara",
		"codigo_ibge" : 2405801,
		"sigla" : "RN"
	},
	{
		"id" : 3472,
		"nome" : "João Costa",
		"codigo_ibge" : 2205359,
		"sigla" : "PI"
	},
	{
		"id" : 3746,
		"nome" : "João Dias",
		"codigo_ibge" : 2405900,
		"sigla" : "RN"
	},
	{
		"id" : 497,
		"nome" : "João Dourado",
		"codigo_ibge" : 2918357,
		"sigla" : "BA"
	},
	{
		"id" : 1224,
		"nome" : "João Lisboa",
		"codigo_ibge" : 2105500,
		"sigla" : "MA"
	},
	{
		"id" : 1975,
		"nome" : "João Monlevade",
		"codigo_ibge" : 3136207,
		"sigla" : "MG"
	},
	{
		"id" : 41,
		"nome" : "João Neiva",
		"codigo_ibge" : 3203130,
		"sigla" : "ES"
	},
	{
		"id" : 2655,
		"nome" : "João Pessoa",
		"codigo_ibge" : 2507507,
		"sigla" : "PB"
	},
	{
		"id" : 1976,
		"nome" : "João Pinheiro",
		"codigo_ibge" : 3136306,
		"sigla" : "MG"
	},
	{
		"id" : 4997,
		"nome" : "João Ramalho",
		"codigo_ibge" : 3525607,
		"sigla" : "SP"
	},
	{
		"id" : 1977,
		"nome" : "Joaquim Felício",
		"codigo_ibge" : 3136405,
		"sigla" : "MG"
	},
	{
		"id" : 142,
		"nome" : "Joaquim Gomes",
		"codigo_ibge" : 2703809,
		"sigla" : "AL"
	},
	{
		"id" : 3275,
		"nome" : "Joaquim Nabuco",
		"codigo_ibge" : 2608206,
		"sigla" : "PE"
	},
	{
		"id" : 3473,
		"nome" : "Joaquim Pires",
		"codigo_ibge" : 2205409,
		"sigla" : "PI"
	},
	{
		"id" : 2963,
		"nome" : "Joaquim Távora",
		"codigo_ibge" : 4112801,
		"sigla" : "PR"
	},
	{
		"id" : 2735,
		"nome" : "Joca Claudino",
		"codigo_ibge" : 2513653,
		"sigla" : "PB"
	},
	{
		"id" : 3474,
		"nome" : "Joca Marques",
		"codigo_ibge" : 2205458,
		"sigla" : "PI"
	},
	{
		"id" : 4075,
		"nome" : "Jóia",
		"codigo_ibge" : 4311155,
		"sigla" : "RS"
	},
	{
		"id" : 4549,
		"nome" : "Joinville",
		"codigo_ibge" : 4209102,
		"sigla" : "SC"
	},
	{
		"id" : 1978,
		"nome" : "Jordânia",
		"codigo_ibge" : 3136504,
		"sigla" : "MG"
	},
	{
		"id" : 87,
		"nome" : "Jordão",
		"codigo_ibge" : 1200328,
		"sigla" : "AC"
	},
	{
		"id" : 4550,
		"nome" : "José Boiteux",
		"codigo_ibge" : 4209151,
		"sigla" : "SC"
	},
	{
		"id" : 4998,
		"nome" : "José Bonifácio",
		"codigo_ibge" : 3525706,
		"sigla" : "SP"
	},
	{
		"id" : 3747,
		"nome" : "José da Penha",
		"codigo_ibge" : 2406007,
		"sigla" : "RN"
	},
	{
		"id" : 3475,
		"nome" : "José de Freitas",
		"codigo_ibge" : 2205508,
		"sigla" : "PI"
	},
	{
		"id" : 1979,
		"nome" : "José Gonçalves de Minas",
		"codigo_ibge" : 3136520,
		"sigla" : "MG"
	},
	{
		"id" : 1980,
		"nome" : "José Raydan",
		"codigo_ibge" : 3136553,
		"sigla" : "MG"
	},
	{
		"id" : 1225,
		"nome" : "Joselândia",
		"codigo_ibge" : 2105609,
		"sigla" : "MA"
	},
	{
		"id" : 1981,
		"nome" : "Josenópolis",
		"codigo_ibge" : 3136579,
		"sigla" : "MG"
	},
	{
		"id" : 1013,
		"nome" : "Joviânia",
		"codigo_ibge" : 5212105,
		"sigla" : "GO"
	},
	{
		"id" : 1404,
		"nome" : "Juara",
		"codigo_ibge" : 5105101,
		"sigla" : "MT"
	},
	{
		"id" : 2656,
		"nome" : "Juarez Távora",
		"codigo_ibge" : 2507606,
		"sigla" : "PB"
	},
	{
		"id" : 5491,
		"nome" : "Juarina",
		"codigo_ibge" : 1711803,
		"sigla" : "TO"
	},
	{
		"id" : 1982,
		"nome" : "Juatuba",
		"codigo_ibge" : 3136652,
		"sigla" : "MG"
	},
	{
		"id" : 2657,
		"nome" : "Juazeirinho",
		"codigo_ibge" : 2507705,
		"sigla" : "PB"
	},
	{
		"id" : 498,
		"nome" : "Juazeiro",
		"codigo_ibge" : 2918407,
		"sigla" : "BA"
	},
	{
		"id" : 796,
		"nome" : "Juazeiro do Norte",
		"codigo_ibge" : 2307304,
		"sigla" : "CE"
	},
	{
		"id" : 3476,
		"nome" : "Juazeiro do Piauí",
		"codigo_ibge" : 2205516,
		"sigla" : "PI"
	},
	{
		"id" : 797,
		"nome" : "Jucás",
		"codigo_ibge" : 2307403,
		"sigla" : "CE"
	},
	{
		"id" : 3276,
		"nome" : "Jucati",
		"codigo_ibge" : 2608255,
		"sigla" : "PE"
	},
	{
		"id" : 499,
		"nome" : "Jucuruçu",
		"codigo_ibge" : 2918456,
		"sigla" : "BA"
	},
	{
		"id" : 3748,
		"nome" : "Jucurutu",
		"codigo_ibge" : 2406106,
		"sigla" : "RN"
	},
	{
		"id" : 1405,
		"nome" : "Juína",
		"codigo_ibge" : 5105150,
		"sigla" : "MT"
	},
	{
		"id" : 1983,
		"nome" : "Juiz de Fora",
		"codigo_ibge" : 3136702,
		"sigla" : "MG"
	},
	{
		"id" : 3477,
		"nome" : "Júlio Borges",
		"codigo_ibge" : 2205524,
		"sigla" : "PI"
	},
	{
		"id" : 4076,
		"nome" : "Júlio de Castilhos",
		"codigo_ibge" : 4311205,
		"sigla" : "RS"
	},
	{
		"id" : 4999,
		"nome" : "Júlio Mesquita",
		"codigo_ibge" : 3525805,
		"sigla" : "SP"
	},
	{
		"id" : 5000,
		"nome" : "Jumirim",
		"codigo_ibge" : 3525854,
		"sigla" : "SP"
	},
	{
		"id" : 1226,
		"nome" : "Junco do Maranhão",
		"codigo_ibge" : 2105658,
		"sigla" : "MA"
	},
	{
		"id" : 2658,
		"nome" : "Junco do Seridó",
		"codigo_ibge" : 2507804,
		"sigla" : "PB"
	},
	{
		"id" : 3749,
		"nome" : "Jundiá",
		"codigo_ibge" : 2406155,
		"sigla" : "RN"
	},
	{
		"id" : 143,
		"nome" : "Jundiá",
		"codigo_ibge" : 2703908,
		"sigla" : "AL"
	},
	{
		"id" : 5001,
		"nome" : "Jundiaí",
		"codigo_ibge" : 3525904,
		"sigla" : "SP"
	},
	{
		"id" : 2964,
		"nome" : "Jundiaí do Sul",
		"codigo_ibge" : 4112900,
		"sigla" : "PR"
	},
	{
		"id" : 144,
		"nome" : "Junqueiro",
		"codigo_ibge" : 2704005,
		"sigla" : "AL"
	},
	{
		"id" : 5002,
		"nome" : "Junqueirópolis",
		"codigo_ibge" : 3526001,
		"sigla" : "SP"
	},
	{
		"id" : 3277,
		"nome" : "Jupi",
		"codigo_ibge" : 2608305,
		"sigla" : "PE"
	},
	{
		"id" : 4551,
		"nome" : "Jupiá",
		"codigo_ibge" : 4209177,
		"sigla" : "SC"
	},
	{
		"id" : 5003,
		"nome" : "Juquiá",
		"codigo_ibge" : 3526100,
		"sigla" : "SP"
	},
	{
		"id" : 5004,
		"nome" : "Juquitiba",
		"codigo_ibge" : 3526209,
		"sigla" : "SP"
	},
	{
		"id" : 1984,
		"nome" : "Juramento",
		"codigo_ibge" : 3136801,
		"sigla" : "MG"
	},
	{
		"id" : 2965,
		"nome" : "Juranda",
		"codigo_ibge" : 4112959,
		"sigla" : "PR"
	},
	{
		"id" : 3278,
		"nome" : "Jurema",
		"codigo_ibge" : 2608404,
		"sigla" : "PE"
	},
	{
		"id" : 3478,
		"nome" : "Jurema",
		"codigo_ibge" : 2205532,
		"sigla" : "PI"
	},
	{
		"id" : 2659,
		"nome" : "Juripiranga",
		"codigo_ibge" : 2507903,
		"sigla" : "PB"
	},
	{
		"id" : 2660,
		"nome" : "Juru",
		"codigo_ibge" : 2508000,
		"sigla" : "PB"
	},
	{
		"id" : 251,
		"nome" : "Juruá",
		"codigo_ibge" : 1302207,
		"sigla" : "AM"
	},
	{
		"id" : 1985,
		"nome" : "Juruaia",
		"codigo_ibge" : 3136900,
		"sigla" : "MG"
	},
	{
		"id" : 1406,
		"nome" : "Juruena",
		"codigo_ibge" : 5105176,
		"sigla" : "MT"
	},
	{
		"id" : 2479,
		"nome" : "Juruti",
		"codigo_ibge" : 1503903,
		"sigla" : "PA"
	},
	{
		"id" : 1407,
		"nome" : "Juscimeira",
		"codigo_ibge" : 5105200,
		"sigla" : "MT"
	},
	{
		"id" : 2966,
		"nome" : "Jussara",
		"codigo_ibge" : 4113007,
		"sigla" : "PR"
	},
	{
		"id" : 500,
		"nome" : "Jussara",
		"codigo_ibge" : 2918506,
		"sigla" : "BA"
	},
	{
		"id" : 1014,
		"nome" : "Jussara",
		"codigo_ibge" : 5212204,
		"sigla" : "GO"
	},
	{
		"id" : 501,
		"nome" : "Jussari",
		"codigo_ibge" : 2918555,
		"sigla" : "BA"
	},
	{
		"id" : 502,
		"nome" : "Jussiape",
		"codigo_ibge" : 2918605,
		"sigla" : "BA"
	},
	{
		"id" : 252,
		"nome" : "Jutaí",
		"codigo_ibge" : 1302306,
		"sigla" : "AM"
	},
	{
		"id" : 1533,
		"nome" : "Juti",
		"codigo_ibge" : 5005152,
		"sigla" : "MS"
	},
	{
		"id" : 1986,
		"nome" : "Juvenília",
		"codigo_ibge" : 3136959,
		"sigla" : "MG"
	},
	{
		"id" : 2967,
		"nome" : "Kaloré",
		"codigo_ibge" : 4113106,
		"sigla" : "PR"
	},
	{
		"id" : 253,
		"nome" : "Lábrea",
		"codigo_ibge" : 1302405,
		"sigla" : "AM"
	},
	{
		"id" : 4552,
		"nome" : "Lacerdópolis",
		"codigo_ibge" : 4209201,
		"sigla" : "SC"
	},
	{
		"id" : 1987,
		"nome" : "Ladainha",
		"codigo_ibge" : 3137007,
		"sigla" : "MG"
	},
	{
		"id" : 1534,
		"nome" : "Ladário",
		"codigo_ibge" : 5005202,
		"sigla" : "MS"
	},
	{
		"id" : 503,
		"nome" : "Lafaiete Coutinho",
		"codigo_ibge" : 2918704,
		"sigla" : "BA"
	},
	{
		"id" : 1988,
		"nome" : "Lagamar",
		"codigo_ibge" : 3137106,
		"sigla" : "MG"
	},
	{
		"id" : 5383,
		"nome" : "Lagarto",
		"codigo_ibge" : 2803500,
		"sigla" : "SE"
	},
	{
		"id" : 4553,
		"nome" : "Lages",
		"codigo_ibge" : 4209300,
		"sigla" : "SC"
	},
	{
		"id" : 1227,
		"nome" : "Lago da Pedra",
		"codigo_ibge" : 2105708,
		"sigla" : "MA"
	},
	{
		"id" : 1228,
		"nome" : "Lago do Junco",
		"codigo_ibge" : 2105807,
		"sigla" : "MA"
	},
	{
		"id" : 1229,
		"nome" : "Lago dos Rodrigues",
		"codigo_ibge" : 2105948,
		"sigla" : "MA"
	},
	{
		"id" : 1230,
		"nome" : "Lago Verde",
		"codigo_ibge" : 2105906,
		"sigla" : "MA"
	},
	{
		"id" : 2661,
		"nome" : "Lagoa",
		"codigo_ibge" : 2508109,
		"sigla" : "PB"
	},
	{
		"id" : 3479,
		"nome" : "Lagoa Alegre",
		"codigo_ibge" : 2205557,
		"sigla" : "PI"
	},
	{
		"id" : 4077,
		"nome" : "Lagoa Bonita do Sul",
		"codigo_ibge" : 4311239,
		"sigla" : "RS"
	},
	{
		"id" : 3750,
		"nome" : "Lagoa d Anta",
		"codigo_ibge" : 2406205,
		"sigla" : "RN"
	},
	{
		"id" : 145,
		"nome" : "Lagoa da Canoa",
		"codigo_ibge" : 2704104,
		"sigla" : "AL"
	},
	{
		"id" : 5492,
		"nome" : "Lagoa da Confusão",
		"codigo_ibge" : 1711902,
		"sigla" : "TO"
	},
	{
		"id" : 1989,
		"nome" : "Lagoa da Prata",
		"codigo_ibge" : 3137205,
		"sigla" : "MG"
	},
	{
		"id" : 2662,
		"nome" : "Lagoa de Dentro",
		"codigo_ibge" : 2508208,
		"sigla" : "PB"
	},
	{
		"id" : 3280,
		"nome" : "Lagoa de Itaenga",
		"codigo_ibge" : 2608503,
		"sigla" : "PE"
	},
	{
		"id" : 3751,
		"nome" : "Lagoa de Pedras",
		"codigo_ibge" : 2406304,
		"sigla" : "RN"
	},
	{
		"id" : 3480,
		"nome" : "Lagoa de São Francisco",
		"codigo_ibge" : 2205573,
		"sigla" : "PI"
	},
	{
		"id" : 3752,
		"nome" : "Lagoa de Velhos",
		"codigo_ibge" : 2406403,
		"sigla" : "RN"
	},
	{
		"id" : 3481,
		"nome" : "Lagoa do Barro do Piauí",
		"codigo_ibge" : 2205565,
		"sigla" : "PI"
	},
	{
		"id" : 3279,
		"nome" : "Lagoa do Carro",
		"codigo_ibge" : 2608453,
		"sigla" : "PE"
	},
	{
		"id" : 1231,
		"nome" : "Lagoa do Mato",
		"codigo_ibge" : 2105922,
		"sigla" : "MA"
	},
	{
		"id" : 3281,
		"nome" : "Lagoa do Ouro",
		"codigo_ibge" : 2608602,
		"sigla" : "PE"
	},
	{
		"id" : 3482,
		"nome" : "Lagoa do Piauí",
		"codigo_ibge" : 2205581,
		"sigla" : "PI"
	},
	{
		"id" : 3483,
		"nome" : "Lagoa do Sítio",
		"codigo_ibge" : 2205599,
		"sigla" : "PI"
	},
	{
		"id" : 5493,
		"nome" : "Lagoa do Tocantins",
		"codigo_ibge" : 1711951,
		"sigla" : "TO"
	},
	{
		"id" : 3282,
		"nome" : "Lagoa dos Gatos",
		"codigo_ibge" : 2608701,
		"sigla" : "PE"
	},
	{
		"id" : 1990,
		"nome" : "Lagoa dos Patos",
		"codigo_ibge" : 3137304,
		"sigla" : "MG"
	},
	{
		"id" : 4078,
		"nome" : "Lagoa dos Três Cantos",
		"codigo_ibge" : 4311270,
		"sigla" : "RS"
	},
	{
		"id" : 1991,
		"nome" : "Lagoa Dourada",
		"codigo_ibge" : 3137403,
		"sigla" : "MG"
	},
	{
		"id" : 1992,
		"nome" : "Lagoa Formosa",
		"codigo_ibge" : 3137502,
		"sigla" : "MG"
	},
	{
		"id" : 1993,
		"nome" : "Lagoa Grande",
		"codigo_ibge" : 3137536,
		"sigla" : "MG"
	},
	{
		"id" : 3283,
		"nome" : "Lagoa Grande",
		"codigo_ibge" : 2608750,
		"sigla" : "PE"
	},
	{
		"id" : 1232,
		"nome" : "Lagoa Grande do Maranhão",
		"codigo_ibge" : 2105963,
		"sigla" : "MA"
	},
	{
		"id" : 3753,
		"nome" : "Lagoa Nova",
		"codigo_ibge" : 2406502,
		"sigla" : "RN"
	},
	{
		"id" : 504,
		"nome" : "Lagoa Real",
		"codigo_ibge" : 2918753,
		"sigla" : "BA"
	},
	{
		"id" : 3754,
		"nome" : "Lagoa Salgada",
		"codigo_ibge" : 2406601,
		"sigla" : "RN"
	},
	{
		"id" : 1015,
		"nome" : "Lagoa Santa",
		"codigo_ibge" : 5212253,
		"sigla" : "GO"
	},
	{
		"id" : 1994,
		"nome" : "Lagoa Santa",
		"codigo_ibge" : 3137601,
		"sigla" : "MG"
	},
	{
		"id" : 2663,
		"nome" : "Lagoa Seca",
		"codigo_ibge" : 2508307,
		"sigla" : "PB"
	},
	{
		"id" : 4079,
		"nome" : "Lagoa Vermelha",
		"codigo_ibge" : 4311304,
		"sigla" : "RS"
	},
	{
		"id" : 4080,
		"nome" : "Lagoão",
		"codigo_ibge" : 4311254,
		"sigla" : "RS"
	},
	{
		"id" : 5005,
		"nome" : "Lagoinha",
		"codigo_ibge" : 3526308,
		"sigla" : "SP"
	},
	{
		"id" : 3484,
		"nome" : "Lagoinha do Piauí",
		"codigo_ibge" : 2205540,
		"sigla" : "PI"
	},
	{
		"id" : 4554,
		"nome" : "Laguna",
		"codigo_ibge" : 4209409,
		"sigla" : "SC"
	},
	{
		"id" : 1535,
		"nome" : "Laguna Carapã",
		"codigo_ibge" : 5005251,
		"sigla" : "MS"
	},
	{
		"id" : 505,
		"nome" : "Laje",
		"codigo_ibge" : 2918803,
		"sigla" : "BA"
	},
	{
		"id" : 3626,
		"nome" : "Laje do Muriaé",
		"codigo_ibge" : 3302304,
		"sigla" : "RJ"
	},
	{
		"id" : 4081,
		"nome" : "Lajeado",
		"codigo_ibge" : 4311403,
		"sigla" : "RS"
	},
	{
		"id" : 5494,
		"nome" : "Lajeado",
		"codigo_ibge" : 1712009,
		"sigla" : "TO"
	},
	{
		"id" : 4082,
		"nome" : "Lajeado do Bugre",
		"codigo_ibge" : 4311429,
		"sigla" : "RS"
	},
	{
		"id" : 4555,
		"nome" : "Lajeado Grande",
		"codigo_ibge" : 4209458,
		"sigla" : "SC"
	},
	{
		"id" : 1233,
		"nome" : "Lajeado Novo",
		"codigo_ibge" : 2105989,
		"sigla" : "MA"
	},
	{
		"id" : 506,
		"nome" : "Lajedão",
		"codigo_ibge" : 2918902,
		"sigla" : "BA"
	},
	{
		"id" : 507,
		"nome" : "Lajedinho",
		"codigo_ibge" : 2919009,
		"sigla" : "BA"
	},
	{
		"id" : 3284,
		"nome" : "Lajedo",
		"codigo_ibge" : 2608800,
		"sigla" : "PE"
	},
	{
		"id" : 508,
		"nome" : "Lajedo do Tabocal",
		"codigo_ibge" : 2919058,
		"sigla" : "BA"
	},
	{
		"id" : 3755,
		"nome" : "Lajes",
		"codigo_ibge" : 2406700,
		"sigla" : "RN"
	},
	{
		"id" : 3756,
		"nome" : "Lajes Pintadas",
		"codigo_ibge" : 2406809,
		"sigla" : "RN"
	},
	{
		"id" : 1995,
		"nome" : "Lajinha",
		"codigo_ibge" : 3137700,
		"sigla" : "MG"
	},
	{
		"id" : 509,
		"nome" : "Lamarão",
		"codigo_ibge" : 2919108,
		"sigla" : "BA"
	},
	{
		"id" : 1996,
		"nome" : "Lambari",
		"codigo_ibge" : 3137809,
		"sigla" : "MG"
	},
	{
		"id" : 1408,
		"nome" : "Lambari d Oeste",
		"codigo_ibge" : 5105234,
		"sigla" : "MT"
	},
	{
		"id" : 1997,
		"nome" : "Lamim",
		"codigo_ibge" : 3137908,
		"sigla" : "MG"
	},
	{
		"id" : 3485,
		"nome" : "Landri Sales",
		"codigo_ibge" : 2205607,
		"sigla" : "PI"
	},
	{
		"id" : 2968,
		"nome" : "Lapa",
		"codigo_ibge" : 4113205,
		"sigla" : "PR"
	},
	{
		"id" : 510,
		"nome" : "Lapão",
		"codigo_ibge" : 2919157,
		"sigla" : "BA"
	},
	{
		"id" : 42,
		"nome" : "Laranja da Terra",
		"codigo_ibge" : 3203163,
		"sigla" : "ES"
	},
	{
		"id" : 1998,
		"nome" : "Laranjal",
		"codigo_ibge" : 3138005,
		"sigla" : "MG"
	},
	{
		"id" : 2969,
		"nome" : "Laranjal",
		"codigo_ibge" : 4113254,
		"sigla" : "PR"
	},
	{
		"id" : 208,
		"nome" : "Laranjal do Jari",
		"codigo_ibge" : 1600279,
		"sigla" : "AP"
	},
	{
		"id" : 5006,
		"nome" : "Laranjal Paulista",
		"codigo_ibge" : 3526407,
		"sigla" : "SP"
	},
	{
		"id" : 5384,
		"nome" : "Laranjeiras",
		"codigo_ibge" : 2803609,
		"sigla" : "SE"
	},
	{
		"id" : 2970,
		"nome" : "Laranjeiras do Sul",
		"codigo_ibge" : 4113304,
		"sigla" : "PR"
	},
	{
		"id" : 1999,
		"nome" : "Lassance",
		"codigo_ibge" : 3138104,
		"sigla" : "MG"
	},
	{
		"id" : 2664,
		"nome" : "Lastro",
		"codigo_ibge" : 2508406,
		"sigla" : "PB"
	},
	{
		"id" : 4556,
		"nome" : "Laurentino",
		"codigo_ibge" : 4209508,
		"sigla" : "SC"
	},
	{
		"id" : 511,
		"nome" : "Lauro de Freitas",
		"codigo_ibge" : 2919207,
		"sigla" : "BA"
	},
	{
		"id" : 4557,
		"nome" : "Lauro Muller",
		"codigo_ibge" : 4209607,
		"sigla" : "SC"
	},
	{
		"id" : 5495,
		"nome" : "Lavandeira",
		"codigo_ibge" : 1712157,
		"sigla" : "TO"
	},
	{
		"id" : 5007,
		"nome" : "Lavínia",
		"codigo_ibge" : 3526506,
		"sigla" : "SP"
	},
	{
		"id" : 2000,
		"nome" : "Lavras",
		"codigo_ibge" : 3138203,
		"sigla" : "MG"
	},
	{
		"id" : 798,
		"nome" : "Lavras da Mangabeira",
		"codigo_ibge" : 2307502,
		"sigla" : "CE"
	},
	{
		"id" : 4083,
		"nome" : "Lavras do Sul",
		"codigo_ibge" : 4311502,
		"sigla" : "RS"
	},
	{
		"id" : 5008,
		"nome" : "Lavrinhas",
		"codigo_ibge" : 3526605,
		"sigla" : "SP"
	},
	{
		"id" : 2001,
		"nome" : "Leandro Ferreira",
		"codigo_ibge" : 3138302,
		"sigla" : "MG"
	},
	{
		"id" : 4558,
		"nome" : "Lebon Régis",
		"codigo_ibge" : 4209706,
		"sigla" : "SC"
	},
	{
		"id" : 5009,
		"nome" : "Leme",
		"codigo_ibge" : 3526704,
		"sigla" : "SP"
	},
	{
		"id" : 2002,
		"nome" : "Leme do Prado",
		"codigo_ibge" : 3138351,
		"sigla" : "MG"
	},
	{
		"id" : 512,
		"nome" : "Lençóis",
		"codigo_ibge" : 2919306,
		"sigla" : "BA"
	},
	{
		"id" : 5010,
		"nome" : "Lençóis Paulista",
		"codigo_ibge" : 3526803,
		"sigla" : "SP"
	},
	{
		"id" : 4559,
		"nome" : "Leoberto Leal",
		"codigo_ibge" : 4209805,
		"sigla" : "SC"
	},
	{
		"id" : 2003,
		"nome" : "Leopoldina",
		"codigo_ibge" : 3138401,
		"sigla" : "MG"
	},
	{
		"id" : 1016,
		"nome" : "Leopoldo de Bulhões",
		"codigo_ibge" : 5212303,
		"sigla" : "GO"
	},
	{
		"id" : 2971,
		"nome" : "Leópolis",
		"codigo_ibge" : 4113403,
		"sigla" : "PR"
	},
	{
		"id" : 4084,
		"nome" : "Liberato Salzano",
		"codigo_ibge" : 4311601,
		"sigla" : "RS"
	},
	{
		"id" : 2004,
		"nome" : "Liberdade",
		"codigo_ibge" : 3138500,
		"sigla" : "MG"
	},
	{
		"id" : 513,
		"nome" : "Licínio de Almeida",
		"codigo_ibge" : 2919405,
		"sigla" : "BA"
	},
	{
		"id" : 2972,
		"nome" : "Lidianópolis",
		"codigo_ibge" : 4113429,
		"sigla" : "PR"
	},
	{
		"id" : 1234,
		"nome" : "Lima Campos",
		"codigo_ibge" : 2106003,
		"sigla" : "MA"
	},
	{
		"id" : 2005,
		"nome" : "Lima Duarte",
		"codigo_ibge" : 3138609,
		"sigla" : "MG"
	},
	{
		"id" : 5011,
		"nome" : "Limeira",
		"codigo_ibge" : 3526902,
		"sigla" : "SP"
	},
	{
		"id" : 2006,
		"nome" : "Limeira do Oeste",
		"codigo_ibge" : 3138625,
		"sigla" : "MG"
	},
	{
		"id" : 3285,
		"nome" : "Limoeiro",
		"codigo_ibge" : 2608909,
		"sigla" : "PE"
	},
	{
		"id" : 146,
		"nome" : "Limoeiro de Anadia",
		"codigo_ibge" : 2704203,
		"sigla" : "AL"
	},
	{
		"id" : 2480,
		"nome" : "Limoeiro do Ajuru",
		"codigo_ibge" : 1504000,
		"sigla" : "PA"
	},
	{
		"id" : 799,
		"nome" : "Limoeiro do Norte",
		"codigo_ibge" : 2307601,
		"sigla" : "CE"
	},
	{
		"id" : 2973,
		"nome" : "Lindoeste",
		"codigo_ibge" : 4113452,
		"sigla" : "PR"
	},
	{
		"id" : 5012,
		"nome" : "Lindóia",
		"codigo_ibge" : 3527009,
		"sigla" : "SP"
	},
	{
		"id" : 4560,
		"nome" : "Lindóia do Sul",
		"codigo_ibge" : 4209854,
		"sigla" : "SC"
	},
	{
		"id" : 4085,
		"nome" : "Lindolfo Collor",
		"codigo_ibge" : 4311627,
		"sigla" : "RS"
	},
	{
		"id" : 4086,
		"nome" : "Linha Nova",
		"codigo_ibge" : 4311643,
		"sigla" : "RS"
	},
	{
		"id" : 43,
		"nome" : "Linhares",
		"codigo_ibge" : 3203205,
		"sigla" : "ES"
	},
	{
		"id" : 5013,
		"nome" : "Lins",
		"codigo_ibge" : 3527108,
		"sigla" : "SP"
	},
	{
		"id" : 2665,
		"nome" : "Livramento",
		"codigo_ibge" : 2508505,
		"sigla" : "PB"
	},
	{
		"id" : 514,
		"nome" : "Livramento de Nossa Senhora",
		"codigo_ibge" : 2919504,
		"sigla" : "BA"
	},
	{
		"id" : 5496,
		"nome" : "Lizarda",
		"codigo_ibge" : 1712405,
		"sigla" : "TO"
	},
	{
		"id" : 2974,
		"nome" : "Loanda",
		"codigo_ibge" : 4113502,
		"sigla" : "PR"
	},
	{
		"id" : 2975,
		"nome" : "Lobato",
		"codigo_ibge" : 4113601,
		"sigla" : "PR"
	},
	{
		"id" : 2666,
		"nome" : "Logradouro",
		"codigo_ibge" : 2508554,
		"sigla" : "PB"
	},
	{
		"id" : 2976,
		"nome" : "Londrina",
		"codigo_ibge" : 4113700,
		"sigla" : "PR"
	},
	{
		"id" : 2007,
		"nome" : "Lontra",
		"codigo_ibge" : 3138658,
		"sigla" : "MG"
	},
	{
		"id" : 4561,
		"nome" : "Lontras",
		"codigo_ibge" : 4209904,
		"sigla" : "SC"
	},
	{
		"id" : 5014,
		"nome" : "Lorena",
		"codigo_ibge" : 3527207,
		"sigla" : "SP"
	},
	{
		"id" : 1235,
		"nome" : "Loreto",
		"codigo_ibge" : 2106102,
		"sigla" : "MA"
	},
	{
		"id" : 5015,
		"nome" : "Lourdes",
		"codigo_ibge" : 3527256,
		"sigla" : "SP"
	},
	{
		"id" : 5016,
		"nome" : "Louveira",
		"codigo_ibge" : 3527306,
		"sigla" : "SP"
	},
	{
		"id" : 1409,
		"nome" : "Lucas do Rio Verde",
		"codigo_ibge" : 5105259,
		"sigla" : "MT"
	},
	{
		"id" : 5017,
		"nome" : "Lucélia",
		"codigo_ibge" : 3527405,
		"sigla" : "SP"
	},
	{
		"id" : 2667,
		"nome" : "Lucena",
		"codigo_ibge" : 2508604,
		"sigla" : "PB"
	},
	{
		"id" : 5018,
		"nome" : "Lucianópolis",
		"codigo_ibge" : 3527504,
		"sigla" : "SP"
	},
	{
		"id" : 1410,
		"nome" : "Luciara",
		"codigo_ibge" : 5105309,
		"sigla" : "MT"
	},
	{
		"id" : 3757,
		"nome" : "Lucrécia",
		"codigo_ibge" : 2406908,
		"sigla" : "RN"
	},
	{
		"id" : 5019,
		"nome" : "Luís Antônio",
		"codigo_ibge" : 3527603,
		"sigla" : "SP"
	},
	{
		"id" : 3486,
		"nome" : "Luís Correia",
		"codigo_ibge" : 2205706,
		"sigla" : "PI"
	},
	{
		"id" : 1236,
		"nome" : "Luís Domingues",
		"codigo_ibge" : 2106201,
		"sigla" : "MA"
	},
	{
		"id" : 515,
		"nome" : "Luís Eduardo Magalhães",
		"codigo_ibge" : 2919553,
		"sigla" : "BA"
	},
	{
		"id" : 3758,
		"nome" : "Luís Gomes",
		"codigo_ibge" : 2407005,
		"sigla" : "RN"
	},
	{
		"id" : 2008,
		"nome" : "Luisburgo",
		"codigo_ibge" : 3138674,
		"sigla" : "MG"
	},
	{
		"id" : 2009,
		"nome" : "Luislândia",
		"codigo_ibge" : 3138682,
		"sigla" : "MG"
	},
	{
		"id" : 4562,
		"nome" : "Luiz Alves",
		"codigo_ibge" : 4210001,
		"sigla" : "SC"
	},
	{
		"id" : 2977,
		"nome" : "Luiziana",
		"codigo_ibge" : 4113734,
		"sigla" : "PR"
	},
	{
		"id" : 5020,
		"nome" : "Luiziânia",
		"codigo_ibge" : 3527702,
		"sigla" : "SP"
	},
	{
		"id" : 2010,
		"nome" : "Luminárias",
		"codigo_ibge" : 3138708,
		"sigla" : "MG"
	},
	{
		"id" : 2978,
		"nome" : "Lunardelli",
		"codigo_ibge" : 4113759,
		"sigla" : "PR"
	},
	{
		"id" : 5021,
		"nome" : "Lupércio",
		"codigo_ibge" : 3527801,
		"sigla" : "SP"
	},
	{
		"id" : 2979,
		"nome" : "Lupionópolis",
		"codigo_ibge" : 4113809,
		"sigla" : "PR"
	},
	{
		"id" : 5022,
		"nome" : "Lutécia",
		"codigo_ibge" : 3527900,
		"sigla" : "SP"
	},
	{
		"id" : 2011,
		"nome" : "Luz",
		"codigo_ibge" : 3138807,
		"sigla" : "MG"
	},
	{
		"id" : 4563,
		"nome" : "Luzerna",
		"codigo_ibge" : 4210035,
		"sigla" : "SC"
	},
	{
		"id" : 1017,
		"nome" : "Luziânia",
		"codigo_ibge" : 5212501,
		"sigla" : "GO"
	},
	{
		"id" : 3487,
		"nome" : "Luzilândia",
		"codigo_ibge" : 2205805,
		"sigla" : "PI"
	},
	{
		"id" : 5497,
		"nome" : "Luzinópolis",
		"codigo_ibge" : 1712454,
		"sigla" : "TO"
	},
	{
		"id" : 3627,
		"nome" : "Macaé",
		"codigo_ibge" : 3302403,
		"sigla" : "RJ"
	},
	{
		"id" : 3759,
		"nome" : "Macaíba",
		"codigo_ibge" : 2407104,
		"sigla" : "RN"
	},
	{
		"id" : 516,
		"nome" : "Macajuba",
		"codigo_ibge" : 2919603,
		"sigla" : "BA"
	},
	{
		"id" : 4087,
		"nome" : "Maçambará",
		"codigo_ibge" : 4311718,
		"sigla" : "RS"
	},
	{
		"id" : 5385,
		"nome" : "Macambira",
		"codigo_ibge" : 2803708,
		"sigla" : "SE"
	},
	{
		"id" : 209,
		"nome" : "Macapá",
		"codigo_ibge" : 1600303,
		"sigla" : "AP"
	},
	{
		"id" : 3286,
		"nome" : "Macaparana",
		"codigo_ibge" : 2609006,
		"sigla" : "PE"
	},
	{
		"id" : 517,
		"nome" : "Macarani",
		"codigo_ibge" : 2919702,
		"sigla" : "BA"
	},
	{
		"id" : 5023,
		"nome" : "Macatuba",
		"codigo_ibge" : 3528007,
		"sigla" : "SP"
	},
	{
		"id" : 3760,
		"nome" : "Macau",
		"codigo_ibge" : 2407203,
		"sigla" : "RN"
	},
	{
		"id" : 5024,
		"nome" : "Macaubal",
		"codigo_ibge" : 3528106,
		"sigla" : "SP"
	},
	{
		"id" : 518,
		"nome" : "Macaúbas",
		"codigo_ibge" : 2919801,
		"sigla" : "BA"
	},
	{
		"id" : 5025,
		"nome" : "Macedônia",
		"codigo_ibge" : 3528205,
		"sigla" : "SP"
	},
	{
		"id" : 147,
		"nome" : "Maceió",
		"codigo_ibge" : 2704302,
		"sigla" : "AL"
	},
	{
		"id" : 2012,
		"nome" : "Machacalis",
		"codigo_ibge" : 3138906,
		"sigla" : "MG"
	},
	{
		"id" : 4088,
		"nome" : "Machadinho",
		"codigo_ibge" : 4311700,
		"sigla" : "RS"
	},
	{
		"id" : 4370,
		"nome" : "Machadinho d Oeste",
		"codigo_ibge" : 1100130,
		"sigla" : "RO"
	},
	{
		"id" : 2013,
		"nome" : "Machado",
		"codigo_ibge" : 3139003,
		"sigla" : "MG"
	},
	{
		"id" : 3287,
		"nome" : "Machados",
		"codigo_ibge" : 2609105,
		"sigla" : "PE"
	},
	{
		"id" : 4564,
		"nome" : "Macieira",
		"codigo_ibge" : 4210050,
		"sigla" : "SC"
	},
	{
		"id" : 3628,
		"nome" : "Macuco",
		"codigo_ibge" : 3302452,
		"sigla" : "RJ"
	},
	{
		"id" : 519,
		"nome" : "Macururé",
		"codigo_ibge" : 2919900,
		"sigla" : "BA"
	},
	{
		"id" : 800,
		"nome" : "Madalena",
		"codigo_ibge" : 2307635,
		"sigla" : "CE"
	},
	{
		"id" : 3488,
		"nome" : "Madeiro",
		"codigo_ibge" : 2205854,
		"sigla" : "PI"
	},
	{
		"id" : 520,
		"nome" : "Madre de Deus",
		"codigo_ibge" : 2919926,
		"sigla" : "BA"
	},
	{
		"id" : 2014,
		"nome" : "Madre de Deus de Minas",
		"codigo_ibge" : 3139102,
		"sigla" : "MG"
	},
	{
		"id" : 2668,
		"nome" : "Mãe d Água",
		"codigo_ibge" : 2508703,
		"sigla" : "PB"
	},
	{
		"id" : 2481,
		"nome" : "Mãe do Rio",
		"codigo_ibge" : 1504059,
		"sigla" : "PA"
	},
	{
		"id" : 521,
		"nome" : "Maetinga",
		"codigo_ibge" : 2919959,
		"sigla" : "BA"
	},
	{
		"id" : 4565,
		"nome" : "Mafra",
		"codigo_ibge" : 4210100,
		"sigla" : "SC"
	},
	{
		"id" : 2482,
		"nome" : "Magalhães Barata",
		"codigo_ibge" : 1504109,
		"sigla" : "PA"
	},
	{
		"id" : 1237,
		"nome" : "Magalhães de Almeida",
		"codigo_ibge" : 2106300,
		"sigla" : "MA"
	},
	{
		"id" : 5026,
		"nome" : "Magda",
		"codigo_ibge" : 3528304,
		"sigla" : "SP"
	},
	{
		"id" : 3629,
		"nome" : "Magé",
		"codigo_ibge" : 3302502,
		"sigla" : "RJ"
	},
	{
		"id" : 522,
		"nome" : "Maiquinique",
		"codigo_ibge" : 2920007,
		"sigla" : "BA"
	},
	{
		"id" : 523,
		"nome" : "Mairi",
		"codigo_ibge" : 2920106,
		"sigla" : "BA"
	},
	{
		"id" : 5027,
		"nome" : "Mairinque",
		"codigo_ibge" : 3528403,
		"sigla" : "SP"
	},
	{
		"id" : 5028,
		"nome" : "Mairiporã",
		"codigo_ibge" : 3528502,
		"sigla" : "SP"
	},
	{
		"id" : 1018,
		"nome" : "Mairipotaba",
		"codigo_ibge" : 5212600,
		"sigla" : "GO"
	},
	{
		"id" : 4566,
		"nome" : "Major Gercino",
		"codigo_ibge" : 4210209,
		"sigla" : "SC"
	},
	{
		"id" : 148,
		"nome" : "Major Isidoro",
		"codigo_ibge" : 2704401,
		"sigla" : "AL"
	},
	{
		"id" : 3761,
		"nome" : "Major Sales",
		"codigo_ibge" : 2407252,
		"sigla" : "RN"
	},
	{
		"id" : 4567,
		"nome" : "Major Vieira",
		"codigo_ibge" : 4210308,
		"sigla" : "SC"
	},
	{
		"id" : 2015,
		"nome" : "Malacacheta",
		"codigo_ibge" : 3139201,
		"sigla" : "MG"
	},
	{
		"id" : 524,
		"nome" : "Malhada",
		"codigo_ibge" : 2920205,
		"sigla" : "BA"
	},
	{
		"id" : 525,
		"nome" : "Malhada de Pedras",
		"codigo_ibge" : 2920304,
		"sigla" : "BA"
	},
	{
		"id" : 5386,
		"nome" : "Malhada dos Bois",
		"codigo_ibge" : 2803807,
		"sigla" : "SE"
	},
	{
		"id" : 5387,
		"nome" : "Malhador",
		"codigo_ibge" : 2803906,
		"sigla" : "SE"
	},
	{
		"id" : 2980,
		"nome" : "Mallet",
		"codigo_ibge" : 4113908,
		"sigla" : "PR"
	},
	{
		"id" : 2669,
		"nome" : "Malta",
		"codigo_ibge" : 2508802,
		"sigla" : "PB"
	},
	{
		"id" : 2670,
		"nome" : "Mamanguape",
		"codigo_ibge" : 2508901,
		"sigla" : "PB"
	},
	{
		"id" : 1019,
		"nome" : "Mambaí",
		"codigo_ibge" : 5212709,
		"sigla" : "GO"
	},
	{
		"id" : 2981,
		"nome" : "Mamborê",
		"codigo_ibge" : 4114005,
		"sigla" : "PR"
	},
	{
		"id" : 2016,
		"nome" : "Mamonas",
		"codigo_ibge" : 3139250,
		"sigla" : "MG"
	},
	{
		"id" : 4089,
		"nome" : "Mampituba",
		"codigo_ibge" : 4311734,
		"sigla" : "RS"
	},
	{
		"id" : 254,
		"nome" : "Manacapuru",
		"codigo_ibge" : 1302504,
		"sigla" : "AM"
	},
	{
		"id" : 2671,
		"nome" : "Manaíra",
		"codigo_ibge" : 2509008,
		"sigla" : "PB"
	},
	{
		"id" : 255,
		"nome" : "Manaquiri",
		"codigo_ibge" : 1302553,
		"sigla" : "AM"
	},
	{
		"id" : 3288,
		"nome" : "Manari",
		"codigo_ibge" : 2609154,
		"sigla" : "PE"
	},
	{
		"id" : 256,
		"nome" : "Manaus",
		"codigo_ibge" : 1302603,
		"sigla" : "AM"
	},
	{
		"id" : 88,
		"nome" : "Mâncio Lima",
		"codigo_ibge" : 1200336,
		"sigla" : "AC"
	},
	{
		"id" : 2982,
		"nome" : "Mandaguaçu",
		"codigo_ibge" : 4114104,
		"sigla" : "PR"
	},
	{
		"id" : 2983,
		"nome" : "Mandaguari",
		"codigo_ibge" : 4114203,
		"sigla" : "PR"
	},
	{
		"id" : 2984,
		"nome" : "Mandirituba",
		"codigo_ibge" : 4114302,
		"sigla" : "PR"
	},
	{
		"id" : 5029,
		"nome" : "Manduri",
		"codigo_ibge" : 3528601,
		"sigla" : "SP"
	},
	{
		"id" : 2985,
		"nome" : "Manfrinópolis",
		"codigo_ibge" : 4114351,
		"sigla" : "PR"
	},
	{
		"id" : 2017,
		"nome" : "Manga",
		"codigo_ibge" : 3139300,
		"sigla" : "MG"
	},
	{
		"id" : 3630,
		"nome" : "Mangaratiba",
		"codigo_ibge" : 3302601,
		"sigla" : "RJ"
	},
	{
		"id" : 2986,
		"nome" : "Mangueirinha",
		"codigo_ibge" : 4114401,
		"sigla" : "PR"
	},
	{
		"id" : 2018,
		"nome" : "Manhuaçu",
		"codigo_ibge" : 3139409,
		"sigla" : "MG"
	},
	{
		"id" : 2019,
		"nome" : "Manhumirim",
		"codigo_ibge" : 3139508,
		"sigla" : "MG"
	},
	{
		"id" : 257,
		"nome" : "Manicoré",
		"codigo_ibge" : 1302702,
		"sigla" : "AM"
	},
	{
		"id" : 3489,
		"nome" : "Manoel Emídio",
		"codigo_ibge" : 2205904,
		"sigla" : "PI"
	},
	{
		"id" : 2987,
		"nome" : "Manoel Ribas",
		"codigo_ibge" : 4114500,
		"sigla" : "PR"
	},
	{
		"id" : 89,
		"nome" : "Manoel Urbano",
		"codigo_ibge" : 1200344,
		"sigla" : "AC"
	},
	{
		"id" : 4090,
		"nome" : "Manoel Viana",
		"codigo_ibge" : 4311759,
		"sigla" : "RS"
	},
	{
		"id" : 526,
		"nome" : "Manoel Vitorino",
		"codigo_ibge" : 2920403,
		"sigla" : "BA"
	},
	{
		"id" : 527,
		"nome" : "Mansidão",
		"codigo_ibge" : 2920452,
		"sigla" : "BA"
	},
	{
		"id" : 2020,
		"nome" : "Mantena",
		"codigo_ibge" : 3139607,
		"sigla" : "MG"
	},
	{
		"id" : 44,
		"nome" : "Mantenópolis",
		"codigo_ibge" : 3203304,
		"sigla" : "ES"
	},
	{
		"id" : 4091,
		"nome" : "Maquiné",
		"codigo_ibge" : 4311775,
		"sigla" : "RS"
	},
	{
		"id" : 2021,
		"nome" : "Mar de Espanha",
		"codigo_ibge" : 3139805,
		"sigla" : "MG"
	},
	{
		"id" : 149,
		"nome" : "Mar Vermelho",
		"codigo_ibge" : 2704906,
		"sigla" : "AL"
	},
	{
		"id" : 1020,
		"nome" : "Mara Rosa",
		"codigo_ibge" : 5212808,
		"sigla" : "GO"
	},
	{
		"id" : 258,
		"nome" : "Maraã",
		"codigo_ibge" : 1302801,
		"sigla" : "AM"
	},
	{
		"id" : 2483,
		"nome" : "Marabá",
		"codigo_ibge" : 1504208,
		"sigla" : "PA"
	},
	{
		"id" : 5030,
		"nome" : "Marabá Paulista",
		"codigo_ibge" : 3528700,
		"sigla" : "SP"
	},
	{
		"id" : 1238,
		"nome" : "Maracaçumé",
		"codigo_ibge" : 2106326,
		"sigla" : "MA"
	},
	{
		"id" : 5031,
		"nome" : "Maracaí",
		"codigo_ibge" : 3528809,
		"sigla" : "SP"
	},
	{
		"id" : 4568,
		"nome" : "Maracajá",
		"codigo_ibge" : 4210407,
		"sigla" : "SC"
	},
	{
		"id" : 1536,
		"nome" : "Maracaju",
		"codigo_ibge" : 5005400,
		"sigla" : "MS"
	},
	{
		"id" : 2484,
		"nome" : "Maracanã",
		"codigo_ibge" : 1504307,
		"sigla" : "PA"
	},
	{
		"id" : 801,
		"nome" : "Maracanaú",
		"codigo_ibge" : 2307650,
		"sigla" : "CE"
	},
	{
		"id" : 528,
		"nome" : "Maracás",
		"codigo_ibge" : 2920502,
		"sigla" : "BA"
	},
	{
		"id" : 150,
		"nome" : "Maragogi",
		"codigo_ibge" : 2704500,
		"sigla" : "AL"
	},
	{
		"id" : 529,
		"nome" : "Maragogipe",
		"codigo_ibge" : 2920601,
		"sigla" : "BA"
	},
	{
		"id" : 3289,
		"nome" : "Maraial",
		"codigo_ibge" : 2609204,
		"sigla" : "PE"
	},
	{
		"id" : 1239,
		"nome" : "Marajá do Sena",
		"codigo_ibge" : 2106359,
		"sigla" : "MA"
	},
	{
		"id" : 802,
		"nome" : "Maranguape",
		"codigo_ibge" : 2307700,
		"sigla" : "CE"
	},
	{
		"id" : 1240,
		"nome" : "Maranhãozinho",
		"codigo_ibge" : 2106375,
		"sigla" : "MA"
	},
	{
		"id" : 2485,
		"nome" : "Marapanim",
		"codigo_ibge" : 1504406,
		"sigla" : "PA"
	},
	{
		"id" : 5032,
		"nome" : "Marapoama",
		"codigo_ibge" : 3528858,
		"sigla" : "SP"
	},
	{
		"id" : 4092,
		"nome" : "Maratá",
		"codigo_ibge" : 4311791,
		"sigla" : "RS"
	},
	{
		"id" : 45,
		"nome" : "Marataízes",
		"codigo_ibge" : 3203320,
		"sigla" : "ES"
	},
	{
		"id" : 530,
		"nome" : "Maraú",
		"codigo_ibge" : 2920700,
		"sigla" : "BA"
	},
	{
		"id" : 4093,
		"nome" : "Marau",
		"codigo_ibge" : 4311809,
		"sigla" : "RS"
	},
	{
		"id" : 4569,
		"nome" : "Maravilha",
		"codigo_ibge" : 4210506,
		"sigla" : "SC"
	},
	{
		"id" : 151,
		"nome" : "Maravilha",
		"codigo_ibge" : 2704609,
		"sigla" : "AL"
	},
	{
		"id" : 2022,
		"nome" : "Maravilhas",
		"codigo_ibge" : 3139706,
		"sigla" : "MG"
	},
	{
		"id" : 2672,
		"nome" : "Marcação",
		"codigo_ibge" : 2509057,
		"sigla" : "PB"
	},
	{
		"id" : 1411,
		"nome" : "Marcelândia",
		"codigo_ibge" : 5105580,
		"sigla" : "MT"
	},
	{
		"id" : 4094,
		"nome" : "Marcelino Ramos",
		"codigo_ibge" : 4311908,
		"sigla" : "RS"
	},
	{
		"id" : 3762,
		"nome" : "Marcelino Vieira",
		"codigo_ibge" : 2407302,
		"sigla" : "RN"
	},
	{
		"id" : 531,
		"nome" : "Marcionílio Souza",
		"codigo_ibge" : 2920809,
		"sigla" : "BA"
	},
	{
		"id" : 803,
		"nome" : "Marco",
		"codigo_ibge" : 2307809,
		"sigla" : "CE"
	},
	{
		"id" : 3490,
		"nome" : "Marcolândia",
		"codigo_ibge" : 2205953,
		"sigla" : "PI"
	},
	{
		"id" : 3491,
		"nome" : "Marcos Parente",
		"codigo_ibge" : 2206001,
		"sigla" : "PI"
	},
	{
		"id" : 2988,
		"nome" : "Marechal Cândido Rondon",
		"codigo_ibge" : 4114609,
		"sigla" : "PR"
	},
	{
		"id" : 152,
		"nome" : "Marechal Deodoro",
		"codigo_ibge" : 2704708,
		"sigla" : "AL"
	},
	{
		"id" : 46,
		"nome" : "Marechal Floriano",
		"codigo_ibge" : 3203346,
		"sigla" : "ES"
	},
	{
		"id" : 90,
		"nome" : "Marechal Thaumaturgo",
		"codigo_ibge" : 1200351,
		"sigla" : "AC"
	},
	{
		"id" : 4570,
		"nome" : "Marema",
		"codigo_ibge" : 4210555,
		"sigla" : "SC"
	},
	{
		"id" : 2673,
		"nome" : "Mari",
		"codigo_ibge" : 2509107,
		"sigla" : "PB"
	},
	{
		"id" : 2023,
		"nome" : "Maria da Fé",
		"codigo_ibge" : 3139904,
		"sigla" : "MG"
	},
	{
		"id" : 2989,
		"nome" : "Maria Helena",
		"codigo_ibge" : 4114708,
		"sigla" : "PR"
	},
	{
		"id" : 2990,
		"nome" : "Marialva",
		"codigo_ibge" : 4114807,
		"sigla" : "PR"
	},
	{
		"id" : 2024,
		"nome" : "Mariana",
		"codigo_ibge" : 3140001,
		"sigla" : "MG"
	},
	{
		"id" : 4095,
		"nome" : "Mariana Pimentel",
		"codigo_ibge" : 4311981,
		"sigla" : "RS"
	},
	{
		"id" : 4096,
		"nome" : "Mariano Moro",
		"codigo_ibge" : 4312005,
		"sigla" : "RS"
	},
	{
		"id" : 5498,
		"nome" : "Marianópolis do Tocantins",
		"codigo_ibge" : 1712504,
		"sigla" : "TO"
	},
	{
		"id" : 5033,
		"nome" : "Mariápolis",
		"codigo_ibge" : 3528908,
		"sigla" : "SP"
	},
	{
		"id" : 153,
		"nome" : "Maribondo",
		"codigo_ibge" : 2704807,
		"sigla" : "AL"
	},
	{
		"id" : 3631,
		"nome" : "Maricá",
		"codigo_ibge" : 3302700,
		"sigla" : "RJ"
	},
	{
		"id" : 2025,
		"nome" : "Marilac",
		"codigo_ibge" : 3140100,
		"sigla" : "MG"
	},
	{
		"id" : 47,
		"nome" : "Marilândia",
		"codigo_ibge" : 3203353,
		"sigla" : "ES"
	},
	{
		"id" : 2991,
		"nome" : "Marilândia do Sul",
		"codigo_ibge" : 4114906,
		"sigla" : "PR"
	},
	{
		"id" : 2992,
		"nome" : "Marilena",
		"codigo_ibge" : 4115002,
		"sigla" : "PR"
	},
	{
		"id" : 5034,
		"nome" : "Marília",
		"codigo_ibge" : 3529005,
		"sigla" : "SP"
	},
	{
		"id" : 2993,
		"nome" : "Mariluz",
		"codigo_ibge" : 4115101,
		"sigla" : "PR"
	},
	{
		"id" : 2994,
		"nome" : "Maringá",
		"codigo_ibge" : 4115200,
		"sigla" : "PR"
	},
	{
		"id" : 5035,
		"nome" : "Marinópolis",
		"codigo_ibge" : 3529104,
		"sigla" : "SP"
	},
	{
		"id" : 2026,
		"nome" : "Mário Campos",
		"codigo_ibge" : 3140159,
		"sigla" : "MG"
	},
	{
		"id" : 2995,
		"nome" : "Mariópolis",
		"codigo_ibge" : 4115309,
		"sigla" : "PR"
	},
	{
		"id" : 2996,
		"nome" : "Maripá",
		"codigo_ibge" : 4115358,
		"sigla" : "PR"
	},
	{
		"id" : 2027,
		"nome" : "Maripá de Minas",
		"codigo_ibge" : 3140209,
		"sigla" : "MG"
	},
	{
		"id" : 2486,
		"nome" : "Marituba",
		"codigo_ibge" : 1504422,
		"sigla" : "PA"
	},
	{
		"id" : 2674,
		"nome" : "Marizópolis",
		"codigo_ibge" : 2509156,
		"sigla" : "PB"
	},
	{
		"id" : 2028,
		"nome" : "Marliéria",
		"codigo_ibge" : 3140308,
		"sigla" : "MG"
	},
	{
		"id" : 2997,
		"nome" : "Marmeleiro",
		"codigo_ibge" : 4115408,
		"sigla" : "PR"
	},
	{
		"id" : 2029,
		"nome" : "Marmelópolis",
		"codigo_ibge" : 3140407,
		"sigla" : "MG"
	},
	{
		"id" : 4097,
		"nome" : "Marques de Souza",
		"codigo_ibge" : 4312054,
		"sigla" : "RS"
	},
	{
		"id" : 2998,
		"nome" : "Marquinho",
		"codigo_ibge" : 4115457,
		"sigla" : "PR"
	},
	{
		"id" : 2030,
		"nome" : "Martinho Campos",
		"codigo_ibge" : 3140506,
		"sigla" : "MG"
	},
	{
		"id" : 804,
		"nome" : "Martinópole",
		"codigo_ibge" : 2307908,
		"sigla" : "CE"
	},
	{
		"id" : 5036,
		"nome" : "Martinópolis",
		"codigo_ibge" : 3529203,
		"sigla" : "SP"
	},
	{
		"id" : 3763,
		"nome" : "Martins",
		"codigo_ibge" : 2407401,
		"sigla" : "RN"
	},
	{
		"id" : 2031,
		"nome" : "Martins Soares",
		"codigo_ibge" : 3140530,
		"sigla" : "MG"
	},
	{
		"id" : 5388,
		"nome" : "Maruim",
		"codigo_ibge" : 2804003,
		"sigla" : "SE"
	},
	{
		"id" : 2999,
		"nome" : "Marumbi",
		"codigo_ibge" : 4115507,
		"sigla" : "PR"
	},
	{
		"id" : 1021,
		"nome" : "Marzagão",
		"codigo_ibge" : 5212907,
		"sigla" : "GO"
	},
	{
		"id" : 532,
		"nome" : "Mascote",
		"codigo_ibge" : 2920908,
		"sigla" : "BA"
	},
	{
		"id" : 805,
		"nome" : "Massapê",
		"codigo_ibge" : 2308005,
		"sigla" : "CE"
	},
	{
		"id" : 3492,
		"nome" : "Massapê do Piauí",
		"codigo_ibge" : 2206050,
		"sigla" : "PI"
	},
	{
		"id" : 2675,
		"nome" : "Massaranduba",
		"codigo_ibge" : 2509206,
		"sigla" : "PB"
	},
	{
		"id" : 4571,
		"nome" : "Massaranduba",
		"codigo_ibge" : 4210605,
		"sigla" : "SC"
	},
	{
		"id" : 4098,
		"nome" : "Mata",
		"codigo_ibge" : 4312104,
		"sigla" : "RS"
	},
	{
		"id" : 533,
		"nome" : "Mata de São João",
		"codigo_ibge" : 2921005,
		"sigla" : "BA"
	},
	{
		"id" : 154,
		"nome" : "Mata Grande",
		"codigo_ibge" : 2705002,
		"sigla" : "AL"
	},
	{
		"id" : 1241,
		"nome" : "Mata Roma",
		"codigo_ibge" : 2106409,
		"sigla" : "MA"
	},
	{
		"id" : 2032,
		"nome" : "Mata Verde",
		"codigo_ibge" : 3140555,
		"sigla" : "MG"
	},
	{
		"id" : 5037,
		"nome" : "Matão",
		"codigo_ibge" : 3529302,
		"sigla" : "SP"
	},
	{
		"id" : 2676,
		"nome" : "Mataraca",
		"codigo_ibge" : 2509305,
		"sigla" : "PB"
	},
	{
		"id" : 5499,
		"nome" : "Mateiros",
		"codigo_ibge" : 1712702,
		"sigla" : "TO"
	},
	{
		"id" : 3000,
		"nome" : "Matelândia",
		"codigo_ibge" : 4115606,
		"sigla" : "PR"
	},
	{
		"id" : 2033,
		"nome" : "Materlândia",
		"codigo_ibge" : 3140605,
		"sigla" : "MG"
	},
	{
		"id" : 2034,
		"nome" : "Mateus Leme",
		"codigo_ibge" : 3140704,
		"sigla" : "MG"
	},
	{
		"id" : 2035,
		"nome" : "Mathias Lobato",
		"codigo_ibge" : 3171501,
		"sigla" : "MG"
	},
	{
		"id" : 2036,
		"nome" : "Matias Barbosa",
		"codigo_ibge" : 3140803,
		"sigla" : "MG"
	},
	{
		"id" : 2037,
		"nome" : "Matias Cardoso",
		"codigo_ibge" : 3140852,
		"sigla" : "MG"
	},
	{
		"id" : 3493,
		"nome" : "Matias Olímpio",
		"codigo_ibge" : 2206100,
		"sigla" : "PI"
	},
	{
		"id" : 534,
		"nome" : "Matina",
		"codigo_ibge" : 2921054,
		"sigla" : "BA"
	},
	{
		"id" : 1242,
		"nome" : "Matinha",
		"codigo_ibge" : 2106508,
		"sigla" : "MA"
	},
	{
		"id" : 2677,
		"nome" : "Matinhas",
		"codigo_ibge" : 2509339,
		"sigla" : "PB"
	},
	{
		"id" : 3001,
		"nome" : "Matinhos",
		"codigo_ibge" : 4115705,
		"sigla" : "PR"
	},
	{
		"id" : 2038,
		"nome" : "Matipó",
		"codigo_ibge" : 3140902,
		"sigla" : "MG"
	},
	{
		"id" : 4099,
		"nome" : "Mato Castelhano",
		"codigo_ibge" : 4312138,
		"sigla" : "RS"
	},
	{
		"id" : 2678,
		"nome" : "Mato Grosso",
		"codigo_ibge" : 2509370,
		"sigla" : "PB"
	},
	{
		"id" : 4100,
		"nome" : "Mato Leitão",
		"codigo_ibge" : 4312153,
		"sigla" : "RS"
	},
	{
		"id" : 4101,
		"nome" : "Mato Queimado",
		"codigo_ibge" : 4312179,
		"sigla" : "RS"
	},
	{
		"id" : 3002,
		"nome" : "Mato Rico",
		"codigo_ibge" : 4115739,
		"sigla" : "PR"
	},
	{
		"id" : 2039,
		"nome" : "Mato Verde",
		"codigo_ibge" : 3141009,
		"sigla" : "MG"
	},
	{
		"id" : 1243,
		"nome" : "Matões",
		"codigo_ibge" : 2106607,
		"sigla" : "MA"
	},
	{
		"id" : 1244,
		"nome" : "Matões do Norte",
		"codigo_ibge" : 2106631,
		"sigla" : "MA"
	},
	{
		"id" : 4572,
		"nome" : "Matos Costa",
		"codigo_ibge" : 4210704,
		"sigla" : "SC"
	},
	{
		"id" : 2040,
		"nome" : "Matozinhos",
		"codigo_ibge" : 3141108,
		"sigla" : "MG"
	},
	{
		"id" : 1022,
		"nome" : "Matrinchã",
		"codigo_ibge" : 5212956,
		"sigla" : "GO"
	},
	{
		"id" : 155,
		"nome" : "Matriz de Camaragibe",
		"codigo_ibge" : 2705101,
		"sigla" : "AL"
	},
	{
		"id" : 1412,
		"nome" : "Matupá",
		"codigo_ibge" : 5105606,
		"sigla" : "MT"
	},
	{
		"id" : 2679,
		"nome" : "Maturéia",
		"codigo_ibge" : 2509396,
		"sigla" : "PB"
	},
	{
		"id" : 2041,
		"nome" : "Matutina",
		"codigo_ibge" : 3141207,
		"sigla" : "MG"
	},
	{
		"id" : 5038,
		"nome" : "Mauá",
		"codigo_ibge" : 3529401,
		"sigla" : "SP"
	},
	{
		"id" : 3003,
		"nome" : "Mauá da Serra",
		"codigo_ibge" : 4115754,
		"sigla" : "PR"
	},
	{
		"id" : 259,
		"nome" : "Maués",
		"codigo_ibge" : 1302900,
		"sigla" : "AM"
	},
	{
		"id" : 1023,
		"nome" : "Maurilândia",
		"codigo_ibge" : 5213004,
		"sigla" : "GO"
	},
	{
		"id" : 5500,
		"nome" : "Maurilândia do Tocantins",
		"codigo_ibge" : 1712801,
		"sigla" : "TO"
	},
	{
		"id" : 806,
		"nome" : "Mauriti",
		"codigo_ibge" : 2308104,
		"sigla" : "CE"
	},
	{
		"id" : 3764,
		"nome" : "Maxaranguape",
		"codigo_ibge" : 2407500,
		"sigla" : "RN"
	},
	{
		"id" : 4102,
		"nome" : "Maximiliano de Almeida",
		"codigo_ibge" : 4312203,
		"sigla" : "RS"
	},
	{
		"id" : 210,
		"nome" : "Mazagão",
		"codigo_ibge" : 1600402,
		"sigla" : "AP"
	},
	{
		"id" : 2042,
		"nome" : "Medeiros",
		"codigo_ibge" : 3141306,
		"sigla" : "MG"
	},
	{
		"id" : 535,
		"nome" : "Medeiros Neto",
		"codigo_ibge" : 2921104,
		"sigla" : "BA"
	},
	{
		"id" : 3004,
		"nome" : "Medianeira",
		"codigo_ibge" : 4115804,
		"sigla" : "PR"
	},
	{
		"id" : 2487,
		"nome" : "Medicilândia",
		"codigo_ibge" : 1504455,
		"sigla" : "PA"
	},
	{
		"id" : 2043,
		"nome" : "Medina",
		"codigo_ibge" : 3141405,
		"sigla" : "MG"
	},
	{
		"id" : 4573,
		"nome" : "Meleiro",
		"codigo_ibge" : 4210803,
		"sigla" : "SC"
	},
	{
		"id" : 2488,
		"nome" : "Melgaço",
		"codigo_ibge" : 1504505,
		"sigla" : "PA"
	},
	{
		"id" : 3632,
		"nome" : "Mendes",
		"codigo_ibge" : 3302809,
		"sigla" : "RJ"
	},
	{
		"id" : 2044,
		"nome" : "Mendes Pimentel",
		"codigo_ibge" : 3141504,
		"sigla" : "MG"
	},
	{
		"id" : 5039,
		"nome" : "Mendonça",
		"codigo_ibge" : 3529500,
		"sigla" : "SP"
	},
	{
		"id" : 3005,
		"nome" : "Mercedes",
		"codigo_ibge" : 4115853,
		"sigla" : "PR"
	},
	{
		"id" : 2045,
		"nome" : "Mercês",
		"codigo_ibge" : 3141603,
		"sigla" : "MG"
	},
	{
		"id" : 5040,
		"nome" : "Meridiano",
		"codigo_ibge" : 3529609,
		"sigla" : "SP"
	},
	{
		"id" : 807,
		"nome" : "Meruoca",
		"codigo_ibge" : 2308203,
		"sigla" : "CE"
	},
	{
		"id" : 5041,
		"nome" : "Mesópolis",
		"codigo_ibge" : 3529658,
		"sigla" : "SP"
	},
	{
		"id" : 2046,
		"nome" : "Mesquita",
		"codigo_ibge" : 3141702,
		"sigla" : "MG"
	},
	{
		"id" : 3633,
		"nome" : "Mesquita",
		"codigo_ibge" : 3302858,
		"sigla" : "RJ"
	},
	{
		"id" : 156,
		"nome" : "Messias",
		"codigo_ibge" : 2705200,
		"sigla" : "AL"
	},
	{
		"id" : 3765,
		"nome" : "Messias Targino",
		"codigo_ibge" : 2407609,
		"sigla" : "RN"
	},
	{
		"id" : 3494,
		"nome" : "Miguel Alves",
		"codigo_ibge" : 2206209,
		"sigla" : "PI"
	},
	{
		"id" : 536,
		"nome" : "Miguel Calmon",
		"codigo_ibge" : 2921203,
		"sigla" : "BA"
	},
	{
		"id" : 3495,
		"nome" : "Miguel Leão",
		"codigo_ibge" : 2206308,
		"sigla" : "PI"
	},
	{
		"id" : 3634,
		"nome" : "Miguel Pereira",
		"codigo_ibge" : 3302908,
		"sigla" : "RJ"
	},
	{
		"id" : 5042,
		"nome" : "Miguelópolis",
		"codigo_ibge" : 3529708,
		"sigla" : "SP"
	},
	{
		"id" : 537,
		"nome" : "Milagres",
		"codigo_ibge" : 2921302,
		"sigla" : "BA"
	},
	{
		"id" : 808,
		"nome" : "Milagres",
		"codigo_ibge" : 2308302,
		"sigla" : "CE"
	},
	{
		"id" : 1245,
		"nome" : "Milagres do Maranhão",
		"codigo_ibge" : 2106672,
		"sigla" : "MA"
	},
	{
		"id" : 809,
		"nome" : "Milhã",
		"codigo_ibge" : 2308351,
		"sigla" : "CE"
	},
	{
		"id" : 3496,
		"nome" : "Milton Brandão",
		"codigo_ibge" : 2206357,
		"sigla" : "PI"
	},
	{
		"id" : 1024,
		"nome" : "Mimoso de Goiás",
		"codigo_ibge" : 5213053,
		"sigla" : "GO"
	},
	{
		"id" : 48,
		"nome" : "Mimoso do Sul",
		"codigo_ibge" : 3203403,
		"sigla" : "ES"
	},
	{
		"id" : 1025,
		"nome" : "Minaçu",
		"codigo_ibge" : 5213087,
		"sigla" : "GO"
	},
	{
		"id" : 157,
		"nome" : "Minador do Negrão",
		"codigo_ibge" : 2705309,
		"sigla" : "AL"
	},
	{
		"id" : 4103,
		"nome" : "Minas do Leão",
		"codigo_ibge" : 4312252,
		"sigla" : "RS"
	},
	{
		"id" : 2047,
		"nome" : "Minas Novas",
		"codigo_ibge" : 3141801,
		"sigla" : "MG"
	},
	{
		"id" : 2048,
		"nome" : "Minduri",
		"codigo_ibge" : 3141900,
		"sigla" : "MG"
	},
	{
		"id" : 1026,
		"nome" : "Mineiros",
		"codigo_ibge" : 5213103,
		"sigla" : "GO"
	},
	{
		"id" : 5043,
		"nome" : "Mineiros do Tietê",
		"codigo_ibge" : 3529807,
		"sigla" : "SP"
	},
	{
		"id" : 4371,
		"nome" : "Ministro Andreazza",
		"codigo_ibge" : 1101203,
		"sigla" : "RO"
	},
	{
		"id" : 5044,
		"nome" : "Mira Estrela",
		"codigo_ibge" : 3530003,
		"sigla" : "SP"
	},
	{
		"id" : 2049,
		"nome" : "Mirabela",
		"codigo_ibge" : 3142007,
		"sigla" : "MG"
	},
	{
		"id" : 5045,
		"nome" : "Miracatu",
		"codigo_ibge" : 3529906,
		"sigla" : "SP"
	},
	{
		"id" : 3635,
		"nome" : "Miracema",
		"codigo_ibge" : 3303005,
		"sigla" : "RJ"
	},
	{
		"id" : 5501,
		"nome" : "Miracema do Tocantins",
		"codigo_ibge" : 1713205,
		"sigla" : "TO"
	},
	{
		"id" : 3006,
		"nome" : "Mirador",
		"codigo_ibge" : 4115903,
		"sigla" : "PR"
	},
	{
		"id" : 1246,
		"nome" : "Mirador",
		"codigo_ibge" : 2106706,
		"sigla" : "MA"
	},
	{
		"id" : 2050,
		"nome" : "Miradouro",
		"codigo_ibge" : 3142106,
		"sigla" : "MG"
	},
	{
		"id" : 4104,
		"nome" : "Miraguaí",
		"codigo_ibge" : 4312302,
		"sigla" : "RS"
	},
	{
		"id" : 2051,
		"nome" : "Miraí",
		"codigo_ibge" : 3142205,
		"sigla" : "MG"
	},
	{
		"id" : 810,
		"nome" : "Miraíma",
		"codigo_ibge" : 2308377,
		"sigla" : "CE"
	},
	{
		"id" : 1537,
		"nome" : "Miranda",
		"codigo_ibge" : 5005608,
		"sigla" : "MS"
	},
	{
		"id" : 1247,
		"nome" : "Miranda do Norte",
		"codigo_ibge" : 2106755,
		"sigla" : "MA"
	},
	{
		"id" : 3290,
		"nome" : "Mirandiba",
		"codigo_ibge" : 2609303,
		"sigla" : "PE"
	},
	{
		"id" : 5046,
		"nome" : "Mirandópolis",
		"codigo_ibge" : 3530102,
		"sigla" : "SP"
	},
	{
		"id" : 538,
		"nome" : "Mirangaba",
		"codigo_ibge" : 2921401,
		"sigla" : "BA"
	},
	{
		"id" : 5502,
		"nome" : "Miranorte",
		"codigo_ibge" : 1713304,
		"sigla" : "TO"
	},
	{
		"id" : 539,
		"nome" : "Mirante",
		"codigo_ibge" : 2921450,
		"sigla" : "BA"
	},
	{
		"id" : 4372,
		"nome" : "Mirante da Serra",
		"codigo_ibge" : 1101302,
		"sigla" : "RO"
	},
	{
		"id" : 5047,
		"nome" : "Mirante do Paranapanema",
		"codigo_ibge" : 3530201,
		"sigla" : "SP"
	},
	{
		"id" : 3007,
		"nome" : "Miraselva",
		"codigo_ibge" : 4116000,
		"sigla" : "PR"
	},
	{
		"id" : 5048,
		"nome" : "Mirassol",
		"codigo_ibge" : 3530300,
		"sigla" : "SP"
	},
	{
		"id" : 1413,
		"nome" : "Mirassol d Oeste",
		"codigo_ibge" : 5105622,
		"sigla" : "MT"
	},
	{
		"id" : 5049,
		"nome" : "Mirassolândia",
		"codigo_ibge" : 3530409,
		"sigla" : "SP"
	},
	{
		"id" : 2052,
		"nome" : "Miravânia",
		"codigo_ibge" : 3142254,
		"sigla" : "MG"
	},
	{
		"id" : 4574,
		"nome" : "Mirim Doce",
		"codigo_ibge" : 4210852,
		"sigla" : "SC"
	},
	{
		"id" : 1248,
		"nome" : "Mirinzal",
		"codigo_ibge" : 2106805,
		"sigla" : "MA"
	},
	{
		"id" : 3008,
		"nome" : "Missal",
		"codigo_ibge" : 4116059,
		"sigla" : "PR"
	},
	{
		"id" : 811,
		"nome" : "Missão Velha",
		"codigo_ibge" : 2308401,
		"sigla" : "CE"
	},
	{
		"id" : 2489,
		"nome" : "Mocajuba",
		"codigo_ibge" : 1504604,
		"sigla" : "PA"
	},
	{
		"id" : 5050,
		"nome" : "Mococa",
		"codigo_ibge" : 3530508,
		"sigla" : "SP"
	},
	{
		"id" : 4575,
		"nome" : "Modelo",
		"codigo_ibge" : 4210902,
		"sigla" : "SC"
	},
	{
		"id" : 2053,
		"nome" : "Moeda",
		"codigo_ibge" : 3142304,
		"sigla" : "MG"
	},
	{
		"id" : 2054,
		"nome" : "Moema",
		"codigo_ibge" : 3142403,
		"sigla" : "MG"
	},
	{
		"id" : 2680,
		"nome" : "Mogeiro",
		"codigo_ibge" : 2509404,
		"sigla" : "PB"
	},
	{
		"id" : 5051,
		"nome" : "Mogi das Cruzes",
		"codigo_ibge" : 3530607,
		"sigla" : "SP"
	},
	{
		"id" : 5052,
		"nome" : "Mogi Guaçu",
		"codigo_ibge" : 3530706,
		"sigla" : "SP"
	},
	{
		"id" : 1027,
		"nome" : "Moiporá",
		"codigo_ibge" : 5213400,
		"sigla" : "GO"
	},
	{
		"id" : 5389,
		"nome" : "Moita Bonita",
		"codigo_ibge" : 2804102,
		"sigla" : "SE"
	},
	{
		"id" : 5053,
		"nome" : "Moji Mirim",
		"codigo_ibge" : 3530805,
		"sigla" : "SP"
	},
	{
		"id" : 2490,
		"nome" : "Moju",
		"codigo_ibge" : 1504703,
		"sigla" : "PA"
	},
	{
		"id" : 5566,
		"nome" : "Mojuí dos Campos",
		"codigo_ibge" : 1504752,
		"sigla" : "PA"
	},
	{
		"id" : 812,
		"nome" : "Mombaça",
		"codigo_ibge" : 2308500,
		"sigla" : "CE"
	},
	{
		"id" : 5054,
		"nome" : "Mombuca",
		"codigo_ibge" : 3530904,
		"sigla" : "SP"
	},
	{
		"id" : 1249,
		"nome" : "Monção",
		"codigo_ibge" : 2106904,
		"sigla" : "MA"
	},
	{
		"id" : 5055,
		"nome" : "Monções",
		"codigo_ibge" : 3531001,
		"sigla" : "SP"
	},
	{
		"id" : 4576,
		"nome" : "Mondaí",
		"codigo_ibge" : 4211009,
		"sigla" : "SC"
	},
	{
		"id" : 5056,
		"nome" : "Mongaguá",
		"codigo_ibge" : 3531100,
		"sigla" : "SP"
	},
	{
		"id" : 2055,
		"nome" : "Monjolos",
		"codigo_ibge" : 3142502,
		"sigla" : "MG"
	},
	{
		"id" : 3497,
		"nome" : "Monsenhor Gil",
		"codigo_ibge" : 2206407,
		"sigla" : "PI"
	},
	{
		"id" : 3498,
		"nome" : "Monsenhor Hipólito",
		"codigo_ibge" : 2206506,
		"sigla" : "PI"
	},
	{
		"id" : 2056,
		"nome" : "Monsenhor Paulo",
		"codigo_ibge" : 3142601,
		"sigla" : "MG"
	},
	{
		"id" : 813,
		"nome" : "Monsenhor Tabosa",
		"codigo_ibge" : 2308609,
		"sigla" : "CE"
	},
	{
		"id" : 2681,
		"nome" : "Montadas",
		"codigo_ibge" : 2509503,
		"sigla" : "PB"
	},
	{
		"id" : 2057,
		"nome" : "Montalvânia",
		"codigo_ibge" : 3142700,
		"sigla" : "MG"
	},
	{
		"id" : 49,
		"nome" : "Montanha",
		"codigo_ibge" : 3203502,
		"sigla" : "ES"
	},
	{
		"id" : 3766,
		"nome" : "Montanhas",
		"codigo_ibge" : 2407708,
		"sigla" : "RN"
	},
	{
		"id" : 4105,
		"nome" : "Montauri",
		"codigo_ibge" : 4312351,
		"sigla" : "RS"
	},
	{
		"id" : 2491,
		"nome" : "Monte Alegre",
		"codigo_ibge" : 1504802,
		"sigla" : "PA"
	},
	{
		"id" : 3767,
		"nome" : "Monte Alegre",
		"codigo_ibge" : 2407807,
		"sigla" : "RN"
	},
	{
		"id" : 1028,
		"nome" : "Monte Alegre de Goiás",
		"codigo_ibge" : 5213509,
		"sigla" : "GO"
	},
	{
		"id" : 2058,
		"nome" : "Monte Alegre de Minas",
		"codigo_ibge" : 3142809,
		"sigla" : "MG"
	},
	{
		"id" : 5390,
		"nome" : "Monte Alegre de Sergipe",
		"codigo_ibge" : 2804201,
		"sigla" : "SE"
	},
	{
		"id" : 3499,
		"nome" : "Monte Alegre do Piauí",
		"codigo_ibge" : 2206605,
		"sigla" : "PI"
	},
	{
		"id" : 5057,
		"nome" : "Monte Alegre do Sul",
		"codigo_ibge" : 3531209,
		"sigla" : "SP"
	},
	{
		"id" : 4106,
		"nome" : "Monte Alegre dos Campos",
		"codigo_ibge" : 4312377,
		"sigla" : "RS"
	},
	{
		"id" : 5058,
		"nome" : "Monte Alto",
		"codigo_ibge" : 3531308,
		"sigla" : "SP"
	},
	{
		"id" : 5059,
		"nome" : "Monte Aprazível",
		"codigo_ibge" : 3531407,
		"sigla" : "SP"
	},
	{
		"id" : 2059,
		"nome" : "Monte Azul",
		"codigo_ibge" : 3142908,
		"sigla" : "MG"
	},
	{
		"id" : 5060,
		"nome" : "Monte Azul Paulista",
		"codigo_ibge" : 3531506,
		"sigla" : "SP"
	},
	{
		"id" : 2060,
		"nome" : "Monte Belo",
		"codigo_ibge" : 3143005,
		"sigla" : "MG"
	},
	{
		"id" : 4107,
		"nome" : "Monte Belo do Sul",
		"codigo_ibge" : 4312385,
		"sigla" : "RS"
	},
	{
		"id" : 4577,
		"nome" : "Monte Carlo",
		"codigo_ibge" : 4211058,
		"sigla" : "SC"
	},
	{
		"id" : 2061,
		"nome" : "Monte Carmelo",
		"codigo_ibge" : 3143104,
		"sigla" : "MG"
	},
	{
		"id" : 4578,
		"nome" : "Monte Castelo",
		"codigo_ibge" : 4211108,
		"sigla" : "SC"
	},
	{
		"id" : 5061,
		"nome" : "Monte Castelo",
		"codigo_ibge" : 3531605,
		"sigla" : "SP"
	},
	{
		"id" : 3768,
		"nome" : "Monte das Gameleiras",
		"codigo_ibge" : 2407906,
		"sigla" : "RN"
	},
	{
		"id" : 5503,
		"nome" : "Monte do Carmo",
		"codigo_ibge" : 1713601,
		"sigla" : "TO"
	},
	{
		"id" : 2062,
		"nome" : "Monte Formoso",
		"codigo_ibge" : 3143153,
		"sigla" : "MG"
	},
	{
		"id" : 2682,
		"nome" : "Monte Horebe",
		"codigo_ibge" : 2509602,
		"sigla" : "PB"
	},
	{
		"id" : 5062,
		"nome" : "Monte Mor",
		"codigo_ibge" : 3531803,
		"sigla" : "SP"
	},
	{
		"id" : 4373,
		"nome" : "Monte Negro",
		"codigo_ibge" : 1101401,
		"sigla" : "RO"
	},
	{
		"id" : 540,
		"nome" : "Monte Santo",
		"codigo_ibge" : 2921500,
		"sigla" : "BA"
	},
	{
		"id" : 2063,
		"nome" : "Monte Santo de Minas",
		"codigo_ibge" : 3143203,
		"sigla" : "MG"
	},
	{
		"id" : 5504,
		"nome" : "Monte Santo do Tocantins",
		"codigo_ibge" : 1713700,
		"sigla" : "TO"
	},
	{
		"id" : 2064,
		"nome" : "Monte Sião",
		"codigo_ibge" : 3143401,
		"sigla" : "MG"
	},
	{
		"id" : 2683,
		"nome" : "Monteiro",
		"codigo_ibge" : 2509701,
		"sigla" : "PB"
	},
	{
		"id" : 5063,
		"nome" : "Monteiro Lobato",
		"codigo_ibge" : 3531704,
		"sigla" : "SP"
	},
	{
		"id" : 158,
		"nome" : "Monteirópolis",
		"codigo_ibge" : 2705408,
		"sigla" : "AL"
	},
	{
		"id" : 4108,
		"nome" : "Montenegro",
		"codigo_ibge" : 4312401,
		"sigla" : "RS"
	},
	{
		"id" : 1250,
		"nome" : "Montes Altos",
		"codigo_ibge" : 2107001,
		"sigla" : "MA"
	},
	{
		"id" : 2065,
		"nome" : "Montes Claros",
		"codigo_ibge" : 3143302,
		"sigla" : "MG"
	},
	{
		"id" : 1029,
		"nome" : "Montes Claros de Goiás",
		"codigo_ibge" : 5213707,
		"sigla" : "GO"
	},
	{
		"id" : 2066,
		"nome" : "Montezuma",
		"codigo_ibge" : 3143450,
		"sigla" : "MG"
	},
	{
		"id" : 1030,
		"nome" : "Montividiu",
		"codigo_ibge" : 5213756,
		"sigla" : "GO"
	},
	{
		"id" : 1031,
		"nome" : "Montividiu do Norte",
		"codigo_ibge" : 5213772,
		"sigla" : "GO"
	},
	{
		"id" : 814,
		"nome" : "Morada Nova",
		"codigo_ibge" : 2308708,
		"sigla" : "CE"
	},
	{
		"id" : 2067,
		"nome" : "Morada Nova de Minas",
		"codigo_ibge" : 3143500,
		"sigla" : "MG"
	},
	{
		"id" : 815,
		"nome" : "Moraújo",
		"codigo_ibge" : 2308807,
		"sigla" : "CE"
	},
	{
		"id" : 3291,
		"nome" : "Moreilândia",
		"codigo_ibge" : 2614303,
		"sigla" : "PE"
	},
	{
		"id" : 3009,
		"nome" : "Moreira Sales",
		"codigo_ibge" : 4116109,
		"sigla" : "PR"
	},
	{
		"id" : 3292,
		"nome" : "Moreno",
		"codigo_ibge" : 2609402,
		"sigla" : "PE"
	},
	{
		"id" : 4109,
		"nome" : "Mormaço",
		"codigo_ibge" : 4312427,
		"sigla" : "RS"
	},
	{
		"id" : 541,
		"nome" : "Morpará",
		"codigo_ibge" : 2921609,
		"sigla" : "BA"
	},
	{
		"id" : 3010,
		"nome" : "Morretes",
		"codigo_ibge" : 4116208,
		"sigla" : "PR"
	},
	{
		"id" : 816,
		"nome" : "Morrinhos",
		"codigo_ibge" : 2308906,
		"sigla" : "CE"
	},
	{
		"id" : 1032,
		"nome" : "Morrinhos",
		"codigo_ibge" : 5213806,
		"sigla" : "GO"
	},
	{
		"id" : 4110,
		"nome" : "Morrinhos do Sul",
		"codigo_ibge" : 4312443,
		"sigla" : "RS"
	},
	{
		"id" : 5064,
		"nome" : "Morro Agudo",
		"codigo_ibge" : 3531902,
		"sigla" : "SP"
	},
	{
		"id" : 1033,
		"nome" : "Morro Agudo de Goiás",
		"codigo_ibge" : 5213855,
		"sigla" : "GO"
	},
	{
		"id" : 3500,
		"nome" : "Morro Cabeça no Tempo",
		"codigo_ibge" : 2206654,
		"sigla" : "PI"
	},
	{
		"id" : 4579,
		"nome" : "Morro da Fumaça",
		"codigo_ibge" : 4211207,
		"sigla" : "SC"
	},
	{
		"id" : 2068,
		"nome" : "Morro da Garça",
		"codigo_ibge" : 3143609,
		"sigla" : "MG"
	},
	{
		"id" : 542,
		"nome" : "Morro do Chapéu",
		"codigo_ibge" : 2921708,
		"sigla" : "BA"
	},
	{
		"id" : 3501,
		"nome" : "Morro do Chapéu do Piauí",
		"codigo_ibge" : 2206670,
		"sigla" : "PI"
	},
	{
		"id" : 2069,
		"nome" : "Morro do Pilar",
		"codigo_ibge" : 3143708,
		"sigla" : "MG"
	},
	{
		"id" : 4580,
		"nome" : "Morro Grande",
		"codigo_ibge" : 4211256,
		"sigla" : "SC"
	},
	{
		"id" : 4111,
		"nome" : "Morro Redondo",
		"codigo_ibge" : 4312450,
		"sigla" : "RS"
	},
	{
		"id" : 4112,
		"nome" : "Morro Reuter",
		"codigo_ibge" : 4312476,
		"sigla" : "RS"
	},
	{
		"id" : 1251,
		"nome" : "Morros",
		"codigo_ibge" : 2107100,
		"sigla" : "MA"
	},
	{
		"id" : 543,
		"nome" : "Mortugaba",
		"codigo_ibge" : 2921807,
		"sigla" : "BA"
	},
	{
		"id" : 5065,
		"nome" : "Morungaba",
		"codigo_ibge" : 3532009,
		"sigla" : "SP"
	},
	{
		"id" : 1034,
		"nome" : "Mossâmedes",
		"codigo_ibge" : 5213905,
		"sigla" : "GO"
	},
	{
		"id" : 3769,
		"nome" : "Mossoró",
		"codigo_ibge" : 2408003,
		"sigla" : "RN"
	},
	{
		"id" : 4113,
		"nome" : "Mostardas",
		"codigo_ibge" : 4312500,
		"sigla" : "RS"
	},
	{
		"id" : 5066,
		"nome" : "Motuca",
		"codigo_ibge" : 3532058,
		"sigla" : "SP"
	},
	{
		"id" : 1035,
		"nome" : "Mozarlândia",
		"codigo_ibge" : 5214002,
		"sigla" : "GO"
	},
	{
		"id" : 2492,
		"nome" : "Muaná",
		"codigo_ibge" : 1504901,
		"sigla" : "PA"
	},
	{
		"id" : 4406,
		"nome" : "Mucajaí",
		"codigo_ibge" : 1400308,
		"sigla" : "RR"
	},
	{
		"id" : 817,
		"nome" : "Mucambo",
		"codigo_ibge" : 2309003,
		"sigla" : "CE"
	},
	{
		"id" : 544,
		"nome" : "Mucugê",
		"codigo_ibge" : 2921906,
		"sigla" : "BA"
	},
	{
		"id" : 4114,
		"nome" : "Muçum",
		"codigo_ibge" : 4312609,
		"sigla" : "RS"
	},
	{
		"id" : 545,
		"nome" : "Mucuri",
		"codigo_ibge" : 2922003,
		"sigla" : "BA"
	},
	{
		"id" : 50,
		"nome" : "Mucurici",
		"codigo_ibge" : 3203601,
		"sigla" : "ES"
	},
	{
		"id" : 4115,
		"nome" : "Muitos Capões",
		"codigo_ibge" : 4312617,
		"sigla" : "RS"
	},
	{
		"id" : 4116,
		"nome" : "Muliterno",
		"codigo_ibge" : 4312625,
		"sigla" : "RS"
	},
	{
		"id" : 818,
		"nome" : "Mulungu",
		"codigo_ibge" : 2309102,
		"sigla" : "CE"
	},
	{
		"id" : 2684,
		"nome" : "Mulungu",
		"codigo_ibge" : 2509800,
		"sigla" : "PB"
	},
	{
		"id" : 546,
		"nome" : "Mulungu do Morro",
		"codigo_ibge" : 2922052,
		"sigla" : "BA"
	},
	{
		"id" : 547,
		"nome" : "Mundo Novo",
		"codigo_ibge" : 2922102,
		"sigla" : "BA"
	},
	{
		"id" : 1036,
		"nome" : "Mundo Novo",
		"codigo_ibge" : 5214051,
		"sigla" : "GO"
	},
	{
		"id" : 1538,
		"nome" : "Mundo Novo",
		"codigo_ibge" : 5005681,
		"sigla" : "MS"
	},
	{
		"id" : 2070,
		"nome" : "Munhoz",
		"codigo_ibge" : 3143807,
		"sigla" : "MG"
	},
	{
		"id" : 3011,
		"nome" : "Munhoz de Melo",
		"codigo_ibge" : 4116307,
		"sigla" : "PR"
	},
	{
		"id" : 548,
		"nome" : "Muniz Ferreira",
		"codigo_ibge" : 2922201,
		"sigla" : "BA"
	},
	{
		"id" : 51,
		"nome" : "Muniz Freire",
		"codigo_ibge" : 3203700,
		"sigla" : "ES"
	},
	{
		"id" : 549,
		"nome" : "Muquém do São Francisco",
		"codigo_ibge" : 2922250,
		"sigla" : "BA"
	},
	{
		"id" : 52,
		"nome" : "Muqui",
		"codigo_ibge" : 3203809,
		"sigla" : "ES"
	},
	{
		"id" : 2071,
		"nome" : "Muriaé",
		"codigo_ibge" : 3143906,
		"sigla" : "MG"
	},
	{
		"id" : 5391,
		"nome" : "Muribeca",
		"codigo_ibge" : 2804300,
		"sigla" : "SE"
	},
	{
		"id" : 159,
		"nome" : "Murici",
		"codigo_ibge" : 2705507,
		"sigla" : "AL"
	},
	{
		"id" : 3502,
		"nome" : "Murici dos Portelas",
		"codigo_ibge" : 2206696,
		"sigla" : "PI"
	},
	{
		"id" : 5505,
		"nome" : "Muricilândia",
		"codigo_ibge" : 1713957,
		"sigla" : "TO"
	},
	{
		"id" : 550,
		"nome" : "Muritiba",
		"codigo_ibge" : 2922300,
		"sigla" : "BA"
	},
	{
		"id" : 5067,
		"nome" : "Murutinga do Sul",
		"codigo_ibge" : 3532108,
		"sigla" : "SP"
	},
	{
		"id" : 551,
		"nome" : "Mutuípe",
		"codigo_ibge" : 2922409,
		"sigla" : "BA"
	},
	{
		"id" : 2072,
		"nome" : "Mutum",
		"codigo_ibge" : 3144003,
		"sigla" : "MG"
	},
	{
		"id" : 1037,
		"nome" : "Mutunópolis",
		"codigo_ibge" : 5214101,
		"sigla" : "GO"
	},
	{
		"id" : 2073,
		"nome" : "Muzambinho",
		"codigo_ibge" : 3144102,
		"sigla" : "MG"
	},
	{
		"id" : 2074,
		"nome" : "Nacip Raydan",
		"codigo_ibge" : 3144201,
		"sigla" : "MG"
	},
	{
		"id" : 5068,
		"nome" : "Nantes",
		"codigo_ibge" : 3532157,
		"sigla" : "SP"
	},
	{
		"id" : 2075,
		"nome" : "Nanuque",
		"codigo_ibge" : 3144300,
		"sigla" : "MG"
	},
	{
		"id" : 4117,
		"nome" : "Não Me Toque",
		"codigo_ibge" : 4312658,
		"sigla" : "RS"
	},
	{
		"id" : 2076,
		"nome" : "Naque",
		"codigo_ibge" : 3144359,
		"sigla" : "MG"
	},
	{
		"id" : 5069,
		"nome" : "Narandiba",
		"codigo_ibge" : 3532207,
		"sigla" : "SP"
	},
	{
		"id" : 3770,
		"nome" : "Natal",
		"codigo_ibge" : 2408102,
		"sigla" : "RN"
	},
	{
		"id" : 2077,
		"nome" : "Natalândia",
		"codigo_ibge" : 3144375,
		"sigla" : "MG"
	},
	{
		"id" : 2078,
		"nome" : "Natércia",
		"codigo_ibge" : 3144409,
		"sigla" : "MG"
	},
	{
		"id" : 5506,
		"nome" : "Natividade",
		"codigo_ibge" : 1714203,
		"sigla" : "TO"
	},
	{
		"id" : 3636,
		"nome" : "Natividade",
		"codigo_ibge" : 3303104,
		"sigla" : "RJ"
	},
	{
		"id" : 5070,
		"nome" : "Natividade da Serra",
		"codigo_ibge" : 3532306,
		"sigla" : "SP"
	},
	{
		"id" : 2685,
		"nome" : "Natuba",
		"codigo_ibge" : 2509909,
		"sigla" : "PB"
	},
	{
		"id" : 4581,
		"nome" : "Navegantes",
		"codigo_ibge" : 4211306,
		"sigla" : "SC"
	},
	{
		"id" : 1539,
		"nome" : "Naviraí",
		"codigo_ibge" : 5005707,
		"sigla" : "MS"
	},
	{
		"id" : 552,
		"nome" : "Nazaré",
		"codigo_ibge" : 2922508,
		"sigla" : "BA"
	},
	{
		"id" : 5507,
		"nome" : "Nazaré",
		"codigo_ibge" : 1714302,
		"sigla" : "TO"
	},
	{
		"id" : 3293,
		"nome" : "Nazaré da Mata",
		"codigo_ibge" : 2609501,
		"sigla" : "PE"
	},
	{
		"id" : 3503,
		"nome" : "Nazaré do Piauí",
		"codigo_ibge" : 2206704,
		"sigla" : "PI"
	},
	{
		"id" : 5071,
		"nome" : "Nazaré Paulista",
		"codigo_ibge" : 3532405,
		"sigla" : "SP"
	},
	{
		"id" : 2079,
		"nome" : "Nazareno",
		"codigo_ibge" : 3144508,
		"sigla" : "MG"
	},
	{
		"id" : 2686,
		"nome" : "Nazarezinho",
		"codigo_ibge" : 2510006,
		"sigla" : "PB"
	},
	{
		"id" : 5567,
		"nome" : "Nazária",
		"codigo_ibge" : 2206720,
		"sigla" : "PI"
	},
	{
		"id" : 1038,
		"nome" : "Nazário",
		"codigo_ibge" : 5214408,
		"sigla" : "GO"
	},
	{
		"id" : 5392,
		"nome" : "Neópolis",
		"codigo_ibge" : 2804409,
		"sigla" : "SE"
	},
	{
		"id" : 2080,
		"nome" : "Nepomuceno",
		"codigo_ibge" : 3144607,
		"sigla" : "MG"
	},
	{
		"id" : 1039,
		"nome" : "Nerópolis",
		"codigo_ibge" : 5214507,
		"sigla" : "GO"
	},
	{
		"id" : 5072,
		"nome" : "Neves Paulista",
		"codigo_ibge" : 3532504,
		"sigla" : "SP"
	},
	{
		"id" : 260,
		"nome" : "Nhamundá",
		"codigo_ibge" : 1303007,
		"sigla" : "AM"
	},
	{
		"id" : 5073,
		"nome" : "Nhandeara",
		"codigo_ibge" : 3532603,
		"sigla" : "SP"
	},
	{
		"id" : 4118,
		"nome" : "Nicolau Vergueiro",
		"codigo_ibge" : 4312674,
		"sigla" : "RS"
	},
	{
		"id" : 553,
		"nome" : "Nilo Peçanha",
		"codigo_ibge" : 2922607,
		"sigla" : "BA"
	},
	{
		"id" : 3637,
		"nome" : "Nilópolis",
		"codigo_ibge" : 3303203,
		"sigla" : "RJ"
	},
	{
		"id" : 1252,
		"nome" : "Nina Rodrigues",
		"codigo_ibge" : 2107209,
		"sigla" : "MA"
	},
	{
		"id" : 2081,
		"nome" : "Ninheira",
		"codigo_ibge" : 3144656,
		"sigla" : "MG"
	},
	{
		"id" : 1540,
		"nome" : "Nioaque",
		"codigo_ibge" : 5005806,
		"sigla" : "MS"
	},
	{
		"id" : 5074,
		"nome" : "Nipoã",
		"codigo_ibge" : 3532702,
		"sigla" : "SP"
	},
	{
		"id" : 1040,
		"nome" : "Niquelândia",
		"codigo_ibge" : 5214606,
		"sigla" : "GO"
	},
	{
		"id" : 3771,
		"nome" : "Nísia Floresta",
		"codigo_ibge" : 2408201,
		"sigla" : "RN"
	},
	{
		"id" : 3638,
		"nome" : "Niterói",
		"codigo_ibge" : 3303302,
		"sigla" : "RJ"
	},
	{
		"id" : 1414,
		"nome" : "Nobres",
		"codigo_ibge" : 5105903,
		"sigla" : "MT"
	},
	{
		"id" : 4119,
		"nome" : "Nonoai",
		"codigo_ibge" : 4312708,
		"sigla" : "RS"
	},
	{
		"id" : 554,
		"nome" : "Nordestina",
		"codigo_ibge" : 2922656,
		"sigla" : "BA"
	},
	{
		"id" : 4407,
		"nome" : "Normandia",
		"codigo_ibge" : 1400407,
		"sigla" : "RR"
	},
	{
		"id" : 1415,
		"nome" : "Nortelândia",
		"codigo_ibge" : 5106000,
		"sigla" : "MT"
	},
	{
		"id" : 5393,
		"nome" : "Nossa Senhora Aparecida",
		"codigo_ibge" : 2804458,
		"sigla" : "SE"
	},
	{
		"id" : 5394,
		"nome" : "Nossa Senhora da Glória",
		"codigo_ibge" : 2804508,
		"sigla" : "SE"
	},
	{
		"id" : 5395,
		"nome" : "Nossa Senhora das Dores",
		"codigo_ibge" : 2804607,
		"sigla" : "SE"
	},
	{
		"id" : 3012,
		"nome" : "Nossa Senhora das Graças",
		"codigo_ibge" : 4116406,
		"sigla" : "PR"
	},
	{
		"id" : 5396,
		"nome" : "Nossa Senhora de Lourdes",
		"codigo_ibge" : 2804706,
		"sigla" : "SE"
	},
	{
		"id" : 3504,
		"nome" : "Nossa Senhora de Nazaré",
		"codigo_ibge" : 2206753,
		"sigla" : "PI"
	},
	{
		"id" : 1416,
		"nome" : "Nossa Senhora do Livramento",
		"codigo_ibge" : 5106109,
		"sigla" : "MT"
	},
	{
		"id" : 5397,
		"nome" : "Nossa Senhora do Socorro",
		"codigo_ibge" : 2804805,
		"sigla" : "SE"
	},
	{
		"id" : 3505,
		"nome" : "Nossa Senhora dos Remédios",
		"codigo_ibge" : 2206803,
		"sigla" : "PI"
	},
	{
		"id" : 5075,
		"nome" : "Nova Aliança",
		"codigo_ibge" : 3532801,
		"sigla" : "SP"
	},
	{
		"id" : 3013,
		"nome" : "Nova Aliança do Ivaí",
		"codigo_ibge" : 4116505,
		"sigla" : "PR"
	},
	{
		"id" : 4120,
		"nome" : "Nova Alvorada",
		"codigo_ibge" : 4312757,
		"sigla" : "RS"
	},
	{
		"id" : 1541,
		"nome" : "Nova Alvorada do Sul",
		"codigo_ibge" : 5006002,
		"sigla" : "MS"
	},
	{
		"id" : 1041,
		"nome" : "Nova América",
		"codigo_ibge" : 5214705,
		"sigla" : "GO"
	},
	{
		"id" : 3014,
		"nome" : "Nova América da Colina",
		"codigo_ibge" : 4116604,
		"sigla" : "PR"
	},
	{
		"id" : 1542,
		"nome" : "Nova Andradina",
		"codigo_ibge" : 5006200,
		"sigla" : "MS"
	},
	{
		"id" : 4121,
		"nome" : "Nova Araçá",
		"codigo_ibge" : 4312807,
		"sigla" : "RS"
	},
	{
		"id" : 3015,
		"nome" : "Nova Aurora",
		"codigo_ibge" : 4116703,
		"sigla" : "PR"
	},
	{
		"id" : 1042,
		"nome" : "Nova Aurora",
		"codigo_ibge" : 5214804,
		"sigla" : "GO"
	},
	{
		"id" : 1417,
		"nome" : "Nova Bandeirantes",
		"codigo_ibge" : 5106158,
		"sigla" : "MT"
	},
	{
		"id" : 4122,
		"nome" : "Nova Bassano",
		"codigo_ibge" : 4312906,
		"sigla" : "RS"
	},
	{
		"id" : 2082,
		"nome" : "Nova Belém",
		"codigo_ibge" : 3144672,
		"sigla" : "MG"
	},
	{
		"id" : 4123,
		"nome" : "Nova Boa Vista",
		"codigo_ibge" : 4312955,
		"sigla" : "RS"
	},
	{
		"id" : 1418,
		"nome" : "Nova Brasilândia",
		"codigo_ibge" : 5106208,
		"sigla" : "MT"
	},
	{
		"id" : 4374,
		"nome" : "Nova Brasilândia d Oeste",
		"codigo_ibge" : 1100148,
		"sigla" : "RO"
	},
	{
		"id" : 4124,
		"nome" : "Nova Bréscia",
		"codigo_ibge" : 4313003,
		"sigla" : "RS"
	},
	{
		"id" : 5076,
		"nome" : "Nova Campina",
		"codigo_ibge" : 3532827,
		"sigla" : "SP"
	},
	{
		"id" : 555,
		"nome" : "Nova Canaã",
		"codigo_ibge" : 2922706,
		"sigla" : "BA"
	},
	{
		"id" : 1419,
		"nome" : "Nova Canaã do Norte",
		"codigo_ibge" : 5106216,
		"sigla" : "MT"
	},
	{
		"id" : 5077,
		"nome" : "Nova Canaã Paulista",
		"codigo_ibge" : 3532843,
		"sigla" : "SP"
	},
	{
		"id" : 4125,
		"nome" : "Nova Candelária",
		"codigo_ibge" : 4313011,
		"sigla" : "RS"
	},
	{
		"id" : 3016,
		"nome" : "Nova Cantu",
		"codigo_ibge" : 4116802,
		"sigla" : "PR"
	},
	{
		"id" : 5078,
		"nome" : "Nova Castilho",
		"codigo_ibge" : 3532868,
		"sigla" : "SP"
	},
	{
		"id" : 1253,
		"nome" : "Nova Colinas",
		"codigo_ibge" : 2107258,
		"sigla" : "MA"
	},
	{
		"id" : 1043,
		"nome" : "Nova Crixás",
		"codigo_ibge" : 5214838,
		"sigla" : "GO"
	},
	{
		"id" : 3772,
		"nome" : "Nova Cruz",
		"codigo_ibge" : 2408300,
		"sigla" : "RN"
	},
	{
		"id" : 2083,
		"nome" : "Nova Era",
		"codigo_ibge" : 3144706,
		"sigla" : "MG"
	},
	{
		"id" : 4582,
		"nome" : "Nova Erechim",
		"codigo_ibge" : 4211405,
		"sigla" : "SC"
	},
	{
		"id" : 3017,
		"nome" : "Nova Esperança",
		"codigo_ibge" : 4116901,
		"sigla" : "PR"
	},
	{
		"id" : 2493,
		"nome" : "Nova Esperança do Piriá",
		"codigo_ibge" : 1504950,
		"sigla" : "PA"
	},
	{
		"id" : 3018,
		"nome" : "Nova Esperança do Sudoeste",
		"codigo_ibge" : 4116950,
		"sigla" : "PR"
	},
	{
		"id" : 4126,
		"nome" : "Nova Esperança do Sul",
		"codigo_ibge" : 4313037,
		"sigla" : "RS"
	},
	{
		"id" : 5079,
		"nome" : "Nova Europa",
		"codigo_ibge" : 3532900,
		"sigla" : "SP"
	},
	{
		"id" : 556,
		"nome" : "Nova Fátima",
		"codigo_ibge" : 2922730,
		"sigla" : "BA"
	},
	{
		"id" : 3019,
		"nome" : "Nova Fátima",
		"codigo_ibge" : 4117008,
		"sigla" : "PR"
	},
	{
		"id" : 2687,
		"nome" : "Nova Floresta",
		"codigo_ibge" : 2510105,
		"sigla" : "PB"
	},
	{
		"id" : 3639,
		"nome" : "Nova Friburgo",
		"codigo_ibge" : 3303401,
		"sigla" : "RJ"
	},
	{
		"id" : 1044,
		"nome" : "Nova Glória",
		"codigo_ibge" : 5214861,
		"sigla" : "GO"
	},
	{
		"id" : 5080,
		"nome" : "Nova Granada",
		"codigo_ibge" : 3533007,
		"sigla" : "SP"
	},
	{
		"id" : 1420,
		"nome" : "Nova Guarita",
		"codigo_ibge" : 5108808,
		"sigla" : "MT"
	},
	{
		"id" : 5081,
		"nome" : "Nova Guataporanga",
		"codigo_ibge" : 3533106,
		"sigla" : "SP"
	},
	{
		"id" : 4127,
		"nome" : "Nova Hartz",
		"codigo_ibge" : 4313060,
		"sigla" : "RS"
	},
	{
		"id" : 557,
		"nome" : "Nova Ibiá",
		"codigo_ibge" : 2922755,
		"sigla" : "BA"
	},
	{
		"id" : 3640,
		"nome" : "Nova Iguaçu",
		"codigo_ibge" : 3303500,
		"sigla" : "RJ"
	},
	{
		"id" : 1045,
		"nome" : "Nova Iguaçu de Goiás",
		"codigo_ibge" : 5214879,
		"sigla" : "GO"
	},
	{
		"id" : 5082,
		"nome" : "Nova Independência",
		"codigo_ibge" : 3533205,
		"sigla" : "SP"
	},
	{
		"id" : 1254,
		"nome" : "Nova Iorque",
		"codigo_ibge" : 2107308,
		"sigla" : "MA"
	},
	{
		"id" : 2494,
		"nome" : "Nova Ipixuna",
		"codigo_ibge" : 1504976,
		"sigla" : "PA"
	},
	{
		"id" : 4583,
		"nome" : "Nova Itaberaba",
		"codigo_ibge" : 4211454,
		"sigla" : "SC"
	},
	{
		"id" : 558,
		"nome" : "Nova Itarana",
		"codigo_ibge" : 2922805,
		"sigla" : "BA"
	},
	{
		"id" : 1421,
		"nome" : "Nova Lacerda",
		"codigo_ibge" : 5106182,
		"sigla" : "MT"
	},
	{
		"id" : 3020,
		"nome" : "Nova Laranjeiras",
		"codigo_ibge" : 4117057,
		"sigla" : "PR"
	},
	{
		"id" : 2084,
		"nome" : "Nova Lima",
		"codigo_ibge" : 3144805,
		"sigla" : "MG"
	},
	{
		"id" : 3021,
		"nome" : "Nova Londrina",
		"codigo_ibge" : 4117107,
		"sigla" : "PR"
	},
	{
		"id" : 5083,
		"nome" : "Nova Luzitânia",
		"codigo_ibge" : 3533304,
		"sigla" : "SP"
	},
	{
		"id" : 4375,
		"nome" : "Nova Mamoré",
		"codigo_ibge" : 1100338,
		"sigla" : "RO"
	},
	{
		"id" : 1422,
		"nome" : "Nova Marilândia",
		"codigo_ibge" : 5108857,
		"sigla" : "MT"
	},
	{
		"id" : 1423,
		"nome" : "Nova Maringá",
		"codigo_ibge" : 5108907,
		"sigla" : "MT"
	},
	{
		"id" : 2085,
		"nome" : "Nova Módica",
		"codigo_ibge" : 3144904,
		"sigla" : "MG"
	},
	{
		"id" : 1424,
		"nome" : "Nova Monte verde",
		"codigo_ibge" : 5108956,
		"sigla" : "MT"
	},
	{
		"id" : 1425,
		"nome" : "Nova Mutum",
		"codigo_ibge" : 5106224,
		"sigla" : "MT"
	},
	{
		"id" : 1385,
		"nome" : "Nova Nazaré",
		"codigo_ibge" : 5106174,
		"sigla" : "MT"
	},
	{
		"id" : 5084,
		"nome" : "Nova Odessa",
		"codigo_ibge" : 3533403,
		"sigla" : "SP"
	},
	{
		"id" : 1426,
		"nome" : "Nova Olímpia",
		"codigo_ibge" : 5106232,
		"sigla" : "MT"
	},
	{
		"id" : 3022,
		"nome" : "Nova Olímpia",
		"codigo_ibge" : 4117206,
		"sigla" : "PR"
	},
	{
		"id" : 2688,
		"nome" : "Nova Olinda",
		"codigo_ibge" : 2510204,
		"sigla" : "PB"
	},
	{
		"id" : 819,
		"nome" : "Nova Olinda",
		"codigo_ibge" : 2309201,
		"sigla" : "CE"
	},
	{
		"id" : 5508,
		"nome" : "Nova Olinda",
		"codigo_ibge" : 1714880,
		"sigla" : "TO"
	},
	{
		"id" : 1255,
		"nome" : "Nova Olinda do Maranhão",
		"codigo_ibge" : 2107357,
		"sigla" : "MA"
	},
	{
		"id" : 261,
		"nome" : "Nova Olinda do Norte",
		"codigo_ibge" : 1303106,
		"sigla" : "AM"
	},
	{
		"id" : 4128,
		"nome" : "Nova Pádua",
		"codigo_ibge" : 4313086,
		"sigla" : "RS"
	},
	{
		"id" : 4129,
		"nome" : "Nova Palma",
		"codigo_ibge" : 4313102,
		"sigla" : "RS"
	},
	{
		"id" : 2689,
		"nome" : "Nova Palmeira",
		"codigo_ibge" : 2510303,
		"sigla" : "PB"
	},
	{
		"id" : 4130,
		"nome" : "Nova Petrópolis",
		"codigo_ibge" : 4313201,
		"sigla" : "RS"
	},
	{
		"id" : 2086,
		"nome" : "Nova Ponte",
		"codigo_ibge" : 3145000,
		"sigla" : "MG"
	},
	{
		"id" : 2087,
		"nome" : "Nova Porteirinha",
		"codigo_ibge" : 3145059,
		"sigla" : "MG"
	},
	{
		"id" : 4131,
		"nome" : "Nova Prata",
		"codigo_ibge" : 4313300,
		"sigla" : "RS"
	},
	{
		"id" : 3023,
		"nome" : "Nova Prata do Iguaçu",
		"codigo_ibge" : 4117255,
		"sigla" : "PR"
	},
	{
		"id" : 4132,
		"nome" : "Nova Ramada",
		"codigo_ibge" : 4313334,
		"sigla" : "RS"
	},
	{
		"id" : 559,
		"nome" : "Nova Redenção",
		"codigo_ibge" : 2922854,
		"sigla" : "BA"
	},
	{
		"id" : 2088,
		"nome" : "Nova Resende",
		"codigo_ibge" : 3145109,
		"sigla" : "MG"
	},
	{
		"id" : 1046,
		"nome" : "Nova Roma",
		"codigo_ibge" : 5214903,
		"sigla" : "GO"
	},
	{
		"id" : 4133,
		"nome" : "Nova Roma do Sul",
		"codigo_ibge" : 4313359,
		"sigla" : "RS"
	},
	{
		"id" : 5509,
		"nome" : "Nova Rosalândia",
		"codigo_ibge" : 1715002,
		"sigla" : "TO"
	},
	{
		"id" : 820,
		"nome" : "Nova Russas",
		"codigo_ibge" : 2309300,
		"sigla" : "CE"
	},
	{
		"id" : 3024,
		"nome" : "Nova Santa Bárbara",
		"codigo_ibge" : 4117214,
		"sigla" : "PR"
	},
	{
		"id" : 1427,
		"nome" : "Nova Santa Helena",
		"codigo_ibge" : 5106190,
		"sigla" : "MT"
	},
	{
		"id" : 3506,
		"nome" : "Nova Santa Rita",
		"codigo_ibge" : 2207959,
		"sigla" : "PI"
	},
	{
		"id" : 4134,
		"nome" : "Nova Santa Rita",
		"codigo_ibge" : 4313375,
		"sigla" : "RS"
	},
	{
		"id" : 3025,
		"nome" : "Nova Santa Rosa",
		"codigo_ibge" : 4117222,
		"sigla" : "PR"
	},
	{
		"id" : 2089,
		"nome" : "Nova Serrana",
		"codigo_ibge" : 3145208,
		"sigla" : "MG"
	},
	{
		"id" : 560,
		"nome" : "Nova Soure",
		"codigo_ibge" : 2922904,
		"sigla" : "BA"
	},
	{
		"id" : 3026,
		"nome" : "Nova Tebas",
		"codigo_ibge" : 4117271,
		"sigla" : "PR"
	},
	{
		"id" : 2495,
		"nome" : "Nova Timboteua",
		"codigo_ibge" : 1505007,
		"sigla" : "PA"
	},
	{
		"id" : 4584,
		"nome" : "Nova Trento",
		"codigo_ibge" : 4211504,
		"sigla" : "SC"
	},
	{
		"id" : 1428,
		"nome" : "Nova Ubiratã",
		"codigo_ibge" : 5106240,
		"sigla" : "MT"
	},
	{
		"id" : 2090,
		"nome" : "Nova União",
		"codigo_ibge" : 3136603,
		"sigla" : "MG"
	},
	{
		"id" : 4376,
		"nome" : "Nova União",
		"codigo_ibge" : 1101435,
		"sigla" : "RO"
	},
	{
		"id" : 53,
		"nome" : "Nova Venécia",
		"codigo_ibge" : 3203908,
		"sigla" : "ES"
	},
	{
		"id" : 1047,
		"nome" : "Nova Veneza",
		"codigo_ibge" : 5215009,
		"sigla" : "GO"
	},
	{
		"id" : 4585,
		"nome" : "Nova Veneza",
		"codigo_ibge" : 4211603,
		"sigla" : "SC"
	},
	{
		"id" : 561,
		"nome" : "Nova Viçosa",
		"codigo_ibge" : 2923001,
		"sigla" : "BA"
	},
	{
		"id" : 1429,
		"nome" : "Nova Xavantina",
		"codigo_ibge" : 5106257,
		"sigla" : "MT"
	},
	{
		"id" : 5085,
		"nome" : "Novais",
		"codigo_ibge" : 3533254,
		"sigla" : "SP"
	},
	{
		"id" : 5510,
		"nome" : "Novo Acordo",
		"codigo_ibge" : 1715101,
		"sigla" : "TO"
	},
	{
		"id" : 262,
		"nome" : "Novo Airão",
		"codigo_ibge" : 1303205,
		"sigla" : "AM"
	},
	{
		"id" : 5511,
		"nome" : "Novo Alegre",
		"codigo_ibge" : 1715150,
		"sigla" : "TO"
	},
	{
		"id" : 263,
		"nome" : "Novo Aripuanã",
		"codigo_ibge" : 1303304,
		"sigla" : "AM"
	},
	{
		"id" : 4135,
		"nome" : "Novo Barreiro",
		"codigo_ibge" : 4313490,
		"sigla" : "RS"
	},
	{
		"id" : 1048,
		"nome" : "Novo Brasil",
		"codigo_ibge" : 5215207,
		"sigla" : "GO"
	},
	{
		"id" : 4136,
		"nome" : "Novo Cabrais",
		"codigo_ibge" : 4313391,
		"sigla" : "RS"
	},
	{
		"id" : 2091,
		"nome" : "Novo Cruzeiro",
		"codigo_ibge" : 3145307,
		"sigla" : "MG"
	},
	{
		"id" : 1049,
		"nome" : "Novo Gama",
		"codigo_ibge" : 5215231,
		"sigla" : "GO"
	},
	{
		"id" : 4137,
		"nome" : "Novo Hamburgo",
		"codigo_ibge" : 4313409,
		"sigla" : "RS"
	},
	{
		"id" : 4586,
		"nome" : "Novo Horizonte",
		"codigo_ibge" : 4211652,
		"sigla" : "SC"
	},
	{
		"id" : 5086,
		"nome" : "Novo Horizonte",
		"codigo_ibge" : 3533502,
		"sigla" : "SP"
	},
	{
		"id" : 562,
		"nome" : "Novo Horizonte",
		"codigo_ibge" : 2923035,
		"sigla" : "BA"
	},
	{
		"id" : 1430,
		"nome" : "Novo Horizonte do Norte",
		"codigo_ibge" : 5106273,
		"sigla" : "MT"
	},
	{
		"id" : 4377,
		"nome" : "Novo Horizonte do Oeste",
		"codigo_ibge" : 1100502,
		"sigla" : "RO"
	},
	{
		"id" : 1543,
		"nome" : "Novo Horizonte do Sul",
		"codigo_ibge" : 5006259,
		"sigla" : "MS"
	},
	{
		"id" : 3027,
		"nome" : "Novo Itacolomi",
		"codigo_ibge" : 4117297,
		"sigla" : "PR"
	},
	{
		"id" : 5512,
		"nome" : "Novo Jardim",
		"codigo_ibge" : 1715259,
		"sigla" : "TO"
	},
	{
		"id" : 160,
		"nome" : "Novo Lino",
		"codigo_ibge" : 2705606,
		"sigla" : "AL"
	},
	{
		"id" : 4138,
		"nome" : "Novo Machado",
		"codigo_ibge" : 4313425,
		"sigla" : "RS"
	},
	{
		"id" : 1431,
		"nome" : "Novo Mundo",
		"codigo_ibge" : 5106265,
		"sigla" : "MT"
	},
	{
		"id" : 821,
		"nome" : "Novo Oriente",
		"codigo_ibge" : 2309409,
		"sigla" : "CE"
	},
	{
		"id" : 2092,
		"nome" : "Novo Oriente de Minas",
		"codigo_ibge" : 3145356,
		"sigla" : "MG"
	},
	{
		"id" : 3507,
		"nome" : "Novo Oriente do Piauí",
		"codigo_ibge" : 2206902,
		"sigla" : "PI"
	},
	{
		"id" : 1050,
		"nome" : "Novo Planalto",
		"codigo_ibge" : 5215256,
		"sigla" : "GO"
	},
	{
		"id" : 2496,
		"nome" : "Novo Progresso",
		"codigo_ibge" : 1505031,
		"sigla" : "PA"
	},
	{
		"id" : 2497,
		"nome" : "Novo Repartimento",
		"codigo_ibge" : 1505064,
		"sigla" : "PA"
	},
	{
		"id" : 1432,
		"nome" : "Novo Santo Antônio",
		"codigo_ibge" : 5106315,
		"sigla" : "MT"
	},
	{
		"id" : 3508,
		"nome" : "Novo Santo Antônio",
		"codigo_ibge" : 2206951,
		"sigla" : "PI"
	},
	{
		"id" : 1433,
		"nome" : "Novo São Joaquim",
		"codigo_ibge" : 5106281,
		"sigla" : "MT"
	},
	{
		"id" : 4139,
		"nome" : "Novo Tiradentes",
		"codigo_ibge" : 4313441,
		"sigla" : "RS"
	},
	{
		"id" : 563,
		"nome" : "Novo Triunfo",
		"codigo_ibge" : 2923050,
		"sigla" : "BA"
	},
	{
		"id" : 4140,
		"nome" : "Novo Xingu",
		"codigo_ibge" : 4313466,
		"sigla" : "RS"
	},
	{
		"id" : 2093,
		"nome" : "Novorizonte",
		"codigo_ibge" : 3145372,
		"sigla" : "MG"
	},
	{
		"id" : 5087,
		"nome" : "Nuporanga",
		"codigo_ibge" : 3533601,
		"sigla" : "SP"
	},
	{
		"id" : 2498,
		"nome" : "Óbidos",
		"codigo_ibge" : 1505106,
		"sigla" : "PA"
	},
	{
		"id" : 822,
		"nome" : "Ocara",
		"codigo_ibge" : 2309458,
		"sigla" : "CE"
	},
	{
		"id" : 5088,
		"nome" : "Ocauçu",
		"codigo_ibge" : 3533700,
		"sigla" : "SP"
	},
	{
		"id" : 3509,
		"nome" : "Oeiras",
		"codigo_ibge" : 2207009,
		"sigla" : "PI"
	},
	{
		"id" : 2499,
		"nome" : "Oeiras do Pará",
		"codigo_ibge" : 1505205,
		"sigla" : "PA"
	},
	{
		"id" : 211,
		"nome" : "Oiapoque",
		"codigo_ibge" : 1600501,
		"sigla" : "AP"
	},
	{
		"id" : 2094,
		"nome" : "Olaria",
		"codigo_ibge" : 3145406,
		"sigla" : "MG"
	},
	{
		"id" : 5089,
		"nome" : "Óleo",
		"codigo_ibge" : 3533809,
		"sigla" : "SP"
	},
	{
		"id" : 2690,
		"nome" : "Olho d Água",
		"codigo_ibge" : 2510402,
		"sigla" : "PB"
	},
	{
		"id" : 1256,
		"nome" : "Olho d Água das Cunhãs",
		"codigo_ibge" : 2107407,
		"sigla" : "MA"
	},
	{
		"id" : 161,
		"nome" : "Olho d Água das Flores",
		"codigo_ibge" : 2705705,
		"sigla" : "AL"
	},
	{
		"id" : 3773,
		"nome" : "Olho d Água do Borges",
		"codigo_ibge" : 2408409,
		"sigla" : "RN"
	},
	{
		"id" : 162,
		"nome" : "Olho d Água do Casado",
		"codigo_ibge" : 2705804,
		"sigla" : "AL"
	},
	{
		"id" : 3510,
		"nome" : "Olho d Água do Piauí",
		"codigo_ibge" : 2207108,
		"sigla" : "PI"
	},
	{
		"id" : 163,
		"nome" : "Olho d Água Grande",
		"codigo_ibge" : 2705903,
		"sigla" : "AL"
	},
	{
		"id" : 2095,
		"nome" : "Olhos d Água",
		"codigo_ibge" : 3145455,
		"sigla" : "MG"
	},
	{
		"id" : 5090,
		"nome" : "Olímpia",
		"codigo_ibge" : 3533908,
		"sigla" : "SP"
	},
	{
		"id" : 2096,
		"nome" : "Olímpio Noronha",
		"codigo_ibge" : 3145505,
		"sigla" : "MG"
	},
	{
		"id" : 3294,
		"nome" : "Olinda",
		"codigo_ibge" : 2609600,
		"sigla" : "PE"
	},
	{
		"id" : 1257,
		"nome" : "Olinda Nova do Maranhão",
		"codigo_ibge" : 2107456,
		"sigla" : "MA"
	},
	{
		"id" : 564,
		"nome" : "Olindina",
		"codigo_ibge" : 2923100,
		"sigla" : "BA"
	},
	{
		"id" : 2691,
		"nome" : "Olivedos",
		"codigo_ibge" : 2510501,
		"sigla" : "PB"
	},
	{
		"id" : 2097,
		"nome" : "Oliveira",
		"codigo_ibge" : 3145604,
		"sigla" : "MG"
	},
	{
		"id" : 5513,
		"nome" : "Oliveira de Fátima",
		"codigo_ibge" : 1715507,
		"sigla" : "TO"
	},
	{
		"id" : 565,
		"nome" : "Oliveira dos Brejinhos",
		"codigo_ibge" : 2923209,
		"sigla" : "BA"
	},
	{
		"id" : 2098,
		"nome" : "Oliveira Fortes",
		"codigo_ibge" : 3145703,
		"sigla" : "MG"
	},
	{
		"id" : 164,
		"nome" : "Olivença",
		"codigo_ibge" : 2706000,
		"sigla" : "AL"
	},
	{
		"id" : 2099,
		"nome" : "Onça de Pitangui",
		"codigo_ibge" : 3145802,
		"sigla" : "MG"
	},
	{
		"id" : 5091,
		"nome" : "Onda Verde",
		"codigo_ibge" : 3534005,
		"sigla" : "SP"
	},
	{
		"id" : 2100,
		"nome" : "Oratórios",
		"codigo_ibge" : 3145851,
		"sigla" : "MG"
	},
	{
		"id" : 5092,
		"nome" : "Oriente",
		"codigo_ibge" : 3534104,
		"sigla" : "SP"
	},
	{
		"id" : 5093,
		"nome" : "Orindiúva",
		"codigo_ibge" : 3534203,
		"sigla" : "SP"
	},
	{
		"id" : 2500,
		"nome" : "Oriximiná",
		"codigo_ibge" : 1505304,
		"sigla" : "PA"
	},
	{
		"id" : 2101,
		"nome" : "Orizânia",
		"codigo_ibge" : 3145877,
		"sigla" : "MG"
	},
	{
		"id" : 1051,
		"nome" : "Orizona",
		"codigo_ibge" : 5215306,
		"sigla" : "GO"
	},
	{
		"id" : 5094,
		"nome" : "Orlândia",
		"codigo_ibge" : 3534302,
		"sigla" : "SP"
	},
	{
		"id" : 4587,
		"nome" : "Orleans",
		"codigo_ibge" : 4211702,
		"sigla" : "SC"
	},
	{
		"id" : 3295,
		"nome" : "Orobó",
		"codigo_ibge" : 2609709,
		"sigla" : "PE"
	},
	{
		"id" : 3296,
		"nome" : "Orocó",
		"codigo_ibge" : 2609808,
		"sigla" : "PE"
	},
	{
		"id" : 823,
		"nome" : "Orós",
		"codigo_ibge" : 2309508,
		"sigla" : "CE"
	},
	{
		"id" : 3028,
		"nome" : "Ortigueira",
		"codigo_ibge" : 4117305,
		"sigla" : "PR"
	},
	{
		"id" : 5095,
		"nome" : "Osasco",
		"codigo_ibge" : 3534401,
		"sigla" : "SP"
	},
	{
		"id" : 5096,
		"nome" : "Oscar Bressane",
		"codigo_ibge" : 3534500,
		"sigla" : "SP"
	},
	{
		"id" : 4141,
		"nome" : "Osório",
		"codigo_ibge" : 4313508,
		"sigla" : "RS"
	},
	{
		"id" : 5097,
		"nome" : "Osvaldo Cruz",
		"codigo_ibge" : 3534609,
		"sigla" : "SP"
	},
	{
		"id" : 4588,
		"nome" : "Otacílio Costa",
		"codigo_ibge" : 4211751,
		"sigla" : "SC"
	},
	{
		"id" : 2501,
		"nome" : "Ourém",
		"codigo_ibge" : 1505403,
		"sigla" : "PA"
	},
	{
		"id" : 566,
		"nome" : "Ouriçangas",
		"codigo_ibge" : 2923308,
		"sigla" : "BA"
	},
	{
		"id" : 3297,
		"nome" : "Ouricuri",
		"codigo_ibge" : 2609907,
		"sigla" : "PE"
	},
	{
		"id" : 2502,
		"nome" : "Ourilândia do Norte",
		"codigo_ibge" : 1505437,
		"sigla" : "PA"
	},
	{
		"id" : 5098,
		"nome" : "Ourinhos",
		"codigo_ibge" : 3534708,
		"sigla" : "SP"
	},
	{
		"id" : 3029,
		"nome" : "Ourizona",
		"codigo_ibge" : 4117404,
		"sigla" : "PR"
	},
	{
		"id" : 4589,
		"nome" : "Ouro",
		"codigo_ibge" : 4211801,
		"sigla" : "SC"
	},
	{
		"id" : 3774,
		"nome" : "Ouro Branco",
		"codigo_ibge" : 2408508,
		"sigla" : "RN"
	},
	{
		"id" : 165,
		"nome" : "Ouro Branco",
		"codigo_ibge" : 2706109,
		"sigla" : "AL"
	},
	{
		"id" : 2102,
		"nome" : "Ouro Branco",
		"codigo_ibge" : 3145901,
		"sigla" : "MG"
	},
	{
		"id" : 2103,
		"nome" : "Ouro Fino",
		"codigo_ibge" : 3146008,
		"sigla" : "MG"
	},
	{
		"id" : 2104,
		"nome" : "Ouro Preto",
		"codigo_ibge" : 3146107,
		"sigla" : "MG"
	},
	{
		"id" : 4378,
		"nome" : "Ouro Preto do Oeste",
		"codigo_ibge" : 1100155,
		"sigla" : "RO"
	},
	{
		"id" : 2692,
		"nome" : "Ouro Velho",
		"codigo_ibge" : 2510600,
		"sigla" : "PB"
	},
	{
		"id" : 4590,
		"nome" : "Ouro Verde",
		"codigo_ibge" : 4211850,
		"sigla" : "SC"
	},
	{
		"id" : 5099,
		"nome" : "Ouro Verde",
		"codigo_ibge" : 3534807,
		"sigla" : "SP"
	},
	{
		"id" : 1052,
		"nome" : "Ouro Verde de Goiás",
		"codigo_ibge" : 5215405,
		"sigla" : "GO"
	},
	{
		"id" : 2105,
		"nome" : "Ouro Verde de Minas",
		"codigo_ibge" : 3146206,
		"sigla" : "MG"
	},
	{
		"id" : 3030,
		"nome" : "Ouro Verde do Oeste",
		"codigo_ibge" : 4117453,
		"sigla" : "PR"
	},
	{
		"id" : 5100,
		"nome" : "Ouroeste",
		"codigo_ibge" : 3534757,
		"sigla" : "SP"
	},
	{
		"id" : 567,
		"nome" : "Ourolândia",
		"codigo_ibge" : 2923357,
		"sigla" : "BA"
	},
	{
		"id" : 1053,
		"nome" : "Ouvidor",
		"codigo_ibge" : 5215504,
		"sigla" : "GO"
	},
	{
		"id" : 5101,
		"nome" : "Pacaembu",
		"codigo_ibge" : 3534906,
		"sigla" : "SP"
	},
	{
		"id" : 2503,
		"nome" : "Pacajá",
		"codigo_ibge" : 1505486,
		"sigla" : "PA"
	},
	{
		"id" : 824,
		"nome" : "Pacajus",
		"codigo_ibge" : 2309607,
		"sigla" : "CE"
	},
	{
		"id" : 4408,
		"nome" : "Pacaraima",
		"codigo_ibge" : 1400456,
		"sigla" : "RR"
	},
	{
		"id" : 5398,
		"nome" : "Pacatuba",
		"codigo_ibge" : 2804904,
		"sigla" : "SE"
	},
	{
		"id" : 825,
		"nome" : "Pacatuba",
		"codigo_ibge" : 2309706,
		"sigla" : "CE"
	},
	{
		"id" : 1258,
		"nome" : "Paço do Lumiar",
		"codigo_ibge" : 2107506,
		"sigla" : "MA"
	},
	{
		"id" : 826,
		"nome" : "Pacoti",
		"codigo_ibge" : 2309805,
		"sigla" : "CE"
	},
	{
		"id" : 827,
		"nome" : "Pacujá",
		"codigo_ibge" : 2309904,
		"sigla" : "CE"
	},
	{
		"id" : 1054,
		"nome" : "Padre Bernardo",
		"codigo_ibge" : 5215603,
		"sigla" : "GO"
	},
	{
		"id" : 2106,
		"nome" : "Padre Carvalho",
		"codigo_ibge" : 3146255,
		"sigla" : "MG"
	},
	{
		"id" : 3511,
		"nome" : "Padre Marcos",
		"codigo_ibge" : 2207207,
		"sigla" : "PI"
	},
	{
		"id" : 2107,
		"nome" : "Padre Paraíso",
		"codigo_ibge" : 3146305,
		"sigla" : "MG"
	},
	{
		"id" : 3512,
		"nome" : "Paes Landim",
		"codigo_ibge" : 2207306,
		"sigla" : "PI"
	},
	{
		"id" : 2108,
		"nome" : "Pai Pedro",
		"codigo_ibge" : 3146552,
		"sigla" : "MG"
	},
	{
		"id" : 4591,
		"nome" : "Paial",
		"codigo_ibge" : 4211876,
		"sigla" : "SC"
	},
	{
		"id" : 3031,
		"nome" : "Paiçandu",
		"codigo_ibge" : 4117503,
		"sigla" : "PR"
	},
	{
		"id" : 4142,
		"nome" : "Paim Filho",
		"codigo_ibge" : 4313607,
		"sigla" : "RS"
	},
	{
		"id" : 2109,
		"nome" : "Paineiras",
		"codigo_ibge" : 3146404,
		"sigla" : "MG"
	},
	{
		"id" : 4592,
		"nome" : "Painel",
		"codigo_ibge" : 4211892,
		"sigla" : "SC"
	},
	{
		"id" : 2110,
		"nome" : "Pains",
		"codigo_ibge" : 3146503,
		"sigla" : "MG"
	},
	{
		"id" : 2111,
		"nome" : "Paiva",
		"codigo_ibge" : 3146602,
		"sigla" : "MG"
	},
	{
		"id" : 3513,
		"nome" : "Pajeú do Piauí",
		"codigo_ibge" : 2207355,
		"sigla" : "PI"
	},
	{
		"id" : 5102,
		"nome" : "Palestina",
		"codigo_ibge" : 3535002,
		"sigla" : "SP"
	},
	{
		"id" : 166,
		"nome" : "Palestina",
		"codigo_ibge" : 2706208,
		"sigla" : "AL"
	},
	{
		"id" : 1055,
		"nome" : "Palestina de Goiás",
		"codigo_ibge" : 5215652,
		"sigla" : "GO"
	},
	{
		"id" : 2504,
		"nome" : "Palestina do Pará",
		"codigo_ibge" : 1505494,
		"sigla" : "PA"
	},
	{
		"id" : 828,
		"nome" : "Palhano",
		"codigo_ibge" : 2310001,
		"sigla" : "CE"
	},
	{
		"id" : 4593,
		"nome" : "Palhoça",
		"codigo_ibge" : 4211900,
		"sigla" : "SC"
	},
	{
		"id" : 2112,
		"nome" : "Palma",
		"codigo_ibge" : 3146701,
		"sigla" : "MG"
	},
	{
		"id" : 4594,
		"nome" : "Palma Sola",
		"codigo_ibge" : 4212007,
		"sigla" : "SC"
	},
	{
		"id" : 829,
		"nome" : "Palmácia",
		"codigo_ibge" : 2310100,
		"sigla" : "CE"
	},
	{
		"id" : 3298,
		"nome" : "Palmares",
		"codigo_ibge" : 2610004,
		"sigla" : "PE"
	},
	{
		"id" : 4143,
		"nome" : "Palmares do Sul",
		"codigo_ibge" : 4313656,
		"sigla" : "RS"
	},
	{
		"id" : 5103,
		"nome" : "Palmares Paulista",
		"codigo_ibge" : 3535101,
		"sigla" : "SP"
	},
	{
		"id" : 5514,
		"nome" : "Palmas",
		"codigo_ibge" : 1721000,
		"sigla" : "TO"
	},
	{
		"id" : 3032,
		"nome" : "Palmas",
		"codigo_ibge" : 4117602,
		"sigla" : "PR"
	},
	{
		"id" : 568,
		"nome" : "Palmas de Monte Alto",
		"codigo_ibge" : 2923407,
		"sigla" : "BA"
	},
	{
		"id" : 3033,
		"nome" : "Palmeira",
		"codigo_ibge" : 4117701,
		"sigla" : "PR"
	},
	{
		"id" : 4595,
		"nome" : "Palmeira",
		"codigo_ibge" : 4212056,
		"sigla" : "SC"
	},
	{
		"id" : 5104,
		"nome" : "Palmeira d Oeste",
		"codigo_ibge" : 3535200,
		"sigla" : "SP"
	},
	{
		"id" : 4144,
		"nome" : "Palmeira das Missões",
		"codigo_ibge" : 4313706,
		"sigla" : "RS"
	},
	{
		"id" : 3514,
		"nome" : "Palmeira do Piauí",
		"codigo_ibge" : 2207405,
		"sigla" : "PI"
	},
	{
		"id" : 167,
		"nome" : "Palmeira dos Índios",
		"codigo_ibge" : 2706307,
		"sigla" : "AL"
	},
	{
		"id" : 3515,
		"nome" : "Palmeirais",
		"codigo_ibge" : 2207504,
		"sigla" : "PI"
	},
	{
		"id" : 1259,
		"nome" : "Palmeirândia",
		"codigo_ibge" : 2107605,
		"sigla" : "MA"
	},
	{
		"id" : 5515,
		"nome" : "Palmeirante",
		"codigo_ibge" : 1715705,
		"sigla" : "TO"
	},
	{
		"id" : 569,
		"nome" : "Palmeiras",
		"codigo_ibge" : 2923506,
		"sigla" : "BA"
	},
	{
		"id" : 1056,
		"nome" : "Palmeiras de Goiás",
		"codigo_ibge" : 5215702,
		"sigla" : "GO"
	},
	{
		"id" : 5516,
		"nome" : "Palmeiras do Tocantins",
		"codigo_ibge" : 1713809,
		"sigla" : "TO"
	},
	{
		"id" : 3299,
		"nome" : "Palmeirina",
		"codigo_ibge" : 2610103,
		"sigla" : "PE"
	},
	{
		"id" : 5517,
		"nome" : "Palmeirópolis",
		"codigo_ibge" : 1715754,
		"sigla" : "TO"
	},
	{
		"id" : 1057,
		"nome" : "Palmelo",
		"codigo_ibge" : 5215801,
		"sigla" : "GO"
	},
	{
		"id" : 1058,
		"nome" : "Palminópolis",
		"codigo_ibge" : 5215900,
		"sigla" : "GO"
	},
	{
		"id" : 3034,
		"nome" : "Palmital",
		"codigo_ibge" : 4117800,
		"sigla" : "PR"
	},
	{
		"id" : 5105,
		"nome" : "Palmital",
		"codigo_ibge" : 3535309,
		"sigla" : "SP"
	},
	{
		"id" : 4145,
		"nome" : "Palmitinho",
		"codigo_ibge" : 4313805,
		"sigla" : "RS"
	},
	{
		"id" : 4596,
		"nome" : "Palmitos",
		"codigo_ibge" : 4212106,
		"sigla" : "SC"
	},
	{
		"id" : 2113,
		"nome" : "Palmópolis",
		"codigo_ibge" : 3146750,
		"sigla" : "MG"
	},
	{
		"id" : 3035,
		"nome" : "Palotina",
		"codigo_ibge" : 4117909,
		"sigla" : "PR"
	},
	{
		"id" : 1059,
		"nome" : "Panamá",
		"codigo_ibge" : 5216007,
		"sigla" : "GO"
	},
	{
		"id" : 4146,
		"nome" : "Panambi",
		"codigo_ibge" : 4313904,
		"sigla" : "RS"
	},
	{
		"id" : 54,
		"nome" : "Pancas",
		"codigo_ibge" : 3204005,
		"sigla" : "ES"
	},
	{
		"id" : 3300,
		"nome" : "Panelas",
		"codigo_ibge" : 2610202,
		"sigla" : "PE"
	},
	{
		"id" : 5106,
		"nome" : "Panorama",
		"codigo_ibge" : 3535408,
		"sigla" : "SP"
	},
	{
		"id" : 4147,
		"nome" : "Pantano Grande",
		"codigo_ibge" : 4313953,
		"sigla" : "RS"
	},
	{
		"id" : 168,
		"nome" : "Pão de Açúcar",
		"codigo_ibge" : 2706406,
		"sigla" : "AL"
	},
	{
		"id" : 2114,
		"nome" : "Papagaios",
		"codigo_ibge" : 3146909,
		"sigla" : "MG"
	},
	{
		"id" : 4597,
		"nome" : "Papanduva",
		"codigo_ibge" : 4212205,
		"sigla" : "SC"
	},
	{
		"id" : 3516,
		"nome" : "Paquetá",
		"codigo_ibge" : 2207553,
		"sigla" : "PI"
	},
	{
		"id" : 2115,
		"nome" : "Pará de Minas",
		"codigo_ibge" : 3147105,
		"sigla" : "MG"
	},
	{
		"id" : 3641,
		"nome" : "Paracambi",
		"codigo_ibge" : 3303609,
		"sigla" : "RJ"
	},
	{
		"id" : 2116,
		"nome" : "Paracatu",
		"codigo_ibge" : 3147006,
		"sigla" : "MG"
	},
	{
		"id" : 830,
		"nome" : "Paracuru",
		"codigo_ibge" : 2310209,
		"sigla" : "CE"
	},
	{
		"id" : 2505,
		"nome" : "Paragominas",
		"codigo_ibge" : 1505502,
		"sigla" : "PA"
	},
	{
		"id" : 2117,
		"nome" : "Paraguaçu",
		"codigo_ibge" : 3147204,
		"sigla" : "MG"
	},
	{
		"id" : 5107,
		"nome" : "Paraguaçu Paulista",
		"codigo_ibge" : 3535507,
		"sigla" : "SP"
	},
	{
		"id" : 4148,
		"nome" : "Paraí",
		"codigo_ibge" : 4314001,
		"sigla" : "RS"
	},
	{
		"id" : 3642,
		"nome" : "Paraíba do Sul",
		"codigo_ibge" : 3303708,
		"sigla" : "RJ"
	},
	{
		"id" : 1260,
		"nome" : "Paraibano",
		"codigo_ibge" : 2107704,
		"sigla" : "MA"
	},
	{
		"id" : 5108,
		"nome" : "Paraibuna",
		"codigo_ibge" : 3535606,
		"sigla" : "SP"
	},
	{
		"id" : 831,
		"nome" : "Paraipaba",
		"codigo_ibge" : 2310258,
		"sigla" : "CE"
	},
	{
		"id" : 4598,
		"nome" : "Paraíso",
		"codigo_ibge" : 4212239,
		"sigla" : "SC"
	},
	{
		"id" : 5109,
		"nome" : "Paraíso",
		"codigo_ibge" : 3535705,
		"sigla" : "SP"
	},
	{
		"id" : 5571,
		"nome" : "Paraíso das Águas",
		"codigo_ibge" : 5006275,
		"sigla" : "MS"
	},
	{
		"id" : 3036,
		"nome" : "Paraíso do Norte",
		"codigo_ibge" : 4118006,
		"sigla" : "PR"
	},
	{
		"id" : 4149,
		"nome" : "Paraíso do Sul",
		"codigo_ibge" : 4314027,
		"sigla" : "RS"
	},
	{
		"id" : 5518,
		"nome" : "Paraíso do Tocantins",
		"codigo_ibge" : 1716109,
		"sigla" : "TO"
	},
	{
		"id" : 2118,
		"nome" : "Paraisópolis",
		"codigo_ibge" : 3147303,
		"sigla" : "MG"
	},
	{
		"id" : 832,
		"nome" : "Parambu",
		"codigo_ibge" : 2310308,
		"sigla" : "CE"
	},
	{
		"id" : 570,
		"nome" : "Paramirim",
		"codigo_ibge" : 2923605,
		"sigla" : "BA"
	},
	{
		"id" : 833,
		"nome" : "Paramoti",
		"codigo_ibge" : 2310407,
		"sigla" : "CE"
	},
	{
		"id" : 3775,
		"nome" : "Paraná",
		"codigo_ibge" : 2408607,
		"sigla" : "RN"
	},
	{
		"id" : 5519,
		"nome" : "Paranã",
		"codigo_ibge" : 1716208,
		"sigla" : "TO"
	},
	{
		"id" : 3037,
		"nome" : "Paranacity",
		"codigo_ibge" : 4118105,
		"sigla" : "PR"
	},
	{
		"id" : 3038,
		"nome" : "Paranaguá",
		"codigo_ibge" : 4118204,
		"sigla" : "PR"
	},
	{
		"id" : 1544,
		"nome" : "Paranaíba",
		"codigo_ibge" : 5006309,
		"sigla" : "MS"
	},
	{
		"id" : 1060,
		"nome" : "Paranaiguara",
		"codigo_ibge" : 5216304,
		"sigla" : "GO"
	},
	{
		"id" : 1434,
		"nome" : "Paranaíta",
		"codigo_ibge" : 5106299,
		"sigla" : "MT"
	},
	{
		"id" : 5110,
		"nome" : "Paranapanema",
		"codigo_ibge" : 3535804,
		"sigla" : "SP"
	},
	{
		"id" : 3039,
		"nome" : "Paranapoema",
		"codigo_ibge" : 4118303,
		"sigla" : "PR"
	},
	{
		"id" : 5111,
		"nome" : "Paranapuã",
		"codigo_ibge" : 3535903,
		"sigla" : "SP"
	},
	{
		"id" : 3301,
		"nome" : "Paranatama",
		"codigo_ibge" : 2610301,
		"sigla" : "PE"
	},
	{
		"id" : 1435,
		"nome" : "Paranatinga",
		"codigo_ibge" : 5106307,
		"sigla" : "MT"
	},
	{
		"id" : 3040,
		"nome" : "Paranavaí",
		"codigo_ibge" : 4118402,
		"sigla" : "PR"
	},
	{
		"id" : 1545,
		"nome" : "Paranhos",
		"codigo_ibge" : 5006358,
		"sigla" : "MS"
	},
	{
		"id" : 2119,
		"nome" : "Paraopeba",
		"codigo_ibge" : 3147402,
		"sigla" : "MG"
	},
	{
		"id" : 5112,
		"nome" : "Parapuã",
		"codigo_ibge" : 3536000,
		"sigla" : "SP"
	},
	{
		"id" : 2693,
		"nome" : "Parari",
		"codigo_ibge" : 2510659,
		"sigla" : "PB"
	},
	{
		"id" : 571,
		"nome" : "Paratinga",
		"codigo_ibge" : 2923704,
		"sigla" : "BA"
	},
	{
		"id" : 3643,
		"nome" : "Paraty",
		"codigo_ibge" : 3303807,
		"sigla" : "RJ"
	},
	{
		"id" : 3776,
		"nome" : "Paraú",
		"codigo_ibge" : 2408706,
		"sigla" : "RN"
	},
	{
		"id" : 2506,
		"nome" : "Parauapebas",
		"codigo_ibge" : 1505536,
		"sigla" : "PA"
	},
	{
		"id" : 1061,
		"nome" : "Paraúna",
		"codigo_ibge" : 5216403,
		"sigla" : "GO"
	},
	{
		"id" : 3777,
		"nome" : "Parazinho",
		"codigo_ibge" : 2408805,
		"sigla" : "RN"
	},
	{
		"id" : 5113,
		"nome" : "Pardinho",
		"codigo_ibge" : 3536109,
		"sigla" : "SP"
	},
	{
		"id" : 4150,
		"nome" : "Pareci Novo",
		"codigo_ibge" : 4314035,
		"sigla" : "RS"
	},
	{
		"id" : 4379,
		"nome" : "Parecis",
		"codigo_ibge" : 1101450,
		"sigla" : "RO"
	},
	{
		"id" : 3778,
		"nome" : "Parelhas",
		"codigo_ibge" : 2408904,
		"sigla" : "RN"
	},
	{
		"id" : 169,
		"nome" : "Pariconha",
		"codigo_ibge" : 2706422,
		"sigla" : "AL"
	},
	{
		"id" : 264,
		"nome" : "Parintins",
		"codigo_ibge" : 1303403,
		"sigla" : "AM"
	},
	{
		"id" : 572,
		"nome" : "Paripiranga",
		"codigo_ibge" : 2923803,
		"sigla" : "BA"
	},
	{
		"id" : 170,
		"nome" : "Paripueira",
		"codigo_ibge" : 2706448,
		"sigla" : "AL"
	},
	{
		"id" : 5114,
		"nome" : "Pariquera Açu",
		"codigo_ibge" : 3536208,
		"sigla" : "SP"
	},
	{
		"id" : 5115,
		"nome" : "Parisi",
		"codigo_ibge" : 3536257,
		"sigla" : "SP"
	},
	{
		"id" : 3517,
		"nome" : "Parnaguá",
		"codigo_ibge" : 2207603,
		"sigla" : "PI"
	},
	{
		"id" : 3518,
		"nome" : "Parnaíba",
		"codigo_ibge" : 2207702,
		"sigla" : "PI"
	},
	{
		"id" : 3302,
		"nome" : "Parnamirim",
		"codigo_ibge" : 2610400,
		"sigla" : "PE"
	},
	{
		"id" : 3779,
		"nome" : "Parnamirim",
		"codigo_ibge" : 2403251,
		"sigla" : "RN"
	},
	{
		"id" : 1261,
		"nome" : "Parnarama",
		"codigo_ibge" : 2107803,
		"sigla" : "MA"
	},
	{
		"id" : 4151,
		"nome" : "Parobé",
		"codigo_ibge" : 4314050,
		"sigla" : "RS"
	},
	{
		"id" : 3780,
		"nome" : "Passa e Fica",
		"codigo_ibge" : 2409100,
		"sigla" : "RN"
	},
	{
		"id" : 2120,
		"nome" : "Passa Quatro",
		"codigo_ibge" : 3147600,
		"sigla" : "MG"
	},
	{
		"id" : 4152,
		"nome" : "Passa Sete",
		"codigo_ibge" : 4314068,
		"sigla" : "RS"
	},
	{
		"id" : 2121,
		"nome" : "Passa Tempo",
		"codigo_ibge" : 3147709,
		"sigla" : "MG"
	},
	{
		"id" : 2123,
		"nome" : "Passa Vinte",
		"codigo_ibge" : 3147808,
		"sigla" : "MG"
	},
	{
		"id" : 2122,
		"nome" : "Passabém",
		"codigo_ibge" : 3147501,
		"sigla" : "MG"
	},
	{
		"id" : 2694,
		"nome" : "Passagem",
		"codigo_ibge" : 2510709,
		"sigla" : "PB"
	},
	{
		"id" : 3781,
		"nome" : "Passagem",
		"codigo_ibge" : 2409209,
		"sigla" : "RN"
	},
	{
		"id" : 1262,
		"nome" : "Passagem Franca",
		"codigo_ibge" : 2107902,
		"sigla" : "MA"
	},
	{
		"id" : 3519,
		"nome" : "Passagem Franca do Piauí",
		"codigo_ibge" : 2207751,
		"sigla" : "PI"
	},
	{
		"id" : 3303,
		"nome" : "Passira",
		"codigo_ibge" : 2610509,
		"sigla" : "PE"
	},
	{
		"id" : 171,
		"nome" : "Passo de Camaragibe",
		"codigo_ibge" : 2706505,
		"sigla" : "AL"
	},
	{
		"id" : 4599,
		"nome" : "Passo de Torres",
		"codigo_ibge" : 4212254,
		"sigla" : "SC"
	},
	{
		"id" : 4153,
		"nome" : "Passo do Sobrado",
		"codigo_ibge" : 4314076,
		"sigla" : "RS"
	},
	{
		"id" : 4154,
		"nome" : "Passo Fundo",
		"codigo_ibge" : 4314100,
		"sigla" : "RS"
	},
	{
		"id" : 2124,
		"nome" : "Passos",
		"codigo_ibge" : 3147907,
		"sigla" : "MG"
	},
	{
		"id" : 4600,
		"nome" : "Passos Maia",
		"codigo_ibge" : 4212270,
		"sigla" : "SC"
	},
	{
		"id" : 1263,
		"nome" : "Pastos Bons",
		"codigo_ibge" : 2108009,
		"sigla" : "MA"
	},
	{
		"id" : 2125,
		"nome" : "Patis",
		"codigo_ibge" : 3147956,
		"sigla" : "MG"
	},
	{
		"id" : 3041,
		"nome" : "Pato Bragado",
		"codigo_ibge" : 4118451,
		"sigla" : "PR"
	},
	{
		"id" : 3042,
		"nome" : "Pato Branco",
		"codigo_ibge" : 4118501,
		"sigla" : "PR"
	},
	{
		"id" : 2695,
		"nome" : "Patos",
		"codigo_ibge" : 2510808,
		"sigla" : "PB"
	},
	{
		"id" : 2126,
		"nome" : "Patos de Minas",
		"codigo_ibge" : 3148004,
		"sigla" : "MG"
	},
	{
		"id" : 3520,
		"nome" : "Patos do Piauí",
		"codigo_ibge" : 2207777,
		"sigla" : "PI"
	},
	{
		"id" : 2127,
		"nome" : "Patrocínio",
		"codigo_ibge" : 3148103,
		"sigla" : "MG"
	},
	{
		"id" : 2128,
		"nome" : "Patrocínio do Muriaé",
		"codigo_ibge" : 3148202,
		"sigla" : "MG"
	},
	{
		"id" : 5116,
		"nome" : "Patrocínio Paulista",
		"codigo_ibge" : 3536307,
		"sigla" : "SP"
	},
	{
		"id" : 3782,
		"nome" : "Patu",
		"codigo_ibge" : 2409308,
		"sigla" : "RN"
	},
	{
		"id" : 3644,
		"nome" : "Paty do Alferes",
		"codigo_ibge" : 3303856,
		"sigla" : "RJ"
	},
	{
		"id" : 573,
		"nome" : "Pau Brasil",
		"codigo_ibge" : 2923902,
		"sigla" : "BA"
	},
	{
		"id" : 2507,
		"nome" : "Pau d Arco",
		"codigo_ibge" : 1505551,
		"sigla" : "PA"
	},
	{
		"id" : 5520,
		"nome" : "Pau d Arco",
		"codigo_ibge" : 1716307,
		"sigla" : "TO"
	},
	{
		"id" : 3521,
		"nome" : "Pau d Arco do Piauí",
		"codigo_ibge" : 2207793,
		"sigla" : "PI"
	},
	{
		"id" : 3783,
		"nome" : "Pau dos Ferros",
		"codigo_ibge" : 2409407,
		"sigla" : "RN"
	},
	{
		"id" : 3304,
		"nome" : "Paudalho",
		"codigo_ibge" : 2610608,
		"sigla" : "PE"
	},
	{
		"id" : 265,
		"nome" : "Pauini",
		"codigo_ibge" : 1303502,
		"sigla" : "AM"
	},
	{
		"id" : 2129,
		"nome" : "Paula Cândido",
		"codigo_ibge" : 3148301,
		"sigla" : "MG"
	},
	{
		"id" : 3043,
		"nome" : "Paula Freitas",
		"codigo_ibge" : 4118600,
		"sigla" : "PR"
	},
	{
		"id" : 5117,
		"nome" : "Paulicéia",
		"codigo_ibge" : 3536406,
		"sigla" : "SP"
	},
	{
		"id" : 5118,
		"nome" : "Paulínia",
		"codigo_ibge" : 3536505,
		"sigla" : "SP"
	},
	{
		"id" : 1264,
		"nome" : "Paulino Neves",
		"codigo_ibge" : 2108058,
		"sigla" : "MA"
	},
	{
		"id" : 2696,
		"nome" : "Paulista",
		"codigo_ibge" : 2510907,
		"sigla" : "PB"
	},
	{
		"id" : 3305,
		"nome" : "Paulista",
		"codigo_ibge" : 2610707,
		"sigla" : "PE"
	},
	{
		"id" : 3522,
		"nome" : "Paulistana",
		"codigo_ibge" : 2207801,
		"sigla" : "PI"
	},
	{
		"id" : 5119,
		"nome" : "Paulistânia",
		"codigo_ibge" : 3536570,
		"sigla" : "SP"
	},
	{
		"id" : 2130,
		"nome" : "Paulistas",
		"codigo_ibge" : 3148400,
		"sigla" : "MG"
	},
	{
		"id" : 574,
		"nome" : "Paulo Afonso",
		"codigo_ibge" : 2924009,
		"sigla" : "BA"
	},
	{
		"id" : 4155,
		"nome" : "Paulo Bento",
		"codigo_ibge" : 4314134,
		"sigla" : "RS"
	},
	{
		"id" : 5120,
		"nome" : "Paulo de Faria",
		"codigo_ibge" : 3536604,
		"sigla" : "SP"
	},
	{
		"id" : 3044,
		"nome" : "Paulo Frontin",
		"codigo_ibge" : 4118709,
		"sigla" : "PR"
	},
	{
		"id" : 172,
		"nome" : "Paulo Jacinto",
		"codigo_ibge" : 2706604,
		"sigla" : "AL"
	},
	{
		"id" : 4601,
		"nome" : "Paulo Lopes",
		"codigo_ibge" : 4212304,
		"sigla" : "SC"
	},
	{
		"id" : 1265,
		"nome" : "Paulo Ramos",
		"codigo_ibge" : 2108108,
		"sigla" : "MA"
	},
	{
		"id" : 2131,
		"nome" : "Pavão",
		"codigo_ibge" : 3148509,
		"sigla" : "MG"
	},
	{
		"id" : 4156,
		"nome" : "Paverama",
		"codigo_ibge" : 4314159,
		"sigla" : "RS"
	},
	{
		"id" : 3523,
		"nome" : "Pavussu",
		"codigo_ibge" : 2207850,
		"sigla" : "PI"
	},
	{
		"id" : 575,
		"nome" : "Pé de Serra",
		"codigo_ibge" : 2924058,
		"sigla" : "BA"
	},
	{
		"id" : 3045,
		"nome" : "Peabiru",
		"codigo_ibge" : 4118808,
		"sigla" : "PR"
	},
	{
		"id" : 2132,
		"nome" : "Peçanha",
		"codigo_ibge" : 3148608,
		"sigla" : "MG"
	},
	{
		"id" : 5121,
		"nome" : "Pederneiras",
		"codigo_ibge" : 3536703,
		"sigla" : "SP"
	},
	{
		"id" : 3306,
		"nome" : "Pedra",
		"codigo_ibge" : 2610806,
		"sigla" : "PE"
	},
	{
		"id" : 2133,
		"nome" : "Pedra Azul",
		"codigo_ibge" : 3148707,
		"sigla" : "MG"
	},
	{
		"id" : 5122,
		"nome" : "Pedra Bela",
		"codigo_ibge" : 3536802,
		"sigla" : "SP"
	},
	{
		"id" : 2134,
		"nome" : "Pedra Bonita",
		"codigo_ibge" : 3148756,
		"sigla" : "MG"
	},
	{
		"id" : 834,
		"nome" : "Pedra Branca",
		"codigo_ibge" : 2310506,
		"sigla" : "CE"
	},
	{
		"id" : 2697,
		"nome" : "Pedra Branca",
		"codigo_ibge" : 2511004,
		"sigla" : "PB"
	},
	{
		"id" : 212,
		"nome" : "Pedra Branca do Amapari",
		"codigo_ibge" : 1600154,
		"sigla" : "AP"
	},
	{
		"id" : 2135,
		"nome" : "Pedra do Anta",
		"codigo_ibge" : 3148806,
		"sigla" : "MG"
	},
	{
		"id" : 2136,
		"nome" : "Pedra do Indaiá",
		"codigo_ibge" : 3148905,
		"sigla" : "MG"
	},
	{
		"id" : 2137,
		"nome" : "Pedra Dourada",
		"codigo_ibge" : 3149002,
		"sigla" : "MG"
	},
	{
		"id" : 3784,
		"nome" : "Pedra Grande",
		"codigo_ibge" : 2409506,
		"sigla" : "RN"
	},
	{
		"id" : 2698,
		"nome" : "Pedra Lavrada",
		"codigo_ibge" : 2511103,
		"sigla" : "PB"
	},
	{
		"id" : 5399,
		"nome" : "Pedra Mole",
		"codigo_ibge" : 2805000,
		"sigla" : "SE"
	},
	{
		"id" : 1436,
		"nome" : "Pedra Preta",
		"codigo_ibge" : 5106372,
		"sigla" : "MT"
	},
	{
		"id" : 3785,
		"nome" : "Pedra Preta",
		"codigo_ibge" : 2409605,
		"sigla" : "RN"
	},
	{
		"id" : 2138,
		"nome" : "Pedralva",
		"codigo_ibge" : 3149101,
		"sigla" : "MG"
	},
	{
		"id" : 5123,
		"nome" : "Pedranópolis",
		"codigo_ibge" : 3536901,
		"sigla" : "SP"
	},
	{
		"id" : 576,
		"nome" : "Pedrão",
		"codigo_ibge" : 2924108,
		"sigla" : "BA"
	},
	{
		"id" : 4157,
		"nome" : "Pedras Altas",
		"codigo_ibge" : 4314175,
		"sigla" : "RS"
	},
	{
		"id" : 2699,
		"nome" : "Pedras de Fogo",
		"codigo_ibge" : 2511202,
		"sigla" : "PB"
	},
	{
		"id" : 2139,
		"nome" : "Pedras de Maria da Cruz",
		"codigo_ibge" : 3149150,
		"sigla" : "MG"
	},
	{
		"id" : 4602,
		"nome" : "Pedras Grandes",
		"codigo_ibge" : 4212403,
		"sigla" : "SC"
	},
	{
		"id" : 5124,
		"nome" : "Pedregulho",
		"codigo_ibge" : 3537008,
		"sigla" : "SP"
	},
	{
		"id" : 5125,
		"nome" : "Pedreira",
		"codigo_ibge" : 3537107,
		"sigla" : "SP"
	},
	{
		"id" : 1266,
		"nome" : "Pedreiras",
		"codigo_ibge" : 2108207,
		"sigla" : "MA"
	},
	{
		"id" : 5400,
		"nome" : "Pedrinhas",
		"codigo_ibge" : 2805109,
		"sigla" : "SE"
	},
	{
		"id" : 5126,
		"nome" : "Pedrinhas Paulista",
		"codigo_ibge" : 3537156,
		"sigla" : "SP"
	},
	{
		"id" : 2140,
		"nome" : "Pedrinópolis",
		"codigo_ibge" : 3149200,
		"sigla" : "MG"
	},
	{
		"id" : 5521,
		"nome" : "Pedro Afonso",
		"codigo_ibge" : 1716505,
		"sigla" : "TO"
	},
	{
		"id" : 577,
		"nome" : "Pedro Alexandre",
		"codigo_ibge" : 2924207,
		"sigla" : "BA"
	},
	{
		"id" : 3786,
		"nome" : "Pedro Avelino",
		"codigo_ibge" : 2409704,
		"sigla" : "RN"
	},
	{
		"id" : 55,
		"nome" : "Pedro Canário",
		"codigo_ibge" : 3204054,
		"sigla" : "ES"
	},
	{
		"id" : 5127,
		"nome" : "Pedro de Toledo",
		"codigo_ibge" : 3537206,
		"sigla" : "SP"
	},
	{
		"id" : 1267,
		"nome" : "Pedro do Rosário",
		"codigo_ibge" : 2108256,
		"sigla" : "MA"
	},
	{
		"id" : 1546,
		"nome" : "Pedro Gomes",
		"codigo_ibge" : 5006408,
		"sigla" : "MS"
	},
	{
		"id" : 3524,
		"nome" : "Pedro II",
		"codigo_ibge" : 2207900,
		"sigla" : "PI"
	},
	{
		"id" : 3525,
		"nome" : "Pedro Laurentino",
		"codigo_ibge" : 2207934,
		"sigla" : "PI"
	},
	{
		"id" : 2141,
		"nome" : "Pedro Leopoldo",
		"codigo_ibge" : 3149309,
		"sigla" : "MG"
	},
	{
		"id" : 4158,
		"nome" : "Pedro Osório",
		"codigo_ibge" : 4314209,
		"sigla" : "RS"
	},
	{
		"id" : 2700,
		"nome" : "Pedro Régis",
		"codigo_ibge" : 2512721,
		"sigla" : "PB"
	},
	{
		"id" : 2142,
		"nome" : "Pedro Teixeira",
		"codigo_ibge" : 3149408,
		"sigla" : "MG"
	},
	{
		"id" : 3787,
		"nome" : "Pedro Velho",
		"codigo_ibge" : 2409803,
		"sigla" : "RN"
	},
	{
		"id" : 5522,
		"nome" : "Peixe",
		"codigo_ibge" : 1716604,
		"sigla" : "TO"
	},
	{
		"id" : 2508,
		"nome" : "Peixe Boi",
		"codigo_ibge" : 1505601,
		"sigla" : "PA"
	},
	{
		"id" : 1437,
		"nome" : "Peixoto de Azevedo",
		"codigo_ibge" : 5106422,
		"sigla" : "MT"
	},
	{
		"id" : 4159,
		"nome" : "Pejuçara",
		"codigo_ibge" : 4314308,
		"sigla" : "RS"
	},
	{
		"id" : 4160,
		"nome" : "Pelotas",
		"codigo_ibge" : 4314407,
		"sigla" : "RS"
	},
	{
		"id" : 835,
		"nome" : "Penaforte",
		"codigo_ibge" : 2310605,
		"sigla" : "CE"
	},
	{
		"id" : 1268,
		"nome" : "Penalva",
		"codigo_ibge" : 2108306,
		"sigla" : "MA"
	},
	{
		"id" : 5128,
		"nome" : "Penápolis",
		"codigo_ibge" : 3537305,
		"sigla" : "SP"
	},
	{
		"id" : 3788,
		"nome" : "Pendências",
		"codigo_ibge" : 2409902,
		"sigla" : "RN"
	},
	{
		"id" : 173,
		"nome" : "Penedo",
		"codigo_ibge" : 2706703,
		"sigla" : "AL"
	},
	{
		"id" : 4603,
		"nome" : "Penha",
		"codigo_ibge" : 4212502,
		"sigla" : "SC"
	},
	{
		"id" : 836,
		"nome" : "Pentecoste",
		"codigo_ibge" : 2310704,
		"sigla" : "CE"
	},
	{
		"id" : 2143,
		"nome" : "Pequeri",
		"codigo_ibge" : 3149507,
		"sigla" : "MG"
	},
	{
		"id" : 2144,
		"nome" : "Pequi",
		"codigo_ibge" : 3149606,
		"sigla" : "MG"
	},
	{
		"id" : 5523,
		"nome" : "Pequizeiro",
		"codigo_ibge" : 1716653,
		"sigla" : "TO"
	},
	{
		"id" : 2145,
		"nome" : "Perdigão",
		"codigo_ibge" : 3149705,
		"sigla" : "MG"
	},
	{
		"id" : 2146,
		"nome" : "Perdizes",
		"codigo_ibge" : 3149804,
		"sigla" : "MG"
	},
	{
		"id" : 2147,
		"nome" : "Perdões",
		"codigo_ibge" : 3149903,
		"sigla" : "MG"
	},
	{
		"id" : 5129,
		"nome" : "Pereira Barreto",
		"codigo_ibge" : 3537404,
		"sigla" : "SP"
	},
	{
		"id" : 5130,
		"nome" : "Pereiras",
		"codigo_ibge" : 3537503,
		"sigla" : "SP"
	},
	{
		"id" : 837,
		"nome" : "Pereiro",
		"codigo_ibge" : 2310803,
		"sigla" : "CE"
	},
	{
		"id" : 1269,
		"nome" : "Peri Mirim",
		"codigo_ibge" : 2108405,
		"sigla" : "MA"
	},
	{
		"id" : 2148,
		"nome" : "Periquito",
		"codigo_ibge" : 3149952,
		"sigla" : "MG"
	},
	{
		"id" : 4604,
		"nome" : "Peritiba",
		"codigo_ibge" : 4212601,
		"sigla" : "SC"
	},
	{
		"id" : 1270,
		"nome" : "Peritoró",
		"codigo_ibge" : 2108454,
		"sigla" : "MA"
	},
	{
		"id" : 3046,
		"nome" : "Perobal",
		"codigo_ibge" : 4118857,
		"sigla" : "PR"
	},
	{
		"id" : 3047,
		"nome" : "Pérola",
		"codigo_ibge" : 4118907,
		"sigla" : "PR"
	},
	{
		"id" : 3048,
		"nome" : "Pérola d Oeste",
		"codigo_ibge" : 4119004,
		"sigla" : "PR"
	},
	{
		"id" : 1062,
		"nome" : "Perolândia",
		"codigo_ibge" : 5216452,
		"sigla" : "GO"
	},
	{
		"id" : 5131,
		"nome" : "Peruíbe",
		"codigo_ibge" : 3537602,
		"sigla" : "SP"
	},
	{
		"id" : 2149,
		"nome" : "Pescador",
		"codigo_ibge" : 3150000,
		"sigla" : "MG"
	},
	{
		"id" : 5569,
		"nome" : "Pescaria Brava",
		"codigo_ibge" : 4212650,
		"sigla" : "SC"
	},
	{
		"id" : 3307,
		"nome" : "Pesqueira",
		"codigo_ibge" : 2610905,
		"sigla" : "PE"
	},
	{
		"id" : 3308,
		"nome" : "Petrolândia",
		"codigo_ibge" : 2611002,
		"sigla" : "PE"
	},
	{
		"id" : 4605,
		"nome" : "Petrolândia",
		"codigo_ibge" : 4212700,
		"sigla" : "SC"
	},
	{
		"id" : 3309,
		"nome" : "Petrolina",
		"codigo_ibge" : 2611101,
		"sigla" : "PE"
	},
	{
		"id" : 1063,
		"nome" : "Petrolina de Goiás",
		"codigo_ibge" : 5216809,
		"sigla" : "GO"
	},
	{
		"id" : 3645,
		"nome" : "Petrópolis",
		"codigo_ibge" : 3303906,
		"sigla" : "RJ"
	},
	{
		"id" : 174,
		"nome" : "Piaçabuçu",
		"codigo_ibge" : 2706802,
		"sigla" : "AL"
	},
	{
		"id" : 5132,
		"nome" : "Piacatu",
		"codigo_ibge" : 3537701,
		"sigla" : "SP"
	},
	{
		"id" : 2701,
		"nome" : "Piancó",
		"codigo_ibge" : 2511301,
		"sigla" : "PB"
	},
	{
		"id" : 578,
		"nome" : "Piatã",
		"codigo_ibge" : 2924306,
		"sigla" : "BA"
	},
	{
		"id" : 2150,
		"nome" : "Piau",
		"codigo_ibge" : 3150109,
		"sigla" : "MG"
	},
	{
		"id" : 4161,
		"nome" : "Picada Café",
		"codigo_ibge" : 4314423,
		"sigla" : "RS"
	},
	{
		"id" : 2509,
		"nome" : "Piçarra",
		"codigo_ibge" : 1505635,
		"sigla" : "PA"
	},
	{
		"id" : 3526,
		"nome" : "Picos",
		"codigo_ibge" : 2208007,
		"sigla" : "PI"
	},
	{
		"id" : 2702,
		"nome" : "Picuí",
		"codigo_ibge" : 2511400,
		"sigla" : "PB"
	},
	{
		"id" : 5133,
		"nome" : "Piedade",
		"codigo_ibge" : 3537800,
		"sigla" : "SP"
	},
	{
		"id" : 2151,
		"nome" : "Piedade de Caratinga",
		"codigo_ibge" : 3150158,
		"sigla" : "MG"
	},
	{
		"id" : 2152,
		"nome" : "Piedade de Ponte Nova",
		"codigo_ibge" : 3150208,
		"sigla" : "MG"
	},
	{
		"id" : 2153,
		"nome" : "Piedade do Rio Grande",
		"codigo_ibge" : 3150307,
		"sigla" : "MG"
	},
	{
		"id" : 2154,
		"nome" : "Piedade dos Gerais",
		"codigo_ibge" : 3150406,
		"sigla" : "MG"
	},
	{
		"id" : 3049,
		"nome" : "Piên",
		"codigo_ibge" : 4119103,
		"sigla" : "PR"
	},
	{
		"id" : 579,
		"nome" : "Pilão Arcado",
		"codigo_ibge" : 2924405,
		"sigla" : "BA"
	},
	{
		"id" : 175,
		"nome" : "Pilar",
		"codigo_ibge" : 2706901,
		"sigla" : "AL"
	},
	{
		"id" : 2703,
		"nome" : "Pilar",
		"codigo_ibge" : 2511509,
		"sigla" : "PB"
	},
	{
		"id" : 1064,
		"nome" : "Pilar de Goiás",
		"codigo_ibge" : 5216908,
		"sigla" : "GO"
	},
	{
		"id" : 5134,
		"nome" : "Pilar do Sul",
		"codigo_ibge" : 3537909,
		"sigla" : "SP"
	},
	{
		"id" : 2704,
		"nome" : "Pilões",
		"codigo_ibge" : 2511608,
		"sigla" : "PB"
	},
	{
		"id" : 3789,
		"nome" : "Pilões",
		"codigo_ibge" : 2410009,
		"sigla" : "RN"
	},
	{
		"id" : 2705,
		"nome" : "Pilõezinhos",
		"codigo_ibge" : 2511707,
		"sigla" : "PB"
	},
	{
		"id" : 2155,
		"nome" : "Pimenta",
		"codigo_ibge" : 3150505,
		"sigla" : "MG"
	},
	{
		"id" : 4380,
		"nome" : "Pimenta Bueno",
		"codigo_ibge" : 1100189,
		"sigla" : "RO"
	},
	{
		"id" : 3527,
		"nome" : "Pimenteiras",
		"codigo_ibge" : 2208106,
		"sigla" : "PI"
	},
	{
		"id" : 4381,
		"nome" : "Pimenteiras do Oeste",
		"codigo_ibge" : 1101468,
		"sigla" : "RO"
	},
	{
		"id" : 580,
		"nome" : "Pindaí",
		"codigo_ibge" : 2924504,
		"sigla" : "BA"
	},
	{
		"id" : 5135,
		"nome" : "Pindamonhangaba",
		"codigo_ibge" : 3538006,
		"sigla" : "SP"
	},
	{
		"id" : 1271,
		"nome" : "Pindaré Mirim",
		"codigo_ibge" : 2108504,
		"sigla" : "MA"
	},
	{
		"id" : 176,
		"nome" : "Pindoba",
		"codigo_ibge" : 2707008,
		"sigla" : "AL"
	},
	{
		"id" : 581,
		"nome" : "Pindobaçu",
		"codigo_ibge" : 2924603,
		"sigla" : "BA"
	},
	{
		"id" : 5136,
		"nome" : "Pindorama",
		"codigo_ibge" : 3538105,
		"sigla" : "SP"
	},
	{
		"id" : 5524,
		"nome" : "Pindorama do Tocantins",
		"codigo_ibge" : 1717008,
		"sigla" : "TO"
	},
	{
		"id" : 838,
		"nome" : "Pindoretama",
		"codigo_ibge" : 2310852,
		"sigla" : "CE"
	},
	{
		"id" : 2156,
		"nome" : "Pingo d Água",
		"codigo_ibge" : 3150539,
		"sigla" : "MG"
	},
	{
		"id" : 3050,
		"nome" : "Pinhais",
		"codigo_ibge" : 4119152,
		"sigla" : "PR"
	},
	{
		"id" : 4162,
		"nome" : "Pinhal",
		"codigo_ibge" : 4314456,
		"sigla" : "RS"
	},
	{
		"id" : 4163,
		"nome" : "Pinhal da Serra",
		"codigo_ibge" : 4314464,
		"sigla" : "RS"
	},
	{
		"id" : 3051,
		"nome" : "Pinhal de São Bento",
		"codigo_ibge" : 4119251,
		"sigla" : "PR"
	},
	{
		"id" : 4164,
		"nome" : "Pinhal Grande",
		"codigo_ibge" : 4314472,
		"sigla" : "RS"
	},
	{
		"id" : 3052,
		"nome" : "Pinhalão",
		"codigo_ibge" : 4119202,
		"sigla" : "PR"
	},
	{
		"id" : 4607,
		"nome" : "Pinhalzinho",
		"codigo_ibge" : 4212908,
		"sigla" : "SC"
	},
	{
		"id" : 5137,
		"nome" : "Pinhalzinho",
		"codigo_ibge" : 3538204,
		"sigla" : "SP"
	},
	{
		"id" : 5401,
		"nome" : "Pinhão",
		"codigo_ibge" : 2805208,
		"sigla" : "SE"
	},
	{
		"id" : 3053,
		"nome" : "Pinhão",
		"codigo_ibge" : 4119301,
		"sigla" : "PR"
	},
	{
		"id" : 3646,
		"nome" : "Pinheiral",
		"codigo_ibge" : 3303955,
		"sigla" : "RJ"
	},
	{
		"id" : 4165,
		"nome" : "Pinheirinho do Vale",
		"codigo_ibge" : 4314498,
		"sigla" : "RS"
	},
	{
		"id" : 1272,
		"nome" : "Pinheiro",
		"codigo_ibge" : 2108603,
		"sigla" : "MA"
	},
	{
		"id" : 4166,
		"nome" : "Pinheiro Machado",
		"codigo_ibge" : 4314506,
		"sigla" : "RS"
	},
	{
		"id" : 4608,
		"nome" : "Pinheiro Preto",
		"codigo_ibge" : 4213005,
		"sigla" : "SC"
	},
	{
		"id" : 56,
		"nome" : "Pinheiros",
		"codigo_ibge" : 3204104,
		"sigla" : "ES"
	},
	{
		"id" : 582,
		"nome" : "Pintadas",
		"codigo_ibge" : 2924652,
		"sigla" : "BA"
	},
	{
		"id" : 5570,
		"nome" : "Pinto Bandeira",
		"codigo_ibge" : 4314548,
		"sigla" : "RS"
	},
	{
		"id" : 2157,
		"nome" : "Pintópolis",
		"codigo_ibge" : 3150570,
		"sigla" : "MG"
	},
	{
		"id" : 3528,
		"nome" : "Pio IX",
		"codigo_ibge" : 2208205,
		"sigla" : "PI"
	},
	{
		"id" : 1273,
		"nome" : "Pio XII",
		"codigo_ibge" : 2108702,
		"sigla" : "MA"
	},
	{
		"id" : 5138,
		"nome" : "Piquerobi",
		"codigo_ibge" : 3538303,
		"sigla" : "SP"
	},
	{
		"id" : 839,
		"nome" : "Piquet Carneiro",
		"codigo_ibge" : 2310902,
		"sigla" : "CE"
	},
	{
		"id" : 5139,
		"nome" : "Piquete",
		"codigo_ibge" : 3538501,
		"sigla" : "SP"
	},
	{
		"id" : 5140,
		"nome" : "Piracaia",
		"codigo_ibge" : 3538600,
		"sigla" : "SP"
	},
	{
		"id" : 1065,
		"nome" : "Piracanjuba",
		"codigo_ibge" : 5217104,
		"sigla" : "GO"
	},
	{
		"id" : 2158,
		"nome" : "Piracema",
		"codigo_ibge" : 3150604,
		"sigla" : "MG"
	},
	{
		"id" : 5141,
		"nome" : "Piracicaba",
		"codigo_ibge" : 3538709,
		"sigla" : "SP"
	},
	{
		"id" : 3529,
		"nome" : "Piracuruca",
		"codigo_ibge" : 2208304,
		"sigla" : "PI"
	},
	{
		"id" : 3647,
		"nome" : "Piraí",
		"codigo_ibge" : 3304003,
		"sigla" : "RJ"
	},
	{
		"id" : 583,
		"nome" : "Piraí do Norte",
		"codigo_ibge" : 2924678,
		"sigla" : "BA"
	},
	{
		"id" : 3054,
		"nome" : "Piraí do Sul",
		"codigo_ibge" : 4119400,
		"sigla" : "PR"
	},
	{
		"id" : 5142,
		"nome" : "Piraju",
		"codigo_ibge" : 3538808,
		"sigla" : "SP"
	},
	{
		"id" : 2159,
		"nome" : "Pirajuba",
		"codigo_ibge" : 3150703,
		"sigla" : "MG"
	},
	{
		"id" : 5143,
		"nome" : "Pirajuí",
		"codigo_ibge" : 3538907,
		"sigla" : "SP"
	},
	{
		"id" : 5402,
		"nome" : "Pirambu",
		"codigo_ibge" : 2805307,
		"sigla" : "SE"
	},
	{
		"id" : 2160,
		"nome" : "Piranga",
		"codigo_ibge" : 3150802,
		"sigla" : "MG"
	},
	{
		"id" : 5144,
		"nome" : "Pirangi",
		"codigo_ibge" : 3539004,
		"sigla" : "SP"
	},
	{
		"id" : 2161,
		"nome" : "Piranguçu",
		"codigo_ibge" : 3150901,
		"sigla" : "MG"
	},
	{
		"id" : 2162,
		"nome" : "Piranguinho",
		"codigo_ibge" : 3151008,
		"sigla" : "MG"
	},
	{
		"id" : 177,
		"nome" : "Piranhas",
		"codigo_ibge" : 2707107,
		"sigla" : "AL"
	},
	{
		"id" : 1066,
		"nome" : "Piranhas",
		"codigo_ibge" : 5217203,
		"sigla" : "GO"
	},
	{
		"id" : 1274,
		"nome" : "Pirapemas",
		"codigo_ibge" : 2108801,
		"sigla" : "MA"
	},
	{
		"id" : 2163,
		"nome" : "Pirapetinga",
		"codigo_ibge" : 3151107,
		"sigla" : "MG"
	},
	{
		"id" : 4167,
		"nome" : "Pirapó",
		"codigo_ibge" : 4314555,
		"sigla" : "RS"
	},
	{
		"id" : 2164,
		"nome" : "Pirapora",
		"codigo_ibge" : 3151206,
		"sigla" : "MG"
	},
	{
		"id" : 5145,
		"nome" : "Pirapora do Bom Jesus",
		"codigo_ibge" : 3539103,
		"sigla" : "SP"
	},
	{
		"id" : 5146,
		"nome" : "Pirapozinho",
		"codigo_ibge" : 3539202,
		"sigla" : "SP"
	},
	{
		"id" : 3055,
		"nome" : "Piraquara",
		"codigo_ibge" : 4119509,
		"sigla" : "PR"
	},
	{
		"id" : 5525,
		"nome" : "Piraquê",
		"codigo_ibge" : 1717206,
		"sigla" : "TO"
	},
	{
		"id" : 5147,
		"nome" : "Pirassununga",
		"codigo_ibge" : 3539301,
		"sigla" : "SP"
	},
	{
		"id" : 4168,
		"nome" : "Piratini",
		"codigo_ibge" : 4314605,
		"sigla" : "RS"
	},
	{
		"id" : 5148,
		"nome" : "Piratininga",
		"codigo_ibge" : 3539400,
		"sigla" : "SP"
	},
	{
		"id" : 4609,
		"nome" : "Piratuba",
		"codigo_ibge" : 4213104,
		"sigla" : "SC"
	},
	{
		"id" : 2165,
		"nome" : "Piraúba",
		"codigo_ibge" : 3151305,
		"sigla" : "MG"
	},
	{
		"id" : 1067,
		"nome" : "Pirenópolis",
		"codigo_ibge" : 5217302,
		"sigla" : "GO"
	},
	{
		"id" : 1068,
		"nome" : "Pires do Rio",
		"codigo_ibge" : 5217401,
		"sigla" : "GO"
	},
	{
		"id" : 840,
		"nome" : "Pires Ferreira",
		"codigo_ibge" : 2310951,
		"sigla" : "CE"
	},
	{
		"id" : 584,
		"nome" : "Piripá",
		"codigo_ibge" : 2924702,
		"sigla" : "BA"
	},
	{
		"id" : 3530,
		"nome" : "Piripiri",
		"codigo_ibge" : 2208403,
		"sigla" : "PI"
	},
	{
		"id" : 585,
		"nome" : "Piritiba",
		"codigo_ibge" : 2924801,
		"sigla" : "BA"
	},
	{
		"id" : 2706,
		"nome" : "Pirpirituba",
		"codigo_ibge" : 2511806,
		"sigla" : "PB"
	},
	{
		"id" : 3056,
		"nome" : "Pitanga",
		"codigo_ibge" : 4119608,
		"sigla" : "PR"
	},
	{
		"id" : 3057,
		"nome" : "Pitangueiras",
		"codigo_ibge" : 4119657,
		"sigla" : "PR"
	},
	{
		"id" : 5149,
		"nome" : "Pitangueiras",
		"codigo_ibge" : 3539509,
		"sigla" : "SP"
	},
	{
		"id" : 2166,
		"nome" : "Pitangui",
		"codigo_ibge" : 3151404,
		"sigla" : "MG"
	},
	{
		"id" : 2707,
		"nome" : "Pitimbu",
		"codigo_ibge" : 2511905,
		"sigla" : "PB"
	},
	{
		"id" : 5526,
		"nome" : "Pium",
		"codigo_ibge" : 1717503,
		"sigla" : "TO"
	},
	{
		"id" : 57,
		"nome" : "Piúma",
		"codigo_ibge" : 3204203,
		"sigla" : "ES"
	},
	{
		"id" : 2167,
		"nome" : "Piumhi",
		"codigo_ibge" : 3151503,
		"sigla" : "MG"
	},
	{
		"id" : 2510,
		"nome" : "Placas",
		"codigo_ibge" : 1505650,
		"sigla" : "PA"
	},
	{
		"id" : 91,
		"nome" : "Plácido de Castro",
		"codigo_ibge" : 1200385,
		"sigla" : "AC"
	},
	{
		"id" : 1069,
		"nome" : "Planaltina",
		"codigo_ibge" : 5217609,
		"sigla" : "GO"
	},
	{
		"id" : 3058,
		"nome" : "Planaltina do Paraná",
		"codigo_ibge" : 4119707,
		"sigla" : "PR"
	},
	{
		"id" : 586,
		"nome" : "Planaltino",
		"codigo_ibge" : 2924900,
		"sigla" : "BA"
	},
	{
		"id" : 587,
		"nome" : "Planalto",
		"codigo_ibge" : 2925006,
		"sigla" : "BA"
	},
	{
		"id" : 3059,
		"nome" : "Planalto",
		"codigo_ibge" : 4119806,
		"sigla" : "PR"
	},
	{
		"id" : 4169,
		"nome" : "Planalto",
		"codigo_ibge" : 4314704,
		"sigla" : "RS"
	},
	{
		"id" : 5150,
		"nome" : "Planalto",
		"codigo_ibge" : 3539608,
		"sigla" : "SP"
	},
	{
		"id" : 4610,
		"nome" : "Planalto Alegre",
		"codigo_ibge" : 4213153,
		"sigla" : "SC"
	},
	{
		"id" : 1438,
		"nome" : "Planalto da Serra",
		"codigo_ibge" : 5106455,
		"sigla" : "MT"
	},
	{
		"id" : 2168,
		"nome" : "Planura",
		"codigo_ibge" : 3151602,
		"sigla" : "MG"
	},
	{
		"id" : 5151,
		"nome" : "Platina",
		"codigo_ibge" : 3539707,
		"sigla" : "SP"
	},
	{
		"id" : 5152,
		"nome" : "Poá",
		"codigo_ibge" : 3539806,
		"sigla" : "SP"
	},
	{
		"id" : 3310,
		"nome" : "Poção",
		"codigo_ibge" : 2611200,
		"sigla" : "PE"
	},
	{
		"id" : 1275,
		"nome" : "Poção de Pedras",
		"codigo_ibge" : 2108900,
		"sigla" : "MA"
	},
	{
		"id" : 2708,
		"nome" : "Pocinhos",
		"codigo_ibge" : 2512002,
		"sigla" : "PB"
	},
	{
		"id" : 3790,
		"nome" : "Poço Branco",
		"codigo_ibge" : 2410108,
		"sigla" : "RN"
	},
	{
		"id" : 2709,
		"nome" : "Poço Dantas",
		"codigo_ibge" : 2512036,
		"sigla" : "PB"
	},
	{
		"id" : 4170,
		"nome" : "Poço das Antas",
		"codigo_ibge" : 4314753,
		"sigla" : "RS"
	},
	{
		"id" : 178,
		"nome" : "Poço das Trincheiras",
		"codigo_ibge" : 2707206,
		"sigla" : "AL"
	},
	{
		"id" : 2710,
		"nome" : "Poço de José de Moura",
		"codigo_ibge" : 2512077,
		"sigla" : "PB"
	},
	{
		"id" : 2169,
		"nome" : "Poço Fundo",
		"codigo_ibge" : 3151701,
		"sigla" : "MG"
	},
	{
		"id" : 5403,
		"nome" : "Poço Redondo",
		"codigo_ibge" : 2805406,
		"sigla" : "SE"
	},
	{
		"id" : 5404,
		"nome" : "Poço Verde",
		"codigo_ibge" : 2805505,
		"sigla" : "SE"
	},
	{
		"id" : 588,
		"nome" : "Poções",
		"codigo_ibge" : 2925105,
		"sigla" : "BA"
	},
	{
		"id" : 1439,
		"nome" : "Poconé",
		"codigo_ibge" : 5106505,
		"sigla" : "MT"
	},
	{
		"id" : 2170,
		"nome" : "Poços de Caldas",
		"codigo_ibge" : 3151800,
		"sigla" : "MG"
	},
	{
		"id" : 2171,
		"nome" : "Pocrane",
		"codigo_ibge" : 3151909,
		"sigla" : "MG"
	},
	{
		"id" : 589,
		"nome" : "Pojuca",
		"codigo_ibge" : 2925204,
		"sigla" : "BA"
	},
	{
		"id" : 5153,
		"nome" : "Poloni",
		"codigo_ibge" : 3539905,
		"sigla" : "SP"
	},
	{
		"id" : 2711,
		"nome" : "Pombal",
		"codigo_ibge" : 2512101,
		"sigla" : "PB"
	},
	{
		"id" : 3311,
		"nome" : "Pombos",
		"codigo_ibge" : 2611309,
		"sigla" : "PE"
	},
	{
		"id" : 4611,
		"nome" : "Pomerode",
		"codigo_ibge" : 4213203,
		"sigla" : "SC"
	},
	{
		"id" : 5154,
		"nome" : "Pompéia",
		"codigo_ibge" : 3540002,
		"sigla" : "SP"
	},
	{
		"id" : 2172,
		"nome" : "Pompéu",
		"codigo_ibge" : 3152006,
		"sigla" : "MG"
	},
	{
		"id" : 5155,
		"nome" : "Pongaí",
		"codigo_ibge" : 3540101,
		"sigla" : "SP"
	},
	{
		"id" : 2511,
		"nome" : "Ponta de Pedras",
		"codigo_ibge" : 1505700,
		"sigla" : "PA"
	},
	{
		"id" : 3060,
		"nome" : "Ponta Grossa",
		"codigo_ibge" : 4119905,
		"sigla" : "PR"
	},
	{
		"id" : 1547,
		"nome" : "Ponta Porã",
		"codigo_ibge" : 5006606,
		"sigla" : "MS"
	},
	{
		"id" : 5156,
		"nome" : "Pontal",
		"codigo_ibge" : 3540200,
		"sigla" : "SP"
	},
	{
		"id" : 1440,
		"nome" : "Pontal do Araguaia",
		"codigo_ibge" : 5106653,
		"sigla" : "MT"
	},
	{
		"id" : 3061,
		"nome" : "Pontal do Paraná",
		"codigo_ibge" : 4119954,
		"sigla" : "PR"
	},
	{
		"id" : 1070,
		"nome" : "Pontalina",
		"codigo_ibge" : 5217708,
		"sigla" : "GO"
	},
	{
		"id" : 5157,
		"nome" : "Pontalinda",
		"codigo_ibge" : 3540259,
		"sigla" : "SP"
	},
	{
		"id" : 4171,
		"nome" : "Pontão",
		"codigo_ibge" : 4314779,
		"sigla" : "RS"
	},
	{
		"id" : 4612,
		"nome" : "Ponte Alta",
		"codigo_ibge" : 4213302,
		"sigla" : "SC"
	},
	{
		"id" : 5527,
		"nome" : "Ponte Alta do Bom Jesus",
		"codigo_ibge" : 1717800,
		"sigla" : "TO"
	},
	{
		"id" : 4613,
		"nome" : "Ponte Alta do Norte",
		"codigo_ibge" : 4213351,
		"sigla" : "SC"
	},
	{
		"id" : 5528,
		"nome" : "Ponte Alta do Tocantins",
		"codigo_ibge" : 1717909,
		"sigla" : "TO"
	},
	{
		"id" : 1441,
		"nome" : "Ponte Branca",
		"codigo_ibge" : 5106703,
		"sigla" : "MT"
	},
	{
		"id" : 2173,
		"nome" : "Ponte Nova",
		"codigo_ibge" : 3152105,
		"sigla" : "MG"
	},
	{
		"id" : 4172,
		"nome" : "Ponte Preta",
		"codigo_ibge" : 4314787,
		"sigla" : "RS"
	},
	{
		"id" : 4614,
		"nome" : "Ponte Serrada",
		"codigo_ibge" : 4213401,
		"sigla" : "SC"
	},
	{
		"id" : 1442,
		"nome" : "Pontes e Lacerda",
		"codigo_ibge" : 5106752,
		"sigla" : "MT"
	},
	{
		"id" : 5158,
		"nome" : "Pontes Gestal",
		"codigo_ibge" : 3540309,
		"sigla" : "SP"
	},
	{
		"id" : 58,
		"nome" : "Ponto Belo",
		"codigo_ibge" : 3204252,
		"sigla" : "ES"
	},
	{
		"id" : 2174,
		"nome" : "Ponto Chique",
		"codigo_ibge" : 3152131,
		"sigla" : "MG"
	},
	{
		"id" : 2175,
		"nome" : "Ponto dos Volantes",
		"codigo_ibge" : 3152170,
		"sigla" : "MG"
	},
	{
		"id" : 590,
		"nome" : "Ponto Novo",
		"codigo_ibge" : 2925253,
		"sigla" : "BA"
	},
	{
		"id" : 5159,
		"nome" : "Populina",
		"codigo_ibge" : 3540408,
		"sigla" : "SP"
	},
	{
		"id" : 841,
		"nome" : "Poranga",
		"codigo_ibge" : 2311009,
		"sigla" : "CE"
	},
	{
		"id" : 5160,
		"nome" : "Porangaba",
		"codigo_ibge" : 3540507,
		"sigla" : "SP"
	},
	{
		"id" : 1071,
		"nome" : "Porangatu",
		"codigo_ibge" : 5218003,
		"sigla" : "GO"
	},
	{
		"id" : 3648,
		"nome" : "Porciúncula",
		"codigo_ibge" : 3304102,
		"sigla" : "RJ"
	},
	{
		"id" : 3062,
		"nome" : "Porecatu",
		"codigo_ibge" : 4120002,
		"sigla" : "PR"
	},
	{
		"id" : 3791,
		"nome" : "Portalegre",
		"codigo_ibge" : 2410207,
		"sigla" : "RN"
	},
	{
		"id" : 4173,
		"nome" : "Portão",
		"codigo_ibge" : 4314803,
		"sigla" : "RS"
	},
	{
		"id" : 1072,
		"nome" : "Porteirão",
		"codigo_ibge" : 5218052,
		"sigla" : "GO"
	},
	{
		"id" : 842,
		"nome" : "Porteiras",
		"codigo_ibge" : 2311108,
		"sigla" : "CE"
	},
	{
		"id" : 2176,
		"nome" : "Porteirinha",
		"codigo_ibge" : 3152204,
		"sigla" : "MG"
	},
	{
		"id" : 2512,
		"nome" : "Portel",
		"codigo_ibge" : 1505809,
		"sigla" : "PA"
	},
	{
		"id" : 1073,
		"nome" : "Portelândia",
		"codigo_ibge" : 5218102,
		"sigla" : "GO"
	},
	{
		"id" : 3531,
		"nome" : "Porto",
		"codigo_ibge" : 2208502,
		"sigla" : "PI"
	},
	{
		"id" : 92,
		"nome" : "Porto Acre",
		"codigo_ibge" : 1200807,
		"sigla" : "AC"
	},
	{
		"id" : 4174,
		"nome" : "Porto Alegre",
		"codigo_ibge" : 4314902,
		"sigla" : "RS"
	},
	{
		"id" : 1443,
		"nome" : "Porto Alegre do Norte",
		"codigo_ibge" : 5106778,
		"sigla" : "MT"
	},
	{
		"id" : 3532,
		"nome" : "Porto Alegre do Piauí",
		"codigo_ibge" : 2208551,
		"sigla" : "PI"
	},
	{
		"id" : 5529,
		"nome" : "Porto Alegre do Tocantins",
		"codigo_ibge" : 1718006,
		"sigla" : "TO"
	},
	{
		"id" : 3063,
		"nome" : "Porto Amazonas",
		"codigo_ibge" : 4120101,
		"sigla" : "PR"
	},
	{
		"id" : 3064,
		"nome" : "Porto Barreiro",
		"codigo_ibge" : 4120150,
		"sigla" : "PR"
	},
	{
		"id" : 4615,
		"nome" : "Porto Belo",
		"codigo_ibge" : 4213500,
		"sigla" : "SC"
	},
	{
		"id" : 179,
		"nome" : "Porto Calvo",
		"codigo_ibge" : 2707305,
		"sigla" : "AL"
	},
	{
		"id" : 5405,
		"nome" : "Porto da Folha",
		"codigo_ibge" : 2805604,
		"sigla" : "SE"
	},
	{
		"id" : 2513,
		"nome" : "Porto de Moz",
		"codigo_ibge" : 1505908,
		"sigla" : "PA"
	},
	{
		"id" : 180,
		"nome" : "Porto de Pedras",
		"codigo_ibge" : 2707404,
		"sigla" : "AL"
	},
	{
		"id" : 3792,
		"nome" : "Porto do Mangue",
		"codigo_ibge" : 2410256,
		"sigla" : "RN"
	},
	{
		"id" : 1444,
		"nome" : "Porto dos Gaúchos",
		"codigo_ibge" : 5106802,
		"sigla" : "MT"
	},
	{
		"id" : 1445,
		"nome" : "Porto Esperidião",
		"codigo_ibge" : 5106828,
		"sigla" : "MT"
	},
	{
		"id" : 1446,
		"nome" : "Porto Estrela",
		"codigo_ibge" : 5106851,
		"sigla" : "MT"
	},
	{
		"id" : 5161,
		"nome" : "Porto Feliz",
		"codigo_ibge" : 3540606,
		"sigla" : "SP"
	},
	{
		"id" : 5162,
		"nome" : "Porto Ferreira",
		"codigo_ibge" : 3540705,
		"sigla" : "SP"
	},
	{
		"id" : 2177,
		"nome" : "Porto Firme",
		"codigo_ibge" : 3152303,
		"sigla" : "MG"
	},
	{
		"id" : 1276,
		"nome" : "Porto Franco",
		"codigo_ibge" : 2109007,
		"sigla" : "MA"
	},
	{
		"id" : 213,
		"nome" : "Porto Grande",
		"codigo_ibge" : 1600535,
		"sigla" : "AP"
	},
	{
		"id" : 4175,
		"nome" : "Porto Lucena",
		"codigo_ibge" : 4315008,
		"sigla" : "RS"
	},
	{
		"id" : 4176,
		"nome" : "Porto Mauá",
		"codigo_ibge" : 4315057,
		"sigla" : "RS"
	},
	{
		"id" : 1548,
		"nome" : "Porto Murtinho",
		"codigo_ibge" : 5006903,
		"sigla" : "MS"
	},
	{
		"id" : 5530,
		"nome" : "Porto Nacional",
		"codigo_ibge" : 1718204,
		"sigla" : "TO"
	},
	{
		"id" : 3649,
		"nome" : "Porto Real",
		"codigo_ibge" : 3304110,
		"sigla" : "RJ"
	},
	{
		"id" : 181,
		"nome" : "Porto Real do Colégio",
		"codigo_ibge" : 2707503,
		"sigla" : "AL"
	},
	{
		"id" : 3065,
		"nome" : "Porto Rico",
		"codigo_ibge" : 4120200,
		"sigla" : "PR"
	},
	{
		"id" : 1277,
		"nome" : "Porto Rico do Maranhão",
		"codigo_ibge" : 2109056,
		"sigla" : "MA"
	},
	{
		"id" : 591,
		"nome" : "Porto Seguro",
		"codigo_ibge" : 2925303,
		"sigla" : "BA"
	},
	{
		"id" : 4616,
		"nome" : "Porto União",
		"codigo_ibge" : 4213609,
		"sigla" : "SC"
	},
	{
		"id" : 4382,
		"nome" : "Porto Velho",
		"codigo_ibge" : 1100205,
		"sigla" : "RO"
	},
	{
		"id" : 4177,
		"nome" : "Porto Vera Cruz",
		"codigo_ibge" : 4315073,
		"sigla" : "RS"
	},
	{
		"id" : 3066,
		"nome" : "Porto Vitória",
		"codigo_ibge" : 4120309,
		"sigla" : "PR"
	},
	{
		"id" : 93,
		"nome" : "Porto Walter",
		"codigo_ibge" : 1200393,
		"sigla" : "AC"
	},
	{
		"id" : 4178,
		"nome" : "Porto Xavier",
		"codigo_ibge" : 4315107,
		"sigla" : "RS"
	},
	{
		"id" : 1074,
		"nome" : "Posse",
		"codigo_ibge" : 5218300,
		"sigla" : "GO"
	},
	{
		"id" : 2178,
		"nome" : "Poté",
		"codigo_ibge" : 3152402,
		"sigla" : "MG"
	},
	{
		"id" : 843,
		"nome" : "Potengi",
		"codigo_ibge" : 2311207,
		"sigla" : "CE"
	},
	{
		"id" : 5163,
		"nome" : "Potim",
		"codigo_ibge" : 3540754,
		"sigla" : "SP"
	},
	{
		"id" : 592,
		"nome" : "Potiraguá",
		"codigo_ibge" : 2925402,
		"sigla" : "BA"
	},
	{
		"id" : 5164,
		"nome" : "Potirendaba",
		"codigo_ibge" : 3540804,
		"sigla" : "SP"
	},
	{
		"id" : 844,
		"nome" : "Potiretama",
		"codigo_ibge" : 2311231,
		"sigla" : "CE"
	},
	{
		"id" : 2179,
		"nome" : "Pouso Alegre",
		"codigo_ibge" : 3152501,
		"sigla" : "MG"
	},
	{
		"id" : 2180,
		"nome" : "Pouso Alto",
		"codigo_ibge" : 3152600,
		"sigla" : "MG"
	},
	{
		"id" : 4179,
		"nome" : "Pouso Novo",
		"codigo_ibge" : 4315131,
		"sigla" : "RS"
	},
	{
		"id" : 4617,
		"nome" : "Pouso Redondo",
		"codigo_ibge" : 4213708,
		"sigla" : "SC"
	},
	{
		"id" : 1447,
		"nome" : "Poxoréu",
		"codigo_ibge" : 5107008,
		"sigla" : "MT"
	},
	{
		"id" : 5165,
		"nome" : "Pracinha",
		"codigo_ibge" : 3540853,
		"sigla" : "SP"
	},
	{
		"id" : 214,
		"nome" : "Pracuúba",
		"codigo_ibge" : 1600550,
		"sigla" : "AP"
	},
	{
		"id" : 593,
		"nome" : "Prado",
		"codigo_ibge" : 2925501,
		"sigla" : "BA"
	},
	{
		"id" : 3067,
		"nome" : "Prado Ferreira",
		"codigo_ibge" : 4120333,
		"sigla" : "PR"
	},
	{
		"id" : 5166,
		"nome" : "Pradópolis",
		"codigo_ibge" : 3540903,
		"sigla" : "SP"
	},
	{
		"id" : 2181,
		"nome" : "Prados",
		"codigo_ibge" : 3152709,
		"sigla" : "MG"
	},
	{
		"id" : 4618,
		"nome" : "Praia Grande",
		"codigo_ibge" : 4213807,
		"sigla" : "SC"
	},
	{
		"id" : 5167,
		"nome" : "Praia Grande",
		"codigo_ibge" : 3541000,
		"sigla" : "SP"
	},
	{
		"id" : 5531,
		"nome" : "Praia Norte",
		"codigo_ibge" : 1718303,
		"sigla" : "TO"
	},
	{
		"id" : 2514,
		"nome" : "Prainha",
		"codigo_ibge" : 1506005,
		"sigla" : "PA"
	},
	{
		"id" : 3068,
		"nome" : "Pranchita",
		"codigo_ibge" : 4120358,
		"sigla" : "PR"
	},
	{
		"id" : 2182,
		"nome" : "Prata",
		"codigo_ibge" : 3152808,
		"sigla" : "MG"
	},
	{
		"id" : 2712,
		"nome" : "Prata",
		"codigo_ibge" : 2512200,
		"sigla" : "PB"
	},
	{
		"id" : 3533,
		"nome" : "Prata do Piauí",
		"codigo_ibge" : 2208601,
		"sigla" : "PI"
	},
	{
		"id" : 5168,
		"nome" : "Pratânia",
		"codigo_ibge" : 3541059,
		"sigla" : "SP"
	},
	{
		"id" : 2183,
		"nome" : "Pratápolis",
		"codigo_ibge" : 3152907,
		"sigla" : "MG"
	},
	{
		"id" : 2184,
		"nome" : "Pratinha",
		"codigo_ibge" : 3153004,
		"sigla" : "MG"
	},
	{
		"id" : 5169,
		"nome" : "Presidente Alves",
		"codigo_ibge" : 3541109,
		"sigla" : "SP"
	},
	{
		"id" : 5170,
		"nome" : "Presidente Bernardes",
		"codigo_ibge" : 3541208,
		"sigla" : "SP"
	},
	{
		"id" : 2185,
		"nome" : "Presidente Bernardes",
		"codigo_ibge" : 3153103,
		"sigla" : "MG"
	},
	{
		"id" : 4619,
		"nome" : "Presidente Castello Branco",
		"codigo_ibge" : 4213906,
		"sigla" : "SC"
	},
	{
		"id" : 3069,
		"nome" : "Presidente Castelo Branco",
		"codigo_ibge" : 4120408,
		"sigla" : "PR"
	},
	{
		"id" : 594,
		"nome" : "Presidente Dutra",
		"codigo_ibge" : 2925600,
		"sigla" : "BA"
	},
	{
		"id" : 1278,
		"nome" : "Presidente Dutra",
		"codigo_ibge" : 2109106,
		"sigla" : "MA"
	},
	{
		"id" : 5171,
		"nome" : "Presidente Epitácio",
		"codigo_ibge" : 3541307,
		"sigla" : "SP"
	},
	{
		"id" : 266,
		"nome" : "Presidente Figueiredo",
		"codigo_ibge" : 1303536,
		"sigla" : "AM"
	},
	{
		"id" : 4620,
		"nome" : "Presidente Getúlio",
		"codigo_ibge" : 4214003,
		"sigla" : "SC"
	},
	{
		"id" : 595,
		"nome" : "Presidente Jânio Quadros",
		"codigo_ibge" : 2925709,
		"sigla" : "BA"
	},
	{
		"id" : 1279,
		"nome" : "Presidente Juscelino",
		"codigo_ibge" : 2109205,
		"sigla" : "MA"
	},
	{
		"id" : 2186,
		"nome" : "Presidente Juscelino",
		"codigo_ibge" : 3153202,
		"sigla" : "MG"
	},
	{
		"id" : 59,
		"nome" : "Presidente Kennedy",
		"codigo_ibge" : 3204302,
		"sigla" : "ES"
	},
	{
		"id" : 5532,
		"nome" : "Presidente Kennedy",
		"codigo_ibge" : 1718402,
		"sigla" : "TO"
	},
	{
		"id" : 2187,
		"nome" : "Presidente Kubitschek",
		"codigo_ibge" : 3153301,
		"sigla" : "MG"
	},
	{
		"id" : 4180,
		"nome" : "Presidente Lucena",
		"codigo_ibge" : 4315149,
		"sigla" : "RS"
	},
	{
		"id" : 4383,
		"nome" : "Presidente Médici",
		"codigo_ibge" : 1100254,
		"sigla" : "RO"
	},
	{
		"id" : 1280,
		"nome" : "Presidente Médici",
		"codigo_ibge" : 2109239,
		"sigla" : "MA"
	},
	{
		"id" : 4621,
		"nome" : "Presidente Nereu",
		"codigo_ibge" : 4214102,
		"sigla" : "SC"
	},
	{
		"id" : 2188,
		"nome" : "Presidente Olegário",
		"codigo_ibge" : 3153400,
		"sigla" : "MG"
	},
	{
		"id" : 5172,
		"nome" : "Presidente Prudente",
		"codigo_ibge" : 3541406,
		"sigla" : "SP"
	},
	{
		"id" : 1281,
		"nome" : "Presidente Sarney",
		"codigo_ibge" : 2109270,
		"sigla" : "MA"
	},
	{
		"id" : 596,
		"nome" : "Presidente Tancredo Neves",
		"codigo_ibge" : 2925758,
		"sigla" : "BA"
	},
	{
		"id" : 1282,
		"nome" : "Presidente Vargas",
		"codigo_ibge" : 2109304,
		"sigla" : "MA"
	},
	{
		"id" : 5173,
		"nome" : "Presidente Venceslau",
		"codigo_ibge" : 3541505,
		"sigla" : "SP"
	},
	{
		"id" : 2515,
		"nome" : "Primavera",
		"codigo_ibge" : 1506104,
		"sigla" : "PA"
	},
	{
		"id" : 3312,
		"nome" : "Primavera",
		"codigo_ibge" : 2611408,
		"sigla" : "PE"
	},
	{
		"id" : 4384,
		"nome" : "Primavera de Rondônia",
		"codigo_ibge" : 1101476,
		"sigla" : "RO"
	},
	{
		"id" : 1448,
		"nome" : "Primavera do Leste",
		"codigo_ibge" : 5107040,
		"sigla" : "MT"
	},
	{
		"id" : 1283,
		"nome" : "Primeira Cruz",
		"codigo_ibge" : 2109403,
		"sigla" : "MA"
	},
	{
		"id" : 3070,
		"nome" : "Primeiro de Maio",
		"codigo_ibge" : 4120507,
		"sigla" : "PR"
	},
	{
		"id" : 4622,
		"nome" : "Princesa",
		"codigo_ibge" : 4214151,
		"sigla" : "SC"
	},
	{
		"id" : 2713,
		"nome" : "Princesa Isabel",
		"codigo_ibge" : 2512309,
		"sigla" : "PB"
	},
	{
		"id" : 1075,
		"nome" : "Professor Jamil",
		"codigo_ibge" : 5218391,
		"sigla" : "GO"
	},
	{
		"id" : 4181,
		"nome" : "Progresso",
		"codigo_ibge" : 4315156,
		"sigla" : "RS"
	},
	{
		"id" : 5174,
		"nome" : "Promissão",
		"codigo_ibge" : 3541604,
		"sigla" : "SP"
	},
	{
		"id" : 5406,
		"nome" : "Propriá",
		"codigo_ibge" : 2805703,
		"sigla" : "SE"
	},
	{
		"id" : 4182,
		"nome" : "Protásio Alves",
		"codigo_ibge" : 4315172,
		"sigla" : "RS"
	},
	{
		"id" : 2189,
		"nome" : "Prudente de Morais",
		"codigo_ibge" : 3153608,
		"sigla" : "MG"
	},
	{
		"id" : 3071,
		"nome" : "Prudentópolis",
		"codigo_ibge" : 4120606,
		"sigla" : "PR"
	},
	{
		"id" : 5533,
		"nome" : "Pugmil",
		"codigo_ibge" : 1718451,
		"sigla" : "TO"
	},
	{
		"id" : 3794,
		"nome" : "Pureza",
		"codigo_ibge" : 2410405,
		"sigla" : "RN"
	},
	{
		"id" : 4183,
		"nome" : "Putinga",
		"codigo_ibge" : 4315206,
		"sigla" : "RS"
	},
	{
		"id" : 2714,
		"nome" : "Puxinanã",
		"codigo_ibge" : 2512408,
		"sigla" : "PB"
	},
	{
		"id" : 5175,
		"nome" : "Quadra",
		"codigo_ibge" : 3541653,
		"sigla" : "SP"
	},
	{
		"id" : 4184,
		"nome" : "Quaraí",
		"codigo_ibge" : 4315305,
		"sigla" : "RS"
	},
	{
		"id" : 2190,
		"nome" : "Quartel Geral",
		"codigo_ibge" : 3153707,
		"sigla" : "MG"
	},
	{
		"id" : 3072,
		"nome" : "Quarto Centenário",
		"codigo_ibge" : 4120655,
		"sigla" : "PR"
	},
	{
		"id" : 5176,
		"nome" : "Quatá",
		"codigo_ibge" : 3541703,
		"sigla" : "SP"
	},
	{
		"id" : 3073,
		"nome" : "Quatiguá",
		"codigo_ibge" : 4120705,
		"sigla" : "PR"
	},
	{
		"id" : 2516,
		"nome" : "Quatipuru",
		"codigo_ibge" : 1506112,
		"sigla" : "PA"
	},
	{
		"id" : 3650,
		"nome" : "Quatis",
		"codigo_ibge" : 3304128,
		"sigla" : "RJ"
	},
	{
		"id" : 3074,
		"nome" : "Quatro Barras",
		"codigo_ibge" : 4120804,
		"sigla" : "PR"
	},
	{
		"id" : 4185,
		"nome" : "Quatro Irmãos",
		"codigo_ibge" : 4315313,
		"sigla" : "RS"
	},
	{
		"id" : 3075,
		"nome" : "Quatro Pontes",
		"codigo_ibge" : 4120853,
		"sigla" : "PR"
	},
	{
		"id" : 182,
		"nome" : "Quebrangulo",
		"codigo_ibge" : 2707602,
		"sigla" : "AL"
	},
	{
		"id" : 3076,
		"nome" : "Quedas do Iguaçu",
		"codigo_ibge" : 4120903,
		"sigla" : "PR"
	},
	{
		"id" : 3534,
		"nome" : "Queimada Nova",
		"codigo_ibge" : 2208650,
		"sigla" : "PI"
	},
	{
		"id" : 2715,
		"nome" : "Queimadas",
		"codigo_ibge" : 2512507,
		"sigla" : "PB"
	},
	{
		"id" : 597,
		"nome" : "Queimadas",
		"codigo_ibge" : 2925808,
		"sigla" : "BA"
	},
	{
		"id" : 3651,
		"nome" : "Queimados",
		"codigo_ibge" : 3304144,
		"sigla" : "RJ"
	},
	{
		"id" : 5177,
		"nome" : "Queiroz",
		"codigo_ibge" : 3541802,
		"sigla" : "SP"
	},
	{
		"id" : 5178,
		"nome" : "Queluz",
		"codigo_ibge" : 3541901,
		"sigla" : "SP"
	},
	{
		"id" : 2191,
		"nome" : "Queluzito",
		"codigo_ibge" : 3153806,
		"sigla" : "MG"
	},
	{
		"id" : 1449,
		"nome" : "Querência",
		"codigo_ibge" : 5107065,
		"sigla" : "MT"
	},
	{
		"id" : 3077,
		"nome" : "Querência do Norte",
		"codigo_ibge" : 4121000,
		"sigla" : "PR"
	},
	{
		"id" : 4186,
		"nome" : "Quevedos",
		"codigo_ibge" : 4315321,
		"sigla" : "RS"
	},
	{
		"id" : 598,
		"nome" : "Quijingue",
		"codigo_ibge" : 2925907,
		"sigla" : "BA"
	},
	{
		"id" : 4623,
		"nome" : "Quilombo",
		"codigo_ibge" : 4214201,
		"sigla" : "SC"
	},
	{
		"id" : 3078,
		"nome" : "Quinta do Sol",
		"codigo_ibge" : 4121109,
		"sigla" : "PR"
	},
	{
		"id" : 5179,
		"nome" : "Quintana",
		"codigo_ibge" : 3542008,
		"sigla" : "SP"
	},
	{
		"id" : 4187,
		"nome" : "Quinze de Novembro",
		"codigo_ibge" : 4315354,
		"sigla" : "RS"
	},
	{
		"id" : 3313,
		"nome" : "Quipapá",
		"codigo_ibge" : 2611507,
		"sigla" : "PE"
	},
	{
		"id" : 1076,
		"nome" : "Quirinópolis",
		"codigo_ibge" : 5218508,
		"sigla" : "GO"
	},
	{
		"id" : 3652,
		"nome" : "Quissamã",
		"codigo_ibge" : 3304151,
		"sigla" : "RJ"
	},
	{
		"id" : 3079,
		"nome" : "Quitandinha",
		"codigo_ibge" : 4121208,
		"sigla" : "PR"
	},
	{
		"id" : 845,
		"nome" : "Quiterianópolis",
		"codigo_ibge" : 2311264,
		"sigla" : "CE"
	},
	{
		"id" : 2716,
		"nome" : "Quixabá",
		"codigo_ibge" : 2512606,
		"sigla" : "PB"
	},
	{
		"id" : 3314,
		"nome" : "Quixaba",
		"codigo_ibge" : 2611533,
		"sigla" : "PE"
	},
	{
		"id" : 599,
		"nome" : "Quixabeira",
		"codigo_ibge" : 2925931,
		"sigla" : "BA"
	},
	{
		"id" : 846,
		"nome" : "Quixadá",
		"codigo_ibge" : 2311306,
		"sigla" : "CE"
	},
	{
		"id" : 847,
		"nome" : "Quixelô",
		"codigo_ibge" : 2311355,
		"sigla" : "CE"
	},
	{
		"id" : 848,
		"nome" : "Quixeramobim",
		"codigo_ibge" : 2311405,
		"sigla" : "CE"
	},
	{
		"id" : 849,
		"nome" : "Quixeré",
		"codigo_ibge" : 2311504,
		"sigla" : "CE"
	},
	{
		"id" : 3795,
		"nome" : "Rafael Fernandes",
		"codigo_ibge" : 2410504,
		"sigla" : "RN"
	},
	{
		"id" : 3796,
		"nome" : "Rafael Godeiro",
		"codigo_ibge" : 2410603,
		"sigla" : "RN"
	},
	{
		"id" : 600,
		"nome" : "Rafael Jambeiro",
		"codigo_ibge" : 2925956,
		"sigla" : "BA"
	},
	{
		"id" : 5180,
		"nome" : "Rafard",
		"codigo_ibge" : 3542107,
		"sigla" : "SP"
	},
	{
		"id" : 3080,
		"nome" : "Ramilândia",
		"codigo_ibge" : 4121257,
		"sigla" : "PR"
	},
	{
		"id" : 5181,
		"nome" : "Rancharia",
		"codigo_ibge" : 3542206,
		"sigla" : "SP"
	},
	{
		"id" : 3081,
		"nome" : "Rancho Alegre",
		"codigo_ibge" : 4121307,
		"sigla" : "PR"
	},
	{
		"id" : 3082,
		"nome" : "Rancho Alegre d Oeste",
		"codigo_ibge" : 4121356,
		"sigla" : "PR"
	},
	{
		"id" : 4624,
		"nome" : "Rancho Queimado",
		"codigo_ibge" : 4214300,
		"sigla" : "SC"
	},
	{
		"id" : 1284,
		"nome" : "Raposa",
		"codigo_ibge" : 2109452,
		"sigla" : "MA"
	},
	{
		"id" : 2192,
		"nome" : "Raposos",
		"codigo_ibge" : 3153905,
		"sigla" : "MG"
	},
	{
		"id" : 2193,
		"nome" : "Raul Soares",
		"codigo_ibge" : 3154002,
		"sigla" : "MG"
	},
	{
		"id" : 3083,
		"nome" : "Realeza",
		"codigo_ibge" : 4121406,
		"sigla" : "PR"
	},
	{
		"id" : 3084,
		"nome" : "Rebouças",
		"codigo_ibge" : 4121505,
		"sigla" : "PR"
	},
	{
		"id" : 3315,
		"nome" : "Recife",
		"codigo_ibge" : 2611606,
		"sigla" : "PE"
	},
	{
		"id" : 2194,
		"nome" : "Recreio",
		"codigo_ibge" : 3154101,
		"sigla" : "MG"
	},
	{
		"id" : 5534,
		"nome" : "Recursolândia",
		"codigo_ibge" : 1718501,
		"sigla" : "TO"
	},
	{
		"id" : 850,
		"nome" : "Redenção",
		"codigo_ibge" : 2311603,
		"sigla" : "CE"
	},
	{
		"id" : 2517,
		"nome" : "Redenção",
		"codigo_ibge" : 1506138,
		"sigla" : "PA"
	},
	{
		"id" : 5182,
		"nome" : "Redenção da Serra",
		"codigo_ibge" : 3542305,
		"sigla" : "SP"
	},
	{
		"id" : 3535,
		"nome" : "Redenção do Gurguéia",
		"codigo_ibge" : 2208700,
		"sigla" : "PI"
	},
	{
		"id" : 4188,
		"nome" : "Redentora",
		"codigo_ibge" : 4315404,
		"sigla" : "RS"
	},
	{
		"id" : 2195,
		"nome" : "Reduto",
		"codigo_ibge" : 3154150,
		"sigla" : "MG"
	},
	{
		"id" : 3536,
		"nome" : "Regeneração",
		"codigo_ibge" : 2208809,
		"sigla" : "PI"
	},
	{
		"id" : 5183,
		"nome" : "Regente Feijó",
		"codigo_ibge" : 3542404,
		"sigla" : "SP"
	},
	{
		"id" : 5184,
		"nome" : "Reginópolis",
		"codigo_ibge" : 3542503,
		"sigla" : "SP"
	},
	{
		"id" : 5185,
		"nome" : "Registro",
		"codigo_ibge" : 3542602,
		"sigla" : "SP"
	},
	{
		"id" : 4189,
		"nome" : "Relvado",
		"codigo_ibge" : 4315453,
		"sigla" : "RS"
	},
	{
		"id" : 601,
		"nome" : "Remanso",
		"codigo_ibge" : 2926004,
		"sigla" : "BA"
	},
	{
		"id" : 2717,
		"nome" : "Remígio",
		"codigo_ibge" : 2512705,
		"sigla" : "PB"
	},
	{
		"id" : 3085,
		"nome" : "Renascença",
		"codigo_ibge" : 4121604,
		"sigla" : "PR"
	},
	{
		"id" : 851,
		"nome" : "Reriutaba",
		"codigo_ibge" : 2311702,
		"sigla" : "CE"
	},
	{
		"id" : 3653,
		"nome" : "Resende",
		"codigo_ibge" : 3304201,
		"sigla" : "RJ"
	},
	{
		"id" : 2196,
		"nome" : "Resende Costa",
		"codigo_ibge" : 3154200,
		"sigla" : "MG"
	},
	{
		"id" : 3086,
		"nome" : "Reserva",
		"codigo_ibge" : 4121703,
		"sigla" : "PR"
	},
	{
		"id" : 1450,
		"nome" : "Reserva do Cabaçal",
		"codigo_ibge" : 5107156,
		"sigla" : "MT"
	},
	{
		"id" : 3087,
		"nome" : "Reserva do Iguaçu",
		"codigo_ibge" : 4121752,
		"sigla" : "PR"
	},
	{
		"id" : 2197,
		"nome" : "Resplendor",
		"codigo_ibge" : 3154309,
		"sigla" : "MG"
	},
	{
		"id" : 2198,
		"nome" : "Ressaquinha",
		"codigo_ibge" : 3154408,
		"sigla" : "MG"
	},
	{
		"id" : 5186,
		"nome" : "Restinga",
		"codigo_ibge" : 3542701,
		"sigla" : "SP"
	},
	{
		"id" : 4190,
		"nome" : "Restinga Sêca",
		"codigo_ibge" : 4315503,
		"sigla" : "RS"
	},
	{
		"id" : 602,
		"nome" : "Retirolândia",
		"codigo_ibge" : 2926103,
		"sigla" : "BA"
	},
	{
		"id" : 1285,
		"nome" : "Riachão",
		"codigo_ibge" : 2109502,
		"sigla" : "MA"
	},
	{
		"id" : 2718,
		"nome" : "Riachão",
		"codigo_ibge" : 2512747,
		"sigla" : "PB"
	},
	{
		"id" : 603,
		"nome" : "Riachão das Neves",
		"codigo_ibge" : 2926202,
		"sigla" : "BA"
	},
	{
		"id" : 2719,
		"nome" : "Riachão do Bacamarte",
		"codigo_ibge" : 2512754,
		"sigla" : "PB"
	},
	{
		"id" : 5407,
		"nome" : "Riachão do Dantas",
		"codigo_ibge" : 2805802,
		"sigla" : "SE"
	},
	{
		"id" : 604,
		"nome" : "Riachão do Jacuípe",
		"codigo_ibge" : 2926301,
		"sigla" : "BA"
	},
	{
		"id" : 2720,
		"nome" : "Riachão do Poço",
		"codigo_ibge" : 2512762,
		"sigla" : "PB"
	},
	{
		"id" : 2199,
		"nome" : "Riachinho",
		"codigo_ibge" : 3154457,
		"sigla" : "MG"
	},
	{
		"id" : 5535,
		"nome" : "Riachinho",
		"codigo_ibge" : 1718550,
		"sigla" : "TO"
	},
	{
		"id" : 3797,
		"nome" : "Riacho da Cruz",
		"codigo_ibge" : 2410702,
		"sigla" : "RN"
	},
	{
		"id" : 3316,
		"nome" : "Riacho das Almas",
		"codigo_ibge" : 2611705,
		"sigla" : "PE"
	},
	{
		"id" : 3798,
		"nome" : "Riacho de Santana",
		"codigo_ibge" : 2410801,
		"sigla" : "RN"
	},
	{
		"id" : 605,
		"nome" : "Riacho de Santana",
		"codigo_ibge" : 2926400,
		"sigla" : "BA"
	},
	{
		"id" : 2721,
		"nome" : "Riacho de Santo Antônio",
		"codigo_ibge" : 2512788,
		"sigla" : "PB"
	},
	{
		"id" : 2722,
		"nome" : "Riacho dos Cavalos",
		"codigo_ibge" : 2512804,
		"sigla" : "PB"
	},
	{
		"id" : 2200,
		"nome" : "Riacho dos Machados",
		"codigo_ibge" : 3154507,
		"sigla" : "MG"
	},
	{
		"id" : 3537,
		"nome" : "Riacho Frio",
		"codigo_ibge" : 2208858,
		"sigla" : "PI"
	},
	{
		"id" : 3799,
		"nome" : "Riachuelo",
		"codigo_ibge" : 2410900,
		"sigla" : "RN"
	},
	{
		"id" : 5408,
		"nome" : "Riachuelo",
		"codigo_ibge" : 2805901,
		"sigla" : "SE"
	},
	{
		"id" : 1077,
		"nome" : "Rialma",
		"codigo_ibge" : 5218607,
		"sigla" : "GO"
	},
	{
		"id" : 1078,
		"nome" : "Rianápolis",
		"codigo_ibge" : 5218706,
		"sigla" : "GO"
	},
	{
		"id" : 1286,
		"nome" : "Ribamar Fiquene",
		"codigo_ibge" : 2109551,
		"sigla" : "MA"
	},
	{
		"id" : 1549,
		"nome" : "Ribas do Rio Pardo",
		"codigo_ibge" : 5007109,
		"sigla" : "MS"
	},
	{
		"id" : 5187,
		"nome" : "Ribeira",
		"codigo_ibge" : 3542800,
		"sigla" : "SP"
	},
	{
		"id" : 606,
		"nome" : "Ribeira do Amparo",
		"codigo_ibge" : 2926509,
		"sigla" : "BA"
	},
	{
		"id" : 3538,
		"nome" : "Ribeira do Piauí",
		"codigo_ibge" : 2208874,
		"sigla" : "PI"
	},
	{
		"id" : 607,
		"nome" : "Ribeira do Pombal",
		"codigo_ibge" : 2926608,
		"sigla" : "BA"
	},
	{
		"id" : 3317,
		"nome" : "Ribeirão",
		"codigo_ibge" : 2611804,
		"sigla" : "PE"
	},
	{
		"id" : 5188,
		"nome" : "Ribeirão Bonito",
		"codigo_ibge" : 3542909,
		"sigla" : "SP"
	},
	{
		"id" : 5189,
		"nome" : "Ribeirão Branco",
		"codigo_ibge" : 3543006,
		"sigla" : "SP"
	},
	{
		"id" : 1451,
		"nome" : "Ribeirão Cascalheira",
		"codigo_ibge" : 5107180,
		"sigla" : "MT"
	},
	{
		"id" : 3088,
		"nome" : "Ribeirão Claro",
		"codigo_ibge" : 4121802,
		"sigla" : "PR"
	},
	{
		"id" : 5190,
		"nome" : "Ribeirão Corrente",
		"codigo_ibge" : 3543105,
		"sigla" : "SP"
	},
	{
		"id" : 2201,
		"nome" : "Ribeirão das Neves",
		"codigo_ibge" : 3154606,
		"sigla" : "MG"
	},
	{
		"id" : 608,
		"nome" : "Ribeirão do Largo",
		"codigo_ibge" : 2926657,
		"sigla" : "BA"
	},
	{
		"id" : 3089,
		"nome" : "Ribeirão do Pinhal",
		"codigo_ibge" : 4121901,
		"sigla" : "PR"
	},
	{
		"id" : 5191,
		"nome" : "Ribeirão do Sul",
		"codigo_ibge" : 3543204,
		"sigla" : "SP"
	},
	{
		"id" : 5192,
		"nome" : "Ribeirão dos Índios",
		"codigo_ibge" : 3543238,
		"sigla" : "SP"
	},
	{
		"id" : 5193,
		"nome" : "Ribeirão Grande",
		"codigo_ibge" : 3543253,
		"sigla" : "SP"
	},
	{
		"id" : 5194,
		"nome" : "Ribeirão Pires",
		"codigo_ibge" : 3543303,
		"sigla" : "SP"
	},
	{
		"id" : 5195,
		"nome" : "Ribeirão Preto",
		"codigo_ibge" : 3543402,
		"sigla" : "SP"
	},
	{
		"id" : 2202,
		"nome" : "Ribeirão Vermelho",
		"codigo_ibge" : 3154705,
		"sigla" : "MG"
	},
	{
		"id" : 1452,
		"nome" : "Ribeirãozinho",
		"codigo_ibge" : 5107198,
		"sigla" : "MT"
	},
	{
		"id" : 3539,
		"nome" : "Ribeiro Gonçalves",
		"codigo_ibge" : 2208908,
		"sigla" : "PI"
	},
	{
		"id" : 5409,
		"nome" : "Ribeirópolis",
		"codigo_ibge" : 2806008,
		"sigla" : "SE"
	},
	{
		"id" : 5196,
		"nome" : "Rifaina",
		"codigo_ibge" : 3543600,
		"sigla" : "SP"
	},
	{
		"id" : 5197,
		"nome" : "Rincão",
		"codigo_ibge" : 3543709,
		"sigla" : "SP"
	},
	{
		"id" : 5198,
		"nome" : "Rinópolis",
		"codigo_ibge" : 3543808,
		"sigla" : "SP"
	},
	{
		"id" : 2203,
		"nome" : "Rio Acima",
		"codigo_ibge" : 3154804,
		"sigla" : "MG"
	},
	{
		"id" : 3090,
		"nome" : "Rio Azul",
		"codigo_ibge" : 4122008,
		"sigla" : "PR"
	},
	{
		"id" : 60,
		"nome" : "Rio Bananal",
		"codigo_ibge" : 3204351,
		"sigla" : "ES"
	},
	{
		"id" : 3091,
		"nome" : "Rio Bom",
		"codigo_ibge" : 4122107,
		"sigla" : "PR"
	},
	{
		"id" : 3654,
		"nome" : "Rio Bonito",
		"codigo_ibge" : 3304300,
		"sigla" : "RJ"
	},
	{
		"id" : 3092,
		"nome" : "Rio Bonito do Iguaçu",
		"codigo_ibge" : 4122156,
		"sigla" : "PR"
	},
	{
		"id" : 1453,
		"nome" : "Rio Branco",
		"codigo_ibge" : 5107206,
		"sigla" : "MT"
	},
	{
		"id" : 94,
		"nome" : "Rio Branco",
		"codigo_ibge" : 1200401,
		"sigla" : "AC"
	},
	{
		"id" : 3093,
		"nome" : "Rio Branco do Ivaí",
		"codigo_ibge" : 4122172,
		"sigla" : "PR"
	},
	{
		"id" : 3094,
		"nome" : "Rio Branco do Sul",
		"codigo_ibge" : 4122206,
		"sigla" : "PR"
	},
	{
		"id" : 1550,
		"nome" : "Rio Brilhante",
		"codigo_ibge" : 5007208,
		"sigla" : "MS"
	},
	{
		"id" : 2204,
		"nome" : "Rio Casca",
		"codigo_ibge" : 3154903,
		"sigla" : "MG"
	},
	{
		"id" : 3655,
		"nome" : "Rio Claro",
		"codigo_ibge" : 3304409,
		"sigla" : "RJ"
	},
	{
		"id" : 5199,
		"nome" : "Rio Claro",
		"codigo_ibge" : 3543907,
		"sigla" : "SP"
	},
	{
		"id" : 4385,
		"nome" : "Rio Crespo",
		"codigo_ibge" : 1100262,
		"sigla" : "RO"
	},
	{
		"id" : 5536,
		"nome" : "Rio da Conceição",
		"codigo_ibge" : 1718659,
		"sigla" : "TO"
	},
	{
		"id" : 4625,
		"nome" : "Rio das Antas",
		"codigo_ibge" : 4214409,
		"sigla" : "SC"
	},
	{
		"id" : 3656,
		"nome" : "Rio das Flores",
		"codigo_ibge" : 3304508,
		"sigla" : "RJ"
	},
	{
		"id" : 3657,
		"nome" : "Rio das Ostras",
		"codigo_ibge" : 3304524,
		"sigla" : "RJ"
	},
	{
		"id" : 5200,
		"nome" : "Rio das Pedras",
		"codigo_ibge" : 3544004,
		"sigla" : "SP"
	},
	{
		"id" : 609,
		"nome" : "Rio de Contas",
		"codigo_ibge" : 2926707,
		"sigla" : "BA"
	},
	{
		"id" : 3658,
		"nome" : "Rio de Janeiro",
		"codigo_ibge" : 3304557,
		"sigla" : "RJ"
	},
	{
		"id" : 610,
		"nome" : "Rio do Antônio",
		"codigo_ibge" : 2926806,
		"sigla" : "BA"
	},
	{
		"id" : 4626,
		"nome" : "Rio do Campo",
		"codigo_ibge" : 4214508,
		"sigla" : "SC"
	},
	{
		"id" : 3800,
		"nome" : "Rio do Fogo",
		"codigo_ibge" : 2408953,
		"sigla" : "RN"
	},
	{
		"id" : 4627,
		"nome" : "Rio do Oeste",
		"codigo_ibge" : 4214607,
		"sigla" : "SC"
	},
	{
		"id" : 611,
		"nome" : "Rio do Pires",
		"codigo_ibge" : 2926905,
		"sigla" : "BA"
	},
	{
		"id" : 2205,
		"nome" : "Rio do Prado",
		"codigo_ibge" : 3155108,
		"sigla" : "MG"
	},
	{
		"id" : 4628,
		"nome" : "Rio do Sul",
		"codigo_ibge" : 4214805,
		"sigla" : "SC"
	},
	{
		"id" : 2206,
		"nome" : "Rio Doce",
		"codigo_ibge" : 3155009,
		"sigla" : "MG"
	},
	{
		"id" : 5537,
		"nome" : "Rio dos Bois",
		"codigo_ibge" : 1718709,
		"sigla" : "TO"
	},
	{
		"id" : 4629,
		"nome" : "Rio dos Cedros",
		"codigo_ibge" : 4214706,
		"sigla" : "SC"
	},
	{
		"id" : 4191,
		"nome" : "Rio dos Índios",
		"codigo_ibge" : 4315552,
		"sigla" : "RS"
	},
	{
		"id" : 2207,
		"nome" : "Rio Espera",
		"codigo_ibge" : 3155207,
		"sigla" : "MG"
	},
	{
		"id" : 3318,
		"nome" : "Rio Formoso",
		"codigo_ibge" : 2611903,
		"sigla" : "PE"
	},
	{
		"id" : 4630,
		"nome" : "Rio Fortuna",
		"codigo_ibge" : 4214904,
		"sigla" : "SC"
	},
	{
		"id" : 4192,
		"nome" : "Rio Grande",
		"codigo_ibge" : 4315602,
		"sigla" : "RS"
	},
	{
		"id" : 5201,
		"nome" : "Rio Grande da Serra",
		"codigo_ibge" : 3544103,
		"sigla" : "SP"
	},
	{
		"id" : 3540,
		"nome" : "Rio Grande do Piauí",
		"codigo_ibge" : 2209005,
		"sigla" : "PI"
	},
	{
		"id" : 183,
		"nome" : "Rio Largo",
		"codigo_ibge" : 2707701,
		"sigla" : "AL"
	},
	{
		"id" : 2208,
		"nome" : "Rio Manso",
		"codigo_ibge" : 3155306,
		"sigla" : "MG"
	},
	{
		"id" : 2518,
		"nome" : "Rio Maria",
		"codigo_ibge" : 1506161,
		"sigla" : "PA"
	},
	{
		"id" : 4631,
		"nome" : "Rio Negrinho",
		"codigo_ibge" : 4215000,
		"sigla" : "SC"
	},
	{
		"id" : 1551,
		"nome" : "Rio Negro",
		"codigo_ibge" : 5007307,
		"sigla" : "MS"
	},
	{
		"id" : 3095,
		"nome" : "Rio Negro",
		"codigo_ibge" : 4122305,
		"sigla" : "PR"
	},
	{
		"id" : 2209,
		"nome" : "Rio Novo",
		"codigo_ibge" : 3155405,
		"sigla" : "MG"
	},
	{
		"id" : 61,
		"nome" : "Rio Novo do Sul",
		"codigo_ibge" : 3204401,
		"sigla" : "ES"
	},
	{
		"id" : 2210,
		"nome" : "Rio Paranaíba",
		"codigo_ibge" : 3155504,
		"sigla" : "MG"
	},
	{
		"id" : 4193,
		"nome" : "Rio Pardo",
		"codigo_ibge" : 4315701,
		"sigla" : "RS"
	},
	{
		"id" : 2211,
		"nome" : "Rio Pardo de Minas",
		"codigo_ibge" : 3155603,
		"sigla" : "MG"
	},
	{
		"id" : 2212,
		"nome" : "Rio Piracicaba",
		"codigo_ibge" : 3155702,
		"sigla" : "MG"
	},
	{
		"id" : 2213,
		"nome" : "Rio Pomba",
		"codigo_ibge" : 3155801,
		"sigla" : "MG"
	},
	{
		"id" : 2214,
		"nome" : "Rio Preto",
		"codigo_ibge" : 3155900,
		"sigla" : "MG"
	},
	{
		"id" : 267,
		"nome" : "Rio Preto da Eva",
		"codigo_ibge" : 1303569,
		"sigla" : "AM"
	},
	{
		"id" : 1079,
		"nome" : "Rio Quente",
		"codigo_ibge" : 5218789,
		"sigla" : "GO"
	},
	{
		"id" : 612,
		"nome" : "Rio Real",
		"codigo_ibge" : 2927002,
		"sigla" : "BA"
	},
	{
		"id" : 4632,
		"nome" : "Rio Rufino",
		"codigo_ibge" : 4215059,
		"sigla" : "SC"
	},
	{
		"id" : 5538,
		"nome" : "Rio Sono",
		"codigo_ibge" : 1718758,
		"sigla" : "TO"
	},
	{
		"id" : 2723,
		"nome" : "Rio Tinto",
		"codigo_ibge" : 2512903,
		"sigla" : "PB"
	},
	{
		"id" : 1080,
		"nome" : "Rio Verde",
		"codigo_ibge" : 5218805,
		"sigla" : "GO"
	},
	{
		"id" : 1552,
		"nome" : "Rio Verde de Mato Grosso",
		"codigo_ibge" : 5007406,
		"sigla" : "MS"
	},
	{
		"id" : 2215,
		"nome" : "Rio Vermelho",
		"codigo_ibge" : 3156007,
		"sigla" : "MG"
	},
	{
		"id" : 5202,
		"nome" : "Riolândia",
		"codigo_ibge" : 3544202,
		"sigla" : "SP"
	},
	{
		"id" : 4194,
		"nome" : "Riozinho",
		"codigo_ibge" : 4315750,
		"sigla" : "RS"
	},
	{
		"id" : 4633,
		"nome" : "Riqueza",
		"codigo_ibge" : 4215075,
		"sigla" : "SC"
	},
	{
		"id" : 2216,
		"nome" : "Ritápolis",
		"codigo_ibge" : 3156106,
		"sigla" : "MG"
	},
	{
		"id" : 5203,
		"nome" : "Riversul",
		"codigo_ibge" : 3543501,
		"sigla" : "SP"
	},
	{
		"id" : 4195,
		"nome" : "Roca Sales",
		"codigo_ibge" : 4315800,
		"sigla" : "RS"
	},
	{
		"id" : 1553,
		"nome" : "Rochedo",
		"codigo_ibge" : 5007505,
		"sigla" : "MS"
	},
	{
		"id" : 2217,
		"nome" : "Rochedo de Minas",
		"codigo_ibge" : 3156205,
		"sigla" : "MG"
	},
	{
		"id" : 4634,
		"nome" : "Rodeio",
		"codigo_ibge" : 4215109,
		"sigla" : "SC"
	},
	{
		"id" : 4196,
		"nome" : "Rodeio Bonito",
		"codigo_ibge" : 4315909,
		"sigla" : "RS"
	},
	{
		"id" : 2218,
		"nome" : "Rodeiro",
		"codigo_ibge" : 3156304,
		"sigla" : "MG"
	},
	{
		"id" : 613,
		"nome" : "Rodelas",
		"codigo_ibge" : 2927101,
		"sigla" : "BA"
	},
	{
		"id" : 3801,
		"nome" : "Rodolfo Fernandes",
		"codigo_ibge" : 2411007,
		"sigla" : "RN"
	},
	{
		"id" : 95,
		"nome" : "Rodrigues Alves",
		"codigo_ibge" : 1200427,
		"sigla" : "AC"
	},
	{
		"id" : 4197,
		"nome" : "Rolador",
		"codigo_ibge" : 4315958,
		"sigla" : "RS"
	},
	{
		"id" : 3096,
		"nome" : "Rolândia",
		"codigo_ibge" : 4122404,
		"sigla" : "PR"
	},
	{
		"id" : 4198,
		"nome" : "Rolante",
		"codigo_ibge" : 4316006,
		"sigla" : "RS"
	},
	{
		"id" : 4386,
		"nome" : "Rolim de Moura",
		"codigo_ibge" : 1100288,
		"sigla" : "RO"
	},
	{
		"id" : 2219,
		"nome" : "Romaria",
		"codigo_ibge" : 3156403,
		"sigla" : "MG"
	},
	{
		"id" : 4635,
		"nome" : "Romelândia",
		"codigo_ibge" : 4215208,
		"sigla" : "SC"
	},
	{
		"id" : 3097,
		"nome" : "Roncador",
		"codigo_ibge" : 4122503,
		"sigla" : "PR"
	},
	{
		"id" : 4199,
		"nome" : "Ronda Alta",
		"codigo_ibge" : 4316105,
		"sigla" : "RS"
	},
	{
		"id" : 4200,
		"nome" : "Rondinha",
		"codigo_ibge" : 4316204,
		"sigla" : "RS"
	},
	{
		"id" : 1454,
		"nome" : "Rondolândia",
		"codigo_ibge" : 5107578,
		"sigla" : "MT"
	},
	{
		"id" : 3098,
		"nome" : "Rondon",
		"codigo_ibge" : 4122602,
		"sigla" : "PR"
	},
	{
		"id" : 2519,
		"nome" : "Rondon do Pará",
		"codigo_ibge" : 1506187,
		"sigla" : "PA"
	},
	{
		"id" : 1455,
		"nome" : "Rondonópolis",
		"codigo_ibge" : 5107602,
		"sigla" : "MT"
	},
	{
		"id" : 4201,
		"nome" : "Roque Gonzales",
		"codigo_ibge" : 4316303,
		"sigla" : "RS"
	},
	{
		"id" : 4409,
		"nome" : "Rorainópolis",
		"codigo_ibge" : 1400472,
		"sigla" : "RR"
	},
	{
		"id" : 5204,
		"nome" : "Rosana",
		"codigo_ibge" : 3544251,
		"sigla" : "SP"
	},
	{
		"id" : 1287,
		"nome" : "Rosário",
		"codigo_ibge" : 2109601,
		"sigla" : "MA"
	},
	{
		"id" : 2220,
		"nome" : "Rosário da Limeira",
		"codigo_ibge" : 3156452,
		"sigla" : "MG"
	},
	{
		"id" : 5410,
		"nome" : "Rosário do Catete",
		"codigo_ibge" : 2806107,
		"sigla" : "SE"
	},
	{
		"id" : 3099,
		"nome" : "Rosário do Ivaí",
		"codigo_ibge" : 4122651,
		"sigla" : "PR"
	},
	{
		"id" : 4202,
		"nome" : "Rosário do Sul",
		"codigo_ibge" : 4316402,
		"sigla" : "RS"
	},
	{
		"id" : 1456,
		"nome" : "Rosário Oeste",
		"codigo_ibge" : 5107701,
		"sigla" : "MT"
	},
	{
		"id" : 5205,
		"nome" : "Roseira",
		"codigo_ibge" : 3544301,
		"sigla" : "SP"
	},
	{
		"id" : 184,
		"nome" : "Roteiro",
		"codigo_ibge" : 2707800,
		"sigla" : "AL"
	},
	{
		"id" : 2221,
		"nome" : "Rubelita",
		"codigo_ibge" : 3156502,
		"sigla" : "MG"
	},
	{
		"id" : 5206,
		"nome" : "Rubiácea",
		"codigo_ibge" : 3544400,
		"sigla" : "SP"
	},
	{
		"id" : 1081,
		"nome" : "Rubiataba",
		"codigo_ibge" : 5218904,
		"sigla" : "GO"
	},
	{
		"id" : 2222,
		"nome" : "Rubim",
		"codigo_ibge" : 3156601,
		"sigla" : "MG"
	},
	{
		"id" : 5207,
		"nome" : "Rubinéia",
		"codigo_ibge" : 3544509,
		"sigla" : "SP"
	},
	{
		"id" : 2520,
		"nome" : "Rurópolis",
		"codigo_ibge" : 1506195,
		"sigla" : "PA"
	},
	{
		"id" : 852,
		"nome" : "Russas",
		"codigo_ibge" : 2311801,
		"sigla" : "CE"
	},
	{
		"id" : 614,
		"nome" : "Ruy Barbosa",
		"codigo_ibge" : 2927200,
		"sigla" : "BA"
	},
	{
		"id" : 3802,
		"nome" : "Ruy Barbosa",
		"codigo_ibge" : 2411106,
		"sigla" : "RN"
	},
	{
		"id" : 2223,
		"nome" : "Sabará",
		"codigo_ibge" : 3156700,
		"sigla" : "MG"
	},
	{
		"id" : 3100,
		"nome" : "Sabáudia",
		"codigo_ibge" : 4122701,
		"sigla" : "PR"
	},
	{
		"id" : 5208,
		"nome" : "Sabino",
		"codigo_ibge" : 3544608,
		"sigla" : "SP"
	},
	{
		"id" : 2224,
		"nome" : "Sabinópolis",
		"codigo_ibge" : 3156809,
		"sigla" : "MG"
	},
	{
		"id" : 853,
		"nome" : "Saboeiro",
		"codigo_ibge" : 2311900,
		"sigla" : "CE"
	},
	{
		"id" : 2225,
		"nome" : "Sacramento",
		"codigo_ibge" : 3156908,
		"sigla" : "MG"
	},
	{
		"id" : 4203,
		"nome" : "Sagrada Família",
		"codigo_ibge" : 4316428,
		"sigla" : "RS"
	},
	{
		"id" : 5209,
		"nome" : "Sagres",
		"codigo_ibge" : 3544707,
		"sigla" : "SP"
	},
	{
		"id" : 3319,
		"nome" : "Sairé",
		"codigo_ibge" : 2612000,
		"sigla" : "PE"
	},
	{
		"id" : 4204,
		"nome" : "Saldanha Marinho",
		"codigo_ibge" : 4316436,
		"sigla" : "RS"
	},
	{
		"id" : 5210,
		"nome" : "Sales",
		"codigo_ibge" : 3544806,
		"sigla" : "SP"
	},
	{
		"id" : 5211,
		"nome" : "Sales Oliveira",
		"codigo_ibge" : 3544905,
		"sigla" : "SP"
	},
	{
		"id" : 5212,
		"nome" : "Salesópolis",
		"codigo_ibge" : 3545001,
		"sigla" : "SP"
	},
	{
		"id" : 4636,
		"nome" : "Salete",
		"codigo_ibge" : 4215307,
		"sigla" : "SC"
	},
	{
		"id" : 2724,
		"nome" : "Salgadinho",
		"codigo_ibge" : 2513000,
		"sigla" : "PB"
	},
	{
		"id" : 3320,
		"nome" : "Salgadinho",
		"codigo_ibge" : 2612109,
		"sigla" : "PE"
	},
	{
		"id" : 5411,
		"nome" : "Salgado",
		"codigo_ibge" : 2806206,
		"sigla" : "SE"
	},
	{
		"id" : 2725,
		"nome" : "Salgado de São Félix",
		"codigo_ibge" : 2513109,
		"sigla" : "PB"
	},
	{
		"id" : 3101,
		"nome" : "Salgado Filho",
		"codigo_ibge" : 4122800,
		"sigla" : "PR"
	},
	{
		"id" : 3321,
		"nome" : "Salgueiro",
		"codigo_ibge" : 2612208,
		"sigla" : "PE"
	},
	{
		"id" : 2226,
		"nome" : "Salinas",
		"codigo_ibge" : 3157005,
		"sigla" : "MG"
	},
	{
		"id" : 615,
		"nome" : "Salinas da Margarida",
		"codigo_ibge" : 2927309,
		"sigla" : "BA"
	},
	{
		"id" : 2521,
		"nome" : "Salinópolis",
		"codigo_ibge" : 1506203,
		"sigla" : "PA"
	},
	{
		"id" : 854,
		"nome" : "Salitre",
		"codigo_ibge" : 2311959,
		"sigla" : "CE"
	},
	{
		"id" : 5213,
		"nome" : "Salmourão",
		"codigo_ibge" : 3545100,
		"sigla" : "SP"
	},
	{
		"id" : 3322,
		"nome" : "Saloá",
		"codigo_ibge" : 2612307,
		"sigla" : "PE"
	},
	{
		"id" : 4637,
		"nome" : "Saltinho",
		"codigo_ibge" : 4215356,
		"sigla" : "SC"
	},
	{
		"id" : 5214,
		"nome" : "Saltinho",
		"codigo_ibge" : 3545159,
		"sigla" : "SP"
	},
	{
		"id" : 5215,
		"nome" : "Salto",
		"codigo_ibge" : 3545209,
		"sigla" : "SP"
	},
	{
		"id" : 2227,
		"nome" : "Salto da Divisa",
		"codigo_ibge" : 3157104,
		"sigla" : "MG"
	},
	{
		"id" : 5216,
		"nome" : "Salto de Pirapora",
		"codigo_ibge" : 3545308,
		"sigla" : "SP"
	},
	{
		"id" : 1457,
		"nome" : "Salto do Céu",
		"codigo_ibge" : 5107750,
		"sigla" : "MT"
	},
	{
		"id" : 3102,
		"nome" : "Salto do Itararé",
		"codigo_ibge" : 4122909,
		"sigla" : "PR"
	},
	{
		"id" : 4205,
		"nome" : "Salto do Jacuí",
		"codigo_ibge" : 4316451,
		"sigla" : "RS"
	},
	{
		"id" : 3103,
		"nome" : "Salto do Lontra",
		"codigo_ibge" : 4123006,
		"sigla" : "PR"
	},
	{
		"id" : 5217,
		"nome" : "Salto Grande",
		"codigo_ibge" : 3545407,
		"sigla" : "SP"
	},
	{
		"id" : 4638,
		"nome" : "Salto Veloso",
		"codigo_ibge" : 4215406,
		"sigla" : "SC"
	},
	{
		"id" : 616,
		"nome" : "Salvador",
		"codigo_ibge" : 2927408,
		"sigla" : "BA"
	},
	{
		"id" : 4206,
		"nome" : "Salvador das Missões",
		"codigo_ibge" : 4316477,
		"sigla" : "RS"
	},
	{
		"id" : 4207,
		"nome" : "Salvador do Sul",
		"codigo_ibge" : 4316501,
		"sigla" : "RS"
	},
	{
		"id" : 2522,
		"nome" : "Salvaterra",
		"codigo_ibge" : 1506302,
		"sigla" : "PA"
	},
	{
		"id" : 1288,
		"nome" : "Sambaíba",
		"codigo_ibge" : 2109700,
		"sigla" : "MA"
	},
	{
		"id" : 5539,
		"nome" : "Sampaio",
		"codigo_ibge" : 1718808,
		"sigla" : "TO"
	},
	{
		"id" : 4208,
		"nome" : "Sananduva",
		"codigo_ibge" : 4316600,
		"sigla" : "RS"
	},
	{
		"id" : 1082,
		"nome" : "Sanclerlândia",
		"codigo_ibge" : 5219001,
		"sigla" : "GO"
	},
	{
		"id" : 5540,
		"nome" : "Sandolândia",
		"codigo_ibge" : 1718840,
		"sigla" : "TO"
	},
	{
		"id" : 5218,
		"nome" : "Sandovalina",
		"codigo_ibge" : 3545506,
		"sigla" : "SP"
	},
	{
		"id" : 4639,
		"nome" : "Sangão",
		"codigo_ibge" : 4215455,
		"sigla" : "SC"
	},
	{
		"id" : 3323,
		"nome" : "Sanharó",
		"codigo_ibge" : 2612406,
		"sigla" : "PE"
	},
	{
		"id" : 4220,
		"nome" : "Sant Ana do Livramento",
		"codigo_ibge" : 4317103,
		"sigla" : "RS"
	},
	{
		"id" : 5219,
		"nome" : "Santa Adélia",
		"codigo_ibge" : 3545605,
		"sigla" : "SP"
	},
	{
		"id" : 5220,
		"nome" : "Santa Albertina",
		"codigo_ibge" : 3545704,
		"sigla" : "SP"
	},
	{
		"id" : 3104,
		"nome" : "Santa Amélia",
		"codigo_ibge" : 4123105,
		"sigla" : "PR"
	},
	{
		"id" : 2228,
		"nome" : "Santa Bárbara",
		"codigo_ibge" : 3157203,
		"sigla" : "MG"
	},
	{
		"id" : 617,
		"nome" : "Santa Bárbara",
		"codigo_ibge" : 2927507,
		"sigla" : "BA"
	},
	{
		"id" : 5221,
		"nome" : "Santa Bárbara d Oeste",
		"codigo_ibge" : 3545803,
		"sigla" : "SP"
	},
	{
		"id" : 1083,
		"nome" : "Santa Bárbara de Goiás",
		"codigo_ibge" : 5219100,
		"sigla" : "GO"
	},
	{
		"id" : 2229,
		"nome" : "Santa Bárbara do Leste",
		"codigo_ibge" : 3157252,
		"sigla" : "MG"
	},
	{
		"id" : 2230,
		"nome" : "Santa Bárbara do Monte Verde",
		"codigo_ibge" : 3157278,
		"sigla" : "MG"
	},
	{
		"id" : 2523,
		"nome" : "Santa Bárbara do Pará",
		"codigo_ibge" : 1506351,
		"sigla" : "PA"
	},
	{
		"id" : 4209,
		"nome" : "Santa Bárbara do Sul",
		"codigo_ibge" : 4316709,
		"sigla" : "RS"
	},
	{
		"id" : 2231,
		"nome" : "Santa Bárbara do Tugúrio",
		"codigo_ibge" : 3157302,
		"sigla" : "MG"
	},
	{
		"id" : 5222,
		"nome" : "Santa Branca",
		"codigo_ibge" : 3546009,
		"sigla" : "SP"
	},
	{
		"id" : 618,
		"nome" : "Santa Brígida",
		"codigo_ibge" : 2927606,
		"sigla" : "BA"
	},
	{
		"id" : 1458,
		"nome" : "Santa Carmem",
		"codigo_ibge" : 5107248,
		"sigla" : "MT"
	},
	{
		"id" : 2726,
		"nome" : "Santa Cecília",
		"codigo_ibge" : 2513158,
		"sigla" : "PB"
	},
	{
		"id" : 4640,
		"nome" : "Santa Cecília",
		"codigo_ibge" : 4215505,
		"sigla" : "SC"
	},
	{
		"id" : 3105,
		"nome" : "Santa Cecília do Pavão",
		"codigo_ibge" : 4123204,
		"sigla" : "PR"
	},
	{
		"id" : 4210,
		"nome" : "Santa Cecília do Sul",
		"codigo_ibge" : 4316733,
		"sigla" : "RS"
	},
	{
		"id" : 5223,
		"nome" : "Santa Clara d Oeste",
		"codigo_ibge" : 3546108,
		"sigla" : "SP"
	},
	{
		"id" : 4211,
		"nome" : "Santa Clara do Sul",
		"codigo_ibge" : 4316758,
		"sigla" : "RS"
	},
	{
		"id" : 2727,
		"nome" : "Santa Cruz",
		"codigo_ibge" : 2513208,
		"sigla" : "PB"
	},
	{
		"id" : 3324,
		"nome" : "Santa Cruz",
		"codigo_ibge" : 2612455,
		"sigla" : "PE"
	},
	{
		"id" : 3803,
		"nome" : "Santa Cruz",
		"codigo_ibge" : 2411205,
		"sigla" : "RN"
	},
	{
		"id" : 619,
		"nome" : "Santa Cruz Cabrália",
		"codigo_ibge" : 2927705,
		"sigla" : "BA"
	},
	{
		"id" : 3325,
		"nome" : "Santa Cruz da Baixa Verde",
		"codigo_ibge" : 2612471,
		"sigla" : "PE"
	},
	{
		"id" : 5224,
		"nome" : "Santa Cruz da Conceição",
		"codigo_ibge" : 3546207,
		"sigla" : "SP"
	},
	{
		"id" : 5225,
		"nome" : "Santa Cruz da Esperança",
		"codigo_ibge" : 3546256,
		"sigla" : "SP"
	},
	{
		"id" : 620,
		"nome" : "Santa Cruz da Vitória",
		"codigo_ibge" : 2927804,
		"sigla" : "BA"
	},
	{
		"id" : 5226,
		"nome" : "Santa Cruz das Palmeiras",
		"codigo_ibge" : 3546306,
		"sigla" : "SP"
	},
	{
		"id" : 1084,
		"nome" : "Santa Cruz de Goiás",
		"codigo_ibge" : 5219209,
		"sigla" : "GO"
	},
	{
		"id" : 2232,
		"nome" : "Santa Cruz de Minas",
		"codigo_ibge" : 3157336,
		"sigla" : "MG"
	},
	{
		"id" : 3106,
		"nome" : "Santa Cruz de Monte Castelo",
		"codigo_ibge" : 4123303,
		"sigla" : "PR"
	},
	{
		"id" : 2233,
		"nome" : "Santa Cruz de Salinas",
		"codigo_ibge" : 3157377,
		"sigla" : "MG"
	},
	{
		"id" : 2524,
		"nome" : "Santa Cruz do Arari",
		"codigo_ibge" : 1506401,
		"sigla" : "PA"
	},
	{
		"id" : 3326,
		"nome" : "Santa Cruz do Capibaribe",
		"codigo_ibge" : 2612505,
		"sigla" : "PE"
	},
	{
		"id" : 2234,
		"nome" : "Santa Cruz do Escalvado",
		"codigo_ibge" : 3157401,
		"sigla" : "MG"
	},
	{
		"id" : 3541,
		"nome" : "Santa Cruz do Piauí",
		"codigo_ibge" : 2209104,
		"sigla" : "PI"
	},
	{
		"id" : 5227,
		"nome" : "Santa Cruz do Rio Pardo",
		"codigo_ibge" : 3546405,
		"sigla" : "SP"
	},
	{
		"id" : 4212,
		"nome" : "Santa Cruz do Sul",
		"codigo_ibge" : 4316808,
		"sigla" : "RS"
	},
	{
		"id" : 1459,
		"nome" : "Santa Cruz do Xingu",
		"codigo_ibge" : 5107743,
		"sigla" : "MT"
	},
	{
		"id" : 3542,
		"nome" : "Santa Cruz dos Milagres",
		"codigo_ibge" : 2209153,
		"sigla" : "PI"
	},
	{
		"id" : 2235,
		"nome" : "Santa Efigênia de Minas",
		"codigo_ibge" : 3157500,
		"sigla" : "MG"
	},
	{
		"id" : 5228,
		"nome" : "Santa Ernestina",
		"codigo_ibge" : 3546504,
		"sigla" : "SP"
	},
	{
		"id" : 3107,
		"nome" : "Santa Fé",
		"codigo_ibge" : 4123402,
		"sigla" : "PR"
	},
	{
		"id" : 1085,
		"nome" : "Santa Fé de Goiás",
		"codigo_ibge" : 5219258,
		"sigla" : "GO"
	},
	{
		"id" : 2236,
		"nome" : "Santa Fé de Minas",
		"codigo_ibge" : 3157609,
		"sigla" : "MG"
	},
	{
		"id" : 5541,
		"nome" : "Santa Fé do Araguaia",
		"codigo_ibge" : 1718865,
		"sigla" : "TO"
	},
	{
		"id" : 5229,
		"nome" : "Santa Fé do Sul",
		"codigo_ibge" : 3546603,
		"sigla" : "SP"
	},
	{
		"id" : 3327,
		"nome" : "Santa Filomena",
		"codigo_ibge" : 2612554,
		"sigla" : "PE"
	},
	{
		"id" : 3543,
		"nome" : "Santa Filomena",
		"codigo_ibge" : 2209203,
		"sigla" : "PI"
	},
	{
		"id" : 1289,
		"nome" : "Santa Filomena do Maranhão",
		"codigo_ibge" : 2109759,
		"sigla" : "MA"
	},
	{
		"id" : 5230,
		"nome" : "Santa Gertrudes",
		"codigo_ibge" : 3546702,
		"sigla" : "SP"
	},
	{
		"id" : 4641,
		"nome" : "Santa Helena",
		"codigo_ibge" : 4215554,
		"sigla" : "SC"
	},
	{
		"id" : 2728,
		"nome" : "Santa Helena",
		"codigo_ibge" : 2513307,
		"sigla" : "PB"
	},
	{
		"id" : 3108,
		"nome" : "Santa Helena",
		"codigo_ibge" : 4123501,
		"sigla" : "PR"
	},
	{
		"id" : 1290,
		"nome" : "Santa Helena",
		"codigo_ibge" : 2109809,
		"sigla" : "MA"
	},
	{
		"id" : 1086,
		"nome" : "Santa Helena de Goiás",
		"codigo_ibge" : 5219308,
		"sigla" : "GO"
	},
	{
		"id" : 2237,
		"nome" : "Santa Helena de Minas",
		"codigo_ibge" : 3157658,
		"sigla" : "MG"
	},
	{
		"id" : 2729,
		"nome" : "Santa Inês",
		"codigo_ibge" : 2513356,
		"sigla" : "PB"
	},
	{
		"id" : 3109,
		"nome" : "Santa Inês",
		"codigo_ibge" : 4123600,
		"sigla" : "PR"
	},
	{
		"id" : 621,
		"nome" : "Santa Inês",
		"codigo_ibge" : 2927903,
		"sigla" : "BA"
	},
	{
		"id" : 1291,
		"nome" : "Santa Inês",
		"codigo_ibge" : 2109908,
		"sigla" : "MA"
	},
	{
		"id" : 1087,
		"nome" : "Santa Isabel",
		"codigo_ibge" : 5219357,
		"sigla" : "GO"
	},
	{
		"id" : 5231,
		"nome" : "Santa Isabel",
		"codigo_ibge" : 3546801,
		"sigla" : "SP"
	},
	{
		"id" : 3110,
		"nome" : "Santa Isabel do Ivaí",
		"codigo_ibge" : 4123709,
		"sigla" : "PR"
	},
	{
		"id" : 268,
		"nome" : "Santa Isabel do Rio Negro",
		"codigo_ibge" : 1303601,
		"sigla" : "AM"
	},
	{
		"id" : 3111,
		"nome" : "Santa Izabel do Oeste",
		"codigo_ibge" : 4123808,
		"sigla" : "PR"
	},
	{
		"id" : 2525,
		"nome" : "Santa Izabel do Pará",
		"codigo_ibge" : 1506500,
		"sigla" : "PA"
	},
	{
		"id" : 2238,
		"nome" : "Santa Juliana",
		"codigo_ibge" : 3157708,
		"sigla" : "MG"
	},
	{
		"id" : 62,
		"nome" : "Santa Leopoldina",
		"codigo_ibge" : 3204500,
		"sigla" : "ES"
	},
	{
		"id" : 3112,
		"nome" : "Santa Lúcia",
		"codigo_ibge" : 4123824,
		"sigla" : "PR"
	},
	{
		"id" : 5232,
		"nome" : "Santa Lúcia",
		"codigo_ibge" : 3546900,
		"sigla" : "SP"
	},
	{
		"id" : 3544,
		"nome" : "Santa Luz",
		"codigo_ibge" : 2209302,
		"sigla" : "PI"
	},
	{
		"id" : 2239,
		"nome" : "Santa Luzia",
		"codigo_ibge" : 3157807,
		"sigla" : "MG"
	},
	{
		"id" : 2730,
		"nome" : "Santa Luzia",
		"codigo_ibge" : 2513406,
		"sigla" : "PB"
	},
	{
		"id" : 622,
		"nome" : "Santa Luzia",
		"codigo_ibge" : 2928059,
		"sigla" : "BA"
	},
	{
		"id" : 1292,
		"nome" : "Santa Luzia",
		"codigo_ibge" : 2110005,
		"sigla" : "MA"
	},
	{
		"id" : 4387,
		"nome" : "Santa Luzia d Oeste",
		"codigo_ibge" : 1100296,
		"sigla" : "RO"
	},
	{
		"id" : 5412,
		"nome" : "Santa Luzia do Itanhy",
		"codigo_ibge" : 2806305,
		"sigla" : "SE"
	},
	{
		"id" : 185,
		"nome" : "Santa Luzia do Norte",
		"codigo_ibge" : 2707909,
		"sigla" : "AL"
	},
	{
		"id" : 2526,
		"nome" : "Santa Luzia do Pará",
		"codigo_ibge" : 1506559,
		"sigla" : "PA"
	},
	{
		"id" : 1293,
		"nome" : "Santa Luzia do Paruá",
		"codigo_ibge" : 2110039,
		"sigla" : "MA"
	},
	{
		"id" : 2240,
		"nome" : "Santa Margarida",
		"codigo_ibge" : 3157906,
		"sigla" : "MG"
	},
	{
		"id" : 4213,
		"nome" : "Santa Margarida do Sul",
		"codigo_ibge" : 4316972,
		"sigla" : "RS"
	},
	{
		"id" : 4214,
		"nome" : "Santa Maria",
		"codigo_ibge" : 4316907,
		"sigla" : "RS"
	},
	{
		"id" : 3804,
		"nome" : "Santa Maria",
		"codigo_ibge" : 2409332,
		"sigla" : "RN"
	},
	{
		"id" : 3328,
		"nome" : "Santa Maria da Boa Vista",
		"codigo_ibge" : 2612604,
		"sigla" : "PE"
	},
	{
		"id" : 5233,
		"nome" : "Santa Maria da Serra",
		"codigo_ibge" : 3547007,
		"sigla" : "SP"
	},
	{
		"id" : 623,
		"nome" : "Santa Maria da Vitória",
		"codigo_ibge" : 2928109,
		"sigla" : "BA"
	},
	{
		"id" : 2527,
		"nome" : "Santa Maria das Barreiras",
		"codigo_ibge" : 1506583,
		"sigla" : "PA"
	},
	{
		"id" : 2241,
		"nome" : "Santa Maria de Itabira",
		"codigo_ibge" : 3158003,
		"sigla" : "MG"
	},
	{
		"id" : 63,
		"nome" : "Santa Maria de Jetibá",
		"codigo_ibge" : 3204559,
		"sigla" : "ES"
	},
	{
		"id" : 3329,
		"nome" : "Santa Maria do Cambucá",
		"codigo_ibge" : 2612703,
		"sigla" : "PE"
	},
	{
		"id" : 4215,
		"nome" : "Santa Maria do Herval",
		"codigo_ibge" : 4316956,
		"sigla" : "RS"
	},
	{
		"id" : 3113,
		"nome" : "Santa Maria do Oeste",
		"codigo_ibge" : 4123857,
		"sigla" : "PR"
	},
	{
		"id" : 2528,
		"nome" : "Santa Maria do Pará",
		"codigo_ibge" : 1506609,
		"sigla" : "PA"
	},
	{
		"id" : 2242,
		"nome" : "Santa Maria do Salto",
		"codigo_ibge" : 3158102,
		"sigla" : "MG"
	},
	{
		"id" : 2243,
		"nome" : "Santa Maria do Suaçuí",
		"codigo_ibge" : 3158201,
		"sigla" : "MG"
	},
	{
		"id" : 5542,
		"nome" : "Santa Maria do Tocantins",
		"codigo_ibge" : 1718881,
		"sigla" : "TO"
	},
	{
		"id" : 3659,
		"nome" : "Santa Maria Madalena",
		"codigo_ibge" : 3304607,
		"sigla" : "RJ"
	},
	{
		"id" : 3114,
		"nome" : "Santa Mariana",
		"codigo_ibge" : 4123907,
		"sigla" : "PR"
	},
	{
		"id" : 5234,
		"nome" : "Santa Mercedes",
		"codigo_ibge" : 3547106,
		"sigla" : "SP"
	},
	{
		"id" : 3115,
		"nome" : "Santa Mônica",
		"codigo_ibge" : 4123956,
		"sigla" : "PR"
	},
	{
		"id" : 855,
		"nome" : "Santa Quitéria",
		"codigo_ibge" : 2312205,
		"sigla" : "CE"
	},
	{
		"id" : 1294,
		"nome" : "Santa Quitéria do Maranhão",
		"codigo_ibge" : 2110104,
		"sigla" : "MA"
	},
	{
		"id" : 1295,
		"nome" : "Santa Rita",
		"codigo_ibge" : 2110203,
		"sigla" : "MA"
	},
	{
		"id" : 2731,
		"nome" : "Santa Rita",
		"codigo_ibge" : 2513703,
		"sigla" : "PB"
	},
	{
		"id" : 5235,
		"nome" : "Santa Rita d Oeste",
		"codigo_ibge" : 3547403,
		"sigla" : "SP"
	},
	{
		"id" : 2244,
		"nome" : "Santa Rita de Caldas",
		"codigo_ibge" : 3159209,
		"sigla" : "MG"
	},
	{
		"id" : 624,
		"nome" : "Santa Rita de Cássia",
		"codigo_ibge" : 2928406,
		"sigla" : "BA"
	},
	{
		"id" : 2245,
		"nome" : "Santa Rita de Ibitipoca",
		"codigo_ibge" : 3159407,
		"sigla" : "MG"
	},
	{
		"id" : 2246,
		"nome" : "Santa Rita de Jacutinga",
		"codigo_ibge" : 3159308,
		"sigla" : "MG"
	},
	{
		"id" : 2247,
		"nome" : "Santa Rita de Minas",
		"codigo_ibge" : 3159357,
		"sigla" : "MG"
	},
	{
		"id" : 1088,
		"nome" : "Santa Rita do Araguaia",
		"codigo_ibge" : 5219407,
		"sigla" : "GO"
	},
	{
		"id" : 2248,
		"nome" : "Santa Rita do Itueto",
		"codigo_ibge" : 3159506,
		"sigla" : "MG"
	},
	{
		"id" : 1089,
		"nome" : "Santa Rita do Novo Destino",
		"codigo_ibge" : 5219456,
		"sigla" : "GO"
	},
	{
		"id" : 1554,
		"nome" : "Santa Rita do Pardo",
		"codigo_ibge" : 5007554,
		"sigla" : "MS"
	},
	{
		"id" : 5236,
		"nome" : "Santa Rita do Passa Quatro",
		"codigo_ibge" : 3547502,
		"sigla" : "SP"
	},
	{
		"id" : 2249,
		"nome" : "Santa Rita do Sapucaí",
		"codigo_ibge" : 3159605,
		"sigla" : "MG"
	},
	{
		"id" : 5543,
		"nome" : "Santa Rita do Tocantins",
		"codigo_ibge" : 1718899,
		"sigla" : "TO"
	},
	{
		"id" : 1460,
		"nome" : "Santa Rita do Trivelato",
		"codigo_ibge" : 5107768,
		"sigla" : "MT"
	},
	{
		"id" : 4216,
		"nome" : "Santa Rosa",
		"codigo_ibge" : 4317202,
		"sigla" : "RS"
	},
	{
		"id" : 2250,
		"nome" : "Santa Rosa da Serra",
		"codigo_ibge" : 3159704,
		"sigla" : "MG"
	},
	{
		"id" : 1090,
		"nome" : "Santa Rosa de Goiás",
		"codigo_ibge" : 5219506,
		"sigla" : "GO"
	},
	{
		"id" : 4642,
		"nome" : "Santa Rosa de Lima",
		"codigo_ibge" : 4215604,
		"sigla" : "SC"
	},
	{
		"id" : 5413,
		"nome" : "Santa Rosa de Lima",
		"codigo_ibge" : 2806503,
		"sigla" : "SE"
	},
	{
		"id" : 5237,
		"nome" : "Santa Rosa de Viterbo",
		"codigo_ibge" : 3547601,
		"sigla" : "SP"
	},
	{
		"id" : 3545,
		"nome" : "Santa Rosa do Piauí",
		"codigo_ibge" : 2209377,
		"sigla" : "PI"
	},
	{
		"id" : 96,
		"nome" : "Santa Rosa do Purus",
		"codigo_ibge" : 1200435,
		"sigla" : "AC"
	},
	{
		"id" : 4643,
		"nome" : "Santa Rosa do Sul",
		"codigo_ibge" : 4215653,
		"sigla" : "SC"
	},
	{
		"id" : 5544,
		"nome" : "Santa Rosa do Tocantins",
		"codigo_ibge" : 1718907,
		"sigla" : "TO"
	},
	{
		"id" : 5238,
		"nome" : "Santa Salete",
		"codigo_ibge" : 3547650,
		"sigla" : "SP"
	},
	{
		"id" : 64,
		"nome" : "Santa Teresa",
		"codigo_ibge" : 3204609,
		"sigla" : "ES"
	},
	{
		"id" : 625,
		"nome" : "Santa Teresinha",
		"codigo_ibge" : 2928505,
		"sigla" : "BA"
	},
	{
		"id" : 2732,
		"nome" : "Santa Teresinha",
		"codigo_ibge" : 2513802,
		"sigla" : "PB"
	},
	{
		"id" : 4217,
		"nome" : "Santa Tereza",
		"codigo_ibge" : 4317251,
		"sigla" : "RS"
	},
	{
		"id" : 1091,
		"nome" : "Santa Tereza de Goiás",
		"codigo_ibge" : 5219605,
		"sigla" : "GO"
	},
	{
		"id" : 3116,
		"nome" : "Santa Tereza do Oeste",
		"codigo_ibge" : 4124020,
		"sigla" : "PR"
	},
	{
		"id" : 5545,
		"nome" : "Santa Tereza do Tocantins",
		"codigo_ibge" : 1719004,
		"sigla" : "TO"
	},
	{
		"id" : 4644,
		"nome" : "Santa Terezinha",
		"codigo_ibge" : 4215679,
		"sigla" : "SC"
	},
	{
		"id" : 1461,
		"nome" : "Santa Terezinha",
		"codigo_ibge" : 5107776,
		"sigla" : "MT"
	},
	{
		"id" : 3330,
		"nome" : "Santa Terezinha",
		"codigo_ibge" : 2612802,
		"sigla" : "PE"
	},
	{
		"id" : 1092,
		"nome" : "Santa Terezinha de Goiás",
		"codigo_ibge" : 5219704,
		"sigla" : "GO"
	},
	{
		"id" : 3117,
		"nome" : "Santa Terezinha de Itaipu",
		"codigo_ibge" : 4124053,
		"sigla" : "PR"
	},
	{
		"id" : 4645,
		"nome" : "Santa Terezinha do Progresso",
		"codigo_ibge" : 4215687,
		"sigla" : "SC"
	},
	{
		"id" : 5546,
		"nome" : "Santa Terezinha do Tocantins",
		"codigo_ibge" : 1720002,
		"sigla" : "TO"
	},
	{
		"id" : 2251,
		"nome" : "Santa Vitória",
		"codigo_ibge" : 3159803,
		"sigla" : "MG"
	},
	{
		"id" : 4218,
		"nome" : "Santa Vitória do Palmar",
		"codigo_ibge" : 4317301,
		"sigla" : "RS"
	},
	{
		"id" : 626,
		"nome" : "Santaluz",
		"codigo_ibge" : 2928000,
		"sigla" : "BA"
	},
	{
		"id" : 215,
		"nome" : "Santana",
		"codigo_ibge" : 1600600,
		"sigla" : "AP"
	},
	{
		"id" : 627,
		"nome" : "Santana",
		"codigo_ibge" : 2928208,
		"sigla" : "BA"
	},
	{
		"id" : 4219,
		"nome" : "Santana da Boa Vista",
		"codigo_ibge" : 4317004,
		"sigla" : "RS"
	},
	{
		"id" : 5239,
		"nome" : "Santana da Ponte Pensa",
		"codigo_ibge" : 3547205,
		"sigla" : "SP"
	},
	{
		"id" : 2252,
		"nome" : "Santana da Vargem",
		"codigo_ibge" : 3158300,
		"sigla" : "MG"
	},
	{
		"id" : 2253,
		"nome" : "Santana de Cataguases",
		"codigo_ibge" : 3158409,
		"sigla" : "MG"
	},
	{
		"id" : 2733,
		"nome" : "Santana de Mangueira",
		"codigo_ibge" : 2513505,
		"sigla" : "PB"
	},
	{
		"id" : 5240,
		"nome" : "Santana de Parnaíba",
		"codigo_ibge" : 3547304,
		"sigla" : "SP"
	},
	{
		"id" : 2254,
		"nome" : "Santana de Pirapama",
		"codigo_ibge" : 3158508,
		"sigla" : "MG"
	},
	{
		"id" : 856,
		"nome" : "Santana do Acaraú",
		"codigo_ibge" : 2312007,
		"sigla" : "CE"
	},
	{
		"id" : 2529,
		"nome" : "Santana do Araguaia",
		"codigo_ibge" : 1506708,
		"sigla" : "PA"
	},
	{
		"id" : 857,
		"nome" : "Santana do Cariri",
		"codigo_ibge" : 2312106,
		"sigla" : "CE"
	},
	{
		"id" : 2255,
		"nome" : "Santana do Deserto",
		"codigo_ibge" : 3158607,
		"sigla" : "MG"
	},
	{
		"id" : 2256,
		"nome" : "Santana do Garambéu",
		"codigo_ibge" : 3158706,
		"sigla" : "MG"
	},
	{
		"id" : 186,
		"nome" : "Santana do Ipanema",
		"codigo_ibge" : 2708006,
		"sigla" : "AL"
	},
	{
		"id" : 3118,
		"nome" : "Santana do Itararé",
		"codigo_ibge" : 4124004,
		"sigla" : "PR"
	},
	{
		"id" : 2257,
		"nome" : "Santana do Jacaré",
		"codigo_ibge" : 3158805,
		"sigla" : "MG"
	},
	{
		"id" : 2258,
		"nome" : "Santana do Manhuaçu",
		"codigo_ibge" : 3158904,
		"sigla" : "MG"
	},
	{
		"id" : 1296,
		"nome" : "Santana do Maranhão",
		"codigo_ibge" : 2110237,
		"sigla" : "MA"
	},
	{
		"id" : 3805,
		"nome" : "Santana do Matos",
		"codigo_ibge" : 2411403,
		"sigla" : "RN"
	},
	{
		"id" : 187,
		"nome" : "Santana do Mundaú",
		"codigo_ibge" : 2708105,
		"sigla" : "AL"
	},
	{
		"id" : 2259,
		"nome" : "Santana do Paraíso",
		"codigo_ibge" : 3158953,
		"sigla" : "MG"
	},
	{
		"id" : 3546,
		"nome" : "Santana do Piauí",
		"codigo_ibge" : 2209351,
		"sigla" : "PI"
	},
	{
		"id" : 2260,
		"nome" : "Santana do Riacho",
		"codigo_ibge" : 3159001,
		"sigla" : "MG"
	},
	{
		"id" : 5414,
		"nome" : "Santana do São Francisco",
		"codigo_ibge" : 2806404,
		"sigla" : "SE"
	},
	{
		"id" : 3806,
		"nome" : "Santana do Seridó",
		"codigo_ibge" : 2411429,
		"sigla" : "RN"
	},
	{
		"id" : 2734,
		"nome" : "Santana dos Garrotes",
		"codigo_ibge" : 2513604,
		"sigla" : "PB"
	},
	{
		"id" : 2261,
		"nome" : "Santana dos Montes",
		"codigo_ibge" : 3159100,
		"sigla" : "MG"
	},
	{
		"id" : 628,
		"nome" : "Santanópolis",
		"codigo_ibge" : 2928307,
		"sigla" : "BA"
	},
	{
		"id" : 2530,
		"nome" : "Santarém",
		"codigo_ibge" : 1506807,
		"sigla" : "PA"
	},
	{
		"id" : 2531,
		"nome" : "Santarém Novo",
		"codigo_ibge" : 1506906,
		"sigla" : "PA"
	},
	{
		"id" : 4221,
		"nome" : "Santiago",
		"codigo_ibge" : 4317400,
		"sigla" : "RS"
	},
	{
		"id" : 4646,
		"nome" : "Santiago do Sul",
		"codigo_ibge" : 4215695,
		"sigla" : "SC"
	},
	{
		"id" : 1462,
		"nome" : "Santo Afonso",
		"codigo_ibge" : 5107263,
		"sigla" : "MT"
	},
	{
		"id" : 629,
		"nome" : "Santo Amaro",
		"codigo_ibge" : 2928604,
		"sigla" : "BA"
	},
	{
		"id" : 4647,
		"nome" : "Santo Amaro da Imperatriz",
		"codigo_ibge" : 4215703,
		"sigla" : "SC"
	},
	{
		"id" : 5415,
		"nome" : "Santo Amaro das Brotas",
		"codigo_ibge" : 2806602,
		"sigla" : "SE"
	},
	{
		"id" : 1297,
		"nome" : "Santo Amaro do Maranhão",
		"codigo_ibge" : 2110278,
		"sigla" : "MA"
	},
	{
		"id" : 5241,
		"nome" : "Santo Anastácio",
		"codigo_ibge" : 3547700,
		"sigla" : "SP"
	},
	{
		"id" : 5242,
		"nome" : "Santo André",
		"codigo_ibge" : 3547809,
		"sigla" : "SP"
	},
	{
		"id" : 2736,
		"nome" : "Santo André",
		"codigo_ibge" : 2513851,
		"sigla" : "PB"
	},
	{
		"id" : 4222,
		"nome" : "Santo Ângelo",
		"codigo_ibge" : 4317509,
		"sigla" : "RS"
	},
	{
		"id" : 3807,
		"nome" : "Santo Antônio",
		"codigo_ibge" : 2411502,
		"sigla" : "RN"
	},
	{
		"id" : 5243,
		"nome" : "Santo Antônio da Alegria",
		"codigo_ibge" : 3547908,
		"sigla" : "SP"
	},
	{
		"id" : 1093,
		"nome" : "Santo Antônio da Barra",
		"codigo_ibge" : 5219712,
		"sigla" : "GO"
	},
	{
		"id" : 4223,
		"nome" : "Santo Antônio da Patrulha",
		"codigo_ibge" : 4317608,
		"sigla" : "RS"
	},
	{
		"id" : 3119,
		"nome" : "Santo Antônio da Platina",
		"codigo_ibge" : 4124103,
		"sigla" : "PR"
	},
	{
		"id" : 4224,
		"nome" : "Santo Antônio das Missões",
		"codigo_ibge" : 4317707,
		"sigla" : "RS"
	},
	{
		"id" : 1094,
		"nome" : "Santo Antônio de Goiás",
		"codigo_ibge" : 5219738,
		"sigla" : "GO"
	},
	{
		"id" : 630,
		"nome" : "Santo Antônio de Jesus",
		"codigo_ibge" : 2928703,
		"sigla" : "BA"
	},
	{
		"id" : 3547,
		"nome" : "Santo Antônio de Lisboa",
		"codigo_ibge" : 2209401,
		"sigla" : "PI"
	},
	{
		"id" : 3660,
		"nome" : "Santo Antônio de Pádua",
		"codigo_ibge" : 3304706,
		"sigla" : "RJ"
	},
	{
		"id" : 5244,
		"nome" : "Santo Antônio de Posse",
		"codigo_ibge" : 3548005,
		"sigla" : "SP"
	},
	{
		"id" : 2262,
		"nome" : "Santo Antônio do Amparo",
		"codigo_ibge" : 3159902,
		"sigla" : "MG"
	},
	{
		"id" : 5245,
		"nome" : "Santo Antônio do Aracanguá",
		"codigo_ibge" : 3548054,
		"sigla" : "SP"
	},
	{
		"id" : 2263,
		"nome" : "Santo Antônio do Aventureiro",
		"codigo_ibge" : 3160009,
		"sigla" : "MG"
	},
	{
		"id" : 3120,
		"nome" : "Santo Antônio do Caiuá",
		"codigo_ibge" : 4124202,
		"sigla" : "PR"
	},
	{
		"id" : 1095,
		"nome" : "Santo Antônio do Descoberto",
		"codigo_ibge" : 5219753,
		"sigla" : "GO"
	},
	{
		"id" : 2264,
		"nome" : "Santo Antônio do Grama",
		"codigo_ibge" : 3160108,
		"sigla" : "MG"
	},
	{
		"id" : 269,
		"nome" : "Santo Antônio do Içá",
		"codigo_ibge" : 1303700,
		"sigla" : "AM"
	},
	{
		"id" : 2265,
		"nome" : "Santo Antônio do Itambé",
		"codigo_ibge" : 3160207,
		"sigla" : "MG"
	},
	{
		"id" : 2266,
		"nome" : "Santo Antônio do Jacinto",
		"codigo_ibge" : 3160306,
		"sigla" : "MG"
	},
	{
		"id" : 5246,
		"nome" : "Santo Antônio do Jardim",
		"codigo_ibge" : 3548104,
		"sigla" : "SP"
	},
	{
		"id" : 1463,
		"nome" : "Santo Antônio do Leste",
		"codigo_ibge" : 5107792,
		"sigla" : "MT"
	},
	{
		"id" : 1464,
		"nome" : "Santo Antônio do Leverger",
		"codigo_ibge" : 5107800,
		"sigla" : "MT"
	},
	{
		"id" : 2267,
		"nome" : "Santo Antônio do Monte",
		"codigo_ibge" : 3160405,
		"sigla" : "MG"
	},
	{
		"id" : 4225,
		"nome" : "Santo Antônio do Palma",
		"codigo_ibge" : 4317558,
		"sigla" : "RS"
	},
	{
		"id" : 3121,
		"nome" : "Santo Antônio do Paraíso",
		"codigo_ibge" : 4124301,
		"sigla" : "PR"
	},
	{
		"id" : 5247,
		"nome" : "Santo Antônio do Pinhal",
		"codigo_ibge" : 3548203,
		"sigla" : "SP"
	},
	{
		"id" : 4226,
		"nome" : "Santo Antônio do Planalto",
		"codigo_ibge" : 4317756,
		"sigla" : "RS"
	},
	{
		"id" : 2268,
		"nome" : "Santo Antônio do Retiro",
		"codigo_ibge" : 3160454,
		"sigla" : "MG"
	},
	{
		"id" : 2269,
		"nome" : "Santo Antônio do Rio Abaixo",
		"codigo_ibge" : 3160504,
		"sigla" : "MG"
	},
	{
		"id" : 3122,
		"nome" : "Santo Antônio do Sudoeste",
		"codigo_ibge" : 4124400,
		"sigla" : "PR"
	},
	{
		"id" : 2532,
		"nome" : "Santo Antônio do Tauá",
		"codigo_ibge" : 1507003,
		"sigla" : "PA"
	},
	{
		"id" : 1298,
		"nome" : "Santo Antônio dos Lopes",
		"codigo_ibge" : 2110302,
		"sigla" : "MA"
	},
	{
		"id" : 3548,
		"nome" : "Santo Antônio dos Milagres",
		"codigo_ibge" : 2209450,
		"sigla" : "PI"
	},
	{
		"id" : 4227,
		"nome" : "Santo Augusto",
		"codigo_ibge" : 4317806,
		"sigla" : "RS"
	},
	{
		"id" : 4228,
		"nome" : "Santo Cristo",
		"codigo_ibge" : 4317905,
		"sigla" : "RS"
	},
	{
		"id" : 631,
		"nome" : "Santo Estêvão",
		"codigo_ibge" : 2928802,
		"sigla" : "BA"
	},
	{
		"id" : 5248,
		"nome" : "Santo Expedito",
		"codigo_ibge" : 3548302,
		"sigla" : "SP"
	},
	{
		"id" : 4229,
		"nome" : "Santo Expedito do Sul",
		"codigo_ibge" : 4317954,
		"sigla" : "RS"
	},
	{
		"id" : 2270,
		"nome" : "Santo Hipólito",
		"codigo_ibge" : 3160603,
		"sigla" : "MG"
	},
	{
		"id" : 3123,
		"nome" : "Santo Inácio",
		"codigo_ibge" : 4124509,
		"sigla" : "PR"
	},
	{
		"id" : 3549,
		"nome" : "Santo Inácio do Piauí",
		"codigo_ibge" : 2209500,
		"sigla" : "PI"
	},
	{
		"id" : 5249,
		"nome" : "Santópolis do Aguapeí",
		"codigo_ibge" : 3548401,
		"sigla" : "SP"
	},
	{
		"id" : 5250,
		"nome" : "Santos",
		"codigo_ibge" : 3548500,
		"sigla" : "SP"
	},
	{
		"id" : 2271,
		"nome" : "Santos Dumont",
		"codigo_ibge" : 3160702,
		"sigla" : "MG"
	},
	{
		"id" : 858,
		"nome" : "São Benedito",
		"codigo_ibge" : 2312304,
		"sigla" : "CE"
	},
	{
		"id" : 1299,
		"nome" : "São Benedito do Rio Preto",
		"codigo_ibge" : 2110401,
		"sigla" : "MA"
	},
	{
		"id" : 3331,
		"nome" : "São Benedito do Sul",
		"codigo_ibge" : 2612901,
		"sigla" : "PE"
	},
	{
		"id" : 2737,
		"nome" : "São Bentinho",
		"codigo_ibge" : 2513927,
		"sigla" : "PB"
	},
	{
		"id" : 2738,
		"nome" : "São Bento",
		"codigo_ibge" : 2513901,
		"sigla" : "PB"
	},
	{
		"id" : 1300,
		"nome" : "São Bento",
		"codigo_ibge" : 2110500,
		"sigla" : "MA"
	},
	{
		"id" : 2272,
		"nome" : "São Bento Abade",
		"codigo_ibge" : 3160801,
		"sigla" : "MG"
	},
	{
		"id" : 3808,
		"nome" : "São Bento do Norte",
		"codigo_ibge" : 2411601,
		"sigla" : "RN"
	},
	{
		"id" : 5251,
		"nome" : "São Bento do Sapucaí",
		"codigo_ibge" : 3548609,
		"sigla" : "SP"
	},
	{
		"id" : 4648,
		"nome" : "São Bento do Sul",
		"codigo_ibge" : 4215802,
		"sigla" : "SC"
	},
	{
		"id" : 5547,
		"nome" : "São Bento do Tocantins",
		"codigo_ibge" : 1720101,
		"sigla" : "TO"
	},
	{
		"id" : 3809,
		"nome" : "São Bento do Trairí",
		"codigo_ibge" : 2411700,
		"sigla" : "RN"
	},
	{
		"id" : 3332,
		"nome" : "São Bento do Una",
		"codigo_ibge" : 2613008,
		"sigla" : "PE"
	},
	{
		"id" : 4649,
		"nome" : "São Bernardino",
		"codigo_ibge" : 4215752,
		"sigla" : "SC"
	},
	{
		"id" : 1301,
		"nome" : "São Bernardo",
		"codigo_ibge" : 2110609,
		"sigla" : "MA"
	},
	{
		"id" : 5252,
		"nome" : "São Bernardo do Campo",
		"codigo_ibge" : 3548708,
		"sigla" : "SP"
	},
	{
		"id" : 4650,
		"nome" : "São Bonifácio",
		"codigo_ibge" : 4215901,
		"sigla" : "SC"
	},
	{
		"id" : 4230,
		"nome" : "São Borja",
		"codigo_ibge" : 4318002,
		"sigla" : "RS"
	},
	{
		"id" : 188,
		"nome" : "São Brás",
		"codigo_ibge" : 2708204,
		"sigla" : "AL"
	},
	{
		"id" : 2273,
		"nome" : "São Brás do Suaçuí",
		"codigo_ibge" : 3160900,
		"sigla" : "MG"
	},
	{
		"id" : 3550,
		"nome" : "São Braz do Piauí",
		"codigo_ibge" : 2209559,
		"sigla" : "PI"
	},
	{
		"id" : 2533,
		"nome" : "São Caetano de Odivelas",
		"codigo_ibge" : 1507102,
		"sigla" : "PA"
	},
	{
		"id" : 5253,
		"nome" : "São Caetano do Sul",
		"codigo_ibge" : 3548807,
		"sigla" : "SP"
	},
	{
		"id" : 3333,
		"nome" : "São Caitano",
		"codigo_ibge" : 2613107,
		"sigla" : "PE"
	},
	{
		"id" : 4651,
		"nome" : "São Carlos",
		"codigo_ibge" : 4216008,
		"sigla" : "SC"
	},
	{
		"id" : 5254,
		"nome" : "São Carlos",
		"codigo_ibge" : 3548906,
		"sigla" : "SP"
	},
	{
		"id" : 3124,
		"nome" : "São Carlos do Ivaí",
		"codigo_ibge" : 4124608,
		"sigla" : "PR"
	},
	{
		"id" : 5416,
		"nome" : "São Cristóvão",
		"codigo_ibge" : 2806701,
		"sigla" : "SE"
	},
	{
		"id" : 4652,
		"nome" : "São Cristóvão do Sul",
		"codigo_ibge" : 4216057,
		"sigla" : "SC"
	},
	{
		"id" : 632,
		"nome" : "São Desidério",
		"codigo_ibge" : 2928901,
		"sigla" : "BA"
	},
	{
		"id" : 633,
		"nome" : "São Domingos",
		"codigo_ibge" : 2928950,
		"sigla" : "BA"
	},
	{
		"id" : 1096,
		"nome" : "São Domingos",
		"codigo_ibge" : 5219803,
		"sigla" : "GO"
	},
	{
		"id" : 4653,
		"nome" : "São Domingos",
		"codigo_ibge" : 4216107,
		"sigla" : "SC"
	},
	{
		"id" : 5417,
		"nome" : "São Domingos",
		"codigo_ibge" : 2806800,
		"sigla" : "SE"
	},
	{
		"id" : 2739,
		"nome" : "São Domingos",
		"codigo_ibge" : 2513968,
		"sigla" : "PB"
	},
	{
		"id" : 2274,
		"nome" : "São Domingos das Dores",
		"codigo_ibge" : 3160959,
		"sigla" : "MG"
	},
	{
		"id" : 2534,
		"nome" : "São Domingos do Araguaia",
		"codigo_ibge" : 1507151,
		"sigla" : "PA"
	},
	{
		"id" : 1302,
		"nome" : "São Domingos do Azeitão",
		"codigo_ibge" : 2110658,
		"sigla" : "MA"
	},
	{
		"id" : 2535,
		"nome" : "São Domingos do Capim",
		"codigo_ibge" : 1507201,
		"sigla" : "PA"
	},
	{
		"id" : 2740,
		"nome" : "São Domingos do Cariri",
		"codigo_ibge" : 2513943,
		"sigla" : "PB"
	},
	{
		"id" : 1303,
		"nome" : "São Domingos do Maranhão",
		"codigo_ibge" : 2110708,
		"sigla" : "MA"
	},
	{
		"id" : 65,
		"nome" : "São Domingos do Norte",
		"codigo_ibge" : 3204658,
		"sigla" : "ES"
	},
	{
		"id" : 2275,
		"nome" : "São Domingos do Prata",
		"codigo_ibge" : 3161007,
		"sigla" : "MG"
	},
	{
		"id" : 4231,
		"nome" : "São Domingos do Sul",
		"codigo_ibge" : 4318051,
		"sigla" : "RS"
	},
	{
		"id" : 634,
		"nome" : "São Felipe",
		"codigo_ibge" : 2929107,
		"sigla" : "BA"
	},
	{
		"id" : 4388,
		"nome" : "São Felipe d Oeste",
		"codigo_ibge" : 1101484,
		"sigla" : "RO"
	},
	{
		"id" : 635,
		"nome" : "São Félix",
		"codigo_ibge" : 2929008,
		"sigla" : "BA"
	},
	{
		"id" : 1304,
		"nome" : "São Félix de Balsas",
		"codigo_ibge" : 2110807,
		"sigla" : "MA"
	},
	{
		"id" : 2276,
		"nome" : "São Félix de Minas",
		"codigo_ibge" : 3161056,
		"sigla" : "MG"
	},
	{
		"id" : 1465,
		"nome" : "São Félix do Araguaia",
		"codigo_ibge" : 5107859,
		"sigla" : "MT"
	},
	{
		"id" : 636,
		"nome" : "São Félix do Coribe",
		"codigo_ibge" : 2929057,
		"sigla" : "BA"
	},
	{
		"id" : 3551,
		"nome" : "São Félix do Piauí",
		"codigo_ibge" : 2209609,
		"sigla" : "PI"
	},
	{
		"id" : 5548,
		"nome" : "São Félix do Tocantins",
		"codigo_ibge" : 1720150,
		"sigla" : "TO"
	},
	{
		"id" : 2536,
		"nome" : "São Félix do Xingu",
		"codigo_ibge" : 1507300,
		"sigla" : "PA"
	},
	{
		"id" : 3810,
		"nome" : "São Fernando",
		"codigo_ibge" : 2411809,
		"sigla" : "RN"
	},
	{
		"id" : 3661,
		"nome" : "São Fidélis",
		"codigo_ibge" : 3304805,
		"sigla" : "RJ"
	},
	{
		"id" : 2277,
		"nome" : "São Francisco",
		"codigo_ibge" : 3161106,
		"sigla" : "MG"
	},
	{
		"id" : 2741,
		"nome" : "São Francisco",
		"codigo_ibge" : 2513984,
		"sigla" : "PB"
	},
	{
		"id" : 5418,
		"nome" : "São Francisco",
		"codigo_ibge" : 2806909,
		"sigla" : "SE"
	},
	{
		"id" : 5255,
		"nome" : "São Francisco",
		"codigo_ibge" : 3549003,
		"sigla" : "SP"
	},
	{
		"id" : 4232,
		"nome" : "São Francisco de Assis",
		"codigo_ibge" : 4318101,
		"sigla" : "RS"
	},
	{
		"id" : 3552,
		"nome" : "São Francisco de Assis do Piauí",
		"codigo_ibge" : 2209658,
		"sigla" : "PI"
	},
	{
		"id" : 1097,
		"nome" : "São Francisco de Goiás",
		"codigo_ibge" : 5219902,
		"sigla" : "GO"
	},
	{
		"id" : 3662,
		"nome" : "São Francisco de Itabapoana",
		"codigo_ibge" : 3304755,
		"sigla" : "RJ"
	},
	{
		"id" : 2278,
		"nome" : "São Francisco de Paula",
		"codigo_ibge" : 3161205,
		"sigla" : "MG"
	},
	{
		"id" : 4233,
		"nome" : "São Francisco de Paula",
		"codigo_ibge" : 4318200,
		"sigla" : "RS"
	},
	{
		"id" : 2279,
		"nome" : "São Francisco de Sales",
		"codigo_ibge" : 3161304,
		"sigla" : "MG"
	},
	{
		"id" : 1305,
		"nome" : "São Francisco do Brejão",
		"codigo_ibge" : 2110856,
		"sigla" : "MA"
	},
	{
		"id" : 637,
		"nome" : "São Francisco do Conde",
		"codigo_ibge" : 2929206,
		"sigla" : "BA"
	},
	{
		"id" : 2280,
		"nome" : "São Francisco do Glória",
		"codigo_ibge" : 3161403,
		"sigla" : "MG"
	},
	{
		"id" : 4389,
		"nome" : "São Francisco do Guaporé",
		"codigo_ibge" : 1101492,
		"sigla" : "RO"
	},
	{
		"id" : 1306,
		"nome" : "São Francisco do Maranhão",
		"codigo_ibge" : 2110906,
		"sigla" : "MA"
	},
	{
		"id" : 3811,
		"nome" : "São Francisco do Oeste",
		"codigo_ibge" : 2411908,
		"sigla" : "RN"
	},
	{
		"id" : 2537,
		"nome" : "São Francisco do Pará",
		"codigo_ibge" : 1507409,
		"sigla" : "PA"
	},
	{
		"id" : 3553,
		"nome" : "São Francisco do Piauí",
		"codigo_ibge" : 2209708,
		"sigla" : "PI"
	},
	{
		"id" : 4654,
		"nome" : "São Francisco do Sul",
		"codigo_ibge" : 4216206,
		"sigla" : "SC"
	},
	{
		"id" : 4234,
		"nome" : "São Gabriel",
		"codigo_ibge" : 4318309,
		"sigla" : "RS"
	},
	{
		"id" : 638,
		"nome" : "São Gabriel",
		"codigo_ibge" : 2929255,
		"sigla" : "BA"
	},
	{
		"id" : 270,
		"nome" : "São Gabriel da Cachoeira",
		"codigo_ibge" : 1303809,
		"sigla" : "AM"
	},
	{
		"id" : 66,
		"nome" : "São Gabriel da Palha",
		"codigo_ibge" : 3204708,
		"sigla" : "ES"
	},
	{
		"id" : 1555,
		"nome" : "São Gabriel do Oeste",
		"codigo_ibge" : 5007695,
		"sigla" : "MS"
	},
	{
		"id" : 2281,
		"nome" : "São Geraldo",
		"codigo_ibge" : 3161502,
		"sigla" : "MG"
	},
	{
		"id" : 2282,
		"nome" : "São Geraldo da Piedade",
		"codigo_ibge" : 3161601,
		"sigla" : "MG"
	},
	{
		"id" : 2538,
		"nome" : "São Geraldo do Araguaia",
		"codigo_ibge" : 1507458,
		"sigla" : "PA"
	},
	{
		"id" : 2283,
		"nome" : "São Geraldo do Baixio",
		"codigo_ibge" : 3161650,
		"sigla" : "MG"
	},
	{
		"id" : 3663,
		"nome" : "São Gonçalo",
		"codigo_ibge" : 3304904,
		"sigla" : "RJ"
	},
	{
		"id" : 2284,
		"nome" : "São Gonçalo do Abaeté",
		"codigo_ibge" : 3161700,
		"sigla" : "MG"
	},
	{
		"id" : 3812,
		"nome" : "São Gonçalo do Amarante",
		"codigo_ibge" : 2412005,
		"sigla" : "RN"
	},
	{
		"id" : 859,
		"nome" : "São Gonçalo do Amarante",
		"codigo_ibge" : 2312403,
		"sigla" : "CE"
	},
	{
		"id" : 3554,
		"nome" : "São Gonçalo do Gurguéia",
		"codigo_ibge" : 2209757,
		"sigla" : "PI"
	},
	{
		"id" : 2285,
		"nome" : "São Gonçalo do Pará",
		"codigo_ibge" : 3161809,
		"sigla" : "MG"
	},
	{
		"id" : 3555,
		"nome" : "São Gonçalo do Piauí",
		"codigo_ibge" : 2209807,
		"sigla" : "PI"
	},
	{
		"id" : 2286,
		"nome" : "São Gonçalo do Rio Abaixo",
		"codigo_ibge" : 3161908,
		"sigla" : "MG"
	},
	{
		"id" : 2287,
		"nome" : "São Gonçalo do Rio Preto",
		"codigo_ibge" : 3125507,
		"sigla" : "MG"
	},
	{
		"id" : 2288,
		"nome" : "São Gonçalo do Sapucaí",
		"codigo_ibge" : 3162005,
		"sigla" : "MG"
	},
	{
		"id" : 639,
		"nome" : "São Gonçalo dos Campos",
		"codigo_ibge" : 2929305,
		"sigla" : "BA"
	},
	{
		"id" : 2289,
		"nome" : "São Gotardo",
		"codigo_ibge" : 3162104,
		"sigla" : "MG"
	},
	{
		"id" : 4235,
		"nome" : "São Jerônimo",
		"codigo_ibge" : 4318408,
		"sigla" : "RS"
	},
	{
		"id" : 3125,
		"nome" : "São Jerônimo da Serra",
		"codigo_ibge" : 4124707,
		"sigla" : "PR"
	},
	{
		"id" : 3334,
		"nome" : "São João",
		"codigo_ibge" : 2613206,
		"sigla" : "PE"
	},
	{
		"id" : 3126,
		"nome" : "São João",
		"codigo_ibge" : 4124806,
		"sigla" : "PR"
	},
	{
		"id" : 4655,
		"nome" : "São João Batista",
		"codigo_ibge" : 4216305,
		"sigla" : "SC"
	},
	{
		"id" : 1307,
		"nome" : "São João Batista",
		"codigo_ibge" : 2111003,
		"sigla" : "MA"
	},
	{
		"id" : 2290,
		"nome" : "São João Batista do Glória",
		"codigo_ibge" : 3162203,
		"sigla" : "MG"
	},
	{
		"id" : 1098,
		"nome" : "São João d Aliança",
		"codigo_ibge" : 5220009,
		"sigla" : "GO"
	},
	{
		"id" : 4410,
		"nome" : "São João da Baliza",
		"codigo_ibge" : 1400506,
		"sigla" : "RR"
	},
	{
		"id" : 3664,
		"nome" : "São João da Barra",
		"codigo_ibge" : 3305000,
		"sigla" : "RJ"
	},
	{
		"id" : 5256,
		"nome" : "São João da Boa Vista",
		"codigo_ibge" : 3549102,
		"sigla" : "SP"
	},
	{
		"id" : 3556,
		"nome" : "São João da Canabrava",
		"codigo_ibge" : 2209856,
		"sigla" : "PI"
	},
	{
		"id" : 3557,
		"nome" : "São João da Fronteira",
		"codigo_ibge" : 2209872,
		"sigla" : "PI"
	},
	{
		"id" : 2291,
		"nome" : "São João da Lagoa",
		"codigo_ibge" : 3162252,
		"sigla" : "MG"
	},
	{
		"id" : 2292,
		"nome" : "São João da Mata",
		"codigo_ibge" : 3162302,
		"sigla" : "MG"
	},
	{
		"id" : 1099,
		"nome" : "São João da Paraúna",
		"codigo_ibge" : 5220058,
		"sigla" : "GO"
	},
	{
		"id" : 2539,
		"nome" : "São João da Ponta",
		"codigo_ibge" : 1507466,
		"sigla" : "PA"
	},
	{
		"id" : 2293,
		"nome" : "São João da Ponte",
		"codigo_ibge" : 3162401,
		"sigla" : "MG"
	},
	{
		"id" : 3558,
		"nome" : "São João da Serra",
		"codigo_ibge" : 2209906,
		"sigla" : "PI"
	},
	{
		"id" : 4236,
		"nome" : "São João da Urtiga",
		"codigo_ibge" : 4318424,
		"sigla" : "RS"
	},
	{
		"id" : 3559,
		"nome" : "São João da Varjota",
		"codigo_ibge" : 2209955,
		"sigla" : "PI"
	},
	{
		"id" : 5257,
		"nome" : "São João das Duas Pontes",
		"codigo_ibge" : 3549201,
		"sigla" : "SP"
	},
	{
		"id" : 2294,
		"nome" : "São João das Missões",
		"codigo_ibge" : 3162450,
		"sigla" : "MG"
	},
	{
		"id" : 5258,
		"nome" : "São João de Iracema",
		"codigo_ibge" : 3549250,
		"sigla" : "SP"
	},
	{
		"id" : 3665,
		"nome" : "São João de Meriti",
		"codigo_ibge" : 3305109,
		"sigla" : "RJ"
	},
	{
		"id" : 2540,
		"nome" : "São João de Pirabas",
		"codigo_ibge" : 1507474,
		"sigla" : "PA"
	},
	{
		"id" : 2295,
		"nome" : "São João del Rei",
		"codigo_ibge" : 3162500,
		"sigla" : "MG"
	},
	{
		"id" : 2541,
		"nome" : "São João do Araguaia",
		"codigo_ibge" : 1507508,
		"sigla" : "PA"
	},
	{
		"id" : 3560,
		"nome" : "São João do Arraial",
		"codigo_ibge" : 2209971,
		"sigla" : "PI"
	},
	{
		"id" : 3127,
		"nome" : "São João do Caiuá",
		"codigo_ibge" : 4124905,
		"sigla" : "PR"
	},
	{
		"id" : 2742,
		"nome" : "São João do Cariri",
		"codigo_ibge" : 2514008,
		"sigla" : "PB"
	},
	{
		"id" : 1308,
		"nome" : "São João do Carú",
		"codigo_ibge" : 2111029,
		"sigla" : "MA"
	},
	{
		"id" : 4656,
		"nome" : "São João do Itaperiú",
		"codigo_ibge" : 4216354,
		"sigla" : "SC"
	},
	{
		"id" : 3128,
		"nome" : "São João do Ivaí",
		"codigo_ibge" : 4125001,
		"sigla" : "PR"
	},
	{
		"id" : 860,
		"nome" : "São João do Jaguaribe",
		"codigo_ibge" : 2312502,
		"sigla" : "CE"
	},
	{
		"id" : 2296,
		"nome" : "São João do Manhuaçu",
		"codigo_ibge" : 3162559,
		"sigla" : "MG"
	},
	{
		"id" : 2297,
		"nome" : "São João do Manteninha",
		"codigo_ibge" : 3162575,
		"sigla" : "MG"
	},
	{
		"id" : 4657,
		"nome" : "São João do Oeste",
		"codigo_ibge" : 4216255,
		"sigla" : "SC"
	},
	{
		"id" : 2298,
		"nome" : "São João do Oriente",
		"codigo_ibge" : 3162609,
		"sigla" : "MG"
	},
	{
		"id" : 2299,
		"nome" : "São João do Pacuí",
		"codigo_ibge" : 3162658,
		"sigla" : "MG"
	},
	{
		"id" : 2300,
		"nome" : "São João do Paraíso",
		"codigo_ibge" : 3162708,
		"sigla" : "MG"
	},
	{
		"id" : 1309,
		"nome" : "São João do Paraíso",
		"codigo_ibge" : 2111052,
		"sigla" : "MA"
	},
	{
		"id" : 5259,
		"nome" : "São João do Pau d Alho",
		"codigo_ibge" : 3549300,
		"sigla" : "SP"
	},
	{
		"id" : 3561,
		"nome" : "São João do Piauí",
		"codigo_ibge" : 2210003,
		"sigla" : "PI"
	},
	{
		"id" : 4237,
		"nome" : "São João do Polêsine",
		"codigo_ibge" : 4318432,
		"sigla" : "RS"
	},
	{
		"id" : 2743,
		"nome" : "São João do Rio do Peixe",
		"codigo_ibge" : 2500700,
		"sigla" : "PB"
	},
	{
		"id" : 3813,
		"nome" : "São João do Sabugi",
		"codigo_ibge" : 2412104,
		"sigla" : "RN"
	},
	{
		"id" : 1310,
		"nome" : "São João do Soter",
		"codigo_ibge" : 2111078,
		"sigla" : "MA"
	},
	{
		"id" : 4658,
		"nome" : "São João do Sul",
		"codigo_ibge" : 4216404,
		"sigla" : "SC"
	},
	{
		"id" : 2744,
		"nome" : "São João do Tigre",
		"codigo_ibge" : 2514107,
		"sigla" : "PB"
	},
	{
		"id" : 3129,
		"nome" : "São João do Triunfo",
		"codigo_ibge" : 4125100,
		"sigla" : "PR"
	},
	{
		"id" : 1311,
		"nome" : "São João dos Patos",
		"codigo_ibge" : 2111102,
		"sigla" : "MA"
	},
	{
		"id" : 2301,
		"nome" : "São João Evangelista",
		"codigo_ibge" : 3162807,
		"sigla" : "MG"
	},
	{
		"id" : 2302,
		"nome" : "São João Nepomuceno",
		"codigo_ibge" : 3162906,
		"sigla" : "MG"
	},
	{
		"id" : 4659,
		"nome" : "São Joaquim",
		"codigo_ibge" : 4216503,
		"sigla" : "SC"
	},
	{
		"id" : 5260,
		"nome" : "São Joaquim da Barra",
		"codigo_ibge" : 3549409,
		"sigla" : "SP"
	},
	{
		"id" : 2303,
		"nome" : "São Joaquim de Bicas",
		"codigo_ibge" : 3162922,
		"sigla" : "MG"
	},
	{
		"id" : 3335,
		"nome" : "São Joaquim do Monte",
		"codigo_ibge" : 2613305,
		"sigla" : "PE"
	},
	{
		"id" : 4238,
		"nome" : "São Jorge",
		"codigo_ibge" : 4318440,
		"sigla" : "RS"
	},
	{
		"id" : 3130,
		"nome" : "São Jorge d Oeste",
		"codigo_ibge" : 4125209,
		"sigla" : "PR"
	},
	{
		"id" : 3131,
		"nome" : "São Jorge do Ivaí",
		"codigo_ibge" : 4125308,
		"sigla" : "PR"
	},
	{
		"id" : 3132,
		"nome" : "São Jorge do Patrocínio",
		"codigo_ibge" : 4125357,
		"sigla" : "PR"
	},
	{
		"id" : 4660,
		"nome" : "São José",
		"codigo_ibge" : 4216602,
		"sigla" : "SC"
	},
	{
		"id" : 2304,
		"nome" : "São José da Barra",
		"codigo_ibge" : 3162948,
		"sigla" : "MG"
	},
	{
		"id" : 5261,
		"nome" : "São José da Bela Vista",
		"codigo_ibge" : 3549508,
		"sigla" : "SP"
	},
	{
		"id" : 3133,
		"nome" : "São José da Boa Vista",
		"codigo_ibge" : 4125407,
		"sigla" : "PR"
	},
	{
		"id" : 3336,
		"nome" : "São José da Coroa Grande",
		"codigo_ibge" : 2613404,
		"sigla" : "PE"
	},
	{
		"id" : 2745,
		"nome" : "São José da Lagoa Tapada",
		"codigo_ibge" : 2514206,
		"sigla" : "PB"
	},
	{
		"id" : 189,
		"nome" : "São José da Laje",
		"codigo_ibge" : 2708303,
		"sigla" : "AL"
	},
	{
		"id" : 2305,
		"nome" : "São José da Lapa",
		"codigo_ibge" : 3162955,
		"sigla" : "MG"
	},
	{
		"id" : 2306,
		"nome" : "São José da Safira",
		"codigo_ibge" : 3163003,
		"sigla" : "MG"
	},
	{
		"id" : 190,
		"nome" : "São José da Tapera",
		"codigo_ibge" : 2708402,
		"sigla" : "AL"
	},
	{
		"id" : 2307,
		"nome" : "São José da Varginha",
		"codigo_ibge" : 3163102,
		"sigla" : "MG"
	},
	{
		"id" : 640,
		"nome" : "São José da Vitória",
		"codigo_ibge" : 2929354,
		"sigla" : "BA"
	},
	{
		"id" : 4239,
		"nome" : "São José das Missões",
		"codigo_ibge" : 4318457,
		"sigla" : "RS"
	},
	{
		"id" : 3134,
		"nome" : "São José das Palmeiras",
		"codigo_ibge" : 4125456,
		"sigla" : "PR"
	},
	{
		"id" : 2746,
		"nome" : "São José de Caiana",
		"codigo_ibge" : 2514305,
		"sigla" : "PB"
	},
	{
		"id" : 2747,
		"nome" : "São José de Espinharas",
		"codigo_ibge" : 2514404,
		"sigla" : "PB"
	},
	{
		"id" : 3814,
		"nome" : "São José de Mipibu",
		"codigo_ibge" : 2412203,
		"sigla" : "RN"
	},
	{
		"id" : 2748,
		"nome" : "São José de Piranhas",
		"codigo_ibge" : 2514503,
		"sigla" : "PB"
	},
	{
		"id" : 2749,
		"nome" : "São José de Princesa",
		"codigo_ibge" : 2514552,
		"sigla" : "PB"
	},
	{
		"id" : 1312,
		"nome" : "São José de Ribamar",
		"codigo_ibge" : 2111201,
		"sigla" : "MA"
	},
	{
		"id" : 3666,
		"nome" : "São José de Ubá",
		"codigo_ibge" : 3305133,
		"sigla" : "RJ"
	},
	{
		"id" : 2308,
		"nome" : "São José do Alegre",
		"codigo_ibge" : 3163201,
		"sigla" : "MG"
	},
	{
		"id" : 5262,
		"nome" : "São José do Barreiro",
		"codigo_ibge" : 3549607,
		"sigla" : "SP"
	},
	{
		"id" : 3337,
		"nome" : "São José do Belmonte",
		"codigo_ibge" : 2613503,
		"sigla" : "PE"
	},
	{
		"id" : 2750,
		"nome" : "São José do Bonfim",
		"codigo_ibge" : 2514602,
		"sigla" : "PB"
	},
	{
		"id" : 2751,
		"nome" : "São José do Brejo do Cruz",
		"codigo_ibge" : 2514651,
		"sigla" : "PB"
	},
	{
		"id" : 67,
		"nome" : "São José do Calçado",
		"codigo_ibge" : 3204807,
		"sigla" : "ES"
	},
	{
		"id" : 3815,
		"nome" : "São José do Campestre",
		"codigo_ibge" : 2412302,
		"sigla" : "RN"
	},
	{
		"id" : 4661,
		"nome" : "São José do Cedro",
		"codigo_ibge" : 4216701,
		"sigla" : "SC"
	},
	{
		"id" : 4662,
		"nome" : "São José do Cerrito",
		"codigo_ibge" : 4216800,
		"sigla" : "SC"
	},
	{
		"id" : 2309,
		"nome" : "São José do Divino",
		"codigo_ibge" : 3163300,
		"sigla" : "MG"
	},
	{
		"id" : 3562,
		"nome" : "São José do Divino",
		"codigo_ibge" : 2210052,
		"sigla" : "PI"
	},
	{
		"id" : 3338,
		"nome" : "São José do Egito",
		"codigo_ibge" : 2613602,
		"sigla" : "PE"
	},
	{
		"id" : 2310,
		"nome" : "São José do Goiabal",
		"codigo_ibge" : 3163409,
		"sigla" : "MG"
	},
	{
		"id" : 4240,
		"nome" : "São José do Herval",
		"codigo_ibge" : 4318465,
		"sigla" : "RS"
	},
	{
		"id" : 4241,
		"nome" : "São José do Hortêncio",
		"codigo_ibge" : 4318481,
		"sigla" : "RS"
	},
	{
		"id" : 4242,
		"nome" : "São José do Inhacorá",
		"codigo_ibge" : 4318499,
		"sigla" : "RS"
	},
	{
		"id" : 641,
		"nome" : "São José do Jacuípe",
		"codigo_ibge" : 2929370,
		"sigla" : "BA"
	},
	{
		"id" : 2311,
		"nome" : "São José do Jacuri",
		"codigo_ibge" : 3163508,
		"sigla" : "MG"
	},
	{
		"id" : 2312,
		"nome" : "São José do Mantimento",
		"codigo_ibge" : 3163607,
		"sigla" : "MG"
	},
	{
		"id" : 4243,
		"nome" : "São José do Norte",
		"codigo_ibge" : 4318507,
		"sigla" : "RS"
	},
	{
		"id" : 4244,
		"nome" : "São José do Ouro",
		"codigo_ibge" : 4318606,
		"sigla" : "RS"
	},
	{
		"id" : 3563,
		"nome" : "São José do Peixe",
		"codigo_ibge" : 2210102,
		"sigla" : "PI"
	},
	{
		"id" : 3564,
		"nome" : "São José do Piauí",
		"codigo_ibge" : 2210201,
		"sigla" : "PI"
	},
	{
		"id" : 1466,
		"nome" : "São José do Povo",
		"codigo_ibge" : 5107297,
		"sigla" : "MT"
	},
	{
		"id" : 1467,
		"nome" : "São José do Rio Claro",
		"codigo_ibge" : 5107305,
		"sigla" : "MT"
	},
	{
		"id" : 5263,
		"nome" : "São José do Rio Pardo",
		"codigo_ibge" : 3549706,
		"sigla" : "SP"
	},
	{
		"id" : 5264,
		"nome" : "São José do Rio Preto",
		"codigo_ibge" : 3549805,
		"sigla" : "SP"
	},
	{
		"id" : 2752,
		"nome" : "São José do Sabugi",
		"codigo_ibge" : 2514701,
		"sigla" : "PB"
	},
	{
		"id" : 3816,
		"nome" : "São José do Seridó",
		"codigo_ibge" : 2412401,
		"sigla" : "RN"
	},
	{
		"id" : 4245,
		"nome" : "São José do Sul",
		"codigo_ibge" : 4318614,
		"sigla" : "RS"
	},
	{
		"id" : 3667,
		"nome" : "São José do Vale do Rio Preto",
		"codigo_ibge" : 3305158,
		"sigla" : "RJ"
	},
	{
		"id" : 1468,
		"nome" : "São José do Xingu",
		"codigo_ibge" : 5107354,
		"sigla" : "MT"
	},
	{
		"id" : 4246,
		"nome" : "São José dos Ausentes",
		"codigo_ibge" : 4318622,
		"sigla" : "RS"
	},
	{
		"id" : 1313,
		"nome" : "São José dos Basílios",
		"codigo_ibge" : 2111250,
		"sigla" : "MA"
	},
	{
		"id" : 5265,
		"nome" : "São José dos Campos",
		"codigo_ibge" : 3549904,
		"sigla" : "SP"
	},
	{
		"id" : 2753,
		"nome" : "São José dos Cordeiros",
		"codigo_ibge" : 2514800,
		"sigla" : "PB"
	},
	{
		"id" : 3135,
		"nome" : "São José dos Pinhais",
		"codigo_ibge" : 4125506,
		"sigla" : "PR"
	},
	{
		"id" : 1469,
		"nome" : "São José dos Quatro Marcos",
		"codigo_ibge" : 5107107,
		"sigla" : "MT"
	},
	{
		"id" : 2754,
		"nome" : "São José dos Ramos",
		"codigo_ibge" : 2514453,
		"sigla" : "PB"
	},
	{
		"id" : 3565,
		"nome" : "São Julião",
		"codigo_ibge" : 2210300,
		"sigla" : "PI"
	},
	{
		"id" : 4247,
		"nome" : "São Leopoldo",
		"codigo_ibge" : 4318705,
		"sigla" : "RS"
	},
	{
		"id" : 2313,
		"nome" : "São Lourenço",
		"codigo_ibge" : 3163706,
		"sigla" : "MG"
	},
	{
		"id" : 3339,
		"nome" : "São Lourenço da Mata",
		"codigo_ibge" : 2613701,
		"sigla" : "PE"
	},
	{
		"id" : 5266,
		"nome" : "São Lourenço da Serra",
		"codigo_ibge" : 3549953,
		"sigla" : "SP"
	},
	{
		"id" : 4663,
		"nome" : "São Lourenço do Oeste",
		"codigo_ibge" : 4216909,
		"sigla" : "SC"
	},
	{
		"id" : 3566,
		"nome" : "São Lourenço do Piauí",
		"codigo_ibge" : 2210359,
		"sigla" : "PI"
	},
	{
		"id" : 4248,
		"nome" : "São Lourenço do Sul",
		"codigo_ibge" : 4318804,
		"sigla" : "RS"
	},
	{
		"id" : 4664,
		"nome" : "São Ludgero",
		"codigo_ibge" : 4217006,
		"sigla" : "SC"
	},
	{
		"id" : 1314,
		"nome" : "São Luís",
		"codigo_ibge" : 2111300,
		"sigla" : "MA"
	},
	{
		"id" : 1100,
		"nome" : "São Luís de Montes Belos",
		"codigo_ibge" : 5220108,
		"sigla" : "GO"
	},
	{
		"id" : 861,
		"nome" : "São Luís do Curu",
		"codigo_ibge" : 2312601,
		"sigla" : "CE"
	},
	{
		"id" : 3567,
		"nome" : "São Luis do Piauí",
		"codigo_ibge" : 2210375,
		"sigla" : "PI"
	},
	{
		"id" : 191,
		"nome" : "São Luís do Quitunde",
		"codigo_ibge" : 2708501,
		"sigla" : "AL"
	},
	{
		"id" : 1315,
		"nome" : "São Luís Gonzaga do Maranhão",
		"codigo_ibge" : 2111409,
		"sigla" : "MA"
	},
	{
		"id" : 4411,
		"nome" : "São Luiz",
		"codigo_ibge" : 1400605,
		"sigla" : "RR"
	},
	{
		"id" : 1101,
		"nome" : "São Luiz do Norte",
		"codigo_ibge" : 5220157,
		"sigla" : "GO"
	},
	{
		"id" : 5267,
		"nome" : "São Luiz do Paraitinga",
		"codigo_ibge" : 3550001,
		"sigla" : "SP"
	},
	{
		"id" : 4249,
		"nome" : "São Luiz Gonzaga",
		"codigo_ibge" : 4318903,
		"sigla" : "RS"
	},
	{
		"id" : 2755,
		"nome" : "São Mamede",
		"codigo_ibge" : 2514909,
		"sigla" : "PB"
	},
	{
		"id" : 3136,
		"nome" : "São Manoel do Paraná",
		"codigo_ibge" : 4125555,
		"sigla" : "PR"
	},
	{
		"id" : 5268,
		"nome" : "São Manuel",
		"codigo_ibge" : 3550100,
		"sigla" : "SP"
	},
	{
		"id" : 4250,
		"nome" : "São Marcos",
		"codigo_ibge" : 4319000,
		"sigla" : "RS"
	},
	{
		"id" : 4251,
		"nome" : "São Martinho",
		"codigo_ibge" : 4319109,
		"sigla" : "RS"
	},
	{
		"id" : 4665,
		"nome" : "São Martinho",
		"codigo_ibge" : 4217105,
		"sigla" : "SC"
	},
	{
		"id" : 4252,
		"nome" : "São Martinho da Serra",
		"codigo_ibge" : 4319125,
		"sigla" : "RS"
	},
	{
		"id" : 68,
		"nome" : "São Mateus",
		"codigo_ibge" : 3204906,
		"sigla" : "ES"
	},
	{
		"id" : 1316,
		"nome" : "São Mateus do Maranhão",
		"codigo_ibge" : 2111508,
		"sigla" : "MA"
	},
	{
		"id" : 3137,
		"nome" : "São Mateus do Sul",
		"codigo_ibge" : 4125605,
		"sigla" : "PR"
	},
	{
		"id" : 3817,
		"nome" : "São Miguel",
		"codigo_ibge" : 2412500,
		"sigla" : "RN"
	},
	{
		"id" : 5269,
		"nome" : "São Miguel Arcanjo",
		"codigo_ibge" : 3550209,
		"sigla" : "SP"
	},
	{
		"id" : 3568,
		"nome" : "São Miguel da Baixa Grande",
		"codigo_ibge" : 2210383,
		"sigla" : "PI"
	},
	{
		"id" : 4666,
		"nome" : "São Miguel da Boa Vista",
		"codigo_ibge" : 4217154,
		"sigla" : "SC"
	},
	{
		"id" : 642,
		"nome" : "São Miguel das Matas",
		"codigo_ibge" : 2929404,
		"sigla" : "BA"
	},
	{
		"id" : 4253,
		"nome" : "São Miguel das Missões",
		"codigo_ibge" : 4319158,
		"sigla" : "RS"
	},
	{
		"id" : 2756,
		"nome" : "São Miguel de Taipu",
		"codigo_ibge" : 2515005,
		"sigla" : "PB"
	},
	{
		"id" : 5419,
		"nome" : "São Miguel do Aleixo",
		"codigo_ibge" : 2807006,
		"sigla" : "SE"
	},
	{
		"id" : 2314,
		"nome" : "São Miguel do Anta",
		"codigo_ibge" : 3163805,
		"sigla" : "MG"
	},
	{
		"id" : 1102,
		"nome" : "São Miguel do Araguaia",
		"codigo_ibge" : 5220207,
		"sigla" : "GO"
	},
	{
		"id" : 3569,
		"nome" : "São Miguel do Fidalgo",
		"codigo_ibge" : 2210391,
		"sigla" : "PI"
	},
	{
		"id" : 3818,
		"nome" : "São Miguel do Gostoso",
		"codigo_ibge" : 2412559,
		"sigla" : "RN"
	},
	{
		"id" : 2542,
		"nome" : "São Miguel do Guamá",
		"codigo_ibge" : 1507607,
		"sigla" : "PA"
	},
	{
		"id" : 4390,
		"nome" : "São Miguel do Guaporé",
		"codigo_ibge" : 1100320,
		"sigla" : "RO"
	},
	{
		"id" : 3138,
		"nome" : "São Miguel do Iguaçu",
		"codigo_ibge" : 4125704,
		"sigla" : "PR"
	},
	{
		"id" : 4667,
		"nome" : "São Miguel do Oeste",
		"codigo_ibge" : 4217204,
		"sigla" : "SC"
	},
	{
		"id" : 1103,
		"nome" : "São Miguel do Passa Quatro",
		"codigo_ibge" : 5220264,
		"sigla" : "GO"
	},
	{
		"id" : 3570,
		"nome" : "São Miguel do Tapuio",
		"codigo_ibge" : 2210409,
		"sigla" : "PI"
	},
	{
		"id" : 5549,
		"nome" : "São Miguel do Tocantins",
		"codigo_ibge" : 1720200,
		"sigla" : "TO"
	},
	{
		"id" : 192,
		"nome" : "São Miguel dos Campos",
		"codigo_ibge" : 2708600,
		"sigla" : "AL"
	},
	{
		"id" : 193,
		"nome" : "São Miguel dos Milagres",
		"codigo_ibge" : 2708709,
		"sigla" : "AL"
	},
	{
		"id" : 4254,
		"nome" : "São Nicolau",
		"codigo_ibge" : 4319208,
		"sigla" : "RS"
	},
	{
		"id" : 1104,
		"nome" : "São Patrício",
		"codigo_ibge" : 5220280,
		"sigla" : "GO"
	},
	{
		"id" : 5270,
		"nome" : "São Paulo",
		"codigo_ibge" : 3550308,
		"sigla" : "SP"
	},
	{
		"id" : 4255,
		"nome" : "São Paulo das Missões",
		"codigo_ibge" : 4319307,
		"sigla" : "RS"
	},
	{
		"id" : 271,
		"nome" : "São Paulo de Olivença",
		"codigo_ibge" : 1303908,
		"sigla" : "AM"
	},
	{
		"id" : 3819,
		"nome" : "São Paulo do Potengi",
		"codigo_ibge" : 2412609,
		"sigla" : "RN"
	},
	{
		"id" : 3820,
		"nome" : "São Pedro",
		"codigo_ibge" : 2412708,
		"sigla" : "RN"
	},
	{
		"id" : 5271,
		"nome" : "São Pedro",
		"codigo_ibge" : 3550407,
		"sigla" : "SP"
	},
	{
		"id" : 1317,
		"nome" : "São Pedro da Água Branca",
		"codigo_ibge" : 2111532,
		"sigla" : "MA"
	},
	{
		"id" : 3668,
		"nome" : "São Pedro da Aldeia",
		"codigo_ibge" : 3305208,
		"sigla" : "RJ"
	},
	{
		"id" : 1470,
		"nome" : "São Pedro da Cipa",
		"codigo_ibge" : 5107404,
		"sigla" : "MT"
	},
	{
		"id" : 4256,
		"nome" : "São Pedro da Serra",
		"codigo_ibge" : 4319356,
		"sigla" : "RS"
	},
	{
		"id" : 2315,
		"nome" : "São Pedro da União",
		"codigo_ibge" : 3163904,
		"sigla" : "MG"
	},
	{
		"id" : 4257,
		"nome" : "São Pedro das Missões",
		"codigo_ibge" : 4319364,
		"sigla" : "RS"
	},
	{
		"id" : 4668,
		"nome" : "São Pedro de Alcântara",
		"codigo_ibge" : 4217253,
		"sigla" : "SC"
	},
	{
		"id" : 4258,
		"nome" : "São Pedro do Butiá",
		"codigo_ibge" : 4319372,
		"sigla" : "RS"
	},
	{
		"id" : 3139,
		"nome" : "São Pedro do Iguaçu",
		"codigo_ibge" : 4125753,
		"sigla" : "PR"
	},
	{
		"id" : 3140,
		"nome" : "São Pedro do Ivaí",
		"codigo_ibge" : 4125803,
		"sigla" : "PR"
	},
	{
		"id" : 3141,
		"nome" : "São Pedro do Paraná",
		"codigo_ibge" : 4125902,
		"sigla" : "PR"
	},
	{
		"id" : 3571,
		"nome" : "São Pedro do Piauí",
		"codigo_ibge" : 2210508,
		"sigla" : "PI"
	},
	{
		"id" : 2316,
		"nome" : "São Pedro do Suaçuí",
		"codigo_ibge" : 3164100,
		"sigla" : "MG"
	},
	{
		"id" : 4259,
		"nome" : "São Pedro do Sul",
		"codigo_ibge" : 4319406,
		"sigla" : "RS"
	},
	{
		"id" : 5272,
		"nome" : "São Pedro do Turvo",
		"codigo_ibge" : 3550506,
		"sigla" : "SP"
	},
	{
		"id" : 1318,
		"nome" : "São Pedro dos Crentes",
		"codigo_ibge" : 2111573,
		"sigla" : "MA"
	},
	{
		"id" : 2317,
		"nome" : "São Pedro dos Ferros",
		"codigo_ibge" : 3164001,
		"sigla" : "MG"
	},
	{
		"id" : 3821,
		"nome" : "São Rafael",
		"codigo_ibge" : 2412807,
		"sigla" : "RN"
	},
	{
		"id" : 1319,
		"nome" : "São Raimundo das Mangabeiras",
		"codigo_ibge" : 2111607,
		"sigla" : "MA"
	},
	{
		"id" : 1320,
		"nome" : "São Raimundo do Doca Bezerra",
		"codigo_ibge" : 2111631,
		"sigla" : "MA"
	},
	{
		"id" : 3572,
		"nome" : "São Raimundo Nonato",
		"codigo_ibge" : 2210607,
		"sigla" : "PI"
	},
	{
		"id" : 1321,
		"nome" : "São Roberto",
		"codigo_ibge" : 2111672,
		"sigla" : "MA"
	},
	{
		"id" : 2318,
		"nome" : "São Romão",
		"codigo_ibge" : 3164209,
		"sigla" : "MG"
	},
	{
		"id" : 5273,
		"nome" : "São Roque",
		"codigo_ibge" : 3550605,
		"sigla" : "SP"
	},
	{
		"id" : 2319,
		"nome" : "São Roque de Minas",
		"codigo_ibge" : 3164308,
		"sigla" : "MG"
	},
	{
		"id" : 69,
		"nome" : "São Roque do Canaã",
		"codigo_ibge" : 3204955,
		"sigla" : "ES"
	},
	{
		"id" : 5550,
		"nome" : "São Salvador do Tocantins",
		"codigo_ibge" : 1720259,
		"sigla" : "TO"
	},
	{
		"id" : 5274,
		"nome" : "São Sebastião",
		"codigo_ibge" : 3550704,
		"sigla" : "SP"
	},
	{
		"id" : 194,
		"nome" : "São Sebastião",
		"codigo_ibge" : 2708808,
		"sigla" : "AL"
	},
	{
		"id" : 3142,
		"nome" : "São Sebastião da Amoreira",
		"codigo_ibge" : 4126009,
		"sigla" : "PR"
	},
	{
		"id" : 2320,
		"nome" : "São Sebastião da Bela Vista",
		"codigo_ibge" : 3164407,
		"sigla" : "MG"
	},
	{
		"id" : 2543,
		"nome" : "São Sebastião da Boa Vista",
		"codigo_ibge" : 1507706,
		"sigla" : "PA"
	},
	{
		"id" : 5275,
		"nome" : "São Sebastião da Grama",
		"codigo_ibge" : 3550803,
		"sigla" : "SP"
	},
	{
		"id" : 2321,
		"nome" : "São Sebastião da Vargem Alegre",
		"codigo_ibge" : 3164431,
		"sigla" : "MG"
	},
	{
		"id" : 2757,
		"nome" : "São Sebastião de Lagoa de Roça",
		"codigo_ibge" : 2515104,
		"sigla" : "PB"
	},
	{
		"id" : 3669,
		"nome" : "São Sebastião do Alto",
		"codigo_ibge" : 3305307,
		"sigla" : "RJ"
	},
	{
		"id" : 2322,
		"nome" : "São Sebastião do Anta",
		"codigo_ibge" : 3164472,
		"sigla" : "MG"
	},
	{
		"id" : 4260,
		"nome" : "São Sebastião do Caí",
		"codigo_ibge" : 4319505,
		"sigla" : "RS"
	},
	{
		"id" : 2323,
		"nome" : "São Sebastião do Maranhão",
		"codigo_ibge" : 3164506,
		"sigla" : "MG"
	},
	{
		"id" : 2324,
		"nome" : "São Sebastião do Oeste",
		"codigo_ibge" : 3164605,
		"sigla" : "MG"
	},
	{
		"id" : 2325,
		"nome" : "São Sebastião do Paraíso",
		"codigo_ibge" : 3164704,
		"sigla" : "MG"
	},
	{
		"id" : 643,
		"nome" : "São Sebastião do Passé",
		"codigo_ibge" : 2929503,
		"sigla" : "BA"
	},
	{
		"id" : 2326,
		"nome" : "São Sebastião do Rio Preto",
		"codigo_ibge" : 3164803,
		"sigla" : "MG"
	},
	{
		"id" : 2327,
		"nome" : "São Sebastião do Rio Verde",
		"codigo_ibge" : 3164902,
		"sigla" : "MG"
	},
	{
		"id" : 5551,
		"nome" : "São Sebastião do Tocantins",
		"codigo_ibge" : 1720309,
		"sigla" : "TO"
	},
	{
		"id" : 272,
		"nome" : "São Sebastião do Uatumã",
		"codigo_ibge" : 1303957,
		"sigla" : "AM"
	},
	{
		"id" : 2758,
		"nome" : "São Sebastião do Umbuzeiro",
		"codigo_ibge" : 2515203,
		"sigla" : "PB"
	},
	{
		"id" : 4261,
		"nome" : "São Sepé",
		"codigo_ibge" : 4319604,
		"sigla" : "RS"
	},
	{
		"id" : 5276,
		"nome" : "São Simão",
		"codigo_ibge" : 3550902,
		"sigla" : "SP"
	},
	{
		"id" : 1105,
		"nome" : "São Simão",
		"codigo_ibge" : 5220405,
		"sigla" : "GO"
	},
	{
		"id" : 2329,
		"nome" : "São Tiago",
		"codigo_ibge" : 3165008,
		"sigla" : "MG"
	},
	{
		"id" : 2330,
		"nome" : "São Tomás de Aquino",
		"codigo_ibge" : 3165107,
		"sigla" : "MG"
	},
	{
		"id" : 3143,
		"nome" : "São Tomé",
		"codigo_ibge" : 4126108,
		"sigla" : "PR"
	},
	{
		"id" : 3822,
		"nome" : "São Tomé",
		"codigo_ibge" : 2412906,
		"sigla" : "RN"
	},
	{
		"id" : 2328,
		"nome" : "São Tomé das Letras",
		"codigo_ibge" : 3165206,
		"sigla" : "MG"
	},
	{
		"id" : 4262,
		"nome" : "São Valentim",
		"codigo_ibge" : 4319703,
		"sigla" : "RS"
	},
	{
		"id" : 4263,
		"nome" : "São Valentim do Sul",
		"codigo_ibge" : 4319711,
		"sigla" : "RS"
	},
	{
		"id" : 5552,
		"nome" : "São Valério",
		"codigo_ibge" : 1720499,
		"sigla" : "TO"
	},
	{
		"id" : 4264,
		"nome" : "São Valério do Sul",
		"codigo_ibge" : 4319737,
		"sigla" : "RS"
	},
	{
		"id" : 4265,
		"nome" : "São Vendelino",
		"codigo_ibge" : 4319752,
		"sigla" : "RS"
	},
	{
		"id" : 5277,
		"nome" : "São Vicente",
		"codigo_ibge" : 3551009,
		"sigla" : "SP"
	},
	{
		"id" : 3823,
		"nome" : "São Vicente",
		"codigo_ibge" : 2413003,
		"sigla" : "RN"
	},
	{
		"id" : 2331,
		"nome" : "São Vicente de Minas",
		"codigo_ibge" : 3165305,
		"sigla" : "MG"
	},
	{
		"id" : 2760,
		"nome" : "São Vicente do Seridó",
		"codigo_ibge" : 2515401,
		"sigla" : "PB"
	},
	{
		"id" : 4266,
		"nome" : "São Vicente do Sul",
		"codigo_ibge" : 4319802,
		"sigla" : "RS"
	},
	{
		"id" : 3340,
		"nome" : "São Vicente Férrer",
		"codigo_ibge" : 2613800,
		"sigla" : "PE"
	},
	{
		"id" : 1322,
		"nome" : "São Vicente Ferrer",
		"codigo_ibge" : 2111706,
		"sigla" : "MA"
	},
	{
		"id" : 2759,
		"nome" : "Sapé",
		"codigo_ibge" : 2515302,
		"sigla" : "PB"
	},
	{
		"id" : 644,
		"nome" : "Sapeaçu",
		"codigo_ibge" : 2929602,
		"sigla" : "BA"
	},
	{
		"id" : 1471,
		"nome" : "Sapezal",
		"codigo_ibge" : 5107875,
		"sigla" : "MT"
	},
	{
		"id" : 4267,
		"nome" : "Sapiranga",
		"codigo_ibge" : 4319901,
		"sigla" : "RS"
	},
	{
		"id" : 3144,
		"nome" : "Sapopema",
		"codigo_ibge" : 4126207,
		"sigla" : "PR"
	},
	{
		"id" : 2332,
		"nome" : "Sapucaí Mirim",
		"codigo_ibge" : 3165404,
		"sigla" : "MG"
	},
	{
		"id" : 2544,
		"nome" : "Sapucaia",
		"codigo_ibge" : 1507755,
		"sigla" : "PA"
	},
	{
		"id" : 3670,
		"nome" : "Sapucaia",
		"codigo_ibge" : 3305406,
		"sigla" : "RJ"
	},
	{
		"id" : 4268,
		"nome" : "Sapucaia do Sul",
		"codigo_ibge" : 4320008,
		"sigla" : "RS"
	},
	{
		"id" : 3671,
		"nome" : "Saquarema",
		"codigo_ibge" : 3305505,
		"sigla" : "RJ"
	},
	{
		"id" : 3145,
		"nome" : "Sarandi",
		"codigo_ibge" : 4126256,
		"sigla" : "PR"
	},
	{
		"id" : 4269,
		"nome" : "Sarandi",
		"codigo_ibge" : 4320107,
		"sigla" : "RS"
	},
	{
		"id" : 5278,
		"nome" : "Sarapuí",
		"codigo_ibge" : 3551108,
		"sigla" : "SP"
	},
	{
		"id" : 2333,
		"nome" : "Sardoá",
		"codigo_ibge" : 3165503,
		"sigla" : "MG"
	},
	{
		"id" : 5279,
		"nome" : "Sarutaiá",
		"codigo_ibge" : 3551207,
		"sigla" : "SP"
	},
	{
		"id" : 2334,
		"nome" : "Sarzedo",
		"codigo_ibge" : 3165537,
		"sigla" : "MG"
	},
	{
		"id" : 645,
		"nome" : "Sátiro Dias",
		"codigo_ibge" : 2929701,
		"sigla" : "BA"
	},
	{
		"id" : 195,
		"nome" : "Satuba",
		"codigo_ibge" : 2708907,
		"sigla" : "AL"
	},
	{
		"id" : 1323,
		"nome" : "Satubinha",
		"codigo_ibge" : 2111722,
		"sigla" : "MA"
	},
	{
		"id" : 646,
		"nome" : "Saubara",
		"codigo_ibge" : 2929750,
		"sigla" : "BA"
	},
	{
		"id" : 3146,
		"nome" : "Saudade do Iguaçu",
		"codigo_ibge" : 4126272,
		"sigla" : "PR"
	},
	{
		"id" : 4669,
		"nome" : "Saudades",
		"codigo_ibge" : 4217303,
		"sigla" : "SC"
	},
	{
		"id" : 647,
		"nome" : "Saúde",
		"codigo_ibge" : 2929800,
		"sigla" : "BA"
	},
	{
		"id" : 4670,
		"nome" : "Schroeder",
		"codigo_ibge" : 4217402,
		"sigla" : "SC"
	},
	{
		"id" : 648,
		"nome" : "Seabra",
		"codigo_ibge" : 2929909,
		"sigla" : "BA"
	},
	{
		"id" : 4671,
		"nome" : "Seara",
		"codigo_ibge" : 4217501,
		"sigla" : "SC"
	},
	{
		"id" : 5280,
		"nome" : "Sebastianópolis do Sul",
		"codigo_ibge" : 3551306,
		"sigla" : "SP"
	},
	{
		"id" : 3573,
		"nome" : "Sebastião Barros",
		"codigo_ibge" : 2210623,
		"sigla" : "PI"
	},
	{
		"id" : 649,
		"nome" : "Sebastião Laranjeiras",
		"codigo_ibge" : 2930006,
		"sigla" : "BA"
	},
	{
		"id" : 3574,
		"nome" : "Sebastião Leal",
		"codigo_ibge" : 2210631,
		"sigla" : "PI"
	},
	{
		"id" : 4270,
		"nome" : "Seberi",
		"codigo_ibge" : 4320206,
		"sigla" : "RS"
	},
	{
		"id" : 4271,
		"nome" : "Sede Nova",
		"codigo_ibge" : 4320230,
		"sigla" : "RS"
	},
	{
		"id" : 4272,
		"nome" : "Segredo",
		"codigo_ibge" : 4320263,
		"sigla" : "RS"
	},
	{
		"id" : 4273,
		"nome" : "Selbach",
		"codigo_ibge" : 4320305,
		"sigla" : "RS"
	},
	{
		"id" : 1556,
		"nome" : "Selvíria",
		"codigo_ibge" : 5007802,
		"sigla" : "MS"
	},
	{
		"id" : 2335,
		"nome" : "Sem Peixe",
		"codigo_ibge" : 3165560,
		"sigla" : "MG"
	},
	{
		"id" : 97,
		"nome" : "Sena Madureira",
		"codigo_ibge" : 1200500,
		"sigla" : "AC"
	},
	{
		"id" : 1324,
		"nome" : "Senador Alexandre Costa",
		"codigo_ibge" : 2111748,
		"sigla" : "MA"
	},
	{
		"id" : 2336,
		"nome" : "Senador Amaral",
		"codigo_ibge" : 3165578,
		"sigla" : "MG"
	},
	{
		"id" : 1106,
		"nome" : "Senador Canedo",
		"codigo_ibge" : 5220454,
		"sigla" : "GO"
	},
	{
		"id" : 2337,
		"nome" : "Senador Cortes",
		"codigo_ibge" : 3165602,
		"sigla" : "MG"
	},
	{
		"id" : 3824,
		"nome" : "Senador Elói de Souza",
		"codigo_ibge" : 2413102,
		"sigla" : "RN"
	},
	{
		"id" : 2338,
		"nome" : "Senador Firmino",
		"codigo_ibge" : 3165701,
		"sigla" : "MG"
	},
	{
		"id" : 3825,
		"nome" : "Senador Georgino Avelino",
		"codigo_ibge" : 2413201,
		"sigla" : "RN"
	},
	{
		"id" : 98,
		"nome" : "Senador Guiomard",
		"codigo_ibge" : 1200450,
		"sigla" : "AC"
	},
	{
		"id" : 2339,
		"nome" : "Senador José Bento",
		"codigo_ibge" : 3165800,
		"sigla" : "MG"
	},
	{
		"id" : 2545,
		"nome" : "Senador José Porfírio",
		"codigo_ibge" : 1507805,
		"sigla" : "PA"
	},
	{
		"id" : 1325,
		"nome" : "Senador La Rocque",
		"codigo_ibge" : 2111763,
		"sigla" : "MA"
	},
	{
		"id" : 2340,
		"nome" : "Senador Modestino Gonçalves",
		"codigo_ibge" : 3165909,
		"sigla" : "MG"
	},
	{
		"id" : 862,
		"nome" : "Senador Pompeu",
		"codigo_ibge" : 2312700,
		"sigla" : "CE"
	},
	{
		"id" : 196,
		"nome" : "Senador Rui Palmeira",
		"codigo_ibge" : 2708956,
		"sigla" : "AL"
	},
	{
		"id" : 863,
		"nome" : "Senador Sá",
		"codigo_ibge" : 2312809,
		"sigla" : "CE"
	},
	{
		"id" : 4274,
		"nome" : "Senador Salgado Filho",
		"codigo_ibge" : 4320321,
		"sigla" : "RS"
	},
	{
		"id" : 3147,
		"nome" : "Sengés",
		"codigo_ibge" : 4126306,
		"sigla" : "PR"
	},
	{
		"id" : 650,
		"nome" : "Senhor do Bonfim",
		"codigo_ibge" : 2930105,
		"sigla" : "BA"
	},
	{
		"id" : 2341,
		"nome" : "Senhora de Oliveira",
		"codigo_ibge" : 3166006,
		"sigla" : "MG"
	},
	{
		"id" : 2342,
		"nome" : "Senhora do Porto",
		"codigo_ibge" : 3166105,
		"sigla" : "MG"
	},
	{
		"id" : 2343,
		"nome" : "Senhora dos Remédios",
		"codigo_ibge" : 3166204,
		"sigla" : "MG"
	},
	{
		"id" : 4275,
		"nome" : "Sentinela do Sul",
		"codigo_ibge" : 4320354,
		"sigla" : "RS"
	},
	{
		"id" : 651,
		"nome" : "Sento Sé",
		"codigo_ibge" : 2930204,
		"sigla" : "BA"
	},
	{
		"id" : 4276,
		"nome" : "Serafina Corrêa",
		"codigo_ibge" : 4320404,
		"sigla" : "RS"
	},
	{
		"id" : 2344,
		"nome" : "Sericita",
		"codigo_ibge" : 3166303,
		"sigla" : "MG"
	},
	{
		"id" : 4391,
		"nome" : "Seringueiras",
		"codigo_ibge" : 1101500,
		"sigla" : "RO"
	},
	{
		"id" : 4277,
		"nome" : "Sério",
		"codigo_ibge" : 4320453,
		"sigla" : "RS"
	},
	{
		"id" : 2345,
		"nome" : "Seritinga",
		"codigo_ibge" : 3166402,
		"sigla" : "MG"
	},
	{
		"id" : 3672,
		"nome" : "Seropédica",
		"codigo_ibge" : 3305554,
		"sigla" : "RJ"
	},
	{
		"id" : 70,
		"nome" : "Serra",
		"codigo_ibge" : 3205002,
		"sigla" : "ES"
	},
	{
		"id" : 4672,
		"nome" : "Serra Alta",
		"codigo_ibge" : 4217550,
		"sigla" : "SC"
	},
	{
		"id" : 5281,
		"nome" : "Serra Azul",
		"codigo_ibge" : 3551405,
		"sigla" : "SP"
	},
	{
		"id" : 2346,
		"nome" : "Serra Azul de Minas",
		"codigo_ibge" : 3166501,
		"sigla" : "MG"
	},
	{
		"id" : 2761,
		"nome" : "Serra Branca",
		"codigo_ibge" : 2515500,
		"sigla" : "PB"
	},
	{
		"id" : 3793,
		"nome" : "Serra Caiada",
		"codigo_ibge" : 2410306,
		"sigla" : "RN"
	},
	{
		"id" : 2762,
		"nome" : "Serra da Raiz",
		"codigo_ibge" : 2515609,
		"sigla" : "PB"
	},
	{
		"id" : 2347,
		"nome" : "Serra da Saudade",
		"codigo_ibge" : 3166600,
		"sigla" : "MG"
	},
	{
		"id" : 3826,
		"nome" : "Serra de São Bento",
		"codigo_ibge" : 2413300,
		"sigla" : "RN"
	},
	{
		"id" : 3827,
		"nome" : "Serra do Mel",
		"codigo_ibge" : 2413359,
		"sigla" : "RN"
	},
	{
		"id" : 216,
		"nome" : "Serra do Navio",
		"codigo_ibge" : 1600055,
		"sigla" : "AP"
	},
	{
		"id" : 652,
		"nome" : "Serra do Ramalho",
		"codigo_ibge" : 2930154,
		"sigla" : "BA"
	},
	{
		"id" : 2348,
		"nome" : "Serra do Salitre",
		"codigo_ibge" : 3166808,
		"sigla" : "MG"
	},
	{
		"id" : 2349,
		"nome" : "Serra dos Aimorés",
		"codigo_ibge" : 3166709,
		"sigla" : "MG"
	},
	{
		"id" : 653,
		"nome" : "Serra Dourada",
		"codigo_ibge" : 2930303,
		"sigla" : "BA"
	},
	{
		"id" : 2763,
		"nome" : "Serra Grande",
		"codigo_ibge" : 2515708,
		"sigla" : "PB"
	},
	{
		"id" : 5282,
		"nome" : "Serra Negra",
		"codigo_ibge" : 3551603,
		"sigla" : "SP"
	},
	{
		"id" : 3828,
		"nome" : "Serra Negra do Norte",
		"codigo_ibge" : 2413409,
		"sigla" : "RN"
	},
	{
		"id" : 1472,
		"nome" : "Serra Nova Dourada",
		"codigo_ibge" : 5107883,
		"sigla" : "MT"
	},
	{
		"id" : 654,
		"nome" : "Serra Preta",
		"codigo_ibge" : 2930402,
		"sigla" : "BA"
	},
	{
		"id" : 2764,
		"nome" : "Serra Redonda",
		"codigo_ibge" : 2515807,
		"sigla" : "PB"
	},
	{
		"id" : 3341,
		"nome" : "Serra Talhada",
		"codigo_ibge" : 2613909,
		"sigla" : "PE"
	},
	{
		"id" : 5283,
		"nome" : "Serrana",
		"codigo_ibge" : 3551504,
		"sigla" : "SP"
	},
	{
		"id" : 2350,
		"nome" : "Serrania",
		"codigo_ibge" : 3166907,
		"sigla" : "MG"
	},
	{
		"id" : 1326,
		"nome" : "Serrano do Maranhão",
		"codigo_ibge" : 2111789,
		"sigla" : "MA"
	},
	{
		"id" : 1107,
		"nome" : "Serranópolis",
		"codigo_ibge" : 5220504,
		"sigla" : "GO"
	},
	{
		"id" : 2351,
		"nome" : "Serranópolis de Minas",
		"codigo_ibge" : 3166956,
		"sigla" : "MG"
	},
	{
		"id" : 3148,
		"nome" : "Serranópolis do Iguaçu",
		"codigo_ibge" : 4126355,
		"sigla" : "PR"
	},
	{
		"id" : 2352,
		"nome" : "Serranos",
		"codigo_ibge" : 3167004,
		"sigla" : "MG"
	},
	{
		"id" : 2765,
		"nome" : "Serraria",
		"codigo_ibge" : 2515906,
		"sigla" : "PB"
	},
	{
		"id" : 3829,
		"nome" : "Serrinha",
		"codigo_ibge" : 2413508,
		"sigla" : "RN"
	},
	{
		"id" : 655,
		"nome" : "Serrinha",
		"codigo_ibge" : 2930501,
		"sigla" : "BA"
	},
	{
		"id" : 3830,
		"nome" : "Serrinha dos Pintos",
		"codigo_ibge" : 2413557,
		"sigla" : "RN"
	},
	{
		"id" : 3342,
		"nome" : "Serrita",
		"codigo_ibge" : 2614006,
		"sigla" : "PE"
	},
	{
		"id" : 2353,
		"nome" : "Serro",
		"codigo_ibge" : 3167103,
		"sigla" : "MG"
	},
	{
		"id" : 656,
		"nome" : "Serrolândia",
		"codigo_ibge" : 2930600,
		"sigla" : "BA"
	},
	{
		"id" : 3149,
		"nome" : "Sertaneja",
		"codigo_ibge" : 4126405,
		"sigla" : "PR"
	},
	{
		"id" : 3343,
		"nome" : "Sertânia",
		"codigo_ibge" : 2614105,
		"sigla" : "PE"
	},
	{
		"id" : 3150,
		"nome" : "Sertanópolis",
		"codigo_ibge" : 4126504,
		"sigla" : "PR"
	},
	{
		"id" : 4278,
		"nome" : "Sertão",
		"codigo_ibge" : 4320503,
		"sigla" : "RS"
	},
	{
		"id" : 4279,
		"nome" : "Sertão Santana",
		"codigo_ibge" : 4320552,
		"sigla" : "RS"
	},
	{
		"id" : 5284,
		"nome" : "Sertãozinho",
		"codigo_ibge" : 3551702,
		"sigla" : "SP"
	},
	{
		"id" : 2766,
		"nome" : "Sertãozinho",
		"codigo_ibge" : 2515930,
		"sigla" : "PB"
	},
	{
		"id" : 5285,
		"nome" : "Sete Barras",
		"codigo_ibge" : 3551801,
		"sigla" : "SP"
	},
	{
		"id" : 4280,
		"nome" : "Sete de Setembro",
		"codigo_ibge" : 4320578,
		"sigla" : "RS"
	},
	{
		"id" : 2354,
		"nome" : "Sete Lagoas",
		"codigo_ibge" : 3167202,
		"sigla" : "MG"
	},
	{
		"id" : 1557,
		"nome" : "Sete Quedas",
		"codigo_ibge" : 5007703,
		"sigla" : "MS"
	},
	{
		"id" : 2355,
		"nome" : "Setubinha",
		"codigo_ibge" : 3165552,
		"sigla" : "MG"
	},
	{
		"id" : 4281,
		"nome" : "Severiano de Almeida",
		"codigo_ibge" : 4320602,
		"sigla" : "RS"
	},
	{
		"id" : 3831,
		"nome" : "Severiano Melo",
		"codigo_ibge" : 2413607,
		"sigla" : "RN"
	},
	{
		"id" : 5286,
		"nome" : "Severínia",
		"codigo_ibge" : 3551900,
		"sigla" : "SP"
	},
	{
		"id" : 4673,
		"nome" : "Siderópolis",
		"codigo_ibge" : 4217600,
		"sigla" : "SC"
	},
	{
		"id" : 1558,
		"nome" : "Sidrolândia",
		"codigo_ibge" : 5007901,
		"sigla" : "MS"
	},
	{
		"id" : 3575,
		"nome" : "Sigefredo Pacheco",
		"codigo_ibge" : 2210656,
		"sigla" : "PI"
	},
	{
		"id" : 3673,
		"nome" : "Silva Jardim",
		"codigo_ibge" : 3305604,
		"sigla" : "RJ"
	},
	{
		"id" : 1108,
		"nome" : "Silvânia",
		"codigo_ibge" : 5220603,
		"sigla" : "GO"
	},
	{
		"id" : 5553,
		"nome" : "Silvanópolis",
		"codigo_ibge" : 1720655,
		"sigla" : "TO"
	},
	{
		"id" : 4282,
		"nome" : "Silveira Martins",
		"codigo_ibge" : 4320651,
		"sigla" : "RS"
	},
	{
		"id" : 2356,
		"nome" : "Silveirânia",
		"codigo_ibge" : 3167301,
		"sigla" : "MG"
	},
	{
		"id" : 5287,
		"nome" : "Silveiras",
		"codigo_ibge" : 3552007,
		"sigla" : "SP"
	},
	{
		"id" : 273,
		"nome" : "Silves",
		"codigo_ibge" : 1304005,
		"sigla" : "AM"
	},
	{
		"id" : 2357,
		"nome" : "Silvianópolis",
		"codigo_ibge" : 3167400,
		"sigla" : "MG"
	},
	{
		"id" : 5420,
		"nome" : "Simão Dias",
		"codigo_ibge" : 2807105,
		"sigla" : "SE"
	},
	{
		"id" : 2358,
		"nome" : "Simão Pereira",
		"codigo_ibge" : 3167509,
		"sigla" : "MG"
	},
	{
		"id" : 3576,
		"nome" : "Simões",
		"codigo_ibge" : 2210706,
		"sigla" : "PI"
	},
	{
		"id" : 657,
		"nome" : "Simões Filho",
		"codigo_ibge" : 2930709,
		"sigla" : "BA"
	},
	{
		"id" : 1109,
		"nome" : "Simolândia",
		"codigo_ibge" : 5220686,
		"sigla" : "GO"
	},
	{
		"id" : 2359,
		"nome" : "Simonésia",
		"codigo_ibge" : 3167608,
		"sigla" : "MG"
	},
	{
		"id" : 3577,
		"nome" : "Simplício Mendes",
		"codigo_ibge" : 2210805,
		"sigla" : "PI"
	},
	{
		"id" : 4283,
		"nome" : "Sinimbu",
		"codigo_ibge" : 4320677,
		"sigla" : "RS"
	},
	{
		"id" : 1473,
		"nome" : "Sinop",
		"codigo_ibge" : 5107909,
		"sigla" : "MT"
	},
	{
		"id" : 3151,
		"nome" : "Siqueira Campos",
		"codigo_ibge" : 4126603,
		"sigla" : "PR"
	},
	{
		"id" : 3344,
		"nome" : "Sirinhaém",
		"codigo_ibge" : 2614204,
		"sigla" : "PE"
	},
	{
		"id" : 5421,
		"nome" : "Siriri",
		"codigo_ibge" : 2807204,
		"sigla" : "SE"
	},
	{
		"id" : 1110,
		"nome" : "Sítio d Abadia",
		"codigo_ibge" : 5220702,
		"sigla" : "GO"
	},
	{
		"id" : 658,
		"nome" : "Sítio do Mato",
		"codigo_ibge" : 2930758,
		"sigla" : "BA"
	},
	{
		"id" : 659,
		"nome" : "Sítio do Quinto",
		"codigo_ibge" : 2930766,
		"sigla" : "BA"
	},
	{
		"id" : 1327,
		"nome" : "Sítio Novo",
		"codigo_ibge" : 2111805,
		"sigla" : "MA"
	},
	{
		"id" : 3832,
		"nome" : "Sítio Novo",
		"codigo_ibge" : 2413706,
		"sigla" : "RN"
	},
	{
		"id" : 5554,
		"nome" : "Sítio Novo do Tocantins",
		"codigo_ibge" : 1720804,
		"sigla" : "TO"
	},
	{
		"id" : 4284,
		"nome" : "Sobradinho",
		"codigo_ibge" : 4320701,
		"sigla" : "RS"
	},
	{
		"id" : 660,
		"nome" : "Sobradinho",
		"codigo_ibge" : 2930774,
		"sigla" : "BA"
	},
	{
		"id" : 2767,
		"nome" : "Sobrado",
		"codigo_ibge" : 2515971,
		"sigla" : "PB"
	},
	{
		"id" : 864,
		"nome" : "Sobral",
		"codigo_ibge" : 2312908,
		"sigla" : "CE"
	},
	{
		"id" : 2360,
		"nome" : "Sobrália",
		"codigo_ibge" : 3167707,
		"sigla" : "MG"
	},
	{
		"id" : 5288,
		"nome" : "Socorro",
		"codigo_ibge" : 3552106,
		"sigla" : "SP"
	},
	{
		"id" : 3578,
		"nome" : "Socorro do Piauí",
		"codigo_ibge" : 2210904,
		"sigla" : "PI"
	},
	{
		"id" : 2768,
		"nome" : "Solânea",
		"codigo_ibge" : 2516003,
		"sigla" : "PB"
	},
	{
		"id" : 2769,
		"nome" : "Soledade",
		"codigo_ibge" : 2516102,
		"sigla" : "PB"
	},
	{
		"id" : 4285,
		"nome" : "Soledade",
		"codigo_ibge" : 4320800,
		"sigla" : "RS"
	},
	{
		"id" : 2361,
		"nome" : "Soledade de Minas",
		"codigo_ibge" : 3167806,
		"sigla" : "MG"
	},
	{
		"id" : 3345,
		"nome" : "Solidão",
		"codigo_ibge" : 2614402,
		"sigla" : "PE"
	},
	{
		"id" : 865,
		"nome" : "Solonópole",
		"codigo_ibge" : 2313005,
		"sigla" : "CE"
	},
	{
		"id" : 4674,
		"nome" : "Sombrio",
		"codigo_ibge" : 4217709,
		"sigla" : "SC"
	},
	{
		"id" : 1559,
		"nome" : "Sonora",
		"codigo_ibge" : 5007935,
		"sigla" : "MS"
	},
	{
		"id" : 71,
		"nome" : "Sooretama",
		"codigo_ibge" : 3205010,
		"sigla" : "ES"
	},
	{
		"id" : 5289,
		"nome" : "Sorocaba",
		"codigo_ibge" : 3552205,
		"sigla" : "SP"
	},
	{
		"id" : 1474,
		"nome" : "Sorriso",
		"codigo_ibge" : 5107925,
		"sigla" : "MT"
	},
	{
		"id" : 2770,
		"nome" : "Sossêgo",
		"codigo_ibge" : 2516151,
		"sigla" : "PB"
	},
	{
		"id" : 2546,
		"nome" : "Soure",
		"codigo_ibge" : 1507904,
		"sigla" : "PA"
	},
	{
		"id" : 2771,
		"nome" : "Sousa",
		"codigo_ibge" : 2516201,
		"sigla" : "PB"
	},
	{
		"id" : 661,
		"nome" : "Souto Soares",
		"codigo_ibge" : 2930808,
		"sigla" : "BA"
	},
	{
		"id" : 5555,
		"nome" : "Sucupira",
		"codigo_ibge" : 1720853,
		"sigla" : "TO"
	},
	{
		"id" : 1328,
		"nome" : "Sucupira do Norte",
		"codigo_ibge" : 2111904,
		"sigla" : "MA"
	},
	{
		"id" : 1329,
		"nome" : "Sucupira do Riachão",
		"codigo_ibge" : 2111953,
		"sigla" : "MA"
	},
	{
		"id" : 5290,
		"nome" : "Sud Mennucci",
		"codigo_ibge" : 3552304,
		"sigla" : "SP"
	},
	{
		"id" : 4675,
		"nome" : "Sul Brasil",
		"codigo_ibge" : 4217758,
		"sigla" : "SC"
	},
	{
		"id" : 3152,
		"nome" : "Sulina",
		"codigo_ibge" : 4126652,
		"sigla" : "PR"
	},
	{
		"id" : 5291,
		"nome" : "Sumaré",
		"codigo_ibge" : 3552403,
		"sigla" : "SP"
	},
	{
		"id" : 2772,
		"nome" : "Sumé",
		"codigo_ibge" : 2516300,
		"sigla" : "PB"
	},
	{
		"id" : 3674,
		"nome" : "Sumidouro",
		"codigo_ibge" : 3305703,
		"sigla" : "RJ"
	},
	{
		"id" : 3346,
		"nome" : "Surubim",
		"codigo_ibge" : 2614501,
		"sigla" : "PE"
	},
	{
		"id" : 3579,
		"nome" : "Sussuapara",
		"codigo_ibge" : 2210938,
		"sigla" : "PI"
	},
	{
		"id" : 5292,
		"nome" : "Suzanápolis",
		"codigo_ibge" : 3552551,
		"sigla" : "SP"
	},
	{
		"id" : 5293,
		"nome" : "Suzano",
		"codigo_ibge" : 3552502,
		"sigla" : "SP"
	},
	{
		"id" : 4286,
		"nome" : "Tabaí",
		"codigo_ibge" : 4320859,
		"sigla" : "RS"
	},
	{
		"id" : 1475,
		"nome" : "Tabaporã",
		"codigo_ibge" : 5107941,
		"sigla" : "MT"
	},
	{
		"id" : 5294,
		"nome" : "Tabapuã",
		"codigo_ibge" : 3552601,
		"sigla" : "SP"
	},
	{
		"id" : 5295,
		"nome" : "Tabatinga",
		"codigo_ibge" : 3552700,
		"sigla" : "SP"
	},
	{
		"id" : 274,
		"nome" : "Tabatinga",
		"codigo_ibge" : 1304062,
		"sigla" : "AM"
	},
	{
		"id" : 3347,
		"nome" : "Tabira",
		"codigo_ibge" : 2614600,
		"sigla" : "PE"
	},
	{
		"id" : 5296,
		"nome" : "Taboão da Serra",
		"codigo_ibge" : 3552809,
		"sigla" : "SP"
	},
	{
		"id" : 5480,
		"nome" : "Tabocão",
		"codigo_ibge" : 1708254,
		"sigla" : "TO"
	},
	{
		"id" : 662,
		"nome" : "Tabocas do Brejo Velho",
		"codigo_ibge" : 2930907,
		"sigla" : "BA"
	},
	{
		"id" : 3833,
		"nome" : "Taboleiro Grande",
		"codigo_ibge" : 2413805,
		"sigla" : "RN"
	},
	{
		"id" : 2362,
		"nome" : "Tabuleiro",
		"codigo_ibge" : 3167905,
		"sigla" : "MG"
	},
	{
		"id" : 866,
		"nome" : "Tabuleiro do Norte",
		"codigo_ibge" : 2313104,
		"sigla" : "CE"
	},
	{
		"id" : 3348,
		"nome" : "Tacaimbó",
		"codigo_ibge" : 2614709,
		"sigla" : "PE"
	},
	{
		"id" : 3349,
		"nome" : "Tacaratu",
		"codigo_ibge" : 2614808,
		"sigla" : "PE"
	},
	{
		"id" : 5297,
		"nome" : "Taciba",
		"codigo_ibge" : 3552908,
		"sigla" : "SP"
	},
	{
		"id" : 2611,
		"nome" : "Tacima",
		"codigo_ibge" : 2516409,
		"sigla" : "PB"
	},
	{
		"id" : 1560,
		"nome" : "Tacuru",
		"codigo_ibge" : 5007950,
		"sigla" : "MS"
	},
	{
		"id" : 5298,
		"nome" : "Taguaí",
		"codigo_ibge" : 3553005,
		"sigla" : "SP"
	},
	{
		"id" : 5556,
		"nome" : "Taguatinga",
		"codigo_ibge" : 1720903,
		"sigla" : "TO"
	},
	{
		"id" : 5299,
		"nome" : "Taiaçu",
		"codigo_ibge" : 3553104,
		"sigla" : "SP"
	},
	{
		"id" : 2547,
		"nome" : "Tailândia",
		"codigo_ibge" : 1507953,
		"sigla" : "PA"
	},
	{
		"id" : 4676,
		"nome" : "Taió",
		"codigo_ibge" : 4217808,
		"sigla" : "SC"
	},
	{
		"id" : 2363,
		"nome" : "Taiobeiras",
		"codigo_ibge" : 3168002,
		"sigla" : "MG"
	},
	{
		"id" : 5557,
		"nome" : "Taipas do Tocantins",
		"codigo_ibge" : 1720937,
		"sigla" : "TO"
	},
	{
		"id" : 3834,
		"nome" : "Taipu",
		"codigo_ibge" : 2413904,
		"sigla" : "RN"
	},
	{
		"id" : 5300,
		"nome" : "Taiúva",
		"codigo_ibge" : 3553203,
		"sigla" : "SP"
	},
	{
		"id" : 5558,
		"nome" : "Talismã",
		"codigo_ibge" : 1720978,
		"sigla" : "TO"
	},
	{
		"id" : 3350,
		"nome" : "Tamandaré",
		"codigo_ibge" : 2614857,
		"sigla" : "PE"
	},
	{
		"id" : 3153,
		"nome" : "Tamarana",
		"codigo_ibge" : 4126678,
		"sigla" : "PR"
	},
	{
		"id" : 5301,
		"nome" : "Tambaú",
		"codigo_ibge" : 3553302,
		"sigla" : "SP"
	},
	{
		"id" : 3154,
		"nome" : "Tamboara",
		"codigo_ibge" : 4126702,
		"sigla" : "PR"
	},
	{
		"id" : 867,
		"nome" : "Tamboril",
		"codigo_ibge" : 2313203,
		"sigla" : "CE"
	},
	{
		"id" : 3580,
		"nome" : "Tamboril do Piauí",
		"codigo_ibge" : 2210953,
		"sigla" : "PI"
	},
	{
		"id" : 5302,
		"nome" : "Tanabi",
		"codigo_ibge" : 3553401,
		"sigla" : "SP"
	},
	{
		"id" : 4677,
		"nome" : "Tangará",
		"codigo_ibge" : 4217907,
		"sigla" : "SC"
	},
	{
		"id" : 3835,
		"nome" : "Tangará",
		"codigo_ibge" : 2414001,
		"sigla" : "RN"
	},
	{
		"id" : 1476,
		"nome" : "Tangará da Serra",
		"codigo_ibge" : 5107958,
		"sigla" : "MT"
	},
	{
		"id" : 3675,
		"nome" : "Tanguá",
		"codigo_ibge" : 3305752,
		"sigla" : "RJ"
	},
	{
		"id" : 663,
		"nome" : "Tanhaçu",
		"codigo_ibge" : 2931004,
		"sigla" : "BA"
	},
	{
		"id" : 197,
		"nome" : "Tanque d Arca",
		"codigo_ibge" : 2709004,
		"sigla" : "AL"
	},
	{
		"id" : 3581,
		"nome" : "Tanque do Piauí",
		"codigo_ibge" : 2210979,
		"sigla" : "PI"
	},
	{
		"id" : 664,
		"nome" : "Tanque Novo",
		"codigo_ibge" : 2931053,
		"sigla" : "BA"
	},
	{
		"id" : 665,
		"nome" : "Tanquinho",
		"codigo_ibge" : 2931103,
		"sigla" : "BA"
	},
	{
		"id" : 2364,
		"nome" : "Taparuba",
		"codigo_ibge" : 3168051,
		"sigla" : "MG"
	},
	{
		"id" : 275,
		"nome" : "Tapauá",
		"codigo_ibge" : 1304104,
		"sigla" : "AM"
	},
	{
		"id" : 3155,
		"nome" : "Tapejara",
		"codigo_ibge" : 4126801,
		"sigla" : "PR"
	},
	{
		"id" : 4287,
		"nome" : "Tapejara",
		"codigo_ibge" : 4320909,
		"sigla" : "RS"
	},
	{
		"id" : 4288,
		"nome" : "Tapera",
		"codigo_ibge" : 4321006,
		"sigla" : "RS"
	},
	{
		"id" : 666,
		"nome" : "Taperoá",
		"codigo_ibge" : 2931202,
		"sigla" : "BA"
	},
	{
		"id" : 2773,
		"nome" : "Taperoá",
		"codigo_ibge" : 2516508,
		"sigla" : "PB"
	},
	{
		"id" : 4289,
		"nome" : "Tapes",
		"codigo_ibge" : 4321105,
		"sigla" : "RS"
	},
	{
		"id" : 2365,
		"nome" : "Tapira",
		"codigo_ibge" : 3168101,
		"sigla" : "MG"
	},
	{
		"id" : 3156,
		"nome" : "Tapira",
		"codigo_ibge" : 4126900,
		"sigla" : "PR"
	},
	{
		"id" : 2366,
		"nome" : "Tapiraí",
		"codigo_ibge" : 3168200,
		"sigla" : "MG"
	},
	{
		"id" : 5303,
		"nome" : "Tapiraí",
		"codigo_ibge" : 3553500,
		"sigla" : "SP"
	},
	{
		"id" : 667,
		"nome" : "Tapiramutá",
		"codigo_ibge" : 2931301,
		"sigla" : "BA"
	},
	{
		"id" : 5304,
		"nome" : "Tapiratiba",
		"codigo_ibge" : 3553609,
		"sigla" : "SP"
	},
	{
		"id" : 1477,
		"nome" : "Tapurah",
		"codigo_ibge" : 5108006,
		"sigla" : "MT"
	},
	{
		"id" : 4290,
		"nome" : "Taquara",
		"codigo_ibge" : 4321204,
		"sigla" : "RS"
	},
	{
		"id" : 2367,
		"nome" : "Taquaraçu de Minas",
		"codigo_ibge" : 3168309,
		"sigla" : "MG"
	},
	{
		"id" : 5305,
		"nome" : "Taquaral",
		"codigo_ibge" : 3553658,
		"sigla" : "SP"
	},
	{
		"id" : 1111,
		"nome" : "Taquaral de Goiás",
		"codigo_ibge" : 5221007,
		"sigla" : "GO"
	},
	{
		"id" : 198,
		"nome" : "Taquarana",
		"codigo_ibge" : 2709103,
		"sigla" : "AL"
	},
	{
		"id" : 4291,
		"nome" : "Taquari",
		"codigo_ibge" : 4321303,
		"sigla" : "RS"
	},
	{
		"id" : 5306,
		"nome" : "Taquaritinga",
		"codigo_ibge" : 3553708,
		"sigla" : "SP"
	},
	{
		"id" : 3351,
		"nome" : "Taquaritinga do Norte",
		"codigo_ibge" : 2615003,
		"sigla" : "PE"
	},
	{
		"id" : 5307,
		"nome" : "Taquarituba",
		"codigo_ibge" : 3553807,
		"sigla" : "SP"
	},
	{
		"id" : 5308,
		"nome" : "Taquarivaí",
		"codigo_ibge" : 3553856,
		"sigla" : "SP"
	},
	{
		"id" : 4292,
		"nome" : "Taquaruçu do Sul",
		"codigo_ibge" : 4321329,
		"sigla" : "RS"
	},
	{
		"id" : 1561,
		"nome" : "Taquarussu",
		"codigo_ibge" : 5007976,
		"sigla" : "MS"
	},
	{
		"id" : 5309,
		"nome" : "Tarabai",
		"codigo_ibge" : 3553906,
		"sigla" : "SP"
	},
	{
		"id" : 99,
		"nome" : "Tarauacá",
		"codigo_ibge" : 1200609,
		"sigla" : "AC"
	},
	{
		"id" : 868,
		"nome" : "Tarrafas",
		"codigo_ibge" : 2313252,
		"sigla" : "CE"
	},
	{
		"id" : 217,
		"nome" : "Tartarugalzinho",
		"codigo_ibge" : 1600709,
		"sigla" : "AP"
	},
	{
		"id" : 5310,
		"nome" : "Tarumã",
		"codigo_ibge" : 3553955,
		"sigla" : "SP"
	},
	{
		"id" : 2368,
		"nome" : "Tarumirim",
		"codigo_ibge" : 3168408,
		"sigla" : "MG"
	},
	{
		"id" : 1330,
		"nome" : "Tasso Fragoso",
		"codigo_ibge" : 2112001,
		"sigla" : "MA"
	},
	{
		"id" : 5311,
		"nome" : "Tatuí",
		"codigo_ibge" : 3554003,
		"sigla" : "SP"
	},
	{
		"id" : 869,
		"nome" : "Tauá",
		"codigo_ibge" : 2313302,
		"sigla" : "CE"
	},
	{
		"id" : 5312,
		"nome" : "Taubaté",
		"codigo_ibge" : 3554102,
		"sigla" : "SP"
	},
	{
		"id" : 4293,
		"nome" : "Tavares",
		"codigo_ibge" : 4321352,
		"sigla" : "RS"
	},
	{
		"id" : 2774,
		"nome" : "Tavares",
		"codigo_ibge" : 2516607,
		"sigla" : "PB"
	},
	{
		"id" : 276,
		"nome" : "Tefé",
		"codigo_ibge" : 1304203,
		"sigla" : "AM"
	},
	{
		"id" : 2775,
		"nome" : "Teixeira",
		"codigo_ibge" : 2516706,
		"sigla" : "PB"
	},
	{
		"id" : 668,
		"nome" : "Teixeira de Freitas",
		"codigo_ibge" : 2931350,
		"sigla" : "BA"
	},
	{
		"id" : 3157,
		"nome" : "Teixeira Soares",
		"codigo_ibge" : 4127007,
		"sigla" : "PR"
	},
	{
		"id" : 2369,
		"nome" : "Teixeiras",
		"codigo_ibge" : 3168507,
		"sigla" : "MG"
	},
	{
		"id" : 4392,
		"nome" : "Teixeirópolis",
		"codigo_ibge" : 1101559,
		"sigla" : "RO"
	},
	{
		"id" : 870,
		"nome" : "Tejuçuoca",
		"codigo_ibge" : 2313351,
		"sigla" : "CE"
	},
	{
		"id" : 5313,
		"nome" : "Tejupá",
		"codigo_ibge" : 3554201,
		"sigla" : "SP"
	},
	{
		"id" : 3158,
		"nome" : "Telêmaco Borba",
		"codigo_ibge" : 4127106,
		"sigla" : "PR"
	},
	{
		"id" : 5422,
		"nome" : "Telha",
		"codigo_ibge" : 2807303,
		"sigla" : "SE"
	},
	{
		"id" : 3836,
		"nome" : "Tenente Ananias",
		"codigo_ibge" : 2414100,
		"sigla" : "RN"
	},
	{
		"id" : 3837,
		"nome" : "Tenente Laurentino Cruz",
		"codigo_ibge" : 2414159,
		"sigla" : "RN"
	},
	{
		"id" : 4294,
		"nome" : "Tenente Portela",
		"codigo_ibge" : 4321402,
		"sigla" : "RS"
	},
	{
		"id" : 2776,
		"nome" : "Tenório",
		"codigo_ibge" : 2516755,
		"sigla" : "PB"
	},
	{
		"id" : 669,
		"nome" : "Teodoro Sampaio",
		"codigo_ibge" : 2931400,
		"sigla" : "BA"
	},
	{
		"id" : 5314,
		"nome" : "Teodoro Sampaio",
		"codigo_ibge" : 3554300,
		"sigla" : "SP"
	},
	{
		"id" : 670,
		"nome" : "Teofilândia",
		"codigo_ibge" : 2931509,
		"sigla" : "BA"
	},
	{
		"id" : 2370,
		"nome" : "Teófilo Otoni",
		"codigo_ibge" : 3168606,
		"sigla" : "MG"
	},
	{
		"id" : 671,
		"nome" : "Teolândia",
		"codigo_ibge" : 2931608,
		"sigla" : "BA"
	},
	{
		"id" : 199,
		"nome" : "Teotônio Vilela",
		"codigo_ibge" : 2709152,
		"sigla" : "AL"
	},
	{
		"id" : 1562,
		"nome" : "Terenos",
		"codigo_ibge" : 5008008,
		"sigla" : "MS"
	},
	{
		"id" : 3582,
		"nome" : "Teresina",
		"codigo_ibge" : 2211001,
		"sigla" : "PI"
	},
	{
		"id" : 1112,
		"nome" : "Teresina de Goiás",
		"codigo_ibge" : 5221080,
		"sigla" : "GO"
	},
	{
		"id" : 3676,
		"nome" : "Teresópolis",
		"codigo_ibge" : 3305802,
		"sigla" : "RJ"
	},
	{
		"id" : 3352,
		"nome" : "Terezinha",
		"codigo_ibge" : 2615102,
		"sigla" : "PE"
	},
	{
		"id" : 1113,
		"nome" : "Terezópolis de Goiás",
		"codigo_ibge" : 5221197,
		"sigla" : "GO"
	},
	{
		"id" : 2548,
		"nome" : "Terra Alta",
		"codigo_ibge" : 1507961,
		"sigla" : "PA"
	},
	{
		"id" : 3159,
		"nome" : "Terra Boa",
		"codigo_ibge" : 4127205,
		"sigla" : "PR"
	},
	{
		"id" : 4295,
		"nome" : "Terra de Areia",
		"codigo_ibge" : 4321436,
		"sigla" : "RS"
	},
	{
		"id" : 672,
		"nome" : "Terra Nova",
		"codigo_ibge" : 2931707,
		"sigla" : "BA"
	},
	{
		"id" : 3353,
		"nome" : "Terra Nova",
		"codigo_ibge" : 2615201,
		"sigla" : "PE"
	},
	{
		"id" : 1478,
		"nome" : "Terra Nova do Norte",
		"codigo_ibge" : 5108055,
		"sigla" : "MT"
	},
	{
		"id" : 3160,
		"nome" : "Terra Rica",
		"codigo_ibge" : 4127304,
		"sigla" : "PR"
	},
	{
		"id" : 3161,
		"nome" : "Terra Roxa",
		"codigo_ibge" : 4127403,
		"sigla" : "PR"
	},
	{
		"id" : 5315,
		"nome" : "Terra Roxa",
		"codigo_ibge" : 3554409,
		"sigla" : "SP"
	},
	{
		"id" : 2549,
		"nome" : "Terra Santa",
		"codigo_ibge" : 1507979,
		"sigla" : "PA"
	},
	{
		"id" : 1479,
		"nome" : "Tesouro",
		"codigo_ibge" : 5108105,
		"sigla" : "MT"
	},
	{
		"id" : 4296,
		"nome" : "Teutônia",
		"codigo_ibge" : 4321451,
		"sigla" : "RS"
	},
	{
		"id" : 4393,
		"nome" : "Theobroma",
		"codigo_ibge" : 1101609,
		"sigla" : "RO"
	},
	{
		"id" : 871,
		"nome" : "Tianguá",
		"codigo_ibge" : 2313401,
		"sigla" : "CE"
	},
	{
		"id" : 3162,
		"nome" : "Tibagi",
		"codigo_ibge" : 4127502,
		"sigla" : "PR"
	},
	{
		"id" : 3838,
		"nome" : "Tibau",
		"codigo_ibge" : 2411056,
		"sigla" : "RN"
	},
	{
		"id" : 3839,
		"nome" : "Tibau do Sul",
		"codigo_ibge" : 2414209,
		"sigla" : "RN"
	},
	{
		"id" : 5316,
		"nome" : "Tietê",
		"codigo_ibge" : 3554508,
		"sigla" : "SP"
	},
	{
		"id" : 4678,
		"nome" : "Tigrinhos",
		"codigo_ibge" : 4217956,
		"sigla" : "SC"
	},
	{
		"id" : 4679,
		"nome" : "Tijucas",
		"codigo_ibge" : 4218004,
		"sigla" : "SC"
	},
	{
		"id" : 3163,
		"nome" : "Tijucas do Sul",
		"codigo_ibge" : 4127601,
		"sigla" : "PR"
	},
	{
		"id" : 3354,
		"nome" : "Timbaúba",
		"codigo_ibge" : 2615300,
		"sigla" : "PE"
	},
	{
		"id" : 3840,
		"nome" : "Timbaúba dos Batistas",
		"codigo_ibge" : 2414308,
		"sigla" : "RN"
	},
	{
		"id" : 4680,
		"nome" : "Timbé do Sul",
		"codigo_ibge" : 4218103,
		"sigla" : "SC"
	},
	{
		"id" : 1331,
		"nome" : "Timbiras",
		"codigo_ibge" : 2112100,
		"sigla" : "MA"
	},
	{
		"id" : 4681,
		"nome" : "Timbó",
		"codigo_ibge" : 4218202,
		"sigla" : "SC"
	},
	{
		"id" : 4682,
		"nome" : "Timbó Grande",
		"codigo_ibge" : 4218251,
		"sigla" : "SC"
	},
	{
		"id" : 5317,
		"nome" : "Timburi",
		"codigo_ibge" : 3554607,
		"sigla" : "SP"
	},
	{
		"id" : 1332,
		"nome" : "Timon",
		"codigo_ibge" : 2112209,
		"sigla" : "MA"
	},
	{
		"id" : 2371,
		"nome" : "Timóteo",
		"codigo_ibge" : 3168705,
		"sigla" : "MG"
	},
	{
		"id" : 4297,
		"nome" : "Tio Hugo",
		"codigo_ibge" : 4321469,
		"sigla" : "RS"
	},
	{
		"id" : 2372,
		"nome" : "Tiradentes",
		"codigo_ibge" : 3168804,
		"sigla" : "MG"
	},
	{
		"id" : 4298,
		"nome" : "Tiradentes do Sul",
		"codigo_ibge" : 4321477,
		"sigla" : "RS"
	},
	{
		"id" : 2373,
		"nome" : "Tiros",
		"codigo_ibge" : 3168903,
		"sigla" : "MG"
	},
	{
		"id" : 5423,
		"nome" : "Tobias Barreto",
		"codigo_ibge" : 2807402,
		"sigla" : "SE"
	},
	{
		"id" : 5559,
		"nome" : "Tocantínia",
		"codigo_ibge" : 1721109,
		"sigla" : "TO"
	},
	{
		"id" : 5560,
		"nome" : "Tocantinópolis",
		"codigo_ibge" : 1721208,
		"sigla" : "TO"
	},
	{
		"id" : 2374,
		"nome" : "Tocantins",
		"codigo_ibge" : 3169000,
		"sigla" : "MG"
	},
	{
		"id" : 2375,
		"nome" : "Tocos do Moji",
		"codigo_ibge" : 3169059,
		"sigla" : "MG"
	},
	{
		"id" : 5565,
		"nome" : "Todas",
		"codigo_ibge" : 0,
		"sigla" : "TD"
	},
	{
		"id" : 2376,
		"nome" : "Toledo",
		"codigo_ibge" : 3169109,
		"sigla" : "MG"
	},
	{
		"id" : 3164,
		"nome" : "Toledo",
		"codigo_ibge" : 4127700,
		"sigla" : "PR"
	},
	{
		"id" : 5424,
		"nome" : "Tomar do Geru",
		"codigo_ibge" : 2807501,
		"sigla" : "SE"
	},
	{
		"id" : 3165,
		"nome" : "Tomazina",
		"codigo_ibge" : 4127809,
		"sigla" : "PR"
	},
	{
		"id" : 2377,
		"nome" : "Tombos",
		"codigo_ibge" : 3169208,
		"sigla" : "MG"
	},
	{
		"id" : 2550,
		"nome" : "Tomé Açu",
		"codigo_ibge" : 1508001,
		"sigla" : "PA"
	},
	{
		"id" : 277,
		"nome" : "Tonantins",
		"codigo_ibge" : 1304237,
		"sigla" : "AM"
	},
	{
		"id" : 3355,
		"nome" : "Toritama",
		"codigo_ibge" : 2615409,
		"sigla" : "PE"
	},
	{
		"id" : 1480,
		"nome" : "Torixoréu",
		"codigo_ibge" : 5108204,
		"sigla" : "MT"
	},
	{
		"id" : 4299,
		"nome" : "Toropi",
		"codigo_ibge" : 4321493,
		"sigla" : "RS"
	},
	{
		"id" : 5318,
		"nome" : "Torre de Pedra",
		"codigo_ibge" : 3554656,
		"sigla" : "SP"
	},
	{
		"id" : 4300,
		"nome" : "Torres",
		"codigo_ibge" : 4321501,
		"sigla" : "RS"
	},
	{
		"id" : 5319,
		"nome" : "Torrinha",
		"codigo_ibge" : 3554706,
		"sigla" : "SP"
	},
	{
		"id" : 3841,
		"nome" : "Touros",
		"codigo_ibge" : 2414407,
		"sigla" : "RN"
	},
	{
		"id" : 5320,
		"nome" : "Trabiju",
		"codigo_ibge" : 3554755,
		"sigla" : "SP"
	},
	{
		"id" : 2551,
		"nome" : "Tracuateua",
		"codigo_ibge" : 1508035,
		"sigla" : "PA"
	},
	{
		"id" : 3356,
		"nome" : "Tracunhaém",
		"codigo_ibge" : 2615508,
		"sigla" : "PE"
	},
	{
		"id" : 200,
		"nome" : "Traipu",
		"codigo_ibge" : 2709202,
		"sigla" : "AL"
	},
	{
		"id" : 2552,
		"nome" : "Trairão",
		"codigo_ibge" : 1508050,
		"sigla" : "PA"
	},
	{
		"id" : 872,
		"nome" : "Trairi",
		"codigo_ibge" : 2313500,
		"sigla" : "CE"
	},
	{
		"id" : 3677,
		"nome" : "Trajano de Moraes",
		"codigo_ibge" : 3305901,
		"sigla" : "RJ"
	},
	{
		"id" : 4301,
		"nome" : "Tramandaí",
		"codigo_ibge" : 4321600,
		"sigla" : "RS"
	},
	{
		"id" : 4302,
		"nome" : "Travesseiro",
		"codigo_ibge" : 4321626,
		"sigla" : "RS"
	},
	{
		"id" : 673,
		"nome" : "Tremedal",
		"codigo_ibge" : 2931806,
		"sigla" : "BA"
	},
	{
		"id" : 5321,
		"nome" : "Tremembé",
		"codigo_ibge" : 3554805,
		"sigla" : "SP"
	},
	{
		"id" : 4303,
		"nome" : "Três Arroios",
		"codigo_ibge" : 4321634,
		"sigla" : "RS"
	},
	{
		"id" : 4683,
		"nome" : "Três Barras",
		"codigo_ibge" : 4218301,
		"sigla" : "SC"
	},
	{
		"id" : 3166,
		"nome" : "Três Barras do Paraná",
		"codigo_ibge" : 4127858,
		"sigla" : "PR"
	},
	{
		"id" : 4304,
		"nome" : "Três Cachoeiras",
		"codigo_ibge" : 4321667,
		"sigla" : "RS"
	},
	{
		"id" : 2378,
		"nome" : "Três Corações",
		"codigo_ibge" : 3169307,
		"sigla" : "MG"
	},
	{
		"id" : 4305,
		"nome" : "Três Coroas",
		"codigo_ibge" : 4321709,
		"sigla" : "RS"
	},
	{
		"id" : 4306,
		"nome" : "Três de Maio",
		"codigo_ibge" : 4321808,
		"sigla" : "RS"
	},
	{
		"id" : 4307,
		"nome" : "Três Forquilhas",
		"codigo_ibge" : 4321832,
		"sigla" : "RS"
	},
	{
		"id" : 5322,
		"nome" : "Três Fronteiras",
		"codigo_ibge" : 3554904,
		"sigla" : "SP"
	},
	{
		"id" : 1563,
		"nome" : "Três Lagoas",
		"codigo_ibge" : 5008305,
		"sigla" : "MS"
	},
	{
		"id" : 2379,
		"nome" : "Três Marias",
		"codigo_ibge" : 3169356,
		"sigla" : "MG"
	},
	{
		"id" : 4308,
		"nome" : "Três Palmeiras",
		"codigo_ibge" : 4321857,
		"sigla" : "RS"
	},
	{
		"id" : 4309,
		"nome" : "Três Passos",
		"codigo_ibge" : 4321907,
		"sigla" : "RS"
	},
	{
		"id" : 2380,
		"nome" : "Três Pontas",
		"codigo_ibge" : 3169406,
		"sigla" : "MG"
	},
	{
		"id" : 1114,
		"nome" : "Três Ranchos",
		"codigo_ibge" : 5221304,
		"sigla" : "GO"
	},
	{
		"id" : 3678,
		"nome" : "Três Rios",
		"codigo_ibge" : 3306008,
		"sigla" : "RJ"
	},
	{
		"id" : 4684,
		"nome" : "Treviso",
		"codigo_ibge" : 4218350,
		"sigla" : "SC"
	},
	{
		"id" : 4685,
		"nome" : "Treze de Maio",
		"codigo_ibge" : 4218400,
		"sigla" : "SC"
	},
	{
		"id" : 4686,
		"nome" : "Treze Tílias",
		"codigo_ibge" : 4218509,
		"sigla" : "SC"
	},
	{
		"id" : 3357,
		"nome" : "Trindade",
		"codigo_ibge" : 2615607,
		"sigla" : "PE"
	},
	{
		"id" : 1115,
		"nome" : "Trindade",
		"codigo_ibge" : 5221403,
		"sigla" : "GO"
	},
	{
		"id" : 4310,
		"nome" : "Trindade do Sul",
		"codigo_ibge" : 4321956,
		"sigla" : "RS"
	},
	{
		"id" : 4311,
		"nome" : "Triunfo",
		"codigo_ibge" : 4322004,
		"sigla" : "RS"
	},
	{
		"id" : 2777,
		"nome" : "Triunfo",
		"codigo_ibge" : 2516805,
		"sigla" : "PB"
	},
	{
		"id" : 3358,
		"nome" : "Triunfo",
		"codigo_ibge" : 2615706,
		"sigla" : "PE"
	},
	{
		"id" : 3842,
		"nome" : "Triunfo Potiguar",
		"codigo_ibge" : 2414456,
		"sigla" : "RN"
	},
	{
		"id" : 1333,
		"nome" : "Trizidela do Vale",
		"codigo_ibge" : 2112233,
		"sigla" : "MA"
	},
	{
		"id" : 1116,
		"nome" : "Trombas",
		"codigo_ibge" : 5221452,
		"sigla" : "GO"
	},
	{
		"id" : 4687,
		"nome" : "Trombudo Central",
		"codigo_ibge" : 4218608,
		"sigla" : "SC"
	},
	{
		"id" : 4688,
		"nome" : "Tubarão",
		"codigo_ibge" : 4218707,
		"sigla" : "SC"
	},
	{
		"id" : 674,
		"nome" : "Tucano",
		"codigo_ibge" : 2931905,
		"sigla" : "BA"
	},
	{
		"id" : 2553,
		"nome" : "Tucumã",
		"codigo_ibge" : 1508084,
		"sigla" : "PA"
	},
	{
		"id" : 4312,
		"nome" : "Tucunduva",
		"codigo_ibge" : 4322103,
		"sigla" : "RS"
	},
	{
		"id" : 2554,
		"nome" : "Tucuruí",
		"codigo_ibge" : 1508100,
		"sigla" : "PA"
	},
	{
		"id" : 1334,
		"nome" : "Tufilândia",
		"codigo_ibge" : 2112274,
		"sigla" : "MA"
	},
	{
		"id" : 5323,
		"nome" : "Tuiuti",
		"codigo_ibge" : 3554953,
		"sigla" : "SP"
	},
	{
		"id" : 2381,
		"nome" : "Tumiritinga",
		"codigo_ibge" : 3169505,
		"sigla" : "MG"
	},
	{
		"id" : 4689,
		"nome" : "Tunápolis",
		"codigo_ibge" : 4218756,
		"sigla" : "SC"
	},
	{
		"id" : 4313,
		"nome" : "Tunas",
		"codigo_ibge" : 4322152,
		"sigla" : "RS"
	},
	{
		"id" : 3167,
		"nome" : "Tunas do Paraná",
		"codigo_ibge" : 4127882,
		"sigla" : "PR"
	},
	{
		"id" : 3168,
		"nome" : "Tuneiras do Oeste",
		"codigo_ibge" : 4127908,
		"sigla" : "PR"
	},
	{
		"id" : 1335,
		"nome" : "Tuntum",
		"codigo_ibge" : 2112308,
		"sigla" : "MA"
	},
	{
		"id" : 5324,
		"nome" : "Tupã",
		"codigo_ibge" : 3555000,
		"sigla" : "SP"
	},
	{
		"id" : 2382,
		"nome" : "Tupaciguara",
		"codigo_ibge" : 3169604,
		"sigla" : "MG"
	},
	{
		"id" : 3359,
		"nome" : "Tupanatinga",
		"codigo_ibge" : 2615805,
		"sigla" : "PE"
	},
	{
		"id" : 4314,
		"nome" : "Tupanci do Sul",
		"codigo_ibge" : 4322186,
		"sigla" : "RS"
	},
	{
		"id" : 4315,
		"nome" : "Tupanciretã",
		"codigo_ibge" : 4322202,
		"sigla" : "RS"
	},
	{
		"id" : 4316,
		"nome" : "Tupandi",
		"codigo_ibge" : 4322251,
		"sigla" : "RS"
	},
	{
		"id" : 4317,
		"nome" : "Tuparendi",
		"codigo_ibge" : 4322301,
		"sigla" : "RS"
	},
	{
		"id" : 3360,
		"nome" : "Tuparetama",
		"codigo_ibge" : 2615904,
		"sigla" : "PE"
	},
	{
		"id" : 3169,
		"nome" : "Tupãssi",
		"codigo_ibge" : 4127957,
		"sigla" : "PR"
	},
	{
		"id" : 5325,
		"nome" : "Tupi Paulista",
		"codigo_ibge" : 3555109,
		"sigla" : "SP"
	},
	{
		"id" : 5561,
		"nome" : "Tupirama",
		"codigo_ibge" : 1721257,
		"sigla" : "TO"
	},
	{
		"id" : 5562,
		"nome" : "Tupiratins",
		"codigo_ibge" : 1721307,
		"sigla" : "TO"
	},
	{
		"id" : 1336,
		"nome" : "Turiaçu",
		"codigo_ibge" : 2112407,
		"sigla" : "MA"
	},
	{
		"id" : 1337,
		"nome" : "Turilândia",
		"codigo_ibge" : 2112456,
		"sigla" : "MA"
	},
	{
		"id" : 5326,
		"nome" : "Turiúba",
		"codigo_ibge" : 3555208,
		"sigla" : "SP"
	},
	{
		"id" : 5327,
		"nome" : "Turmalina",
		"codigo_ibge" : 3555307,
		"sigla" : "SP"
	},
	{
		"id" : 2383,
		"nome" : "Turmalina",
		"codigo_ibge" : 3169703,
		"sigla" : "MG"
	},
	{
		"id" : 4318,
		"nome" : "Turuçu",
		"codigo_ibge" : 4322327,
		"sigla" : "RS"
	},
	{
		"id" : 873,
		"nome" : "Tururu",
		"codigo_ibge" : 2313559,
		"sigla" : "CE"
	},
	{
		"id" : 1117,
		"nome" : "Turvânia",
		"codigo_ibge" : 5221502,
		"sigla" : "GO"
	},
	{
		"id" : 1118,
		"nome" : "Turvelândia",
		"codigo_ibge" : 5221551,
		"sigla" : "GO"
	},
	{
		"id" : 4690,
		"nome" : "Turvo",
		"codigo_ibge" : 4218806,
		"sigla" : "SC"
	},
	{
		"id" : 3170,
		"nome" : "Turvo",
		"codigo_ibge" : 4127965,
		"sigla" : "PR"
	},
	{
		"id" : 2384,
		"nome" : "Turvolândia",
		"codigo_ibge" : 3169802,
		"sigla" : "MG"
	},
	{
		"id" : 1338,
		"nome" : "Tutóia",
		"codigo_ibge" : 2112506,
		"sigla" : "MA"
	},
	{
		"id" : 278,
		"nome" : "Uarini",
		"codigo_ibge" : 1304260,
		"sigla" : "AM"
	},
	{
		"id" : 675,
		"nome" : "Uauá",
		"codigo_ibge" : 2932002,
		"sigla" : "BA"
	},
	{
		"id" : 2385,
		"nome" : "Ubá",
		"codigo_ibge" : 3169901,
		"sigla" : "MG"
	},
	{
		"id" : 2386,
		"nome" : "Ubaí",
		"codigo_ibge" : 3170008,
		"sigla" : "MG"
	},
	{
		"id" : 676,
		"nome" : "Ubaíra",
		"codigo_ibge" : 2932101,
		"sigla" : "BA"
	},
	{
		"id" : 677,
		"nome" : "Ubaitaba",
		"codigo_ibge" : 2932200,
		"sigla" : "BA"
	},
	{
		"id" : 874,
		"nome" : "Ubajara",
		"codigo_ibge" : 2313609,
		"sigla" : "CE"
	},
	{
		"id" : 2387,
		"nome" : "Ubaporanga",
		"codigo_ibge" : 3170057,
		"sigla" : "MG"
	},
	{
		"id" : 5328,
		"nome" : "Ubarana",
		"codigo_ibge" : 3555356,
		"sigla" : "SP"
	},
	{
		"id" : 678,
		"nome" : "Ubatã",
		"codigo_ibge" : 2932309,
		"sigla" : "BA"
	},
	{
		"id" : 5329,
		"nome" : "Ubatuba",
		"codigo_ibge" : 3555406,
		"sigla" : "SP"
	},
	{
		"id" : 2388,
		"nome" : "Uberaba",
		"codigo_ibge" : 3170107,
		"sigla" : "MG"
	},
	{
		"id" : 2389,
		"nome" : "Uberlândia",
		"codigo_ibge" : 3170206,
		"sigla" : "MG"
	},
	{
		"id" : 5330,
		"nome" : "Ubirajara",
		"codigo_ibge" : 3555505,
		"sigla" : "SP"
	},
	{
		"id" : 3171,
		"nome" : "Ubiratã",
		"codigo_ibge" : 4128005,
		"sigla" : "PR"
	},
	{
		"id" : 4319,
		"nome" : "Ubiretama",
		"codigo_ibge" : 4322343,
		"sigla" : "RS"
	},
	{
		"id" : 5331,
		"nome" : "Uchoa",
		"codigo_ibge" : 3555604,
		"sigla" : "SP"
	},
	{
		"id" : 679,
		"nome" : "Uibaí",
		"codigo_ibge" : 2932408,
		"sigla" : "BA"
	},
	{
		"id" : 4412,
		"nome" : "Uiramutã",
		"codigo_ibge" : 1400704,
		"sigla" : "RR"
	},
	{
		"id" : 1119,
		"nome" : "Uirapuru",
		"codigo_ibge" : 5221577,
		"sigla" : "GO"
	},
	{
		"id" : 2778,
		"nome" : "Uiraúna",
		"codigo_ibge" : 2516904,
		"sigla" : "PB"
	},
	{
		"id" : 2555,
		"nome" : "Ulianópolis",
		"codigo_ibge" : 1508126,
		"sigla" : "PA"
	},
	{
		"id" : 875,
		"nome" : "Umari",
		"codigo_ibge" : 2313708,
		"sigla" : "CE"
	},
	{
		"id" : 3843,
		"nome" : "Umarizal",
		"codigo_ibge" : 2414506,
		"sigla" : "RN"
	},
	{
		"id" : 5425,
		"nome" : "Umbaúba",
		"codigo_ibge" : 2807600,
		"sigla" : "SE"
	},
	{
		"id" : 680,
		"nome" : "Umburanas",
		"codigo_ibge" : 2932457,
		"sigla" : "BA"
	},
	{
		"id" : 2390,
		"nome" : "Umburatiba",
		"codigo_ibge" : 3170305,
		"sigla" : "MG"
	},
	{
		"id" : 2779,
		"nome" : "Umbuzeiro",
		"codigo_ibge" : 2517001,
		"sigla" : "PB"
	},
	{
		"id" : 876,
		"nome" : "Umirim",
		"codigo_ibge" : 2313757,
		"sigla" : "CE"
	},
	{
		"id" : 3172,
		"nome" : "Umuarama",
		"codigo_ibge" : 4128104,
		"sigla" : "PR"
	},
	{
		"id" : 681,
		"nome" : "Una",
		"codigo_ibge" : 2932507,
		"sigla" : "BA"
	},
	{
		"id" : 2391,
		"nome" : "Unaí",
		"codigo_ibge" : 3170404,
		"sigla" : "MG"
	},
	{
		"id" : 3583,
		"nome" : "União",
		"codigo_ibge" : 2211100,
		"sigla" : "PI"
	},
	{
		"id" : 4320,
		"nome" : "União da Serra",
		"codigo_ibge" : 4322350,
		"sigla" : "RS"
	},
	{
		"id" : 3173,
		"nome" : "União da Vitória",
		"codigo_ibge" : 4128203,
		"sigla" : "PR"
	},
	{
		"id" : 2392,
		"nome" : "União de Minas",
		"codigo_ibge" : 3170438,
		"sigla" : "MG"
	},
	{
		"id" : 4691,
		"nome" : "União do Oeste",
		"codigo_ibge" : 4218855,
		"sigla" : "SC"
	},
	{
		"id" : 1481,
		"nome" : "União do Sul",
		"codigo_ibge" : 5108303,
		"sigla" : "MT"
	},
	{
		"id" : 201,
		"nome" : "União dos Palmares",
		"codigo_ibge" : 2709301,
		"sigla" : "AL"
	},
	{
		"id" : 5332,
		"nome" : "União Paulista",
		"codigo_ibge" : 3555703,
		"sigla" : "SP"
	},
	{
		"id" : 3174,
		"nome" : "Uniflor",
		"codigo_ibge" : 4128302,
		"sigla" : "PR"
	},
	{
		"id" : 4321,
		"nome" : "Unistalda",
		"codigo_ibge" : 4322376,
		"sigla" : "RS"
	},
	{
		"id" : 3844,
		"nome" : "Upanema",
		"codigo_ibge" : 2414605,
		"sigla" : "RN"
	},
	{
		"id" : 3175,
		"nome" : "Uraí",
		"codigo_ibge" : 4128401,
		"sigla" : "PR"
	},
	{
		"id" : 682,
		"nome" : "Urandi",
		"codigo_ibge" : 2932606,
		"sigla" : "BA"
	},
	{
		"id" : 5333,
		"nome" : "Urânia",
		"codigo_ibge" : 3555802,
		"sigla" : "SP"
	},
	{
		"id" : 1339,
		"nome" : "Urbano Santos",
		"codigo_ibge" : 2112605,
		"sigla" : "MA"
	},
	{
		"id" : 5334,
		"nome" : "Uru",
		"codigo_ibge" : 3555901,
		"sigla" : "SP"
	},
	{
		"id" : 1120,
		"nome" : "Uruaçu",
		"codigo_ibge" : 5221601,
		"sigla" : "GO"
	},
	{
		"id" : 1121,
		"nome" : "Uruana",
		"codigo_ibge" : 5221700,
		"sigla" : "GO"
	},
	{
		"id" : 2393,
		"nome" : "Uruana de Minas",
		"codigo_ibge" : 3170479,
		"sigla" : "MG"
	},
	{
		"id" : 2556,
		"nome" : "Uruará",
		"codigo_ibge" : 1508159,
		"sigla" : "PA"
	},
	{
		"id" : 4692,
		"nome" : "Urubici",
		"codigo_ibge" : 4218905,
		"sigla" : "SC"
	},
	{
		"id" : 877,
		"nome" : "Uruburetama",
		"codigo_ibge" : 2313807,
		"sigla" : "CE"
	},
	{
		"id" : 2394,
		"nome" : "Urucânia",
		"codigo_ibge" : 3170503,
		"sigla" : "MG"
	},
	{
		"id" : 279,
		"nome" : "Urucará",
		"codigo_ibge" : 1304302,
		"sigla" : "AM"
	},
	{
		"id" : 683,
		"nome" : "Uruçuca",
		"codigo_ibge" : 2932705,
		"sigla" : "BA"
	},
	{
		"id" : 3584,
		"nome" : "Uruçuí",
		"codigo_ibge" : 2211209,
		"sigla" : "PI"
	},
	{
		"id" : 2395,
		"nome" : "Urucuia",
		"codigo_ibge" : 3170529,
		"sigla" : "MG"
	},
	{
		"id" : 280,
		"nome" : "Urucurituba",
		"codigo_ibge" : 1304401,
		"sigla" : "AM"
	},
	{
		"id" : 4322,
		"nome" : "Uruguaiana",
		"codigo_ibge" : 4322400,
		"sigla" : "RS"
	},
	{
		"id" : 878,
		"nome" : "Uruoca",
		"codigo_ibge" : 2313906,
		"sigla" : "CE"
	},
	{
		"id" : 4394,
		"nome" : "Urupá",
		"codigo_ibge" : 1101708,
		"sigla" : "RO"
	},
	{
		"id" : 4693,
		"nome" : "Urupema",
		"codigo_ibge" : 4218954,
		"sigla" : "SC"
	},
	{
		"id" : 5335,
		"nome" : "Urupês",
		"codigo_ibge" : 3556008,
		"sigla" : "SP"
	},
	{
		"id" : 4694,
		"nome" : "Urussanga",
		"codigo_ibge" : 4219002,
		"sigla" : "SC"
	},
	{
		"id" : 1122,
		"nome" : "Urutaí",
		"codigo_ibge" : 5221809,
		"sigla" : "GO"
	},
	{
		"id" : 684,
		"nome" : "Utinga",
		"codigo_ibge" : 2932804,
		"sigla" : "BA"
	},
	{
		"id" : 4323,
		"nome" : "Vacaria",
		"codigo_ibge" : 4322509,
		"sigla" : "RS"
	},
	{
		"id" : 1482,
		"nome" : "Vale de São Domingos",
		"codigo_ibge" : 5108352,
		"sigla" : "MT"
	},
	{
		"id" : 4395,
		"nome" : "Vale do Anari",
		"codigo_ibge" : 1101757,
		"sigla" : "RO"
	},
	{
		"id" : 4396,
		"nome" : "Vale do Paraíso",
		"codigo_ibge" : 1101807,
		"sigla" : "RO"
	},
	{
		"id" : 4324,
		"nome" : "Vale do Sol",
		"codigo_ibge" : 4322533,
		"sigla" : "RS"
	},
	{
		"id" : 4325,
		"nome" : "Vale Real",
		"codigo_ibge" : 4322541,
		"sigla" : "RS"
	},
	{
		"id" : 4326,
		"nome" : "Vale Verde",
		"codigo_ibge" : 4322525,
		"sigla" : "RS"
	},
	{
		"id" : 3679,
		"nome" : "Valença",
		"codigo_ibge" : 3306107,
		"sigla" : "RJ"
	},
	{
		"id" : 685,
		"nome" : "Valença",
		"codigo_ibge" : 2932903,
		"sigla" : "BA"
	},
	{
		"id" : 3585,
		"nome" : "Valença do Piauí",
		"codigo_ibge" : 2211308,
		"sigla" : "PI"
	},
	{
		"id" : 686,
		"nome" : "Valente",
		"codigo_ibge" : 2933000,
		"sigla" : "BA"
	},
	{
		"id" : 5336,
		"nome" : "Valentim Gentil",
		"codigo_ibge" : 3556107,
		"sigla" : "SP"
	},
	{
		"id" : 5337,
		"nome" : "Valinhos",
		"codigo_ibge" : 3556206,
		"sigla" : "SP"
	},
	{
		"id" : 5338,
		"nome" : "Valparaíso",
		"codigo_ibge" : 3556305,
		"sigla" : "SP"
	},
	{
		"id" : 1123,
		"nome" : "Valparaíso de Goiás",
		"codigo_ibge" : 5221858,
		"sigla" : "GO"
	},
	{
		"id" : 4327,
		"nome" : "Vanini",
		"codigo_ibge" : 4322558,
		"sigla" : "RS"
	},
	{
		"id" : 4695,
		"nome" : "Vargeão",
		"codigo_ibge" : 4219101,
		"sigla" : "SC"
	},
	{
		"id" : 4696,
		"nome" : "Vargem",
		"codigo_ibge" : 4219150,
		"sigla" : "SC"
	},
	{
		"id" : 5339,
		"nome" : "Vargem",
		"codigo_ibge" : 3556354,
		"sigla" : "SP"
	},
	{
		"id" : 2396,
		"nome" : "Vargem Alegre",
		"codigo_ibge" : 3170578,
		"sigla" : "MG"
	},
	{
		"id" : 72,
		"nome" : "Vargem Alta",
		"codigo_ibge" : 3205036,
		"sigla" : "ES"
	},
	{
		"id" : 2397,
		"nome" : "Vargem Bonita",
		"codigo_ibge" : 3170602,
		"sigla" : "MG"
	},
	{
		"id" : 4697,
		"nome" : "Vargem Bonita",
		"codigo_ibge" : 4219176,
		"sigla" : "SC"
	},
	{
		"id" : 1340,
		"nome" : "Vargem Grande",
		"codigo_ibge" : 2112704,
		"sigla" : "MA"
	},
	{
		"id" : 2398,
		"nome" : "Vargem Grande do Rio Pardo",
		"codigo_ibge" : 3170651,
		"sigla" : "MG"
	},
	{
		"id" : 5340,
		"nome" : "Vargem Grande do Sul",
		"codigo_ibge" : 3556404,
		"sigla" : "SP"
	},
	{
		"id" : 5341,
		"nome" : "Vargem Grande Paulista",
		"codigo_ibge" : 3556453,
		"sigla" : "SP"
	},
	{
		"id" : 2399,
		"nome" : "Varginha",
		"codigo_ibge" : 3170701,
		"sigla" : "MG"
	},
	{
		"id" : 1124,
		"nome" : "Varjão",
		"codigo_ibge" : 5221908,
		"sigla" : "GO"
	},
	{
		"id" : 2400,
		"nome" : "Varjão de Minas",
		"codigo_ibge" : 3170750,
		"sigla" : "MG"
	},
	{
		"id" : 879,
		"nome" : "Varjota",
		"codigo_ibge" : 2313955,
		"sigla" : "CE"
	},
	{
		"id" : 3680,
		"nome" : "Varre Sai",
		"codigo_ibge" : 3306156,
		"sigla" : "RJ"
	},
	{
		"id" : 2780,
		"nome" : "Várzea",
		"codigo_ibge" : 2517100,
		"sigla" : "PB"
	},
	{
		"id" : 3845,
		"nome" : "Várzea",
		"codigo_ibge" : 2414704,
		"sigla" : "RN"
	},
	{
		"id" : 880,
		"nome" : "Várzea Alegre",
		"codigo_ibge" : 2314003,
		"sigla" : "CE"
	},
	{
		"id" : 3586,
		"nome" : "Várzea Branca",
		"codigo_ibge" : 2211357,
		"sigla" : "PI"
	},
	{
		"id" : 2401,
		"nome" : "Várzea da Palma",
		"codigo_ibge" : 3170800,
		"sigla" : "MG"
	},
	{
		"id" : 687,
		"nome" : "Várzea da Roça",
		"codigo_ibge" : 2933059,
		"sigla" : "BA"
	},
	{
		"id" : 688,
		"nome" : "Várzea do Poço",
		"codigo_ibge" : 2933109,
		"sigla" : "BA"
	},
	{
		"id" : 1483,
		"nome" : "Várzea Grande",
		"codigo_ibge" : 5108402,
		"sigla" : "MT"
	},
	{
		"id" : 3587,
		"nome" : "Várzea Grande",
		"codigo_ibge" : 2211407,
		"sigla" : "PI"
	},
	{
		"id" : 689,
		"nome" : "Várzea Nova",
		"codigo_ibge" : 2933158,
		"sigla" : "BA"
	},
	{
		"id" : 5342,
		"nome" : "Várzea Paulista",
		"codigo_ibge" : 3556503,
		"sigla" : "SP"
	},
	{
		"id" : 690,
		"nome" : "Varzedo",
		"codigo_ibge" : 2933174,
		"sigla" : "BA"
	},
	{
		"id" : 2402,
		"nome" : "Varzelândia",
		"codigo_ibge" : 3170909,
		"sigla" : "MG"
	},
	{
		"id" : 3681,
		"nome" : "Vassouras",
		"codigo_ibge" : 3306206,
		"sigla" : "RJ"
	},
	{
		"id" : 2403,
		"nome" : "Vazante",
		"codigo_ibge" : 3171006,
		"sigla" : "MG"
	},
	{
		"id" : 4328,
		"nome" : "Venâncio Aires",
		"codigo_ibge" : 4322608,
		"sigla" : "RS"
	},
	{
		"id" : 73,
		"nome" : "Venda Nova do Imigrante",
		"codigo_ibge" : 3205069,
		"sigla" : "ES"
	},
	{
		"id" : 3846,
		"nome" : "Venha Ver",
		"codigo_ibge" : 2414753,
		"sigla" : "RN"
	},
	{
		"id" : 3176,
		"nome" : "Ventania",
		"codigo_ibge" : 4128534,
		"sigla" : "PR"
	},
	{
		"id" : 3361,
		"nome" : "Venturosa",
		"codigo_ibge" : 2616001,
		"sigla" : "PE"
	},
	{
		"id" : 1484,
		"nome" : "Vera",
		"codigo_ibge" : 5108501,
		"sigla" : "MT"
	},
	{
		"id" : 3847,
		"nome" : "Vera Cruz",
		"codigo_ibge" : 2414803,
		"sigla" : "RN"
	},
	{
		"id" : 4329,
		"nome" : "Vera Cruz",
		"codigo_ibge" : 4322707,
		"sigla" : "RS"
	},
	{
		"id" : 5343,
		"nome" : "Vera Cruz",
		"codigo_ibge" : 3556602,
		"sigla" : "SP"
	},
	{
		"id" : 691,
		"nome" : "Vera Cruz",
		"codigo_ibge" : 2933208,
		"sigla" : "BA"
	},
	{
		"id" : 3177,
		"nome" : "Vera Cruz do Oeste",
		"codigo_ibge" : 4128559,
		"sigla" : "PR"
	},
	{
		"id" : 3588,
		"nome" : "Vera Mendes",
		"codigo_ibge" : 2211506,
		"sigla" : "PI"
	},
	{
		"id" : 4330,
		"nome" : "Veranópolis",
		"codigo_ibge" : 4322806,
		"sigla" : "RS"
	},
	{
		"id" : 3362,
		"nome" : "Verdejante",
		"codigo_ibge" : 2616100,
		"sigla" : "PE"
	},
	{
		"id" : 2404,
		"nome" : "Verdelândia",
		"codigo_ibge" : 3171030,
		"sigla" : "MG"
	},
	{
		"id" : 3178,
		"nome" : "Verê",
		"codigo_ibge" : 4128609,
		"sigla" : "PR"
	},
	{
		"id" : 692,
		"nome" : "Vereda",
		"codigo_ibge" : 2933257,
		"sigla" : "BA"
	},
	{
		"id" : 2405,
		"nome" : "Veredinha",
		"codigo_ibge" : 3171071,
		"sigla" : "MG"
	},
	{
		"id" : 2406,
		"nome" : "Veríssimo",
		"codigo_ibge" : 3171105,
		"sigla" : "MG"
	},
	{
		"id" : 2407,
		"nome" : "Vermelho Novo",
		"codigo_ibge" : 3171154,
		"sigla" : "MG"
	},
	{
		"id" : 3363,
		"nome" : "Vertente do Lério",
		"codigo_ibge" : 2616183,
		"sigla" : "PE"
	},
	{
		"id" : 3364,
		"nome" : "Vertentes",
		"codigo_ibge" : 2616209,
		"sigla" : "PE"
	},
	{
		"id" : 2408,
		"nome" : "Vespasiano",
		"codigo_ibge" : 3171204,
		"sigla" : "MG"
	},
	{
		"id" : 4331,
		"nome" : "Vespasiano Corrêa",
		"codigo_ibge" : 4322855,
		"sigla" : "RS"
	},
	{
		"id" : 4332,
		"nome" : "Viadutos",
		"codigo_ibge" : 4322905,
		"sigla" : "RS"
	},
	{
		"id" : 4333,
		"nome" : "Viamão",
		"codigo_ibge" : 4323002,
		"sigla" : "RS"
	},
	{
		"id" : 74,
		"nome" : "Viana",
		"codigo_ibge" : 3205101,
		"sigla" : "ES"
	},
	{
		"id" : 1341,
		"nome" : "Viana",
		"codigo_ibge" : 2112803,
		"sigla" : "MA"
	},
	{
		"id" : 1125,
		"nome" : "Vianópolis",
		"codigo_ibge" : 5222005,
		"sigla" : "GO"
	},
	{
		"id" : 3365,
		"nome" : "Vicência",
		"codigo_ibge" : 2616308,
		"sigla" : "PE"
	},
	{
		"id" : 4334,
		"nome" : "Vicente Dutra",
		"codigo_ibge" : 4323101,
		"sigla" : "RS"
	},
	{
		"id" : 1564,
		"nome" : "Vicentina",
		"codigo_ibge" : 5008404,
		"sigla" : "MS"
	},
	{
		"id" : 1126,
		"nome" : "Vicentinópolis",
		"codigo_ibge" : 5222054,
		"sigla" : "GO"
	},
	{
		"id" : 202,
		"nome" : "Viçosa",
		"codigo_ibge" : 2709400,
		"sigla" : "AL"
	},
	{
		"id" : 3848,
		"nome" : "Viçosa",
		"codigo_ibge" : 2414902,
		"sigla" : "RN"
	},
	{
		"id" : 2409,
		"nome" : "Viçosa",
		"codigo_ibge" : 3171303,
		"sigla" : "MG"
	},
	{
		"id" : 881,
		"nome" : "Viçosa do Ceará",
		"codigo_ibge" : 2314102,
		"sigla" : "CE"
	},
	{
		"id" : 4335,
		"nome" : "Victor Graeff",
		"codigo_ibge" : 4323200,
		"sigla" : "RS"
	},
	{
		"id" : 4698,
		"nome" : "Vidal Ramos",
		"codigo_ibge" : 4219200,
		"sigla" : "SC"
	},
	{
		"id" : 4699,
		"nome" : "Videira",
		"codigo_ibge" : 4219309,
		"sigla" : "SC"
	},
	{
		"id" : 2410,
		"nome" : "Vieiras",
		"codigo_ibge" : 3171402,
		"sigla" : "MG"
	},
	{
		"id" : 2781,
		"nome" : "Vieirópolis",
		"codigo_ibge" : 2517209,
		"sigla" : "PB"
	},
	{
		"id" : 2557,
		"nome" : "Vigia",
		"codigo_ibge" : 1508209,
		"sigla" : "PA"
	},
	{
		"id" : 1485,
		"nome" : "Vila Bela da Santíssima Trindade",
		"codigo_ibge" : 5105507,
		"sigla" : "MT"
	},
	{
		"id" : 1127,
		"nome" : "Vila Boa",
		"codigo_ibge" : 5222203,
		"sigla" : "GO"
	},
	{
		"id" : 3849,
		"nome" : "Vila Flor",
		"codigo_ibge" : 2415008,
		"sigla" : "RN"
	},
	{
		"id" : 4336,
		"nome" : "Vila Flores",
		"codigo_ibge" : 4323309,
		"sigla" : "RS"
	},
	{
		"id" : 4337,
		"nome" : "Vila Lângaro",
		"codigo_ibge" : 4323358,
		"sigla" : "RS"
	},
	{
		"id" : 4338,
		"nome" : "Vila Maria",
		"codigo_ibge" : 4323408,
		"sigla" : "RS"
	},
	{
		"id" : 3589,
		"nome" : "Vila Nova do Piauí",
		"codigo_ibge" : 2211605,
		"sigla" : "PI"
	},
	{
		"id" : 4339,
		"nome" : "Vila Nova do Sul",
		"codigo_ibge" : 4323457,
		"sigla" : "RS"
	},
	{
		"id" : 1342,
		"nome" : "Vila Nova dos Martírios",
		"codigo_ibge" : 2112852,
		"sigla" : "MA"
	},
	{
		"id" : 75,
		"nome" : "Vila Pavão",
		"codigo_ibge" : 3205150,
		"sigla" : "ES"
	},
	{
		"id" : 1128,
		"nome" : "Vila Propício",
		"codigo_ibge" : 5222302,
		"sigla" : "GO"
	},
	{
		"id" : 1486,
		"nome" : "Vila Rica",
		"codigo_ibge" : 5108600,
		"sigla" : "MT"
	},
	{
		"id" : 76,
		"nome" : "Vila Valério",
		"codigo_ibge" : 3205176,
		"sigla" : "ES"
	},
	{
		"id" : 77,
		"nome" : "Vila Velha",
		"codigo_ibge" : 3205200,
		"sigla" : "ES"
	},
	{
		"id" : 4397,
		"nome" : "Vilhena",
		"codigo_ibge" : 1100304,
		"sigla" : "RO"
	},
	{
		"id" : 5344,
		"nome" : "Vinhedo",
		"codigo_ibge" : 3556701,
		"sigla" : "SP"
	},
	{
		"id" : 5345,
		"nome" : "Viradouro",
		"codigo_ibge" : 3556800,
		"sigla" : "SP"
	},
	{
		"id" : 2411,
		"nome" : "Virgem da Lapa",
		"codigo_ibge" : 3171600,
		"sigla" : "MG"
	},
	{
		"id" : 2412,
		"nome" : "Virgínia",
		"codigo_ibge" : 3171709,
		"sigla" : "MG"
	},
	{
		"id" : 2413,
		"nome" : "Virginópolis",
		"codigo_ibge" : 3171808,
		"sigla" : "MG"
	},
	{
		"id" : 2414,
		"nome" : "Virgolândia",
		"codigo_ibge" : 3171907,
		"sigla" : "MG"
	},
	{
		"id" : 3179,
		"nome" : "Virmond",
		"codigo_ibge" : 4128658,
		"sigla" : "PR"
	},
	{
		"id" : 2415,
		"nome" : "Visconde do Rio Branco",
		"codigo_ibge" : 3172004,
		"sigla" : "MG"
	},
	{
		"id" : 2558,
		"nome" : "Viseu",
		"codigo_ibge" : 1508308,
		"sigla" : "PA"
	},
	{
		"id" : 4340,
		"nome" : "Vista Alegre",
		"codigo_ibge" : 4323507,
		"sigla" : "RS"
	},
	{
		"id" : 5346,
		"nome" : "Vista Alegre do Alto",
		"codigo_ibge" : 3556909,
		"sigla" : "SP"
	},
	{
		"id" : 4341,
		"nome" : "Vista Alegre do Prata",
		"codigo_ibge" : 4323606,
		"sigla" : "RS"
	},
	{
		"id" : 4342,
		"nome" : "Vista Gaúcha",
		"codigo_ibge" : 4323705,
		"sigla" : "RS"
	},
	{
		"id" : 2782,
		"nome" : "Vista Serrana",
		"codigo_ibge" : 2505501,
		"sigla" : "PB"
	},
	{
		"id" : 4700,
		"nome" : "Vitor Meireles",
		"codigo_ibge" : 4219358,
		"sigla" : "SC"
	},
	{
		"id" : 78,
		"nome" : "Vitória",
		"codigo_ibge" : 3205309,
		"sigla" : "ES"
	},
	{
		"id" : 5347,
		"nome" : "Vitória Brasil",
		"codigo_ibge" : 3556958,
		"sigla" : "SP"
	},
	{
		"id" : 693,
		"nome" : "Vitória da Conquista",
		"codigo_ibge" : 2933307,
		"sigla" : "BA"
	},
	{
		"id" : 4343,
		"nome" : "Vitória das Missões",
		"codigo_ibge" : 4323754,
		"sigla" : "RS"
	},
	{
		"id" : 3366,
		"nome" : "Vitória de Santo Antão",
		"codigo_ibge" : 2616407,
		"sigla" : "PE"
	},
	{
		"id" : 218,
		"nome" : "Vitória do Jari",
		"codigo_ibge" : 1600808,
		"sigla" : "AP"
	},
	{
		"id" : 1343,
		"nome" : "Vitória do Mearim",
		"codigo_ibge" : 2112902,
		"sigla" : "MA"
	},
	{
		"id" : 2559,
		"nome" : "Vitória do Xingu",
		"codigo_ibge" : 1508357,
		"sigla" : "PA"
	},
	{
		"id" : 3180,
		"nome" : "Vitorino",
		"codigo_ibge" : 4128708,
		"sigla" : "PR"
	},
	{
		"id" : 1344,
		"nome" : "Vitorino Freire",
		"codigo_ibge" : 2113009,
		"sigla" : "MA"
	},
	{
		"id" : 2416,
		"nome" : "Volta Grande",
		"codigo_ibge" : 3172103,
		"sigla" : "MG"
	},
	{
		"id" : 3682,
		"nome" : "Volta Redonda",
		"codigo_ibge" : 3306305,
		"sigla" : "RJ"
	},
	{
		"id" : 5348,
		"nome" : "Votorantim",
		"codigo_ibge" : 3557006,
		"sigla" : "SP"
	},
	{
		"id" : 5349,
		"nome" : "Votuporanga",
		"codigo_ibge" : 3557105,
		"sigla" : "SP"
	},
	{
		"id" : 694,
		"nome" : "Wagner",
		"codigo_ibge" : 2933406,
		"sigla" : "BA"
	},
	{
		"id" : 3590,
		"nome" : "Wall Ferraz",
		"codigo_ibge" : 2211704,
		"sigla" : "PI"
	},
	{
		"id" : 5563,
		"nome" : "Wanderlândia",
		"codigo_ibge" : 1722081,
		"sigla" : "TO"
	},
	{
		"id" : 695,
		"nome" : "Wanderley",
		"codigo_ibge" : 2933455,
		"sigla" : "BA"
	},
	{
		"id" : 2417,
		"nome" : "Wenceslau Braz",
		"codigo_ibge" : 3172202,
		"sigla" : "MG"
	},
	{
		"id" : 3181,
		"nome" : "Wenceslau Braz",
		"codigo_ibge" : 4128500,
		"sigla" : "PR"
	},
	{
		"id" : 696,
		"nome" : "Wenceslau Guimarães",
		"codigo_ibge" : 2933505,
		"sigla" : "BA"
	},
	{
		"id" : 4344,
		"nome" : "Westfália",
		"codigo_ibge" : 4323770,
		"sigla" : "RS"
	},
	{
		"id" : 4701,
		"nome" : "Witmarsum",
		"codigo_ibge" : 4219408,
		"sigla" : "SC"
	},
	{
		"id" : 5564,
		"nome" : "Xambioá",
		"codigo_ibge" : 1722107,
		"sigla" : "TO"
	},
	{
		"id" : 3182,
		"nome" : "Xambrê",
		"codigo_ibge" : 4128807,
		"sigla" : "PR"
	},
	{
		"id" : 4345,
		"nome" : "Xangri lá",
		"codigo_ibge" : 4323804,
		"sigla" : "RS"
	},
	{
		"id" : 4702,
		"nome" : "Xanxerê",
		"codigo_ibge" : 4219507,
		"sigla" : "SC"
	},
	{
		"id" : 100,
		"nome" : "Xapuri",
		"codigo_ibge" : 1200708,
		"sigla" : "AC"
	},
	{
		"id" : 4703,
		"nome" : "Xavantina",
		"codigo_ibge" : 4219606,
		"sigla" : "SC"
	},
	{
		"id" : 4704,
		"nome" : "Xaxim",
		"codigo_ibge" : 4219705,
		"sigla" : "SC"
	},
	{
		"id" : 3367,
		"nome" : "Xexéu",
		"codigo_ibge" : 2616506,
		"sigla" : "PE"
	},
	{
		"id" : 2560,
		"nome" : "Xinguara",
		"codigo_ibge" : 1508407,
		"sigla" : "PA"
	},
	{
		"id" : 697,
		"nome" : "Xique Xique",
		"codigo_ibge" : 2933604,
		"sigla" : "BA"
	},
	{
		"id" : 2783,
		"nome" : "Zabelê",
		"codigo_ibge" : 2517407,
		"sigla" : "PB"
	},
	{
		"id" : 5350,
		"nome" : "Zacarias",
		"codigo_ibge" : 3557154,
		"sigla" : "SP"
	},
	{
		"id" : 1345,
		"nome" : "Zé Doca",
		"codigo_ibge" : 2114007,
		"sigla" : "MA"
	},
	{
		"id" : 4705,
		"nome" : "Zortéa",
		"codigo_ibge" : 4219853,
		"sigla" : "SC"
	}
]