// SERVICES
offersApp.service('offersService', function() {

    this.offers = [
        {
            "id": 0,
            "title": "Hotel The Mirage (Hotel & Casino)",
            "location": "Las Vegas, USA",
            "description": "Aéreo de várias cidades + Hotel em Vegas",
            "photos": [
                "images/photo6.jpg",
                "images/photo8.jpg",
                "images/photo7.jpg",
                "images/photo9.jpg",
                "images/photo11.jpg",
                "images/photo3.jpg",
                "images/photo2.jpg",
                "images/photo1.jpg"
            ],
            "options": [
                {
                    "id": 2,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Campo Grande"
                    ],
                    "daily": 5,
                    "price": 2380
                },
                {
                    "id": 0,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Belém"
                    ],
                    "daily": 5,
                    "price": 2549
                },
                {
                    "id": 1,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 5,
                    "price": 2620
                },
                {
                    "id": 3,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus"
                    ],
                    "daily": 8,
                    "price": 3549
                },
                {
                    "id": 7,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 12,
                    "price": 5120
                },
                {
                    "id": 8,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Salvador",
                        "Campo Grande"
                    ],
                    "daily": 12,
                    "price": 5380
                },
                {
                    "id": 4,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro",
                        "São Paulo"
                    ],
                    "daily": 8,
                    "price": 3720
                },
                {
                    "id": 5,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia"
                    ],
                    "daily": 8,
                    "price": 3380
                },
                {
                    "id": 6,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Salvador",
                        "Ilhéus",
                        "Boa Vista",
                        "Cuiabá"
                    ],
                    "daily": 12,
                    "price": 5549
                }
            ]
        },
        {
            "id": 1,
            "title": "Wynn Las Vegas",
            "location": "Las Vegas, USA",
            "description": "Aéreo + Hotel",
            "photos": [
                "images/photo6.jpg",
                "images/photo8.jpg",
                "images/photo9.jpg",
                "images/photo11.jpg",
                "images/photo3.jpg",
                "images/photo2.jpg"
            ],
            "options": [
                {
                    "id": 12,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Campo Grande"
                    ],
                    "daily": 5,
                    "price": 2380
                },
                {
                    "id": 10,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Belém"
                    ],
                    "daily": 5,
                    "price": 2549
                },
                {
                    "id": 11,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 5,
                    "price": 2120
                },
                {
                    "id": 13,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus"
                    ],
                    "daily": 8,
                    "price": 3549
                },
                {
                    "id": 17,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 12,
                    "price": 9120
                },
                {
                    "id": 14,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro",
                        "São Paulo"
                    ],
                    "daily": 8,
                    "price": 3120
                },
                {
                    "id": 15,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia"
                    ],
                    "daily": 8,
                    "price": 3380
                },
                {
                    "id": 16,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Salvador",
                        "Ilhéus",
                        "Boa Vista",
                        "Cuiabá"
                    ],
                    "daily": 12,
                    "price": 5559
                }
            ]
        },
        {
            "id": 2,
            "title": "The Venetian",
            "location": "Las Vegas, USA",
            "description": "Hotel com estilo oriental",
            "photos": [
                "images/photo6.jpg",
                "images/photo8.jpg",
                "images/photo7.jpg",
                "images/photo9.jpg",
                "images/photo11.jpg",
                "images/photo3.jpg",
                "images/photo2.jpg",
                "images/photo1.jpg"
            ],
            "options": [
                {
                    "id": 22,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Campo Grande"
                    ],
                    "daily": 5,
                    "price": 2380
                },
                {
                    "id": 20,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Belém"
                    ],
                    "daily": 5,
                    "price": 2549
                },
                {
                    "id": 21,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 5,
                    "price": 2120
                },
                {
                    "id": 23,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus"
                    ],
                    "daily": 8,
                    "price": 3549
                },
                {
                    "id": 27,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 12,
                    "price": 5120
                },
                {
                    "id": 28,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Salvador",
                        "Campo Grande"
                    ],
                    "daily": 12,
                    "price": 5380
                },
                {
                    "id": 24,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro",
                        "São Paulo"
                    ],
                    "daily": 8,
                    "price": 3123
                },
                {
                    "id": 26,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Salvador",
                        "Ilhéus",
                        "Boa Vista",
                        "Cuiabá"
                    ],
                    "daily": 12,
                    "price": 5544
                }
            ]
        },
        {
            "id": 3,
            "title": "Stratosphere Las Vegas",
            "location": "Las Vegas, USA",
            "description": "Aéreo incluso",
            "photos": [
                "images/photo6.jpg",
                "images/photo8.jpg",
                "images/photo7.jpg",
                "images/photo9.jpg",
                "images/photo11.jpg",
                "images/photo3.jpg",
                "images/photo2.jpg",
                "images/photo1.jpg"
            ],
            "options": [
                {
                    "id": 32,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Campo Grande"
                    ],
                    "daily": 5,
                    "price": 2380
                },
                {
                    "id": 30,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Belém"
                    ],
                    "daily": 5,
                    "price": 2549
                },
                {
                    "id": 31,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 5,
                    "price": 2120
                },
                {
                    "id": 33,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus"
                    ],
                    "daily": 8,
                    "price": 3549
                },
                {
                    "id": 37,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 12,
                    "price": 5120
                },
                {
                    "id": 38,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Salvador",
                        "Campo Grande"
                    ],
                    "daily": 12,
                    "price": 5380
                },
                {
                    "id": 34,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro",
                        "São Paulo"
                    ],
                    "daily": 8,
                    "price": 3120
                },
                {
                    "id": 35,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia"
                    ],
                    "daily": 8,
                    "price": 3380
                },
                {
                    "id": 36,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Salvador",
                        "Ilhéus",
                        "Boa Vista",
                        "Cuiabá"
                    ],
                    "daily": 12,
                    "price": 5549
                }
            ]
        },
        {
            "id": 4,
            "title": "Caesars Palace",
            "location": "Las Vegas, USA",
            "description": "Aéreo de várias cidades com Hotel em Las Vegas",
            "photos": [
                "images/photo6.jpg",
                "images/photo8.jpg",
                "images/photo7.jpg",
                "images/photo9.jpg",
                "images/photo11.jpg",
                "images/photo3.jpg",
                "images/photo2.jpg",
                "images/photo1.jpg"
            ],
            "options": [
                {
                    "id": 40,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Belém"
                    ],
                    "daily": 5,
                    "price": 2549
                },
                {
                    "id": 41,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 5,
                    "price": 2120
                },
                {
                    "id": 47,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 12,
                    "price": 5120
                },
                {
                    "id": 48,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Salvador",
                        "Campo Grande"
                    ],
                    "daily": 12,
                    "price": 5380
                },
                {
                    "id": 44,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro",
                        "São Paulo"
                    ],
                    "daily": 8,
                    "price": 3120
                },
                {
                    "id": 45,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia"
                    ],
                    "daily": 8,
                    "price": 3380
                },
                {
                    "id": 46,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Salvador",
                        "Ilhéus",
                        "Boa Vista",
                        "Cuiabá"
                    ],
                    "daily": 12,
                    "price": 5549
                }
            ]
        },
        {
            "id": 5,
            "title": "Bellagio Hotel and Casino",
            "location": "Las Vegas, USA",
            "description": "Aéreo de várias cidades",
            "photos": [
                "images/photo6.jpg",
                "images/photo8.jpg",
                "images/photo7.jpg",
                "images/photo9.jpg",
                "images/photo11.jpg",
                "images/photo3.jpg",
                "images/photo2.jpg",
                "images/photo1.jpg"
            ],
            "options": [
                {
                    "id": 52,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Campo Grande"
                    ],
                    "daily": 5,
                    "price": 2380
                },
                {
                    "id": 50,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Belém"
                    ],
                    "daily": 5,
                    "price": 2549
                },
                {
                    "id": 51,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 5,
                    "price": 2120
                },
                {
                    "id": 53,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus"
                    ],
                    "daily": 8,
                    "price": 3549
                },
                {
                    "id": 57,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 12,
                    "price": 5520
                },
                {
                    "id": 58,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Salvador",
                        "Campo Grande"
                    ],
                    "daily": 12,
                    "price": 5380
                },
                {
                    "id": 54,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro",
                        "São Paulo"
                    ],
                    "daily": 8,
                    "price": 3920
                },
                {
                    "id": 55,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia"
                    ],
                    "daily": 8,
                    "price": 3380
                },
                {
                    "id": 56,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Salvador",
                        "Ilhéus",
                        "Boa Vista",
                        "Cuiabá"
                    ],
                    "daily": 12,
                    "price": 5549
                }
            ]
        },
        {
            "id": 6,
            "title": "Paris Las Vegas",
            "location": "Las Vegas, USA",
            "description": "Hotel em Vegas",
            "photos": [
                "images/photo6.jpg",
                "images/photo7.jpg",
                "images/photo9.jpg",
                "images/photo11.jpg",
                "images/photo3.jpg",
                "images/photo2.jpg"
            ],
            "options": [
                {
                    "id": 62,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Campo Grande"
                    ],
                    "daily": 5,
                    "price": 2180
                },
                {
                    "id": 60,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Belém"
                    ],
                    "daily": 5,
                    "price": 2549
                },
                {
                    "id": 61,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 5,
                    "price": 2120
                },
                {
                    "id": 67,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 12,
                    "price": 5020
                },
                {
                    "id": 68,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Salvador",
                        "Campo Grande"
                    ],
                    "daily": 12,
                    "price": 5380
                },
                {
                    "id": 64,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro",
                        "São Paulo"
                    ],
                    "daily": 8,
                    "price": 3120
                },
                {
                    "id": 65,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia"
                    ],
                    "daily": 8,
                    "price": 3380
                }
            ]
        },
        {
            "id": 7,
            "title": "Trump International Hotel Las Vegas",
            "location": "Las Vegas, USA",
            "description": "Aéreo de várias cidades + Hotel em Vegas",
            "photos": [
                "images/photo6.jpg",
                "images/photo8.jpg",
                "images/photo7.jpg",
                "images/photo9.jpg",
                "images/photo11.jpg",
                "images/photo3.jpg",
                "images/photo2.jpg",
                "images/photo1.jpg"
            ],
            "options": [
                {
                    "id": 72,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Campo Grande"
                    ],
                    "daily": 5,
                    "price": 2780
                },
                {
                    "id": 70,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Belém"
                    ],
                    "daily": 5,
                    "price": 2549
                },
                {
                    "id": 71,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 5,
                    "price": 2120
                },
                {
                    "id": 73,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus"
                    ],
                    "daily": 8,
                    "price": 3549
                },
                {
                    "id": 77,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 12,
                    "price": 5120
                },
                {
                    "id": 78,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Salvador",
                        "Campo Grande"
                    ],
                    "daily": 12,
                    "price": 5380
                },
                {
                    "id": 74,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro",
                        "São Paulo"
                    ],
                    "daily": 8,
                    "price": 3120
                },
                {
                    "id": 75,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia"
                    ],
                    "daily": 8,
                    "price": 3380
                },
                {
                    "id": 76,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Salvador",
                        "Ilhéus",
                        "Boa Vista",
                        "Cuiabá"
                    ],
                    "daily": 12,
                    "price": 5549
                }
            ]
        },
        {
            "id": 8,
            "title": "The Cosmopolitan of Las Vegas",
            "location": "Las Vegas, USA",
            "description": "Aéreo de várias cidades + Hotel em Vegas + Passeio",
            "photos": [
                "images/photo6.jpg",
                "images/photo8.jpg",
                "images/photo7.jpg",
                "images/photo9.jpg",
                "images/photo11.jpg",
                "images/photo3.jpg",
                "images/photo2.jpg",
                "images/photo1.jpg"
            ],
            "options": [
                {
                    "id": 82,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Campo Grande"
                    ],
                    "daily": 5,
                    "price": 2380
                },
                {
                    "id": 80,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Belém"
                    ],
                    "daily": 5,
                    "price": 2549
                },
                {
                    "id": 83,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus"
                    ],
                    "daily": 8,
                    "price": 3549
                },
                {
                    "id": 87,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 12,
                    "price": 5120
                },
                {
                    "id": 88,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Salvador",
                        "Campo Grande"
                    ],
                    "daily": 12,
                    "price": 5380
                },
                {
                    "id": 84,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro",
                        "São Paulo"
                    ],
                    "daily": 8,
                    "price": 3120
                },
                {
                    "id": 85,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia"
                    ],
                    "daily": 8,
                    "price": 1380
                },
                {
                    "id": 86,
                    "title": "Noites em Vegas e Albuquerque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Salvador",
                        "Ilhéus",
                        "Boa Vista",
                        "Cuiabá"
                    ],
                    "daily": 12,
                    "price": 5549
                }
            ]
        },
        {
            "id": 8,
            "title": "Lady Luck Casino Hotel",
            "location": "New York, NY",
            "description": "Aéreo + Hotel + Tour pela cidade mais movimentada do mundo",
            "photos": [
                "images/photo6.jpg",
                "images/photo7.jpg",
                "images/photo11.jpg",
                "images/photo2.jpg",
                "images/photo1.jpg"
            ],
            "options": [
                {
                    "id": 92,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Campo Grande"
                    ],
                    "daily": 5,
                    "price": 2380
                },
                {
                    "id": 90,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Belém"
                    ],
                    "daily": 5,
                    "price": 2549
                },
                {
                    "id": 93,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus"
                    ],
                    "daily": 8,
                    "price": 3549
                },
                {
                    "id": 97,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 12,
                    "price": 5120
                },
                {
                    "id": 98,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Salvador",
                        "Campo Grande"
                    ],
                    "daily": 12,
                    "price": 5380
                }
            ]
        },
        {
            "id": 8,
            "title": "Stratus Casino & Hotel",
            "location": "New York, NY",
            "description": "Aéreo + Hotel + Tour + Carro alugado\n",
            "photos": [
                "images/photo6.jpg",
                "images/photo7.jpg",
                "images/photo11.jpg",
                "images/photo2.jpg",
                "images/photo1.jpg"
            ],
            "options": [
                {
                    "id": 192,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Campo Grande"
                    ],
                    "daily": 5,
                    "price": 2380
                },
                {
                    "id": 190,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Belém"
                    ],
                    "daily": 5,
                    "price": 2539
                },
                {
                    "id": 193,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus"
                    ],
                    "daily": 8,
                    "price": 3549
                },
                {
                    "id": 197,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 12,
                    "price": 5120
                },
                {
                    "id": 198,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Salvador",
                        "Campo Grande"
                    ],
                    "daily": 12,
                    "price": 5380
                }
            ]
        },
        {
            "id": 8,
            "title": "Lady Luck Casino Hotel",
            "location": "New York, NY",
            "description": "Aéreo + Hotel + Tour pela cidade mais movimentada do mundo",
            "photos": [
                "images/photo6.jpg",
                "images/photo7.jpg",
                "images/photo11.jpg",
                "images/photo2.jpg",
                "images/photo1.jpg"
            ],
            "options": [
                {
                    "id": 192,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Campo Grande"
                    ],
                    "daily": 5,
                    "price": 2380
                },
                {
                    "id": 190,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Belém"
                    ],
                    "daily": 5,
                    "price": 2549
                },
                {
                    "id": 193,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus"
                    ],
                    "daily": 8,
                    "price": 3549
                },
                {
                    "id": 197,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 12,
                    "price": 5120
                },
                {
                    "id": 198,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Salvador",
                        "Campo Grande"
                    ],
                    "daily": 12,
                    "price": 5480
                }
            ]
        },
        {
            "id": 8,
            "title": "Ca$$ino Hotel Hotel",
            "location": "New York, NY",
            "description": "Hotel + Aéreo + $100 para ser usado no casino",
            "photos": [
                "images/photo6.jpg",
                "images/photo7.jpg",
                "images/photo11.jpg",
                "images/photo2.jpg",
                "images/photo1.jpg"
            ],
            "options": [
                {
                    "id": 192,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Campo Grande"
                    ],
                    "daily": 5,
                    "price": 2380
                },
                {
                    "id": 190,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus",
                        "Belém"
                    ],
                    "daily": 5,
                    "price": 2549
                },
                {
                    "id": 193,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Manaus"
                    ],
                    "daily": 8,
                    "price": 3549
                },
                {
                    "id": 197,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Rio de Janeiro"
                    ],
                    "daily": 12,
                    "price": 5120
                },
                {
                    "id": 198,
                    "title": "Noite em Nova Iorque",
                    "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
                    "from": [
                        "Brasilia",
                        "Salvador",
                        "Campo Grande"
                    ],
                    "daily": 12,
                    "price": 5380
                }
            ]
        }
    ];

    this.getOffer = function(id){
        for(var i = 0; i < this.offers.length; i++ ){
            if(this.offers[i].id == id){
                return this.offers[i];
            }
        }
    };

    this.getOfferOptionsByDailyNumber = function(offer, daily){
        var result = [];
        if(daily == ' '){
            return offer.options;
        }
        for(var i = 0; i < offer.options.length; i++ ){
            if(offer.options[i].daily == daily){
                result.push(offer.options[i]);
            }
        }
        return result;
    };


    this.origins = [
        'Manaus',
        'Salvador',
        'Ilhéus',
        'Boa Vista',
        'Cuiabá',
        'Brasilia',
        'Rio de Janeiro',
        'São Paulo',
        'Campo Grande',
        'Belém'
    ];


    this.dailyOptions = [1,2,3,4,5,6,7,8,9,10,11,12];

});