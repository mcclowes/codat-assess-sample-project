const data = {
  "reportInfo": {
    "name": "enhanced_profit_and_loss",
    "displayName": "Enhanced Profit and Loss"
  },
  "dimensions": [
    {
      "index": 0,
      "displayName": "Period",
      "type": "datespan",
      "items": [
        {
          "index": 0,
          "displayName": "Period 0",
          "start": "2021-06-01",
          "end": "2021-06-30"
        },
        {
          "index": 1,
          "displayName": "Period 1",
          "start": "2021-07-01",
          "end": "2021-07-31"
        },
        {
          "index": 2,
          "displayName": "Period 2",
          "start": "2021-08-01",
          "end": "2021-08-31"
        },
        {
          "index": 3,
          "displayName": "Period 3",
          "start": "2021-09-01",
          "end": "2021-09-30"
        },
        {
          "index": 4,
          "displayName": "Period 4",
          "start": "2021-10-01",
          "end": "2021-10-31"
        },
        {
          "index": 5,
          "displayName": "Period 5",
          "start": "2021-11-01",
          "end": "2021-11-30"
        },
        {
          "index": 6,
          "displayName": "Period 6",
          "start": "2021-12-01",
          "end": "2021-12-31"
        },
        {
          "index": 7,
          "displayName": "Period 7",
          "start": "2022-01-01",
          "end": "2022-01-31"
        },
        {
          "index": 8,
          "displayName": "Period 8",
          "start": "2022-02-01",
          "end": "2022-02-28"
        },
        {
          "index": 9,
          "displayName": "Period 9",
          "start": "2022-03-01",
          "end": "2022-03-31"
        },
        {
          "index": 10,
          "displayName": "Period 10",
          "start": "2022-04-01",
          "end": "2022-04-30"
        },
        {
          "index": 11,
          "displayName": "Period 11",
          "start": "2022-05-01",
          "end": "2022-05-31"
        }
      ]
    },
    {
      "index": 1,
      "displayName": "Category",
      "type": "string",
      "items": [
        {
          "index": 0,
          "value": "Income"
        },
        {
          "index": 1,
          "value": "Expense"
        },
        {
          "index": 2,
          "value": "Gross Profit"
        },
        {
          "index": 3,
          "value": "Net Operating Profit"
        },
        {
          "index": 4,
          "value": "Net Profit"
        }
      ]
    },
    {
      "index": 2,
      "displayName": "Sub Type",
      "type": "string",
      "items": [
        {
          "index": 0,
          "value": "Operating"
        },
        {
          "index": 1,
          "value": "Cost of sales"
        },
        {
          "index": 2,
          "value": "Non-operating"
        }
      ]
    },
    {
      "index": 3,
      "displayName": "Detail Type",
      "type": "string",
      "items": [
        {
          "index": 0,
          "value": "Other operating income"
        },
        {
          "index": 1,
          "value": "Materials"
        },
        {
          "index": 2,
          "value": "Marketing"
        },
        {
          "index": 3,
          "value": "Depreciation and depletion"
        },
        {
          "index": 4,
          "value": "Entertainment"
        },
        {
          "index": 5,
          "value": "General and Administrative"
        },
        {
          "index": 6,
          "value": "Repairs and maintenance"
        },
        {
          "index": 7,
          "value": "Distribution"
        },
        {
          "index": 8,
          "value": "Buildings rent and lease"
        },
        {
          "index": 9,
          "value": "Subscription fees"
        },
        {
          "index": 10,
          "value": "Travel"
        },
        {
          "index": 11,
          "value": "Bank charges"
        },
        {
          "index": 12,
          "value": "Taxes"
        },
        {
          "index": 13,
          "value": "Labour"
        },
        {
          "index": 14,
          "value": "Amortization"
        },
        {
          "index": 15,
          "value": "Interest"
        }
      ]
    },
    {
      "index": 4,
      "displayName": "Accounts",
      "type": "recordRef",
      "items": [
        {
          "index": 0,
          "id": "72df89d2-512b-4455-af51-a6b563733842",
          "displayName": "Sales",
          "dataType": "account"
        },
        {
          "index": 1,
          "id": "7403e960-5b72-42ff-abf4-c870ad8910bd",
          "displayName": "Purchases",
          "dataType": "account"
        },
        {
          "index": 2,
          "id": "868591ad-f9c2-4956-a5ec-c32c1d48c6f3",
          "displayName": "Advertising & Marketing",
          "dataType": "account"
        },
        {
          "index": 3,
          "id": "940c8a59-3348-4a0b-a1b1-781d9f29cc8b",
          "displayName": "Depreciation Expense",
          "dataType": "account"
        },
        {
          "index": 4,
          "id": "e7ac3baa-cfbe-40c1-a172-83d22e84435b",
          "displayName": "Entertainment-100% business",
          "dataType": "account"
        },
        {
          "index": 5,
          "id": "b5e801e8-8dbc-4390-ac99-3b0fff54a89f",
          "displayName": "General Expenses",
          "dataType": "account"
        },
        {
          "index": 6,
          "id": "5360066d-1474-49f6-a7a5-c66d5f6032ba",
          "displayName": "Light, Power, Heating",
          "dataType": "account"
        },
        {
          "index": 7,
          "id": "138a8eb3-5c08-4e59-a3bc-892119694447",
          "displayName": "Motor Vehicle Expenses",
          "dataType": "account"
        },
        {
          "index": 8,
          "id": "1734ff00-2a17-45b4-8db6-2dc2e832c460",
          "displayName": "Postage, Freight & Courier",
          "dataType": "account"
        },
        {
          "index": 9,
          "id": "7aa7988a-ff61-4cb8-bef3-15395355d108",
          "displayName": "Printing & Stationery",
          "dataType": "account"
        },
        {
          "index": 10,
          "id": "9cbe5fe4-ca60-4792-8bf1-de01fb7010aa",
          "displayName": "Rent",
          "dataType": "account"
        },
        {
          "index": 11,
          "id": "04f7111b-55d4-4efc-b329-1bd5c791933a",
          "displayName": "Repairs & Maintenance",
          "dataType": "account"
        },
        {
          "index": 12,
          "id": "7d8d0322-f452-47de-a8e8-54b0130e6f38",
          "displayName": "Subscriptions",
          "dataType": "account"
        },
        {
          "index": 13,
          "id": "043b6bcb-dfe6-4c97-9b4c-f9b300fe3f03",
          "displayName": "Telephone & Internet",
          "dataType": "account"
        },
        {
          "index": 14,
          "id": "df62060b-41cc-4bf2-9de7-c7e537b5663a",
          "displayName": "Travel - National",
          "dataType": "account"
        },
        {
          "index": 15,
          "id": "eef78ed1-dfed-447c-bdba-3a49fb2c044b",
          "displayName": "Audit & Accountancy fees",
          "dataType": "account"
        },
        {
          "index": 16,
          "id": "f3aa84fe-5c31-4107-b207-7e0419f636d7",
          "displayName": "Bank Fees",
          "dataType": "account"
        },
        {
          "index": 17,
          "id": "c16f5c35-8283-47da-9d09-5fecb183b0cb",
          "displayName": "Cleaning",
          "dataType": "account"
        },
        {
          "index": 18,
          "id": "fb3210ef-edeb-48af-bb49-b85d40c1e6bb",
          "displayName": "Corporation Tax",
          "dataType": "account"
        },
        {
          "index": 19,
          "id": "7f6a0e92-65be-4333-9a0a-d981b03bedd1",
          "displayName": "Wages",
          "dataType": "account"
        },
        {
          "index": 20,
          "id": "e8a0a24e-2dab-46b1-bfe1-6e92551c04e8",
          "displayName": "Purchase Discounts",
          "dataType": "account"
        },
        {
          "index": 21,
          "id": "4378ddba-36b4-4b35-9970-bd972b20d137",
          "displayName": "Amortization",
          "dataType": "account"
        },
        {
          "index": 22,
          "id": "78785fd7-f197-4c34-aa17-6e76b9255d34",
          "displayName": "Interest Paid (operating)",
          "dataType": "account"
        }
      ]
    }
  ],
  "measures": [
    {
      "displayName": "Value",
      "units": "GBP",
      "index": 0,
      "type": "currency"
    },
    {
      "displayName": "Percentage change vs previous period",
      "units": "%",
      "index": 1,
      "type": "percentage"
    }
  ],
  "reportData": [
    {
      "dimension": 0,
      "item": 0,
      "components": [
        {
          "dimension": 1,
          "item": 0,
          "measures": [
            {
              "index": 0,
              "value": 77252.86
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 77252.86
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 0,
                  "measures": [
                    {
                      "index": 0,
                      "value": 77252.86
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 0,
                      "measures": [
                        {
                          "index": 0,
                          "value": 77252.86
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 1,
          "measures": [
            {
              "index": 0,
              "value": 8385.16
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 1,
              "measures": [
                {
                  "index": 0,
                  "value": 6185.53
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 1,
                  "measures": [
                    {
                      "index": 0,
                      "value": 1812.39
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 1,
                      "measures": [
                        {
                          "index": 0,
                          "value": 1754.21
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 20,
                      "measures": [
                        {
                          "index": 0,
                          "value": 58.18
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 13,
                  "measures": [
                    {
                      "index": 0,
                      "value": 4373.14
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 19,
                      "measures": [
                        {
                          "index": 0,
                          "value": 4373.14
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 2095.62
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 2,
                  "measures": [
                    {
                      "index": 0,
                      "value": 303.91
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 2,
                      "measures": [
                        {
                          "index": 0,
                          "value": 303.91
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 3,
                  "measures": [
                    {
                      "index": 0,
                      "value": 69.92
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 3,
                      "measures": [
                        {
                          "index": 0,
                          "value": 69.92
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 4,
                  "measures": [
                    {
                      "index": 0,
                      "value": 36.3
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 4,
                      "measures": [
                        {
                          "index": 0,
                          "value": 36.3
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 5,
                  "measures": [
                    {
                      "index": 0,
                      "value": 548.71
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 5,
                      "measures": [
                        {
                          "index": 0,
                          "value": 176.35
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 6,
                      "measures": [
                        {
                          "index": 0,
                          "value": 104.4
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 9,
                      "measures": [
                        {
                          "index": 0,
                          "value": 102.96
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 13,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 15,
                      "measures": [
                        {
                          "index": 0,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 17,
                      "measures": [
                        {
                          "index": 0,
                          "value": 120
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 6,
                  "measures": [
                    {
                      "index": 0,
                      "value": 299.48
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 7,
                      "measures": [
                        {
                          "index": 0,
                          "value": 267.61
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 11,
                      "measures": [
                        {
                          "index": 0,
                          "value": 31.87
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 7,
                  "measures": [
                    {
                      "index": 0,
                      "value": 74.01
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 8,
                      "measures": [
                        {
                          "index": 0,
                          "value": 74.01
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 8,
                  "measures": [
                    {
                      "index": 0,
                      "value": 600
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 10,
                      "measures": [
                        {
                          "index": 0,
                          "value": 600
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 9,
                  "measures": [
                    {
                      "index": 0,
                      "value": 45.86
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 12,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45.86
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 10,
                  "measures": [
                    {
                      "index": 0,
                      "value": 71.51
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 14,
                      "measures": [
                        {
                          "index": 0,
                          "value": 71.51
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 11,
                  "measures": [
                    {
                      "index": 0,
                      "value": 27.11
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 16,
                      "measures": [
                        {
                          "index": 0,
                          "value": 27.11
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 14,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.72
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 21,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.72
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 15,
                  "measures": [
                    {
                      "index": 0,
                      "value": 13.09
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 22,
                      "measures": [
                        {
                          "index": 0,
                          "value": 13.09
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 2,
              "measures": [
                {
                  "index": 0,
                  "value": 104.01
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 12,
                  "measures": [
                    {
                      "index": 0,
                      "value": 104.01
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 18,
                      "measures": [
                        {
                          "index": 0,
                          "value": 104.01
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 2,
          "measures": [
            {
              "index": 0,
              "value": 71067.33
            }
          ]
        },
        {
          "dimension": 1,
          "item": 3,
          "measures": [
            {
              "index": 0,
              "value": 68971.71
            }
          ]
        },
        {
          "dimension": 1,
          "item": 4,
          "measures": [
            {
              "index": 0,
              "value": 68867.7
            }
          ]
        }
      ]
    },
    {
      "dimension": 0,
      "item": 1,
      "components": [
        {
          "dimension": 1,
          "item": 0,
          "measures": [
            {
              "index": 0,
              "value": 16203.13
            },
            {
              "index": 1,
              "value": -79.03
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 16203.13
                },
                {
                  "index": 1,
                  "value": -79.03
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 0,
                  "measures": [
                    {
                      "index": 0,
                      "value": 16203.13
                    },
                    {
                      "index": 1,
                      "value": -79.03
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 0,
                      "measures": [
                        {
                          "index": 0,
                          "value": 16203.13
                        },
                        {
                          "index": 1,
                          "value": -79.03
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 1,
          "measures": [
            {
              "index": 0,
              "value": 8272.2
            },
            {
              "index": 1,
              "value": -1.35
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 1,
              "measures": [
                {
                  "index": 0,
                  "value": 5479.3
                },
                {
                  "index": 1,
                  "value": -11.42
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 1,
                  "measures": [
                    {
                      "index": 0,
                      "value": 1106.16
                    },
                    {
                      "index": 1,
                      "value": -38.97
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 1,
                      "measures": [
                        {
                          "index": 0,
                          "value": 1087.87
                        },
                        {
                          "index": 1,
                          "value": -37.99
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 20,
                      "measures": [
                        {
                          "index": 0,
                          "value": 18.29
                        },
                        {
                          "index": 1,
                          "value": -68.56
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 13,
                  "measures": [
                    {
                      "index": 0,
                      "value": 4373.14
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 19,
                      "measures": [
                        {
                          "index": 0,
                          "value": 4373.14
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 2663.25
                },
                {
                  "index": 1,
                  "value": 27.09
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 2,
                  "measures": [
                    {
                      "index": 0,
                      "value": 753.95
                    },
                    {
                      "index": 1,
                      "value": 148.08
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 2,
                      "measures": [
                        {
                          "index": 0,
                          "value": 753.95
                        },
                        {
                          "index": 1,
                          "value": 148.08
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 3,
                  "measures": [
                    {
                      "index": 0,
                      "value": 83
                    },
                    {
                      "index": 1,
                      "value": 18.71
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 3,
                      "measures": [
                        {
                          "index": 0,
                          "value": 83
                        },
                        {
                          "index": 1,
                          "value": 18.71
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 4,
                  "measures": [
                    {
                      "index": 0,
                      "value": 33.11
                    },
                    {
                      "index": 1,
                      "value": -8.79
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 4,
                      "measures": [
                        {
                          "index": 0,
                          "value": 33.11
                        },
                        {
                          "index": 1,
                          "value": -8.79
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 5,
                  "measures": [
                    {
                      "index": 0,
                      "value": 569.45
                    },
                    {
                      "index": 1,
                      "value": 3.78
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 5,
                      "measures": [
                        {
                          "index": 0,
                          "value": 176.5
                        },
                        {
                          "index": 1,
                          "value": 0.09
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 6,
                      "measures": [
                        {
                          "index": 0,
                          "value": 107.44
                        },
                        {
                          "index": 1,
                          "value": 2.91
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 9,
                      "measures": [
                        {
                          "index": 0,
                          "value": 120.51
                        },
                        {
                          "index": 1,
                          "value": 17.05
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 13,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 15,
                      "measures": [
                        {
                          "index": 0,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 17,
                      "measures": [
                        {
                          "index": 0,
                          "value": 120
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 6,
                  "measures": [
                    {
                      "index": 0,
                      "value": 354.79
                    },
                    {
                      "index": 1,
                      "value": 18.47
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 7,
                      "measures": [
                        {
                          "index": 0,
                          "value": 315.58
                        },
                        {
                          "index": 1,
                          "value": 17.93
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 11,
                      "measures": [
                        {
                          "index": 0,
                          "value": 39.21
                        },
                        {
                          "index": 1,
                          "value": 23.03
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 7,
                  "measures": [
                    {
                      "index": 0,
                      "value": 78.5
                    },
                    {
                      "index": 1,
                      "value": 6.07
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 8,
                      "measures": [
                        {
                          "index": 0,
                          "value": 78.5
                        },
                        {
                          "index": 1,
                          "value": 6.07
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 8,
                  "measures": [
                    {
                      "index": 0,
                      "value": 600
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 10,
                      "measures": [
                        {
                          "index": 0,
                          "value": 600
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 9,
                  "measures": [
                    {
                      "index": 0,
                      "value": 45.86
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 12,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45.86
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 10,
                  "measures": [
                    {
                      "index": 0,
                      "value": 114.67
                    },
                    {
                      "index": 1,
                      "value": 60.36
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 14,
                      "measures": [
                        {
                          "index": 0,
                          "value": 114.67
                        },
                        {
                          "index": 1,
                          "value": 60.36
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 11,
                  "measures": [
                    {
                      "index": 0,
                      "value": 18.67
                    },
                    {
                      "index": 1,
                      "value": -31.13
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 16,
                      "measures": [
                        {
                          "index": 0,
                          "value": 18.67
                        },
                        {
                          "index": 1,
                          "value": -31.13
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 14,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.72
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 21,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.72
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 15,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.53
                    },
                    {
                      "index": 1,
                      "value": -57.75
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 22,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.53
                        },
                        {
                          "index": 1,
                          "value": -57.75
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 2,
              "measures": [
                {
                  "index": 0,
                  "value": 129.65
                },
                {
                  "index": 1,
                  "value": 24.65
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 12,
                  "measures": [
                    {
                      "index": 0,
                      "value": 129.65
                    },
                    {
                      "index": 1,
                      "value": 24.65
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 18,
                      "measures": [
                        {
                          "index": 0,
                          "value": 129.65
                        },
                        {
                          "index": 1,
                          "value": 24.65
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 2,
          "measures": [
            {
              "index": 0,
              "value": 10723.83
            },
            {
              "index": 1,
              "value": -84.91
            }
          ]
        },
        {
          "dimension": 1,
          "item": 3,
          "measures": [
            {
              "index": 0,
              "value": 8060.58
            },
            {
              "index": 1,
              "value": -88.31
            }
          ]
        },
        {
          "dimension": 1,
          "item": 4,
          "measures": [
            {
              "index": 0,
              "value": 7930.93
            },
            {
              "index": 1,
              "value": -88.48
            }
          ]
        }
      ]
    },
    {
      "dimension": 0,
      "item": 2,
      "components": [
        {
          "dimension": 1,
          "item": 0,
          "measures": [
            {
              "index": 0,
              "value": 7969.33
            },
            {
              "index": 1,
              "value": -50.82
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 7969.33
                },
                {
                  "index": 1,
                  "value": -50.82
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 0,
                  "measures": [
                    {
                      "index": 0,
                      "value": 7969.33
                    },
                    {
                      "index": 1,
                      "value": -50.82
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 0,
                      "measures": [
                        {
                          "index": 0,
                          "value": 7969.33
                        },
                        {
                          "index": 1,
                          "value": -50.82
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 1,
          "measures": [
            {
              "index": 0,
              "value": 8099.93
            },
            {
              "index": 1,
              "value": -2.08
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 1,
              "measures": [
                {
                  "index": 0,
                  "value": 5247.46
                },
                {
                  "index": 1,
                  "value": -4.23
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 1,
                  "measures": [
                    {
                      "index": 0,
                      "value": 874.32
                    },
                    {
                      "index": 1,
                      "value": -20.96
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 1,
                      "measures": [
                        {
                          "index": 0,
                          "value": 853.79
                        },
                        {
                          "index": 1,
                          "value": -21.52
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 20,
                      "measures": [
                        {
                          "index": 0,
                          "value": 20.53
                        },
                        {
                          "index": 1,
                          "value": 12.25
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 13,
                  "measures": [
                    {
                      "index": 0,
                      "value": 4373.14
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 19,
                      "measures": [
                        {
                          "index": 0,
                          "value": 4373.14
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 2706.8
                },
                {
                  "index": 1,
                  "value": 1.64
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 2,
                  "measures": [
                    {
                      "index": 0,
                      "value": 689.33
                    },
                    {
                      "index": 1,
                      "value": -8.57
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 2,
                      "measures": [
                        {
                          "index": 0,
                          "value": 689.33
                        },
                        {
                          "index": 1,
                          "value": -8.57
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 3,
                  "measures": [
                    {
                      "index": 0,
                      "value": 127.41
                    },
                    {
                      "index": 1,
                      "value": 53.51
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 3,
                      "measures": [
                        {
                          "index": 0,
                          "value": 127.41
                        },
                        {
                          "index": 1,
                          "value": 53.51
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 4,
                  "measures": [
                    {
                      "index": 0,
                      "value": 12.66
                    },
                    {
                      "index": 1,
                      "value": -61.76
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 4,
                      "measures": [
                        {
                          "index": 0,
                          "value": 12.66
                        },
                        {
                          "index": 1,
                          "value": -61.76
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 5,
                  "measures": [
                    {
                      "index": 0,
                      "value": 527.83
                    },
                    {
                      "index": 1,
                      "value": -7.31
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 5,
                      "measures": [
                        {
                          "index": 0,
                          "value": 133.26
                        },
                        {
                          "index": 1,
                          "value": -24.5
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 6,
                      "measures": [
                        {
                          "index": 0,
                          "value": 133.14
                        },
                        {
                          "index": 1,
                          "value": 23.92
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 9,
                      "measures": [
                        {
                          "index": 0,
                          "value": 96.43
                        },
                        {
                          "index": 1,
                          "value": -19.98
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 13,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 15,
                      "measures": [
                        {
                          "index": 0,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 17,
                      "measures": [
                        {
                          "index": 0,
                          "value": 120
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 6,
                  "measures": [
                    {
                      "index": 0,
                      "value": 436.79
                    },
                    {
                      "index": 1,
                      "value": 23.11
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 7,
                      "measures": [
                        {
                          "index": 0,
                          "value": 406.35
                        },
                        {
                          "index": 1,
                          "value": 28.76
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 11,
                      "measures": [
                        {
                          "index": 0,
                          "value": 30.44
                        },
                        {
                          "index": 1,
                          "value": -22.37
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 7,
                  "measures": [
                    {
                      "index": 0,
                      "value": 142.95
                    },
                    {
                      "index": 1,
                      "value": 82.1
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 8,
                      "measures": [
                        {
                          "index": 0,
                          "value": 142.95
                        },
                        {
                          "index": 1,
                          "value": 82.1
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 8,
                  "measures": [
                    {
                      "index": 0,
                      "value": 600
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 10,
                      "measures": [
                        {
                          "index": 0,
                          "value": 600
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 9,
                  "measures": [
                    {
                      "index": 0,
                      "value": 45.86
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 12,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45.86
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 10,
                  "measures": [
                    {
                      "index": 0,
                      "value": 97.96
                    },
                    {
                      "index": 1,
                      "value": -14.57
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 14,
                      "measures": [
                        {
                          "index": 0,
                          "value": 97.96
                        },
                        {
                          "index": 1,
                          "value": -14.57
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 11,
                  "measures": [
                    {
                      "index": 0,
                      "value": 14.97
                    },
                    {
                      "index": 1,
                      "value": -19.82
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 16,
                      "measures": [
                        {
                          "index": 0,
                          "value": 14.97
                        },
                        {
                          "index": 1,
                          "value": -19.82
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 14,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.72
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 21,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.72
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 15,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.32
                    },
                    {
                      "index": 1,
                      "value": -3.8
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 22,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.32
                        },
                        {
                          "index": 1,
                          "value": -3.8
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 2,
              "measures": [
                {
                  "index": 0,
                  "value": 145.67
                },
                {
                  "index": 1,
                  "value": 12.36
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 12,
                  "measures": [
                    {
                      "index": 0,
                      "value": 145.67
                    },
                    {
                      "index": 1,
                      "value": 12.36
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 18,
                      "measures": [
                        {
                          "index": 0,
                          "value": 145.67
                        },
                        {
                          "index": 1,
                          "value": 12.36
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 2,
          "measures": [
            {
              "index": 0,
              "value": 2721.87
            },
            {
              "index": 1,
              "value": -74.62
            }
          ]
        },
        {
          "dimension": 1,
          "item": 3,
          "measures": [
            {
              "index": 0,
              "value": 15.07
            },
            {
              "index": 1,
              "value": -99.81
            }
          ]
        },
        {
          "dimension": 1,
          "item": 4,
          "measures": [
            {
              "index": 0,
              "value": -130.6
            }
          ]
        }
      ]
    },
    {
      "dimension": 0,
      "item": 3,
      "components": [
        {
          "dimension": 1,
          "item": 0,
          "measures": [
            {
              "index": 0,
              "value": 28590.16
            },
            {
              "index": 1,
              "value": 258.75
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 28590.16
                },
                {
                  "index": 1,
                  "value": 258.75
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 0,
                  "measures": [
                    {
                      "index": 0,
                      "value": 28590.16
                    },
                    {
                      "index": 1,
                      "value": 258.75
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 0,
                      "measures": [
                        {
                          "index": 0,
                          "value": 28590.16
                        },
                        {
                          "index": 1,
                          "value": 258.75
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 1,
          "measures": [
            {
              "index": 0,
              "value": 8522.48
            },
            {
              "index": 1,
              "value": 5.22
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 1,
              "measures": [
                {
                  "index": 0,
                  "value": 6059.92
                },
                {
                  "index": 1,
                  "value": 15.48
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 1,
                  "measures": [
                    {
                      "index": 0,
                      "value": 1686.78
                    },
                    {
                      "index": 1,
                      "value": 92.92
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 1,
                      "measures": [
                        {
                          "index": 0,
                          "value": 1622.67
                        },
                        {
                          "index": 1,
                          "value": 90.05
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 20,
                      "measures": [
                        {
                          "index": 0,
                          "value": 64.11
                        },
                        {
                          "index": 1,
                          "value": 212.27
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 13,
                  "measures": [
                    {
                      "index": 0,
                      "value": 4373.14
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 19,
                      "measures": [
                        {
                          "index": 0,
                          "value": 4373.14
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 2352.58
                },
                {
                  "index": 1,
                  "value": -13.09
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 2,
                  "measures": [
                    {
                      "index": 0,
                      "value": 411.98
                    },
                    {
                      "index": 1,
                      "value": -40.23
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 2,
                      "measures": [
                        {
                          "index": 0,
                          "value": 411.98
                        },
                        {
                          "index": 1,
                          "value": -40.23
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 3,
                  "measures": [
                    {
                      "index": 0,
                      "value": 138.83
                    },
                    {
                      "index": 1,
                      "value": 8.96
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 3,
                      "measures": [
                        {
                          "index": 0,
                          "value": 138.83
                        },
                        {
                          "index": 1,
                          "value": 8.96
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 4,
                  "measures": [
                    {
                      "index": 0,
                      "value": 31.18
                    },
                    {
                      "index": 1,
                      "value": 146.29
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 4,
                      "measures": [
                        {
                          "index": 0,
                          "value": 31.18
                        },
                        {
                          "index": 1,
                          "value": 146.29
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 5,
                  "measures": [
                    {
                      "index": 0,
                      "value": 450.78
                    },
                    {
                      "index": 1,
                      "value": -14.6
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 5,
                      "measures": [
                        {
                          "index": 0,
                          "value": 160.81
                        },
                        {
                          "index": 1,
                          "value": 20.67
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 6,
                      "measures": [
                        {
                          "index": 0,
                          "value": 63.42
                        },
                        {
                          "index": 1,
                          "value": -52.37
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 9,
                      "measures": [
                        {
                          "index": 0,
                          "value": 61.55
                        },
                        {
                          "index": 1,
                          "value": -36.17
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 13,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 15,
                      "measures": [
                        {
                          "index": 0,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 17,
                      "measures": [
                        {
                          "index": 0,
                          "value": 120
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 6,
                  "measures": [
                    {
                      "index": 0,
                      "value": 379.08
                    },
                    {
                      "index": 1,
                      "value": -13.21
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 7,
                      "measures": [
                        {
                          "index": 0,
                          "value": 340.44
                        },
                        {
                          "index": 1,
                          "value": -16.22
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 11,
                      "measures": [
                        {
                          "index": 0,
                          "value": 38.64
                        },
                        {
                          "index": 1,
                          "value": 26.94
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 7,
                  "measures": [
                    {
                      "index": 0,
                      "value": 139.12
                    },
                    {
                      "index": 1,
                      "value": -2.68
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 8,
                      "measures": [
                        {
                          "index": 0,
                          "value": 139.12
                        },
                        {
                          "index": 1,
                          "value": -2.68
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 8,
                  "measures": [
                    {
                      "index": 0,
                      "value": 600
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 10,
                      "measures": [
                        {
                          "index": 0,
                          "value": 600
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 9,
                  "measures": [
                    {
                      "index": 0,
                      "value": 45.86
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 12,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45.86
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 10,
                  "measures": [
                    {
                      "index": 0,
                      "value": 128.2
                    },
                    {
                      "index": 1,
                      "value": 30.87
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 14,
                      "measures": [
                        {
                          "index": 0,
                          "value": 128.2
                        },
                        {
                          "index": 1,
                          "value": 30.87
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 11,
                  "measures": [
                    {
                      "index": 0,
                      "value": 3.55
                    },
                    {
                      "index": 1,
                      "value": -76.29
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 16,
                      "measures": [
                        {
                          "index": 0,
                          "value": 3.55
                        },
                        {
                          "index": 1,
                          "value": -76.29
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 14,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.72
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 21,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.72
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 15,
                  "measures": [
                    {
                      "index": 0,
                      "value": 18.28
                    },
                    {
                      "index": 1,
                      "value": 243.61
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 22,
                      "measures": [
                        {
                          "index": 0,
                          "value": 18.28
                        },
                        {
                          "index": 1,
                          "value": 243.61
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 2,
              "measures": [
                {
                  "index": 0,
                  "value": 109.98
                },
                {
                  "index": 1,
                  "value": -24.5
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 12,
                  "measures": [
                    {
                      "index": 0,
                      "value": 109.98
                    },
                    {
                      "index": 1,
                      "value": -24.5
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 18,
                      "measures": [
                        {
                          "index": 0,
                          "value": 109.98
                        },
                        {
                          "index": 1,
                          "value": -24.5
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 2,
          "measures": [
            {
              "index": 0,
              "value": 22530.24
            },
            {
              "index": 1,
              "value": 727.75
            }
          ]
        },
        {
          "dimension": 1,
          "item": 3,
          "measures": [
            {
              "index": 0,
              "value": 20177.66
            },
            {
              "index": 1,
              "value": 133792.9
            }
          ]
        },
        {
          "dimension": 1,
          "item": 4,
          "measures": [
            {
              "index": 0,
              "value": 20067.68
            }
          ]
        }
      ]
    },
    {
      "dimension": 0,
      "item": 4,
      "components": [
        {
          "dimension": 1,
          "item": 0,
          "measures": [
            {
              "index": 0,
              "value": 21313.93
            },
            {
              "index": 1,
              "value": -25.45
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 21313.93
                },
                {
                  "index": 1,
                  "value": -25.45
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 0,
                  "measures": [
                    {
                      "index": 0,
                      "value": 21313.93
                    },
                    {
                      "index": 1,
                      "value": -25.45
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 0,
                      "measures": [
                        {
                          "index": 0,
                          "value": 21313.93
                        },
                        {
                          "index": 1,
                          "value": -25.45
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 1,
          "measures": [
            {
              "index": 0,
              "value": 7638.43
            },
            {
              "index": 1,
              "value": -10.37
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 1,
              "measures": [
                {
                  "index": 0,
                  "value": 5471.41
                },
                {
                  "index": 1,
                  "value": -9.71
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 1,
                  "measures": [
                    {
                      "index": 0,
                      "value": 1098.27
                    },
                    {
                      "index": 1,
                      "value": -34.89
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 1,
                      "measures": [
                        {
                          "index": 0,
                          "value": 1056.76
                        },
                        {
                          "index": 1,
                          "value": -34.88
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 20,
                      "measures": [
                        {
                          "index": 0,
                          "value": 41.51
                        },
                        {
                          "index": 1,
                          "value": -35.25
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 13,
                  "measures": [
                    {
                      "index": 0,
                      "value": 4373.14
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 19,
                      "measures": [
                        {
                          "index": 0,
                          "value": 4373.14
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 2056.38
                },
                {
                  "index": 1,
                  "value": -12.59
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 2,
                  "measures": [
                    {
                      "index": 0,
                      "value": 203.8
                    },
                    {
                      "index": 1,
                      "value": -50.53
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 2,
                      "measures": [
                        {
                          "index": 0,
                          "value": 203.8
                        },
                        {
                          "index": 1,
                          "value": -50.53
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 3,
                  "measures": [
                    {
                      "index": 0,
                      "value": 103.72
                    },
                    {
                      "index": 1,
                      "value": -25.29
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 3,
                      "measures": [
                        {
                          "index": 0,
                          "value": 103.72
                        },
                        {
                          "index": 1,
                          "value": -25.29
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 4,
                  "measures": [
                    {
                      "index": 0,
                      "value": 37.58
                    },
                    {
                      "index": 1,
                      "value": 20.53
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 4,
                      "measures": [
                        {
                          "index": 0,
                          "value": 37.58
                        },
                        {
                          "index": 1,
                          "value": 20.53
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 5,
                  "measures": [
                    {
                      "index": 0,
                      "value": 522.42
                    },
                    {
                      "index": 1,
                      "value": 15.89
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 5,
                      "measures": [
                        {
                          "index": 0,
                          "value": 117.99
                        },
                        {
                          "index": 1,
                          "value": -26.63
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 6,
                      "measures": [
                        {
                          "index": 0,
                          "value": 128.91
                        },
                        {
                          "index": 1,
                          "value": 103.26
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 9,
                      "measures": [
                        {
                          "index": 0,
                          "value": 110.52
                        },
                        {
                          "index": 1,
                          "value": 79.56
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 13,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 15,
                      "measures": [
                        {
                          "index": 0,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 17,
                      "measures": [
                        {
                          "index": 0,
                          "value": 120
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 6,
                  "measures": [
                    {
                      "index": 0,
                      "value": 288.05
                    },
                    {
                      "index": 1,
                      "value": -24.01
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 7,
                      "measures": [
                        {
                          "index": 0,
                          "value": 267.41
                        },
                        {
                          "index": 1,
                          "value": -21.45
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 11,
                      "measures": [
                        {
                          "index": 0,
                          "value": 20.64
                        },
                        {
                          "index": 1,
                          "value": -46.58
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 7,
                  "measures": [
                    {
                      "index": 0,
                      "value": 143.3
                    },
                    {
                      "index": 1,
                      "value": 3
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 8,
                      "measures": [
                        {
                          "index": 0,
                          "value": 143.3
                        },
                        {
                          "index": 1,
                          "value": 3
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 8,
                  "measures": [
                    {
                      "index": 0,
                      "value": 600
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 10,
                      "measures": [
                        {
                          "index": 0,
                          "value": 600
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 9,
                  "measures": [
                    {
                      "index": 0,
                      "value": 45.86
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 12,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45.86
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 10,
                  "measures": [
                    {
                      "index": 0,
                      "value": 72.97
                    },
                    {
                      "index": 1,
                      "value": -43.08
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 14,
                      "measures": [
                        {
                          "index": 0,
                          "value": 72.97
                        },
                        {
                          "index": 1,
                          "value": -43.08
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 11,
                  "measures": [
                    {
                      "index": 0,
                      "value": 16.49
                    },
                    {
                      "index": 1,
                      "value": 364.51
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 16,
                      "measures": [
                        {
                          "index": 0,
                          "value": 16.49
                        },
                        {
                          "index": 1,
                          "value": 364.51
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 14,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.72
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 21,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.72
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 15,
                  "measures": [
                    {
                      "index": 0,
                      "value": 16.47
                    },
                    {
                      "index": 1,
                      "value": -9.9
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 22,
                      "measures": [
                        {
                          "index": 0,
                          "value": 16.47
                        },
                        {
                          "index": 1,
                          "value": -9.9
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 2,
              "measures": [
                {
                  "index": 0,
                  "value": 110.64
                },
                {
                  "index": 1,
                  "value": 0.6
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 12,
                  "measures": [
                    {
                      "index": 0,
                      "value": 110.64
                    },
                    {
                      "index": 1,
                      "value": 0.6
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 18,
                      "measures": [
                        {
                          "index": 0,
                          "value": 110.64
                        },
                        {
                          "index": 1,
                          "value": 0.6
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 2,
          "measures": [
            {
              "index": 0,
              "value": 15842.52
            },
            {
              "index": 1,
              "value": -29.68
            }
          ]
        },
        {
          "dimension": 1,
          "item": 3,
          "measures": [
            {
              "index": 0,
              "value": 13786.14
            },
            {
              "index": 1,
              "value": -31.68
            }
          ]
        },
        {
          "dimension": 1,
          "item": 4,
          "measures": [
            {
              "index": 0,
              "value": 13675.5
            },
            {
              "index": 1,
              "value": -31.85
            }
          ]
        }
      ]
    },
    {
      "dimension": 0,
      "item": 5,
      "components": [
        {
          "dimension": 1,
          "item": 0,
          "measures": [
            {
              "index": 0,
              "value": 37254
            },
            {
              "index": 1,
              "value": 74.79
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 37254
                },
                {
                  "index": 1,
                  "value": 74.79
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 0,
                  "measures": [
                    {
                      "index": 0,
                      "value": 37254
                    },
                    {
                      "index": 1,
                      "value": 74.79
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 0,
                      "measures": [
                        {
                          "index": 0,
                          "value": 37254
                        },
                        {
                          "index": 1,
                          "value": 74.79
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 1,
          "measures": [
            {
              "index": 0,
              "value": 8892.7
            },
            {
              "index": 1,
              "value": 16.42
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 1,
              "measures": [
                {
                  "index": 0,
                  "value": 6303.45
                },
                {
                  "index": 1,
                  "value": 15.21
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 1,
                  "measures": [
                    {
                      "index": 0,
                      "value": 1930.31
                    },
                    {
                      "index": 1,
                      "value": 75.76
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 1,
                      "measures": [
                        {
                          "index": 0,
                          "value": 1800.58
                        },
                        {
                          "index": 1,
                          "value": 70.39
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 20,
                      "measures": [
                        {
                          "index": 0,
                          "value": 129.73
                        },
                        {
                          "index": 1,
                          "value": 212.53
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 13,
                  "measures": [
                    {
                      "index": 0,
                      "value": 4373.14
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 19,
                      "measures": [
                        {
                          "index": 0,
                          "value": 4373.14
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 2485.65
                },
                {
                  "index": 1,
                  "value": 20.88
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 2,
                  "measures": [
                    {
                      "index": 0,
                      "value": 747.2
                    },
                    {
                      "index": 1,
                      "value": 266.63
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 2,
                      "measures": [
                        {
                          "index": 0,
                          "value": 747.2
                        },
                        {
                          "index": 1,
                          "value": 266.63
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 3,
                  "measures": [
                    {
                      "index": 0,
                      "value": 126.9
                    },
                    {
                      "index": 1,
                      "value": 22.35
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 3,
                      "measures": [
                        {
                          "index": 0,
                          "value": 126.9
                        },
                        {
                          "index": 1,
                          "value": 22.35
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 4,
                  "measures": [
                    {
                      "index": 0,
                      "value": 42.16
                    },
                    {
                      "index": 1,
                      "value": 12.19
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 4,
                      "measures": [
                        {
                          "index": 0,
                          "value": 42.16
                        },
                        {
                          "index": 1,
                          "value": 12.19
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 5,
                  "measures": [
                    {
                      "index": 0,
                      "value": 375.45
                    },
                    {
                      "index": 1,
                      "value": -28.13
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 5,
                      "measures": [
                        {
                          "index": 0,
                          "value": 72.82
                        },
                        {
                          "index": 1,
                          "value": -38.28
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 6,
                      "measures": [
                        {
                          "index": 0,
                          "value": 62.29
                        },
                        {
                          "index": 1,
                          "value": -51.68
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 9,
                      "measures": [
                        {
                          "index": 0,
                          "value": 75.34
                        },
                        {
                          "index": 1,
                          "value": -31.83
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 13,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 15,
                      "measures": [
                        {
                          "index": 0,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 17,
                      "measures": [
                        {
                          "index": 0,
                          "value": 120
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 6,
                  "measures": [
                    {
                      "index": 0,
                      "value": 359.41
                    },
                    {
                      "index": 1,
                      "value": 24.77
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 7,
                      "measures": [
                        {
                          "index": 0,
                          "value": 325.18
                        },
                        {
                          "index": 1,
                          "value": 21.6
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 11,
                      "measures": [
                        {
                          "index": 0,
                          "value": 34.23
                        },
                        {
                          "index": 1,
                          "value": 65.84
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 7,
                  "measures": [
                    {
                      "index": 0,
                      "value": 80.31
                    },
                    {
                      "index": 1,
                      "value": -43.96
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 8,
                      "measures": [
                        {
                          "index": 0,
                          "value": 80.31
                        },
                        {
                          "index": 1,
                          "value": -43.96
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 8,
                  "measures": [
                    {
                      "index": 0,
                      "value": 600
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 10,
                      "measures": [
                        {
                          "index": 0,
                          "value": 600
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 9,
                  "measures": [
                    {
                      "index": 0,
                      "value": 45.86
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 12,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45.86
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 10,
                  "measures": [
                    {
                      "index": 0,
                      "value": 95.48
                    },
                    {
                      "index": 1,
                      "value": 30.85
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 14,
                      "measures": [
                        {
                          "index": 0,
                          "value": 95.48
                        },
                        {
                          "index": 1,
                          "value": 30.85
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 11,
                  "measures": [
                    {
                      "index": 0,
                      "value": 6
                    },
                    {
                      "index": 1,
                      "value": -63.61
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 16,
                      "measures": [
                        {
                          "index": 0,
                          "value": 6
                        },
                        {
                          "index": 1,
                          "value": -63.61
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 14,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.72
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 21,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.72
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 15,
                  "measures": [
                    {
                      "index": 0,
                      "value": 1.16
                    },
                    {
                      "index": 1,
                      "value": -92.96
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 22,
                      "measures": [
                        {
                          "index": 0,
                          "value": 1.16
                        },
                        {
                          "index": 1,
                          "value": -92.96
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 2,
              "measures": [
                {
                  "index": 0,
                  "value": 103.6
                },
                {
                  "index": 1,
                  "value": -6.36
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 12,
                  "measures": [
                    {
                      "index": 0,
                      "value": 103.6
                    },
                    {
                      "index": 1,
                      "value": -6.36
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 18,
                      "measures": [
                        {
                          "index": 0,
                          "value": 103.6
                        },
                        {
                          "index": 1,
                          "value": -6.36
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 2,
          "measures": [
            {
              "index": 0,
              "value": 30950.55
            },
            {
              "index": 1,
              "value": 95.36
            }
          ]
        },
        {
          "dimension": 1,
          "item": 3,
          "measures": [
            {
              "index": 0,
              "value": 28464.9
            },
            {
              "index": 1,
              "value": 106.47
            }
          ]
        },
        {
          "dimension": 1,
          "item": 4,
          "measures": [
            {
              "index": 0,
              "value": 28361.3
            },
            {
              "index": 1,
              "value": 107.39
            }
          ]
        }
      ]
    },
    {
      "dimension": 0,
      "item": 6,
      "components": [
        {
          "dimension": 1,
          "item": 0,
          "measures": [
            {
              "index": 0,
              "value": 75766.25
            },
            {
              "index": 1,
              "value": 103.38
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 75766.25
                },
                {
                  "index": 1,
                  "value": 103.38
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 0,
                  "measures": [
                    {
                      "index": 0,
                      "value": 75766.25
                    },
                    {
                      "index": 1,
                      "value": 103.38
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 0,
                      "measures": [
                        {
                          "index": 0,
                          "value": 75766.25
                        },
                        {
                          "index": 1,
                          "value": 103.38
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 1,
          "measures": [
            {
              "index": 0,
              "value": 8712.76
            },
            {
              "index": 1,
              "value": -2.02
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 1,
              "measures": [
                {
                  "index": 0,
                  "value": 6172.36
                },
                {
                  "index": 1,
                  "value": -2.08
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 1,
                  "measures": [
                    {
                      "index": 0,
                      "value": 1799.22
                    },
                    {
                      "index": 1,
                      "value": -6.79
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 1,
                      "measures": [
                        {
                          "index": 0,
                          "value": 1709.82
                        },
                        {
                          "index": 1,
                          "value": -5.04
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 20,
                      "measures": [
                        {
                          "index": 0,
                          "value": 89.4
                        },
                        {
                          "index": 1,
                          "value": -31.09
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 13,
                  "measures": [
                    {
                      "index": 0,
                      "value": 4373.14
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 19,
                      "measures": [
                        {
                          "index": 0,
                          "value": 4373.14
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 2361.88
                },
                {
                  "index": 1,
                  "value": -4.98
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 2,
                  "measures": [
                    {
                      "index": 0,
                      "value": 380.25
                    },
                    {
                      "index": 1,
                      "value": -49.11
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 2,
                      "measures": [
                        {
                          "index": 0,
                          "value": 380.25
                        },
                        {
                          "index": 1,
                          "value": -49.11
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 3,
                  "measures": [
                    {
                      "index": 0,
                      "value": 132.18
                    },
                    {
                      "index": 1,
                      "value": 4.16
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 3,
                      "measures": [
                        {
                          "index": 0,
                          "value": 132.18
                        },
                        {
                          "index": 1,
                          "value": 4.16
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 4,
                  "measures": [
                    {
                      "index": 0,
                      "value": 44
                    },
                    {
                      "index": 1,
                      "value": 4.36
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 4,
                      "measures": [
                        {
                          "index": 0,
                          "value": 44
                        },
                        {
                          "index": 1,
                          "value": 4.36
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 5,
                  "measures": [
                    {
                      "index": 0,
                      "value": 539.44
                    },
                    {
                      "index": 1,
                      "value": 43.68
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 5,
                      "measures": [
                        {
                          "index": 0,
                          "value": 177.82
                        },
                        {
                          "index": 1,
                          "value": 144.19
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 6,
                      "measures": [
                        {
                          "index": 0,
                          "value": 106.27
                        },
                        {
                          "index": 1,
                          "value": 70.61
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 9,
                      "measures": [
                        {
                          "index": 0,
                          "value": 90.35
                        },
                        {
                          "index": 1,
                          "value": 19.92
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 13,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 15,
                      "measures": [
                        {
                          "index": 0,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 17,
                      "measures": [
                        {
                          "index": 0,
                          "value": 120
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 6,
                  "measures": [
                    {
                      "index": 0,
                      "value": 360.98
                    },
                    {
                      "index": 1,
                      "value": 0.44
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 7,
                      "measures": [
                        {
                          "index": 0,
                          "value": 318.07
                        },
                        {
                          "index": 1,
                          "value": -2.19
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 11,
                      "measures": [
                        {
                          "index": 0,
                          "value": 42.91
                        },
                        {
                          "index": 1,
                          "value": 25.36
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 7,
                  "measures": [
                    {
                      "index": 0,
                      "value": 127.26
                    },
                    {
                      "index": 1,
                      "value": 58.46
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 8,
                      "measures": [
                        {
                          "index": 0,
                          "value": 127.26
                        },
                        {
                          "index": 1,
                          "value": 58.46
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 8,
                  "measures": [
                    {
                      "index": 0,
                      "value": 600
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 10,
                      "measures": [
                        {
                          "index": 0,
                          "value": 600
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 9,
                  "measures": [
                    {
                      "index": 0,
                      "value": 45.86
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 12,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45.86
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 10,
                  "measures": [
                    {
                      "index": 0,
                      "value": 90.89
                    },
                    {
                      "index": 1,
                      "value": -4.81
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 14,
                      "measures": [
                        {
                          "index": 0,
                          "value": 90.89
                        },
                        {
                          "index": 1,
                          "value": -4.81
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 11,
                  "measures": [
                    {
                      "index": 0,
                      "value": 19.93
                    },
                    {
                      "index": 1,
                      "value": 232.17
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 16,
                      "measures": [
                        {
                          "index": 0,
                          "value": 19.93
                        },
                        {
                          "index": 1,
                          "value": 232.17
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 14,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.72
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 21,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.72
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 15,
                  "measures": [
                    {
                      "index": 0,
                      "value": 15.37
                    },
                    {
                      "index": 1,
                      "value": 1225
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 22,
                      "measures": [
                        {
                          "index": 0,
                          "value": 15.37
                        },
                        {
                          "index": 1,
                          "value": 1225
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 2,
              "measures": [
                {
                  "index": 0,
                  "value": 178.52
                },
                {
                  "index": 1,
                  "value": 72.32
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 12,
                  "measures": [
                    {
                      "index": 0,
                      "value": 178.52
                    },
                    {
                      "index": 1,
                      "value": 72.32
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 18,
                      "measures": [
                        {
                          "index": 0,
                          "value": 178.52
                        },
                        {
                          "index": 1,
                          "value": 72.32
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 2,
          "measures": [
            {
              "index": 0,
              "value": 69593.89
            },
            {
              "index": 1,
              "value": 124.86
            }
          ]
        },
        {
          "dimension": 1,
          "item": 3,
          "measures": [
            {
              "index": 0,
              "value": 67232.01
            },
            {
              "index": 1,
              "value": 136.19
            }
          ]
        },
        {
          "dimension": 1,
          "item": 4,
          "measures": [
            {
              "index": 0,
              "value": 67053.49
            },
            {
              "index": 1,
              "value": 136.43
            }
          ]
        }
      ]
    },
    {
      "dimension": 0,
      "item": 7,
      "components": [
        {
          "dimension": 1,
          "item": 0,
          "measures": [
            {
              "index": 0,
              "value": 22417.64
            },
            {
              "index": 1,
              "value": -70.41
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 22417.64
                },
                {
                  "index": 1,
                  "value": -70.41
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 0,
                  "measures": [
                    {
                      "index": 0,
                      "value": 22417.64
                    },
                    {
                      "index": 1,
                      "value": -70.41
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 0,
                      "measures": [
                        {
                          "index": 0,
                          "value": 22417.64
                        },
                        {
                          "index": 1,
                          "value": -70.41
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 1,
          "measures": [
            {
              "index": 0,
              "value": 8639.16
            },
            {
              "index": 1,
              "value": -0.84
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 1,
              "measures": [
                {
                  "index": 0,
                  "value": 6293.69
                },
                {
                  "index": 1,
                  "value": 1.97
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 1,
                  "measures": [
                    {
                      "index": 0,
                      "value": 1920.55
                    },
                    {
                      "index": 1,
                      "value": 6.74
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 1,
                      "measures": [
                        {
                          "index": 0,
                          "value": 1910.09
                        },
                        {
                          "index": 1,
                          "value": 11.71
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 20,
                      "measures": [
                        {
                          "index": 0,
                          "value": 10.46
                        },
                        {
                          "index": 1,
                          "value": -88.3
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 13,
                  "measures": [
                    {
                      "index": 0,
                      "value": 4373.14
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 19,
                      "measures": [
                        {
                          "index": 0,
                          "value": 4373.14
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 2213.03
                },
                {
                  "index": 1,
                  "value": -6.3
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 2,
                  "measures": [
                    {
                      "index": 0,
                      "value": 251.84
                    },
                    {
                      "index": 1,
                      "value": -33.77
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 2,
                      "measures": [
                        {
                          "index": 0,
                          "value": 251.84
                        },
                        {
                          "index": 1,
                          "value": -33.77
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 3,
                  "measures": [
                    {
                      "index": 0,
                      "value": 96.05
                    },
                    {
                      "index": 1,
                      "value": -27.33
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 3,
                      "measures": [
                        {
                          "index": 0,
                          "value": 96.05
                        },
                        {
                          "index": 1,
                          "value": -27.33
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 4,
                  "measures": [
                    {
                      "index": 0,
                      "value": 16.66
                    },
                    {
                      "index": 1,
                      "value": -62.14
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 4,
                      "measures": [
                        {
                          "index": 0,
                          "value": 16.66
                        },
                        {
                          "index": 1,
                          "value": -62.14
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 5,
                  "measures": [
                    {
                      "index": 0,
                      "value": 557.93
                    },
                    {
                      "index": 1,
                      "value": 3.43
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 5,
                      "measures": [
                        {
                          "index": 0,
                          "value": 182.45
                        },
                        {
                          "index": 1,
                          "value": 2.6
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 6,
                      "measures": [
                        {
                          "index": 0,
                          "value": 105.56
                        },
                        {
                          "index": 1,
                          "value": -0.67
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 9,
                      "measures": [
                        {
                          "index": 0,
                          "value": 104.92
                        },
                        {
                          "index": 1,
                          "value": 16.13
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 13,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 15,
                      "measures": [
                        {
                          "index": 0,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 17,
                      "measures": [
                        {
                          "index": 0,
                          "value": 120
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 6,
                  "measures": [
                    {
                      "index": 0,
                      "value": 380.31
                    },
                    {
                      "index": 1,
                      "value": 5.35
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 7,
                      "measures": [
                        {
                          "index": 0,
                          "value": 343.17
                        },
                        {
                          "index": 1,
                          "value": 7.89
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 11,
                      "measures": [
                        {
                          "index": 0,
                          "value": 37.14
                        },
                        {
                          "index": 1,
                          "value": -13.45
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 7,
                  "measures": [
                    {
                      "index": 0,
                      "value": 131.96
                    },
                    {
                      "index": 1,
                      "value": 3.69
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 8,
                      "measures": [
                        {
                          "index": 0,
                          "value": 131.96
                        },
                        {
                          "index": 1,
                          "value": 3.69
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 8,
                  "measures": [
                    {
                      "index": 0,
                      "value": 600
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 10,
                      "measures": [
                        {
                          "index": 0,
                          "value": 600
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 9,
                  "measures": [
                    {
                      "index": 0,
                      "value": 45.86
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 12,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45.86
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 10,
                  "measures": [
                    {
                      "index": 0,
                      "value": 106.85
                    },
                    {
                      "index": 1,
                      "value": 17.56
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 14,
                      "measures": [
                        {
                          "index": 0,
                          "value": 106.85
                        },
                        {
                          "index": 1,
                          "value": 17.56
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 11,
                  "measures": [
                    {
                      "index": 0,
                      "value": 2.59
                    },
                    {
                      "index": 1,
                      "value": -87
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 16,
                      "measures": [
                        {
                          "index": 0,
                          "value": 2.59
                        },
                        {
                          "index": 1,
                          "value": -87
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 14,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.72
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 21,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.72
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 15,
                  "measures": [
                    {
                      "index": 0,
                      "value": 17.26
                    },
                    {
                      "index": 1,
                      "value": 12.3
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 22,
                      "measures": [
                        {
                          "index": 0,
                          "value": 17.26
                        },
                        {
                          "index": 1,
                          "value": 12.3
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 2,
              "measures": [
                {
                  "index": 0,
                  "value": 132.44
                },
                {
                  "index": 1,
                  "value": -25.81
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 12,
                  "measures": [
                    {
                      "index": 0,
                      "value": 132.44
                    },
                    {
                      "index": 1,
                      "value": -25.81
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 18,
                      "measures": [
                        {
                          "index": 0,
                          "value": 132.44
                        },
                        {
                          "index": 1,
                          "value": -25.81
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 2,
          "measures": [
            {
              "index": 0,
              "value": 16123.95
            },
            {
              "index": 1,
              "value": -76.83
            }
          ]
        },
        {
          "dimension": 1,
          "item": 3,
          "measures": [
            {
              "index": 0,
              "value": 13910.92
            },
            {
              "index": 1,
              "value": -79.31
            }
          ]
        },
        {
          "dimension": 1,
          "item": 4,
          "measures": [
            {
              "index": 0,
              "value": 13778.48
            },
            {
              "index": 1,
              "value": -79.45
            }
          ]
        }
      ]
    },
    {
      "dimension": 0,
      "item": 8,
      "components": [
        {
          "dimension": 1,
          "item": 0,
          "measures": [
            {
              "index": 0,
              "value": 21969
            },
            {
              "index": 1,
              "value": -2
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 21969
                },
                {
                  "index": 1,
                  "value": -2
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 0,
                  "measures": [
                    {
                      "index": 0,
                      "value": 21969
                    },
                    {
                      "index": 1,
                      "value": -2
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 0,
                      "measures": [
                        {
                          "index": 0,
                          "value": 21969
                        },
                        {
                          "index": 1,
                          "value": -2
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 1,
          "measures": [
            {
              "index": 0,
              "value": 9456.6
            },
            {
              "index": 1,
              "value": 9.46
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 1,
              "measures": [
                {
                  "index": 0,
                  "value": 6534.92
                },
                {
                  "index": 1,
                  "value": 3.83
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 1,
                  "measures": [
                    {
                      "index": 0,
                      "value": 2161.78
                    },
                    {
                      "index": 1,
                      "value": 12.56
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 1,
                      "measures": [
                        {
                          "index": 0,
                          "value": 1995.6
                        },
                        {
                          "index": 1,
                          "value": 4.48
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 20,
                      "measures": [
                        {
                          "index": 0,
                          "value": 166.18
                        },
                        {
                          "index": 1,
                          "value": 1488.72
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 13,
                  "measures": [
                    {
                      "index": 0,
                      "value": 4373.14
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 19,
                      "measures": [
                        {
                          "index": 0,
                          "value": 4373.14
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 2725.89
                },
                {
                  "index": 1,
                  "value": 23.17
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 2,
                  "measures": [
                    {
                      "index": 0,
                      "value": 723.1
                    },
                    {
                      "index": 1,
                      "value": 187.13
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 2,
                      "measures": [
                        {
                          "index": 0,
                          "value": 723.1
                        },
                        {
                          "index": 1,
                          "value": 187.13
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 3,
                  "measures": [
                    {
                      "index": 0,
                      "value": 124.67
                    },
                    {
                      "index": 1,
                      "value": 29.8
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 3,
                      "measures": [
                        {
                          "index": 0,
                          "value": 124.67
                        },
                        {
                          "index": 1,
                          "value": 29.8
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 4,
                  "measures": [
                    {
                      "index": 0,
                      "value": 26.65
                    },
                    {
                      "index": 1,
                      "value": 59.96
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 4,
                      "measures": [
                        {
                          "index": 0,
                          "value": 26.65
                        },
                        {
                          "index": 1,
                          "value": 59.96
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 5,
                  "measures": [
                    {
                      "index": 0,
                      "value": 603.5
                    },
                    {
                      "index": 1,
                      "value": 8.17
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 5,
                      "measures": [
                        {
                          "index": 0,
                          "value": 154.75
                        },
                        {
                          "index": 1,
                          "value": -15.18
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 6,
                      "measures": [
                        {
                          "index": 0,
                          "value": 144.21
                        },
                        {
                          "index": 1,
                          "value": 36.61
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 9,
                      "measures": [
                        {
                          "index": 0,
                          "value": 139.54
                        },
                        {
                          "index": 1,
                          "value": 33
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 13,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 15,
                      "measures": [
                        {
                          "index": 0,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 17,
                      "measures": [
                        {
                          "index": 0,
                          "value": 120
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 6,
                  "measures": [
                    {
                      "index": 0,
                      "value": 304.73
                    },
                    {
                      "index": 1,
                      "value": -19.87
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 7,
                      "measures": [
                        {
                          "index": 0,
                          "value": 279.71
                        },
                        {
                          "index": 1,
                          "value": -18.49
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 11,
                      "measures": [
                        {
                          "index": 0,
                          "value": 25.02
                        },
                        {
                          "index": 1,
                          "value": -32.63
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 7,
                  "measures": [
                    {
                      "index": 0,
                      "value": 116.77
                    },
                    {
                      "index": 1,
                      "value": -11.51
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 8,
                      "measures": [
                        {
                          "index": 0,
                          "value": 116.77
                        },
                        {
                          "index": 1,
                          "value": -11.51
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 8,
                  "measures": [
                    {
                      "index": 0,
                      "value": 600
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 10,
                      "measures": [
                        {
                          "index": 0,
                          "value": 600
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 9,
                  "measures": [
                    {
                      "index": 0,
                      "value": 45.86
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 12,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45.86
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 10,
                  "measures": [
                    {
                      "index": 0,
                      "value": 146.37
                    },
                    {
                      "index": 1,
                      "value": 36.99
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 14,
                      "measures": [
                        {
                          "index": 0,
                          "value": 146.37
                        },
                        {
                          "index": 1,
                          "value": 36.99
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 11,
                  "measures": [
                    {
                      "index": 0,
                      "value": 21.37
                    },
                    {
                      "index": 1,
                      "value": 725.1
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 16,
                      "measures": [
                        {
                          "index": 0,
                          "value": 21.37
                        },
                        {
                          "index": 1,
                          "value": 725.1
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 14,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.72
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 21,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.72
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 15,
                  "measures": [
                    {
                      "index": 0,
                      "value": 7.15
                    },
                    {
                      "index": 1,
                      "value": -58.57
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 22,
                      "measures": [
                        {
                          "index": 0,
                          "value": 7.15
                        },
                        {
                          "index": 1,
                          "value": -58.57
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 2,
              "measures": [
                {
                  "index": 0,
                  "value": 195.79
                },
                {
                  "index": 1,
                  "value": 47.83
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 12,
                  "measures": [
                    {
                      "index": 0,
                      "value": 195.79
                    },
                    {
                      "index": 1,
                      "value": 47.83
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 18,
                      "measures": [
                        {
                          "index": 0,
                          "value": 195.79
                        },
                        {
                          "index": 1,
                          "value": 47.83
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 2,
          "measures": [
            {
              "index": 0,
              "value": 15434.08
            },
            {
              "index": 1,
              "value": -4.28
            }
          ]
        },
        {
          "dimension": 1,
          "item": 3,
          "measures": [
            {
              "index": 0,
              "value": 12708.19
            },
            {
              "index": 1,
              "value": -8.65
            }
          ]
        },
        {
          "dimension": 1,
          "item": 4,
          "measures": [
            {
              "index": 0,
              "value": 12512.4
            },
            {
              "index": 1,
              "value": -9.19
            }
          ]
        }
      ]
    },
    {
      "dimension": 0,
      "item": 9,
      "components": [
        {
          "dimension": 1,
          "item": 0,
          "measures": [
            {
              "index": 0,
              "value": 29070.65
            },
            {
              "index": 1,
              "value": 32.33
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 29070.65
                },
                {
                  "index": 1,
                  "value": 32.33
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 0,
                  "measures": [
                    {
                      "index": 0,
                      "value": 29070.65
                    },
                    {
                      "index": 1,
                      "value": 32.33
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 0,
                      "measures": [
                        {
                          "index": 0,
                          "value": 29070.65
                        },
                        {
                          "index": 1,
                          "value": 32.33
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 1,
          "measures": [
            {
              "index": 0,
              "value": 8959.38
            },
            {
              "index": 1,
              "value": -5.26
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 1,
              "measures": [
                {
                  "index": 0,
                  "value": 6392.92
                },
                {
                  "index": 1,
                  "value": -2.17
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 1,
                  "measures": [
                    {
                      "index": 0,
                      "value": 2019.78
                    },
                    {
                      "index": 1,
                      "value": -6.57
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 1,
                      "measures": [
                        {
                          "index": 0,
                          "value": 1916.08
                        },
                        {
                          "index": 1,
                          "value": -3.98
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 20,
                      "measures": [
                        {
                          "index": 0,
                          "value": 103.7
                        },
                        {
                          "index": 1,
                          "value": -37.6
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 13,
                  "measures": [
                    {
                      "index": 0,
                      "value": 4373.14
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 19,
                      "measures": [
                        {
                          "index": 0,
                          "value": 4373.14
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 2452.42
                },
                {
                  "index": 1,
                  "value": -10.03
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 2,
                  "measures": [
                    {
                      "index": 0,
                      "value": 580.25
                    },
                    {
                      "index": 1,
                      "value": -19.76
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 2,
                      "measures": [
                        {
                          "index": 0,
                          "value": 580.25
                        },
                        {
                          "index": 1,
                          "value": -19.76
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 3,
                  "measures": [
                    {
                      "index": 0,
                      "value": 68.31
                    },
                    {
                      "index": 1,
                      "value": -45.21
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 3,
                      "measures": [
                        {
                          "index": 0,
                          "value": 68.31
                        },
                        {
                          "index": 1,
                          "value": -45.21
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 4,
                  "measures": [
                    {
                      "index": 0,
                      "value": 24.9
                    },
                    {
                      "index": 1,
                      "value": -6.57
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 4,
                      "measures": [
                        {
                          "index": 0,
                          "value": 24.9
                        },
                        {
                          "index": 1,
                          "value": -6.57
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 5,
                  "measures": [
                    {
                      "index": 0,
                      "value": 434.19
                    },
                    {
                      "index": 1,
                      "value": -28.05
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 5,
                      "measures": [
                        {
                          "index": 0,
                          "value": 69.71
                        },
                        {
                          "index": 1,
                          "value": -54.95
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 6,
                      "measures": [
                        {
                          "index": 0,
                          "value": 109.91
                        },
                        {
                          "index": 1,
                          "value": -23.78
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 9,
                      "measures": [
                        {
                          "index": 0,
                          "value": 89.57
                        },
                        {
                          "index": 1,
                          "value": -35.81
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 13,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 15,
                      "measures": [
                        {
                          "index": 0,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 17,
                      "measures": [
                        {
                          "index": 0,
                          "value": 120
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 6,
                  "measures": [
                    {
                      "index": 0,
                      "value": 433.39
                    },
                    {
                      "index": 1,
                      "value": 42.22
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 7,
                      "measures": [
                        {
                          "index": 0,
                          "value": 391.12
                        },
                        {
                          "index": 1,
                          "value": 39.83
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 11,
                      "measures": [
                        {
                          "index": 0,
                          "value": 42.27
                        },
                        {
                          "index": 1,
                          "value": 68.94
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 7,
                  "measures": [
                    {
                      "index": 0,
                      "value": 107.45
                    },
                    {
                      "index": 1,
                      "value": -7.98
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 8,
                      "measures": [
                        {
                          "index": 0,
                          "value": 107.45
                        },
                        {
                          "index": 1,
                          "value": -7.98
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 8,
                  "measures": [
                    {
                      "index": 0,
                      "value": 600
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 10,
                      "measures": [
                        {
                          "index": 0,
                          "value": 600
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 9,
                  "measures": [
                    {
                      "index": 0,
                      "value": 45.86
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 12,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45.86
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 10,
                  "measures": [
                    {
                      "index": 0,
                      "value": 129.75
                    },
                    {
                      "index": 1,
                      "value": -11.35
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 14,
                      "measures": [
                        {
                          "index": 0,
                          "value": 129.75
                        },
                        {
                          "index": 1,
                          "value": -11.35
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 11,
                  "measures": [
                    {
                      "index": 0,
                      "value": 16.59
                    },
                    {
                      "index": 1,
                      "value": -22.37
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 16,
                      "measures": [
                        {
                          "index": 0,
                          "value": 16.59
                        },
                        {
                          "index": 1,
                          "value": -22.37
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 14,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.72
                    },
                    {
                      "index": 1,
                      "value": 0
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 21,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.72
                        },
                        {
                          "index": 1,
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 15,
                  "measures": [
                    {
                      "index": 0,
                      "value": 6.01
                    },
                    {
                      "index": 1,
                      "value": -15.94
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 22,
                      "measures": [
                        {
                          "index": 0,
                          "value": 6.01
                        },
                        {
                          "index": 1,
                          "value": -15.94
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 2,
              "measures": [
                {
                  "index": 0,
                  "value": 114.04
                },
                {
                  "index": 1,
                  "value": -41.75
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 12,
                  "measures": [
                    {
                      "index": 0,
                      "value": 114.04
                    },
                    {
                      "index": 1,
                      "value": -41.75
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 18,
                      "measures": [
                        {
                          "index": 0,
                          "value": 114.04
                        },
                        {
                          "index": 1,
                          "value": -41.75
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 2,
          "measures": [
            {
              "index": 0,
              "value": 22677.73
            },
            {
              "index": 1,
              "value": 46.93
            }
          ]
        },
        {
          "dimension": 1,
          "item": 3,
          "measures": [
            {
              "index": 0,
              "value": 20225.31
            },
            {
              "index": 1,
              "value": 59.15
            }
          ]
        },
        {
          "dimension": 1,
          "item": 4,
          "measures": [
            {
              "index": 0,
              "value": 20111.27
            },
            {
              "index": 1,
              "value": 60.73
            }
          ]
        }
      ]
    },
    {
      "dimension": 0,
      "item": 10,
      "components": [
        {
          "dimension": 1,
          "item": 0,
          "measures": [
            {
              "index": 0,
              "value": 33140.3
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 33140.3
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 0,
                  "measures": [
                    {
                      "index": 0,
                      "value": 33140.3
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 0,
                      "measures": [
                        {
                          "index": 0,
                          "value": 33140.3
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 1,
          "measures": [
            {
              "index": 0,
              "value": 7855.51
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 1,
              "measures": [
                {
                  "index": 0,
                  "value": 5513
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 1,
                  "measures": [
                    {
                      "index": 0,
                      "value": 1139.86
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 1,
                      "measures": [
                        {
                          "index": 0,
                          "value": 976.38
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 20,
                      "measures": [
                        {
                          "index": 0,
                          "value": 163.48
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 13,
                  "measures": [
                    {
                      "index": 0,
                      "value": 4373.14
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 19,
                      "measures": [
                        {
                          "index": 0,
                          "value": 4373.14
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 2234.09
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 2,
                  "measures": [
                    {
                      "index": 0,
                      "value": 284.44
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 2,
                      "measures": [
                        {
                          "index": 0,
                          "value": 284.44
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 3,
                  "measures": [
                    {
                      "index": 0,
                      "value": 98.95
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 3,
                      "measures": [
                        {
                          "index": 0,
                          "value": 98.95
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 4,
                  "measures": [
                    {
                      "index": 0,
                      "value": 31.18
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 4,
                      "measures": [
                        {
                          "index": 0,
                          "value": 31.18
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 5,
                  "measures": [
                    {
                      "index": 0,
                      "value": 498.77
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 5,
                      "measures": [
                        {
                          "index": 0,
                          "value": 178
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 6,
                      "measures": [
                        {
                          "index": 0,
                          "value": 83.97
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 9,
                      "measures": [
                        {
                          "index": 0,
                          "value": 71.8
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 13,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 15,
                      "measures": [
                        {
                          "index": 0,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 17,
                      "measures": [
                        {
                          "index": 0,
                          "value": 120
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 6,
                  "measures": [
                    {
                      "index": 0,
                      "value": 414.92
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 7,
                      "measures": [
                        {
                          "index": 0,
                          "value": 384.26
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 11,
                      "measures": [
                        {
                          "index": 0,
                          "value": 30.66
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 7,
                  "measures": [
                    {
                      "index": 0,
                      "value": 111.41
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 8,
                      "measures": [
                        {
                          "index": 0,
                          "value": 111.41
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 8,
                  "measures": [
                    {
                      "index": 0,
                      "value": 600
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 10,
                      "measures": [
                        {
                          "index": 0,
                          "value": 600
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 9,
                  "measures": [
                    {
                      "index": 0,
                      "value": 45.86
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 12,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45.86
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 10,
                  "measures": [
                    {
                      "index": 0,
                      "value": 127.69
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 14,
                      "measures": [
                        {
                          "index": 0,
                          "value": 127.69
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 11,
                  "measures": [
                    {
                      "index": 0,
                      "value": 11.79
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 16,
                      "measures": [
                        {
                          "index": 0,
                          "value": 11.79
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 14,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.72
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 21,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.72
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 15,
                  "measures": [
                    {
                      "index": 0,
                      "value": 3.36
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 22,
                      "measures": [
                        {
                          "index": 0,
                          "value": 3.36
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 2,
              "measures": [
                {
                  "index": 0,
                  "value": 108.42
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 12,
                  "measures": [
                    {
                      "index": 0,
                      "value": 108.42
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 18,
                      "measures": [
                        {
                          "index": 0,
                          "value": 108.42
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 2,
          "measures": [
            {
              "index": 0,
              "value": 27627.3
            },
            {
              "index": 1,
              "value": 21.83
            }
          ]
        },
        {
          "dimension": 1,
          "item": 3,
          "measures": [
            {
              "index": 0,
              "value": 25393.21
            },
            {
              "index": 1,
              "value": 25.55
            }
          ]
        },
        {
          "dimension": 1,
          "item": 4,
          "measures": [
            {
              "index": 0,
              "value": 25284.79
            },
            {
              "index": 1,
              "value": 25.72
            }
          ]
        }
      ]
    },
    {
      "dimension": 0,
      "item": 11,
      "components": [
        {
          "dimension": 1,
          "item": 0,
          "measures": [
            {
              "index": 0,
              "value": 78765.61
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 78765.61
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 0,
                  "measures": [
                    {
                      "index": 0,
                      "value": 78765.61
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 0,
                      "measures": [
                        {
                          "index": 0,
                          "value": 78765.61
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 1,
          "measures": [
            {
              "index": 0,
              "value": 7906.1
            }
          ],
          "components": [
            {
              "dimension": 2,
              "item": 1,
              "measures": [
                {
                  "index": 0,
                  "value": 5506.09
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 1,
                  "measures": [
                    {
                      "index": 0,
                      "value": 1132.95
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 1,
                      "measures": [
                        {
                          "index": 0,
                          "value": 1124.8
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 20,
                      "measures": [
                        {
                          "index": 0,
                          "value": 8.15
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 13,
                  "measures": [
                    {
                      "index": 0,
                      "value": 4373.14
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 19,
                      "measures": [
                        {
                          "index": 0,
                          "value": 4373.14
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 0,
              "measures": [
                {
                  "index": 0,
                  "value": 2291.44
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 2,
                  "measures": [
                    {
                      "index": 0,
                      "value": 370.12
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 2,
                      "measures": [
                        {
                          "index": 0,
                          "value": 370.12
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 3,
                  "measures": [
                    {
                      "index": 0,
                      "value": 113
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 3,
                      "measures": [
                        {
                          "index": 0,
                          "value": 113
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 4,
                  "measures": [
                    {
                      "index": 0,
                      "value": 44.95
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 4,
                      "measures": [
                        {
                          "index": 0,
                          "value": 44.95
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 5,
                  "measures": [
                    {
                      "index": 0,
                      "value": 492.67
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 5,
                      "measures": [
                        {
                          "index": 0,
                          "value": 151.07
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 6,
                      "measures": [
                        {
                          "index": 0,
                          "value": 52.39
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 9,
                      "measures": [
                        {
                          "index": 0,
                          "value": 124.21
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 13,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 15,
                      "measures": [
                        {
                          "index": 0,
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 17,
                      "measures": [
                        {
                          "index": 0,
                          "value": 120
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 6,
                  "measures": [
                    {
                      "index": 0,
                      "value": 335.55
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 7,
                      "measures": [
                        {
                          "index": 0,
                          "value": 313.43
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "item": 11,
                      "measures": [
                        {
                          "index": 0,
                          "value": 22.12
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 7,
                  "measures": [
                    {
                      "index": 0,
                      "value": 140.23
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 8,
                      "measures": [
                        {
                          "index": 0,
                          "value": 140.23
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 8,
                  "measures": [
                    {
                      "index": 0,
                      "value": 600
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 10,
                      "measures": [
                        {
                          "index": 0,
                          "value": 600
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 9,
                  "measures": [
                    {
                      "index": 0,
                      "value": 45.86
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 12,
                      "measures": [
                        {
                          "index": 0,
                          "value": 45.86
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 10,
                  "measures": [
                    {
                      "index": 0,
                      "value": 130.53
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 14,
                      "measures": [
                        {
                          "index": 0,
                          "value": 130.53
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 11,
                  "measures": [
                    {
                      "index": 0,
                      "value": 6.52
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 16,
                      "measures": [
                        {
                          "index": 0,
                          "value": 6.52
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 14,
                  "measures": [
                    {
                      "index": 0,
                      "value": 5.72
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 21,
                      "measures": [
                        {
                          "index": 0,
                          "value": 5.72
                        }
                      ]
                    }
                  ]
                },
                {
                  "dimension": 3,
                  "item": 15,
                  "measures": [
                    {
                      "index": 0,
                      "value": 6.29
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 22,
                      "measures": [
                        {
                          "index": 0,
                          "value": 6.29
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "dimension": 2,
              "item": 2,
              "measures": [
                {
                  "index": 0,
                  "value": 108.57
                }
              ],
              "components": [
                {
                  "dimension": 3,
                  "item": 12,
                  "measures": [
                    {
                      "index": 0,
                      "value": 108.57
                    }
                  ],
                  "components": [
                    {
                      "dimension": 4,
                      "item": 18,
                      "measures": [
                        {
                          "index": 0,
                          "value": 108.57
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "dimension": 1,
          "item": 2,
          "measures": [
            {
              "index": 0,
              "value": 73259.52
            },
            {
              "index": 1,
              "value": 165.17
            }
          ]
        },
        {
          "dimension": 1,
          "item": 3,
          "measures": [
            {
              "index": 0,
              "value": 70968.08
            },
            {
              "index": 1,
              "value": 179.48
            }
          ]
        },
        {
          "dimension": 1,
          "item": 4,
          "measures": [
            {
              "index": 0,
              "value": 70859.51
            },
            {
              "index": 1,
              "value": 180.25
            }
          ]
        }
      ]
    }
  ]
}

export const normalizeAssessData = (data) => ({
  key: data.measures[0].units.toLowerCase(),
  data: data
    .reportData
    .map((dataPoint, i) => {
      const dataObj = {
        name: data.dimensions[0].items[i].start
      }
      dataObj[data.measures[0].units.toLowerCase()] = dataPoint.components[0].measures[0].value
      
      return dataObj
    })
})