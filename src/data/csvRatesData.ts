// Auto-generated rate dictionary from /src/data/carpark_rates.csv
import { Carpark, DayRates } from "../types";

export interface CsvRateRecord {
  carpark: string;
  category: string;
  baseRatePerHour: number;
  dayRates: DayRates;
  rawRates: {
    weekdays1: string;
    weekdays2: string;
    saturday: string;
    sundayHoliday: string;
  };
}

export const CSV_RATES_BY_NAME: Record<string, CsvRateRecord> = {
  "25toapayohlorong8": {
    carpark: "25 Toa Payoh Lorong 8",
    category: "Central, North & North East",
    baseRatePerHour: 2.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 2.6,
                  "unit": "$1.30 / 30 Mins"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 2.6,
                  "unit": "$1.30 / 30 Mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 2.6,
                  "unit": "$1.30 / 30 Mins"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $1.30 / 30 Mins","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "45burghleydrive": {
    carpark: "45 Burghley Drive",
    category: "Central, North & North East",
    baseRatePerHour: 1.08,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.08,
                  "unit": "$0.018 /min"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.08,
                  "unit": "$0.018 /min"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.08,
                  "unit": "$0.018 /min"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 1.08,
                  "unit": "$0.018 /min"
            }
      ]
},
    rawRates: {"weekdays1":"$0.018 /min","weekdays2":"$0.018 /min","saturday":"$0.018 /min","sundayHoliday":"$0.018 /min"}
  },
  "angmokiohub": {
    carpark: "Ang Mo Kio Hub",
    category: "Central, North & North East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Mon-Fri",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.60 for sub. ½ hr or part thereof."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Sat, Sun / Ph",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr; $0.65 for sub. ½ hr or part thereof."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sat, Sun / Ph",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr; $0.65 for sub. ½ hr or part thereof."
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Fri: $1.20 for 1st hr; $0.60 for sub. ½ hr or part thereof.","weekdays2":"-","saturday":"Sat, Sun / Ph: $1.30 for 1st hr; $0.65 for sub. ½ hr or part thereof.","sundayHoliday":"Same as Saturday"}
  },
  "balestierplaza": {
    carpark: "Balestier Plaza",
    category: "Central, North & North East",
    baseRatePerHour: 1.12,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.12,
                  "unit": "$1.12 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.12,
                  "unit": "$1.12 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.12,
                  "unit": "$1.12 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $1.12 per hr","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "balestierpoint": {
    carpark: "Balestier Point",
    category: "Central, North & North East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-10pm",
                  "rate": 1.2,
                  "unit": "$1.20 per hr"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-10pm",
                  "rate": 1.2,
                  "unit": "$1.20 per hr"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-10pm: $1.20 per hr","weekdays2":"Aft 10pm: $2 per entry","saturday":"Same as wkdays","sundayHoliday":"$2 per entry"}
  },
  "brasbasahcomplex": {
    carpark: "Bras Basah Complex",
    category: "Central, North & North East",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2,
                  "unit": "$1 for ½ hr"
            },
            {
                  "timeRange": "5pm-1am",
                  "rate": 1,
                  "unit": "$0.50 for ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2,
                  "unit": "$1 for ½ hr"
            },
            {
                  "timeRange": "5pm-1am",
                  "rate": 1,
                  "unit": "$0.50 for ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-1am",
                  "rate": 1,
                  "unit": "$0.50 for ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1 for ½ hr","weekdays2":"5pm-1am: $0.50 for ½ hr","saturday":"Same as wkdays","sundayHoliday":"7am-1am: $0.50 for ½ hr"}
  },
  "causewaypoint": {
    carpark: "Causeway Point",
    category: "Central, North & North East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-10.30pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.60 for sub.½ hr or part thereof."
            },
            {
                  "timeRange": "7am-10.30pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof."
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-12 midnight",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-12 midnight",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof."
            }
      ]
},
    rawRates: {"weekdays1":"7am-10.30pm: $1.20 for 1st hr or part thereof; $0.60 for sub.½ hr or part thereof.","weekdays2":"7am-10.30pm: $1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof.","saturday":"7am-12 midnight: $1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof.","sundayHoliday":"Same as Saturday"}
  },
  "centralplace": {
    carpark: "Central Place",
    category: "Central, North & North East",
    baseRatePerHour: 1.8,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.8,
                  "unit": "$1.80 for 1st hr; $0.85 for ½ hr"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.8,
                  "unit": "$1.80 for 1st hr; $0.85 for ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.8,
                  "unit": "$1.80 for 1st hr; $0.85 for ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"$1.80 for 1st hr; $0.85 for ½ hr","weekdays2":"$1.80 for 1st hr; $0.85 for ½ hr","saturday":"$1.80 for 1st hr; $0.85 for ½ hr","sundayHoliday":"$2.50 per entry"}
  },
  "citysquaremall": {
    carpark: "City Square Mall",
    category: "Central, North & North East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.60 for sub. 30 mins or part thereof."
            },
            {
                  "timeRange": "6pm-3.30am",
                  "rate": 3,
                  "unit": "$3 per entry."
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.4,
                  "unit": "$1.40 for 1st hr; $0.70 for sub. 30 mins"
            },
            {
                  "timeRange": "6pm-3.30am",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.4,
                  "unit": "$1.40 for 1st hr; $0.70 for sub. 30 mins"
            },
            {
                  "timeRange": "6pm-3.30am",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $1.20 for 1st hr; $0.60 for sub. 30 mins or part thereof.","weekdays2":"6pm-3.30am: $3 per entry.","saturday":"7am-6pm: $1.40 for 1st hr; $0.70 for sub. 30 mins; 6pm-3.30am: $3.50 per entry.","sundayHoliday":"Same as Saturday"}
  },
  "compasspoint": {
    carpark: "Compass Point",
    category: "Central, North & North East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily(7am-11pm)",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily(7am-11pm)",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily(7am-11pm)",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof."
            }
      ]
},
    rawRates: {"weekdays1":"Daily(7am-11pm): $1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof.","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "goldhillplaza": {
    carpark: "Goldhill Plaza",
    category: "Central, North & North East",
    baseRatePerHour: 1.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5.30pm",
                  "rate": 1.6,
                  "unit": "$1.60 for 1st hr; $1 for sub. ½ hr"
            },
            {
                  "timeRange": "5.30pm-12am",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5.30pm",
                  "rate": 1,
                  "unit": "$1 per hr"
            },
            {
                  "timeRange": "Aft 5.30pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5.30pm",
                  "rate": 1,
                  "unit": "$1 per hr"
            },
            {
                  "timeRange": "Aft 5.30pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5.30pm: $1.60 for 1st hr; $1 for sub. ½ hr","weekdays2":"5.30pm-12am: $2 per entry","saturday":"7am-5.30pm: $1 per hr; Aft 5.30pm: $2 per entry","sundayHoliday":"Same as Saturday"}
  },
  "heartlandmall": {
    carpark: "Heartland Mall",
    category: "Central, North & North East",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-10.30pm",
                  "rate": 1,
                  "unit": "$1 per hr"
            },
            {
                  "timeRange": "Aft 10.30pm",
                  "rate": 2,
                  "unit": "$2 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-10.30pm",
                  "rate": 1,
                  "unit": "$1 per hr"
            },
            {
                  "timeRange": "Aft 10.30pm",
                  "rate": 2,
                  "unit": "$2 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-10.30pm",
                  "rate": 1,
                  "unit": "$1 per hr"
            },
            {
                  "timeRange": "Aft 10.30pm",
                  "rate": 2,
                  "unit": "$2 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-10.30pm: $1 per hr","weekdays2":"Aft 10.30pm: $2 per hr","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "hindooroadoffstreet": {
    carpark: "Hindoo Road Off-Street",
    category: "Central, North & North East",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "0700-0700: $0.50 / 30 mins (Per Minute Charging)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "0700-0700: $0.50 / 30 mins (Per Minute Charging)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "0700-0700: $0.50 / 30 mins (Per Minute Charging)"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: 0700-0700: $0.50 / 30 mins (Per Minute Charging)","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "houganggreenshoppingmall": {
    carpark: "Hougang Green Shopping Mall",
    category: "Central, North & North East",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.07,
                  "unit": "$1.07 for 1st hr; $0.55 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 1.2,
                  "unit": "$1.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.07,
                  "unit": "$1.07 for 1st hr; $0.55 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 1.2,
                  "unit": "$1.20 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-12am",
                  "rate": 2.15,
                  "unit": "$2.15 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 1.2,
                  "unit": "$1.20 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.07 for 1st hr; $0.55 for sub. ½ hr","weekdays2":"Aft 5pm: $1.20 per entry","saturday":"Same as wkdays","sundayHoliday":"7am-12am: $2.15 per entry; Aft 12am: $1.20 per entry"}
  },
  "hougangmall": {
    carpark: "Hougang Mall",
    category: "Central, North & North East",
    baseRatePerHour: 1.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "1st hr",
                  "rate": 1.4,
                  "unit": "$1.20;  2nd hr: $0.70 per ½ hr; 3rd hr onwards: $1 per ½ hr"
            },
            {
                  "timeRange": "1st hr",
                  "rate": 1.4,
                  "unit": "$1.20;  2nd hr: $0.70 per ½ hr; 3rd hr onwards: $1 per ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "1st hr",
                  "rate": 1.4,
                  "unit": "$1.30;  2nd hr: $0.70 per ½ hr; 3rd hr onwards: $1 per ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "1st hr",
                  "rate": 1.4,
                  "unit": "$1.30;  2nd hr: $0.70 per ½ hr; 3rd hr onwards: $1 per ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"1st hr: $1.20;  2nd hr: $0.70 per ½ hr; 3rd hr onwards: $1 per ½ hr","weekdays2":"1st hr: $1.20;  2nd hr: $0.70 per ½ hr; 3rd hr onwards: $1 per ½ hr","saturday":"1st hr: $1.30;  2nd hr: $0.70 per ½ hr; 3rd hr onwards: $1 per ½ hr","sundayHoliday":"Same as Saturday"}
  },
  "hougangplaza": {
    carpark: "Hougang Plaza",
    category: "Central, North & North East",
    baseRatePerHour: 0.8,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "5am-5pm",
                  "rate": 0.8,
                  "unit": "$0.40 for ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 1.5,
                  "unit": "$1.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "5am-5pm",
                  "rate": 0.8,
                  "unit": "$0.40 for ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 1.5,
                  "unit": "$1.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 1.5,
                  "unit": "$1.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"5am-5pm: $0.40 for ½ hr","weekdays2":"Aft 5pm: $1.50 per entry","saturday":"Same as wkdays","sundayHoliday":"$1.50 per entry"}
  },
  "junction8shoppingcentre": {
    carpark: "Junction 8 Shopping Centre",
    category: "Central, North & North East",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.07,
                  "unit": "12am-5.59pm - $1.07 for 1st hr; $0.32 for sub. 15 mins"
            },
            {
                  "timeRange": "Mon-Thu",
                  "rate": 2.14,
                  "unit": "6pm-11.59pm: $2.14 per entry; Fri/Eve of PH: 6pm-2.59am: $2.14 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "3am-5.59pm",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2hrs; $0.32 for sub. 15 mins"
            },
            {
                  "timeRange": "6pm-2.59am",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "3am-5.59pm",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2hrs; $0.32 for sub. 15 mins"
            },
            {
                  "timeRange": "6pm-11.59pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"12am-5.59pm - $1.07 for 1st hr; $0.32 for sub. 15 mins","weekdays2":"Mon-Thu: 6pm-11.59pm: $2.14 per entry; Fri/Eve of PH: 6pm-2.59am: $2.14 per entry","saturday":"3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15 mins; 6pm-2.59am: $2.14 per entry","sundayHoliday":"3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15 mins; 6pm-11.59pm: $2.14 per entry"}
  },
  "kampongbugisoffstreet": {
    carpark: "Kampong Bugis Off-Street",
    category: "Central, North & North East",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "0700-0700: $0.50 /30 mins (Per Minute Charging)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "0700-0700: $0.50 /30 mins (Per Minute Charging)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "0700-0700: $0.50 /30 mins (Per Minute Charging)"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: 0700-0700: $0.50 /30 mins (Per Minute Charging)","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "kampongkaporroadoffstreet": {
    carpark: "Kampong Kapor Road Off-Street",
    category: "Central, North & North East",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "0700-0700: $0.50 /30 mins (Per Minute Charging)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "0700-0700: $0.50 /30 mins (Per Minute Charging)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "0700-0700: $0.50 /30 mins (Per Minute Charging)"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: 0700-0700: $0.50 /30 mins (Per Minute Charging)","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "mustafacentre": {
    carpark: "Mustafa Centre",
    category: "Central, North & North East",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 2,
                  "unit": "1st hr: Free; $2 for sub. hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 2,
                  "unit": "1st hr: Free; $2 for sub. hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 2,
                  "unit": "1st hr: Free; $2 for sub. hr"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: 1st hr: Free; $2 for sub. hr","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "nexmall": {
    carpark: "Nex Mall",
    category: "Central, North & North East",
    baseRatePerHour: 1.3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Mon-Fri",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr; $0.65 for sub. ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Sat, Sun / Ph",
                  "rate": 1.4,
                  "unit": "$1.40 for 1st hr; $0.70 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sat, Sun / Ph",
                  "rate": 1.4,
                  "unit": "$1.40 for 1st hr; $0.70 for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Fri: $1.30 for 1st hr; $0.65 for sub. ½ hr","weekdays2":"-","saturday":"Sat, Sun / Ph: $1.40 for 1st hr; $0.70 for sub. ½ hr","sundayHoliday":"Same as Saturday"}
  },
  "northpointshoppingcentre": {
    carpark: "Northpoint Shopping Centre",
    category: "Central, North & North East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.80 for sub. ½ hr or part thereof."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.80 for sub. ½ hr or part thereof."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.80 for sub. ½ hr or part thereof."
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $1.20 for 1st hr or part thereof; $0.80 for sub. ½ hr or part thereof.","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "parliamenthouse": {
    carpark: "Parliament House",
    category: "Central, North & North East",
    baseRatePerHour: 2.26,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8.01am-6pm",
                  "rate": 2.26,
                  "unit": "$1.13 per ½ hr (per min basis)"
            },
            {
                  "timeRange": "6.01pm-8am",
                  "rate": 2.06,
                  "unit": "$2.06 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8.01am-6pm",
                  "rate": 2.26,
                  "unit": "$1.13 per ½ hr (per min basis)"
            },
            {
                  "timeRange": "6.01pm-8am",
                  "rate": 2.06,
                  "unit": "$2.06 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.06,
                  "unit": "$2.06 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8.01am-6pm: $1.13 per ½ hr (per min basis)","weekdays2":"6.01pm-8am: $2.06 per entry","saturday":"Same as wkdays","sundayHoliday":"$2.06 per entry"}
  },
  "ramadahotel": {
    carpark: "Ramada Hotel",
    category: "Central, North & North East",
    baseRatePerHour: 1.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 1.6,
                  "unit": "$1.60 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 1.6,
                  "unit": "$1.60 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 1.6,
                  "unit": "$1.60 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: $1.60 per hr","weekdays2":"Aft 6pm: $2.20 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "rivervalemall": {
    carpark: "Rivervale Mall",
    category: "Central, North & North East",
    baseRatePerHour: 1.28,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.28,
                  "unit": "$1.28 for 1st hr, $0.64 for sub. 30 mins or part thereof."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.28,
                  "unit": "$1.28 for 1st hr, $0.64 for sub. 30 mins or part thereof."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.28,
                  "unit": "$1.28 for 1st hr, $0.64 for sub. 30 mins or part thereof."
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $1.28 for 1st hr, $0.64 for sub. 30 mins or part thereof.","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "sembawangshoppingcentre": {
    carpark: "Sembawang Shopping Centre",
    category: "Central, North & North East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "12am-11.59pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.32 for sub. 15 mins"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.30 for sub. 15 mins"
            }
      ],
      "saturday": [
            {
                  "timeRange": "12am-11.59pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.32 for sub. 15 mins"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.30 for sub. 15 mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "12am-11.59pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.32 for sub. 15 mins"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.30 for sub. 15 mins"
            }
      ]
},
    rawRates: {"weekdays1":"12am-11.59pm: $1.20 for 1st hr; $0.32 for sub. 15 mins","weekdays2":"$1.20 for 1st hr; $0.30 for sub. 15 mins","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "shawplaza": {
    carpark: "Shaw Plaza",
    category: "Central, North & North East",
    baseRatePerHour: 1.04,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.04,
                  "unit": "$1.04 for 1st hr; $0.53 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 1.55,
                  "unit": "$1.55 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.04,
                  "unit": "$1.04 for 1st hr; $0.53 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 1.55,
                  "unit": "$1.55 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.04,
                  "unit": "$1.04 for 1st hr; $0.53 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 1.55,
                  "unit": "$1.55 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1.04 for 1st hr; $0.53 for sub. ½ hr","weekdays2":"Aft 5pm: $1.55 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "shrewsburyroadoffstreet": {
    carpark: "Shrewsbury Road Off-Street",
    category: "Central, North & North East",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily, 0700-0700",
                  "rate": 1,
                  "unit": "$0.50 /30 mins (Per Minute Charging)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily, 0700-0700",
                  "rate": 1,
                  "unit": "$0.50 /30 mins (Per Minute Charging)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily, 0700-0700",
                  "rate": 1,
                  "unit": "$0.50 /30 mins (Per Minute Charging)"
            }
      ]
},
    rawRates: {"weekdays1":"Daily, 0700-0700: $0.50 /30 mins (Per Minute Charging)","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "square2": {
    carpark: "Square 2",
    category: "Central, North & North East",
    baseRatePerHour: 1.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.6,
                  "unit": "$1.60 for 1st hr; $0.80 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.6,
                  "unit": "$1.60 for 1st hr; $0.80 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 0.55,
                  "unit": "$2.20 for 1st 4hrs; $1.10 for sub. ½ hr; Aft 6pm: $2.20 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $1.60 for 1st hr; $0.80 for sub. ½ hr","weekdays2":"Aft 6pm: $2.20 per entry","saturday":"Same as wkdays","sundayHoliday":"$2.20 for 1st 4hrs; $1.10 for sub. ½ hr; Aft 6pm: $2.20 per entry"}
  },
  "sunplaza": {
    carpark: "Sun Plaza",
    category: "Central, North & North East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.65 for sub. ½ hr"
            },
            {
                  "timeRange": "5pm-11pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            },
            {
                  "timeRange": "Aft 11pm",
                  "rate": 3.3,
                  "unit": "$3.30 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.65 for sub. ½ hr"
            },
            {
                  "timeRange": "5pm-11pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            },
            {
                  "timeRange": "Aft 11pm",
                  "rate": 3.3,
                  "unit": "$3.30 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.65 for sub. ½ hr"
            },
            {
                  "timeRange": "5pm-11pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            },
            {
                  "timeRange": "Aft 11pm",
                  "rate": 3.3,
                  "unit": "$3.30 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.20 for 1st hr; $0.65 for sub. ½ hr","weekdays2":"5pm-11pm: $2.20 per entry; Aft 11pm: $3.30 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "theverge": {
    carpark: "The Verge",
    category: "Central, North & North East",
    baseRatePerHour: 1.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.6,
                  "unit": "$1.60 per hr"
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 1.3,
                  "unit": "$1.30 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.6,
                  "unit": "$1.60 per hr"
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 1.3,
                  "unit": "$1.30 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-12am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 2,
                  "unit": "$2 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.60 per hr","weekdays2":"5pm-12am: $2.50 per entry; Aft 12am: $1.30 per hr","saturday":"Same as wkdays","sundayHoliday":"7am-12am: $2.50 per entry; Aft 12am: $2 per hr"}
  },
  "thomsonplaza": {
    carpark: "Thomson Plaza",
    category: "Central, North & North East",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-12am",
                  "rate": 1,
                  "unit": "$1 for 1st hr; $0.60 for sub. ½ hr"
            },
            {
                  "timeRange": "7am-12am",
                  "rate": 1,
                  "unit": "$1 for 1st hr; $0.60 for sub. ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-11am & 4pm-12am",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.70 for sub. ½ hr; 11am-4pm: $1.20 for 1st hr; $1 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-11am & 4pm-12am",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.70 for sub. ½ hr; 11am-4pm: $1.20 for 1st hr; $1 for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-12am: $1 for 1st hr; $0.60 for sub. ½ hr","weekdays2":"7am-12am: $1 for 1st hr; $0.60 for sub. ½ hr","saturday":"7am-11am & 4pm-12am: $1.20 for 1st hr; $0.70 for sub. ½ hr; 11am-4pm: $1.20 for 1st hr; $1 for sub. ½ hr","sundayHoliday":"Same as Saturday"}
  },
  "toapayohhdbhub": {
    carpark: "Toa Payoh HDB Hub",
    category: "Central, North & North East",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1,
                  "unit": "$0.50 per ½ hr"
            },
            {
                  "timeRange": "6pm-1am",
                  "rate": 1,
                  "unit": "$1 per entry"
            },
            {
                  "timeRange": "Aft 10.30pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1,
                  "unit": "$0.50 per ½ hr"
            },
            {
                  "timeRange": "6pm-1am",
                  "rate": 1,
                  "unit": "$1 per entry"
            },
            {
                  "timeRange": "Aft 10.30pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-1am",
                  "rate": 1,
                  "unit": "$1 per entry"
            },
            {
                  "timeRange": "Aft 10.30pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $0.50 per ½ hr","weekdays2":"6pm-1am: $1 per entry; Aft 10.30pm: $2 per entry","saturday":"Same as wkdays","sundayHoliday":"7am-1am: $1 per entry; Aft 10.30pm: $2 per entry"}
  },
  "unitedsquareshoppingmall": {
    carpark: "United Square Shopping Mall",
    category: "Central, North & North East",
    baseRatePerHour: 2.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7pm-6pm",
                  "rate": 2.2,
                  "unit": "$2.20 for 1st hr; $1.10 for sub. hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7pm-6pm: $2.20 for 1st hr; $1.10 for sub. hr","weekdays2":"Aft 6pm: $2 per entry","saturday":"7am-6pm: $2.20 for 1st 2hrs; $1.10 for sub. hr; Aft 6pm: $2 per entry","sundayHoliday":"Same as Saturday"}
  },
  "velocitynovenasquare": {
    carpark: "Velocity @ Novena Square",
    category: "Central, North & North East",
    baseRatePerHour: 1.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 1.6,
                  "unit": "$1.60 for 1st hr; $0.80 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 1.6,
                  "unit": "$1.60 for 1st hr; $0.80 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 1.6,
                  "unit": "$1.60 for 1st hr; $0.80 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: $1.60 for 1st hr; $0.80 for sub. ½ hr","weekdays2":"Aft 6pm: $2.20 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "yishunysone": {
    carpark: "Yishun YS-ONE",
    category: "Central, North & North East",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "0700-2230",
                  "rate": 1,
                  "unit": "$0.0167 /min"
            },
            {
                  "timeRange": "2230-0700",
                  "rate": 1,
                  "unit": "$0.0167 /min ;(Capped at $4.00)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "0700-2230",
                  "rate": 1,
                  "unit": "$0.0167 /min"
            },
            {
                  "timeRange": "2230-0700",
                  "rate": 1,
                  "unit": "$0.0167 /min ;(Capped at $4.00)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "0700-2230",
                  "rate": 1,
                  "unit": "Free Parking, 2230-0700: $0.0167/min (Capped at $4.00)"
            }
      ]
},
    rawRates: {"weekdays1":"0700-2230: $0.0167 /min","weekdays2":"2230-0700: $0.0167 /min ;(Capped at $4.00)","saturday":"Same as wkdays","sundayHoliday":"0700-2230: Free Parking, 2230-0700: $0.0167/min (Capped at $4.00)"}
  },
  "112katong": {
    carpark: "112 Katong",
    category: "East",
    baseRatePerHour: 0.54,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-9.59am",
                  "rate": 0.54,
                  "unit": "$0.54 for 1st hr; $0.16 for sub. 15mins"
            },
            {
                  "timeRange": "10am-5.59pm",
                  "rate": 1.07,
                  "unit": "$1.07 for 1st hr; $0.27 for sub. 15mins"
            },
            {
                  "timeRange": "6pm-8.59pm",
                  "rate": 1.28,
                  "unit": "$1.28 for 1st 30mins; $0.65 for sub. 15mins"
            },
            {
                  "timeRange": "9pm-5.59am",
                  "rate": 0.54,
                  "unit": "$0.54 for 1st hr; $0.16 for sub. 15mins"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-9.59am",
                  "rate": 0.54,
                  "unit": "$0.54 for 1st hr; $0.16 for sub. 15mins"
            },
            {
                  "timeRange": "10am-8.59pm",
                  "rate": 1.28,
                  "unit": "$1.28 for 1st 30mins; $0.65 for sub. 15mins"
            },
            {
                  "timeRange": "9pm-5.59am",
                  "rate": 0.54,
                  "unit": "$0.54 for 1st hr; $0.16 for sub. 15mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-9.59am",
                  "rate": 0.54,
                  "unit": "$0.54 for 1st hr; $0.16 for sub. 15mins"
            },
            {
                  "timeRange": "10am-8.59pm",
                  "rate": 1.28,
                  "unit": "$1.28 for 1st 30mins; $0.65 for sub. 15mins"
            },
            {
                  "timeRange": "9pm-5.59am",
                  "rate": 0.54,
                  "unit": "$0.54 for 1st hr; $0.16 for sub. 15mins"
            }
      ]
},
    rawRates: {"weekdays1":"6am-9.59am: $0.54 for 1st hr; $0.16 for sub. 15mins. 10am-5.59pm: $1.07 for 1st hr; $0.27 for sub. 15mins.","weekdays2":"6pm-8.59pm:$1.28 for 1st 30mins; $0.65 for sub. 15mins. 9pm-5.59am: $0.54 for 1st hr; $0.16 for sub. 15mins.","saturday":"6am-9.59am: $0.54 for 1st hr; $0.16 for sub. 15mins. 10am-8.59pm: $1.28 for 1st 30mins; $0.65 for sub. 15mins. 9pm-5.59am: $0.54 for 1st hr; $0.16 for sub. 15mins.","sundayHoliday":"Same as Saturday"}
  },
  "bedokmall": {
    carpark: "Bedok Mall",
    category: "East",
    baseRatePerHour: 1.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.5,
                  "unit": "12-11.59pm: $1.50 for 1st hr, $0.40 for sub. 15 mins"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.5,
                  "unit": "12-11.59pm: $1.50 for 1st hr, $0.40 for sub. 15 mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.5,
                  "unit": "12-11.59pm: $1.50 for 1st hr, $0.40 for sub. 15 mins"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: 12-11.59pm: $1.50 for 1st hr, $0.40 for sub. 15 mins","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "bedokpoint": {
    carpark: "Bedok Point",
    category: "East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof."
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof."
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof."
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof."
            }
      ]
},
    rawRates: {"weekdays1":"$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof.","weekdays2":"$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof.","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "centurysquare": {
    carpark: "Century Square",
    category: "East",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "3.01am-6pm",
                  "rate": 1.07,
                  "unit": "S$1.07 for 1st hr and S$0.32 every 15 mins or part thereof."
            },
            {
                  "timeRange": "6.01am-3am",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "3.01am-6pm",
                  "rate": 0.32,
                  "unit": "S$0.32 every 15 mins or part thereof"
            },
            {
                  "timeRange": "6.01am-3am",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "3.01am-6pm",
                  "rate": 0.32,
                  "unit": "S$0.32 every 15 mins or part thereof"
            },
            {
                  "timeRange": "6.01am-3am",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"3.01am-6pm: S$1.07 for 1st hr and S$0.32 every 15 mins or part thereof.","weekdays2":"6.01am-3am: $2.14 per entry","saturday":"3.01am-6pm:S$0.32 every 15 mins or part thereof; 6.01am-3am:$2.14 per entry.","sundayHoliday":"Same as Saturday"}
  },
  "changiairportsouthcarparkbetweent2andjetquay": {
    carpark: "Changi Airport - South Car Park (between T2 and JetQuay)",
    category: "East",
    baseRatePerHour: 2.1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 2.1,
                  "unit": "$0.035 per min. Capped at $35 per 24hrs. (Limited parking spaces and on a first-come, first-served basis)"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 2.1,
                  "unit": "$0.035 per min. Capped at $35 per 24hrs."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 2.1,
                  "unit": "$0.035 per min. Capped at $35 per 24hrs."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 2.1,
                  "unit": "$0.035 per min. Capped at $35 per 24hrs."
            }
      ]
},
    rawRates: {"weekdays1":"$0.035 per min. Capped at $35 per 24hrs. (Limited parking spaces and on a first-come, first-served basis)","weekdays2":"$0.035 per min. Capped at $35 per 24hrs.","saturday":"$0.035 per min. Capped at $35 per 24hrs.","sundayHoliday":"Same as Saturday"}
  },
  "changiairportt1t2t3": {
    carpark: "Changi Airport - T1, T2, T3",
    category: "East",
    baseRatePerHour: 2.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 2.4,
                  "unit": "$0.04 per min      *Based on the per-minute rate of S$0.04, 24 hours of parking will be S$57.60."
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 2.4,
                  "unit": "$0.04 per min"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 2.4,
                  "unit": "$0.04 per min"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 2.4,
                  "unit": "$0.04 per min"
            }
      ]
},
    rawRates: {"weekdays1":"$0.04 per min      *Based on the per-minute rate of S$0.04, 24 hours of parking will be S$57.60.","weekdays2":"$0.04 per min","saturday":"$0.04 per min","sundayHoliday":"Same as Saturday"}
  },
  "changicitypoint": {
    carpark: "Changi City Point",
    category: "East",
    baseRatePerHour: 1.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7.01am-6pm",
                  "rate": 1.4,
                  "unit": "$0.70 per ½ hr or part thereof."
            },
            {
                  "timeRange": "6.01pm-7am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7.01am-5pm",
                  "rate": 1.25,
                  "unit": "$2.50 for 1st 2hrs or part thereof; $1.20 for sub. ½ hr or part thereof"
            },
            {
                  "timeRange": "5.01pm-7am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7.01am-5pm",
                  "rate": 1.25,
                  "unit": "$2.50 for 1st 2hrs or part thereof; $1.20 for sub. ½ hr or part thereof"
            },
            {
                  "timeRange": "5.01pm-7am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7.01am-6pm: $0.70 per ½ hr or part thereof.","weekdays2":"6.01pm-7am: $2.50 per entry","saturday":"7.01am-5pm: $2.50 for 1st 2hrs or part thereof; $1.20 for sub. ½ hr or part thereof. 5.01pm-7am: $2.50 per entry","sundayHoliday":"Same as Saturday"}
  },
  "changivillagehotel": {
    carpark: "Changi Village Hotel",
    category: "East",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 for sub. hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 for sub. hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 for sub. hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $2 for 1st hr; $1.50 for sub. hr","weekdays2":"Aft 6pm: $5.35 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "cityplaza": {
    carpark: "City Plaza",
    category: "East",
    baseRatePerHour: 1.1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.1,
                  "unit": "$1.10 for 1st hr; $0.70 for sub. ½ hr"
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 1.2,
                  "unit": "$1.20 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 2.4,
                  "unit": "$2.40 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.1,
                  "unit": "$1.10 for 1st hr; $0.70 for sub. ½ hr"
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 1.2,
                  "unit": "$1.20 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 2.4,
                  "unit": "$2.40 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-12am",
                  "rate": 1.2,
                  "unit": "$1.20 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 2.4,
                  "unit": "$2.40 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1.10 for 1st hr; $0.70 for sub. ½ hr","weekdays2":"5pm-12am: $1.20 per entry; Aft 12am: $2.40 per entry","saturday":"Same as wkdays","sundayHoliday":"7am-12am: $1.20 per entry; Aft 12am: $2.40 per entry"}
  },
  "dresort": {
    carpark: "D'Resort",
    category: "East",
    baseRatePerHour: 1.44,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.44,
                  "unit": "Mon-Thu (excluding PH, Eve of PH & School Holiday) $0.024 per min; Max/day: $15 (Valid up to 12 midnight and not applicable for multiple entries)."
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.44,
                  "unit": "Mon-Thu (excluding PH, Eve of PH & School Holiday) $0.024 per min; Max/day: $15 (Valid up to 12 midnight and not applicable for multiple entries)."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.44,
                  "unit": "Fri-Sat (Including PH, Eve of PH & School Holiday) $0.024 per min; 5pm-12am: $5 per entry. Max/day: $19."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.44,
                  "unit": "Fri-Sat (Including PH, Eve of PH & School Holiday) $0.024 per min; 5pm-12am: $5 per entry. Max/day: $19."
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Thu (excluding PH, Eve of PH & School Holiday) $0.024 per min; Max/day: $15 (Valid up to 12 midnight and not applicable for multiple entries).","weekdays2":"Mon-Thu (excluding PH, Eve of PH & School Holiday) $0.024 per min; Max/day: $15 (Valid up to 12 midnight and not applicable for multiple entries).","saturday":"Fri-Sat (Including PH, Eve of PH & School Holiday) $0.024 per min; 5pm-12am: $5 per entry. Max/day: $19.","sundayHoliday":"Same as Saturday"}
  },
  "downtowneast": {
    carpark: "Downtown East",
    category: "East",
    baseRatePerHour: 1.44,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.44,
                  "unit": "Mon-Thu (excluding PH, Eve of PH & School Holiday) $0.024 per min; Max/day: $12.50 (Valid up to 12 midnight and not applicable for multiple entries)."
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 2.4,
                  "unit": "Mon-Thu (excluding PH, Eve of PH & School Holiday) 5pm-12am: $2.40 per entry. Max/day:$12.50; Fri: $3.40 per entry."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.44,
                  "unit": "Fri-Sat (Including PH, Eve of PH & School Holiday) $0.024 per min; 5pm-12am: $3.40 per entry. Max/day: $16."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.44,
                  "unit": "Fri-Sat (Including PH, Eve of PH & School Holiday) $0.024 per min; 5pm-12am: $3.40 per entry. Max/day: $16."
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Thu (excluding PH, Eve of PH & School Holiday) $0.024 per min; Max/day: $12.50 (Valid up to 12 midnight and not applicable for multiple entries).","weekdays2":"Mon-Thu (excluding PH, Eve of PH & School Holiday) 5pm-12am: $2.40 per entry. Max/day:$12.50; Fri: $3.40 per entry.","saturday":"Fri-Sat (Including PH, Eve of PH & School Holiday) $0.024 per min; 5pm-12am: $3.40 per entry. Max/day: $16.","sundayHoliday":"Same as Saturday"}
  },
  "eastcoastparke1e2e3offstreet": {
    carpark: "East Coast Park E1/E2/E3 Off-Street",
    category: "East",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "0700-0700: $0.50 /30 Mins (Per Minute Charging)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "0700-0700: $0.50 /30 Mins (Per Minute Charging)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "0700-0700: $0.50 /30 Mins (Per Minute Charging)"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: 0700-0700: $0.50 /30 Mins (Per Minute Charging)","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "eastpointmall": {
    carpark: "Eastpoint Mall",
    category: "East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof, $0.30 for sub. 15 mins or part thereof."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof, $0.30 for sub. 15 mins or part thereof."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr or part thereof, $0.30 for sub. 15 mins or part thereof."
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $1.20 for 1st hr or part thereof, $0.30 for sub. 15 mins or part thereof.","weekdays2":"-","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "grandmecureroxyhotel": {
    carpark: "Grand Mecure Roxy Hotel",
    category: "East",
    baseRatePerHour: 1.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.6,
                  "unit": "$1.60 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.6,
                  "unit": "$1.60 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.6,
                  "unit": "$1.60 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $1.60 per hr","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "ikeatampines": {
    carpark: "IKEA (Tampines)",
    category: "East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily free",
                  "rate": 1.2,
                  "unit": "7am-11pm"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily free",
                  "rate": 1.2,
                  "unit": "7am-11pm"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily free",
                  "rate": 1.2,
                  "unit": "7am-11pm"
            }
      ]
},
    rawRates: {"weekdays1":"Daily free: 7am-11pm","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "katongshoppingcentre": {
    carpark: "Katong Shopping Centre",
    category: "East",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1,
                  "unit": "$1 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1,
                  "unit": "$1 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $1 per hr","weekdays2":"Aft 6pm: $2 per entry","saturday":"Same as wkdays","sundayHoliday":"$2 per entry"}
  },
  "katongvillage": {
    carpark: "Katong Village",
    category: "East",
    baseRatePerHour: 2.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $2.20 per hr","weekdays2":"Aft 6pm: $6 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "lifelonglearninginstitute": {
    carpark: "Lifelong Learning Institute",
    category: "East",
    baseRatePerHour: 1.8,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-5",
                  "rate": 1.8,
                  "unit": "59pm: $0.90 per ½ hr. Full Day Parking-6am-11:59pm: $16."
            },
            {
                  "timeRange": "6pm-11.59pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            },
            {
                  "timeRange": "12am-5.59am",
                  "rate": 12,
                  "unit": "$12 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-5",
                  "rate": 1.8,
                  "unit": "59pm: $0.90 per ½ hr. Full Day Parking-6am-11:59pm: $16."
            },
            {
                  "timeRange": "6pm-11.59pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            },
            {
                  "timeRange": "12am-5.59am",
                  "rate": 12,
                  "unit": "$12 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-11",
                  "rate": 3.21,
                  "unit": "59pm: $3.21 per entry"
            },
            {
                  "timeRange": "12am-5.59am",
                  "rate": 12,
                  "unit": "$12 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-5:59pm: $0.90 per ½ hr. Full Day Parking-6am-11:59pm: $16.","weekdays2":"6pm-11.59pm: $3.21 per entry; 12am-5.59am: $12 per entry","saturday":"Same as wkdays","sundayHoliday":"6am-11:59pm: $3.21 per entry; 12am-5.59am: $12 per entry"}
  },
  "paramounthotel": {
    carpark: "Paramount Hotel",
    category: "East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.2,
                  "unit": "$0.60 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.2,
                  "unit": "$0.60 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $0.60 per ½ hr","weekdays2":"Aft 5pm: $2.50 per entry","saturday":"Same as wkdays","sundayHoliday":"$2.50 per entry"}
  },
  "parkwayparade": {
    carpark: "Parkway Parade",
    category: "East",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 1,
                  "unit": "$1 for 1st hr;  $0.40 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-2am",
                  "rate": 1.5,
                  "unit": "$1.50 per entry"
            },
            {
                  "timeRange": "Aft 2am",
                  "rate": 20,
                  "unit": "$20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-10am",
                  "rate": 0.5,
                  "unit": "$0.50 for 1st hr; $0.40 for sub.15 mins"
            },
            {
                  "timeRange": "10am-6pm",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr; $0.40 for sub. 15 mins"
            },
            {
                  "timeRange": "6pm-2am",
                  "rate": 2.1,
                  "unit": "$2.10 per entry"
            },
            {
                  "timeRange": "Aft 2am",
                  "rate": 20,
                  "unit": "$20 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-10am",
                  "rate": 0.5,
                  "unit": "$0.50 for 1st hr; $0.40 for sub.15 mins"
            },
            {
                  "timeRange": "10am-6pm",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr; $0.40 for sub. 15 mins"
            },
            {
                  "timeRange": "6pm-2am",
                  "rate": 2.1,
                  "unit": "$2.10 per entry"
            },
            {
                  "timeRange": "Aft 2am",
                  "rate": 20,
                  "unit": "$20 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: $1 for 1st hr;  $0.40 for sub. ½ hr","weekdays2":"6pm-2am: $1.50 per entry; Aft 2am: $20 per entry","saturday":"6am-10am: $0.50 for 1st hr; $0.40 for sub.15 mins; 10am-6pm: $1.30 for 1st hr; $0.40 for sub. 15 mins; 6pm-2am: $2.10 per entry. Aft 2am: $20 per entry","sundayHoliday":"Same as Saturday"}
  },
  "roxysquare": {
    carpark: "Roxy Square",
    category: "East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $1.40 for sub. hr"
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $1.40 for sub. hr"
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $1.40 for sub. hr"
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $1.20 for 1st hr; $1.40 for sub. hr","weekdays2":"5pm-12am: $2.50 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "singaporeexpo": {
    carpark: "Singapore Expo",
    category: "East",
    baseRatePerHour: 1.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.6,
                  "unit": "$3.20 for 1st 2hrs; $1.50 for sub. ½ hr (Maximum Daily Charge:$20)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.6,
                  "unit": "$3.20 for 1st 2hrs; $1.50 for sub. ½ hr (Maximum Daily Charge:$20)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.6,
                  "unit": "$3.20 for 1st 2hrs; $1.50 for sub. ½ hr (Maximum Daily Charge:$20)"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $3.20 for 1st 2hrs; $1.50 for sub. ½ hr (Maximum Daily Charge:$20)","weekdays2":"-","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "singaporepostcentre": {
    carpark: "Singapore Post Centre",
    category: "East",
    baseRatePerHour: 1.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.6,
                  "unit": "$1.60 for 1st hr, $1.00 for next sub  ½ hr"
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 3,
                  "unit": "$3/entry"
            },
            {
                  "timeRange": "12am-7am",
                  "rate": 1.6,
                  "unit": "$1.60 for 1st hr, $1.00 for next sub ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-1pm",
                  "rate": 1.6,
                  "unit": "$1.60 for 1st hr, $1 for next sub  ½ hr"
            },
            {
                  "timeRange": "1pm-12am",
                  "rate": 1.6,
                  "unit": "$3 per entry; 12am-7am $1.60 for 1st hr, $1.00 for next sub ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-12am",
                  "rate": 1.6,
                  "unit": "$3 per entry; 12am-7am $1.60 for 1st hr, $1.00 for next sub ½ hr ."
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.60 for 1st hr, $1.00 for next sub  ½ hr","weekdays2":"5pm-12am: $3/entry. 12am-7am: $1.60 for 1st hr, $1.00 for next sub ½ hr.","saturday":"7am-1pm: $1.60 for 1st hr, $1 for next sub  ½ hr. 1pm-12am: $3 per entry; 12am-7am $1.60 for 1st hr, $1.00 for next sub ½ hr.","sundayHoliday":"7am-12am: $3 per entry; 12am-7am $1.60 for 1st hr, $1.00 for next sub ½ hr ."}
  },
  "tampines1": {
    carpark: "Tampines 1",
    category: "East",
    baseRatePerHour: 1.1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.1,
                  "unit": "1st hr $1.07; 2nd hr $0.55 per ½ hr; Aft 2hrs: $0.35 per 15 mins"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.1,
                  "unit": "1st hr $1.07; 2nd hr $0.55 per ½ hr; Aft 2hrs: $0.35 per 15 mins"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.2,
                  "unit": "1st hr $1.28; 2nd hr $0.60 per ½ hr; Aft 2hrs: $0.45 per 15 mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.2,
                  "unit": "1st hr $1.28; 2nd hr $0.60 per ½ hr; Aft 2hrs: $0.45 per 15 mins"
            }
      ]
},
    rawRates: {"weekdays1":"1st hr $1.07; 2nd hr $0.55 per ½ hr; Aft 2hrs: $0.35 per 15 mins","weekdays2":"1st hr $1.07; 2nd hr $0.55 per ½ hr; Aft 2hrs: $0.35 per 15 mins","saturday":"1st hr $1.28; 2nd hr $0.60 per ½ hr; Aft 2hrs: $0.45 per 15 mins","sundayHoliday":"Same as Saturday"}
  },
  "tampinesjunction": {
    carpark: "Tampines Junction",
    category: "East",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1,
                  "unit": "$1 for 1st hr; $0.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1,
                  "unit": "$1 for 1st hr; $0.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1,
                  "unit": "$1 for 1st hr; $0.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1 for 1st hr; $0.50 for sub. ½ hr","weekdays2":"Aft 5pm: $2 per entry","saturday":"Charges same as wkdays, but closed after 2pm","sundayHoliday":"Closed"}
  },
  "tampinesmall": {
    carpark: "Tampines Mall",
    category: "East",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "12am-5",
                  "rate": 1.07,
                  "unit": "59pm: $1.07 for 1st hr; $0.32 for sub. 15mins"
            },
            {
                  "timeRange": "Mon-Thu",
                  "rate": 2.14,
                  "unit": "6pm-11.59pm: $2.14 per entry; Fri & Eve of PH: 6pm-2.59am: $2.14 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "3am-5.59pm",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2hrs; $0.32 for sub. 15mins"
            },
            {
                  "timeRange": "6pm-2.59am",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "3am-5.59pm",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2hrs; $0.32 for sub. 15mins"
            },
            {
                  "timeRange": "6pm-11.59am",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"12am-5:59pm: $1.07 for 1st hr; $0.32 for sub. 15mins","weekdays2":"Mon-Thu: 6pm-11.59pm: $2.14 per entry; Fri & Eve of PH: 6pm-2.59am: $2.14 per entry","saturday":"3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15mins; 6pm-2.59am: $2.14 per entry","sundayHoliday":"3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15mins; 6pm-11.59am: $2.14 per entry"}
  },
  "tampinesplazacompaqcentre": {
    carpark: "Tampines Plaza (Compaq Centre)",
    category: "East",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2,
                  "unit": "$1 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2,
                  "unit": "$1 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1 per ½ hr","weekdays2":"Aft 5pm: $2 per entry","saturday":"Same as wkdays","sundayHoliday":"$2 per entry"}
  },
  "telepark": {
    carpark: "Telepark",
    category: "East",
    baseRatePerHour: 1.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.4,
                  "unit": "7am-10pm: $0.70 per ½ hr (An additional surcharge of $22 per exit after 10pm)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.4,
                  "unit": "7am-10pm: $0.70 per ½ hr (An additional surcharge of $22 per exit after 10pm)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.4,
                  "unit": "7am-10pm: $0.70 per ½ hr (An additional surcharge of $22 per exit after 10pm)"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: 7am-10pm: $0.70 per ½ hr (An additional surcharge of $22 per exit after 10pm)","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "whitesandsshoppingcentre": {
    carpark: "White Sands Shopping Centre",
    category: "East",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 1.2,
                  "unit": "$1.20 per hr for 1st 2hrs; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 1.2,
                  "unit": "$1.20 per hr for 1st 2hrs; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 1.2,
                  "unit": "$1.20 per hr for 1st 2hrs; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-7pm: $1.20 per hr for 1st 2hrs; $1.20 for sub. ½ hr","weekdays2":"Aft 7pm: $2 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "amarahotel": {
    carpark: "Amara Hotel",
    category: "Hotels",
    baseRatePerHour: 4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-4.59pm",
                  "rate": 4,
                  "unit": "$2 per ½ hr"
            },
            {
                  "timeRange": "5pm-7.59am (the following day)",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-4.59pm",
                  "rate": 4,
                  "unit": "$2 per ½ hr"
            },
            {
                  "timeRange": "5pm-7.59am (the following day)",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-4.59pm: $2 per ½ hr","weekdays2":"5pm-7.59am (the following day) : $3 per entry","saturday":"Same as wkdays","sundayHoliday":"$3 per entry"}
  },
  "berjayahotel": {
    carpark: "Berjaya Hotel",
    category: "Hotels",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8.30am-5pm",
                  "rate": 2,
                  "unit": "$1 per ½ hr"
            },
            {
                  "timeRange": "5pm-10pm",
                  "rate": 1,
                  "unit": "$1 per hr"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 0,
                  "unit": "Free"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8.30am-5pm",
                  "rate": 2,
                  "unit": "$1 per ½ hr"
            },
            {
                  "timeRange": "5pm-10pm",
                  "rate": 1,
                  "unit": "$1 per hr"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 0,
                  "unit": "Free"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8.30am-10pm",
                  "rate": 1,
                  "unit": "$1 per hr"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 0,
                  "unit": "Free"
            }
      ]
},
    rawRates: {"weekdays1":"8.30am-5pm: $1 per ½ hr","weekdays2":"5pm-10pm: $1 per hr; Aft 10pm: Free","saturday":"Same as wkdays","sundayHoliday":"8.30am-10pm: $1 per hr. Aft 10pm: Free"}
  },
  "carltonhotel": {
    carpark: "Carlton Hotel",
    category: "Hotels",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $3 for 1st hr; $1.50 for for sub. ½ hr","weekdays2":"Aft 6pm: $6 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "concordehotel": {
    carpark: "Concorde Hotel",
    category: "Hotels",
    baseRatePerHour: 2.14,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2.14,
                  "unit": "$2.14 for 1st hr; $1.39 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.75,
                  "unit": "$3.75 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2.14,
                  "unit": "$2.14 for 1st hr; $1.39 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.75,
                  "unit": "$3.75 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.75,
                  "unit": "$3.75 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $2.14 for 1st hr; $1.39 for sub. ½ hr","weekdays2":"Aft 6pm: $3.75 per entry","saturday":"Same as wkdays","sundayHoliday":"$3.75 per entry"}
  },
  "conradcentennialhotel": {
    carpark: "Conrad Centennial Hotel",
    category: "Hotels",
    baseRatePerHour: 3.3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3.3,
                  "unit": "$3.30 for 1st hr; $1.10 for sub.½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $3.30 for 1st hr; $1.10 for sub.½ hr","weekdays2":"Aft 6pm: $2.20 per entry","saturday":"$2.20 for 1st 2hrs; $1.10 for sub. hr","sundayHoliday":"Same as Saturday"}
  },
  "copthornekingshotel": {
    carpark: "Copthorne King's Hotel",
    category: "Hotels",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-12am",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub ½ hr"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $2 for sub ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-12am",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub ½ hr"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $2 for sub ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-12am",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub ½ hr"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $2 for sub ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-12am: $3 for 1st hr; $1.50 for sub ½ hr","weekdays2":"Aft 12am: $4 for 1st hr; $2 for sub ½ hr","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "copthorneorchidhotel": {
    carpark: "Copthorne Orchid Hotel",
    category: "Hotels",
    baseRatePerHour: 1.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $1 for sub. hr, per day $20)"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $1 for sub. hr, per day $20)"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $1 for sub. hr, per day $20)"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1.50 for 1st hr; $1 for sub. hr, per day $20)","weekdays2":"Aft 5pm: $3 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "elizabethhotel": {
    carpark: "Elizabeth Hotel",
    category: "Hotels",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $3 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"Aft 5pm: $4 per entry","saturday":"$4 per entry","sundayHoliday":"Same as Saturday"}
  },
  "fourseasonshotel": {
    carpark: "Four Seasons Hotel",
    category: "Hotels",
    baseRatePerHour: 6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 6,
                  "unit": "$6 for 1st hr; $3 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 6,
                  "unit": "$6 for 1st hr; $3 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 6,
                  "unit": "$6 for 1st hr; $3 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-5pm: $6 for 1st hr; $3 for sub. ½ hr","weekdays2":"Aft 5pm: $6 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "furamacitycentresingapore": {
    carpark: "Furama City Centre Singapore",
    category: "Hotels",
    baseRatePerHour: 1.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "5am-5pm",
                  "rate": 1.4,
                  "unit": "$1.40 for 1st ½ hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "5am-5pm",
                  "rate": 1.4,
                  "unit": "$1.40 for 1st ½ hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"5am-5pm: $1.40 for 1st ½ hr; $1.50 for sub. ½ hr","weekdays2":"Aft 5pm: $3 per entry","saturday":"Same as wkdays","sundayHoliday":"$3 per entry"}
  },
  "furamariverfrontsingapore": {
    carpark: "Furama Riverfront Singapore",
    category: "Hotels",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2,
                  "unit": "$1 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2,
                  "unit": "$1 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2,
                  "unit": "$1 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1 per ½ hr","weekdays2":"Aft 5pm: $6 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "theritzcarltonmilleniasingapore": {
    carpark: "The Ritz Carlton, Millenia Singapore",
    category: "Hotels",
    baseRatePerHour: 3.3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3.3,
                  "unit": "$3.30 for 1st hr; $1.10 for sub.½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $3.30 for 1st hr; $1.10 for sub.½ hr","weekdays2":"Aft 6pm: $2.20 per entry","saturday":"$2.20 for 1st 2hrs; $1.10 for sub. hr","sundayHoliday":"Same as Saturday"}
  },
  "galleryhotel": {
    carpark: "Gallery Hotel",
    category: "Hotels",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "12pm-2pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1 for sub. ½ hr; $2 for 1st hr, $0.50 for sub. ½ hr from 2.01pm to 6.00pm for Mon-Thu"
            },
            {
                  "timeRange": "6pm-11.59pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1 for sub. ½ hr; $2 for 1st hr; $0.50 for sub. ½ hr  from 12am-11.59am for Mon-Thu"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-11.59pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $0.50 for sub. ½ hr, $3 for 1st hr; $0.50 for sub. ½ hr from 12am-1.59am for Fri-Sun/PH"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $0.50 for sub. ½ hr from 2.01am-6am for Fri-Sun/PH"
            }
      ]
},
    rawRates: {"weekdays1":"12pm-2pm: $3 for 1st hr; $1 for sub. ½ hr; $2 for 1st hr, $0.50 for sub. ½ hr from 2.01pm to 6.00pm for Mon-Thu","weekdays2":"6pm-11.59pm: $3 for 1st hr; $1 for sub. ½ hr; $2 for 1st hr; $0.50 for sub. ½ hr  from 12am-11.59am for Mon-Thu","saturday":"6am-11.59pm: $3 for 1st hr; $0.50 for sub. ½ hr, $3 for 1st hr; $0.50 for sub. ½ hr from 12am-1.59am for Fri-Sun/PH","sundayHoliday":"$2 for 1st hr; $0.50 for sub. ½ hr from 2.01am-6am for Fri-Sun/PH"}
  },
  "goodwoodparkhotel": {
    carpark: "Goodwood Park Hotel",
    category: "Hotels",
    baseRatePerHour: 4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $2 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $2 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $4 for 1st hr; $2 for sub. ½ hr","weekdays2":"Aft 6pm: $5 per entry","saturday":"Same as wkdays","sundayHoliday":"$5 per entry"}
  },
  "grandcopthornewaterfronthotel": {
    carpark: "Grand Copthorne Waterfront Hotel",
    category: "Hotels",
    baseRatePerHour: 3.75,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 3.75,
                  "unit": "$3.75 for 1st hr; $2.14 for sub. hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 4.28,
                  "unit": "$4.28 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 3.75,
                  "unit": "$3.75 for 1st hr; $2.14 for sub. hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 4.28,
                  "unit": "$4.28 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 4.28,
                  "unit": "$4.28 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $3.75 for 1st hr; $2.14 for sub. hr","weekdays2":"Aft 5pm: $4.28 per entry","saturday":"Same as wkdays","sundayHoliday":"$4.28 per entry"}
  },
  "grandhyatthotel": {
    carpark: "Grand Hyatt Hotel",
    category: "Hotels",
    baseRatePerHour: 3.21,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "4am-4.59pm",
                  "rate": 3.21,
                  "unit": "$3.21 for 1st hr; $1.07 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "4am-4.59pm",
                  "rate": 3.21,
                  "unit": "$3.21 for 1st hr; $1.07 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "4am-3.59am",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"4am-4.59pm: $3.21 for 1st hr; $1.07 for sub. ½ hr","weekdays2":"Aft 5pm: $5.35 per entry","saturday":"Same as wkdays","sundayHoliday":"4am-3.59am: $5.35 per entry"}
  },
  "grandmercureroxyhotel": {
    carpark: "Grand Mercure Roxy Hotel",
    category: "Hotels",
    baseRatePerHour: 1.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.6,
                  "unit": "$1.60 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.6,
                  "unit": "$1.60 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.6,
                  "unit": "$1.60 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $1.60 per hr","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "grandpacifichotelformerlyallsonhotel": {
    carpark: "Grand Pacific Hotel (Formerly Allson Hotel)",
    category: "Hotels",
    baseRatePerHour: 2.64,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.64,
                  "unit": "$1.32 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.57,
                  "unit": "$3.57 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.64,
                  "unit": "$1.32 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.57,
                  "unit": "$3.57 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.57,
                  "unit": "$3.57 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.32 per ½ hr","weekdays2":"Aft 5pm: $3.57 per entry","saturday":"Same as wkdays","sundayHoliday":"$3.57 per entry"}
  },
  "grandparkcityhallhotel": {
    carpark: "Grand Park City Hall Hotel",
    category: "Hotels",
    baseRatePerHour: 3.28,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 3.28,
                  "unit": "$3.28 for 1st hr; $1.55 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 3.28,
                  "unit": "$3.28 for 1st hr; $1.55 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 3.28,
                  "unit": "$3.28 for 1st hr; $1.55 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $3.28 for 1st hr; $1.55 for sub. ½ hr","weekdays2":"Aft 5pm: $5.35 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "grandparkorchard": {
    carpark: "Grand Park Orchard",
    category: "Hotels",
    baseRatePerHour: 3.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $3.50 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"Aft 5pm: $5 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "hiltonhotel": {
    carpark: "Hilton Hotel",
    category: "Hotels",
    baseRatePerHour: 7,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 7,
                  "unit": "$7 for 1st hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 7,
                  "unit": "$7 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 7,
                  "unit": "$7 for 1st hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 7,
                  "unit": "$7 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 7,
                  "unit": "$7 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $7 for 1st hr","weekdays2":"Aft 6pm: $7 per entry","saturday":"Same as wkdays","sundayHoliday":"$7 per entry"}
  },
  "holidayinnatrium": {
    carpark: "Holiday Inn Atrium",
    category: "Hotels",
    baseRatePerHour: 1.8,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.8,
                  "unit": "$1.80 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.6,
                  "unit": "$3.60 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.8,
                  "unit": "$1.80 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.6,
                  "unit": "$3.60 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.6,
                  "unit": "$3.60 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.80 per hr","weekdays2":"Aft 5pm: $3.60 per entry","saturday":"Same as wkdays","sundayHoliday":"$3.60 per entry"}
  },
  "holidayinnexpresssingapore": {
    carpark: "Holiday Inn Express Singapore",
    category: "Hotels",
    baseRatePerHour: 6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 6,
                  "unit": "$3 per ½ hr."
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 6,
                  "unit": "$3 per ½ hr."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 6,
                  "unit": "$3 per ½ hr."
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 6,
                  "unit": "$3 per ½ hr."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 6,
                  "unit": "$3 per ½ hr."
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 6,
                  "unit": "$3 per ½ hr."
            }
      ]
},
    rawRates: {"weekdays1":"$3 per ½ hr.","weekdays2":"$3 per ½ hr.","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "holidayinnsingaporeorchardcitycentre": {
    carpark: "Holiday Inn Singapore Orchard City Centre",
    category: "Hotels",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"$3 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"$3 for 1st hr; $1.50 for sub. ½ hr","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "intercontinentalhotel": {
    carpark: "Inter-continental Hotel",
    category: "Hotels",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.07,
                  "unit": "$1.07 for 1st hr; $0.37 for sub. 10mins (Car park at Parco Bugis Junction)"
            },
            {
                  "timeRange": "Mon-Thu",
                  "rate": 1.25,
                  "unit": "Aft 5pm: $2.50 per entry. Fri: $2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.25,
                  "unit": "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.25,
                  "unit": "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1.07 for 1st hr; $0.37 for sub. 10mins (Car park at Parco Bugis Junction)","weekdays2":"Mon-Thu: Aft 5pm: $2.50 per entry. Fri: $2.50 for 1st 2hrs; $0.25 for sub. 10 mins","saturday":"$2.50 for 1st 2hrs; $0.25 for sub. 10 mins","sundayHoliday":"Same as Saturday"}
  },
  "klapsonstheboutiquehotel": {
    carpark: "klapsons, The Boutique Hotel",
    category: "Hotels",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 3,
                  "unit": "6.30am to 6.30pm - first 3 hours at $3.00 and subsequent half an hour at $1.50"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.2,
                  "unit": "6.30pm to 6.30am - $ 4.00 flat"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 4,
                  "unit": "After 2pm - $4.00 flat"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 4,
                  "unit": "$4.00 flat"
            }
      ]
},
    rawRates: {"weekdays1":"6.30am to 6.30pm - first 3 hours at $3.00 and subsequent half an hour at $1.50","weekdays2":"6.30pm to 6.30am - $ 4.00 flat","saturday":"After 2pm - $4.00 flat","sundayHoliday":"$4.00 flat"}
  },
  "landmarkvillagehotelformallygoldenlandmarkhotel": {
    carpark: "Landmark Village Hotel (Formally Golden Landmark Hotel)",
    category: "Hotels",
    baseRatePerHour: 1.9,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.9,
                  "unit": "$1.90 for 1st hr; $1.07 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.9,
                  "unit": "$1.90 for 1st hr; $1.07 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1.90 for 1st hr; $1.07 for sub. ½ hr","weekdays2":"Aft 5pm: $2.14 per entry","saturday":"Same as wkdays","sundayHoliday":"$2.14 per entry"}
  },
  "mhotel": {
    carpark: "M Hotel",
    category: "Hotels",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $1.50 per ½ hr","weekdays2":"Aft 6pm: $3 per entry","saturday":"Charges same as wkdays, but $3 per entry after 1pm","sundayHoliday":"$3 per entry"}
  },
  "mandarinorchardsingapore": {
    carpark: "Mandarin Orchard Singapore",
    category: "Hotels",
    baseRatePerHour: 3.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $3.50 for 1st hr; $1.20 for sub. ½ hr","weekdays2":"Aft 6pm: $6 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "mandarinorientalhotel": {
    carpark: "Mandarin Oriental Hotel",
    category: "Hotels",
    baseRatePerHour: 1.1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Mon-Thu",
                  "rate": 1.1,
                  "unit": "7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)"
            },
            {
                  "timeRange": "Mon-Thu",
                  "rate": 2.2,
                  "unit": "5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Fri/Sat-Sun/PH",
                  "rate": 1.2,
                  "unit": "7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking"
            },
            {
                  "timeRange": "2am-7am",
                  "rate": 2.2,
                  "unit": "$1.10 per ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Fri/Sat-Sun/PH",
                  "rate": 1.2,
                  "unit": "7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking"
            },
            {
                  "timeRange": "2am-7am",
                  "rate": 2.2,
                  "unit": "$1.10 per ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Thu: 7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)","weekdays2":"Mon-Thu: 5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr","saturday":"Fri/Sat-Sun/PH: 7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr","sundayHoliday":"Same as Saturday"}
  },
  "marinabaysands": {
    carpark: "Marina Bay Sands",
    category: "Hotels",
    baseRatePerHour: 6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 6,
                  "unit": "$6 for 1st hr; $1 for sub. hr; (Capped at $26 every 24hrs)"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 6,
                  "unit": "$6 for 1st hr; $1 for sub. hr; (Capped at $26 every 24hrs)"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 6,
                  "unit": "$6 for 1st hr; $1 for sub. hr; (Capped at $26 every 24hrs)"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-7pm: $6 for 1st hr; $1 for sub. hr; (Capped at $26 every 24hrs)","weekdays2":"Aft 7pm: $6 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "marinamandarinhotel": {
    carpark: "Marina Mandarin Hotel",
    category: "Hotels",
    baseRatePerHour: 1.1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Mon-Thu",
                  "rate": 1.1,
                  "unit": "7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)"
            },
            {
                  "timeRange": "Mon-Thu",
                  "rate": 2.2,
                  "unit": "5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr for sub. ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Fri-Sun/PH",
                  "rate": 1.2,
                  "unit": "7am-2am :$2.40 for 1st 2hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Fri-Sun/PH",
                  "rate": 1.2,
                  "unit": "7am-2am :$2.40 for 1st 2hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Thu: 7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)","weekdays2":"Mon-Thu: 5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr for sub. ½ hr","saturday":"Fri-Sun/PH: 7am-2am :$2.40 for 1st 2hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr for sub. ½ hr","sundayHoliday":"Same as Saturday"}
  },
  "novotelclarkequay": {
    carpark: "Novotel Clarke Quay",
    category: "Hotels",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.07,
                  "unit": "$1.07 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-1pm",
                  "rate": 1.07,
                  "unit": "$1.07 per hr"
            },
            {
                  "timeRange": "Aft 1pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.07 per hr","weekdays2":"Aft 5pm: $3.21 per entry","saturday":"7am-1pm: $1.07 per hr; Aft 1pm: $3.21 per entry","sundayHoliday":"$3.21 per entry"}
  },
  "onefullerton": {
    carpark: "One Fullerton",
    category: "Hotels",
    baseRatePerHour: 5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 5,
                  "unit": "$2.50 per ½ hr"
            },
            {
                  "timeRange": "After 6pm",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $2.50 per ½ hr","weekdays2":"After 6pm: $5 per entry","saturday":"$5 per entry","sundayHoliday":"$5 per entry"}
  },
  "orchardgrandcourthotel": {
    carpark: "Orchard Grand Court Hotel",
    category: "Hotels",
    baseRatePerHour: 2.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $2.50 per hr","weekdays2":"Aft 5pm: $3 per entry","saturday":"Same as wkdays","sundayHoliday":"$3 per entry"}
  },
  "orchardhotelshoppingarcade": {
    carpark: "Orchard Hotel Shopping Arcade",
    category: "Hotels",
    baseRatePerHour: 5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 5,
                  "unit": "$5 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 5.5,
                  "unit": "$5.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 5,
                  "unit": "$5 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 5.5,
                  "unit": "$5.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $5 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"Aft 6pm: $5.50 per entry","saturday":"Same as wkdays","sundayHoliday":"$5 per entry"}
  },
  "orchardparadehotel": {
    carpark: "Orchard Parade Hotel",
    category: "Hotels",
    baseRatePerHour: 4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $4 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"Aft 6pm: $4 per entry","saturday":"Same as wkdays","sundayHoliday":"$4 per entry"}
  },
  "panpacifichotel": {
    carpark: "Pan Pacific Hotel",
    category: "Hotels",
    baseRatePerHour: 1.1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Mon-Thu",
                  "rate": 1.1,
                  "unit": "7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)"
            },
            {
                  "timeRange": "Mon-Thu",
                  "rate": 2.2,
                  "unit": "5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Fri/Sat-Sun/PH",
                  "rate": 1.2,
                  "unit": "7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking"
            },
            {
                  "timeRange": "2am-7am",
                  "rate": 2.2,
                  "unit": "$1.10 per ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Fri/Sat-Sun/PH",
                  "rate": 1.2,
                  "unit": "7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking"
            },
            {
                  "timeRange": "2am-7am",
                  "rate": 2.2,
                  "unit": "$1.10 per ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Thu: 7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)","weekdays2":"Mon-Thu: 5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr","saturday":"Fri/Sat-Sun/PH: 7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr","sundayHoliday":"Same as Saturday"}
  },
  "panpacificorchard": {
    carpark: "Pan Pacific Orchard",
    category: "Hotels",
    baseRatePerHour: 4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $4 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"Aft 5pm: $4 per entry","saturday":"Same as wkdays","sundayHoliday":"$4 per entry"}
  },
  "parkroyalonbeachroad": {
    carpark: "PARKROYAL on Beach Road",
    category: "Hotels",
    baseRatePerHour: 2.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.5,
                  "unit": "Multi Storey Carpark - $2.50 for 1st hr; $1.50 for sub. ½ hr. Hotel Driveway - $6 for 1st hr; $2 for sub. ½ hr."
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "Multi Storey Carpark - $2.50 per entry. Hotel Driveway - $6 per entry."
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.5,
                  "unit": "Multi Storey Carpark - $2.50 for 1st hr; $1.50 for sub. ½ hr. Hotel Driveway - $6 for 1st hr; $2 for sub. ½ hr."
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "Multi Storey Carpark - $2.50 per entry. Hotel Driveway - $6 per entry."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.5,
                  "unit": "Multi-Storey Carpark - $2.50 per entry. Hotel Driveway - $6 per entry."
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: Multi Storey Carpark - $2.50 for 1st hr; $1.50 for sub. ½ hr. Hotel Driveway - $6 for 1st hr; $2 for sub. ½ hr.","weekdays2":"Aft 5pm: Multi Storey Carpark - $2.50 per entry. Hotel Driveway - $6 per entry.","saturday":"Charges same as wkdays but $2.50 per entry (Multi-Storey Carpark) & $6 per entry (Hotel Driveway) after 1pm.","sundayHoliday":"Multi-Storey Carpark - $2.50 per entry. Hotel Driveway - $6 per entry."}
  },
  "peninsulaexcelsiorhotel": {
    carpark: "Peninsula Excelsior Hotel",
    category: "Hotels",
    baseRatePerHour: 2.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2.6,
                  "unit": "$2.60 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2.6,
                  "unit": "$2.60 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.5,
                  "unit": "$1.50 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $2.60 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"Aft 5pm: $4 per entry","saturday":"Same as wkdays","sundayHoliday":"8am-5pm: $1.50 per hr; Aft 5pm: $4 per entry"}
  },
  "raffleshotel": {
    carpark: "Raffles Hotel",
    category: "Hotels",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "12am-6pm",
                  "rate": 3,
                  "unit": "$3 for 1st ½ hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-12am",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "12am-6pm",
                  "rate": 3,
                  "unit": "$3 for 1st ½ hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-12am",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"12am-6pm: $3 for 1st ½ hr; $1.50 for sub. ½ hr","weekdays2":"6pm-12am: $6 per entry","saturday":"Same as wkdays","sundayHoliday":"$6 per entry"}
  },
  "regenthotel": {
    carpark: "Regent Hotel",
    category: "Hotels",
    baseRatePerHour: 5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 5,
                  "unit": "$5 for 1st hr; $2.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 5,
                  "unit": "$5 for 1st hr; $2.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 5,
                  "unit": "$5 for 1st hr; $2.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $5 for 1st hr; $2.50 for sub. ½ hr","weekdays2":"Aft 6pm: $6 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "rendezvoushotel": {
    carpark: "Rendezvous Hotel",
    category: "Hotels",
    baseRatePerHour: 1.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.6,
                  "unit": "$3.20 for 1st 2hrs; $1.60 for sub. hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.6,
                  "unit": "$3.20 for 1st 2hrs; $1.60 for sub. hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.6,
                  "unit": "$3.20 for 1st 2hrs; $1.60 for sub. hr"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $3.20 for 1st 2hrs; $1.60 for sub. hr","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "royalplazaonscotts": {
    carpark: "Royal Plaza On Scotts",
    category: "Hotels",
    baseRatePerHour: 4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 5.5,
                  "unit": "$5.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 5.5,
                  "unit": "$5.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 5.5,
                  "unit": "$5.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $4 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"Aft 6pm: $5.50 per entry","saturday":"Same as wkdays","sundayHoliday":"$5.50 per entry"}
  },
  "shangrilahotel": {
    carpark: "Shangri-la Hotel",
    category: "Hotels",
    baseRatePerHour: 6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 6,
                  "unit": "$6 for 1st hr; $2 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 8,
                  "unit": "$8 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 6,
                  "unit": "$6 for 1st hr; $2 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 8,
                  "unit": "$8 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 6,
                  "unit": "$6 for 1st hr; $2 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 8,
                  "unit": "$8 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $6 for 1st hr; $2 for sub. ½ hr","weekdays2":"Aft 5pm: $8 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "sheratontowershotel": {
    carpark: "Sheraton Towers Hotel",
    category: "Hotels",
    baseRatePerHour: 4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $2 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $2 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $4 for 1st hr; $2 for sub. ½ hr","weekdays2":"Aft 6pm: $6 per entry","saturday":"Same as wkdays","sundayHoliday":"$6 per entry"}
  },
  "singaporemarriotthotel": {
    carpark: "Singapore Marriott Hotel",
    category: "Hotels",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 3,
                  "unit": "$0.05 per min/$3 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3,
                  "unit": "$0.05 per min/$3 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 3,
                  "unit": "$0.05 per min/$3 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3,
                  "unit": "$0.05 per min/$3 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 3,
                  "unit": "$0.05 per min/$3 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3,
                  "unit": "$0.05 per min/$3 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: $0.05 per min/$3 per hr","weekdays2":"Aft 6pm: $0.05 per min/$3 per hr","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "swissotelmerchantcourthotel": {
    carpark: "Swissotel Merchant Court Hotel",
    category: "Hotels",
    baseRatePerHour: 4.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 4.5,
                  "unit": "$4.50 for 1st hr; $1.50 for sub. ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 4.5,
                  "unit": "$4.50 for 1st hr; $1.50 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 4.5,
                  "unit": "$4.50 for 1st hr; $1.50 for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $4.50 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "swissotelstamfordhotel": {
    carpark: "Swissotel Stamford Hotel",
    category: "Hotels",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $0.50 for sub. 15mins (Car park at Raffles City Shopping Centre)"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1,
                  "unit": "$2 for 1st 2hrs; $0.30 for sub. 15mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1,
                  "unit": "$2 for 1st 2hrs; $0.30 for sub. 15mins"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $2 for 1st hr; $0.50 for sub. 15mins (Car park at Raffles City Shopping Centre)","weekdays2":"Aft 5pm: $2.50 per entry","saturday":"$2 for 1st 2hrs; $0.30 for sub. 15mins","sundayHoliday":"Same as Saturday"}
  },
  "sunshineplace": {
    carpark: "Sunshine Place",
    category: "West",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "HDB coupon parking"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.2,
                  "unit": "HDB coupon parking"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.2,
                  "unit": "HDB coupon parking"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 1.2,
                  "unit": "HDB coupon parking"
            }
      ]
},
    rawRates: {"weekdays1":"HDB coupon parking","weekdays2":"HDB coupon parking","saturday":"HDB coupon parking","sundayHoliday":"HDB coupon parking"}
  },
  "tradershotel": {
    carpark: "Traders Hotel",
    category: "Hotels",
    baseRatePerHour: 2.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 2.4,
                  "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 2.4,
                  "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-5pm: $2.40 for 1st hr; $1.20 for sub. ½ hr","weekdays2":"Aft 5pm: $3.50 per entry","saturday":"Charges same as wkdays, but $3.50 per entry after 1pm","sundayHoliday":"$3.50 per entry"}
  },
  "yorkhotel": {
    carpark: "York Hotel",
    category: "Hotels",
    baseRatePerHour: 4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8.01am-6pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $2 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8.01am-6pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $2 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8.01am-6pm: $4 for 1st hr; $2 for sub. ½ hr","weekdays2":"Aft 6pm: $5 per entry","saturday":"Same as wkdays","sundayHoliday":"$5 per entry"}
  },
  "313somerset": {
    carpark: "313@Somerset",
    category: "Orchard Area",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 1.5,
                  "unit": "$4.50 for 1st 3hrs; $1.50 for sub. ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.2,
                  "unit": "Same as weekdays"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 1.5,
                  "unit": "$4.50 for 1st 3hrs; $1.50 for sub ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"$2 for 1st hr; $1 for sub. ½ hr","weekdays2":"Aft 6pm: $4.50 for 1st 3hrs; $1.50 for sub. ½ hr","saturday":"Same as weekdays","sundayHoliday":"$4.50 for 1st 3hrs; $1.50 for sub ½ hr"}
  },
  "angulliaparkoffstreet": {
    carpark: "Angullia Park Off-Street",
    category: "Orchard Area",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 2,
                  "unit": "$1.00 /30 mins (Per Minute Charging)"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1,
                  "unit": "$0.50 /30 mins (Per Minute Charging)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "0700-1700",
                  "rate": 2,
                  "unit": "$1.00 per 30 mins; 1700-0700: $0.50 per 30 mins (Per Minute Charging)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 1,
                  "unit": "$0.50 /30 mins (Per Minute Charging)"
            }
      ]
},
    rawRates: {"weekdays1":"$1.00 /30 mins (Per Minute Charging)","weekdays2":"$0.50 /30 mins (Per Minute Charging)","saturday":"0700-1700 : $1.00 per 30 mins; 1700-0700: $0.50 per 30 mins (Per Minute Charging)","sundayHoliday":"$0.50 /30 mins (Per Minute Charging)"}
  },
  "atriumorchard": {
    carpark: "Atrium @ Orchard",
    category: "Orchard Area",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Mon-Thurs",
                  "rate": 1.07,
                  "unit": "12am-5.59pm: $1.07 for 1st hr; $0.32 for sub. 15mins; Fri & Eve of PH: $1.07 for 1st hr; $0.32 for sub. 15mins"
            },
            {
                  "timeRange": "Mon-Thurs",
                  "rate": 2.14,
                  "unit": "6pm-11.59pm: $2.14 per entry; Fri & Eve of PH: 6pm-2.59am (the next day): $2.14 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "3am-5.59pm",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2 hrs; $0.32 for sub. 15mins"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "3am-5.59pm",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2hrs; $0.32 for sub. 15mins"
            },
            {
                  "timeRange": "6pm-11.59pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Thurs: 12am-5.59pm: $1.07 for 1st hr; $0.32 for sub. 15mins; Fri & Eve of PH: $1.07 for 1st hr; $0.32 for sub. 15mins","weekdays2":"Mon-Thurs: 6pm-11.59pm: $2.14 per entry; Fri & Eve of PH: 6pm-2.59am (the next day): $2.14 per entry","saturday":"3am-5.59pm: $2.14 for 1st 2 hrs; $0.32 for sub. 15mins; Aft 6pm: $2.14 per entry","sundayHoliday":"3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15mins.  6pm-11.59pm: $2.14 per entry"}
  },
  "cathaycineleisureorchard": {
    carpark: "Cathay Cineleisure Orchard",
    category: "Orchard Area",
    baseRatePerHour: 2.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "From 7am",
                  "rate": 2.4,
                  "unit": "$2.40 for 1st hr; $1.40 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 1.5,
                  "unit": "$4.50 for 1st 3hrs; $1.60 for sub.½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "From 7am",
                  "rate": 1.5,
                  "unit": "$4.50 for 1st 3hrs; $1.60 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "From 7am",
                  "rate": 1.5,
                  "unit": "$4.50 for 1st 3hrs; $1.60 for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"From 7am: $2.40 for 1st hr; $1.40 for sub. ½ hr","weekdays2":"Aft 6pm: $4.50 for 1st 3hrs; $1.60 for sub.½ hr","saturday":"From 7am: $4.50 for 1st 3hrs; $1.60 for sub. ½ hr","sundayHoliday":"Same as Saturday"}
  },
  "comcentreexeterrd": {
    carpark: "ComCentre (Exeter Rd)",
    category: "Orchard Area",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-6.59am",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-12.59pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "1pm-10pm",
                  "rate": 1.5,
                  "unit": "$3 for 1st 2hr; $1.20 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-10pm",
                  "rate": 1.5,
                  "unit": "$3 for 1st 2 hr; $1.20 for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $3 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"6pm-6.59am: $3.50 per entry","saturday":"7am-12.59pm: $3 for 1st hr; $1.50 for sub. ½ hr.  1pm-10pm: $3 for 1st 2hr; $1.20 for sub. ½ hr.","sundayHoliday":"7am-10pm: $3 for 1st 2 hr; $1.20 for sub. ½ hr"}
  },
  "delfiorchard": {
    carpark: "Delfi Orchard",
    category: "Orchard Area",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.93 for sub. ½ hr"
            },
            {
                  "timeRange": "5pm-11pm",
                  "rate": 4.07,
                  "unit": "$4.07 per entry (Car park closed at 11pm daily)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.93 for sub. ½ hr"
            },
            {
                  "timeRange": "5pm-11pm",
                  "rate": 4.07,
                  "unit": "$4.07 per entry (Car park closed at 11pm daily)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-11pm",
                  "rate": 4.07,
                  "unit": "$4.07 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $3 for 1st hr; $1.93 for sub. ½ hr","weekdays2":"5pm-11pm: $4.07 per entry (Car park closed at 11pm daily)","saturday":"Same as wkdays","sundayHoliday":"8am-11pm: $4.07 per entry"}
  },
  "fareastplaza": {
    carpark: "Far East Plaza",
    category: "Orchard Area",
    baseRatePerHour: 2.14,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2.14,
                  "unit": "$2.14 for 1st hr; $1.07 for sub. ½ hr."
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.53,
                  "unit": "$3.53 per entry."
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2.14,
                  "unit": "$2.14 for 1st hr; $1.07 for sub. ½ hr."
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.53,
                  "unit": "$3.53 per entry."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.53,
                  "unit": "$3.53 per entry."
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $2.14 for 1st hr; $1.07 for sub. ½ hr.","weekdays2":"Aft 5pm: $3.53 per entry.","saturday":"Same as wkdays","sundayHoliday":"$3.53 per entry."}
  },
  "fareastshoppingcentre": {
    carpark: "Far East Shopping Centre",
    category: "Orchard Area",
    baseRatePerHour: 2.57,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2.57,
                  "unit": "$2.57 per hr; $1.28 for sub. ½hr."
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 3.75,
                  "unit": "$3.75 per entry; 12am-8am the following day: $3.75 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2.57,
                  "unit": "$2.57 per hr; $1.28 for sub. ½hr."
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 3.75,
                  "unit": "$3.75 per entry; 12am-8am the following day: $3.75 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-12am",
                  "rate": 3.75,
                  "unit": "$3.75 per entry; 12am-8am the folowing day : $3.75 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $2.57 per hr; $1.28 for sub. ½hr.","weekdays2":"5pm-12am: $3.75 per entry; 12am-8am the following day: $3.75 per entry","saturday":"Same as wkdays","sundayHoliday":"8am-12am: $3.75 per entry; 12am-8am the folowing day : $3.75 per entry"}
  },
  "forumtheshoppingmall": {
    carpark: "Forum The Shopping Mall",
    category: "Orchard Area",
    baseRatePerHour: 2.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 2.4,
                  "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.2,
                  "unit": "$3.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 2.6,
                  "unit": "$2.60 for 1st hr; $1.40 for sub. ½ hr, Aft 5pm: $3.20 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.2,
                  "unit": "$3.20 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-5pm: $2.40 for 1st hr; $1.20 for sub. ½ hr","weekdays2":"Aft 5pm: $3.20 per entry","saturday":"6am-5pm: $2.60 for 1st hr; $1.40 for sub. ½ hr, Aft 5pm: $3.20 per entry","sundayHoliday":"$3.20 per entry"}
  },
  "grandhyattsingapore": {
    carpark: "Grand Hyatt Singapore",
    category: "Orchard Area",
    baseRatePerHour: 3.21,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "4am-4.59pm",
                  "rate": 3.21,
                  "unit": "$3.21 for 1st hr; $1.07 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "4am-4.59pm",
                  "rate": 3.21,
                  "unit": "$3.21 for 1st hr; $1.07 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "4am-3.59am",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"4am-4.59pm: $3.21 for 1st hr; $1.07 for sub. ½ hr","weekdays2":"Aft 5pm: $5.35 per entry","saturday":"Same as wkdays","sundayHoliday":"4am-3.59am: $5.35 per entry"}
  },
  "grangeroadoffstreet": {
    carpark: "Grange Road Off-Street",
    category: "Orchard Area",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 2,
                  "unit": "$1.00 /30 Mins (Per Minute Charging)"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1,
                  "unit": "$0.50 /30 mins (Per Minute Charging)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "0700-1700",
                  "rate": 1,
                  "unit": "$1.00 / per 30 mins"
            },
            {
                  "timeRange": "1700-0700",
                  "rate": 0.5,
                  "unit": "$0.50 / per 30 mins (Per Minute Charging)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 1,
                  "unit": "$0.50 / 30 Mins. (Per Minute Charging)"
            }
      ]
},
    rawRates: {"weekdays1":"$1.00 /30 Mins (Per Minute Charging)","weekdays2":"$0.50 /30 mins (Per Minute Charging)","saturday":"0700-1700: $1.00 / per 30 mins. 1700-0700: $0.50 / per 30 mins (Per Minute Charging)","sundayHoliday":"$0.50 / 30 Mins. (Per Minute Charging)"}
  },
  "internationalbuilding": {
    carpark: "International Building",
    category: "Orchard Area",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.2,
                  "unit": "$1.20 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.2,
                  "unit": "$1.20 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.2,
                  "unit": "$1.20 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"Carpark not in use","weekdays2":"Carpark not in use","saturday":"Carpark not in use","sundayHoliday":"Carpark not in use"}
  },
  "ionorchard": {
    carpark: "ION Orchard",
    category: "Orchard Area",
    baseRatePerHour: 2.67,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Mon-Thu",
                  "rate": 2.67,
                  "unit": "8am-4.59pm: $2.67 for 1st hr; $0.64 for sub. 15 mins"
            },
            {
                  "timeRange": "Mon-Thu",
                  "rate": 1.07,
                  "unit": "5pm-11.59pm: $3 per entry. 12am-7.59am $1.07 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Fri/Sat-Sun/PH",
                  "rate": 2.56,
                  "unit": "8am-4.59pm: $2.56 for 1st hr; $0.94 for sub. 15 mins"
            },
            {
                  "timeRange": "5-11.59pm",
                  "rate": 1.07,
                  "unit": "$3.74 per entry. 12am-7.59am $1.07 per hour"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Fri/Sat-Sun/PH",
                  "rate": 2.56,
                  "unit": "8am-4.59pm: $2.56 for 1st hr; $0.94 for sub. 15 mins"
            },
            {
                  "timeRange": "5-11.59pm",
                  "rate": 1.07,
                  "unit": "$3.74 per entry. 12am-7.59am $1.07 per hour"
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Thu: 8am-4.59pm: $2.67 for 1st hr; $0.64 for sub. 15 mins","weekdays2":"Mon-Thu: 5pm-11.59pm: $3 per entry. 12am-7.59am $1.07 per hr","saturday":"Fri/Sat-Sun/PH: 8am-4.59pm: $2.56 for 1st hr; $0.94 for sub. 15 mins. 5-11.59pm: $3.74 per entry. 12am-7.59am $1.07 per hour","sundayHoliday":"Same as Saturday"}
  },
  "liattowers": {
    carpark: "Liat Towers",
    category: "Orchard Area",
    baseRatePerHour: 2.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2.5,
                  "unit": "$2.50 for 1st hr; $1.30 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-12am",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2.5,
                  "unit": "$2.50 for 1st hr; $1.30 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-12am",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2.5,
                  "unit": "$2.50 for 1st hr; $1.30 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-12am",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $2.50 for 1st hr; $1.30 for sub. ½ hr","weekdays2":"6pm-12am: $3.50 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "luckyplaza": {
    carpark: "Lucky Plaza",
    category: "Orchard Area",
    baseRatePerHour: 1.93,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-4.59pm",
                  "rate": 1.93,
                  "unit": "$1.93 for 1st hr; $1.28 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.38,
                  "unit": "$3.38 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-4.59pm",
                  "rate": 1.93,
                  "unit": "$1.93 for 1st hr; $1.28 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.38,
                  "unit": "$3.38 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun",
                  "rate": 1.93,
                  "unit": "7am-9.59pm: $1.93 for 1st hr; $1.28 for sub. ½ hr; 10pm-6.59am: $3.38 per entry. PH: $4 per entry (Does not applies if PH falls on Sun)"
            }
      ]
},
    rawRates: {"weekdays1":"7am-4.59pm: $1.93 for 1st hr; $1.28 for sub. ½ hr","weekdays2":"Aft 5pm: $3.38 per entry","saturday":"Same as wkdays","sundayHoliday":"Sun: 7am-9.59pm: $1.93 for 1st hr; $1.28 for sub. ½ hr; 10pm-6.59am: $3.38 per entry. PH: $4 per entry (Does not applies if PH falls on Sun)"}
  },
  "mandaringallery": {
    carpark: "Mandarin Gallery",
    category: "Orchard Area",
    baseRatePerHour: 3.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $0.05 per min"
            },
            {
                  "timeRange": "6pm-6am",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $0.03 per min"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $0.05 per min"
            },
            {
                  "timeRange": "6pm-6am",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $0.03 per min"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $0.05 per min"
            },
            {
                  "timeRange": "6pm-6am",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $0.03 per min"
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: $3.50 for 1st hr; $0.05 per min","weekdays2":"6pm-6am: $3.50 for 1st hr; $0.03 per min","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "meritusmandarinsingapore": {
    carpark: "Meritus Mandarin Singapore",
    category: "Orchard Area",
    baseRatePerHour: 3.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $1.30 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $1.30 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 3.5,
                  "unit": "$3.50 for 1st hr; $1.30 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: $3.50 for 1st hr; $1.30 for sub. ½ hr","weekdays2":"Aft 6pm: $6 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "ngeeanncity": {
    carpark: "Ngee Ann City",
    category: "Orchard Area",
    baseRatePerHour: 2.56,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "01pm-5pm",
                  "rate": 2.56,
                  "unit": "$1.28 for ½ hr , 12"
            },
            {
                  "timeRange": "01pm-2pm",
                  "rate": 3.64,
                  "unit": "$1.82 for ½ hr"
            },
            {
                  "timeRange": "5.01pm-7pm",
                  "rate": 3.64,
                  "unit": "$1.82 for ½ hr"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 4.28,
                  "unit": "$4.28 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "01pm-5pm",
                  "rate": 2.57,
                  "unit": "$2.57 for 1st hr; $1.61 for sub. ½ hr, 12.01pm-2pm, 5"
            },
            {
                  "timeRange": "01pm-7pm",
                  "rate": 3.64,
                  "unit": "$3.64 for 1st hr; $2.14 for sub. ½ hr, Aft 7pm: $4.28 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "01pm-5pm",
                  "rate": 2.57,
                  "unit": "$2.57 for 1st hr; $1.61 for sub. ½ hr, 12.01pm-2pm, 5"
            },
            {
                  "timeRange": "01pm-7pm",
                  "rate": 3.64,
                  "unit": "$3.64 for 1st hr; $2.14 for sub. ½ hr, Aft 7pm: $4.28 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"12.01am-12pm, 2.01pm-5pm: $1.28 for ½ hr , 12.01pm-2pm: $1.82 for ½ hr","weekdays2":"5.01pm-7pm:$1.82 for ½ hr; Aft 7pm: $4.28 per entry","saturday":"12.01am-12pm, 2.01pm-5pm: $2.57 for 1st hr; $1.61 for sub. ½ hr, 12.01pm-2pm, 5.01pm-7pm: $3.64 for 1st hr; $2.14 for sub. ½ hr, Aft 7pm: $4.28 per entry","sundayHoliday":"Same as Saturday"}
  },
  "ogorchardpoint": {
    carpark: "OG Orchard Point",
    category: "Orchard Area",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-10.59pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr or part thereof; $1.50 per sub. ½ hr or part thereof."
            },
            {
                  "timeRange": "11pm-6.59am",
                  "rate": 4,
                  "unit": "$2 per ½ hr or part thereof."
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-10.59pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr or part thereof; $1.50 per sub. ½ hr or part thereof."
            },
            {
                  "timeRange": "11pm-6.59am",
                  "rate": 4,
                  "unit": "$2 per ½ hr or part thereof."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-10.59pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr or part thereof; $1.50 per sub. ½ hr or part thereof."
            },
            {
                  "timeRange": "11pm-6.59am",
                  "rate": 4,
                  "unit": "$2 per ½ hr or part thereof."
            }
      ]
},
    rawRates: {"weekdays1":"7am-10.59pm:$2 for 1st hr or part thereof; $1.50 per sub. ½ hr or part thereof.","weekdays2":"11pm-6.59am: $2 per ½ hr or part thereof.","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "orchardbuilding": {
    carpark: "Orchard Building",
    category: "Orchard Area",
    baseRatePerHour: 2.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.2,
                  "unit": "$2.20 for 1st hr; $1.20 for sub. ½ hr (Car park closed at 1am daily )"
            },
            {
                  "timeRange": "5pm-1am",
                  "rate": 3.6,
                  "unit": "$3.60 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.2,
                  "unit": "$2.20 for 1st hr; $1.20 for sub. ½ hr (Car park closed at 1am daily )"
            },
            {
                  "timeRange": "5pm-1am",
                  "rate": 3.6,
                  "unit": "$3.60 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.2,
                  "unit": "$3.60 for 1st 3hrs; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "5pm-1am",
                  "rate": 3.6,
                  "unit": "$3.60 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $2.20 for 1st hr; $1.20 for sub. ½ hr (Car park closed at 1am daily )","weekdays2":"5pm-1am: $3.60 per entry","saturday":"Same as wkdays","sundayHoliday":"7am-5pm: $3.60 for 1st 3hrs; $1.20 for sub. ½ hr; 5pm-1am: $3.60 per entry"}
  },
  "orchardcentral": {
    carpark: "Orchard Central",
    category: "Orchard Area",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "2am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-2am",
                  "rate": 1.5,
                  "unit": "$4.50 for 1st 3hrs; $1.50 for sub. ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "2am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-2am",
                  "rate": 1.5,
                  "unit": "$4.50 for 1st 3hrs; $1.50 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "2am-2am",
                  "rate": 1.5,
                  "unit": "$4.50 for 1st 3hrs; $1.50 for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"2am-6pm: $2 for 1st hr; $1 for sub. ½ hr","weekdays2":"6pm-2am: $4.50 for 1st 3hrs; $1.50 for sub. ½ hr","saturday":"Same as wkdays","sundayHoliday":"2am-2am: $4.50 for 1st 3hrs; $1.50 for sub. ½ hr"}
  },
  "orchardplaza": {
    carpark: "Orchard Plaza",
    category: "Orchard Area",
    baseRatePerHour: 2.78,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.78,
                  "unit": "$1.39 for ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.85,
                  "unit": "$3.85 per entry for 1st 3 hrs; $1.39 for sub. ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.78,
                  "unit": "$1.39 for ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.85,
                  "unit": "$3.85 per entry for 1st 3 hrs; $1.39 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.78,
                  "unit": "$1.39 for ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.85,
                  "unit": "$3.85 per entry for 1st 3 hrs; $1.39 for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.39 for ½ hr","weekdays2":"Aft 5pm: $3.85 per entry for 1st 3 hrs; $1.39 for sub. ½ hr","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "orchardtowers": {
    carpark: "Orchard Towers",
    category: "Orchard Area",
    baseRatePerHour: 5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5.59pm",
                  "rate": 5,
                  "unit": "$5 per hr"
            },
            {
                  "timeRange": "6pm-1.59am",
                  "rate": 9,
                  "unit": "$9 per entry. After 2am: $9 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5.59pm",
                  "rate": 5,
                  "unit": "$5 per hr"
            },
            {
                  "timeRange": "6pm-1.59am",
                  "rate": 9,
                  "unit": "$9 per entry. After 2am: $9 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-1.59pm",
                  "rate": 9,
                  "unit": "$9 per entry"
            },
            {
                  "timeRange": "2am-6.59pm",
                  "rate": 9,
                  "unit": "$9 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5.59pm: $5 per hr","weekdays2":"6pm-1.59am: $9 per entry. After 2am: $9 per entry","saturday":"Same as wkdays","sundayHoliday":"7am-1.59pm: $9 per entry. 2am-6.59pm: $9 per entry"}
  },
  "orchardgateway": {
    carpark: "orchardgateway",
    category: "Orchard Area",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "12am-5.59pm",
                  "rate": 3,
                  "unit": "$3 for 1st 1½ hrs or part thereof; $1.50 for sub. ½ hr or part thereof."
            },
            {
                  "timeRange": "6pm-11.59pm",
                  "rate": 4.8,
                  "unit": "$4.80 1st 2½ hrs or part thereof; $1.80 for sub. ½ hr or part thereof."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 4.8,
                  "unit": "$4.80 1st 2½ hrs or part thereof; $1.80 for sub. ½ hr or part thereof."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 4.8,
                  "unit": "$4.80 1st 2½ hrs or part thereof; $1.80 for sub. ½ hr or part thereof."
            }
      ]
},
    rawRates: {"weekdays1":"12am-5.59pm: $3 for 1st 1½ hrs or part thereof; $1.50 for sub. ½ hr or part thereof.","weekdays2":"6pm-11.59pm: $4.80 1st 2½ hrs or part thereof; $1.80 for sub. ½ hr or part thereof.","saturday":"$4.80 1st 2½ hrs or part thereof; $1.80 for sub. ½ hr or part thereof.","sundayHoliday":"Same as Saturday"}
  },
  "pacificplaza": {
    carpark: "Pacific Plaza",
    category: "Orchard Area",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 1.5,
                  "unit": "$3 for 1st 2hrs; $1 for sub. ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 1.5,
                  "unit": "$3 for 1st 2hrs; $1 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 1.5,
                  "unit": "$3 for 1st 2hrs; $1 for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $1.50 per ½ hr","weekdays2":"Aft 6pm: $3 for 1st 2hrs; $1 for sub. ½ hr","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "palaisrenaissance": {
    carpark: "Palais Renaissance",
    category: "Orchard Area",
    baseRatePerHour: 2.8,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.8,
                  "unit": "$2.80 for 1st hr; $1.60 for sub. ½ hr"
            },
            {
                  "timeRange": "5pm-1am",
                  "rate": 3.8,
                  "unit": "$3.80 per entry"
            },
            {
                  "timeRange": "Aft 1am",
                  "rate": 1.5,
                  "unit": "$1.50 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.8,
                  "unit": "$2.80 for 1st hr; $1.60 for sub. ½ hr"
            },
            {
                  "timeRange": "5pm-1am",
                  "rate": 3.8,
                  "unit": "$3.80 per entry"
            },
            {
                  "timeRange": "Aft 1am",
                  "rate": 1.5,
                  "unit": "$1.50 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-1am",
                  "rate": 3.8,
                  "unit": "$3.80 per 4-hourly"
            },
            {
                  "timeRange": "1am-7am",
                  "rate": 1.5,
                  "unit": "$1.50 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $2.80 for 1st hr; $1.60 for sub. ½ hr","weekdays2":"5pm-1am: $3.80 per entry; Aft 1am: $1.50 per hr","saturday":"Same as wkdays","sundayHoliday":"7am-1am: $3.80 per 4-hourly; 1am-7am: $1.50 per hr"}
  },
  "paragonshoppingcentre": {
    carpark: "Paragon Shopping Centre",
    category: "Orchard Area",
    baseRatePerHour: 2.58,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "3am-5.59pm",
                  "rate": 2.58,
                  "unit": "$2.58 for 1st hr; $1.48 for sub. ½ hr. Daily $2 surcharge from 9am-9pm.  Additional Peak Hr Surcharge of $1.28 from 12pm to 2:30pm daily."
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.48,
                  "unit": "$3.48 per entry. Daily $2 surcharge from 9am-9pm."
            }
      ],
      "saturday": [
            {
                  "timeRange": "3am-5.59pm",
                  "rate": 2.58,
                  "unit": "$2.58 for 1st hr; $1.48 for sub. ½ hr. Daily $2 surcharge from 9am-9pm.  Additional Peak Hr Surcharge of $1.28 from 12pm to 2:30pm daily."
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.48,
                  "unit": "$3.48 per entry. Daily $2 surcharge from 9am-9pm."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "3am-5.59pm",
                  "rate": 1.74,
                  "unit": "$3.48 for 1st 2hrs; $0.05 for sub. mins"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.48,
                  "unit": "$3.48 per entry. Daily $2 surcharge from 9am-9pm.  Additional Peak Hr Surcharge of $1.28 from 12pm to 2:30pm daily"
            }
      ]
},
    rawRates: {"weekdays1":"3am-5.59pm: $2.58 for 1st hr; $1.48 for sub. ½ hr. Daily $2 surcharge from 9am-9pm.  Additional Peak Hr Surcharge of $1.28 from 12pm to 2:30pm daily.","weekdays2":"Aft 6pm: $3.48 per entry. Daily $2 surcharge from 9am-9pm.","saturday":"Same as wkdays","sundayHoliday":"3am-5.59pm: $3.48 for 1st 2hrs; $0.05 for sub. mins. Aft 6pm: $3.48 per entry. Daily $2 surcharge from 9am-9pm.  Additional Peak Hr Surcharge of $1.28 from 12pm to 2:30pm daily."}
  },
  "penangroadoffstreet": {
    carpark: "Penang Road Off-Street",
    category: "Orchard Area",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 2,
                  "unit": "$1.00 / 30 mins (Per Minute Charging)"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1,
                  "unit": "$0.50 / 30 mins (Per Minute Charging)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "0700-1700",
                  "rate": 1,
                  "unit": "$1.00 / per 30 mins. 1700-0700: $0.50 / per 30 mins (Per Minute Charging)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 1,
                  "unit": "$0.50 / 30 mins (Per Minute Charging)"
            }
      ]
},
    rawRates: {"weekdays1":"$1.00 / 30 mins (Per Minute Charging)","weekdays2":"$0.50 / 30 mins (Per Minute Charging)","saturday":"0700-1700 : $1.00 / per 30 mins. 1700-0700: $0.50 / per 30 mins (Per Minute Charging)","sundayHoliday":"$0.50 / 30 mins (Per Minute Charging)"}
  },
  "plazasingapura": {
    carpark: "Plaza Singapura",
    category: "Orchard Area",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Mon-Thu",
                  "rate": 1.07,
                  "unit": "$1.07 for 1st hr; $0.32 for sub. 15mins.  Fri & Eve of PH: $2.14 for 1st 2 hr; $0.32 for sub. 15mins."
            },
            {
                  "timeRange": "Mon-Thu",
                  "rate": 2.14,
                  "unit": "6pm-11.59pm: $2.14 per entry; Fri & Eve of PH: 6pm-2.59am: $2.14 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "3am-5.59pm",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2hrs; $0.32 for sub. 15mins"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "3am-5.59pm",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2hrs; $0.32 for sub. 15mins"
            },
            {
                  "timeRange": "6pm-11.59pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Thu:$1.07 for 1st hr; $0.32 for sub. 15mins.  Fri & Eve of PH: $2.14 for 1st 2 hr; $0.32 for sub. 15mins.","weekdays2":"Mon-Thu: 6pm-11.59pm: $2.14 per entry; Fri & Eve of PH: 6pm-2.59am: $2.14 per entry","saturday":"3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15mins; Aft 6pm: $2.14 per entry","sundayHoliday":"3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15mins. 6pm-11.59pm: $2.14 per entry"}
  },
  "scape": {
    carpark: "Scape",
    category: "Orchard Area",
    baseRatePerHour: 1.95,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-4.59pm",
                  "rate": 1.95,
                  "unit": "$1.95 per hr"
            },
            {
                  "timeRange": "5pm-6.59am",
                  "rate": 1.63,
                  "unit": "$4.90 for 1st 3hrs; $1.95 for sub. hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "All day",
                  "rate": 1.95,
                  "unit": "$1.95 per hr or part thereof."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-4.59pm",
                  "rate": 1.63,
                  "unit": "$1.95 per hr, 5pm-6.59am: $4.90 for 1st 3hrs; $1.95 for sub. hr."
            }
      ]
},
    rawRates: {"weekdays1":"7am-4.59pm: $1.95 per hr","weekdays2":"5pm-6.59am: $4.90 for 1st 3hrs; $1.95 for sub. hr","saturday":"All day: $1.95 per hr or part thereof.","sundayHoliday":"7am-4.59pm: $1.95 per hr, 5pm-6.59am: $4.90 for 1st 3hrs; $1.95 for sub. hr."}
  },
  "shawcentre": {
    carpark: "Shaw Centre",
    category: "Orchard Area",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "3.01am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "6.01pm-3.01am",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "3.01am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "6.01pm-3.01am",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "3.01am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "6.01pm-3.01am",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"3.01am-6pm: $2 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"6.01pm-3.01am: $4 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "shawhouse": {
    carpark: "Shaw House",
    category: "Orchard Area",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "3.01am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "6.01pm-3.01am",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "3.01am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "6.01pm-3.01am",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "3.01am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "6.01pm-3.01am",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"3.01am-6pm: $2 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"6.01pm-3.01am: $4 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "sheratontowerssingapore": {
    carpark: "Sheraton Towers Singapore",
    category: "Orchard Area",
    baseRatePerHour: 4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $2 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 4,
                  "unit": "$4 for 1st hr; $2 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $4 for 1st hr; $2 for sub. ½ hr","weekdays2":"Aft 6pm: $6 per entry","saturday":"Same as wkdays","sundayHoliday":"$6 per entry"}
  },
  "singaporeshoppingcentre": {
    carpark: "Singapore Shopping Centre",
    category: "Orchard Area",
    baseRatePerHour: 2.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-8pm",
                  "rate": 2.5,
                  "unit": "$2.50 for 1st hr; $1.25 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 8pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-8pm",
                  "rate": 2.5,
                  "unit": "$2.50 for 1st hr; $1.25 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 8pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-8pm",
                  "rate": 2.5,
                  "unit": "$2.50 for 1st hr; $1.25 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 8pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-8pm: $2.50 for 1st hr; $1.25 for sub. ½ hr","weekdays2":"Aft 8pm: $3 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "starhubcentre": {
    carpark: "Starhub Centre",
    category: "Orchard Area",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-7am the following day",
                  "rate": 2,
                  "unit": "$2.00 for 1st hr, $1.50 for next subq 1/2hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-7am the following day",
                  "rate": 2,
                  "unit": "$2.00 for 1st hr, $1.50 for next subq 1/2hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-7am the following day",
                  "rate": 2,
                  "unit": "$2.00 for 1st hr, $1.50 for next subq 1/2hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $2 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"6pm-7am the following day:$2.00 for 1st hr, $1.50 for next subq 1/2hr","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "tanglinmall": {
    carpark: "Tanglin Mall",
    category: "Orchard Area",
    baseRatePerHour: 2.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 2.4,
                  "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 2.4,
                  "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-5pm: $2.40 for 1st hr; $1.20 for sub. ½ hr","weekdays2":"Aft 5pm: $3.50 per entry","saturday":"Charges same as wkdays, but $3.50 per entry after 1pm","sundayHoliday":"$3.50 per entry"}
  },
  "tanglinshoppingcentre": {
    carpark: "Tanglin Shopping Centre",
    category: "Orchard Area",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5.59pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.75 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.6,
                  "unit": "$3.60 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5.59pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.75 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.6,
                  "unit": "$3.60 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.6,
                  "unit": "$3.60 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5.59pm: $3 for 1st hr; $1.75 for sub. ½ hr","weekdays2":"Aft 6pm: $3.60 per entry","saturday":"Same as wkdays","sundayHoliday":"$3.60 per entry"}
  },
  "tangs": {
    carpark: "Tangs",
    category: "Orchard Area",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr, $0.05/min"
            },
            {
                  "timeRange": "6pm-6am the following day",
                  "rate": 6,
                  "unit": "$6 Per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr, $0.05/min"
            },
            {
                  "timeRange": "6pm-6am the following day",
                  "rate": 6,
                  "unit": "$6 Per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr, $0.05/min"
            },
            {
                  "timeRange": "6pm-6am the following day",
                  "rate": 6,
                  "unit": "$6 Per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: $3 for 1st hr, $0.05/min","weekdays2":"6pm-6am the following day: $6 Per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "thecathay": {
    carpark: "The Cathay",
    category: "Orchard Area",
    baseRatePerHour: 2.8,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-9",
                  "rate": 2.8,
                  "unit": "59am: $1.40 for ½ hr"
            },
            {
                  "timeRange": "10am-9",
                  "rate": 1.4,
                  "unit": "59pm: $1.40 per hr"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-9",
                  "rate": 1.4,
                  "unit": "59pm: $1.40 per hr"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-9",
                  "rate": 1.4,
                  "unit": "59pm: $1.40 per hr"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-9:59am: $1.40 for ½ hr; 10am-9:59pm: $1.40 per hr","weekdays2":"Aft 10pm: $3 per entry","saturday":"8am-9:59pm: $1.40 per hr; Aft 10pm: $3 per entry","sundayHoliday":"Same as Saturday"}
  },
  "thecentrepoint": {
    carpark: "The Centrepoint",
    category: "Orchard Area",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 sub. hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 sub. hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1.50 for sub. hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $2 for 1st hr; $1.50 sub. ½ hr","weekdays2":"Aft 5pm: $2 for 1st hr; $1.50 sub. hr","saturday":"Same as wkdays","sundayHoliday":"$2 for 1st hr; $1.50 for sub. hr"}
  },
  "theheeren": {
    carpark: "The Heeren",
    category: "Orchard Area",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-11pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            },
            {
                  "timeRange": "8am-11pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-11pm",
                  "rate": 1.67,
                  "unit": "$5 for 1st 3 hrs and $1.50 for subseqent ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-11pm",
                  "rate": 1.67,
                  "unit": "$5 for 1st 3 hrs and $1.50 for subseqent ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"8am-11pm: $1.50 per ½ hr","weekdays2":"8am-11pm: $1.50 per ½ hr","saturday":"8am-11pm: $5 for 1st 3 hrs and $1.50 for subseqent ½ hr","sundayHoliday":"Same as Saturday"}
  },
  "tripleonesomerset": {
    carpark: "TripleOne Somerset",
    category: "Orchard Area",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5.59pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr (charges are before GST)"
            },
            {
                  "timeRange": "6pm-11.59am",
                  "rate": 1.8,
                  "unit": "$1.80 per hr"
            },
            {
                  "timeRange": "12am-6.59am",
                  "rate": 2,
                  "unit": "$0.50 sub 15 mins"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5.59pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $0.50 sub 15 mins"
            },
            {
                  "timeRange": "6pm-11.59am",
                  "rate": 1.8,
                  "unit": "$1.80 per hr"
            },
            {
                  "timeRange": "12am-6.59am",
                  "rate": 2,
                  "unit": "$0.50 sub 15 mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-11.59pm",
                  "rate": 1.8,
                  "unit": "$1.80 per hr"
            },
            {
                  "timeRange": "12am-6.59am",
                  "rate": 2,
                  "unit": "$0.50 sub 15 mins"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5.59pm: $1.50 per ½ hr (charges are before GST)","weekdays2":"6pm-11.59am: $1.80 per hr; 12am-6.59am:$0.50 sub 15 mins.","saturday":"7am-5.59pm: $2 for 1st hr; $0.50 sub 15 mins. 6pm-11.59am: $1.80 per hr; 12am-6.59am:$0.50 sub 15 mins.","sundayHoliday":"7am-11.59pm: $1.80 per hr; 12am-6.59am:$0.50 sub 15 mins."}
  },
  "wheelockplace": {
    carpark: "Wheelock Place",
    category: "Orchard Area",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 4.5,
                  "unit": "$4.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 4.5,
                  "unit": "$4.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 4.5,
                  "unit": "$4.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $3 for 1st hr; $1.50 for sub. ½ hr","weekdays2":"Aft 6pm: $4.50 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "winslandhouse": {
    carpark: "Winsland House",
    category: "Orchard Area",
    baseRatePerHour: 2.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 2.5,
                  "unit": "$2.50 for 1st hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "7pm-11pm",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            },
            {
                  "timeRange": "Aft 11pm",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 2.5,
                  "unit": "$2.50 for 1st hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "7pm-11pm",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            },
            {
                  "timeRange": "Aft 11pm",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-11pm",
                  "rate": 4.5,
                  "unit": "$4.50 per entry"
            },
            {
                  "timeRange": "Aft 11pm",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-7pm: $2.50 for 1st hr; $1.20 for sub. ½ hr","weekdays2":"7pm-11pm: $3.50 per entry. Aft 11pm: $3.50 per entry","saturday":"Same as wkdays","sundayHoliday":"7am-11pm: $4.50 per entry. Aft 11pm: $3.50 per entry"}
  },
  "wismaatria": {
    carpark: "Wisma Atria",
    category: "Orchard Area",
    baseRatePerHour: 2.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.4,
                  "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr (Lunch Hr Surcharge of additional $1.07 between 12pm - 2pm)"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.8,
                  "unit": "$3.60 for 1st 2hrs; $0.80 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.8,
                  "unit": "$3.60 for 1st 2hrs; $0.80 for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $2.40 for 1st hr; $1.20 for sub. ½ hr (Lunch Hr Surcharge of additional $1.07 between 12pm - 2pm)","weekdays2":"Aft 5pm: $3.50 per entry","saturday":"$3.60 for 1st 2hrs; $0.80 for sub. ½ hr","sundayHoliday":"Same as Saturday"}
  },
  "changichapelandmuseumthechangimuseum": {
    carpark: "Changi Chapel and Museum (The Changi Museum)",
    category: "Singapore Attractions",
    baseRatePerHour: 0,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Free daily"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Free daily"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Free daily"
            }
      ]
},
    rawRates: {"weekdays1":"Free daily","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "chinatownheritagecentre": {
    carpark: "Chinatown Heritage Centre",
    category: "Singapore Attractions",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "Parking is available at the public car park adjacent to the Buddha Tooth Relic Temple, URA centre and People's Park Centre."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "Parking is available at the public car park adjacent to the Buddha Tooth Relic Temple, URA centre and People's Park Centre."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "Parking is available at the public car park adjacent to the Buddha Tooth Relic Temple, URA centre and People's Park Centre."
            }
      ]
},
    rawRates: {"weekdays1":"Parking is available at the public car park adjacent to the Buddha Tooth Relic Temple, URA centre and People's Park Centre.","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "chinesegarden": {
    carpark: "Chinese Garden",
    category: "Singapore Attractions",
    baseRatePerHour: 0.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 0.5,
                  "unit": "Free 1st hr; $0.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 1,
                  "unit": "$0.50 per ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 0.5,
                  "unit": "Free 1st hr; $0.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 1,
                  "unit": "$0.50 per ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 0.5,
                  "unit": "Free 1st hr; $0.50 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 1,
                  "unit": "$0.50 per ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: Free 1st hr; $0.50 for sub. ½ hr","weekdays2":"Aft 6pm: $0.50 per ½ hr","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "hawparvilla": {
    carpark: "Haw Par Villa",
    category: "Singapore Attractions",
    baseRatePerHour: 5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily(9am-7pm)",
                  "rate": 5,
                  "unit": "$5 per entry (Car park closed after 7pm)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily(9am-7pm)",
                  "rate": 5,
                  "unit": "$5 per entry (Car park closed after 7pm)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily(9am-7pm)",
                  "rate": 5,
                  "unit": "$5 per entry (Car park closed after 7pm)"
            }
      ]
},
    rawRates: {"weekdays1":"Daily(9am-7pm): $5 per entry (Car park closed after 7pm)","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "haydairiesgoatfarm": {
    carpark: "Hay Dairies Goat Farm",
    category: "Singapore Attractions",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Free daily",
                  "rate": 1.2,
                  "unit": "9am-4pm"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Free daily",
                  "rate": 1.2,
                  "unit": "9am-4pm"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Free daily",
                  "rate": 1.2,
                  "unit": "9am-4pm"
            }
      ]
},
    rawRates: {"weekdays1":"Free daily: 9am-4pm","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "jurongbirdpark": {
    carpark: "Jurong Bird Park",
    category: "Singapore Attractions",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily(8am-5pm)",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily(8am-5pm)",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily(8am-5pm)",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"Daily(8am-5pm): $2 per entry","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "labradorsecrettunnellabradorpark": {
    carpark: "Labrador Secret Tunnel ( Labrador Park )",
    category: "Singapore Attractions",
    baseRatePerHour: 0,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Free daily"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Free daily"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Free daily"
            }
      ]
},
    rawRates: {"weekdays1":"Free daily","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "mandaiorchidgarden": {
    carpark: "Mandai Orchid Garden",
    category: "Singapore Attractions",
    baseRatePerHour: 0,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Free daily"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Free daily"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Free daily"
            }
      ]
},
    rawRates: {"weekdays1":"Free daily","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "memoriesatoldfordfactory": {
    carpark: "Memories at Old Ford Factory",
    category: "Singapore Attractions",
    baseRatePerHour: 0,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Daily free parking at Carparks C and D"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Daily free parking at Carparks C and D"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Daily free parking at Carparks C and D"
            }
      ]
},
    rawRates: {"weekdays1":"Daily free parking at Carparks C and D","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "mountfaberjewelbox": {
    carpark: "Mount Faber (Jewel Box)",
    category: "Singapore Attractions",
    baseRatePerHour: 5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 5,
                  "unit": "Limited public parking spaces availiable. Valet parking at The Jewel Box is available at $5 per car"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 5,
                  "unit": "Limited public parking spaces availiable. Valet parking at The Jewel Box is available at $5 per car"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 5,
                  "unit": "Limited public parking spaces availiable. Valet parking at The Jewel Box is available at $5 per car"
            }
      ]
},
    rawRates: {"weekdays1":"Limited public parking spaces availiable. Valet parking at The Jewel Box is available at $5 per car","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "nationalmuseumofsingapore": {
    carpark: "National Museum of Singapore",
    category: "Singapore Attractions",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "Limited parking facility is available at the National Museum. Other parking facilities are available at YMCA, Singapore Management University and Fort Canning Park"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "Limited parking facility is available at the National Museum. Other parking facilities are available at YMCA, Singapore Management University and Fort Canning Park"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "Limited parking facility is available at the National Museum. Other parking facilities are available at YMCA, Singapore Management University and Fort Canning Park"
            }
      ]
},
    rawRates: {"weekdays1":"Limited parking facility is available at the National Museum. Other parking facilities are available at YMCA, Singapore Management University and Fort Canning Park","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "reflectionsatbukitchandu": {
    carpark: "Reflections at Bukit Chandu",
    category: "Singapore Attractions",
    baseRatePerHour: 0,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Daily free parking at Carparks C and D of Pepys Road"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Daily free parking at Carparks C and D of Pepys Road"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 0,
                  "unit": "Daily free parking at Carparks C and D of Pepys Road"
            }
      ]
},
    rawRates: {"weekdays1":"Daily free parking at Carparks C and D of Pepys Road","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "resortsworldsentosauniversalstudiossingaporerwsb1carpark": {
    carpark: "Resorts World Sentosa - Universal Studios Singapore (RWS B1 car park)",
    category: "Singapore Attractions",
    baseRatePerHour: 7,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Mon-Thu",
                  "rate": 7,
                  "unit": "7am-7pm: $7 for 1st hr; $1 for sub. ½ hr or part thereof. (Max: $28 per 24 hrs)"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Fri/Sat-Sun/PH",
                  "rate": 8,
                  "unit": "7am-7pm: $8 for 1st hr; $2 for sub. ½ hr or part thereof"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 8,
                  "unit": "$8 per entry (Max: $28 per 24 hrs)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Fri/Sat-Sun/PH",
                  "rate": 8,
                  "unit": "7am-7pm: $8 for 1st hr; $2 for sub. ½ hr or part thereof"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 8,
                  "unit": "$8 per entry (Max: $28 per 24 hrs)"
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Thu: 7am-7pm: $7 for 1st hr; $1 for sub. ½ hr or part thereof. (Max: $28 per 24 hrs)","weekdays2":"Aft 7pm: $6 per entry","saturday":"Fri/Sat-Sun/PH: 7am-7pm: $8 for 1st hr; $2 for sub. ½ hr or part thereof.  Aft 7pm: $8 per entry (Max: $28 per 24 hrs)","sundayHoliday":"Same as Saturday"}
  },
  "royalselangorpewtermuseumparkatclarkequay": {
    carpark: "Royal Selangor Pewter Museum ( Park at Clarke Quay)",
    category: "Singapore Attractions",
    baseRatePerHour: 2.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 2.2,
                  "unit": "$2.20 for 1st hr; $1.10 for sub. ½ hr (Car park at Clarke Quay)"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 2.2,
                  "unit": "$2.20 for 1st hr; $1.10 for sub. ½ hr (Car park at Clarke Quay)"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"$2.20 for 1st hr; $1.10 for sub. ½ hr (Car park at Clarke Quay)","weekdays2":"Aft 5pm: $2.50 per entry","saturday":"Same as wkdays","sundayHoliday":"$2.50 per entry"}
  },
  "sentosabeachandimbiahcarpark": {
    carpark: "Sentosa (Beach and Imbiah car park)",
    category: "Singapore Attractions",
    baseRatePerHour: 0.75,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 0.75,
                  "unit": "Island Entry: $6 per car*; Parking - $3 for 1st 4hrs; $1 for sub. hr. Except 12pm-2pm: Island Entry $2 per car*, free parking. *Rates covers all passengers in car"
            },
            {
                  "timeRange": "5.01pm-6.59am",
                  "rate": 1,
                  "unit": "Island entry: $2 per car*; parking - $1 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.25,
                  "unit": "Island entry: $7 per car*; Parking - $5 for 1st 4 hrs; $2 for sub. hr"
            },
            {
                  "timeRange": "5.01pm-6.59am",
                  "rate": 2,
                  "unit": "$3 per car*; parking - $2 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.25,
                  "unit": "Island entry: $7 per car*; Parking - $5 for 1st 4 hrs; $2 for sub. hr"
            },
            {
                  "timeRange": "5.01pm-6.59am",
                  "rate": 2,
                  "unit": "$3 per car*; parking - $2 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: Island Entry: $6 per car*; Parking - $3 for 1st 4hrs; $1 for sub. hr. Except 12pm-2pm: Island Entry $2 per car*, free parking. *Rates covers all passengers in car","weekdays2":"5.01pm-6.59am: Island entry: $2 per car*; parking - $1 per entry","saturday":"7am-5pm: Island entry: $7 per car*; Parking - $5 for 1st 4 hrs; $2 for sub. hr; 5.01pm-6.59am: $3 per car*; parking - $2 per entry","sundayHoliday":"Same as Saturday"}
  },
  "sentosatanjongpalawancarpark": {
    carpark: "Sentosa (Tanjong & Palawan car park)",
    category: "Singapore Attractions",
    baseRatePerHour: 0.38,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 0.38,
                  "unit": "Island Entry: $6 per car*; Parking - $3 for 1st 8hrs; $1 for sub. hr. Except 12pm-2pm: Island Entry $2 per car*, free parking. *Rates covers all passengers in car"
            },
            {
                  "timeRange": "5.01pm-6.59am",
                  "rate": 1,
                  "unit": "Island entry: $2 per car*; parking - $1 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 0.38,
                  "unit": "Island entry: $7 per car*; Parking - $3 for 1st 8hrs; $1 for sub. hr"
            },
            {
                  "timeRange": "5.01pm-6.59am",
                  "rate": 1,
                  "unit": "$3 per car*; parking - $1 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 0.38,
                  "unit": "Island entry: $7 per car*; Parking - $3 for 1st 8hrs; $1 for sub. hr"
            },
            {
                  "timeRange": "5.01pm-6.59am",
                  "rate": 1,
                  "unit": "$3 per car*; parking - $1 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: Island Entry: $6 per car*; Parking - $3 for 1st 8hrs; $1 for sub. hr. Except 12pm-2pm: Island Entry $2 per car*, free parking. *Rates covers all passengers in car","weekdays2":"5.01pm-6.59am: Island entry: $2 per car*; parking - $1 per entry","saturday":"7am-5pm: Island entry: $7 per car*; Parking - $3 for 1st 8hrs; $1 for sub. hr; 5.01pm-6.59am: $3 per car*; parking - $1 per entry","sundayHoliday":"Same as Saturday"}
  },
  "singaporeartmuseum": {
    carpark: "Singapore Art Museum",
    category: "Singapore Attractions",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "Parking at SAM reserved for cars with NHB parking labels.  Nearest Carparks available at Waterloo Street, Queen Street, NTUC Income Centre, Plaza by the Park and Singapore Management University."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "Parking at SAM reserved for cars with NHB parking labels.  Nearest Carparks available at Waterloo Street, Queen Street, NTUC Income Centre, Plaza by the Park and Singapore Management University."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "Parking at SAM reserved for cars with NHB parking labels.  Nearest Carparks available at Waterloo Street, Queen Street, NTUC Income Centre, Plaza by the Park and Singapore Management University."
            }
      ]
},
    rawRates: {"weekdays1":"Parking at SAM reserved for cars with NHB parking labels.  Nearest Carparks available at Waterloo Street, Queen Street, NTUC Income Centre, Plaza by the Park and Singapore Management University.","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "singaporebotanicgardens": {
    carpark: "Singapore Botanic Gardens",
    category: "Singapore Attractions",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-10.30pm",
                  "rate": 1.2,
                  "unit": "$0.02 per min (8am-9am: $1 peak hr charge for all passing vehicles that enter from Kheam Hock Road and exit at Evans/Cluny Road) - Closed from 12am-5am daily"
            },
            {
                  "timeRange": "7pm-10.30pm",
                  "rate": 2,
                  "unit": "$2 per maximum cap"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-10.30pm",
                  "rate": 1.2,
                  "unit": "$0.02 per min (8am-9am: $1 peak hr charge for all passing vehicles that enter from Kheam Hock Road and exit at Evans/Cluny Road) - Closed from 12am-5am daily"
            },
            {
                  "timeRange": "7pm-10.30pm",
                  "rate": 2,
                  "unit": "$2 per maximum cap"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-10.30pm",
                  "rate": 1.2,
                  "unit": "$0.02 per min (8am-9am: $1 peak hr charge for all passing vehicles that enter from Kheam Hock Road and exit at Evans/Cluny Road) - Closed from 12am-5am daily"
            },
            {
                  "timeRange": "7pm-10.30pm",
                  "rate": 2,
                  "unit": "$2 per maximum cap"
            }
      ]
},
    rawRates: {"weekdays1":"7am-10.30pm: $0.02 per min (8am-9am: $1 peak hr charge for all passing vehicles that enter from Kheam Hock Road and exit at Evans/Cluny Road) - Closed from 12am-5am daily","weekdays2":"7pm-10.30pm: $2 per maximum cap","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "singaporecitygalleryuracentre": {
    carpark: "Singapore City Gallery (URA centre)",
    category: "Singapore Attractions",
    baseRatePerHour: 2.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-10pm",
                  "rate": 2.2,
                  "unit": "$1.10 per ½ hr (per min charging) Public parking is also available at the Erskine Road Off-Street Carpark next to Maxwell Road Food Centre."
            },
            {
                  "timeRange": "10pm-6am",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-10pm",
                  "rate": 2.2,
                  "unit": "$1.10 per ½ hr (per min charging) Public parking is also available at the Erskine Road Off-Street Carpark next to Maxwell Road Food Centre."
            },
            {
                  "timeRange": "10pm-6am",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-10pm",
                  "rate": 1.1,
                  "unit": "$0.55 per ½ hr (per min charging)"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-10pm: $1.10 per ½ hr (per min charging) Public parking is also available at the Erskine Road Off-Street Carpark next to Maxwell Road Food Centre.","weekdays2":"10pm-6am: $3 per entry","saturday":"Same as wkdays","sundayHoliday":"6am-10pm: $0.55 per ½ hr (per min charging); Aft 10pm: $3 per entry"}
  },
  "singaporeflyer": {
    carpark: "Singapore Flyer",
    category: "Singapore Attractions",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 2,
                  "unit": "$2 per hr or part thereof. Free Lunchtime Parking from 12pm to 2pm (only valid for vehicles entering the multi-storey carpark after 12pm)."
            },
            {
                  "timeRange": "6pm-6am",
                  "rate": 2,
                  "unit": "$2 per entry."
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-12midnight",
                  "rate": 2,
                  "unit": "$2 per hr or part thereof. 12midnight- 6am: $2 per entry."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-12midnight",
                  "rate": 2,
                  "unit": "$2 per hr or part thereof. 12midnight- 6am: $2 per entry."
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: $2 per hr or part thereof. Free Lunchtime Parking from 12pm to 2pm (only valid for vehicles entering the multi-storey carpark after 12pm).","weekdays2":"6pm-6am:$2 per entry.","saturday":"6am-12midnight: $2 per hr or part thereof. 12midnight- 6am: $2 per entry.","sundayHoliday":"Same as Saturday"}
  },
  "singaporemintcoingallery": {
    carpark: "Singapore Mint Coin Gallery",
    category: "Singapore Attractions",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Wkdays free",
                  "rate": 1.2,
                  "unit": "8.30am-4.30pm"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Wkdays free",
                  "rate": 1.2,
                  "unit": "8.30am-4.30pm"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Wkdays free",
                  "rate": 1.2,
                  "unit": "8.30am-4.30pm"
            }
      ]
},
    rawRates: {"weekdays1":"Wkdays free: 8.30am-4.30pm","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "singaporephilatelicmuseum": {
    carpark: "Singapore Philatelic Museum",
    category: "Singapore Attractions",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "URA coupon parking. Nearest car park at Armenian Street between Bible House and Peranakan Museum"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "URA coupon parking. Nearest car park at Armenian Street between Bible House and Peranakan Museum"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "URA coupon parking. Nearest car park at Armenian Street between Bible House and Peranakan Museum"
            }
      ]
},
    rawRates: {"weekdays1":"URA coupon parking. Nearest car park at Armenian Street between Bible House and Peranakan Museum","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "singaporesciencecentresingaporediscoverycentresnowcity": {
    carpark: "Singapore Science centre/Singapore Discovery Centre / Snow City",
    category: "Singapore Attractions",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "$0.50 per ½ hour"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "$0.50 per ½ hour"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1,
                  "unit": "$0.50 per ½ hour"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $0.50 per ½ hour","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "singaporeturfclubstc": {
    carpark: "Singapore Turf Club (STC)",
    category: "Singapore Attractions",
    baseRatePerHour: 5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $5 per entry","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "singaporezoologicalgardensnightsafari": {
    carpark: "Singapore Zoological gardens/Night Safari",
    category: "Singapore Attractions",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $2 sub. hr or part thereof. 4th hour onwards: $8.00 flat rate (maximum)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $2 sub. hr or part thereof. 4th hour onwards: $8.00 flat rate (maximum)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 3,
                  "unit": "$3 for 1st hr; $2 sub. hr or part thereof. 4th hour onwards: $8.00 flat rate (maximum)"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $3 for 1st hr; $2 sub. hr or part thereof. 4th hour onwards: $8.00 flat rate (maximum)","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "sungeibulohwetlandreserve": {
    carpark: "Sungei Buloh Wetland Reserve",
    category: "Singapore Attractions",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily free",
                  "rate": 1.2,
                  "unit": "7am-7pm"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily free",
                  "rate": 1.2,
                  "unit": "7am-7pm"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily free",
                  "rate": 1.2,
                  "unit": "7am-7pm"
            }
      ]
},
    rawRates: {"weekdays1":"Daily free: 7am-7pm","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "theartshouseparkatnewparliamenthouse": {
    carpark: "The Arts House (Park at New Parliament House)",
    category: "Singapore Attractions",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "Available at current Parliament House, The Adelphi and the road side along Empress Place"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "Available at current Parliament House, The Adelphi and the road side along Empress Place"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "Available at current Parliament House, The Adelphi and the road side along Empress Place"
            }
      ]
},
    rawRates: {"weekdays1":"Available at current Parliament House, The Adelphi and the road side along Empress Place","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "thebattleboxparkatfortcanning": {
    carpark: "The Battle Box ( Park at Fort Canning",
    category: "Singapore Attractions",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "URA coupon parking"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "URA coupon parking"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "URA coupon parking"
            }
      ]
},
    rawRates: {"weekdays1":"URA coupon parking","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "underwaterworldsingapore": {
    carpark: "Underwater World Singapore",
    category: "Singapore Attractions",
    baseRatePerHour: 2.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Mon-Thu",
                  "rate": 2.5,
                  "unit": "7am-11.59pm: $7.50 for 1st 3 hrs; $5 per hr or part thereof"
            },
            {
                  "timeRange": "Mon-Thu",
                  "rate": 20,
                  "unit": "12am-06.59am: $20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Fri-Sun incl. PH & Sch Holidays",
                  "rate": 3,
                  "unit": "7am-11.59pm: $9 for 1st 3 hrs; $5 per hr or part thereof. 12am-06.59am: $20 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Fri-Sun incl. PH & Sch Holidays",
                  "rate": 3,
                  "unit": "7am-11.59pm: $9 for 1st 3 hrs; $5 per hr or part thereof. 12am-06.59am: $20 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Thu: 7am-11.59pm: $7.50 for 1st 3 hrs; $5 per hr or part thereof","weekdays2":"Mon-Thu: 12am-06.59am: $20 per entry","saturday":"Fri-Sun incl. PH & Sch Holidays:7am-11.59pm: $9 for 1st 3 hrs; $5 per hr or part thereof. 12am-06.59am: $20 per entry","sundayHoliday":"Fri-Sun incl. PH & Sch Holidays:7am-11.59pm: $9 for 1st 3 hrs; $5 per hr or part thereof. 12am-06.59am: $20 per entry"}
  },
  "10raeburnpark": {
    carpark: "10 Raeburn Park",
    category: "South & CBD",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.07,
                  "unit": "$1.07 per hr"
            },
            {
                  "timeRange": "1700-2300",
                  "rate": 1.07,
                  "unit": "- $2.14 per entry, 2300-0800: $1.07 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "0800-1700",
                  "rate": 1.07,
                  "unit": "$1.07 per hr, 1700-2300: $2.14 per entry, 2300-0800: $1.07 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 1.07,
                  "unit": "$1.07 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"$1.07 per hr","weekdays2":"1700-2300:- $2.14 per entry, 2300-0800: $1.07 per hr","saturday":"0800-1700: $1.07 per hr, 1700-2300: $2.14 per entry, 2300-0800: $1.07 per hr","sundayHoliday":"$1.07 per hr"}
  },
  "1557keppelroad": {
    carpark: "1557 Keppel Road",
    category: "South & CBD",
    baseRatePerHour: 1.29,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "0700-1900",
                  "rate": 1.29,
                  "unit": "$1.29 for 1st hr, $0.43 /15 mins thereafter"
            },
            {
                  "timeRange": "1900-0700",
                  "rate": 2.14,
                  "unit": "$2.14 /Entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "0700-1300",
                  "rate": 1.29,
                  "unit": "-$1.29 for 1st hr, $0.43 per 15 mins thereafter"
            },
            {
                  "timeRange": "1300-0700",
                  "rate": 2.14,
                  "unit": "$2.14 /Entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.14,
                  "unit": "$2.14 / Entry"
            }
      ]
},
    rawRates: {"weekdays1":"0700-1900:$1.29 for 1st hr, $0.43 /15 mins thereafter","weekdays2":"1900-0700: $2.14 /Entry","saturday":"0700-1300:-$1.29 for 1st hr, $0.43 per 15 mins thereafter; 1300-0700: $2.14 /Entry","sundayHoliday":"$2.14 / Entry"}
  },
  "34boonleatterrace": {
    carpark: "34 Boon Leat Terrace",
    category: "South & CBD",
    baseRatePerHour: 1.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.6,
                  "unit": "$0.80 / 30 mins"
            },
            {
                  "timeRange": "1800-2200",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            },
            {
                  "timeRange": "2200-0700",
                  "rate": 4,
                  "unit": "$4.00 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "0700-1300",
                  "rate": 1.6,
                  "unit": "$0.80 /30 mins"
            },
            {
                  "timeRange": "1300-0700",
                  "rate": 4,
                  "unit": "$4.00 /entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 4,
                  "unit": "$4.00 / entry"
            }
      ]
},
    rawRates: {"weekdays1":"$0.80 / 30 mins","weekdays2":"1800-2200: $2.50 per entry. 2200-0700: $4.00 per entry","saturday":"0700-1300: $0.80 /30 mins. 1300-0700: $4.00 /entry","sundayHoliday":"$4.00 / entry"}
  },
  "798upperbukittimahroad": {
    carpark: "798 Upper Bukit Timah Road",
    category: "South & CBD",
    baseRatePerHour: 4.28,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "0000-0700",
                  "rate": 4.28,
                  "unit": "$2.14 /30 mins"
            },
            {
                  "timeRange": "0700-0000",
                  "rate": 2.14,
                  "unit": "$1.07 /30 mins"
            }
      ],
      "saturday": [
            {
                  "timeRange": "0000-0700",
                  "rate": 4.28,
                  "unit": "$2.14 /30 mins"
            },
            {
                  "timeRange": "0700-0000",
                  "rate": 2.14,
                  "unit": "$1.07 /30 mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "0000-0700",
                  "rate": 4.28,
                  "unit": "$2.14 /30 mins"
            },
            {
                  "timeRange": "0700-0000",
                  "rate": 2.14,
                  "unit": "$1.07 /30 mins"
            }
      ]
},
    rawRates: {"weekdays1":"0000-0700: $2.14 /30 mins. 0700-0000: $1.07 /30 mins.","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "8shentonway": {
    carpark: "8 Shenton Way",
    category: "South & CBD",
    baseRatePerHour: 4.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 4.6,
                  "unit": "$2.30 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.8,
                  "unit": "$2.80 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 4.6,
                  "unit": "$2.30 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.8,
                  "unit": "$2.80 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.8,
                  "unit": "$2.80 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $2.30 per ½ hr","weekdays2":"Aft 6pm: $2.80 per entry","saturday":"Charges same as wkdays but $2.80 per entry after 1pm","sundayHoliday":"$2.80 per entry"}
  },
  "asiasquare": {
    carpark: "Asia Square",
    category: "South & CBD",
    baseRatePerHour: 4.8,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5.59pm",
                  "rate": 4.8,
                  "unit": "$0.08 per min"
            },
            {
                  "timeRange": "6pm onwards",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6.59am (next day)",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6.59am (next day)",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5.59pm: $0.08 per min","weekdays2":"6pm onwards: $3 per entry","saturday":"7am-6.59am (next day): $3 per entry","sundayHoliday":"Same as Saturday"}
  },
  "bangkokbankbuilding": {
    carpark: "Bangkok Bank Building",
    category: "South & CBD",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 2,
                  "unit": "$2 for 1st ½ hr; $4 for sub. hr"
            },
            {
                  "timeRange": "7am-7pm",
                  "rate": 2,
                  "unit": "$2 for 1st ½ hr; $4 for sub. hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 2,
                  "unit": "$2 for 1st ½ hr; $4 for sub. hr"
            },
            {
                  "timeRange": "7am-7pm",
                  "rate": 2,
                  "unit": "$2 for 1st ½ hr; $4 for sub. hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 2,
                  "unit": "$2 for 1st ½ hr; $4 for sub. hr"
            },
            {
                  "timeRange": "7am-7pm",
                  "rate": 2,
                  "unit": "$2 for 1st ½ hr; $4 for sub. hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-7pm: $2 for 1st ½ hr; $4 for sub. hr","weekdays2":"7am-7pm: $2 for 1st ½ hr; $4 for sub. hr","saturday":"Charges same as wkdays but Closed at 3pm","sundayHoliday":"Closed"}
  },
  "bayfrontavenue": {
    carpark: "Bayfront Avenue",
    category: "South & CBD",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3,
                  "unit": "$3 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 1.2,
                  "unit": "$1.20 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-1pm",
                  "rate": 3,
                  "unit": "$3 per hr"
            },
            {
                  "timeRange": "Aft 1pm",
                  "rate": 1.2,
                  "unit": "$1.20 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 1.2,
                  "unit": "$1.20 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $3 per hr","weekdays2":"Aft 6pm: $1.20 per hr","saturday":"7am-1pm: $3 per hr. Aft 1pm: $1.20 per hr","sundayHoliday":"$1.20 per hr"}
  },
  "bugisjunction": {
    carpark: "Bugis Junction",
    category: "South & CBD",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.07,
                  "unit": "$1.07 for 1st hr; $0.37 for sub. 10mins"
            },
            {
                  "timeRange": "Mon-Thu",
                  "rate": 1.25,
                  "unit": "Aft 5pm: $2.50 per entry. Fri: $2.50 for 1st 2hrs; $0.37 for sub. 10 mins"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.25,
                  "unit": "$2.50 for 1st 2hrs; $0.37 for sub. 10 mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.25,
                  "unit": "$2.50 for 1st 2hrs; $0.37 for sub. 10 mins"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1.07 for 1st hr; $0.37 for sub. 10mins","weekdays2":"Mon-Thu: Aft 5pm: $2.50 per entry. Fri: $2.50 for 1st 2hrs; $0.37 for sub. 10 mins","saturday":"$2.50 for 1st 2hrs; $0.37 for sub. 10 mins","sundayHoliday":"Same as Saturday"}
  },
  "burlingtonsquare": {
    carpark: "Burlington Square",
    category: "South & CBD",
    baseRatePerHour: 2.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.4,
                  "unit": "$0.04 per min"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 3.6,
                  "unit": "$0.06 per min"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 3.6,
                  "unit": "$0.06 per min"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $0.04 per min","weekdays2":"Aft 5pm: $2.20 per entry","saturday":"$0.06 per min","sundayHoliday":"Same as Saturday"}
  },
  "capitacommercialtrustcct": {
    carpark: "CapitaCommercial Trust (CCT)",
    category: "South & CBD",
    baseRatePerHour: 4.1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 4.1,
                  "unit": "$2.05 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.1,
                  "unit": "$3.10 per ½"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 4.1,
                  "unit": "$2.05 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.1,
                  "unit": "$3.10 per ½"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 6.2,
                  "unit": "$3.10 per ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"$2.05 per ½ hr","weekdays2":"Aft 5pm: $3.10 per ½","saturday":"Charges same as wkdays but $3.10 per ½ hr after 1pm","sundayHoliday":"$3.10 per ½ hr"}
  },
  "capitalsquare": {
    carpark: "Capital Square",
    category: "South & CBD",
    baseRatePerHour: 4.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 4.4,
                  "unit": "$2.20 for ½ hr or part thereof."
            },
            {
                  "timeRange": "6pm-8am",
                  "rate": 3.2,
                  "unit": "$3.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 4.4,
                  "unit": "$2.20 for ½ hr or part thereof."
            },
            {
                  "timeRange": "6pm-8am",
                  "rate": 3.2,
                  "unit": "$3.20 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.2,
                  "unit": "$3.20 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $2.20 for ½ hr or part thereof.","weekdays2":"6pm-8am: $3.20 per entry","saturday":"Charges same as wkdays but $3.20 per entry after 1pm","sundayHoliday":"$3.20 per entry"}
  },
  "capitaltower": {
    carpark: "Capital Tower",
    category: "South & CBD",
    baseRatePerHour: 5.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 5.6,
                  "unit": "$2.80 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.2,
                  "unit": "$3.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 5.6,
                  "unit": "$2.80 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.2,
                  "unit": "$3.20 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.2,
                  "unit": "$3.20 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $2.80 per ½ hr","weekdays2":"Aft 6pm: $3.20 per entry","saturday":"Charges same as wkdays but $3.20 per entry after 1pm","sundayHoliday":"$3.20 per entry"}
  },
  "centralmall": {
    carpark: "Central Mall",
    category: "South & CBD",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 2,
                  "unit": "$2.00 for 1st hr; $1.00 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3.00 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 2,
                  "unit": "$2.00 for 1st hr; $1.00 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3.00 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3.00 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-5pm: $2.00 for 1st hr; $1.00 for sub. ½ hr","weekdays2":"Aft 5pm: $3.00 per entry","saturday":"Same as wkdays","sundayHoliday":"$3.00 per entry"}
  },
  "central": {
    carpark: "Central ©",
    category: "South & CBD",
    baseRatePerHour: 2.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 2.2,
                  "unit": "$2.20 for 1st hr; $1.10 for sub. ½ hr or part thereof"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 2.2,
                  "unit": "$2.20 for 1st hr; $1.10 for sub. ½ hr or part thereof"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-5pm: $2.20 for 1st hr; $1.10 for sub. ½ hr or part thereof","weekdays2":"Aft 5pm: $3.50 per entry","saturday":"Same as wkdays","sundayHoliday":"$3.50 per entry"}
  },
  "chijmes": {
    carpark: "Chijmes",
    category: "South & CBD",
    baseRatePerHour: 2.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5.59am",
                  "rate": 2.2,
                  "unit": "$2.20 for 1st hr; $0.55 for sub. 15 mins."
            },
            {
                  "timeRange": "6pm-5.59am",
                  "rate": 4,
                  "unit": "(Valet Parking Only) Valet Charge $4 per entry, Carpark charges: $4 per hr."
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5.59am",
                  "rate": 2.2,
                  "unit": "$2.20 for 1st hr; $0.55 for sub. 15 mins."
            },
            {
                  "timeRange": "6pm-5.59am",
                  "rate": 4,
                  "unit": "(Valet Parking Only) Valet Charge $4 per entry, Carpark charges: $4 per hr."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-5.59am",
                  "rate": 2.2,
                  "unit": "$2.20 for 1st hr; $0.55 for sub. 15 mins."
            },
            {
                  "timeRange": "6pm-5.59am",
                  "rate": 4,
                  "unit": "(Valet Parking Only) Valet Charge $4 per entry, Carpark charges: $4 per hr."
            }
      ]
},
    rawRates: {"weekdays1":"8am-5.59am :$2.20 for 1st hr; $0.55 for sub. 15 mins.","weekdays2":"6pm-5.59am: (Valet Parking Only) Valet Charge $4 per entry, Carpark charges: $4 per hr.","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "chinasquarecentral": {
    carpark: "China Square Central",
    category: "South & CBD",
    baseRatePerHour: 3.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 3.6,
                  "unit": "$1.80 per ½ hr or part thereof."
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3,
                  "unit": "$3 per entry.  (12 midnight-6am: Closed)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 3,
                  "unit": "$3 per entry. (12 midnight-6am: Closed)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 3,
                  "unit": "$3 per entry. (12 midnight-6am: Closed)"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $1.80 per ½ hr or part thereof.","weekdays2":"Aft 6pm: $3 per entry.  (12 midnight-6am: Closed)","saturday":"$3 per entry. (12 midnight-6am: Closed)","sundayHoliday":"Same as Saturday"}
  },
  "chinatownpoint": {
    carpark: "Chinatown Point",
    category: "South & CBD",
    baseRatePerHour: 2.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.4,
                  "unit": "$1.20 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.4,
                  "unit": "$1.20 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.20 per ½ hr","weekdays2":"Aft 5pm: $2.50 per entry","saturday":"Same as wkdays","sundayHoliday":"$2.50 per entry"}
  },
  "clarkequay": {
    carpark: "Clarke Quay",
    category: "South & CBD",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-11.59am; 3pm-4.59pm",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2hrs; $1.07 for sub. hr (Free parking between 12pm-2.59pm)"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.14,
                  "unit": "$2.14 for 1st hr; $1.07 for sub. hr (Cap at $5.35)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-4.59pm",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2hrs; $1.07 for sub. hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.14,
                  "unit": "$2.14 for 1st hr; $1.07 for sub. hr (Cap at $5.35)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.68,
                  "unit": "$2.68 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-11.59am; 3pm-4.59pm: $2.14 for 1st 2hrs; $1.07 for sub. hr (Free parking between 12pm-2.59pm)","weekdays2":"Aft 5pm: $2.14 for 1st hr; $1.07 for sub. hr (Cap at $5.35)","saturday":"7am-4.59pm: $2.14 for 1st 2hrs; $1.07 for sub. hr; Aft 5pm: $2.14 for 1st hr; $1.07 for sub. hr (Cap at $5.35)","sundayHoliday":"$2.68 per entry"}
  },
  "cliffordcentre": {
    carpark: "Clifford Centre",
    category: "South & CBD",
    baseRatePerHour: 5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 5,
                  "unit": "$5 per hr  (Car park closed at 11pm daily from Mon-Sat)"
            },
            {
                  "timeRange": "5pm-11pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 5,
                  "unit": "$5 per hr  (Car park closed at 11pm daily from Mon-Sat)"
            },
            {
                  "timeRange": "5pm-11pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 5,
                  "unit": "$5 per hr  (Car park closed at 11pm daily from Mon-Sat)"
            },
            {
                  "timeRange": "5pm-11pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-5pm: $5 per hr  (Car park closed at 11pm daily from Mon-Sat)","weekdays2":"5pm-11pm: $3 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "conradcentennialsingapore": {
    carpark: "Conrad Centennial Singapore",
    category: "South & CBD",
    baseRatePerHour: 3.3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3.3,
                  "unit": "$3.30 for 1st hr; $1.10 for sub.½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $3.30 for 1st hr; $1.10 for sub.½ hr","weekdays2":"Aft 6pm: $2.20 per entry","saturday":"$2.20 for 1st 2hrs; $1.10 for sub. hr","sundayHoliday":"Same as Saturday"}
  },
  "cpfbuildingrobinsonroad": {
    carpark: "CPF Building Robinson Road",
    category: "South & CBD",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 5,
                  "unit": "Closed at 5pm. Cars remaining from 5pm onward will be charged an additional flat rate of $5"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-1pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr. Closed at 1:00pm. Cars remaining from 1:00pm onward will be charged an additional flat rate of $5"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-1pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr. Closed at 1:00pm. Cars remaining from 1:00pm onward will be charged an additional flat rate of $5"
            }
      ]
},
    rawRates: {"weekdays1":"6am-5pm: $1.50 per ½ hr","weekdays2":"Closed at 5pm. Cars remaining from 5pm onward will be charged an additional flat rate of $5","saturday":"6am-1pm : $1.50 per ½ hr. Closed at 1:00pm. Cars remaining from 1:00pm onward will be charged an additional flat rate of $5","sundayHoliday":"Closed"}
  },
  "dbsbuilding": {
    carpark: "DBS Building",
    category: "South & CBD",
    baseRatePerHour: 5.14,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-7pm",
                  "rate": 5.14,
                  "unit": "$2.57 per ½ hr"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 2.57,
                  "unit": "$2.57 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-1pm",
                  "rate": 5.14,
                  "unit": "$2.57 per ½ hr"
            },
            {
                  "timeRange": "aft 1pm",
                  "rate": 2.57,
                  "unit": "$2.57 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.57,
                  "unit": "$2.57 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-7pm: $2.57 per ½ hr","weekdays2":"Aft 7pm: $2.57 per entry","saturday":"6am-1pm: $2.57 per ½ hr; aft 1pm: $2.57 per entry","sundayHoliday":"$2.57 per entry"}
  },
  "fareastsquare": {
    carpark: "Far East Square",
    category: "South & CBD",
    baseRatePerHour: 4.28,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-4.59pm",
                  "rate": 4.28,
                  "unit": "$2.14 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-4.59pm: $2.14 per ½ hr","weekdays2":"Aft 5pm: $3.21 per entry","saturday":"$3.21 per entry","sundayHoliday":"$3.21 per entry"}
  },
  "fareasternbankbuilding": {
    carpark: "Far Eastern Bank Building",
    category: "South & CBD",
    baseRatePerHour: 4.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 4.6,
                  "unit": "$2.30 per ½ hr"
            },
            {
                  "timeRange": "Aft 6.30pm",
                  "rate": 3.2,
                  "unit": "$3.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 4.6,
                  "unit": "$2.30 per ½ hr"
            },
            {
                  "timeRange": "Aft 6.30pm",
                  "rate": 3.2,
                  "unit": "$3.20 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 4.6,
                  "unit": "$2.30 per ½ hr"
            },
            {
                  "timeRange": "Aft 6.30pm",
                  "rate": 3.2,
                  "unit": "$3.20 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $2.30 per ½ hr","weekdays2":"Aft 6.30pm: $3.20 per entry","saturday":"Charges same as wkdays but $3.20 per entry after 1pm","sundayHoliday":"Closed"}
  },
  "fortunecentre": {
    carpark: "Fortune Centre",
    category: "South & CBD",
    baseRatePerHour: 3.22,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 3.22,
                  "unit": "$3.22 per hr"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 3.22,
                  "unit": "$3.22 per hr"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 3.22,
                  "unit": "$3.22 per hr"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-7pm: $3.22 per hr","weekdays2":"Aft 7pm: $3.21 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "fulushoucomplex": {
    carpark: "Fu Lu Shou Complex",
    category: "South & CBD",
    baseRatePerHour: 2.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2.4,
                  "unit": "$2.40 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry (Car park closed at 12.30am daily)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2.4,
                  "unit": "$2.40 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry (Car park closed at 12.30am daily)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2.4,
                  "unit": "$2.40 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry (Car park closed at 12.30am daily)"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $2.40 per hr","weekdays2":"Aft 5pm: $2.20 per entry (Car park closed at 12.30am daily)","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "fullertonhotel": {
    carpark: "Fullerton Hotel",
    category: "South & CBD",
    baseRatePerHour: 4.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 4.4,
                  "unit": "$2.20 per ½ hr"
            },
            {
                  "timeRange": "After 6pm",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 5,
                  "unit": "$5 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $2.20 per ½ hr","weekdays2":"After 6pm: $5 per entry","saturday":"$5 per entry","sundayHoliday":"$5 per entry"}
  },
  "funandigitalifemall": {
    carpark: "Funan DigitaLife Mall",
    category: "South & CBD",
    baseRatePerHour: 2.14,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "12am-5.59pm",
                  "rate": 2.14,
                  "unit": "$2.14 for 1st hr; $0.54 for sub. 15mins"
            },
            {
                  "timeRange": "6pm-9.59pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "12am-5.59pm",
                  "rate": 2.14,
                  "unit": "$2.14 for 1st hr; $0.54 for sub. 15mins"
            },
            {
                  "timeRange": "6pm-9.59pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "12am-5.59pm",
                  "rate": 2.14,
                  "unit": "$2.14 for 1st hr; $0.54 for sub. 15mins"
            },
            {
                  "timeRange": "6pm-9.59pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"12am-5.59pm: $2.14 for 1st hr; $0.54 for sub. 15mins","weekdays2":"6pm-9.59pm: $2.14 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "gillmanbarracks": {
    carpark: "Gillman Barracks",
    category: "South & CBD",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1,
                  "unit": "$0.50 / 30 mins"
            },
            {
                  "timeRange": "From 1700",
                  "rate": 2,
                  "unit": "$2.00 / entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 2,
                  "unit": "0700-1800 - Free Parking; 1800-0700: $2/entry."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 0,
                  "unit": "Free Parking"
            }
      ]
},
    rawRates: {"weekdays1":"$0.50 / 30 mins","weekdays2":"From 1700: $2.00 / entry","saturday":"0700-1800 - Free Parking; 1800-0700: $2/entry.","sundayHoliday":"Free Parking"}
  },
  "goldenmilecomplex": {
    carpark: "Golden Mile Complex",
    category: "South & CBD",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $1 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $2 for 1st hr; $1 for sub. ½ hr","weekdays2":"Aft 6pm: $2.20 per entry","saturday":"Same as wkdays","sundayHoliday":"$2.20 per entry"}
  },
  "goldenshoecomplex": {
    carpark: "Golden Shoe Complex",
    category: "South & CBD",
    baseRatePerHour: 5.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 5.2,
                  "unit": "$2.60 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.3,
                  "unit": "$3.30 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 5.2,
                  "unit": "$2.60 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.3,
                  "unit": "$3.30 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.3,
                  "unit": "$3.3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $2.60 per ½ hr","weekdays2":"Aft 5pm: $3.30 per entry","saturday":"Charges same as wkdays but $3.30 per entry after 1pm","sundayHoliday":"$3.3 per entry"}
  },
  "grandparkcityhall": {
    carpark: "Grand Park City Hall",
    category: "South & CBD",
    baseRatePerHour: 3.28,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 3.28,
                  "unit": "$3.28 for 1st hr; $1.55 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 3.28,
                  "unit": "$3.28 for 1st hr; $1.55 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 3.28,
                  "unit": "$3.28 for 1st hr; $1.55 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 5.35,
                  "unit": "$5.35 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $3.28 for 1st hr; $1.55 for sub. ½ hr","weekdays2":"Aft 5pm: $5.35 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "greateasterncentre": {
    carpark: "Great Eastern Centre",
    category: "South & CBD",
    baseRatePerHour: 3.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 3.6,
                  "unit": "$1.80 per ½ hr (Car park at China square central; B2 closed from 12am-6am daily)"
            },
            {
                  "timeRange": "6pm-12am",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-12am",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-12am",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $1.80 per ½ hr (Car park at China square central; B2 closed from 12am-6am daily)","weekdays2":"6pm-12am: $3 per entry","saturday":"8am-12am: $3 per entry","sundayHoliday":"Same as Saturday"}
  },
  "greatworldcity": {
    carpark: "Great World City",
    category: "South & CBD",
    baseRatePerHour: 1.55,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6.01am-5pm",
                  "rate": 1.55,
                  "unit": "$1.55 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.3,
                  "unit": "$3.30 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.65,
                  "unit": "$1.65 per hr (Max. of $6.00 per entry)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.65,
                  "unit": "$1.65 per hr (Max. of $6.00 per entry)"
            }
      ]
},
    rawRates: {"weekdays1":"6.01am-5pm: $1.55 per hr","weekdays2":"Aft 5pm: $3.30 per entry","saturday":"$1.65 per hr (Max. of $6.00 per entry)","sundayHoliday":"Same as Saturday"}
  },
  "harbourfrontcentre": {
    carpark: "Harbourfront Centre",
    category: "South & CBD",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.60 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-1am",
                  "rate": 2.4,
                  "unit": "$2.40 per entry"
            },
            {
                  "timeRange": "Aft 1am",
                  "rate": 2.04,
                  "unit": "$2.04 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.60 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-1am",
                  "rate": 2.4,
                  "unit": "$2.40 per entry"
            },
            {
                  "timeRange": "Aft 1am",
                  "rate": 2.04,
                  "unit": "$2.04 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.60 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-1am",
                  "rate": 2.4,
                  "unit": "$2.40 per entry"
            },
            {
                  "timeRange": "Aft 1am",
                  "rate": 2.04,
                  "unit": "$2.04 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $1.20 for 1st hr; $0.60 for sub. ½ hr","weekdays2":"6pm-1am: $2.40 per entry; Aft 1am: $2.04 per hr","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "holidayinnatriumsingapore": {
    carpark: "Holiday Inn Atrium Singapore",
    category: "South & CBD",
    baseRatePerHour: 1.8,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.8,
                  "unit": "$1.80 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.8,
                  "unit": "$3.80 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.8,
                  "unit": "$1.80 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.8,
                  "unit": "$3.80 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.8,
                  "unit": "$3.80 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.80 per hr","weekdays2":"Aft 5pm: $3.80 per entry","saturday":"Same as wkdays","sundayHoliday":"$3.80 per entry"}
  },
  "hongleongbuilding": {
    carpark: "Hong Leong Building",
    category: "South & CBD",
    baseRatePerHour: 5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 5,
                  "unit": "$2.50 per ½ hr"
            },
            {
                  "timeRange": "5pm-11pm",
                  "rate": 3.1,
                  "unit": "$3.10 per entry"
            },
            {
                  "timeRange": "Aft 11pm",
                  "rate": 12,
                  "unit": "Overnight Charge of $12"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-1pm",
                  "rate": 5,
                  "unit": "$2.50 per ½ hr"
            },
            {
                  "timeRange": "1pm-11pm",
                  "rate": 3.1,
                  "unit": "$3.10 per entry"
            },
            {
                  "timeRange": "Aft 11pm",
                  "rate": 12,
                  "unit": "Overnight Charge of $12"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-11pm",
                  "rate": 3.1,
                  "unit": "$3.10 per entry"
            },
            {
                  "timeRange": "Aft 11pm",
                  "rate": 12,
                  "unit": "Overnight Charge of $12"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $2.50 per ½ hr","weekdays2":"5pm-11pm: $3.10 per entry. Aft 11pm: Overnight Charge of $12","saturday":"7am-1pm: $2.50 per ½ hr; 1pm-11pm: $3.10 per entry. Aft 11pm: Overnight Charge of $12","sundayHoliday":"7am-11pm: $3.10 per entry. Aft 11pm: Overnight Charge of $12"}
  },
  "hubsynergypointformerlyapextower": {
    carpark: "Hub Synergy Point (Formerly Apex tower)",
    category: "South & CBD",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2,
                  "unit": "$1 per ½ hr"
            },
            {
                  "timeRange": "6pm-12am",
                  "rate": 1,
                  "unit": "$1 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-2pm",
                  "rate": 2,
                  "unit": "$1 per ½ hr"
            },
            {
                  "timeRange": "2pm-12am",
                  "rate": 1,
                  "unit": "$1 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-12am",
                  "rate": 1,
                  "unit": "$1 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $1 per ½ hr","weekdays2":"6pm-12am: $1 per hr","saturday":"7am-2pm: $1 per ½ hr; 2pm-12am: $1 per hr","sundayHoliday":"7am-12am: $1 per hr"}
  },
  "iconvillage": {
    carpark: "Icon Village",
    category: "South & CBD",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-1pm",
                  "rate": 3,
                  "unit": "$3 per hr"
            },
            {
                  "timeRange": "Aft 1pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.50 per ½ hr","weekdays2":"Aft 5pm: $3 per entry","saturday":"7am-1pm: $3 per hr; Aft 1pm: $3 per entry","sundayHoliday":"$3 per entry"}
  },
  "iluma": {
    carpark: "Iluma",
    category: "South & CBD",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.07,
                  "unit": "$1.07 for 1st hr; $0.37 for sub. 10 mins"
            },
            {
                  "timeRange": "Mon-Thu",
                  "rate": 1.25,
                  "unit": "Aft 5pm: $2.50 per entry; Fri: $2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.25,
                  "unit": "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.25,
                  "unit": "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1.07 for 1st hr; $0.37 for sub. 10 mins","weekdays2":"Mon-Thu: Aft 5pm: $2.50 per entry; Fri: $2.50 for 1st 2hrs; $0.25 for sub. 10 mins","saturday":"$2.50 for 1st 2hrs; $0.25 for sub. 10 mins","sundayHoliday":"Same as Saturday"}
  },
  "incomeatrafflesformerhitachitower": {
    carpark: "Income At Raffles ( former Hitachi tower)",
    category: "South & CBD",
    baseRatePerHour: 5.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7.30am-5.59pm",
                  "rate": 5.5,
                  "unit": "$2.75 per ½ hr"
            },
            {
                  "timeRange": "6pm to 7.29am",
                  "rate": 3.3,
                  "unit": "$3.30 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7.30am-12.59pm",
                  "rate": 5.5,
                  "unit": "$2.75 per ½ hr"
            },
            {
                  "timeRange": "1.00pm-7.29am",
                  "rate": 3.3,
                  "unit": "$3.30 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7.30am-7.29am",
                  "rate": 3.3,
                  "unit": "$3.30 per entry."
            }
      ]
},
    rawRates: {"weekdays1":"7.30am-5.59pm: $2.75 per ½ hr","weekdays2":"6pm to 7.29am : $3.30 per entry","saturday":"7.30am-12.59pm: $2.75 per ½ hr. 1.00pm-7.29am: $3.30 per entry","sundayHoliday":"7.30am-7.29am: $3.30 per entry."}
  },
  "intercontinentalsingaporehotel": {
    carpark: "Inter-continental Singapore Hotel",
    category: "South & CBD",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.07,
                  "unit": "$1.07 for 1st hr; $0.37 for sub. 10mins"
            },
            {
                  "timeRange": "Mon-Thu",
                  "rate": 1.25,
                  "unit": "Aft 5pm: $2.50 per entry. Fri: $2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.25,
                  "unit": "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.25,
                  "unit": "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1.07 for 1st hr; $0.37 for sub. 10mins","weekdays2":"Mon-Thu: Aft 5pm: $2.50 per entry. Fri: $2.50 for 1st 2hrs; $0.25 for sub. 10 mins","saturday":"$2.50 for 1st 2hrs; $0.25 for sub. 10 mins","sundayHoliday":"Same as Saturday"}
  },
  "internationalplaza": {
    carpark: "International Plaza",
    category: "South & CBD",
    baseRatePerHour: 4.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 4.4,
                  "unit": "$2.20 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 4.4,
                  "unit": "$2.20 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $2.20 per ½ hr","weekdays2":"Aft 5pm: $3 per entry","saturday":"Charges same as wkdays, but $3 per entry after 3pm","sundayHoliday":"$3 per entry"}
  },
  "kecksengtower": {
    carpark: "Keck Seng Tower",
    category: "South & CBD",
    baseRatePerHour: 5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 5,
                  "unit": "$2.50 per ½ hr"
            },
            {
                  "timeRange": "6pm-10pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-2pm",
                  "rate": 5,
                  "unit": "$2.50 per ½ hr"
            },
            {
                  "timeRange": "2pm-10pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-2pm",
                  "rate": 5,
                  "unit": "$2.50 per ½ hr"
            },
            {
                  "timeRange": "2pm-10pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $2.50 per ½ hr","weekdays2":"6pm-10pm: $2.50 per entry","saturday":"8am-2pm: $2.50 per ½ hr; 2pm-10pm: $2.50 per entry","sundayHoliday":"Closed"}
  },
  "keppelbaytowerharbourfronttowerone": {
    carpark: "Keppel Bay Tower / Harbourfront Tower One",
    category: "South & CBD",
    baseRatePerHour: 2.1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 2.1,
                  "unit": "$1.05 per ½ hr"
            },
            {
                  "timeRange": "7pm-1am",
                  "rate": 3.1,
                  "unit": "$3.10 per entry"
            },
            {
                  "timeRange": "Aft 1am",
                  "rate": 3.1,
                  "unit": "$3.10 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-1pm",
                  "rate": 2.1,
                  "unit": "$1.05 per ½ hr"
            },
            {
                  "timeRange": "1pm-6pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.60 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-1am",
                  "rate": 2.4,
                  "unit": "$2.40 per entry"
            },
            {
                  "timeRange": "Aft 1am",
                  "rate": 3.1,
                  "unit": "$3.10 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.60 for sub. ½ hr"
            },
            {
                  "timeRange": "6pm-1am",
                  "rate": 2.4,
                  "unit": "$2.40 per entry"
            },
            {
                  "timeRange": "Aft 1am",
                  "rate": 3.1,
                  "unit": "$3.10 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-7pm: $1.05 per ½ hr","weekdays2":"7pm-1am: $3.10 per entry; Aft 1am: $3.10 per hr","saturday":"7am-1pm: $1.05 per ½ hr; 1pm-6pm: $1.20 for 1st hr; $0.60 for sub. ½ hr; 6pm-1am: $2.40 per entry; Aft 1am: $3.10 per hr","sundayHoliday":"7am-6pm: $1.20 for 1st hr; $0.60 for sub. ½ hr; 6pm-1am: $2.40 per entry; Aft 1am: $3.10 per hr"}
  },
  "keypoint": {
    carpark: "Keypoint",
    category: "South & CBD",
    baseRatePerHour: 2.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 2.2,
                  "unit": "$1.10 for ½ hr"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 2,
                  "unit": "$2 per entry (close at midnight)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 2.2,
                  "unit": "$1.10 for ½ hr"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 2,
                  "unit": "$2 per entry (close at midnight)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"$1.10 for ½ hr","weekdays2":"$2 per entry (close at midnight)","saturday":"Same as wkdays","sundayHoliday":"$2 per entry"}
  },
  "landmarkvillagehotel": {
    carpark: "Landmark Village Hotel",
    category: "South & CBD",
    baseRatePerHour: 1.9,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.9,
                  "unit": "$1.90 for 1st hr; $1.07 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.9,
                  "unit": "$1.90 for 1st hr; $1.07 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1.90 for 1st hr; $1.07 for sub. ½ hr","weekdays2":"Aft 5pm: $2.14 per entry","saturday":"Same as wkdays","sundayHoliday":"$2.14 per entry"}
  },
  "liangcourt": {
    carpark: "Liang Court",
    category: "South & CBD",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 1.07,
                  "unit": "$1.07 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-1pm",
                  "rate": 1.07,
                  "unit": "$1.07 per hr"
            },
            {
                  "timeRange": "Aft 1pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.07 per hr","weekdays2":"Aft 5pm: $3.21 per entry","saturday":"7am-1pm: $1.07 per hr; Aft 1pm: $3.21 per entry","sundayHoliday":"$3.21 per entry"}
  },
  "marinabayfinancialcentretower123marinabaylinkmall": {
    carpark: "Marina Bay Financial Centre Tower 1, 2 ,3 & Marina Bay Link Mall",
    category: "South & CBD",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 1.07,
                  "unit": "$1.07 per 10 mins"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 0.8,
                  "unit": "$3.21 for 1st 4hrs; $0.27 for sub. 10 mins"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 0.8,
                  "unit": "$3.21 for 1st 4hrs; $0.27 for sub. 10 mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 0.8,
                  "unit": "$3.21 for 1st 4hrs; $0.27 for sub. 10 mins"
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: $1.07 per 10 mins","weekdays2":"Aft 6pm: $3.21 for 1st 4hrs; $0.27 for sub. 10 mins","saturday":"$3.21 for 1st 4hrs; $0.27 for sub. 10 mins","sundayHoliday":"Same as Saturday"}
  },
  "marinasquare": {
    carpark: "Marina Square",
    category: "South & CBD",
    baseRatePerHour: 1.1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Mon-Thu",
                  "rate": 1.1,
                  "unit": "7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr"
            },
            {
                  "timeRange": "Mon-Thu",
                  "rate": 2.2,
                  "unit": "5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Fri/Sat-Sun/PH",
                  "rate": 1.2,
                  "unit": "7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking"
            },
            {
                  "timeRange": "2am-7am",
                  "rate": 2.2,
                  "unit": "$1.10 per ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Fri/Sat-Sun/PH",
                  "rate": 1.2,
                  "unit": "7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking"
            },
            {
                  "timeRange": "2am-7am",
                  "rate": 2.2,
                  "unit": "$1.10 per ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Thu: 7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr","weekdays2":"Mon-Thu: 5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr","saturday":"Fri/Sat-Sun/PH: 7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr","sundayHoliday":"Same as Saturday"}
  },
  "merchantsquare": {
    carpark: "Merchant Square",
    category: "South & CBD",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st ½ hr; $1 for sub. hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $2 for 1st ½ hr; $1 for sub. hr","weekdays2":"Aft 6pm: $3 per entry","saturday":"$3 per entry","sundayHoliday":"$3 per entry"}
  },
  "milleniasingapore": {
    carpark: "Millenia Singapore",
    category: "South & CBD",
    baseRatePerHour: 3.3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3.3,
                  "unit": "$3.30 for 1st hr; $1.10 for sub.½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $3.30 for 1st hr; $1.10 for sub.½ hr","weekdays2":"Aft 6pm: $2.20 per entry","saturday":"$2.20 for 1st 2hrs; $1.10 for sub. hr","sundayHoliday":"Same as Saturday"}
  },
  "milleniawalkbasementcarpark": {
    carpark: "Millenia Walk (Basement Car Park)",
    category: "South & CBD",
    baseRatePerHour: 3.3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 3.3,
                  "unit": "$3.30 for 1st hr; $1.10 for sub.½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $3.30 for 1st hr; $1.10 for sub.½ hr","weekdays2":"Aft 6pm: $2.20 per entry","saturday":"$2.20 for 1st 2hrs; $1.10 for sub. hr","sundayHoliday":"Same as Saturday"}
  },
  "milleniawalksurfaceparkingl1": {
    carpark: "Millenia Walk (Surface parking @ L1)",
    category: "South & CBD",
    baseRatePerHour: 4.28,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 4.28,
                  "unit": "$4.28 for 1st hr; $1.605 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.14,
                  "unit": "$4.28 for 1st 2hrs; $1.605 for sub. hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 2.14,
                  "unit": "$4.28 for 1st 2hrs; $1.605 for sub. hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 2.14,
                  "unit": "$4.28 for 1st 2hrs; $1.605 for sub. hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $4.28 for 1st hr; $1.605 for sub. ½ hr","weekdays2":"Aft 6pm: $4.28 for 1st 2hrs; $1.605 for sub. hr","saturday":"$4.28 for 1st 2hrs; $1.605 for sub. hr","sundayHoliday":"Same as Saturday"}
  },
  "neilroadoffstreet": {
    carpark: "Neil Road Off-Street",
    category: "South & CBD",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 2,
                  "unit": "$1.00 per 30 mins (Per Minute Charging)"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1,
                  "unit": "$0.50 per 30 mins (Per Minute Charging)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "0700-1700",
                  "rate": 2,
                  "unit": "$1.00 per 30 mins"
            },
            {
                  "timeRange": "1700-0700",
                  "rate": 1,
                  "unit": "$0.50 per 30 mins (Per Minute Charging)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 1,
                  "unit": "$0.50 per 30 mins (Per Minute Charging)"
            }
      ]
},
    rawRates: {"weekdays1":"$1.00 per 30 mins (Per Minute Charging)","weekdays2":"$0.50 per 30 mins (Per Minute Charging)","saturday":"0700-1700:$1.00 per 30 mins; 1700-0700: $0.50 per 30 mins (Per Minute Charging)","sundayHoliday":"$0.50 per 30 mins (Per Minute Charging)"}
  },
  "northbridgecentre": {
    carpark: "North Bridge Centre",
    category: "South & CBD",
    baseRatePerHour: 2.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2.6,
                  "unit": "$1.30 per ½ hr"
            },
            {
                  "timeRange": "5pm-11pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1.30 per ½ hr","weekdays2":"5pm-11pm: $3 per entry","saturday":"$3 per entry","sundayHoliday":"$3 per entry"}
  },
  "ocbccentre": {
    carpark: "OCBC centre",
    category: "South & CBD",
    baseRatePerHour: 4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 4,
                  "unit": "$4 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $4 per hr","weekdays2":"Aft 6pm: $3 per entry","saturday":"$3 per entry","sundayHoliday":"$3 per entry"}
  },
  "onerafflesquay": {
    carpark: "One Raffles Quay",
    category: "South & CBD",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 1.07,
                  "unit": "$1.07 per 10mins"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 0.8,
                  "unit": "$3.21 for 1st 4hrs; $0.27 per sub. 10 mins"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 0.8,
                  "unit": "$3.21 for 1st 4hrs; $0.27 per sub. 10 mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 0.8,
                  "unit": "$3.21 for 1st 4hrs; $0.27 per sub. 10 mins"
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: $1.07 per 10mins","weekdays2":"Aft 6pm: $3.21 for 1st 4hrs; $0.27 per sub. 10 mins","saturday":"$3.21 for 1st 4hrs; $0.27 per sub. 10 mins","sundayHoliday":"Same as Saturday"}
  },
  "oubcentre": {
    carpark: "OUB Centre",
    category: "South & CBD",
    baseRatePerHour: 5.24,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 5.24,
                  "unit": "$2.62 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 5.24,
                  "unit": "$2.62 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 5.24,
                  "unit": "$2.62 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm : $2.62 per ½ hr","weekdays2":"Aft 5pm: $3.21 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "ouebayfrontformerlyoverseasunionhouse": {
    carpark: "OUE Bayfront (Formerly Overseas Union House)",
    category: "South & CBD",
    baseRatePerHour: 0.86,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5.59pm",
                  "rate": 0.86,
                  "unit": "$0.86 per 10mins block"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-2.59pm",
                  "rate": 3.21,
                  "unit": "$0.86 per 10mins block. 3pm-11.59am $3.21 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5.59pm: $0.86 per 10mins block","weekdays2":"Aft 6pm: $3.21 per entry","saturday":"7am-2.59pm: $0.86 per 10mins block. 3pm-11.59am $3.21 per entry","sundayHoliday":"$3.21 per entry"}
  },
  "parklaneshoppingmall": {
    carpark: "Parklane Shopping Mall",
    category: "South & CBD",
    baseRatePerHour: 2.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 2.5,
                  "unit": "$2.50 for 1st hr; $1.25 for sub. ½ hr"
            },
            {
                  "timeRange": "7pm-12am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-7pm",
                  "rate": 2.5,
                  "unit": "$2.50 for 1st hr; $1.25 for sub. ½ hr"
            },
            {
                  "timeRange": "7pm-12am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-12am",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-7pm: $2.50 for 1st hr; $1.25 for sub. ½ hr","weekdays2":"7pm-12am: $2.50 per entry. Aft 12am: $2.50 per entry","saturday":"Same as wkdays","sundayHoliday":"7am-12am: $3 per entry"}
  },
  "pearlscentre": {
    carpark: "Pearl's Centre",
    category: "South & CBD",
    baseRatePerHour: 2.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8.30am-5pm",
                  "rate": 2.4,
                  "unit": "$1.20 per ½ hr (max $22.90)"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8.30am-5pm",
                  "rate": 2.4,
                  "unit": "$1.20 per ½ hr (max $22.90)"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8.30am-5pm: $1.20 per ½ hr (max $22.90)","weekdays2":"Aft 5pm: $2.50 per entry","saturday":"Same as wkdays","sundayHoliday":"$2.50 per entry"}
  },
  "peninsularplaza": {
    carpark: "Peninsular Plaza",
    category: "South & CBD",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "Season Parking Only"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.2,
                  "unit": "Season Parking Only"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.2,
                  "unit": "Season Parking Only"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 1.2,
                  "unit": "Season Parking Only"
            }
      ]
},
    rawRates: {"weekdays1":"Season Parking Only","weekdays2":"Season Parking Only","saturday":"Season Parking Only","sundayHoliday":"Season Parking Only"}
  },
  "peoplesparkcentre": {
    carpark: "People's Park Centre",
    category: "South & CBD",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.50 per ½ hr","weekdays2":"Aft 5pm: $2.50 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "pomofomerlyparadizcentre": {
    carpark: "PoMo (Fomerly Paradiz Centre)",
    category: "South & CBD",
    baseRatePerHour: 2.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2.5,
                  "unit": "$1.25 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.95,
                  "unit": "$2.95 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2.5,
                  "unit": "$1.25 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.95,
                  "unit": "$2.95 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.95,
                  "unit": "$2.95 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1.25 per ½ hr","weekdays2":"Aft 5pm: $2.95 per entry","saturday":"Same as wkdays","sundayHoliday":"$2.95 per entry"}
  },
  "pwcbuilding": {
    carpark: "PWC Building",
    category: "South & CBD",
    baseRatePerHour: 4.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 4.4,
                  "unit": "$2.20 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $2.20 per ½ hr","weekdays2":"Aft 6pm: $3 per entry","saturday":"$3 per entry","sundayHoliday":"Closed"}
  },
  "rafflescity": {
    carpark: "Raffles City",
    category: "South & CBD",
    baseRatePerHour: 2.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5.59pm",
                  "rate": 2.2,
                  "unit": "$2.20 for 1st hr; $0.55 for sub. 15mins"
            },
            {
                  "timeRange": "6pm-7.59am",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs, $0.40 for sub. 15mins for 3rd and 4th hr, $0.60 for sub. 15mins for 5th hr onwards."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$2.20 for 1st 2hrs, $0.40 for sub. 15mins for 3rd and 4th hr, $0.60 for sub. 15mins for 5th hr onwards."
            }
      ]
},
    rawRates: {"weekdays1":"8am-5.59pm: $2.20 for 1st hr; $0.55 for sub. 15mins","weekdays2":"6pm-7.59am: $3 per entry","saturday":"$2.20 for 1st 2hrs, $0.40 for sub. 15mins for 3rd and 4th hr, $0.60 for sub. 15mins for 5th hr onwards.","sundayHoliday":"Same as Saturday"}
  },
  "republicplaza": {
    carpark: "Republic Plaza",
    category: "South & CBD",
    baseRatePerHour: 6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 6,
                  "unit": "$3 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 6,
                  "unit": "$3 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $3 per ½ hr","weekdays2":"Aft 5pm: $3 per entry","saturday":"Charges same as wkdays, but $3 per entry after 12pm","sundayHoliday":"$3 per entry"}
  },
  "resortsworldsentosa": {
    carpark: "Resorts World Sentosa",
    category: "South & CBD",
    baseRatePerHour: 7,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Mon-Thu",
                  "rate": 7,
                  "unit": "7am-7pm: $7 for 1st hr; $1 for sub. ½ hr or part thereof. (Max: $28 per 24 hrs)"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Fri/Sat-Sun/PH",
                  "rate": 8,
                  "unit": "7am-7pm: $8 for 1st hr; $2 for sub. ½ hr or part thereof"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 8,
                  "unit": "$8 per entry (Max: $28 per 24 hrs)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Fri/Sat-Sun/PH",
                  "rate": 8,
                  "unit": "7am-7pm: $8 for 1st hr; $2 for sub. ½ hr or part thereof"
            },
            {
                  "timeRange": "Aft 7pm",
                  "rate": 8,
                  "unit": "$8 per entry (Max: $28 per 24 hrs)"
            }
      ]
},
    rawRates: {"weekdays1":"Mon-Thu: 7am-7pm: $7 for 1st hr; $1 for sub. ½ hr or part thereof. (Max: $28 per 24 hrs)","weekdays2":"Aft 7pm: $6 per entry","saturday":"Fri/Sat-Sun/PH: 7am-7pm: $8 for 1st hr; $2 for sub. ½ hr or part thereof.  Aft 7pm: $8 per entry (Max: $28 per 24 hrs)","sundayHoliday":"Same as Saturday"}
  },
  "robertsonwalk": {
    carpark: "Robertson Walk",
    category: "South & CBD",
    baseRatePerHour: 1.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr or part thereof; $0.50 for sub. ½ hr or part thereof."
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr or part thereof; $0.50 for sub. ½ hr or part thereof."
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 4,
                  "unit": "$4 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: $1.50 for 1st hr or part thereof; $0.50 for sub. ½ hr or part thereof.","weekdays2":"Aft 6pm: $4 per entry","saturday":"Same as wkdays","sundayHoliday":"$4 per entry"}
  },
  "robinson77formerlysiabuilding": {
    carpark: "Robinson 77 (Formerly SIA Building)",
    category: "South & CBD",
    baseRatePerHour: 4.8,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 4.8,
                  "unit": "$2.4 per ½ hr"
            },
            {
                  "timeRange": "5pm-11pm",
                  "rate": 2.4,
                  "unit": "$2.4 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 4.8,
                  "unit": "$2.4 per ½ hr"
            },
            {
                  "timeRange": "5pm-11pm",
                  "rate": 2.4,
                  "unit": "$2.4 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.4,
                  "unit": "$2.4 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $2.4 per ½ hr","weekdays2":"5pm-11pm: $2.4 per entry","saturday":"Charges same as wkdays, but $2.4 per entry after 2pm","sundayHoliday":"$2.4 per entry"}
  },
  "robinsoncentre": {
    carpark: "Robinson Centre",
    category: "South & CBD",
    baseRatePerHour: 4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 4,
                  "unit": "$2 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 4,
                  "unit": "$2 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 4,
                  "unit": "$2 per ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $2 per ½ hr","weekdays2":"Aft 5pm: $3 per entry","saturday":"Charges same as wkdays, but $2 per entry after 1pm","sundayHoliday":"Same as Saturday"}
  },
  "theclementimall": {
    carpark: "The Clementi Mall",
    category: "West",
    baseRatePerHour: 1.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $0.80 for sub. ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $0.80 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $0.80 for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $1.50 for 1st hr; $0.80 for sub. ½ hr","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "schooloftheartssingaporesota": {
    carpark: "School of the Arts, Singapore (SOTA)",
    category: "South & CBD",
    baseRatePerHour: 2.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7.00am-5.59pm",
                  "rate": 2.5,
                  "unit": "$2.50 per hr"
            },
            {
                  "timeRange": "6pm-2am (the next day)",
                  "rate": 5,
                  "unit": "$5 per entry. 2.01am-6.59am: $5 (additional flat fee for overnight parking)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5.59pm",
                  "rate": 2.5,
                  "unit": "$2.50 per hr. 6pm-2am (the next day): $5 per entry"
            },
            {
                  "timeRange": "2.01am-6.59am",
                  "rate": 5,
                  "unit": "$5 (additional flat fee for overnight parking)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5.59pm",
                  "rate": 2.5,
                  "unit": "$2.50 per hr. 6pm-2am (the next day): $5 per entry"
            },
            {
                  "timeRange": "2.01am-6.59am",
                  "rate": 5,
                  "unit": "$5 (additional flat fee for overnight parking)"
            }
      ]
},
    rawRates: {"weekdays1":"7.00am-5.59pm: $2.50 per hr","weekdays2":"6pm-2am (the next day): $5 per entry. 2.01am-6.59am: $5 (additional flat fee for overnight parking)","saturday":"7am-5.59pm: $2.50 per hr. 6pm-2am (the next day): $5 per entry. 2.01am-6.59am: $5 (additional flat fee for overnight parking)","sundayHoliday":"Same as Saturday"}
  },
  "sgxcentre": {
    carpark: "SGX Centre",
    category: "South & CBD",
    baseRatePerHour: 5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 5,
                  "unit": "$2.50 per ½ hr"
            },
            {
                  "timeRange": "5pm-10pm",
                  "rate": 3,
                  "unit": "$3 per entry (The car park closed at 10pm daily)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-10pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-10pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $2.50 per ½ hr","weekdays2":"5pm-10pm: $3 per entry (The car park closed at 10pm daily)","saturday":"7am-10pm: $3 per entry","sundayHoliday":"Same as Saturday"}
  },
  "shentonhouse": {
    carpark: "Shenton House",
    category: "South & CBD",
    baseRatePerHour: 6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5.30pm",
                  "rate": 6,
                  "unit": "$3 per ½ hr"
            },
            {
                  "timeRange": "Aft 5.30pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5.30pm",
                  "rate": 6,
                  "unit": "$3 per ½ hr"
            },
            {
                  "timeRange": "Aft 5.30pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5.30pm: $3 per ½ hr","weekdays2":"Aft 5.30pm: $3 per entry","saturday":"Charges same as wkdays, but $3 per entry after 2pm","sundayHoliday":"$3 per entry"}
  },
  "simlimsquare": {
    carpark: "Sim Lim Square",
    category: "South & CBD",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "3",
                  "rate": 3,
                  "unit": "30am-6pm: $0.05 per min"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2,
                  "unit": "$2 per entry (1st hr Free parking from 6pm-10pm daily inclusive of PH)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "3",
                  "rate": 3,
                  "unit": "30am-6pm: $0.05 per min"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2,
                  "unit": "$2 per entry (1st hr Free parking from 6pm-10pm daily inclusive of PH)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "3",
                  "rate": 3,
                  "unit": "30am-6pm: $0.05 per min"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2,
                  "unit": "$2 per entry (1st hr Free parking from 6pm-10pm daily inclusive of PH)"
            }
      ]
},
    rawRates: {"weekdays1":"3:30am-6pm: $0.05 per min","weekdays2":"Aft 6pm: $2 per entry (1st hr Free parking from 6pm-10pm daily inclusive of PH)","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "simlimtower": {
    carpark: "Sim Lim Tower",
    category: "South & CBD",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 3,
                  "unit": "$1.50 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $1.50 per ½ hr","weekdays2":"Aft 6pm: $3 per entry","saturday":"Same as wkdays","sundayHoliday":"$3 per entry"}
  },
  "singaporegeneralhospitalcarparkcegi": {
    carpark: "Singapore General Hospital (Carpark C, E, G & I)",
    category: "South & CBD",
    baseRatePerHour: 2.16,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-9.59pm",
                  "rate": 2.16,
                  "unit": "$0.036 per min/$2.16 per hr"
            },
            {
                  "timeRange": "10pm-6.59am",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-9.59pm",
                  "rate": 2.16,
                  "unit": "$0.036 per min/$2.16 per hr"
            },
            {
                  "timeRange": "10pm-6.59am",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-9.59pm",
                  "rate": 1.08,
                  "unit": "$0.018 per min/$1.08 per hr"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-9.59pm: $0.036 per min/$2.16 per hr","weekdays2":"10pm-6.59am: $2.14 per entry","saturday":"Same as wkdays","sundayHoliday":"7am-9.59pm: $0.018 per min/$1.08 per hr; Aft 10pm: $2.14 per entry"}
  },
  "singaporegeneralhospitalmultistoreycarparkh": {
    carpark: "Singapore General Hospital (Multi-Storey Carpark H)",
    category: "South & CBD",
    baseRatePerHour: 1.08,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-9.59pm",
                  "rate": 1.08,
                  "unit": "$0.018 per min/$1.08 per hr"
            },
            {
                  "timeRange": "10pm-6.59am",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-9.59pm",
                  "rate": 1.08,
                  "unit": "$0.018 per min/$1.08 per hr"
            },
            {
                  "timeRange": "10pm-6.59am",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-9.59pm: $0.018 per min/$1.08 per hr","weekdays2":"10pm-6.59am: $2.14 per entry","saturday":"Same as wkdays","sundayHoliday":"$2.14 per entry"}
  },
  "singaporelandtower": {
    carpark: "Singapore Land Tower",
    category: "South & CBD",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "For Tenants only"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "For Tenants only"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "For Tenants only"
            }
      ]
},
    rawRates: {"weekdays1":"For Tenants only","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "sixbatteryroad": {
    carpark: "Six Battery Road",
    category: "South & CBD",
    baseRatePerHour: 6.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 6.2,
                  "unit": "$3.10 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.7,
                  "unit": "$3.70 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 6.2,
                  "unit": "$3.10 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.7,
                  "unit": "$3.70 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3.7,
                  "unit": "$3.70 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $3.10 per ½ hr","weekdays2":"Aft 6pm: $3.70 per entry","saturday":"Charges same as wkdays, but $3.70 per entry after 1pm","sundayHoliday":"$3.70 per entry"}
  },
  "sunshineplaza": {
    carpark: "Sunshine Plaza",
    category: "South & CBD",
    baseRatePerHour: 2.14,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2.14,
                  "unit": "$1.07 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2.14,
                  "unit": "$1.07 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 2.14,
                  "unit": "$1.07 per ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $1.07 per ½ hr","weekdays2":"Aft 6pm: $3.21 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "sunteccity": {
    carpark: "Suntec City",
    category: "South & CBD",
    baseRatePerHour: 2.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.2,
                  "unit": "$2.20 for 1st hr; $1.10 for sub. ½ hr (excluding PH)"
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 2.2,
                  "unit": "$2.20 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 1.1,
                  "unit": "$1.10 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$1.10 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.1,
                  "unit": "$1.10 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $2.20 for 1st hr; $1.10 for sub. ½ hr (excluding PH)","weekdays2":"5pm-12am:$2.20 per entry; Aft 12am:$1.10 per hr","saturday":"$1.10 per hr","sundayHoliday":"Same as Saturday"}
  },
  "swissotelthestamfordhotel": {
    carpark: "Swissotel The Stamford Hotel",
    category: "South & CBD",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2,
                  "unit": "$2 for 1st hr; $0.50 for sub. 15mins (Car park at Raffles City Shopping Centre)"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1,
                  "unit": "$2 for 1st 2hrs; $0.30 for sub. 15mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1,
                  "unit": "$2 for 1st 2hrs; $0.30 for sub. 15mins"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $2 for 1st hr; $0.50 for sub. 15mins (Car park at Raffles City Shopping Centre)","weekdays2":"Aft 5pm: $2.50 per entry","saturday":"$2 for 1st 2hrs; $0.30 for sub. 15mins","sundayHoliday":"Same as Saturday"}
  },
  "tanjongkatongcomplex": {
    carpark: "Tanjong Katong Complex",
    category: "South & CBD",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.2,
                  "unit": "HDB coupon parking"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.2,
                  "unit": "HDB coupon parking"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.2,
                  "unit": "HDB coupon parking"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 1.2,
                  "unit": "HDB coupon parking"
            }
      ]
},
    rawRates: {"weekdays1":"HDB coupon parking","weekdays2":"HDB coupon parking","saturday":"HDB coupon parking","sundayHoliday":"HDB coupon parking"}
  },
  "theadelphi": {
    carpark: "The Adelphi",
    category: "South & CBD",
    baseRatePerHour: 2.4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 2.4,
                  "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "5pm-1am",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 2.4,
                  "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "5pm-1am",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-1am",
                  "rate": 3.21,
                  "unit": "$3.21 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-5pm: $2.40 for 1st hr; $1.20 for sub. ½ hr","weekdays2":"5pm-1am: $3.21 per entry","saturday":"Same as wkdays","sundayHoliday":"6am-1am: $3.21 per entry"}
  },
  "theconcourse": {
    carpark: "The Concourse",
    category: "South & CBD",
    baseRatePerHour: 2.14,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.14,
                  "unit": "$2.14 for 1st hr; $1.07 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 2.14,
                  "unit": "$2.14 for 1st hr; $1.07 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 1.07,
                  "unit": "$1.07 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $2.14 for 1st hr; $1.07 for sub. ½ hr","weekdays2":"Aft 5pm: $2.14 per entry","saturday":"Charges same as wkdays, but $1.07 per entry after 12pm","sundayHoliday":"$1.07 per entry"}
  },
  "thecorporateoffice": {
    carpark: "The Corporate Office",
    category: "South & CBD",
    baseRatePerHour: 4,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 4,
                  "unit": "$4 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 4,
                  "unit": "$4 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 4,
                  "unit": "$4 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $4 per hr","weekdays2":"Aft 5pm: $2.50 per entry","saturday":"Same as wkdays","sundayHoliday":"Closed"}
  },
  "theesplanade": {
    carpark: "The Esplanade",
    category: "South & CBD",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 2,
                  "unit": "$2 per hr ($1.50 per ½ hr at Waterfront car park daily) 12pm-2pm $2 per entry"
            },
            {
                  "timeRange": "6pm-10pm",
                  "rate": 6,
                  "unit": "$6 per entry"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 2,
                  "unit": "$2 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 2,
                  "unit": "$2 per hr ($1.50 per ½ hr at Waterfront car park daily)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 2,
                  "unit": "$2 per hr ($1.50 per ½ hr at Waterfront car park daily)"
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: $2 per hr ($1.50 per ½ hr at Waterfront car park daily) 12pm-2pm $2 per entry","weekdays2":"6pm-10pm: $6 per entry; Aft 10pm: $2 per entry","saturday":"6am-6pm: $2 per hr ($1.50 per ½ hr at Waterfront car park daily)","sundayHoliday":"Same as Saturday"}
  },
  "uesquare": {
    carpark: "UE Square",
    category: "South & CBD",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 2,
                  "unit": "$2.00 for 1st hr; $1 for sub. hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-1pm",
                  "rate": 2,
                  "unit": "$2.00 for 1st hr; $1 for sub. hr"
            },
            {
                  "timeRange": "Aft 11pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $2.00 for 1st hr; $1 for sub. hr","weekdays2":"Aft 5pm: $3 per entry","saturday":"8am-1pm: $2.00 for 1st hr; $1 for sub. hr; Aft 11pm: $3 per entry","sundayHoliday":"$3 per entry"}
  },
  "uobplaza": {
    carpark: "UOB Plaza",
    category: "South & CBD",
    baseRatePerHour: 5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 5,
                  "unit": "$2.50 per ½ hr"
            },
            {
                  "timeRange": "6pm-12am",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-12am",
                  "rate": 3.5,
                  "unit": "$3.50 per entry. Aft 12am $3.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-12am",
                  "rate": 3.5,
                  "unit": "$3.50 per entry. Aft 12am $3.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $2.50 per ½ hr","weekdays2":"6pm-12am: $3.50 per entry. Aft 12am: $3.50 per entry","saturday":"7am-12am: $3.50 per entry. Aft 12am $3.50 per entry","sundayHoliday":"Same as Saturday"}
  },
  "vivocity": {
    carpark: "Vivocity",
    category: "South & CBD",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.2,
                  "unit": "$1.20 for 1st hr; $0.60 for sub. ½ hr"
            },
            {
                  "timeRange": "6.01pm-4am",
                  "rate": 3,
                  "unit": "$3 per entry"
            },
            {
                  "timeRange": "Aft 4am",
                  "rate": 2.5,
                  "unit": "$2.50 per hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.4,
                  "unit": "$1.40 for 1st hr; $0.70 for sub. ½ hr"
            },
            {
                  "timeRange": "6.01pm-4am",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            },
            {
                  "timeRange": "Aft 4am",
                  "rate": 2.5,
                  "unit": "$2.50 per hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.4,
                  "unit": "$1.40 for 1st hr; $0.70 for sub. ½ hr"
            },
            {
                  "timeRange": "6.01pm-4am",
                  "rate": 3.5,
                  "unit": "$3.50 per entry"
            },
            {
                  "timeRange": "Aft 4am",
                  "rate": 2.5,
                  "unit": "$2.50 per hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-6pm: $1.20 for 1st hr; $0.60 for sub. ½ hr","weekdays2":"6.01pm-4am: $3 per entry; Aft 4am: $2.50 per hr","saturday":"7am-6pm: $1.40 for 1st hr; $0.70 for sub. ½ hr; 6.01pm-4am: $3.50 per entry; Aft 4am: $2.50 per hr","sundayHoliday":"Same as Saturday"}
  },
  "27westcoasthighway": {
    carpark: "27 West Coast Highway",
    category: "West",
    baseRatePerHour: 1.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "0000-0700",
                  "rate": 1.5,
                  "unit": "$0.75 / 30 mins (Capped at $4.28)"
            },
            {
                  "timeRange": "0700-2000",
                  "rate": 1.5,
                  "unit": "$0.75 / 30 mins (Capped at $4.28)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "0000-0700",
                  "rate": 1.5,
                  "unit": "$0.75 / 30 mins (Capped at $4.28)"
            },
            {
                  "timeRange": "0700-2000",
                  "rate": 1.5,
                  "unit": "$0.75 / 30 mins (Capped at $4.28)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "0000-0700",
                  "rate": 1.5,
                  "unit": "$0.75 / 30 mins (Capped at $4.28)"
            },
            {
                  "timeRange": "0700-2000",
                  "rate": 1.5,
                  "unit": "$0.75 / 30 mins (Capped at $4.28)"
            }
      ]
},
    rawRates: {"weekdays1":"0000-0700: $0.75 / 30 mins (Capped at $4.28). 0700-2000: $0.75 / 30 mins (Capped at $4.28)","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "alexandraretailcentre": {
    carpark: "Alexandra Retail Centre",
    category: "West",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am to 6pm",
                  "rate": 2,
                  "unit": "$2/hr or part thereof."
            },
            {
                  "timeRange": "6pm to 12mn",
                  "rate": 2.4,
                  "unit": "$2.40/entry; 12 mn to 7am: $2.40/hr or part thereof."
            }
      ],
      "saturday": [
            {
                  "timeRange": "7am to 10am",
                  "rate": 2,
                  "unit": "$2/hr or part thereof; 10am to 12mn: $2.40/entry; 12 mn to 7am: $2.40/hr or part thereof."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am to 12mn",
                  "rate": 2.4,
                  "unit": "$2.40/entry; 12 mn to 7am: $2.40/hr or part thereof."
            }
      ]
},
    rawRates: {"weekdays1":"7am to 6pm: $2/hr or part thereof.","weekdays2":"6pm to 12mn: $2.40/entry; 12 mn to 7am: $2.40/hr or part thereof.","saturday":"7am to 10am: $2/hr or part thereof; 10am to 12mn: $2.40/entry; 12 mn to 7am: $2.40/hr or part thereof.","sundayHoliday":"7am to 12mn: $2.40/entry; 12 mn to 7am: $2.40/hr or part thereof."}
  },
  "anchorpointshoppingcentre": {
    carpark: "Anchorpoint Shopping Centre",
    category: "West",
    baseRatePerHour: 1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6.59pm",
                  "rate": 1,
                  "unit": "$1 for 1st ½ hr or part thereof; $2 for sub hr or part thereof."
            },
            {
                  "timeRange": "7pm-7.59am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry."
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-6.59pm",
                  "rate": 1,
                  "unit": "$1 for 1st ½ hr or part thereof; $2 for sub hr or part thereof."
            },
            {
                  "timeRange": "7pm-7.59am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-6.59pm",
                  "rate": 1,
                  "unit": "$1 for 1st ½ hr or part thereof; $2 for sub hr or part thereof."
            },
            {
                  "timeRange": "7pm-7.59am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry."
            }
      ]
},
    rawRates: {"weekdays1":"8am-6.59pm: $1 for 1st ½ hr or part thereof; $2 for sub hr or part thereof.","weekdays2":"7pm-7.59am: $2.50 per entry.","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "bukitpanjangplaza": {
    carpark: "Bukit Panjang Plaza",
    category: "West",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "12am to 6pm",
                  "rate": 1.07,
                  "unit": "$1.07 for 1st hr, $0.32/min for sub.min."
            },
            {
                  "timeRange": "6pm-12am",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "12am to 6pm",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2 hr, $0.32 for sub 15mins"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "12am to 6pm",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2 hr, $0.32 for sub 15mins"
            }
      ]
},
    rawRates: {"weekdays1":"12am to 6pm :$1.07 for 1st hr, $0.32/min for sub.min.","weekdays2":"6pm-12am: $2.14 per entry","saturday":"12am to 6pm :$2.14 for 1st 2 hr, $0.32 for sub 15mins","sundayHoliday":"Same as Saturday"}
  },
  "bukittimahplazamultistoreycarpark": {
    carpark: "Bukit Timah Plaza (Multi-Storey Car Park)",
    category: "West",
    baseRatePerHour: 1.28,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7.30am-5pm",
                  "rate": 1.28,
                  "unit": "$1.28 per hr"
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 2.25,
                  "unit": "$2.25 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 2.25,
                  "unit": "$2.25 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "7.30am-5pm",
                  "rate": 1.28,
                  "unit": "$1.28 per hr"
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 2.25,
                  "unit": "$2.25 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 2.25,
                  "unit": "$2.25 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7.30am-5pm",
                  "rate": 1.28,
                  "unit": "$1.28 per hr"
            },
            {
                  "timeRange": "5pm-12am",
                  "rate": 2.25,
                  "unit": "$2.25 per entry"
            },
            {
                  "timeRange": "Aft 12am",
                  "rate": 2.25,
                  "unit": "$2.25 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"7.30am-5pm: $1.28 per hr","weekdays2":"5pm-12am: $2.25 per entry. Aft 12am: $2.25 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "bukittimahshoppingcentre": {
    carpark: "Bukit Timah Shopping Centre",
    category: "West",
    baseRatePerHour: 1.25,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.25,
                  "unit": "$1.25 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.1,
                  "unit": "$2.10 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.25,
                  "unit": "$1.25 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.1,
                  "unit": "$2.10 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.25,
                  "unit": "$1.25 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 2.1,
                  "unit": "$2.10 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1.25 per hr","weekdays2":"Aft 5pm: $2.10 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "coronationshoppingplaza": {
    carpark: "Coronation Shopping Plaza",
    category: "West",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily(7.01am-7am)",
                  "rate": 2,
                  "unit": "$2 per hr."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily(7.01am-7am)",
                  "rate": 2,
                  "unit": "$2 per hr."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily(7.01am-7am)",
                  "rate": 2,
                  "unit": "$2 per hr."
            }
      ]
},
    rawRates: {"weekdays1":"Daily(7.01am-7am): $2 per hr.","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "hollandroadshoppingcentre": {
    carpark: "Holland Road Shopping Centre",
    category: "West",
    baseRatePerHour: 3.1,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "12am-8.59pm",
                  "rate": 3.1,
                  "unit": "$1.55 per ½ hr"
            },
            {
                  "timeRange": "Aft 9pm",
                  "rate": 3.25,
                  "unit": "$3.25 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "12am-8.59pm",
                  "rate": 3.1,
                  "unit": "$1.55 per ½ hr"
            },
            {
                  "timeRange": "Aft 9pm",
                  "rate": 3.25,
                  "unit": "$3.25 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "12am-8.59pm",
                  "rate": 3.1,
                  "unit": "$1.55 per ½ hr"
            },
            {
                  "timeRange": "Aft 9pm",
                  "rate": 3.25,
                  "unit": "$3.25 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"12am-8.59pm: $1.55 per ½ hr","weekdays2":"Aft 9pm: $3.25 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "ikeaalexandra": {
    carpark: "IKEA (Alexandra)",
    category: "West",
    baseRatePerHour: 3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 3,
                  "unit": "$0.05 per min, $1.50 per 30 Mins (subsequently charged on a per minute basis)"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 3,
                  "unit": "$0.05 per min, $1.50 per 30 Mins (subsequently charged on a per minute basis)"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 3,
                  "unit": "$0.05 per min, $1.50 per 30 Mins (subsequently charged on a per minute basis)"
            }
      ]
},
    rawRates: {"weekdays1":"Daily :$0.05 per min, $1.50 per 30 Mins (subsequently charged on a per minute basis)","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "immbuilding": {
    carpark: "IMM Building",
    category: "West",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.07,
                  "unit": "Free for 1st 2hrs for first entry only. Chargeable after 2nd hr of 1st entry @ $1.07 /hr; $0.30 for sub. 15 mins."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.07,
                  "unit": "Free for 1st 2hrs for first entry only. Chargeable after 2nd hr of 1st entry @ $1.07 /hr; $0.30 for sub. 15 mins."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.07,
                  "unit": "Free for 1st 2hrs for first entry only. Chargeable after 2nd hr of 1st entry @ $1.07 /hr; $0.30 for sub. 15 mins."
            }
      ]
},
    rawRates: {"weekdays1":"Free for 1st 2hrs for first entry only. Chargeable after 2nd hr of 1st entry @ $1.07 /hr; $0.30 for sub. 15 mins.","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "jcube": {
    carpark: "JCube",
    category: "West",
    baseRatePerHour: 1.3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "3.30am-5.59pm",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr; sub 15 mins or part thereof: $0.30. *Free 2 Hour Parking from 12 - 2pm daily (Monday - Friday) from now to 15 Oct 2015."
            },
            {
                  "timeRange": "6pm-3.29am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "3.30am-5.59pm",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr; sub 15 mins or part thereof: $0.30. *Free 2 Hour Parking from 12 - 2pm daily (Monday - Friday) from now to 15 Oct 2015."
            },
            {
                  "timeRange": "6pm-3.29am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "3.30am-5.59pm",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr; sub 15 mins or part thereof: $0.30. *Free 2 Hour Parking from 12 - 2pm daily (Monday - Friday) from now to 15 Oct 2015."
            },
            {
                  "timeRange": "6pm-3.29am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"3.30am-5.59pm: $1.30 for 1st hr; sub 15 mins or part thereof: $0.30. *Free 2 Hour Parking from 12 - 2pm daily (Monday - Friday) from now to 15 Oct 2015.","weekdays2":"6pm-3.29am: $2.50 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "junction10": {
    carpark: "Junction 10",
    category: "West",
    baseRatePerHour: 1.25,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.25,
                  "unit": "$1.25 for 1st hr; $0.65 for sub. hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.25,
                  "unit": "$1.25 for 1st hr; $0.65 for sub. hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.25,
                  "unit": "$1.25 for 1st hr; $0.65 for sub. hr"
            }
      ]
},
    rawRates: {"weekdays1":"$1.25 for 1st hr; $0.65 for sub. hr","weekdays2":"-","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "jurongpointshoppingcentre": {
    carpark: "Jurong Point Shopping Centre",
    category: "West",
    baseRatePerHour: 0.54,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "7am-5pm",
                  "rate": 0.54,
                  "unit": "$1.07 for 1st 2hrs; $1.07 for sub. hr (Free parking from 12pm-2pm on Monday-Thursday)"
            },
            {
                  "timeRange": "5pm-9pm",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2hrs; $1.07 for sub. hr"
            },
            {
                  "timeRange": "Aft 9pm",
                  "rate": 0.36,
                  "unit": "$1.07 for 1st 3hrs; $1.07 for sub. hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2hrs; $1.07 for sub. hr; Aft 9pm: $1.07 for 1st 3hrs; $1.07 for sub. hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.07,
                  "unit": "$2.14 for 1st 2hrs; $1.07 for sub. hr; Aft 9pm: $1.07 for 1st 3hrs; $1.07 for sub. hr"
            }
      ]
},
    rawRates: {"weekdays1":"7am-5pm: $1.07 for 1st 2hrs; $1.07 for sub. hr (Free parking from 12pm-2pm on Monday-Thursday)","weekdays2":"5pm-9pm: $2.14 for 1st 2hrs; $1.07 for sub. hr; Aft 9pm: $1.07 for 1st 3hrs; $1.07 for sub. hr","saturday":"$2.14 for 1st 2hrs; $1.07 for sub. hr; Aft 9pm: $1.07 for 1st 3hrs; $1.07 for sub. hr","sundayHoliday":"Same as Saturday"}
  },
  "jurongtheatre": {
    carpark: "Jurong Theatre",
    category: "West",
    baseRatePerHour: 1.6,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-8.59pm",
                  "rate": 1.6,
                  "unit": "$1.60 per hr"
            },
            {
                  "timeRange": "Aft 9pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-8.59pm",
                  "rate": 1.6,
                  "unit": "$1.60 per hr"
            },
            {
                  "timeRange": "Aft 9pm",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-8.59pm: $1.60 per hr","weekdays2":"Aft 9pm: $3 per entry","saturday":"Same as wkdays","sundayHoliday":"$3 per entry"}
  },
  "lot1shoppingcentre": {
    carpark: "Lot 1 Shopping Centre",
    category: "West",
    baseRatePerHour: 1.07,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "12am-5.59pm",
                  "rate": 1.07,
                  "unit": "$1.07 for 1st hr; $0.32 for sub. 15 mins."
            },
            {
                  "timeRange": "Mon-Thurs, 6pm-11.59pm",
                  "rate": 2.14,
                  "unit": "$2.14 per entry. Fri & Eve of PH, 6pm-2.59am: $2.14 per entry."
            }
      ],
      "saturday": [
            {
                  "timeRange": "3am-5.59pm",
                  "rate": 2.14,
                  "unit": "$2.14 for 1st 2-hrs; $0.32 for sub. 15 mins"
            },
            {
                  "timeRange": "6pm-2.59am",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "3am-5.59pm",
                  "rate": 2.14,
                  "unit": "$2.14 for 1st 2-hrs; $0.32 for sub. 15 mins"
            },
            {
                  "timeRange": "6pm-11.59am",
                  "rate": 2.14,
                  "unit": "$2.14 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"12am-5.59pm: $1.07 for 1st hr; $0.32 for sub. 15 mins.","weekdays2":"Mon-Thurs, 6pm-11.59pm: $2.14 per entry. Fri & Eve of PH, 6pm-2.59am: $2.14 per entry.","saturday":"3am-5.59pm: $2.14 for 1st 2-hrs; $0.32 for sub. 15 mins. 6pm-2.59am: $2.14 per entry.","sundayHoliday":"3am-5.59pm: $2.14 for 1st 2-hrs; $0.32 for sub. 15 mins. 6pm-11.59am: $2.14 per entry."}
  },
  "nuh": {
    carpark: "NUH",
    category: "West",
    baseRatePerHour: 1.8,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.8,
                  "unit": "$0.03 per min"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.8,
                  "unit": "$0.03 per min"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.8,
                  "unit": "$0.03 per min"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $0.03 per min","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "queenswayshoppingcentre": {
    carpark: "Queensway Shopping Centre",
    category: "West",
    baseRatePerHour: 2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st 1½hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.3,
                  "unit": "$2.30 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st 1hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.3,
                  "unit": "$2.30 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-6pm",
                  "rate": 2,
                  "unit": "$2 for 1st 1½hr; $1.20 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 2.3,
                  "unit": "$2.30 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-6pm: $2 for 1st 1½hr; $1.20 for sub. ½ hr","weekdays2":"Aft 6pm: $2.30 per entry","saturday":"8am-6pm: $1.50 for 1st 1hr; $1.20 for sub. ½ hr; Aft 6pm: $2.30 per entry","sundayHoliday":"Same as wkdays"}
  },
  "savoytheatre": {
    carpark: "Savoy Theatre",
    category: "West",
    baseRatePerHour: 1.2,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.2,
                  "unit": "$1.20 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3.00 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-5pm",
                  "rate": 1.2,
                  "unit": "$1.20 per hr"
            },
            {
                  "timeRange": "Aft 5pm",
                  "rate": 3,
                  "unit": "$3.00 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun & PH",
                  "rate": 3,
                  "unit": "$3.00 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-5pm: $1.20 per hr","weekdays2":"Aft 5pm: $3.00 per entry","saturday":"Same as wkdays","sundayHoliday":"$3.00 per entry"}
  },
  "serenecentre": {
    carpark: "Serene Centre",
    category: "West",
    baseRatePerHour: 1.53,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "8am-10pm",
                  "rate": 1.53,
                  "unit": "$1.53 for 1st hr; $1.53 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 1.53,
                  "unit": "$1.53 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "8am-10pm",
                  "rate": 1.53,
                  "unit": "$1.53 for 1st hr; $1.53 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 1.53,
                  "unit": "$1.53 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "8am-10pm",
                  "rate": 1.53,
                  "unit": "$1.53 for 1st hr; $1.53 for sub. ½ hr"
            },
            {
                  "timeRange": "Aft 10pm",
                  "rate": 1.53,
                  "unit": "$1.53 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"8am-10pm: $1.53 for 1st hr; $1.53 for sub. ½ hr","weekdays2":"Aft 10pm: $1.53 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "themetropolis": {
    carpark: "The Metropolis",
    category: "West",
    baseRatePerHour: 2.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 2.5,
                  "unit": "$2.50 for 1st hr, sub $1.25 per 1/2 hr"
            },
            {
                  "timeRange": "Time period 1",
                  "rate": 2.5,
                  "unit": "6pm-12am: $2.50 per entry; Time period 2: 12am-6am: $2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 2.5,
                  "unit": "$2.50 for 1st hr, sub $1.25 per 1/2 hr"
            },
            {
                  "timeRange": "Time period 1",
                  "rate": 2.5,
                  "unit": "6pm-12am: $2.50 per entry; Time period 2: 12am-6am: $2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-6pm",
                  "rate": 2.5,
                  "unit": "$2.50 for 1st hr, sub $1.25 per 1/2 hr"
            },
            {
                  "timeRange": "Time period 1",
                  "rate": 2.5,
                  "unit": "6pm-12am: $2.50 per entry; Time period 2: 12am-6am: $2.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"6am-6pm: $2.50 for 1st hr, sub $1.25 per 1/2 hr","weekdays2":"Time period 1: 6pm-12am: $2.50 per entry; Time period 2: 12am-6am: $2.50 per entry","saturday":"6am - 6pm: $1.00 per hour or part thereof; Aft 6pm same as wkdays","sundayHoliday":"6am - 6pm: $1.00 per hour or part thereof; Aft 6pm same as wkdays"}
  },
  "thestarvista": {
    carpark: "The Star Vista",
    category: "West",
    baseRatePerHour: 1.3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "12am-11.59pm",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr, $0.65 for sub. 30 mins or part thereof."
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr, $0.65 for sub. 30 mins or part thereof."
            }
      ],
      "saturday": [
            {
                  "timeRange": "12am-11.59pm",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr, $0.65 for sub. 30 mins or part thereof."
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr, $0.65 for sub. 30 mins or part thereof."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Sun",
                  "rate": 2.14,
                  "unit": "12am-11.59pm: $2.14 for 1st hr, $1.07 for sub. 30 mins or part thereof."
            }
      ]
},
    rawRates: {"weekdays1":"12am-11.59pm:$1.30 for 1st hr, $0.65 for sub. 30 mins or part thereof.","weekdays2":"$1.30 for 1st hr, $0.65 for sub. 30 mins or part thereof.","saturday":"Sat & PH: Same as wkdays","sundayHoliday":"Sun:12am-11.59pm: $2.14 for 1st hr, $1.07 for sub. 30 mins or part thereof."}
  },
  "tiongbahruplaza": {
    carpark: "Tiong Bahru Plaza",
    category: "West",
    baseRatePerHour: 1.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $0.80 for sub. ½ hr"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $0.80 for sub. ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $0.80 for sub. ½ hr"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $0.80 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "7am-6pm",
                  "rate": 1.5,
                  "unit": "$1.50 per hr"
            },
            {
                  "timeRange": "Aft 6pm",
                  "rate": 3.6,
                  "unit": "$3.60 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"$1.50 for 1st hr; $0.80 for sub. ½ hr","weekdays2":"$1.50 for 1st hr; $0.80 for sub. ½ hr","saturday":"Same as wkdays","sundayHoliday":"7am-6pm:$1.50 per hr; Aft 6pm: $3.60 per entry"}
  },
  "turfcity": {
    carpark: "Turf City",
    category: "West",
    baseRatePerHour: 0,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 0,
                  "unit": "Free parking"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 0,
                  "unit": "Free parking"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 0,
                  "unit": "Free parking"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: Free parking","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "valleypoint": {
    carpark: "Valley Point",
    category: "West",
    baseRatePerHour: 1.5,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $0.80 for sub. ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $0.80 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $0.80 for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $1.50 for 1st hr; $0.80 for sub. ½ hr","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
  "westcoastplazaginzaplaza": {
    carpark: "West Coast Plaza (Ginza Plaza)",
    category: "West",
    baseRatePerHour: 1.25,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Day (07:00 - 18:00)",
                  "rate": 1.25,
                  "unit": "$1.25 for 1st hr; $1.00 for sub. ½ hr"
            },
            {
                  "timeRange": "Evening (18:00 - 07:00)",
                  "rate": 1.25,
                  "unit": "$1.25 for 1st hr; $1.00 for sub. ½ hr"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $1.00 for sub. ½ hr"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Saturday",
                  "rate": 1.5,
                  "unit": "$1.50 for 1st hr; $1.00 for sub. ½ hr"
            }
      ]
},
    rawRates: {"weekdays1":"$1.25 for 1st hr; $1.00 for sub. ½ hr","weekdays2":"$1.25 for 1st hr; $1.00 for sub. ½ hr","saturday":"$1.50 for 1st hr; $1.00 for sub. ½ hr","sundayHoliday":"Same as Saturday"}
  },
  "westmall": {
    carpark: "West Mall",
    category: "West",
    baseRatePerHour: 0.55,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 0.55,
                  "unit": "$1.10 for 1st 2hrs or part thereof; $0.60 for sub. ½ hr or part thereof."
            },
            {
                  "timeRange": "5pm-6am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry."
            }
      ],
      "saturday": [
            {
                  "timeRange": "6am-5pm",
                  "rate": 1.1,
                  "unit": "$1.10 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof"
            },
            {
                  "timeRange": "5pm-6am",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "6am-6am next day",
                  "rate": 2.5,
                  "unit": "$2.50 per entry."
            }
      ]
},
    rawRates: {"weekdays1":"6am-5pm : $1.10 for 1st 2hrs or part thereof; $0.60 for sub. ½ hr or part thereof.","weekdays2":"5pm-6am: $2.50 per entry.","saturday":"6am-5pm: $1.10 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof; 5pm-6am: $2.50 per entry.","sundayHoliday":"6am-6am next day: $2.50 per entry."}
  },
  "westgate": {
    carpark: "Westgate",
    category: "West",
    baseRatePerHour: 1.3,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr; $0.50 for sub. 15 mins"
            },
            {
                  "timeRange": "6pm - 11.59pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr; $0.50 for sub. 15 mins"
            },
            {
                  "timeRange": "6pm - 11.59pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.3,
                  "unit": "$1.30 for 1st hr; $0.50 for sub. 15 mins"
            },
            {
                  "timeRange": "6pm - 11.59pm",
                  "rate": 2.5,
                  "unit": "$2.50 per entry"
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $1.30 for 1st hr; $0.50 for sub. 15 mins","weekdays2":"6pm - 11.59pm: $2.50 per entry","saturday":"Same as wkdays","sundayHoliday":"Same as wkdays"}
  },
  "yewteepoint": {
    carpark: "Yew Tee Point",
    category: "West",
    baseRatePerHour: 1.18,
    dayRates: {
      "weekday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.18,
                  "unit": "$1.18 for 1st hr; $0.64 for sub. ½ hr or part thereof."
            }
      ],
      "saturday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.18,
                  "unit": "$1.18 for 1st hr; $0.64 for sub. ½ hr or part thereof."
            }
      ],
      "sundayHoliday": [
            {
                  "timeRange": "Daily",
                  "rate": 1.18,
                  "unit": "$1.18 for 1st hr; $0.64 for sub. ½ hr or part thereof."
            }
      ]
},
    rawRates: {"weekdays1":"Daily: $1.18 for 1st hr; $0.64 for sub. ½ hr or part thereof.","weekdays2":"-","saturday":"-","sundayHoliday":"-"}
  },
};

export const CSV_NAME_ALIASES: Record<string, string> = {
  "amkhub": "angmokiohub",
  "bugisplus": "iluma",
  "compassone": "compasspoint",
  "lotone": "lot1shoppingcentre",
  "lotoneshoppersmall": "lot1shoppingcentre",
  "northpointcity": "northpointshoppingcentre",
  "takashimayangeeanncity": "ngeeanncity",
  "singaporezoomandai": "singaporezoologicalgardensnightsafari",
  "nightsafarimandai": "singaporezoologicalgardensnightsafari",
  "nationalmuseumofsingapore": "nationalmuseumofsingapore",
  "changit1jewel": "changiairportt1t2t3",
  "changit2": "changiairportt1t2t3",
  "changit3": "changiairportt1t2t3",
  "changit4": "changiairportsouthcarparkbetweent2andjetquay",
  "sghcarpark": "singaporegeneralhospitalcarparkcegi",
  "nuhkentridge": "nuh",
  "sciencecentresingapore": "singaporesciencecentresingaporediscoverycentresnowcity",
  "singaporeflyermarinabay": "singaporeflyer",
  "resortsworldsentosa": "resortsworldsentosa",
  "esplanadetheatres": "theesplanade",
  "marinabaysands": "marinabaysands"
};

export function findCsvRate(nameOrId: string): CsvRateRecord | null {
  if (!nameOrId) return null;
  const key = nameOrId.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (CSV_NAME_ALIASES[key] && CSV_RATES_BY_NAME[CSV_NAME_ALIASES[key]]) {
    return CSV_RATES_BY_NAME[CSV_NAME_ALIASES[key]];
  }
  if (CSV_RATES_BY_NAME[key]) return CSV_RATES_BY_NAME[key];
  for (const k of Object.keys(CSV_RATES_BY_NAME)) {
    if (k.includes(key) || key.includes(k)) {
      return CSV_RATES_BY_NAME[k];
    }
  }
  return null;
}

export const CSV_NEW_CARPARKS: Carpark[] = [
  {
  "id": "csv_25_toa_payoh_lorong_8",
  "carParkId": "CSV_25_TOA_PAYOH_LOR",
  "name": "25 Toa Payoh Lorong 8",
  "agency": "Commercial",
  "area": "Central",
  "address": "25 Toa Payoh Lorong 8, Singapore",
  "availableLots": 84,
  "totalLots": 401,
  "lotStatus": "available",
  "baseRatePerHour": 2.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 2.6,
        "unit": "$1.30 / 30 Mins"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 2.6,
        "unit": "$1.30 / 30 Mins"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 2.6,
        "unit": "$1.30 / 30 Mins"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 156,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3318,
  "lng": 103.8695,
  "mapPos": {
    "top": 58,
    "left": 61
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_45_burghley_drive",
  "carParkId": "CSV_45_BURGHLEY_DRIV",
  "name": "45 Burghley Drive",
  "agency": "Commercial",
  "area": "Central",
  "address": "45 Burghley Drive, Singapore",
  "availableLots": 224,
  "totalLots": 477,
  "lotStatus": "available",
  "baseRatePerHour": 1.08,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.08,
        "unit": "$0.018 /min"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1.08,
        "unit": "$0.018 /min"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.08,
        "unit": "$0.018 /min"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 1.08,
        "unit": "$0.018 /min"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 72,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3286,
  "lng": 103.8515,
  "mapPos": {
    "top": 60,
    "left": 57
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_ang_mo_kio_hub",
  "carParkId": "CSV_ANG_MO_KIO_HUB",
  "name": "Ang Mo Kio Hub",
  "agency": "Commercial",
  "area": "Central",
  "address": "Ang Mo Kio Hub, Singapore",
  "availableLots": 168,
  "totalLots": 420,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Mon-Fri",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr; $0.60 for sub. ½ hr or part thereof."
      }
    ],
    "saturday": [
      {
        "timeRange": "Sat, Sun / Ph",
        "rate": 1.3,
        "unit": "$1.30 for 1st hr; $0.65 for sub. ½ hr or part thereof."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sat, Sun / Ph",
        "rate": 1.3,
        "unit": "$1.30 for 1st hr; $0.65 for sub. ½ hr or part thereof."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 45,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.341,
  "lng": 103.865,
  "mapPos": {
    "top": 54,
    "left": 60
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_balestier_plaza",
  "carParkId": "CSV_BALESTIER_PLAZA",
  "name": "Balestier Plaza",
  "agency": "Commercial",
  "area": "Central",
  "address": "Balestier Plaza, Singapore",
  "availableLots": 154,
  "totalLots": 327,
  "lotStatus": "available",
  "baseRatePerHour": 1.12,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1.12,
        "unit": "$1.12 per hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1.12,
        "unit": "$1.12 per hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1.12,
        "unit": "$1.12 per hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 102,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3486,
  "lng": 103.8265,
  "mapPos": {
    "top": 51,
    "left": 51
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_balestier_point",
  "carParkId": "CSV_BALESTIER_POINT",
  "name": "Balestier Point",
  "agency": "Commercial",
  "area": "Central",
  "address": "Balestier Point, Singapore",
  "availableLots": 194,
  "totalLots": 381,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-10pm",
        "rate": 1.2,
        "unit": "$1.20 per hr"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-10pm",
        "rate": 1.2,
        "unit": "$1.20 per hr"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 156,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3558,
  "lng": 103.8295,
  "mapPos": {
    "top": 47,
    "left": 52
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_bras_basah_complex",
  "carParkId": "CSV_BRAS_BASAH_COMPL",
  "name": "Bras Basah Complex",
  "agency": "Commercial",
  "area": "Central",
  "address": "Bras Basah Complex, Singapore",
  "availableLots": 141,
  "totalLots": 239,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2,
        "unit": "$1 for ½ hr"
      },
      {
        "timeRange": "5pm-1am",
        "rate": 1,
        "unit": "$0.50 for ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2,
        "unit": "$1 for ½ hr"
      },
      {
        "timeRange": "5pm-1am",
        "rate": 1,
        "unit": "$0.50 for ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-1am",
        "rate": 1,
        "unit": "$0.50 for ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 174,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3502,
  "lng": 103.8605,
  "mapPos": {
    "top": 50,
    "left": 59
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_central_place",
  "carParkId": "CSV_CENTRAL_PLACE",
  "name": "Central Place",
  "agency": "Commercial",
  "area": "Central",
  "address": "Central Place, Singapore",
  "availableLots": 204,
  "totalLots": 340,
  "lotStatus": "available",
  "baseRatePerHour": 1.8,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.8,
        "unit": "$1.80 for 1st hr; $0.85 for ½ hr"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1.8,
        "unit": "$1.80 for 1st hr; $0.85 for ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.8,
        "unit": "$1.80 for 1st hr; $0.85 for ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 135,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.337,
  "lng": 103.83,
  "mapPos": {
    "top": 56,
    "left": 52
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_compass_point",
  "carParkId": "CSV_COMPASS_POINT",
  "name": "Compass Point",
  "agency": "Commercial",
  "area": "Central",
  "address": "Compass Point, Singapore",
  "availableLots": 294,
  "totalLots": 490,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily(7am-11pm)",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof."
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily(7am-11pm)",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily(7am-11pm)",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 105,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.357,
  "lng": 103.855,
  "mapPos": {
    "top": 47,
    "left": 58
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_goldhill_plaza",
  "carParkId": "CSV_GOLDHILL_PLAZA",
  "name": "Goldhill Plaza",
  "agency": "Commercial",
  "area": "Central",
  "address": "Goldhill Plaza, Singapore",
  "availableLots": 81,
  "totalLots": 353,
  "lotStatus": "available",
  "baseRatePerHour": 1.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5.30pm",
        "rate": 1.6,
        "unit": "$1.60 for 1st hr; $1 for sub. ½ hr"
      },
      {
        "timeRange": "5.30pm-12am",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5.30pm",
        "rate": 1,
        "unit": "$1 per hr"
      },
      {
        "timeRange": "Aft 5.30pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-5.30pm",
        "rate": 1,
        "unit": "$1 per hr"
      },
      {
        "timeRange": "Aft 5.30pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 138,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3454,
  "lng": 103.8585,
  "mapPos": {
    "top": 52,
    "left": 59
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_hindoo_road_off_street",
  "carParkId": "CSV_HINDOO_ROAD_OFF_",
  "name": "Hindoo Road Off-Street",
  "agency": "Commercial",
  "area": "Central",
  "address": "Hindoo Road Off-Street, Singapore",
  "availableLots": 96,
  "totalLots": 266,
  "lotStatus": "available",
  "baseRatePerHour": 1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1,
        "unit": "0700-0700: $0.50 / 30 mins (Per Minute Charging)"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1,
        "unit": "0700-0700: $0.50 / 30 mins (Per Minute Charging)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1,
        "unit": "0700-0700: $0.50 / 30 mins (Per Minute Charging)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 171,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3338,
  "lng": 103.862,
  "mapPos": {
    "top": 57,
    "left": 60
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_hougang_green_shopping_mall",
  "carParkId": "CSV_HOUGANG_GREEN_SH",
  "name": "Hougang Green Shopping Mall",
  "agency": "Commercial",
  "area": "Central",
  "address": "Hougang Green Shopping Mall, Singapore",
  "availableLots": 114,
  "totalLots": 408,
  "lotStatus": "available",
  "baseRatePerHour": 1.07,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.07,
        "unit": "$1.07 for 1st hr; $0.55 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 1.2,
        "unit": "$1.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.07,
        "unit": "$1.07 for 1st hr; $0.55 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 1.2,
        "unit": "$1.20 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-12am",
        "rate": 2.15,
        "unit": "$2.15 per entry"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 1.2,
        "unit": "$1.20 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 93,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3394,
  "lng": 103.831,
  "mapPos": {
    "top": 55,
    "left": 53
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_hougang_plaza",
  "carParkId": "CSV_HOUGANG_PLAZA",
  "name": "Hougang Plaza",
  "agency": "Commercial",
  "area": "Central",
  "address": "Hougang Plaza, Singapore",
  "availableLots": 266,
  "totalLots": 397,
  "lotStatus": "available",
  "baseRatePerHour": 0.8,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "5am-5pm",
        "rate": 0.8,
        "unit": "$0.40 for ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 1.5,
        "unit": "$1.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "5am-5pm",
        "rate": 0.8,
        "unit": "$0.40 for ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 1.5,
        "unit": "$1.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 1.5,
        "unit": "$1.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 192,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3446,
  "lng": 103.8415,
  "mapPos": {
    "top": 52,
    "left": 55
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_kampong_kapor_road_off_street",
  "carParkId": "CSV_KAMPONG_KAPOR_RO",
  "name": "Kampong Kapor Road Off-Street",
  "agency": "Commercial",
  "area": "Central",
  "address": "Kampong Kapor Road Off-Street, Singapore",
  "availableLots": 153,
  "totalLots": 463,
  "lotStatus": "available",
  "baseRatePerHour": 1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1,
        "unit": "0700-0700: $0.50 /30 mins (Per Minute Charging)"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1,
        "unit": "0700-0700: $0.50 /30 mins (Per Minute Charging)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1,
        "unit": "0700-0700: $0.50 /30 mins (Per Minute Charging)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 138,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3534,
  "lng": 103.8285,
  "mapPos": {
    "top": 48,
    "left": 52
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_mustafa_centre",
  "carParkId": "CSV_MUSTAFA_CENTRE",
  "name": "Mustafa Centre",
  "agency": "Commercial",
  "area": "Central",
  "address": "Mustafa Centre, Singapore",
  "availableLots": 216,
  "totalLots": 386,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 2,
        "unit": "1st hr: Free; $2 for sub. hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 2,
        "unit": "1st hr: Free; $2 for sub. hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 2,
        "unit": "1st hr: Free; $2 for sub. hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 171,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3498,
  "lng": 103.852,
  "mapPos": {
    "top": 50,
    "left": 57
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_nex_mall",
  "carParkId": "CSV_NEX_MALL",
  "name": "Nex Mall",
  "agency": "Commercial",
  "area": "Central",
  "address": "Nex Mall, Singapore",
  "availableLots": 70,
  "totalLots": 213,
  "lotStatus": "available",
  "baseRatePerHour": 1.3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Mon-Fri",
        "rate": 1.3,
        "unit": "$1.30 for 1st hr; $0.65 for sub. ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Sat, Sun / Ph",
        "rate": 1.4,
        "unit": "$1.40 for 1st hr; $0.70 for sub. ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sat, Sun / Ph",
        "rate": 1.4,
        "unit": "$1.40 for 1st hr; $0.70 for sub. ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 48,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3334,
  "lng": 103.8535,
  "mapPos": {
    "top": 58,
    "left": 58
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_northpoint_shopping_centre",
  "carParkId": "CSV_NORTHPOINT_SHOPP",
  "name": "Northpoint Shopping Centre",
  "agency": "Commercial",
  "area": "Central",
  "address": "Northpoint Shopping Centre, Singapore",
  "availableLots": 88,
  "totalLots": 220,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof; $0.80 for sub. ½ hr or part thereof."
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof; $0.80 for sub. ½ hr or part thereof."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof; $0.80 for sub. ½ hr or part thereof."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 75,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.361,
  "lng": 103.84,
  "mapPos": {
    "top": 45,
    "left": 55
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_parliament_house",
  "carParkId": "CSV_PARLIAMENT_HOUSE",
  "name": "Parliament House",
  "agency": "Commercial",
  "area": "Central",
  "address": "Parliament House, Singapore",
  "availableLots": 89,
  "totalLots": 355,
  "lotStatus": "available",
  "baseRatePerHour": 2.26,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8.01am-6pm",
        "rate": 2.26,
        "unit": "$1.13 per ½ hr (per min basis)"
      },
      {
        "timeRange": "6.01pm-8am",
        "rate": 2.06,
        "unit": "$2.06 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8.01am-6pm",
        "rate": 2.26,
        "unit": "$1.13 per ½ hr (per min basis)"
      },
      {
        "timeRange": "6.01pm-8am",
        "rate": 2.06,
        "unit": "$2.06 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.06,
        "unit": "$2.06 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 120,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.359,
  "lng": 103.8475,
  "mapPos": {
    "top": 46,
    "left": 56
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_ramada_hotel",
  "carParkId": "CSV_RAMADA_HOTEL",
  "name": "Ramada Hotel",
  "agency": "Commercial",
  "area": "Central",
  "address": "Ramada Hotel, Singapore",
  "availableLots": 132,
  "totalLots": 366,
  "lotStatus": "available",
  "baseRatePerHour": 1.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-6pm",
        "rate": 1.6,
        "unit": "$1.60 per hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-6pm",
        "rate": 1.6,
        "unit": "$1.60 per hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-6pm",
        "rate": 1.6,
        "unit": "$1.60 per hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 171,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3338,
  "lng": 103.862,
  "mapPos": {
    "top": 57,
    "left": 60
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_rivervale_mall",
  "carParkId": "CSV_RIVERVALE_MALL",
  "name": "Rivervale Mall",
  "agency": "Commercial",
  "area": "Central",
  "address": "Rivervale Mall, Singapore",
  "availableLots": 271,
  "totalLots": 398,
  "lotStatus": "available",
  "baseRatePerHour": 1.28,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1.28,
        "unit": "$1.28 for 1st hr, $0.64 for sub. 30 mins or part thereof."
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1.28,
        "unit": "$1.28 for 1st hr, $0.64 for sub. 30 mins or part thereof."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1.28,
        "unit": "$1.28 for 1st hr, $0.64 for sub. 30 mins or part thereof."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 183,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3514,
  "lng": 103.836,
  "mapPos": {
    "top": 49,
    "left": 54
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_shaw_plaza",
  "carParkId": "CSV_SHAW_PLAZA",
  "name": "Shaw Plaza",
  "agency": "Commercial",
  "area": "Central",
  "address": "Shaw Plaza, Singapore",
  "availableLots": 62,
  "totalLots": 167,
  "lotStatus": "available",
  "baseRatePerHour": 1.04,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.04,
        "unit": "$1.04 for 1st hr; $0.53 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 1.55,
        "unit": "$1.55 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.04,
        "unit": "$1.04 for 1st hr; $0.53 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 1.55,
        "unit": "$1.55 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.04,
        "unit": "$1.04 for 1st hr; $0.53 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 1.55,
        "unit": "$1.55 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 162,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3406,
  "lng": 103.8565,
  "mapPos": {
    "top": 54,
    "left": 58
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_shrewsbury_road_off_street",
  "carParkId": "CSV_SHREWSBURY_ROAD_",
  "name": "Shrewsbury Road Off-Street",
  "agency": "Commercial",
  "area": "Central",
  "address": "Shrewsbury Road Off-Street, Singapore",
  "availableLots": 199,
  "totalLots": 297,
  "lotStatus": "available",
  "baseRatePerHour": 1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily, 0700-0700",
        "rate": 1,
        "unit": "$0.50 /30 mins (Per Minute Charging)"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily, 0700-0700",
        "rate": 1,
        "unit": "$0.50 /30 mins (Per Minute Charging)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily, 0700-0700",
        "rate": 1,
        "unit": "$0.50 /30 mins (Per Minute Charging)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 162,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3646,
  "lng": 103.8665,
  "mapPos": {
    "top": 43,
    "left": 61
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_square_2",
  "carParkId": "CSV_SQUARE_2",
  "name": "Square 2",
  "agency": "Commercial",
  "area": "Central",
  "address": "Square 2, Singapore",
  "availableLots": 70,
  "totalLots": 171,
  "lotStatus": "available",
  "baseRatePerHour": 1.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 1.6,
        "unit": "$1.60 for 1st hr; $0.80 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 1.6,
        "unit": "$1.60 for 1st hr; $0.80 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 0.55,
        "unit": "$2.20 for 1st 4hrs; $1.10 for sub. ½ hr; Aft 6pm: $2.20 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 186,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3278,
  "lng": 103.8345,
  "mapPos": {
    "top": 60,
    "left": 53
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_the_verge",
  "carParkId": "CSV_THE_VERGE",
  "name": "The Verge",
  "agency": "Commercial",
  "area": "Central",
  "address": "The Verge, Singapore",
  "availableLots": 85,
  "totalLots": 178,
  "lotStatus": "available",
  "baseRatePerHour": 1.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.6,
        "unit": "$1.60 per hr"
      },
      {
        "timeRange": "5pm-12am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 1.3,
        "unit": "$1.30 per hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.6,
        "unit": "$1.60 per hr"
      },
      {
        "timeRange": "5pm-12am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 1.3,
        "unit": "$1.30 per hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-12am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 2,
        "unit": "$2 per hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 183,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3354,
  "lng": 103.846,
  "mapPos": {
    "top": 57,
    "left": 56
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_toa_payoh_hdb_hub",
  "carParkId": "CSV_TOA_PAYOH_HDB_HU",
  "name": "Toa Payoh HDB Hub",
  "agency": "Commercial",
  "area": "Central",
  "address": "Toa Payoh HDB Hub, Singapore",
  "availableLots": 251,
  "totalLots": 482,
  "lotStatus": "available",
  "baseRatePerHour": 1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 1,
        "unit": "$0.50 per ½ hr"
      },
      {
        "timeRange": "6pm-1am",
        "rate": 1,
        "unit": "$1 per entry"
      },
      {
        "timeRange": "Aft 10.30pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 1,
        "unit": "$0.50 per ½ hr"
      },
      {
        "timeRange": "6pm-1am",
        "rate": 1,
        "unit": "$1 per entry"
      },
      {
        "timeRange": "Aft 10.30pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-1am",
        "rate": 1,
        "unit": "$1 per entry"
      },
      {
        "timeRange": "Aft 10.30pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 87,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3626,
  "lng": 103.874,
  "mapPos": {
    "top": 44,
    "left": 62
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_yishun_ys_one",
  "carParkId": "CSV_YISHUN_YS_ONE",
  "name": "Yishun YS-ONE",
  "agency": "Commercial",
  "area": "Central",
  "address": "Yishun YS-ONE, Singapore",
  "availableLots": 224,
  "totalLots": 345,
  "lotStatus": "available",
  "baseRatePerHour": 1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "0700-2230",
        "rate": 1,
        "unit": "$0.0167 /min"
      },
      {
        "timeRange": "2230-0700",
        "rate": 1,
        "unit": "$0.0167 /min ;(Capped at $4.00)"
      }
    ],
    "saturday": [
      {
        "timeRange": "0700-2230",
        "rate": 1,
        "unit": "$0.0167 /min"
      },
      {
        "timeRange": "2230-0700",
        "rate": 1,
        "unit": "$0.0167 /min ;(Capped at $4.00)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "0700-2230",
        "rate": 1,
        "unit": "Free Parking, 2230-0700: $0.0167/min (Capped at $4.00)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 150,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.331,
  "lng": 103.8525,
  "mapPos": {
    "top": 59,
    "left": 57
  },
  "operator": "Central, North & North East",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_112_katong",
  "carParkId": "CSV_112_KATONG",
  "name": "112 Katong",
  "agency": "Commercial",
  "area": "East",
  "address": "112 Katong, Singapore",
  "availableLots": 196,
  "totalLots": 426,
  "lotStatus": "available",
  "baseRatePerHour": 0.54,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-9.59am",
        "rate": 0.54,
        "unit": "$0.54 for 1st hr; $0.16 for sub. 15mins"
      },
      {
        "timeRange": "10am-5.59pm",
        "rate": 1.07,
        "unit": "$1.07 for 1st hr; $0.27 for sub. 15mins"
      },
      {
        "timeRange": "6pm-8.59pm",
        "rate": 1.28,
        "unit": "$1.28 for 1st 30mins; $0.65 for sub. 15mins"
      },
      {
        "timeRange": "9pm-5.59am",
        "rate": 0.54,
        "unit": "$0.54 for 1st hr; $0.16 for sub. 15mins"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-9.59am",
        "rate": 0.54,
        "unit": "$0.54 for 1st hr; $0.16 for sub. 15mins"
      },
      {
        "timeRange": "10am-8.59pm",
        "rate": 1.28,
        "unit": "$1.28 for 1st 30mins; $0.65 for sub. 15mins"
      },
      {
        "timeRange": "9pm-5.59am",
        "rate": 0.54,
        "unit": "$0.54 for 1st hr; $0.16 for sub. 15mins"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-9.59am",
        "rate": 0.54,
        "unit": "$0.54 for 1st hr; $0.16 for sub. 15mins"
      },
      {
        "timeRange": "10am-8.59pm",
        "rate": 1.28,
        "unit": "$1.28 for 1st 30mins; $0.65 for sub. 15mins"
      },
      {
        "timeRange": "9pm-5.59am",
        "rate": 0.54,
        "unit": "$0.54 for 1st hr; $0.16 for sub. 15mins"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 81,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3518,
  "lng": 103.942,
  "mapPos": {
    "top": 49,
    "left": 78
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_bedok_point",
  "carParkId": "CSV_BEDOK_POINT",
  "name": "Bedok Point",
  "agency": "Commercial",
  "area": "East",
  "address": "Bedok Point, Singapore",
  "availableLots": 173,
  "totalLots": 467,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof."
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof."
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof."
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof."
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 102,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3306,
  "lng": 103.9415,
  "mapPos": {
    "top": 59,
    "left": 78
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_changi_airport_south_car_park_between_t2_and_jetquay",
  "carParkId": "CSV_CHANGI_AIRPORT_S",
  "name": "Changi Airport - South Car Park (between T2 and JetQuay)",
  "agency": "Commercial",
  "area": "East",
  "address": "Changi Airport - South Car Park (between T2 and JetQuay), Singapore",
  "availableLots": 107,
  "totalLots": 314,
  "lotStatus": "available",
  "baseRatePerHour": 2.1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 2.1,
        "unit": "$0.035 per min. Capped at $35 per 24hrs. (Limited parking spaces and on a first-come, first-served basis)"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 2.1,
        "unit": "$0.035 per min. Capped at $35 per 24hrs."
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 2.1,
        "unit": "$0.035 per min. Capped at $35 per 24hrs."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 2.1,
        "unit": "$0.035 per min. Capped at $35 per 24hrs."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 159,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3302,
  "lng": 103.933,
  "mapPos": {
    "top": 59,
    "left": 76
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_changi_airport_t1_t2_t3",
  "carParkId": "CSV_CHANGI_AIRPORT_T",
  "name": "Changi Airport - T1, T2, T3",
  "agency": "Commercial",
  "area": "East",
  "address": "Changi Airport - T1, T2, T3, Singapore",
  "availableLots": 61,
  "totalLots": 254,
  "lotStatus": "available",
  "baseRatePerHour": 2.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 2.4,
        "unit": "$0.04 per min      *Based on the per-minute rate of S$0.04, 24 hours of parking will be S$57.60."
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 2.4,
        "unit": "$0.04 per min"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 2.4,
        "unit": "$0.04 per min"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 2.4,
        "unit": "$0.04 per min"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 159,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3222,
  "lng": 103.913,
  "mapPos": {
    "top": 63,
    "left": 71
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_changi_city_point",
  "carParkId": "CSV_CHANGI_CITY_POIN",
  "name": "Changi City Point",
  "agency": "Commercial",
  "area": "East",
  "address": "Changi City Point, Singapore",
  "availableLots": 216,
  "totalLots": 343,
  "lotStatus": "available",
  "baseRatePerHour": 1.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7.01am-6pm",
        "rate": 1.4,
        "unit": "$0.70 per ½ hr or part thereof."
      },
      {
        "timeRange": "6.01pm-7am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7.01am-5pm",
        "rate": 1.25,
        "unit": "$2.50 for 1st 2hrs or part thereof; $1.20 for sub. ½ hr or part thereof"
      },
      {
        "timeRange": "5.01pm-7am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7.01am-5pm",
        "rate": 1.25,
        "unit": "$2.50 for 1st 2hrs or part thereof; $1.20 for sub. ½ hr or part thereof"
      },
      {
        "timeRange": "5.01pm-7am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 108,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3474,
  "lng": 103.9485,
  "mapPos": {
    "top": 51,
    "left": 79
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_changi_village_hotel",
  "carParkId": "CSV_CHANGI_VILLAGE_H",
  "name": "Changi Village Hotel",
  "agency": "Commercial",
  "area": "East",
  "address": "Changi Village Hotel, Singapore",
  "availableLots": 339,
  "totalLots": 498,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 for sub. hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 for sub. hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 for sub. hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 63,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3414,
  "lng": 103.921,
  "mapPos": {
    "top": 54,
    "left": 73
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_city_plaza",
  "carParkId": "CSV_CITY_PLAZA",
  "name": "City Plaza",
  "agency": "Commercial",
  "area": "East",
  "address": "City Plaza, Singapore",
  "availableLots": 102,
  "totalLots": 185,
  "lotStatus": "available",
  "baseRatePerHour": 1.1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.1,
        "unit": "$1.10 for 1st hr; $0.70 for sub. ½ hr"
      },
      {
        "timeRange": "5pm-12am",
        "rate": 1.2,
        "unit": "$1.20 per entry"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 2.4,
        "unit": "$2.40 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.1,
        "unit": "$1.10 for 1st hr; $0.70 for sub. ½ hr"
      },
      {
        "timeRange": "5pm-12am",
        "rate": 1.2,
        "unit": "$1.20 per entry"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 2.4,
        "unit": "$2.40 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-12am",
        "rate": 1.2,
        "unit": "$1.20 per entry"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 2.4,
        "unit": "$2.40 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 180,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.333,
  "lng": 103.9425,
  "mapPos": {
    "top": 58,
    "left": 78
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_d_resort",
  "carParkId": "CSV_D_RESORT",
  "name": "D'Resort",
  "agency": "Commercial",
  "area": "East",
  "address": "D'Resort, Singapore",
  "availableLots": 167,
  "totalLots": 288,
  "lotStatus": "available",
  "baseRatePerHour": 1.44,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.44,
        "unit": "Mon-Thu (excluding PH, Eve of PH & School Holiday) $0.024 per min; Max/day: $15 (Valid up to 12 midnight and not applicable for multiple entries)."
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1.44,
        "unit": "Mon-Thu (excluding PH, Eve of PH & School Holiday) $0.024 per min; Max/day: $15 (Valid up to 12 midnight and not applicable for multiple entries)."
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.44,
        "unit": "Fri-Sat (Including PH, Eve of PH & School Holiday) $0.024 per min; 5pm-12am: $5 per entry. Max/day: $19."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 1.44,
        "unit": "Fri-Sat (Including PH, Eve of PH & School Holiday) $0.024 per min; 5pm-12am: $5 per entry. Max/day: $19."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 123,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3334,
  "lng": 103.951,
  "mapPos": {
    "top": 58,
    "left": 80
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_east_coast_park_e1_e2_e3_off_street",
  "carParkId": "CSV_EAST_COAST_PARK_",
  "name": "East Coast Park E1/E2/E3 Off-Street",
  "agency": "Commercial",
  "area": "East",
  "address": "East Coast Park E1/E2/E3 Off-Street, Singapore",
  "availableLots": 99,
  "totalLots": 267,
  "lotStatus": "available",
  "baseRatePerHour": 1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1,
        "unit": "0700-0700: $0.50 /30 Mins (Per Minute Charging)"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1,
        "unit": "0700-0700: $0.50 /30 Mins (Per Minute Charging)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1,
        "unit": "0700-0700: $0.50 /30 Mins (Per Minute Charging)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 102,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3306,
  "lng": 103.9415,
  "mapPos": {
    "top": 59,
    "left": 78
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_eastpoint_mall",
  "carParkId": "CSV_EASTPOINT_MALL",
  "name": "Eastpoint Mall",
  "agency": "Commercial",
  "area": "East",
  "address": "Eastpoint Mall, Singapore",
  "availableLots": 163,
  "totalLots": 419,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof, $0.30 for sub. 15 mins or part thereof."
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof, $0.30 for sub. 15 mins or part thereof."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr or part thereof, $0.30 for sub. 15 mins or part thereof."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 204,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3442,
  "lng": 103.9305,
  "mapPos": {
    "top": 53,
    "left": 75
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_grand_mecure_roxy_hotel",
  "carParkId": "CSV_GRAND_MECURE_ROX",
  "name": "Grand Mecure Roxy Hotel",
  "agency": "Commercial",
  "area": "East",
  "address": "Grand Mecure Roxy Hotel, Singapore",
  "availableLots": 99,
  "totalLots": 267,
  "lotStatus": "available",
  "baseRatePerHour": 1.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1.6,
        "unit": "$1.60 per hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1.6,
        "unit": "$1.60 per hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1.6,
        "unit": "$1.60 per hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 162,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3306,
  "lng": 103.9415,
  "mapPos": {
    "top": 59,
    "left": 78
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_ikea_tampines",
  "carParkId": "CSV_IKEA_TAMPINES",
  "name": "IKEA (Tampines)",
  "agency": "Commercial",
  "area": "East",
  "address": "IKEA (Tampines), Singapore",
  "availableLots": 180,
  "totalLots": 334,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily free",
        "rate": 1.2,
        "unit": "7am-11pm"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily free",
        "rate": 1.2,
        "unit": "7am-11pm"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily free",
        "rate": 1.2,
        "unit": "7am-11pm"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 129,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3262,
  "lng": 103.948,
  "mapPos": {
    "top": 61,
    "left": 79
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_katong_shopping_centre",
  "carParkId": "CSV_KATONG_SHOPPING_",
  "name": "Katong Shopping Centre",
  "agency": "Commercial",
  "area": "East",
  "address": "Katong Shopping Centre, Singapore",
  "availableLots": 101,
  "totalLots": 225,
  "lotStatus": "available",
  "baseRatePerHour": 1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 1,
        "unit": "$1 per hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 1,
        "unit": "$1 per hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 120,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.325,
  "lng": 103.9225,
  "mapPos": {
    "top": 61,
    "left": 73
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_katong_village",
  "carParkId": "CSV_KATONG_VILLAGE",
  "name": "Katong Village",
  "agency": "Commercial",
  "area": "East",
  "address": "Katong Village, Singapore",
  "availableLots": 93,
  "totalLots": 356,
  "lotStatus": "available",
  "baseRatePerHour": 2.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 2.2,
        "unit": "$2.20 per hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-6pm",
        "rate": 2.2,
        "unit": "$2.20 per hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-6pm",
        "rate": 2.2,
        "unit": "$2.20 per hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 141,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3358,
  "lng": 103.952,
  "mapPos": {
    "top": 56,
    "left": 80
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_lifelong_learning_institute",
  "carParkId": "CSV_LIFELONG_LEARNIN",
  "name": "Lifelong Learning Institute",
  "agency": "Commercial",
  "area": "East",
  "address": "Lifelong Learning Institute, Singapore",
  "availableLots": 289,
  "totalLots": 445,
  "lotStatus": "available",
  "baseRatePerHour": 1.8,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-5",
        "rate": 1.8,
        "unit": "59pm: $0.90 per ½ hr. Full Day Parking-6am-11:59pm: $16."
      },
      {
        "timeRange": "6pm-11.59pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      },
      {
        "timeRange": "12am-5.59am",
        "rate": 12,
        "unit": "$12 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-5",
        "rate": 1.8,
        "unit": "59pm: $0.90 per ½ hr. Full Day Parking-6am-11:59pm: $16."
      },
      {
        "timeRange": "6pm-11.59pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      },
      {
        "timeRange": "12am-5.59am",
        "rate": 12,
        "unit": "$12 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-11",
        "rate": 3.21,
        "unit": "59pm: $3.21 per entry"
      },
      {
        "timeRange": "12am-5.59am",
        "rate": 12,
        "unit": "$12 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 120,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.341,
  "lng": 103.9125,
  "mapPos": {
    "top": 54,
    "left": 71
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_paramount_hotel",
  "carParkId": "CSV_PARAMOUNT_HOTEL",
  "name": "Paramount Hotel",
  "agency": "Commercial",
  "area": "East",
  "address": "Paramount Hotel, Singapore",
  "availableLots": 182,
  "totalLots": 423,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.2,
        "unit": "$0.60 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.2,
        "unit": "$0.60 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 198,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3514,
  "lng": 103.9335,
  "mapPos": {
    "top": 49,
    "left": 76
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_roxy_square",
  "carParkId": "CSV_ROXY_SQUARE",
  "name": "Roxy Square",
  "agency": "Commercial",
  "area": "East",
  "address": "Roxy Square, Singapore",
  "availableLots": 117,
  "totalLots": 273,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr; $1.40 for sub. hr"
      },
      {
        "timeRange": "5pm-12am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr; $1.40 for sub. hr"
      },
      {
        "timeRange": "5pm-12am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-6pm",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr; $1.40 for sub. hr"
      },
      {
        "timeRange": "5pm-12am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 78,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3514,
  "lng": 103.9335,
  "mapPos": {
    "top": 49,
    "left": 76
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_singapore_post_centre",
  "carParkId": "CSV_SINGAPORE_POST_C",
  "name": "Singapore Post Centre",
  "agency": "Commercial",
  "area": "East",
  "address": "Singapore Post Centre, Singapore",
  "availableLots": 185,
  "totalLots": 293,
  "lotStatus": "available",
  "baseRatePerHour": 1.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.6,
        "unit": "$1.60 for 1st hr, $1.00 for next sub  ½ hr"
      },
      {
        "timeRange": "5pm-12am",
        "rate": 3,
        "unit": "$3/entry"
      },
      {
        "timeRange": "12am-7am",
        "rate": 1.6,
        "unit": "$1.60 for 1st hr, $1.00 for next sub ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-1pm",
        "rate": 1.6,
        "unit": "$1.60 for 1st hr, $1 for next sub  ½ hr"
      },
      {
        "timeRange": "1pm-12am",
        "rate": 1.6,
        "unit": "$3 per entry; 12am-7am $1.60 for 1st hr, $1.00 for next sub ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-12am",
        "rate": 1.6,
        "unit": "$3 per entry; 12am-7am $1.60 for 1st hr, $1.00 for next sub ½ hr ."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 198,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3274,
  "lng": 103.9235,
  "mapPos": {
    "top": 60,
    "left": 74
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_tampines_junction",
  "carParkId": "CSV_TAMPINES_JUNCTIO",
  "name": "Tampines Junction",
  "agency": "Commercial",
  "area": "East",
  "address": "Tampines Junction, Singapore",
  "availableLots": 152,
  "totalLots": 371,
  "lotStatus": "available",
  "baseRatePerHour": 1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1,
        "unit": "$1 for 1st hr; $0.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1,
        "unit": "$1 for 1st hr; $0.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1,
        "unit": "$1 for 1st hr; $0.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 126,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3178,
  "lng": 103.9195,
  "mapPos": {
    "top": 65,
    "left": 73
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_tampines_plaza_compaq_centre",
  "carParkId": "CSV_TAMPINES_PLAZA_C",
  "name": "Tampines Plaza (Compaq Centre)",
  "agency": "Commercial",
  "area": "East",
  "address": "Tampines Plaza (Compaq Centre), Singapore",
  "availableLots": 195,
  "totalLots": 296,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2,
        "unit": "$1 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2,
        "unit": "$1 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 141,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3278,
  "lng": 103.932,
  "mapPos": {
    "top": 60,
    "left": 75
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_telepark",
  "carParkId": "CSV_TELEPARK",
  "name": "Telepark",
  "agency": "Commercial",
  "area": "East",
  "address": "Telepark, Singapore",
  "availableLots": 72,
  "totalLots": 172,
  "lotStatus": "available",
  "baseRatePerHour": 1.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1.4,
        "unit": "7am-10pm: $0.70 per ½ hr (An additional surcharge of $22 per exit after 10pm)"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1.4,
        "unit": "7am-10pm: $0.70 per ½ hr (An additional surcharge of $22 per exit after 10pm)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1.4,
        "unit": "7am-10pm: $0.70 per ½ hr (An additional surcharge of $22 per exit after 10pm)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 177,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3246,
  "lng": 103.914,
  "mapPos": {
    "top": 62,
    "left": 71
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_white_sands_shopping_centre",
  "carParkId": "CSV_WHITE_SANDS_SHOP",
  "name": "White Sands Shopping Centre",
  "agency": "Commercial",
  "area": "East",
  "address": "White Sands Shopping Centre, Singapore",
  "availableLots": 289,
  "totalLots": 489,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-7pm",
        "rate": 1.2,
        "unit": "$1.20 per hr for 1st 2hrs; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 7pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-7pm",
        "rate": 1.2,
        "unit": "$1.20 per hr for 1st 2hrs; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 7pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-7pm",
        "rate": 1.2,
        "unit": "$1.20 per hr for 1st 2hrs; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 7pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 174,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3402,
  "lng": 103.9455,
  "mapPos": {
    "top": 54,
    "left": 79
  },
  "operator": "East",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_amara_hotel",
  "carParkId": "CSV_AMARA_HOTEL",
  "name": "Amara Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Amara Hotel, Singapore",
  "availableLots": 150,
  "totalLots": 416,
  "lotStatus": "available",
  "baseRatePerHour": 4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-4.59pm",
        "rate": 4,
        "unit": "$2 per ½ hr"
      },
      {
        "timeRange": "5pm-7.59am (the following day)",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-4.59pm",
        "rate": 4,
        "unit": "$2 per ½ hr"
      },
      {
        "timeRange": "5pm-7.59am (the following day)",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 51,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2868,
  "lng": 103.864,
  "mapPos": {
    "top": 79,
    "left": 60
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_berjaya_hotel",
  "carParkId": "CSV_BERJAYA_HOTEL",
  "name": "Berjaya Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Berjaya Hotel, Singapore",
  "availableLots": 173,
  "totalLots": 376,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8.30am-5pm",
        "rate": 2,
        "unit": "$1 per ½ hr"
      },
      {
        "timeRange": "5pm-10pm",
        "rate": 1,
        "unit": "$1 per hr"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 0,
        "unit": "Free"
      }
    ],
    "saturday": [
      {
        "timeRange": "8.30am-5pm",
        "rate": 2,
        "unit": "$1 per ½ hr"
      },
      {
        "timeRange": "5pm-10pm",
        "rate": 1,
        "unit": "$1 per hr"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 0,
        "unit": "Free"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8.30am-10pm",
        "rate": 1,
        "unit": "$1 per hr"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 0,
        "unit": "Free"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 171,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2948,
  "lng": 103.834,
  "mapPos": {
    "top": 75,
    "left": 53
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_carlton_hotel",
  "carParkId": "CSV_CARLTON_HOTEL",
  "name": "Carlton Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Carlton Hotel, Singapore",
  "availableLots": 259,
  "totalLots": 439,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 54,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3032,
  "lng": 103.8625,
  "mapPos": {
    "top": 71,
    "left": 60
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_concorde_hotel",
  "carParkId": "CSV_CONCORDE_HOTEL",
  "name": "Concorde Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Concorde Hotel, Singapore",
  "availableLots": 104,
  "totalLots": 359,
  "lotStatus": "available",
  "baseRatePerHour": 2.14,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2.14,
        "unit": "$2.14 for 1st hr; $1.39 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3.75,
        "unit": "$3.75 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2.14,
        "unit": "$2.14 for 1st hr; $1.39 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3.75,
        "unit": "$3.75 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.75,
        "unit": "$3.75 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 144,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2992,
  "lng": 103.8275,
  "mapPos": {
    "top": 73,
    "left": 52
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_conrad_centennial_hotel",
  "carParkId": "CSV_CONRAD_CENTENNIA",
  "name": "Conrad Centennial Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Conrad Centennial Hotel, Singapore",
  "availableLots": 254,
  "totalLots": 438,
  "lotStatus": "available",
  "baseRatePerHour": 3.3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3.3,
        "unit": "$3.30 for 1st hr; $1.10 for sub.½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.1,
        "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 1.1,
        "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 153,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3164,
  "lng": 103.843,
  "mapPos": {
    "top": 65,
    "left": 55
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_copthorne_king_s_hotel",
  "carParkId": "CSV_COPTHORNE_KING_S",
  "name": "Copthorne King's Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Copthorne King's Hotel, Singapore",
  "availableLots": 257,
  "totalLots": 395,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-12am",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub ½ hr"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 4,
        "unit": "$4 for 1st hr; $2 for sub ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-12am",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub ½ hr"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 4,
        "unit": "$4 for 1st hr; $2 for sub ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-12am",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub ½ hr"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 4,
        "unit": "$4 for 1st hr; $2 for sub ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 120,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.304,
  "lng": 103.8295,
  "mapPos": {
    "top": 71,
    "left": 52
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_copthorne_orchid_hotel",
  "carParkId": "CSV_COPTHORNE_ORCHID",
  "name": "Copthorne Orchid Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Copthorne Orchid Hotel, Singapore",
  "availableLots": 56,
  "totalLots": 207,
  "lotStatus": "available",
  "baseRatePerHour": 1.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.5,
        "unit": "$1.50 for 1st hr; $1 for sub. hr, per day $20)"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.5,
        "unit": "$1.50 for 1st hr; $1 for sub. hr, per day $20)"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.5,
        "unit": "$1.50 for 1st hr; $1 for sub. hr, per day $20)"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 102,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2856,
  "lng": 103.8385,
  "mapPos": {
    "top": 79,
    "left": 54
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_elizabeth_hotel",
  "carParkId": "CSV_ELIZABETH_HOTEL",
  "name": "Elizabeth Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Elizabeth Hotel, Singapore",
  "availableLots": 165,
  "totalLots": 330,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 105,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.302,
  "lng": 103.837,
  "mapPos": {
    "top": 72,
    "left": 54
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_four_seasons_hotel",
  "carParkId": "CSV_FOUR_SEASONS_HOT",
  "name": "Four Seasons Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Four Seasons Hotel, Singapore",
  "availableLots": 271,
  "totalLots": 398,
  "lotStatus": "available",
  "baseRatePerHour": 6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-5pm",
        "rate": 6,
        "unit": "$6 for 1st hr; $3 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-5pm",
        "rate": 6,
        "unit": "$6 for 1st hr; $3 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-5pm",
        "rate": 6,
        "unit": "$6 for 1st hr; $3 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 153,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2844,
  "lng": 103.863,
  "mapPos": {
    "top": 80,
    "left": 60
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_furama_city_centre_singapore",
  "carParkId": "CSV_FURAMA_CITY_CENT",
  "name": "Furama City Centre Singapore",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Furama City Centre Singapore, Singapore",
  "availableLots": 132,
  "totalLots": 412,
  "lotStatus": "available",
  "baseRatePerHour": 1.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "5am-5pm",
        "rate": 1.4,
        "unit": "$1.40 for 1st ½ hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "5am-5pm",
        "rate": 1.4,
        "unit": "$1.40 for 1st ½ hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 87,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2996,
  "lng": 103.836,
  "mapPos": {
    "top": 73,
    "left": 54
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_furama_riverfront_singapore",
  "carParkId": "CSV_FURAMA_RIVERFRON",
  "name": "Furama Riverfront Singapore",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Furama Riverfront Singapore, Singapore",
  "availableLots": 245,
  "totalLots": 481,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2,
        "unit": "$1 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2,
        "unit": "$1 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2,
        "unit": "$1 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 156,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3088,
  "lng": 103.8315,
  "mapPos": {
    "top": 69,
    "left": 53
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_the_ritz_carlton_millenia_singapore",
  "carParkId": "CSV_THE_RITZ_CARLTON",
  "name": "The Ritz Carlton, Millenia Singapore",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "The Ritz Carlton, Millenia Singapore, Singapore",
  "availableLots": 159,
  "totalLots": 418,
  "lotStatus": "available",
  "baseRatePerHour": 3.3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3.3,
        "unit": "$3.30 for 1st hr; $1.10 for sub.½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.1,
        "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 1.1,
        "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 213,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3004,
  "lng": 103.853,
  "mapPos": {
    "top": 73,
    "left": 57
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_gallery_hotel",
  "carParkId": "CSV_GALLERY_HOTEL",
  "name": "Gallery Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Gallery Hotel, Singapore",
  "availableLots": 215,
  "totalLots": 430,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "12pm-2pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1 for sub. ½ hr; $2 for 1st hr, $0.50 for sub. ½ hr from 2.01pm to 6.00pm for Mon-Thu"
      },
      {
        "timeRange": "6pm-11.59pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1 for sub. ½ hr; $2 for 1st hr; $0.50 for sub. ½ hr  from 12am-11.59am for Mon-Thu"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-11.59pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $0.50 for sub. ½ hr, $3 for 1st hr; $0.50 for sub. ½ hr from 12am-1.59am for Fri-Sun/PH"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2,
        "unit": "$2 for 1st hr; $0.50 for sub. ½ hr from 2.01am-6am for Fri-Sun/PH"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 45,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.302,
  "lng": 103.837,
  "mapPos": {
    "top": 72,
    "left": 54
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_goodwood_park_hotel",
  "carParkId": "CSV_GOODWOOD_PARK_HO",
  "name": "Goodwood Park Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Goodwood Park Hotel, Singapore",
  "availableLots": 100,
  "totalLots": 312,
  "lotStatus": "available",
  "baseRatePerHour": 4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $2 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-6pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $2 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 57,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2796,
  "lng": 103.861,
  "mapPos": {
    "top": 82,
    "left": 59
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_grand_copthorne_waterfront_hotel",
  "carParkId": "CSV_GRAND_COPTHORNE_",
  "name": "Grand Copthorne Waterfront Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Grand Copthorne Waterfront Hotel, Singapore",
  "availableLots": 190,
  "totalLots": 380,
  "lotStatus": "available",
  "baseRatePerHour": 3.75,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 3.75,
        "unit": "$3.75 for 1st hr; $2.14 for sub. hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 4.28,
        "unit": "$4.28 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 3.75,
        "unit": "$3.75 for 1st hr; $2.14 for sub. hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 4.28,
        "unit": "$4.28 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 4.28,
        "unit": "$4.28 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 195,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.282,
  "lng": 103.862,
  "mapPos": {
    "top": 81,
    "left": 60
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_grand_hyatt_hotel",
  "carParkId": "CSV_GRAND_HYATT_HOTE",
  "name": "Grand Hyatt Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Grand Hyatt Hotel, Singapore",
  "availableLots": 100,
  "totalLots": 358,
  "lotStatus": "available",
  "baseRatePerHour": 3.21,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "4am-4.59pm",
        "rate": 3.21,
        "unit": "$3.21 for 1st hr; $1.07 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "4am-4.59pm",
        "rate": 3.21,
        "unit": "$3.21 for 1st hr; $1.07 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "4am-3.59am",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 123,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3124,
  "lng": 103.858,
  "mapPos": {
    "top": 67,
    "left": 59
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_grand_mercure_roxy_hotel",
  "carParkId": "CSV_GRAND_MERCURE_RO",
  "name": "Grand Mercure Roxy Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Grand Mercure Roxy Hotel, Singapore",
  "availableLots": 75,
  "totalLots": 259,
  "lotStatus": "available",
  "baseRatePerHour": 1.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1.6,
        "unit": "$1.60 per hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1.6,
        "unit": "$1.60 per hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1.6,
        "unit": "$1.60 per hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 144,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2992,
  "lng": 103.8275,
  "mapPos": {
    "top": 73,
    "left": 52
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_grand_pacific_hotel_formerly_allson_hotel",
  "carParkId": "CSV_GRAND_PACIFIC_HO",
  "name": "Grand Pacific Hotel (Formerly Allson Hotel)",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Grand Pacific Hotel (Formerly Allson Hotel), Singapore",
  "availableLots": 70,
  "totalLots": 303,
  "lotStatus": "available",
  "baseRatePerHour": 2.64,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.64,
        "unit": "$1.32 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.57,
        "unit": "$3.57 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.64,
        "unit": "$1.32 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.57,
        "unit": "$3.57 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.57,
        "unit": "$3.57 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 48,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2784,
  "lng": 103.8355,
  "mapPos": {
    "top": 83,
    "left": 54
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_grand_park_city_hall_hotel",
  "carParkId": "CSV_GRAND_PARK_CITY_",
  "name": "Grand Park City Hall Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Grand Park City Hall Hotel, Singapore",
  "availableLots": 138,
  "totalLots": 460,
  "lotStatus": "available",
  "baseRatePerHour": 3.28,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 3.28,
        "unit": "$3.28 for 1st hr; $1.55 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 3.28,
        "unit": "$3.28 for 1st hr; $1.55 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-5pm",
        "rate": 3.28,
        "unit": "$3.28 for 1st hr; $1.55 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 165,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.286,
  "lng": 103.847,
  "mapPos": {
    "top": 79,
    "left": 56
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_grand_park_orchard",
  "carParkId": "CSV_GRAND_PARK_ORCHA",
  "name": "Grand Park Orchard",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Grand Park Orchard, Singapore",
  "availableLots": 123,
  "totalLots": 233,
  "lotStatus": "available",
  "baseRatePerHour": 3.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-5pm",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 168,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3024,
  "lng": 103.8455,
  "mapPos": {
    "top": 72,
    "left": 56
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_hilton_hotel",
  "carParkId": "CSV_HILTON_HOTEL",
  "name": "Hilton Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Hilton Hotel, Singapore",
  "availableLots": 272,
  "totalLots": 486,
  "lotStatus": "available",
  "baseRatePerHour": 7,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 7,
        "unit": "$7 for 1st hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 7,
        "unit": "$7 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-6pm",
        "rate": 7,
        "unit": "$7 for 1st hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 7,
        "unit": "$7 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 7,
        "unit": "$7 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 111,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3028,
  "lng": 103.854,
  "mapPos": {
    "top": 71,
    "left": 58
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_holiday_inn_atrium",
  "carParkId": "CSV_HOLIDAY_INN_ATRI",
  "name": "Holiday Inn Atrium",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Holiday Inn Atrium, Singapore",
  "availableLots": 208,
  "totalLots": 341,
  "lotStatus": "available",
  "baseRatePerHour": 1.8,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.8,
        "unit": "$1.80 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.6,
        "unit": "$3.60 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.8,
        "unit": "$1.80 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.6,
        "unit": "$3.60 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.6,
        "unit": "$3.60 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 96,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3168,
  "lng": 103.8515,
  "mapPos": {
    "top": 65,
    "left": 57
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_holiday_inn_express_singapore",
  "carParkId": "CSV_HOLIDAY_INN_EXPR",
  "name": "Holiday Inn Express Singapore",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Holiday Inn Express Singapore, Singapore",
  "availableLots": 114,
  "totalLots": 455,
  "lotStatus": "available",
  "baseRatePerHour": 6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 6,
        "unit": "$3 per ½ hr."
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 6,
        "unit": "$3 per ½ hr."
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 6,
        "unit": "$3 per ½ hr."
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 6,
        "unit": "$3 per ½ hr."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 6,
        "unit": "$3 per ½ hr."
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 6,
        "unit": "$3 per ½ hr."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 120,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.312,
  "lng": 103.8495,
  "mapPos": {
    "top": 67,
    "left": 57
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_holiday_inn_singapore_orchard_city_centre",
  "carParkId": "CSV_HOLIDAY_INN_SING",
  "name": "Holiday Inn Singapore Orchard City Centre",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Holiday Inn Singapore Orchard City Centre, Singapore",
  "availableLots": 234,
  "totalLots": 434,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 189,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2892,
  "lng": 103.865,
  "mapPos": {
    "top": 78,
    "left": 60
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_inter_continental_hotel",
  "carParkId": "CSV_INTER_CONTINENTA",
  "name": "Inter-continental Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Inter-continental Hotel, Singapore",
  "availableLots": 228,
  "totalLots": 346,
  "lotStatus": "available",
  "baseRatePerHour": 1.07,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.07,
        "unit": "$1.07 for 1st hr; $0.37 for sub. 10mins (Car park at Parco Bugis Junction)"
      },
      {
        "timeRange": "Mon-Thu",
        "rate": 1.25,
        "unit": "Aft 5pm: $2.50 per entry. Fri: $2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.25,
        "unit": "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 1.25,
        "unit": "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 51,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3108,
  "lng": 103.874,
  "mapPos": {
    "top": 68,
    "left": 62
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_klapsons_the_boutique_hotel",
  "carParkId": "CSV_KLAPSONS_THE_BOU",
  "name": "klapsons, The Boutique Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "klapsons, The Boutique Hotel, Singapore",
  "availableLots": 187,
  "totalLots": 424,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 3,
        "unit": "6.30am to 6.30pm - first 3 hours at $3.00 and subsequent half an hour at $1.50"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1.2,
        "unit": "6.30pm to 6.30am - $ 4.00 flat"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 4,
        "unit": "After 2pm - $4.00 flat"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 4,
        "unit": "$4.00 flat"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 99,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3012,
  "lng": 103.87,
  "mapPos": {
    "top": 72,
    "left": 61
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_landmark_village_hotel_formally_golden_landmark_hotel",
  "carParkId": "CSV_LANDMARK_VILLAGE",
  "name": "Landmark Village Hotel (Formally Golden Landmark Hotel)",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Landmark Village Hotel (Formally Golden Landmark Hotel), Singapore",
  "availableLots": 102,
  "totalLots": 268,
  "lotStatus": "available",
  "baseRatePerHour": 1.9,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.9,
        "unit": "$1.90 for 1st hr; $1.07 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.9,
        "unit": "$1.90 for 1st hr; $1.07 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 93,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3004,
  "lng": 103.853,
  "mapPos": {
    "top": 73,
    "left": 57
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_m_hotel",
  "carParkId": "CSV_M_HOTEL",
  "name": "M Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "M Hotel, Singapore",
  "availableLots": 53,
  "totalLots": 251,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 96,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2848,
  "lng": 103.8715,
  "mapPos": {
    "top": 80,
    "left": 62
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_mandarin_orchard_singapore",
  "carParkId": "CSV_MANDARIN_ORCHARD",
  "name": "Mandarin Orchard Singapore",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Mandarin Orchard Singapore, Singapore",
  "availableLots": 74,
  "totalLots": 351,
  "lotStatus": "available",
  "baseRatePerHour": 3.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 216,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2848,
  "lng": 103.8715,
  "mapPos": {
    "top": 80,
    "left": 62
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_mandarin_oriental_hotel",
  "carParkId": "CSV_MANDARIN_ORIENTA",
  "name": "Mandarin Oriental Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Mandarin Oriental Hotel, Singapore",
  "availableLots": 272,
  "totalLots": 486,
  "lotStatus": "available",
  "baseRatePerHour": 1.1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Mon-Thu",
        "rate": 1.1,
        "unit": "7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)"
      },
      {
        "timeRange": "Mon-Thu",
        "rate": 2.2,
        "unit": "5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Fri/Sat-Sun/PH",
        "rate": 1.2,
        "unit": "7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking"
      },
      {
        "timeRange": "2am-7am",
        "rate": 2.2,
        "unit": "$1.10 per ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Fri/Sat-Sun/PH",
        "rate": 1.2,
        "unit": "7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking"
      },
      {
        "timeRange": "2am-7am",
        "rate": 2.2,
        "unit": "$1.10 per ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 201,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2828,
  "lng": 103.829,
  "mapPos": {
    "top": 81,
    "left": 52
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_marina_bay_sands",
  "carParkId": "CSV_MARINA_BAY_SANDS",
  "name": "Marina Bay Sands",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Marina Bay Sands, Singapore",
  "availableLots": 90,
  "totalLots": 309,
  "lotStatus": "available",
  "baseRatePerHour": 6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-7pm",
        "rate": 6,
        "unit": "$6 for 1st hr; $1 for sub. hr; (Capped at $26 every 24hrs)"
      },
      {
        "timeRange": "Aft 7pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-7pm",
        "rate": 6,
        "unit": "$6 for 1st hr; $1 for sub. hr; (Capped at $26 every 24hrs)"
      },
      {
        "timeRange": "Aft 7pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-7pm",
        "rate": 6,
        "unit": "$6 for 1st hr; $1 for sub. hr; (Capped at $26 every 24hrs)"
      },
      {
        "timeRange": "Aft 7pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 84,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2992,
  "lng": 103.8275,
  "mapPos": {
    "top": 73,
    "left": 52
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_marina_mandarin_hotel",
  "carParkId": "CSV_MARINA_MANDARIN_",
  "name": "Marina Mandarin Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Marina Mandarin Hotel, Singapore",
  "availableLots": 327,
  "totalLots": 496,
  "lotStatus": "available",
  "baseRatePerHour": 1.1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Mon-Thu",
        "rate": 1.1,
        "unit": "7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)"
      },
      {
        "timeRange": "Mon-Thu",
        "rate": 2.2,
        "unit": "5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr for sub. ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Fri-Sun/PH",
        "rate": 1.2,
        "unit": "7am-2am :$2.40 for 1st 2hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr for sub. ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Fri-Sun/PH",
        "rate": 1.2,
        "unit": "7am-2am :$2.40 for 1st 2hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr for sub. ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 51,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3108,
  "lng": 103.874,
  "mapPos": {
    "top": 68,
    "left": 62
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_novotel_clarke_quay",
  "carParkId": "CSV_NOVOTEL_CLARKE_Q",
  "name": "Novotel Clarke Quay",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Novotel Clarke Quay, Singapore",
  "availableLots": 74,
  "totalLots": 351,
  "lotStatus": "available",
  "baseRatePerHour": 1.07,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.07,
        "unit": "$1.07 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-1pm",
        "rate": 1.07,
        "unit": "$1.07 per hr"
      },
      {
        "timeRange": "Aft 1pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 96,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2848,
  "lng": 103.8715,
  "mapPos": {
    "top": 80,
    "left": 62
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_one_fullerton",
  "carParkId": "CSV_ONE_FULLERTON",
  "name": "One Fullerton",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "One Fullerton, Singapore",
  "availableLots": 245,
  "totalLots": 481,
  "lotStatus": "available",
  "baseRatePerHour": 5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 5,
        "unit": "$2.50 per ½ hr"
      },
      {
        "timeRange": "After 6pm",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 96,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3088,
  "lng": 103.8315,
  "mapPos": {
    "top": 69,
    "left": 53
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_orchard_grand_court_hotel",
  "carParkId": "CSV_ORCHARD_GRAND_CO",
  "name": "Orchard Grand Court Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Orchard Grand Court Hotel, Singapore",
  "availableLots": 261,
  "totalLots": 484,
  "lotStatus": "available",
  "baseRatePerHour": 2.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.5,
        "unit": "$2.50 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.5,
        "unit": "$2.50 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 189,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2892,
  "lng": 103.865,
  "mapPos": {
    "top": 78,
    "left": 60
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_orchard_hotel_shopping_arcade",
  "carParkId": "CSV_ORCHARD_HOTEL_SH",
  "name": "Orchard Hotel Shopping Arcade",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Orchard Hotel Shopping Arcade, Singapore",
  "availableLots": 143,
  "totalLots": 281,
  "lotStatus": "available",
  "baseRatePerHour": 5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 5,
        "unit": "$5 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 5.5,
        "unit": "$5.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 5,
        "unit": "$5 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 5.5,
        "unit": "$5.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 126,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2888,
  "lng": 103.8565,
  "mapPos": {
    "top": 78,
    "left": 58
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_orchard_parade_hotel",
  "carParkId": "CSV_ORCHARD_PARADE_H",
  "name": "Orchard Parade Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Orchard Parade Hotel, Singapore",
  "availableLots": 37,
  "totalLots": 154,
  "lotStatus": "available",
  "baseRatePerHour": 4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 69,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3052,
  "lng": 103.855,
  "mapPos": {
    "top": 70,
    "left": 58
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_pan_pacific_hotel",
  "carParkId": "CSV_PAN_PACIFIC_HOTE",
  "name": "Pan Pacific Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Pan Pacific Hotel, Singapore",
  "availableLots": 138,
  "totalLots": 238,
  "lotStatus": "available",
  "baseRatePerHour": 1.1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Mon-Thu",
        "rate": 1.1,
        "unit": "7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)"
      },
      {
        "timeRange": "Mon-Thu",
        "rate": 2.2,
        "unit": "5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Fri/Sat-Sun/PH",
        "rate": 1.2,
        "unit": "7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking"
      },
      {
        "timeRange": "2am-7am",
        "rate": 2.2,
        "unit": "$1.10 per ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Fri/Sat-Sun/PH",
        "rate": 1.2,
        "unit": "7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking"
      },
      {
        "timeRange": "2am-7am",
        "rate": 2.2,
        "unit": "$1.10 per ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 183,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2964,
  "lng": 103.868,
  "mapPos": {
    "top": 74,
    "left": 61
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_pan_pacific_orchard",
  "carParkId": "CSV_PAN_PACIFIC_ORCH",
  "name": "Pan Pacific Orchard",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Pan Pacific Orchard, Singapore",
  "availableLots": 267,
  "totalLots": 485,
  "lotStatus": "available",
  "baseRatePerHour": 4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 60,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.296,
  "lng": 103.8595,
  "mapPos": {
    "top": 75,
    "left": 59
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_parkroyal_on_beach_road",
  "carParkId": "CSV_PARKROYAL_ON_BEA",
  "name": "PARKROYAL on Beach Road",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "PARKROYAL on Beach Road, Singapore",
  "availableLots": 32,
  "totalLots": 151,
  "lotStatus": "available",
  "baseRatePerHour": 2.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.5,
        "unit": "Multi Storey Carpark - $2.50 for 1st hr; $1.50 for sub. ½ hr. Hotel Driveway - $6 for 1st hr; $2 for sub. ½ hr."
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "Multi Storey Carpark - $2.50 per entry. Hotel Driveway - $6 per entry."
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.5,
        "unit": "Multi Storey Carpark - $2.50 for 1st hr; $1.50 for sub. ½ hr. Hotel Driveway - $6 for 1st hr; $2 for sub. ½ hr."
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "Multi Storey Carpark - $2.50 per entry. Hotel Driveway - $6 per entry."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.5,
        "unit": "Multi-Storey Carpark - $2.50 per entry. Hotel Driveway - $6 per entry."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 66,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3048,
  "lng": 103.8465,
  "mapPos": {
    "top": 71,
    "left": 56
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_peninsula_excelsior_hotel",
  "carParkId": "CSV_PENINSULA_EXCELS",
  "name": "Peninsula Excelsior Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Peninsula Excelsior Hotel, Singapore",
  "availableLots": 70,
  "totalLots": 171,
  "lotStatus": "available",
  "baseRatePerHour": 2.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2.6,
        "unit": "$2.60 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2.6,
        "unit": "$2.60 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.5,
        "unit": "$1.50 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 216,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3008,
  "lng": 103.8615,
  "mapPos": {
    "top": 72,
    "left": 59
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_raffles_hotel",
  "carParkId": "CSV_RAFFLES_HOTEL",
  "name": "Raffles Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Raffles Hotel, Singapore",
  "availableLots": 239,
  "totalLots": 391,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "12am-6pm",
        "rate": 3,
        "unit": "$3 for 1st ½ hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "6pm-12am",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "12am-6pm",
        "rate": 3,
        "unit": "$3 for 1st ½ hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "6pm-12am",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 186,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2968,
  "lng": 103.8765,
  "mapPos": {
    "top": 74,
    "left": 63
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_regent_hotel",
  "carParkId": "CSV_REGENT_HOTEL",
  "name": "Regent Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Regent Hotel, Singapore",
  "availableLots": 133,
  "totalLots": 459,
  "lotStatus": "available",
  "baseRatePerHour": 5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 5,
        "unit": "$5 for 1st hr; $2.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 5,
        "unit": "$5 for 1st hr; $2.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-6pm",
        "rate": 5,
        "unit": "$5 for 1st hr; $2.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 84,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2992,
  "lng": 103.8275,
  "mapPos": {
    "top": 73,
    "left": 52
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_rendezvous_hotel",
  "carParkId": "CSV_RENDEZVOUS_HOTEL",
  "name": "Rendezvous Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Rendezvous Hotel, Singapore",
  "availableLots": 95,
  "totalLots": 451,
  "lotStatus": "available",
  "baseRatePerHour": 1.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1.6,
        "unit": "$3.20 for 1st 2hrs; $1.60 for sub. hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1.6,
        "unit": "$3.20 for 1st 2hrs; $1.60 for sub. hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1.6,
        "unit": "$3.20 for 1st 2hrs; $1.60 for sub. hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 216,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2848,
  "lng": 103.8715,
  "mapPos": {
    "top": 80,
    "left": 62
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_royal_plaza_on_scotts",
  "carParkId": "CSV_ROYAL_PLAZA_ON_S",
  "name": "Royal Plaza On Scotts",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Royal Plaza On Scotts, Singapore",
  "availableLots": 252,
  "totalLots": 394,
  "lotStatus": "available",
  "baseRatePerHour": 4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 5.5,
        "unit": "$5.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-6pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 5.5,
        "unit": "$5.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 5.5,
        "unit": "$5.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 129,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2972,
  "lng": 103.835,
  "mapPos": {
    "top": 74,
    "left": 53
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_shangri_la_hotel",
  "carParkId": "CSV_SHANGRI_LA_HOTEL",
  "name": "Shangri-la Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Shangri-la Hotel, Singapore",
  "availableLots": 178,
  "totalLots": 468,
  "lotStatus": "available",
  "baseRatePerHour": 6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 6,
        "unit": "$6 for 1st hr; $2 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 8,
        "unit": "$8 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 6,
        "unit": "$6 for 1st hr; $2 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 8,
        "unit": "$8 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-5pm",
        "rate": 6,
        "unit": "$6 for 1st hr; $2 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 8,
        "unit": "$8 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 63,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2804,
  "lng": 103.828,
  "mapPos": {
    "top": 82,
    "left": 52
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_sheraton_towers_hotel",
  "carParkId": "CSV_SHERATON_TOWERS_",
  "name": "Sheraton Towers Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Sheraton Towers Hotel, Singapore",
  "availableLots": 93,
  "totalLots": 356,
  "lotStatus": "available",
  "baseRatePerHour": 4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $2 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $2 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 81,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2988,
  "lng": 103.869,
  "mapPos": {
    "top": 73,
    "left": 61
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_singapore_marriott_hotel",
  "carParkId": "CSV_SINGAPORE_MARRIO",
  "name": "Singapore Marriott Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Singapore Marriott Hotel, Singapore",
  "availableLots": 99,
  "totalLots": 224,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-6pm",
        "rate": 3,
        "unit": "$0.05 per min/$3 per hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3,
        "unit": "$0.05 per min/$3 per hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-6pm",
        "rate": 3,
        "unit": "$0.05 per min/$3 per hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3,
        "unit": "$0.05 per min/$3 per hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-6pm",
        "rate": 3,
        "unit": "$0.05 per min/$3 per hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3,
        "unit": "$0.05 per min/$3 per hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 99,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3012,
  "lng": 103.87,
  "mapPos": {
    "top": 72,
    "left": 61
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_swissotel_merchant_court_hotel",
  "carParkId": "CSV_SWISSOTEL_MERCHA",
  "name": "Swissotel Merchant Court Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Swissotel Merchant Court Hotel, Singapore",
  "availableLots": 48,
  "totalLots": 160,
  "lotStatus": "available",
  "baseRatePerHour": 4.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 4.5,
        "unit": "$4.50 for 1st hr; $1.50 for sub. ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 4.5,
        "unit": "$4.50 for 1st hr; $1.50 for sub. ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 4.5,
        "unit": "$4.50 for 1st hr; $1.50 for sub. ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 165,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.286,
  "lng": 103.847,
  "mapPos": {
    "top": 79,
    "left": 56
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_swissotel_stamford_hotel",
  "carParkId": "CSV_SWISSOTEL_STAMFO",
  "name": "Swissotel Stamford Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Swissotel Stamford Hotel, Singapore",
  "availableLots": 143,
  "totalLots": 281,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $0.50 for sub. 15mins (Car park at Raffles City Shopping Centre)"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1,
        "unit": "$2 for 1st 2hrs; $0.30 for sub. 15mins"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 1,
        "unit": "$2 for 1st 2hrs; $0.30 for sub. 15mins"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 156,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3088,
  "lng": 103.8315,
  "mapPos": {
    "top": 69,
    "left": 53
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_sunshine_place",
  "carParkId": "CSV_SUNSHINE_PLACE",
  "name": "Sunshine Place",
  "agency": "Commercial",
  "area": "West",
  "address": "Sunshine Place, Singapore",
  "availableLots": 216,
  "totalLots": 386,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "HDB coupon parking"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1.2,
        "unit": "HDB coupon parking"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.2,
        "unit": "HDB coupon parking"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 1.2,
        "unit": "HDB coupon parking"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 171,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3368,
  "lng": 103.745,
  "mapPos": {
    "top": 56,
    "left": 33
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_traders_hotel",
  "carParkId": "CSV_TRADERS_HOTEL",
  "name": "Traders Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "Traders Hotel, Singapore",
  "availableLots": 289,
  "totalLots": 445,
  "lotStatus": "available",
  "baseRatePerHour": 2.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-5pm",
        "rate": 2.4,
        "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-5pm",
        "rate": 2.4,
        "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 60,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.304,
  "lng": 103.8295,
  "mapPos": {
    "top": 71,
    "left": 52
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_york_hotel",
  "carParkId": "CSV_YORK_HOTEL",
  "name": "York Hotel",
  "agency": "Hotel Mgmt",
  "area": "Central",
  "address": "York Hotel, Singapore",
  "availableLots": 123,
  "totalLots": 233,
  "lotStatus": "available",
  "baseRatePerHour": 4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8.01am-6pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $2 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8.01am-6pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $2 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 48,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3024,
  "lng": 103.8455,
  "mapPos": {
    "top": 72,
    "left": 56
  },
  "operator": "Hotels",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_angullia_park_off_street",
  "carParkId": "CSV_ANGULLIA_PARK_OF",
  "name": "Angullia Park Off-Street",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Angullia Park Off-Street, Singapore",
  "availableLots": 44,
  "totalLots": 202,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 2,
        "unit": "$1.00 /30 mins (Per Minute Charging)"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1,
        "unit": "$0.50 /30 mins (Per Minute Charging)"
      }
    ],
    "saturday": [
      {
        "timeRange": "0700-1700",
        "rate": 2,
        "unit": "$1.00 per 30 mins; 1700-0700: $0.50 per 30 mins (Per Minute Charging)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 1,
        "unit": "$0.50 /30 mins (Per Minute Charging)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 87,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2966,
  "lng": 103.848,
  "mapPos": {
    "top": 74,
    "left": 56
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_atrium_orchard",
  "carParkId": "CSV_ATRIUM_ORCHARD",
  "name": "Atrium @ Orchard",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Atrium @ Orchard, Singapore",
  "availableLots": 176,
  "totalLots": 333,
  "lotStatus": "available",
  "baseRatePerHour": 1.07,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Mon-Thurs",
        "rate": 1.07,
        "unit": "12am-5.59pm: $1.07 for 1st hr; $0.32 for sub. 15mins; Fri & Eve of PH: $1.07 for 1st hr; $0.32 for sub. 15mins"
      },
      {
        "timeRange": "Mon-Thurs",
        "rate": 2.14,
        "unit": "6pm-11.59pm: $2.14 per entry; Fri & Eve of PH: 6pm-2.59am (the next day): $2.14 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "3am-5.59pm",
        "rate": 1.07,
        "unit": "$2.14 for 1st 2 hrs; $0.32 for sub. 15mins"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "3am-5.59pm",
        "rate": 1.07,
        "unit": "$2.14 for 1st 2hrs; $0.32 for sub. 15mins"
      },
      {
        "timeRange": "6pm-11.59pm",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 108,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3074,
  "lng": 103.8275,
  "mapPos": {
    "top": 69,
    "left": 52
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_cathay_cineleisure_orchard",
  "carParkId": "CSV_CATHAY_CINELEISU",
  "name": "Cathay Cineleisure Orchard",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Cathay Cineleisure Orchard, Singapore",
  "availableLots": 74,
  "totalLots": 351,
  "lotStatus": "available",
  "baseRatePerHour": 2.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "From 7am",
        "rate": 2.4,
        "unit": "$2.40 for 1st hr; $1.40 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 1.5,
        "unit": "$4.50 for 1st 3hrs; $1.60 for sub.½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "From 7am",
        "rate": 1.5,
        "unit": "$4.50 for 1st 3hrs; $1.60 for sub. ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "From 7am",
        "rate": 1.5,
        "unit": "$4.50 for 1st 3hrs; $1.60 for sub. ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 216,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2898,
  "lng": 103.8535,
  "mapPos": {
    "top": 77,
    "left": 58
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_comcentre_exeter_rd",
  "carParkId": "CSV_COMCENTRE_EXETER",
  "name": "ComCentre (Exeter Rd)",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "ComCentre (Exeter Rd), Singapore",
  "availableLots": 225,
  "totalLots": 432,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "6pm-6.59am",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-12.59pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "1pm-10pm",
        "rate": 1.5,
        "unit": "$3 for 1st 2hr; $1.20 for sub. ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-10pm",
        "rate": 1.5,
        "unit": "$3 for 1st 2 hr; $1.20 for sub. ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 177,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3006,
  "lng": 103.833,
  "mapPos": {
    "top": 72,
    "left": 53
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_delfi_orchard",
  "carParkId": "CSV_DELFI_ORCHARD",
  "name": "Delfi Orchard",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Delfi Orchard, Singapore",
  "availableLots": 124,
  "totalLots": 319,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.93 for sub. ½ hr"
      },
      {
        "timeRange": "5pm-11pm",
        "rate": 4.07,
        "unit": "$4.07 per entry (Car park closed at 11pm daily)"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.93 for sub. ½ hr"
      },
      {
        "timeRange": "5pm-11pm",
        "rate": 4.07,
        "unit": "$4.07 per entry (Car park closed at 11pm daily)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-11pm",
        "rate": 4.07,
        "unit": "$4.07 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 114,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2922,
  "lng": 103.8545,
  "mapPos": {
    "top": 76,
    "left": 58
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_far_east_plaza",
  "carParkId": "CSV_FAR_EAST_PLAZA",
  "name": "Far East Plaza",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Far East Plaza, Singapore",
  "availableLots": 225,
  "totalLots": 388,
  "lotStatus": "available",
  "baseRatePerHour": 2.14,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2.14,
        "unit": "$2.14 for 1st hr; $1.07 for sub. ½ hr."
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.53,
        "unit": "$3.53 per entry."
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2.14,
        "unit": "$2.14 for 1st hr; $1.07 for sub. ½ hr."
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.53,
        "unit": "$3.53 per entry."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.53,
        "unit": "$3.53 per entry."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 183,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3014,
  "lng": 103.85,
  "mapPos": {
    "top": 72,
    "left": 57
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_far_east_shopping_centre",
  "carParkId": "CSV_FAR_EAST_SHOPPIN",
  "name": "Far East Shopping Centre",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Far East Shopping Centre, Singapore",
  "availableLots": 66,
  "totalLots": 169,
  "lotStatus": "available",
  "baseRatePerHour": 2.57,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2.57,
        "unit": "$2.57 per hr; $1.28 for sub. ½hr."
      },
      {
        "timeRange": "5pm-12am",
        "rate": 3.75,
        "unit": "$3.75 per entry; 12am-8am the following day: $3.75 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2.57,
        "unit": "$2.57 per hr; $1.28 for sub. ½hr."
      },
      {
        "timeRange": "5pm-12am",
        "rate": 3.75,
        "unit": "$3.75 per entry; 12am-8am the following day: $3.75 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-12am",
        "rate": 3.75,
        "unit": "$3.75 per entry; 12am-8am the folowing day : $3.75 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 54,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2922,
  "lng": 103.8545,
  "mapPos": {
    "top": 76,
    "left": 58
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_forum_the_shopping_mall",
  "carParkId": "CSV_FORUM_THE_SHOPPI",
  "name": "Forum The Shopping Mall",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Forum The Shopping Mall, Singapore",
  "availableLots": 72,
  "totalLots": 258,
  "lotStatus": "available",
  "baseRatePerHour": 2.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-5pm",
        "rate": 2.4,
        "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.2,
        "unit": "$3.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-5pm",
        "rate": 2.6,
        "unit": "$2.60 for 1st hr; $1.40 for sub. ½ hr, Aft 5pm: $3.20 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.2,
        "unit": "$3.20 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 153,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2974,
  "lng": 103.815,
  "mapPos": {
    "top": 74,
    "left": 49
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_grand_hyatt_singapore",
  "carParkId": "CSV_GRAND_HYATT_SING",
  "name": "Grand Hyatt Singapore",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Grand Hyatt Singapore, Singapore",
  "availableLots": 150,
  "totalLots": 242,
  "lotStatus": "available",
  "baseRatePerHour": 3.21,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "4am-4.59pm",
        "rate": 3.21,
        "unit": "$3.21 for 1st hr; $1.07 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "4am-4.59pm",
        "rate": 3.21,
        "unit": "$3.21 for 1st hr; $1.07 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "4am-3.59am",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 147,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2886,
  "lng": 103.828,
  "mapPos": {
    "top": 78,
    "left": 52
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_grange_road_off_street",
  "carParkId": "CSV_GRANGE_ROAD_OFF_",
  "name": "Grange Road Off-Street",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Grange Road Off-Street, Singapore",
  "availableLots": 107,
  "totalLots": 227,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 2,
        "unit": "$1.00 /30 Mins (Per Minute Charging)"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1,
        "unit": "$0.50 /30 mins (Per Minute Charging)"
      }
    ],
    "saturday": [
      {
        "timeRange": "0700-1700",
        "rate": 1,
        "unit": "$1.00 / per 30 mins"
      },
      {
        "timeRange": "1700-0700",
        "rate": 0.5,
        "unit": "$0.50 / per 30 mins (Per Minute Charging)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 1,
        "unit": "$0.50 / 30 Mins. (Per Minute Charging)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 132,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2866,
  "lng": 103.8355,
  "mapPos": {
    "top": 79,
    "left": 54
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_international_building",
  "carParkId": "CSV_INTERNATIONAL_BU",
  "name": "International Building",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "International Building, Singapore",
  "availableLots": 305,
  "totalLots": 492,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1.2,
        "unit": "$1.20 per hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1.2,
        "unit": "$1.20 per hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1.2,
        "unit": "$1.20 per hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 207,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2886,
  "lng": 103.828,
  "mapPos": {
    "top": 78,
    "left": 52
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_liat_towers",
  "carParkId": "CSV_LIAT_TOWERS",
  "name": "Liat Towers",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Liat Towers, Singapore",
  "availableLots": 63,
  "totalLots": 210,
  "lotStatus": "available",
  "baseRatePerHour": 2.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2.5,
        "unit": "$2.50 for 1st hr; $1.30 for sub. ½ hr"
      },
      {
        "timeRange": "6pm-12am",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2.5,
        "unit": "$2.50 for 1st hr; $1.30 for sub. ½ hr"
      },
      {
        "timeRange": "6pm-12am",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2.5,
        "unit": "$2.50 for 1st hr; $1.30 for sub. ½ hr"
      },
      {
        "timeRange": "6pm-12am",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 195,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.311,
  "lng": 103.854,
  "mapPos": {
    "top": 68,
    "left": 58
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_lucky_plaza",
  "carParkId": "CSV_LUCKY_PLAZA",
  "name": "Lucky Plaza",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Lucky Plaza, Singapore",
  "availableLots": 64,
  "totalLots": 168,
  "lotStatus": "available",
  "baseRatePerHour": 1.93,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-4.59pm",
        "rate": 1.93,
        "unit": "$1.93 for 1st hr; $1.28 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.38,
        "unit": "$3.38 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-4.59pm",
        "rate": 1.93,
        "unit": "$1.93 for 1st hr; $1.28 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.38,
        "unit": "$3.38 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun",
        "rate": 1.93,
        "unit": "7am-9.59pm: $1.93 for 1st hr; $1.28 for sub. ½ hr; 10pm-6.59am: $3.38 per entry. PH: $4 per entry (Does not applies if PH falls on Sun)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 153,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3054,
  "lng": 103.835,
  "mapPos": {
    "top": 70,
    "left": 53
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_mandarin_gallery",
  "carParkId": "CSV_MANDARIN_GALLERY",
  "name": "Mandarin Gallery",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Mandarin Gallery, Singapore",
  "availableLots": 160,
  "totalLots": 286,
  "lotStatus": "available",
  "baseRatePerHour": 3.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-6pm",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $0.05 per min"
      },
      {
        "timeRange": "6pm-6am",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $0.03 per min"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-6pm",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $0.05 per min"
      },
      {
        "timeRange": "6pm-6am",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $0.03 per min"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-6pm",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $0.05 per min"
      },
      {
        "timeRange": "6pm-6am",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $0.03 per min"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 51,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3078,
  "lng": 103.836,
  "mapPos": {
    "top": 69,
    "left": 54
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_meritus_mandarin_singapore",
  "carParkId": "CSV_MERITUS_MANDARIN",
  "name": "Meritus Mandarin Singapore",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Meritus Mandarin Singapore, Singapore",
  "availableLots": 163,
  "totalLots": 465,
  "lotStatus": "available",
  "baseRatePerHour": 3.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-6pm",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $1.30 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-6pm",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $1.30 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-6pm",
        "rate": 3.5,
        "unit": "$3.50 for 1st hr; $1.30 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 150,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.305,
  "lng": 103.8265,
  "mapPos": {
    "top": 70,
    "left": 51
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_og_orchard_point",
  "carParkId": "CSV_OG_ORCHARD_POINT",
  "name": "OG Orchard Point",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "OG Orchard Point, Singapore",
  "availableLots": 137,
  "totalLots": 279,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-10.59pm",
        "rate": 2,
        "unit": "$2 for 1st hr or part thereof; $1.50 per sub. ½ hr or part thereof."
      },
      {
        "timeRange": "11pm-6.59am",
        "rate": 4,
        "unit": "$2 per ½ hr or part thereof."
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-10.59pm",
        "rate": 2,
        "unit": "$2 for 1st hr or part thereof; $1.50 per sub. ½ hr or part thereof."
      },
      {
        "timeRange": "11pm-6.59am",
        "rate": 4,
        "unit": "$2 per ½ hr or part thereof."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-10.59pm",
        "rate": 2,
        "unit": "$2 for 1st hr or part thereof; $1.50 per sub. ½ hr or part thereof."
      },
      {
        "timeRange": "11pm-6.59am",
        "rate": 4,
        "unit": "$2 per ½ hr or part thereof."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 54,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3002,
  "lng": 103.8245,
  "mapPos": {
    "top": 73,
    "left": 51
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_orchard_building",
  "carParkId": "CSV_ORCHARD_BUILDING",
  "name": "Orchard Building",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Orchard Building, Singapore",
  "availableLots": 75,
  "totalLots": 259,
  "lotStatus": "available",
  "baseRatePerHour": 2.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.2,
        "unit": "$2.20 for 1st hr; $1.20 for sub. ½ hr (Car park closed at 1am daily )"
      },
      {
        "timeRange": "5pm-1am",
        "rate": 3.6,
        "unit": "$3.60 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.2,
        "unit": "$2.20 for 1st hr; $1.20 for sub. ½ hr (Car park closed at 1am daily )"
      },
      {
        "timeRange": "5pm-1am",
        "rate": 3.6,
        "unit": "$3.60 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.2,
        "unit": "$3.60 for 1st 3hrs; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "5pm-1am",
        "rate": 3.6,
        "unit": "$3.60 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 204,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3042,
  "lng": 103.8095,
  "mapPos": {
    "top": 71,
    "left": 48
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_orchard_central",
  "carParkId": "CSV_ORCHARD_CENTRAL",
  "name": "Orchard Central",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Orchard Central, Singapore",
  "availableLots": 80,
  "totalLots": 306,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "2am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1 for sub. ½ hr"
      },
      {
        "timeRange": "6pm-2am",
        "rate": 1.5,
        "unit": "$4.50 for 1st 3hrs; $1.50 for sub. ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "2am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1 for sub. ½ hr"
      },
      {
        "timeRange": "6pm-2am",
        "rate": 1.5,
        "unit": "$4.50 for 1st 3hrs; $1.50 for sub. ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "2am-2am",
        "rate": 1.5,
        "unit": "$4.50 for 1st 3hrs; $1.50 for sub. ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 81,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3038,
  "lng": 103.851,
  "mapPos": {
    "top": 71,
    "left": 57
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_orchard_plaza",
  "carParkId": "CSV_ORCHARD_PLAZA",
  "name": "Orchard Plaza",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Orchard Plaza, Singapore",
  "availableLots": 186,
  "totalLots": 379,
  "lotStatus": "available",
  "baseRatePerHour": 2.78,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.78,
        "unit": "$1.39 for ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.85,
        "unit": "$3.85 per entry for 1st 3 hrs; $1.39 for sub. ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.78,
        "unit": "$1.39 for ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.85,
        "unit": "$3.85 per entry for 1st 3 hrs; $1.39 for sub. ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.78,
        "unit": "$1.39 for ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.85,
        "unit": "$3.85 per entry for 1st 3 hrs; $1.39 for sub. ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 174,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3002,
  "lng": 103.8245,
  "mapPos": {
    "top": 73,
    "left": 51
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_orchard_towers",
  "carParkId": "CSV_ORCHARD_TOWERS",
  "name": "Orchard Towers",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Orchard Towers, Singapore",
  "availableLots": 310,
  "totalLots": 449,
  "lotStatus": "available",
  "baseRatePerHour": 5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5.59pm",
        "rate": 5,
        "unit": "$5 per hr"
      },
      {
        "timeRange": "6pm-1.59am",
        "rate": 9,
        "unit": "$9 per entry. After 2am: $9 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5.59pm",
        "rate": 5,
        "unit": "$5 per hr"
      },
      {
        "timeRange": "6pm-1.59am",
        "rate": 9,
        "unit": "$9 per entry. After 2am: $9 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-1.59pm",
        "rate": 9,
        "unit": "$9 per entry"
      },
      {
        "timeRange": "2am-6.59pm",
        "rate": 9,
        "unit": "$9 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 54,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3162,
  "lng": 103.8145,
  "mapPos": {
    "top": 65,
    "left": 49
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_pacific_plaza",
  "carParkId": "CSV_PACIFIC_PLAZA",
  "name": "Pacific Plaza",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Pacific Plaza, Singapore",
  "availableLots": 124,
  "totalLots": 319,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 1.5,
        "unit": "$3 for 1st 2hrs; $1 for sub. ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-6pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 1.5,
        "unit": "$3 for 1st 2hrs; $1 for sub. ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-6pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 1.5,
        "unit": "$3 for 1st 2hrs; $1 for sub. ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 114,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2922,
  "lng": 103.8545,
  "mapPos": {
    "top": 76,
    "left": 58
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_palais_renaissance",
  "carParkId": "CSV_PALAIS_RENAISSAN",
  "name": "Palais Renaissance",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Palais Renaissance, Singapore",
  "availableLots": 135,
  "totalLots": 198,
  "lotStatus": "available",
  "baseRatePerHour": 2.8,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.8,
        "unit": "$2.80 for 1st hr; $1.60 for sub. ½ hr"
      },
      {
        "timeRange": "5pm-1am",
        "rate": 3.8,
        "unit": "$3.80 per entry"
      },
      {
        "timeRange": "Aft 1am",
        "rate": 1.5,
        "unit": "$1.50 per hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.8,
        "unit": "$2.80 for 1st hr; $1.60 for sub. ½ hr"
      },
      {
        "timeRange": "5pm-1am",
        "rate": 3.8,
        "unit": "$3.80 per entry"
      },
      {
        "timeRange": "Aft 1am",
        "rate": 1.5,
        "unit": "$1.50 per hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-1am",
        "rate": 3.8,
        "unit": "$3.80 per 4-hourly"
      },
      {
        "timeRange": "1am-7am",
        "rate": 1.5,
        "unit": "$1.50 per hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 123,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3094,
  "lng": 103.82,
  "mapPos": {
    "top": 68,
    "left": 50
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_penang_road_off_street",
  "carParkId": "CSV_PENANG_ROAD_OFF_",
  "name": "Penang Road Off-Street",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Penang Road Off-Street, Singapore",
  "availableLots": 150,
  "totalLots": 242,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 2,
        "unit": "$1.00 / 30 mins (Per Minute Charging)"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1,
        "unit": "$0.50 / 30 mins (Per Minute Charging)"
      }
    ],
    "saturday": [
      {
        "timeRange": "0700-1700",
        "rate": 1,
        "unit": "$1.00 / per 30 mins. 1700-0700: $0.50 / per 30 mins (Per Minute Charging)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 1,
        "unit": "$0.50 / 30 mins (Per Minute Charging)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 147,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2886,
  "lng": 103.828,
  "mapPos": {
    "top": 78,
    "left": 52
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_scape",
  "carParkId": "CSV_SCAPE",
  "name": "Scape",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Scape, Singapore",
  "availableLots": 104,
  "totalLots": 226,
  "lotStatus": "available",
  "baseRatePerHour": 1.95,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-4.59pm",
        "rate": 1.95,
        "unit": "$1.95 per hr"
      },
      {
        "timeRange": "5pm-6.59am",
        "rate": 1.63,
        "unit": "$4.90 for 1st 3hrs; $1.95 for sub. hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "All day",
        "rate": 1.95,
        "unit": "$1.95 per hr or part thereof."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-4.59pm",
        "rate": 1.63,
        "unit": "$1.95 per hr, 5pm-6.59am: $4.90 for 1st 3hrs; $1.95 for sub. hr."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 81,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3198,
  "lng": 103.841,
  "mapPos": {
    "top": 64,
    "left": 55
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_shaw_centre",
  "carParkId": "CSV_SHAW_CENTRE",
  "name": "Shaw Centre",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Shaw Centre, Singapore",
  "availableLots": 251,
  "totalLots": 482,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "3.01am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "6.01pm-3.01am",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "3.01am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "6.01pm-3.01am",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "3.01am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "6.01pm-3.01am",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 117,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3006,
  "lng": 103.833,
  "mapPos": {
    "top": 72,
    "left": 53
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_shaw_house",
  "carParkId": "CSV_SHAW_HOUSE",
  "name": "Shaw House",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Shaw House, Singapore",
  "availableLots": 47,
  "totalLots": 203,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "3.01am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "6.01pm-3.01am",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "3.01am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "6.01pm-3.01am",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "3.01am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "6.01pm-3.01am",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 198,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3034,
  "lng": 103.8425,
  "mapPos": {
    "top": 71,
    "left": 55
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_sheraton_towers_singapore",
  "carParkId": "CSV_SHERATON_TOWERS_",
  "name": "Sheraton Towers Singapore",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Sheraton Towers Singapore, Singapore",
  "availableLots": 144,
  "totalLots": 240,
  "lotStatus": "available",
  "baseRatePerHour": 4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $2 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 4,
        "unit": "$4 for 1st hr; $2 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 105,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.315,
  "lng": 103.839,
  "mapPos": {
    "top": 66,
    "left": 54
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_singapore_shopping_centre",
  "carParkId": "CSV_SINGAPORE_SHOPPI",
  "name": "Singapore Shopping Centre",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Singapore Shopping Centre, Singapore",
  "availableLots": 333,
  "totalLots": 497,
  "lotStatus": "available",
  "baseRatePerHour": 2.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-8pm",
        "rate": 2.5,
        "unit": "$2.50 for 1st hr; $1.25 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 8pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-8pm",
        "rate": 2.5,
        "unit": "$2.50 for 1st hr; $1.25 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 8pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-8pm",
        "rate": 2.5,
        "unit": "$2.50 for 1st hr; $1.25 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 8pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 192,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3026,
  "lng": 103.8255,
  "mapPos": {
    "top": 72,
    "left": 51
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_starhub_centre",
  "carParkId": "CSV_STARHUB_CENTRE",
  "name": "Starhub Centre",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Starhub Centre, Singapore",
  "availableLots": 123,
  "totalLots": 410,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "6pm-7am the following day",
        "rate": 2,
        "unit": "$2.00 for 1st hr, $1.50 for next subq 1/2hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "6pm-7am the following day",
        "rate": 2,
        "unit": "$2.00 for 1st hr, $1.50 for next subq 1/2hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "6pm-7am the following day",
        "rate": 2,
        "unit": "$2.00 for 1st hr, $1.50 for next subq 1/2hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 195,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.311,
  "lng": 103.854,
  "mapPos": {
    "top": 68,
    "left": 58
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_tanglin_mall",
  "carParkId": "CSV_TANGLIN_MALL",
  "name": "Tanglin Mall",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Tanglin Mall, Singapore",
  "availableLots": 154,
  "totalLots": 417,
  "lotStatus": "available",
  "baseRatePerHour": 2.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-5pm",
        "rate": 2.4,
        "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-5pm",
        "rate": 2.4,
        "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 222,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2986,
  "lng": 103.8405,
  "mapPos": {
    "top": 73,
    "left": 55
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_tanglin_shopping_centre",
  "carParkId": "CSV_TANGLIN_SHOPPING",
  "name": "Tanglin Shopping Centre",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Tanglin Shopping Centre, Singapore",
  "availableLots": 114,
  "totalLots": 190,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5.59pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.75 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3.6,
        "unit": "$3.60 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5.59pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.75 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3.6,
        "unit": "$3.60 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.6,
        "unit": "$3.60 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 75,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.295,
  "lng": 103.814,
  "mapPos": {
    "top": 75,
    "left": 49
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_tangs",
  "carParkId": "CSV_TANGS",
  "name": "Tangs",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Tangs, Singapore",
  "availableLots": 130,
  "totalLots": 277,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-6pm",
        "rate": 3,
        "unit": "$3 for 1st hr, $0.05/min"
      },
      {
        "timeRange": "6pm-6am the following day",
        "rate": 6,
        "unit": "$6 Per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-6pm",
        "rate": 3,
        "unit": "$3 for 1st hr, $0.05/min"
      },
      {
        "timeRange": "6pm-6am the following day",
        "rate": 6,
        "unit": "$6 Per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-6pm",
        "rate": 3,
        "unit": "$3 for 1st hr, $0.05/min"
      },
      {
        "timeRange": "6pm-6am the following day",
        "rate": 6,
        "unit": "$6 Per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 132,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2866,
  "lng": 103.8355,
  "mapPos": {
    "top": 79,
    "left": 54
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_the_cathay",
  "carParkId": "CSV_THE_CATHAY",
  "name": "The Cathay",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "The Cathay, Singapore",
  "availableLots": 183,
  "totalLots": 469,
  "lotStatus": "available",
  "baseRatePerHour": 2.8,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-9",
        "rate": 2.8,
        "unit": "59am: $1.40 for ½ hr"
      },
      {
        "timeRange": "10am-9",
        "rate": 1.4,
        "unit": "59pm: $1.40 per hr"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-9",
        "rate": 1.4,
        "unit": "59pm: $1.40 per hr"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-9",
        "rate": 1.4,
        "unit": "59pm: $1.40 per hr"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 114,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2922,
  "lng": 103.8545,
  "mapPos": {
    "top": 76,
    "left": 58
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_the_centrepoint",
  "carParkId": "CSV_THE_CENTREPOINT",
  "name": "The Centrepoint",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "The Centrepoint, Singapore",
  "availableLots": 88,
  "totalLots": 402,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 sub. hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 sub. hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2,
        "unit": "$2 for 1st hr; $1.50 for sub. hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 177,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3166,
  "lng": 103.823,
  "mapPos": {
    "top": 65,
    "left": 51
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_the_heeren",
  "carParkId": "CSV_THE_HEEREN",
  "name": "The Heeren",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "The Heeren, Singapore",
  "availableLots": 138,
  "totalLots": 460,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-11pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      },
      {
        "timeRange": "8am-11pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-11pm",
        "rate": 1.67,
        "unit": "$5 for 1st 3 hrs and $1.50 for subseqent ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-11pm",
        "rate": 1.67,
        "unit": "$5 for 1st 3 hrs and $1.50 for subseqent ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 105,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.291,
  "lng": 103.829,
  "mapPos": {
    "top": 77,
    "left": 52
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_tripleone_somerset",
  "carParkId": "CSV_TRIPLEONE_SOMERS",
  "name": "TripleOne Somerset",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "TripleOne Somerset, Singapore",
  "availableLots": 167,
  "totalLots": 288,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5.59pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr (charges are before GST)"
      },
      {
        "timeRange": "6pm-11.59am",
        "rate": 1.8,
        "unit": "$1.80 per hr"
      },
      {
        "timeRange": "12am-6.59am",
        "rate": 2,
        "unit": "$0.50 sub 15 mins"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5.59pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $0.50 sub 15 mins"
      },
      {
        "timeRange": "6pm-11.59am",
        "rate": 1.8,
        "unit": "$1.80 per hr"
      },
      {
        "timeRange": "12am-6.59am",
        "rate": 2,
        "unit": "$0.50 sub 15 mins"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-11.59pm",
        "rate": 1.8,
        "unit": "$1.80 per hr"
      },
      {
        "timeRange": "12am-6.59am",
        "rate": 2,
        "unit": "$0.50 sub 15 mins"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 213,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3214,
  "lng": 103.825,
  "mapPos": {
    "top": 63,
    "left": 51
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_wheelock_place",
  "carParkId": "CSV_WHEELOCK_PLACE",
  "name": "Wheelock Place",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Wheelock Place, Singapore",
  "availableLots": 76,
  "totalLots": 305,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 4.5,
        "unit": "$4.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-6pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 4.5,
        "unit": "$4.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-6pm",
        "rate": 3,
        "unit": "$3 for 1st hr; $1.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 4.5,
        "unit": "$4.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 90,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.297,
  "lng": 103.8565,
  "mapPos": {
    "top": 74,
    "left": 58
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_winsland_house",
  "carParkId": "CSV_WINSLAND_HOUSE",
  "name": "Winsland House",
  "agency": "Commercial",
  "area": "Orchard",
  "address": "Winsland House, Singapore",
  "availableLots": 264,
  "totalLots": 440,
  "lotStatus": "available",
  "baseRatePerHour": 2.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-7pm",
        "rate": 2.5,
        "unit": "$2.50 for 1st hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "7pm-11pm",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      },
      {
        "timeRange": "Aft 11pm",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-7pm",
        "rate": 2.5,
        "unit": "$2.50 for 1st hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "7pm-11pm",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      },
      {
        "timeRange": "Aft 11pm",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-11pm",
        "rate": 4.5,
        "unit": "$4.50 per entry"
      },
      {
        "timeRange": "Aft 11pm",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 45,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.315,
  "lng": 103.839,
  "mapPos": {
    "top": 66,
    "left": 54
  },
  "operator": "Orchard Area",
  "erpZone": "Zone 1 (Orchard)",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_changi_chapel_and_museum_the_changi_museum",
  "carParkId": "CSV_CHANGI_CHAPEL_AN",
  "name": "Changi Chapel and Museum (The Changi Museum)",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Changi Chapel and Museum (The Changi Museum), Singapore",
  "availableLots": 80,
  "totalLots": 306,
  "lotStatus": "available",
  "baseRatePerHour": 0,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Free daily"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Free daily"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Free daily"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 51,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2658,
  "lng": 103.812,
  "mapPos": {
    "top": 88,
    "left": 48
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "attraction"
},
  {
  "id": "csv_chinatown_heritage_centre",
  "carParkId": "CSV_CHINATOWN_HERITA",
  "name": "Chinatown Heritage Centre",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Chinatown Heritage Centre, Singapore",
  "availableLots": 136,
  "totalLots": 413,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "Parking is available at the public car park adjacent to the Buddha Tooth Relic Temple, URA centre and People's Park Centre."
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "Parking is available at the public car park adjacent to the Buddha Tooth Relic Temple, URA centre and People's Park Centre."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "Parking is available at the public car park adjacent to the Buddha Tooth Relic Temple, URA centre and People's Park Centre."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 108,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2734,
  "lng": 103.8235,
  "mapPos": {
    "top": 85,
    "left": 51
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "attraction"
},
  {
  "id": "csv_chinese_garden",
  "carParkId": "CSV_CHINESE_GARDEN",
  "name": "Chinese Garden",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Chinese Garden, Singapore",
  "availableLots": 153,
  "totalLots": 284,
  "lotStatus": "available",
  "baseRatePerHour": 0.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-6pm",
        "rate": 0.5,
        "unit": "Free 1st hr; $0.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 1,
        "unit": "$0.50 per ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-6pm",
        "rate": 0.5,
        "unit": "Free 1st hr; $0.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 1,
        "unit": "$0.50 per ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-6pm",
        "rate": 0.5,
        "unit": "Free 1st hr; $0.50 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 1,
        "unit": "$0.50 per ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 69,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2762,
  "lng": 103.833,
  "mapPos": {
    "top": 84,
    "left": 53
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "attraction"
},
  {
  "id": "csv_haw_par_villa",
  "carParkId": "CSV_HAW_PAR_VILLA",
  "name": "Haw Par Villa",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Haw Par Villa, Singapore",
  "availableLots": 269,
  "totalLots": 441,
  "lotStatus": "available",
  "baseRatePerHour": 5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily(9am-7pm)",
        "rate": 5,
        "unit": "$5 per entry (Car park closed after 7pm)"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily(9am-7pm)",
        "rate": 5,
        "unit": "$5 per entry (Car park closed after 7pm)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily(9am-7pm)",
        "rate": 5,
        "unit": "$5 per entry (Car park closed after 7pm)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 66,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2838,
  "lng": 103.8445,
  "mapPos": {
    "top": 80,
    "left": 56
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "attraction"
},
  {
  "id": "csv_hay_dairies_goat_farm",
  "carParkId": "CSV_HAY_DAIRIES_GOAT",
  "name": "Hay Dairies Goat Farm",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Hay Dairies Goat Farm, Singapore",
  "availableLots": 85,
  "totalLots": 178,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Free daily",
        "rate": 1.2,
        "unit": "9am-4pm"
      }
    ],
    "saturday": [
      {
        "timeRange": "Free daily",
        "rate": 1.2,
        "unit": "9am-4pm"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Free daily",
        "rate": 1.2,
        "unit": "9am-4pm"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 93,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2954,
  "lng": 103.841,
  "mapPos": {
    "top": 75,
    "left": 55
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "attraction"
},
  {
  "id": "csv_jurong_bird_park",
  "carParkId": "CSV_JURONG_BIRD_PARK",
  "name": "Jurong Bird Park",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Jurong Bird Park, Singapore",
  "availableLots": 181,
  "totalLots": 378,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily(8am-5pm)",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily(8am-5pm)",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily(8am-5pm)",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 153,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2954,
  "lng": 103.841,
  "mapPos": {
    "top": 75,
    "left": 55
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "attraction"
},
  {
  "id": "csv_labrador_secret_tunnel_labrador_park",
  "carParkId": "CSV_LABRADOR_SECRET_",
  "name": "Labrador Secret Tunnel ( Labrador Park )",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Labrador Secret Tunnel ( Labrador Park ), Singapore",
  "availableLots": 135,
  "totalLots": 237,
  "lotStatus": "available",
  "baseRatePerHour": 0,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Free daily"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Free daily"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Free daily"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 192,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2766,
  "lng": 103.8415,
  "mapPos": {
    "top": 83,
    "left": 55
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "attraction"
},
  {
  "id": "csv_mandai_orchid_garden",
  "carParkId": "CSV_MANDAI_ORCHID_GA",
  "name": "Mandai Orchid Garden",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Mandai Orchid Garden, Singapore",
  "availableLots": 225,
  "totalLots": 432,
  "lotStatus": "available",
  "baseRatePerHour": 0,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Free daily"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Free daily"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Free daily"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 177,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2826,
  "lng": 103.819,
  "mapPos": {
    "top": 81,
    "left": 50
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "attraction"
},
  {
  "id": "csv_memories_at_old_ford_factory",
  "carParkId": "CSV_MEMORIES_AT_OLD_",
  "name": "Memories at Old Ford Factory",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Memories at Old Ford Factory, Singapore",
  "availableLots": 44,
  "totalLots": 202,
  "lotStatus": "available",
  "baseRatePerHour": 0,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Daily free parking at Carparks C and D"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Daily free parking at Carparks C and D"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Daily free parking at Carparks C and D"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 57,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2986,
  "lng": 103.809,
  "mapPos": {
    "top": 73,
    "left": 47
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "attraction"
},
  {
  "id": "csv_mount_faber_jewel_box",
  "carParkId": "CSV_MOUNT_FABER_JEWE",
  "name": "Mount Faber (Jewel Box)",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Mount Faber (Jewel Box), Singapore",
  "availableLots": 56,
  "totalLots": 164,
  "lotStatus": "available",
  "baseRatePerHour": 5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 5,
        "unit": "Limited public parking spaces availiable. Valet parking at The Jewel Box is available at $5 per car"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 5,
        "unit": "Limited public parking spaces availiable. Valet parking at The Jewel Box is available at $5 per car"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 5,
        "unit": "Limited public parking spaces availiable. Valet parking at The Jewel Box is available at $5 per car"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 69,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3002,
  "lng": 103.843,
  "mapPos": {
    "top": 73,
    "left": 55
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "attraction"
},
  {
  "id": "csv_national_museum_of_singapore",
  "carParkId": "CSV_NATIONAL_MUSEUM_",
  "name": "National Museum of Singapore",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "National Museum of Singapore, Singapore",
  "availableLots": 61,
  "totalLots": 209,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "Limited parking facility is available at the National Museum. Other parking facilities are available at YMCA, Singapore Management University and Fort Canning Park"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "Limited parking facility is available at the National Museum. Other parking facilities are available at YMCA, Singapore Management University and Fort Canning Park"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "Limited parking facility is available at the National Museum. Other parking facilities are available at YMCA, Singapore Management University and Fort Canning Park"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 54,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2662,
  "lng": 103.8205,
  "mapPos": {
    "top": 88,
    "left": 50
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "attraction"
},
  {
  "id": "csv_reflections_at_bukit_chandu",
  "carParkId": "CSV_REFLECTIONS_AT_B",
  "name": "Reflections at Bukit Chandu",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Reflections at Bukit Chandu, Singapore",
  "availableLots": 322,
  "totalLots": 495,
  "lotStatus": "available",
  "baseRatePerHour": 0,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Daily free parking at Carparks C and D of Pepys Road"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Daily free parking at Carparks C and D of Pepys Road"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 0,
        "unit": "Daily free parking at Carparks C and D of Pepys Road"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 180,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.291,
  "lng": 103.7975,
  "mapPos": {
    "top": 77,
    "left": 45
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "attraction"
},
  {
  "id": "csv_resorts_world_sentosa_universal_studios_singapore_rws_b1_car_park",
  "carParkId": "CSV_RESORTS_WORLD_SE",
  "name": "Resorts World Sentosa - Universal Studios Singapore (RWS B1 car park)",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Resorts World Sentosa - Universal Studios Singapore (RWS B1 car park), Singapore",
  "availableLots": 109,
  "totalLots": 188,
  "lotStatus": "available",
  "baseRatePerHour": 7,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Mon-Thu",
        "rate": 7,
        "unit": "7am-7pm: $7 for 1st hr; $1 for sub. ½ hr or part thereof. (Max: $28 per 24 hrs)"
      },
      {
        "timeRange": "Aft 7pm",
        "rate": 6,
        "unit": "$6 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Fri/Sat-Sun/PH",
        "rate": 8,
        "unit": "7am-7pm: $8 for 1st hr; $2 for sub. ½ hr or part thereof"
      },
      {
        "timeRange": "Aft 7pm",
        "rate": 8,
        "unit": "$8 per entry (Max: $28 per 24 hrs)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Fri/Sat-Sun/PH",
        "rate": 8,
        "unit": "7am-7pm: $8 for 1st hr; $2 for sub. ½ hr or part thereof"
      },
      {
        "timeRange": "Aft 7pm",
        "rate": 8,
        "unit": "$8 per entry (Max: $28 per 24 hrs)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 93,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3034,
  "lng": 103.811,
  "mapPos": {
    "top": 71,
    "left": 48
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "attraction"
},
  {
  "id": "csv_royal_selangor_pewter_museum_park_at_clarke_quay",
  "carParkId": "CSV_ROYAL_SELANGOR_P",
  "name": "Royal Selangor Pewter Museum ( Park at Clarke Quay)",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Royal Selangor Pewter Museum ( Park at Clarke Quay), Singapore",
  "availableLots": 70,
  "totalLots": 213,
  "lotStatus": "available",
  "baseRatePerHour": 2.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 2.2,
        "unit": "$2.20 for 1st hr; $1.10 for sub. ½ hr (Car park at Clarke Quay)"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 2.2,
        "unit": "$2.20 for 1st hr; $1.10 for sub. ½ hr (Car park at Clarke Quay)"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 78,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2934,
  "lng": 103.7985,
  "mapPos": {
    "top": 76,
    "left": 45
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "attraction"
},
  {
  "id": "csv_sentosa_beach_and_imbiah_car_park",
  "carParkId": "CSV_SENTOSA_BEACH_AN",
  "name": "Sentosa (Beach and Imbiah car park)",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Sentosa (Beach and Imbiah car park), Singapore",
  "availableLots": 114,
  "totalLots": 272,
  "lotStatus": "available",
  "baseRatePerHour": 0.75,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 0.75,
        "unit": "Island Entry: $6 per car*; Parking - $3 for 1st 4hrs; $1 for sub. hr. Except 12pm-2pm: Island Entry $2 per car*, free parking. *Rates covers all passengers in car"
      },
      {
        "timeRange": "5.01pm-6.59am",
        "rate": 1,
        "unit": "Island entry: $2 per car*; parking - $1 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.25,
        "unit": "Island entry: $7 per car*; Parking - $5 for 1st 4 hrs; $2 for sub. hr"
      },
      {
        "timeRange": "5.01pm-6.59am",
        "rate": 2,
        "unit": "$3 per car*; parking - $2 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.25,
        "unit": "Island entry: $7 per car*; Parking - $5 for 1st 4 hrs; $2 for sub. hr"
      },
      {
        "timeRange": "5.01pm-6.59am",
        "rate": 2,
        "unit": "$3 per car*; parking - $2 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 87,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2946,
  "lng": 103.824,
  "mapPos": {
    "top": 75,
    "left": 51
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "attraction"
},
  {
  "id": "csv_sentosa_tanjong_palawan_car_park",
  "carParkId": "CSV_SENTOSA_TANJONG_",
  "name": "Sentosa (Tanjong & Palawan car park)",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Sentosa (Tanjong & Palawan car park), Singapore",
  "availableLots": 153,
  "totalLots": 243,
  "lotStatus": "available",
  "baseRatePerHour": 0.38,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 0.38,
        "unit": "Island Entry: $6 per car*; Parking - $3 for 1st 8hrs; $1 for sub. hr. Except 12pm-2pm: Island Entry $2 per car*, free parking. *Rates covers all passengers in car"
      },
      {
        "timeRange": "5.01pm-6.59am",
        "rate": 1,
        "unit": "Island entry: $2 per car*; parking - $1 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 0.38,
        "unit": "Island entry: $7 per car*; Parking - $3 for 1st 8hrs; $1 for sub. hr"
      },
      {
        "timeRange": "5.01pm-6.59am",
        "rate": 1,
        "unit": "$3 per car*; parking - $1 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-5pm",
        "rate": 0.38,
        "unit": "Island entry: $7 per car*; Parking - $3 for 1st 8hrs; $1 for sub. hr"
      },
      {
        "timeRange": "5.01pm-6.59am",
        "rate": 1,
        "unit": "$3 per car*; parking - $1 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 48,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2974,
  "lng": 103.8335,
  "mapPos": {
    "top": 74,
    "left": 53
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "attraction"
},
  {
  "id": "csv_singapore_art_museum",
  "carParkId": "CSV_SINGAPORE_ART_MU",
  "name": "Singapore Art Museum",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Singapore Art Museum, Singapore",
  "availableLots": 216,
  "totalLots": 343,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "Parking at SAM reserved for cars with NHB parking labels.  Nearest Carparks available at Waterloo Street, Queen Street, NTUC Income Centre, Plaza by the Park and Singapore Management University."
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "Parking at SAM reserved for cars with NHB parking labels.  Nearest Carparks available at Waterloo Street, Queen Street, NTUC Income Centre, Plaza by the Park and Singapore Management University."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "Parking at SAM reserved for cars with NHB parking labels.  Nearest Carparks available at Waterloo Street, Queen Street, NTUC Income Centre, Plaza by the Park and Singapore Management University."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 78,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2774,
  "lng": 103.8085,
  "mapPos": {
    "top": 83,
    "left": 47
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "attraction"
},
  {
  "id": "csv_singapore_city_gallery_ura_centre",
  "carParkId": "CSV_SINGAPORE_CITY_G",
  "name": "Singapore City Gallery (URA centre)",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Singapore City Gallery (URA centre), Singapore",
  "availableLots": 300,
  "totalLots": 491,
  "lotStatus": "available",
  "baseRatePerHour": 2.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-10pm",
        "rate": 2.2,
        "unit": "$1.10 per ½ hr (per min charging) Public parking is also available at the Erskine Road Off-Street Carpark next to Maxwell Road Food Centre."
      },
      {
        "timeRange": "10pm-6am",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-10pm",
        "rate": 2.2,
        "unit": "$1.10 per ½ hr (per min charging) Public parking is also available at the Erskine Road Off-Street Carpark next to Maxwell Road Food Centre."
      },
      {
        "timeRange": "10pm-6am",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-10pm",
        "rate": 1.1,
        "unit": "$0.55 per ½ hr (per min charging)"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 126,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2838,
  "lng": 103.8445,
  "mapPos": {
    "top": 80,
    "left": 56
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "attraction"
},
  {
  "id": "csv_singapore_flyer",
  "carParkId": "CSV_SINGAPORE_FLYER",
  "name": "Singapore Flyer",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Singapore Flyer, Singapore",
  "availableLots": 261,
  "totalLots": 396,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-6pm",
        "rate": 2,
        "unit": "$2 per hr or part thereof. Free Lunchtime Parking from 12pm to 2pm (only valid for vehicles entering the multi-storey carpark after 12pm)."
      },
      {
        "timeRange": "6pm-6am",
        "rate": 2,
        "unit": "$2 per entry."
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-12midnight",
        "rate": 2,
        "unit": "$2 per hr or part thereof. 12midnight- 6am: $2 per entry."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-12midnight",
        "rate": 2,
        "unit": "$2 per hr or part thereof. 12midnight- 6am: $2 per entry."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 171,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2978,
  "lng": 103.842,
  "mapPos": {
    "top": 74,
    "left": 55
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "attraction"
},
  {
  "id": "csv_singapore_mint_coin_gallery",
  "carParkId": "CSV_SINGAPORE_MINT_C",
  "name": "Singapore Mint Coin Gallery",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Singapore Mint Coin Gallery, Singapore",
  "availableLots": 133,
  "totalLots": 459,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Wkdays free",
        "rate": 1.2,
        "unit": "8.30am-4.30pm"
      }
    ],
    "saturday": [
      {
        "timeRange": "Wkdays free",
        "rate": 1.2,
        "unit": "8.30am-4.30pm"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Wkdays free",
        "rate": 1.2,
        "unit": "8.30am-4.30pm"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 144,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2862,
  "lng": 103.7955,
  "mapPos": {
    "top": 79,
    "left": 44
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "attraction"
},
  {
  "id": "csv_singapore_philatelic_museum",
  "carParkId": "CSV_SINGAPORE_PHILAT",
  "name": "Singapore Philatelic Museum",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Singapore Philatelic Museum, Singapore",
  "availableLots": 201,
  "totalLots": 427,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "URA coupon parking. Nearest car park at Armenian Street between Bible House and Peranakan Museum"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "URA coupon parking. Nearest car park at Armenian Street between Bible House and Peranakan Museum"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "URA coupon parking. Nearest car park at Armenian Street between Bible House and Peranakan Museum"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 102,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2886,
  "lng": 103.7965,
  "mapPos": {
    "top": 78,
    "left": 45
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "attraction"
},
  {
  "id": "csv_singapore_science_centre_singapore_discovery_centre_snow_city",
  "carParkId": "CSV_SINGAPORE_SCIENC",
  "name": "Singapore Science centre/Singapore Discovery Centre / Snow City",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Singapore Science centre/Singapore Discovery Centre / Snow City, Singapore",
  "availableLots": 150,
  "totalLots": 416,
  "lotStatus": "available",
  "baseRatePerHour": 1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1,
        "unit": "$0.50 per ½ hour"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1,
        "unit": "$0.50 per ½ hour"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1,
        "unit": "$0.50 per ½ hour"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 171,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2738,
  "lng": 103.832,
  "mapPos": {
    "top": 85,
    "left": 53
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "attraction"
},
  {
  "id": "csv_singapore_turf_club_stc",
  "carParkId": "CSV_SINGAPORE_TURF_C",
  "name": "Singapore Turf Club (STC)",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Singapore Turf Club (STC), Singapore",
  "availableLots": 100,
  "totalLots": 312,
  "lotStatus": "available",
  "baseRatePerHour": 5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 207,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2866,
  "lng": 103.804,
  "mapPos": {
    "top": 79,
    "left": 46
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "attraction"
},
  {
  "id": "csv_singapore_zoological_gardens_night_safari",
  "carParkId": "CSV_SINGAPORE_ZOOLOG",
  "name": "Singapore Zoological gardens/Night Safari",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Singapore Zoological gardens/Night Safari, Singapore",
  "availableLots": 339,
  "totalLots": 498,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 3,
        "unit": "$3 for 1st hr; $2 sub. hr or part thereof. 4th hour onwards: $8.00 flat rate (maximum)"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 3,
        "unit": "$3 for 1st hr; $2 sub. hr or part thereof. 4th hour onwards: $8.00 flat rate (maximum)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 3,
        "unit": "$3 for 1st hr; $2 sub. hr or part thereof. 4th hour onwards: $8.00 flat rate (maximum)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 63,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2914,
  "lng": 103.806,
  "mapPos": {
    "top": 77,
    "left": 47
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "attraction"
},
  {
  "id": "csv_sungei_buloh_wetland_reserve",
  "carParkId": "CSV_SUNGEI_BULOH_WET",
  "name": "Sungei Buloh Wetland Reserve",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Sungei Buloh Wetland Reserve, Singapore",
  "availableLots": 168,
  "totalLots": 466,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily free",
        "rate": 1.2,
        "unit": "7am-7pm"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily free",
        "rate": 1.2,
        "unit": "7am-7pm"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily free",
        "rate": 1.2,
        "unit": "7am-7pm"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 141,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2938,
  "lng": 103.807,
  "mapPos": {
    "top": 76,
    "left": 47
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "attraction"
},
  {
  "id": "csv_the_arts_house_park_at_new_parliament_house",
  "carParkId": "CSV_THE_ARTS_HOUSE_P",
  "name": "The Arts House (Park at New Parliament House)",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "The Arts House (Park at New Parliament House), Singapore",
  "availableLots": 129,
  "totalLots": 196,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "Available at current Parliament House, The Adelphi and the road side along Empress Place"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "Available at current Parliament House, The Adelphi and the road side along Empress Place"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "Available at current Parliament House, The Adelphi and the road side along Empress Place"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 111,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2978,
  "lng": 103.842,
  "mapPos": {
    "top": 74,
    "left": 55
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "attraction"
},
  {
  "id": "csv_the_battle_box_park_at_fort_canning",
  "carParkId": "CSV_THE_BATTLE_BOX_P",
  "name": "The Battle Box ( Park at Fort Canning",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "The Battle Box ( Park at Fort Canning, Singapore",
  "availableLots": 126,
  "totalLots": 234,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "URA coupon parking"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "URA coupon parking"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "URA coupon parking"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 219,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2962,
  "lng": 103.808,
  "mapPos": {
    "top": 74,
    "left": 47
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "attraction"
},
  {
  "id": "csv_underwater_world_singapore",
  "carParkId": "CSV_UNDERWATER_WORLD",
  "name": "Underwater World Singapore",
  "agency": "Attractions SG",
  "area": "Central",
  "address": "Underwater World Singapore, Singapore",
  "availableLots": 92,
  "totalLots": 181,
  "lotStatus": "available",
  "baseRatePerHour": 2.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Mon-Thu",
        "rate": 2.5,
        "unit": "7am-11.59pm: $7.50 for 1st 3 hrs; $5 per hr or part thereof"
      },
      {
        "timeRange": "Mon-Thu",
        "rate": 20,
        "unit": "12am-06.59am: $20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Fri-Sun incl. PH & Sch Holidays",
        "rate": 3,
        "unit": "7am-11.59pm: $9 for 1st 3 hrs; $5 per hr or part thereof. 12am-06.59am: $20 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Fri-Sun incl. PH & Sch Holidays",
        "rate": 3,
        "unit": "7am-11.59pm: $9 for 1st 3 hrs; $5 per hr or part thereof. 12am-06.59am: $20 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 216,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2958,
  "lng": 103.7995,
  "mapPos": {
    "top": 75,
    "left": 45
  },
  "operator": "Singapore Attractions",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "attraction"
},
  {
  "id": "csv_10_raeburn_park",
  "carParkId": "CSV_10_RAEBURN_PARK",
  "name": "10 Raeburn Park",
  "agency": "Commercial",
  "area": "Central",
  "address": "10 Raeburn Park, Singapore",
  "availableLots": 261,
  "totalLots": 484,
  "lotStatus": "available",
  "baseRatePerHour": 1.07,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.07,
        "unit": "$1.07 per hr"
      },
      {
        "timeRange": "1700-2300",
        "rate": 1.07,
        "unit": "- $2.14 per entry, 2300-0800: $1.07 per hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "0800-1700",
        "rate": 1.07,
        "unit": "$1.07 per hr, 1700-2300: $2.14 per entry, 2300-0800: $1.07 per hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 1.07,
        "unit": "$1.07 per hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 99,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2912,
  "lng": 103.838,
  "mapPos": {
    "top": 77,
    "left": 54
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_1557_keppel_road",
  "carParkId": "CSV_1557_KEPPEL_ROAD",
  "name": "1557 Keppel Road",
  "agency": "Commercial",
  "area": "Central",
  "address": "1557 Keppel Road, Singapore",
  "availableLots": 183,
  "totalLots": 469,
  "lotStatus": "available",
  "baseRatePerHour": 1.29,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "0700-1900",
        "rate": 1.29,
        "unit": "$1.29 for 1st hr, $0.43 /15 mins thereafter"
      },
      {
        "timeRange": "1900-0700",
        "rate": 2.14,
        "unit": "$2.14 /Entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "0700-1300",
        "rate": 1.29,
        "unit": "-$1.29 for 1st hr, $0.43 per 15 mins thereafter"
      },
      {
        "timeRange": "1300-0700",
        "rate": 2.14,
        "unit": "$2.14 /Entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.14,
        "unit": "$2.14 / Entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 84,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2892,
  "lng": 103.8455,
  "mapPos": {
    "top": 78,
    "left": 56
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_34_boon_leat_terrace",
  "carParkId": "CSV_34_BOON_LEAT_TER",
  "name": "34 Boon Leat Terrace",
  "agency": "Commercial",
  "area": "Central",
  "address": "34 Boon Leat Terrace, Singapore",
  "availableLots": 208,
  "totalLots": 341,
  "lotStatus": "available",
  "baseRatePerHour": 1.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.6,
        "unit": "$0.80 / 30 mins"
      },
      {
        "timeRange": "1800-2200",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      },
      {
        "timeRange": "2200-0700",
        "rate": 4,
        "unit": "$4.00 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "0700-1300",
        "rate": 1.6,
        "unit": "$0.80 /30 mins"
      },
      {
        "timeRange": "1300-0700",
        "rate": 4,
        "unit": "$4.00 /entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 4,
        "unit": "$4.00 / entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 96,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2988,
  "lng": 103.8495,
  "mapPos": {
    "top": 73,
    "left": 57
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_798_upper_bukit_timah_road",
  "carParkId": "CSV_798_UPPER_BUKIT_",
  "name": "798 Upper Bukit Timah Road",
  "agency": "Commercial",
  "area": "Central",
  "address": "798 Upper Bukit Timah Road, Singapore",
  "availableLots": 48,
  "totalLots": 160,
  "lotStatus": "available",
  "baseRatePerHour": 4.28,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "0000-0700",
        "rate": 4.28,
        "unit": "$2.14 /30 mins"
      },
      {
        "timeRange": "0700-0000",
        "rate": 2.14,
        "unit": "$1.07 /30 mins"
      }
    ],
    "saturday": [
      {
        "timeRange": "0000-0700",
        "rate": 4.28,
        "unit": "$2.14 /30 mins"
      },
      {
        "timeRange": "0700-0000",
        "rate": 2.14,
        "unit": "$1.07 /30 mins"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "0000-0700",
        "rate": 4.28,
        "unit": "$2.14 /30 mins"
      },
      {
        "timeRange": "0700-0000",
        "rate": 2.14,
        "unit": "$1.07 /30 mins"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 45,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.268,
  "lng": 103.845,
  "mapPos": {
    "top": 87,
    "left": 56
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_8_shenton_way",
  "carParkId": "CSV_8_SHENTON_WAY",
  "name": "8 Shenton Way",
  "agency": "Commercial",
  "area": "Central",
  "address": "8 Shenton Way, Singapore",
  "availableLots": 240,
  "totalLots": 480,
  "lotStatus": "available",
  "baseRatePerHour": 4.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 4.6,
        "unit": "$2.30 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.8,
        "unit": "$2.80 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 4.6,
        "unit": "$2.30 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.8,
        "unit": "$2.80 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.8,
        "unit": "$2.80 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 105,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.284,
  "lng": 103.835,
  "mapPos": {
    "top": 80,
    "left": 53
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_asia_square",
  "carParkId": "CSV_ASIA_SQUARE",
  "name": "Asia Square",
  "agency": "Commercial",
  "area": "Central",
  "address": "Asia Square, Singapore",
  "availableLots": 173,
  "totalLots": 467,
  "lotStatus": "available",
  "baseRatePerHour": 4.8,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5.59pm",
        "rate": 4.8,
        "unit": "$0.08 per min"
      },
      {
        "timeRange": "6pm onwards",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6.59am (next day)",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-6.59am (next day)",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 102,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2756,
  "lng": 103.8565,
  "mapPos": {
    "top": 84,
    "left": 58
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_bangkok_bank_building",
  "carParkId": "CSV_BANGKOK_BANK_BUI",
  "name": "Bangkok Bank Building",
  "agency": "Commercial",
  "area": "Central",
  "address": "Bangkok Bank Building, Singapore",
  "availableLots": 201,
  "totalLots": 427,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-7pm",
        "rate": 2,
        "unit": "$2 for 1st ½ hr; $4 for sub. hr"
      },
      {
        "timeRange": "7am-7pm",
        "rate": 2,
        "unit": "$2 for 1st ½ hr; $4 for sub. hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-7pm",
        "rate": 2,
        "unit": "$2 for 1st ½ hr; $4 for sub. hr"
      },
      {
        "timeRange": "7am-7pm",
        "rate": 2,
        "unit": "$2 for 1st ½ hr; $4 for sub. hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-7pm",
        "rate": 2,
        "unit": "$2 for 1st ½ hr; $4 for sub. hr"
      },
      {
        "timeRange": "7am-7pm",
        "rate": 2,
        "unit": "$2 for 1st ½ hr; $4 for sub. hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 162,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2836,
  "lng": 103.8265,
  "mapPos": {
    "top": 80,
    "left": 51
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_bayfront_avenue",
  "carParkId": "CSV_BAYFRONT_AVENUE",
  "name": "Bayfront Avenue",
  "agency": "Commercial",
  "area": "Central",
  "address": "Bayfront Avenue, Singapore",
  "availableLots": 248,
  "totalLots": 393,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3,
        "unit": "$3 per hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 1.2,
        "unit": "$1.20 per hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-1pm",
        "rate": 3,
        "unit": "$3 per hr"
      },
      {
        "timeRange": "Aft 1pm",
        "rate": 1.2,
        "unit": "$1.20 per hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 1.2,
        "unit": "$1.20 per hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 168,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2924,
  "lng": 103.8635,
  "mapPos": {
    "top": 76,
    "left": 60
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_burlington_square",
  "carParkId": "CSV_BURLINGTON_SQUAR",
  "name": "Burlington Square",
  "agency": "Commercial",
  "area": "Central",
  "address": "Burlington Square, Singapore",
  "availableLots": 84,
  "totalLots": 401,
  "lotStatus": "available",
  "baseRatePerHour": 2.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.4,
        "unit": "$0.04 per min"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 3.6,
        "unit": "$0.06 per min"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 3.6,
        "unit": "$0.06 per min"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 156,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2668,
  "lng": 103.8695,
  "mapPos": {
    "top": 88,
    "left": 61
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_capitacommercial_trust_cct",
  "carParkId": "CSV_CAPITACOMMERCIAL",
  "name": "CapitaCommercial Trust (CCT)",
  "agency": "Commercial",
  "area": "Central",
  "address": "CapitaCommercial Trust (CCT), Singapore",
  "availableLots": 144,
  "totalLots": 369,
  "lotStatus": "available",
  "baseRatePerHour": 4.1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 4.1,
        "unit": "$2.05 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.1,
        "unit": "$3.10 per ½"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 4.1,
        "unit": "$2.05 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.1,
        "unit": "$3.10 per ½"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 6.2,
        "unit": "$3.10 per ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 54,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2692,
  "lng": 103.8705,
  "mapPos": {
    "top": 87,
    "left": 61
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_capital_square",
  "carParkId": "CSV_CAPITAL_SQUARE",
  "name": "Capital Square",
  "agency": "Commercial",
  "area": "Central",
  "address": "Capital Square, Singapore",
  "availableLots": 177,
  "totalLots": 377,
  "lotStatus": "available",
  "baseRatePerHour": 4.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 4.4,
        "unit": "$2.20 for ½ hr or part thereof."
      },
      {
        "timeRange": "6pm-8am",
        "rate": 3.2,
        "unit": "$3.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-6pm",
        "rate": 4.4,
        "unit": "$2.20 for ½ hr or part thereof."
      },
      {
        "timeRange": "6pm-8am",
        "rate": 3.2,
        "unit": "$3.20 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.2,
        "unit": "$3.20 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 162,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2836,
  "lng": 103.8265,
  "mapPos": {
    "top": 80,
    "left": 51
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_capital_tower",
  "carParkId": "CSV_CAPITAL_TOWER",
  "name": "Capital Tower",
  "agency": "Commercial",
  "area": "Central",
  "address": "Capital Tower, Singapore",
  "availableLots": 259,
  "totalLots": 439,
  "lotStatus": "available",
  "baseRatePerHour": 5.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 5.6,
        "unit": "$2.80 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3.2,
        "unit": "$3.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 5.6,
        "unit": "$2.80 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3.2,
        "unit": "$3.20 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.2,
        "unit": "$3.20 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 54,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2852,
  "lng": 103.8605,
  "mapPos": {
    "top": 79,
    "left": 59
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_central_mall",
  "carParkId": "CSV_CENTRAL_MALL",
  "name": "Central Mall",
  "agency": "Commercial",
  "area": "Central",
  "address": "Central Mall, Singapore",
  "availableLots": 101,
  "totalLots": 405,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-5pm",
        "rate": 2,
        "unit": "$2.00 for 1st hr; $1.00 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3.00 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-5pm",
        "rate": 2,
        "unit": "$2.00 for 1st hr; $1.00 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3.00 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3.00 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 210,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.274,
  "lng": 103.8725,
  "mapPos": {
    "top": 85,
    "left": 62
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_central",
  "carParkId": "CSV_CENTRAL",
  "name": "Central ©",
  "agency": "Commercial",
  "area": "Central",
  "address": "Central ©, Singapore",
  "availableLots": 274,
  "totalLots": 442,
  "lotStatus": "available",
  "baseRatePerHour": 2.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-5pm",
        "rate": 2.2,
        "unit": "$2.20 for 1st hr; $1.10 for sub. ½ hr or part thereof"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-5pm",
        "rate": 2.2,
        "unit": "$2.20 for 1st hr; $1.10 for sub. ½ hr or part thereof"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 87,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2656,
  "lng": 103.844,
  "mapPos": {
    "top": 88,
    "left": 55
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_chijmes",
  "carParkId": "CSV_CHIJMES",
  "name": "Chijmes",
  "agency": "Commercial",
  "area": "Central",
  "address": "Chijmes, Singapore",
  "availableLots": 70,
  "totalLots": 171,
  "lotStatus": "available",
  "baseRatePerHour": 2.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5.59am",
        "rate": 2.2,
        "unit": "$2.20 for 1st hr; $0.55 for sub. 15 mins."
      },
      {
        "timeRange": "6pm-5.59am",
        "rate": 4,
        "unit": "(Valet Parking Only) Valet Charge $4 per entry, Carpark charges: $4 per hr."
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5.59am",
        "rate": 2.2,
        "unit": "$2.20 for 1st hr; $0.55 for sub. 15 mins."
      },
      {
        "timeRange": "6pm-5.59am",
        "rate": 4,
        "unit": "(Valet Parking Only) Valet Charge $4 per entry, Carpark charges: $4 per hr."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-5.59am",
        "rate": 2.2,
        "unit": "$2.20 for 1st hr; $0.55 for sub. 15 mins."
      },
      {
        "timeRange": "6pm-5.59am",
        "rate": 4,
        "unit": "(Valet Parking Only) Valet Charge $4 per entry, Carpark charges: $4 per hr."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 186,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2628,
  "lng": 103.8345,
  "mapPos": {
    "top": 90,
    "left": 53
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_china_square_central",
  "carParkId": "CSV_CHINA_SQUARE_CEN",
  "name": "China Square Central",
  "agency": "Commercial",
  "area": "Central",
  "address": "China Square Central, Singapore",
  "availableLots": 51,
  "totalLots": 205,
  "lotStatus": "available",
  "baseRatePerHour": 3.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 3.6,
        "unit": "$1.80 per ½ hr or part thereof."
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3,
        "unit": "$3 per entry.  (12 midnight-6am: Closed)"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 3,
        "unit": "$3 per entry. (12 midnight-6am: Closed)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 3,
        "unit": "$3 per entry. (12 midnight-6am: Closed)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 120,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.294,
  "lng": 103.8475,
  "mapPos": {
    "top": 75,
    "left": 56
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_clarke_quay",
  "carParkId": "CSV_CLARKE_QUAY",
  "name": "Clarke Quay",
  "agency": "Commercial",
  "area": "Central",
  "address": "Clarke Quay, Singapore",
  "availableLots": 219,
  "totalLots": 476,
  "lotStatus": "available",
  "baseRatePerHour": 1.07,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-11.59am; 3pm-4.59pm",
        "rate": 1.07,
        "unit": "$2.14 for 1st 2hrs; $1.07 for sub. hr (Free parking between 12pm-2.59pm)"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.14,
        "unit": "$2.14 for 1st hr; $1.07 for sub. hr (Cap at $5.35)"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-4.59pm",
        "rate": 1.07,
        "unit": "$2.14 for 1st 2hrs; $1.07 for sub. hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.14,
        "unit": "$2.14 for 1st hr; $1.07 for sub. hr (Cap at $5.35)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.68,
        "unit": "$2.68 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 111,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2768,
  "lng": 103.832,
  "mapPos": {
    "top": 83,
    "left": 53
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_clifford_centre",
  "carParkId": "CSV_CLIFFORD_CENTRE",
  "name": "Clifford Centre",
  "agency": "Commercial",
  "area": "Central",
  "address": "Clifford Centre, Singapore",
  "availableLots": 60,
  "totalLots": 300,
  "lotStatus": "available",
  "baseRatePerHour": 5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-5pm",
        "rate": 5,
        "unit": "$5 per hr  (Car park closed at 11pm daily from Mon-Sat)"
      },
      {
        "timeRange": "5pm-11pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-5pm",
        "rate": 5,
        "unit": "$5 per hr  (Car park closed at 11pm daily from Mon-Sat)"
      },
      {
        "timeRange": "5pm-11pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-5pm",
        "rate": 5,
        "unit": "$5 per hr  (Car park closed at 11pm daily from Mon-Sat)"
      },
      {
        "timeRange": "5pm-11pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 75,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.28,
  "lng": 103.85,
  "mapPos": {
    "top": 82,
    "left": 57
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_conrad_centennial_singapore",
  "carParkId": "CSV_CONRAD_CENTENNIA",
  "name": "Conrad Centennial Singapore",
  "agency": "Commercial",
  "area": "Central",
  "address": "Conrad Centennial Singapore, Singapore",
  "availableLots": 135,
  "totalLots": 322,
  "lotStatus": "available",
  "baseRatePerHour": 3.3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3.3,
        "unit": "$3.30 for 1st hr; $1.10 for sub.½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.1,
        "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 1.1,
        "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 177,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2696,
  "lng": 103.829,
  "mapPos": {
    "top": 87,
    "left": 52
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_cpf_building_robinson_road",
  "carParkId": "CSV_CPF_BUILDING_ROB",
  "name": "CPF Building Robinson Road",
  "agency": "Commercial",
  "area": "Central",
  "address": "CPF Building Robinson Road, Singapore",
  "availableLots": 107,
  "totalLots": 227,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-5pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 5,
        "unit": "Closed at 5pm. Cars remaining from 5pm onward will be charged an additional flat rate of $5"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-1pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr. Closed at 1:00pm. Cars remaining from 1:00pm onward will be charged an additional flat rate of $5"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-1pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr. Closed at 1:00pm. Cars remaining from 1:00pm onward will be charged an additional flat rate of $5"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 102,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2836,
  "lng": 103.8265,
  "mapPos": {
    "top": 80,
    "left": 51
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_dbs_building",
  "carParkId": "CSV_DBS_BUILDING",
  "name": "DBS Building",
  "agency": "Commercial",
  "area": "Central",
  "address": "DBS Building, Singapore",
  "availableLots": 112,
  "totalLots": 189,
  "lotStatus": "available",
  "baseRatePerHour": 5.14,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-7pm",
        "rate": 5.14,
        "unit": "$2.57 per ½ hr"
      },
      {
        "timeRange": "Aft 7pm",
        "rate": 2.57,
        "unit": "$2.57 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-1pm",
        "rate": 5.14,
        "unit": "$2.57 per ½ hr"
      },
      {
        "timeRange": "aft 1pm",
        "rate": 2.57,
        "unit": "$2.57 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.57,
        "unit": "$2.57 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 174,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2852,
  "lng": 103.8605,
  "mapPos": {
    "top": 79,
    "left": 59
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_far_east_square",
  "carParkId": "CSV_FAR_EAST_SQUARE",
  "name": "Far East Square",
  "agency": "Commercial",
  "area": "Central",
  "address": "Far East Square, Singapore",
  "availableLots": 84,
  "totalLots": 401,
  "lotStatus": "available",
  "baseRatePerHour": 4.28,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-4.59pm",
        "rate": 4.28,
        "unit": "$2.14 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 186,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2868,
  "lng": 103.8445,
  "mapPos": {
    "top": 79,
    "left": 56
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_far_eastern_bank_building",
  "carParkId": "CSV_FAR_EASTERN_BANK",
  "name": "Far Eastern Bank Building",
  "agency": "Commercial",
  "area": "Central",
  "address": "Far Eastern Bank Building, Singapore",
  "availableLots": 186,
  "totalLots": 379,
  "lotStatus": "available",
  "baseRatePerHour": 4.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 4.6,
        "unit": "$2.30 per ½ hr"
      },
      {
        "timeRange": "Aft 6.30pm",
        "rate": 3.2,
        "unit": "$3.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 4.6,
        "unit": "$2.30 per ½ hr"
      },
      {
        "timeRange": "Aft 6.30pm",
        "rate": 3.2,
        "unit": "$3.20 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-6pm",
        "rate": 4.6,
        "unit": "$2.30 per ½ hr"
      },
      {
        "timeRange": "Aft 6.30pm",
        "rate": 3.2,
        "unit": "$3.20 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 84,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2972,
  "lng": 103.8655,
  "mapPos": {
    "top": 74,
    "left": 60
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_fortune_centre",
  "carParkId": "CSV_FORTUNE_CENTRE",
  "name": "Fortune Centre",
  "agency": "Commercial",
  "area": "Central",
  "address": "Fortune Centre, Singapore",
  "availableLots": 264,
  "totalLots": 440,
  "lotStatus": "available",
  "baseRatePerHour": 3.22,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-7pm",
        "rate": 3.22,
        "unit": "$3.22 per hr"
      },
      {
        "timeRange": "Aft 7pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-7pm",
        "rate": 3.22,
        "unit": "$3.22 per hr"
      },
      {
        "timeRange": "Aft 7pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-7pm",
        "rate": 3.22,
        "unit": "$3.22 per hr"
      },
      {
        "timeRange": "Aft 7pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 45,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.292,
  "lng": 103.855,
  "mapPos": {
    "top": 76,
    "left": 58
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_fu_lu_shou_complex",
  "carParkId": "CSV_FU_LU_SHOU_COMPL",
  "name": "Fu Lu Shou Complex",
  "agency": "Commercial",
  "area": "Central",
  "address": "Fu Lu Shou Complex, Singapore",
  "availableLots": 123,
  "totalLots": 457,
  "lotStatus": "available",
  "baseRatePerHour": 2.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2.4,
        "unit": "$2.40 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.2,
        "unit": "$2.20 per entry (Car park closed at 12.30am daily)"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2.4,
        "unit": "$2.40 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.2,
        "unit": "$2.20 per entry (Car park closed at 12.30am daily)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2.4,
        "unit": "$2.40 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.2,
        "unit": "$2.20 per entry (Car park closed at 12.30am daily)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 222,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2676,
  "lng": 103.8365,
  "mapPos": {
    "top": 87,
    "left": 54
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_fullerton_hotel",
  "carParkId": "CSV_FULLERTON_HOTEL",
  "name": "Fullerton Hotel",
  "agency": "Commercial",
  "area": "Central",
  "address": "Fullerton Hotel, Singapore",
  "availableLots": 239,
  "totalLots": 435,
  "lotStatus": "available",
  "baseRatePerHour": 4.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 4.4,
        "unit": "$2.20 per ½ hr"
      },
      {
        "timeRange": "After 6pm",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 5,
        "unit": "$5 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 210,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.298,
  "lng": 103.8325,
  "mapPos": {
    "top": 74,
    "left": 53
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_gillman_barracks",
  "carParkId": "CSV_GILLMAN_BARRACKS",
  "name": "Gillman Barracks",
  "agency": "Commercial",
  "area": "Central",
  "address": "Gillman Barracks, Singapore",
  "availableLots": 165,
  "totalLots": 247,
  "lotStatus": "available",
  "baseRatePerHour": 1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1,
        "unit": "$0.50 / 30 mins"
      },
      {
        "timeRange": "From 1700",
        "rate": 2,
        "unit": "$2.00 / entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 2,
        "unit": "0700-1800 - Free Parking; 1800-0700: $2/entry."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 0,
        "unit": "Free Parking"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 192,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2796,
  "lng": 103.8415,
  "mapPos": {
    "top": 82,
    "left": 55
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_golden_mile_complex",
  "carParkId": "CSV_GOLDEN_MILE_COMP",
  "name": "Golden Mile Complex",
  "agency": "Commercial",
  "area": "Central",
  "address": "Golden Mile Complex, Singapore",
  "availableLots": 55,
  "totalLots": 252,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $1 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 177,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2936,
  "lng": 103.839,
  "mapPos": {
    "top": 76,
    "left": 54
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_golden_shoe_complex",
  "carParkId": "CSV_GOLDEN_SHOE_COMP",
  "name": "Golden Shoe Complex",
  "agency": "Commercial",
  "area": "Central",
  "address": "Golden Shoe Complex, Singapore",
  "availableLots": 127,
  "totalLots": 276,
  "lotStatus": "available",
  "baseRatePerHour": 5.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 5.2,
        "unit": "$2.60 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.3,
        "unit": "$3.30 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 5.2,
        "unit": "$2.60 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.3,
        "unit": "$3.30 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.3,
        "unit": "$3.3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 201,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2968,
  "lng": 103.857,
  "mapPos": {
    "top": 74,
    "left": 58
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_grand_park_city_hall",
  "carParkId": "CSV_GRAND_PARK_CITY_",
  "name": "Grand Park City Hall",
  "agency": "Commercial",
  "area": "Central",
  "address": "Grand Park City Hall, Singapore",
  "availableLots": 144,
  "totalLots": 240,
  "lotStatus": "available",
  "baseRatePerHour": 3.28,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 3.28,
        "unit": "$3.28 for 1st hr; $1.55 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 3.28,
        "unit": "$3.28 for 1st hr; $1.55 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-5pm",
        "rate": 3.28,
        "unit": "$3.28 for 1st hr; $1.55 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 5.35,
        "unit": "$5.35 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 165,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.292,
  "lng": 103.855,
  "mapPos": {
    "top": 76,
    "left": 58
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_great_eastern_centre",
  "carParkId": "CSV_GREAT_EASTERN_CE",
  "name": "Great Eastern Centre",
  "agency": "Commercial",
  "area": "Central",
  "address": "Great Eastern Centre, Singapore",
  "availableLots": 121,
  "totalLots": 232,
  "lotStatus": "available",
  "baseRatePerHour": 3.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 3.6,
        "unit": "$1.80 per ½ hr (Car park at China square central; B2 closed from 12am-6am daily)"
      },
      {
        "timeRange": "6pm-12am",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-12am",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-12am",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 147,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2976,
  "lng": 103.874,
  "mapPos": {
    "top": 74,
    "left": 62
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_holiday_inn_atrium_singapore",
  "carParkId": "CSV_HOLIDAY_INN_ATRI",
  "name": "Holiday Inn Atrium Singapore",
  "agency": "Commercial",
  "area": "Central",
  "address": "Holiday Inn Atrium Singapore, Singapore",
  "availableLots": 289,
  "totalLots": 445,
  "lotStatus": "available",
  "baseRatePerHour": 1.8,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.8,
        "unit": "$1.80 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.8,
        "unit": "$3.80 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.8,
        "unit": "$1.80 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.8,
        "unit": "$3.80 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.8,
        "unit": "$3.80 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 120,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.286,
  "lng": 103.8275,
  "mapPos": {
    "top": 79,
    "left": 52
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_hong_leong_building",
  "carParkId": "CSV_HONG_LEONG_BUILD",
  "name": "Hong Leong Building",
  "agency": "Commercial",
  "area": "Central",
  "address": "Hong Leong Building, Singapore",
  "availableLots": 101,
  "totalLots": 225,
  "lotStatus": "available",
  "baseRatePerHour": 5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 5,
        "unit": "$2.50 per ½ hr"
      },
      {
        "timeRange": "5pm-11pm",
        "rate": 3.1,
        "unit": "$3.10 per entry"
      },
      {
        "timeRange": "Aft 11pm",
        "rate": 12,
        "unit": "Overnight Charge of $12"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-1pm",
        "rate": 5,
        "unit": "$2.50 per ½ hr"
      },
      {
        "timeRange": "1pm-11pm",
        "rate": 3.1,
        "unit": "$3.10 per entry"
      },
      {
        "timeRange": "Aft 11pm",
        "rate": 12,
        "unit": "Overnight Charge of $12"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-11pm",
        "rate": 3.1,
        "unit": "$3.10 per entry"
      },
      {
        "timeRange": "Aft 11pm",
        "rate": 12,
        "unit": "Overnight Charge of $12"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 150,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.29,
  "lng": 103.8625,
  "mapPos": {
    "top": 77,
    "left": 60
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_hub_synergy_point_formerly_apex_tower",
  "carParkId": "CSV_HUB_SYNERGY_POIN",
  "name": "Hub Synergy Point (Formerly Apex tower)",
  "agency": "Commercial",
  "area": "Central",
  "address": "Hub Synergy Point (Formerly Apex tower), Singapore",
  "availableLots": 240,
  "totalLots": 480,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2,
        "unit": "$1 per ½ hr"
      },
      {
        "timeRange": "6pm-12am",
        "rate": 1,
        "unit": "$1 per hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-2pm",
        "rate": 2,
        "unit": "$1 per ½ hr"
      },
      {
        "timeRange": "2pm-12am",
        "rate": 1,
        "unit": "$1 per hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-12am",
        "rate": 1,
        "unit": "$1 per hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 75,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.264,
  "lng": 103.86,
  "mapPos": {
    "top": 89,
    "left": 59
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_icon_village",
  "carParkId": "CSV_ICON_VILLAGE",
  "name": "Icon Village",
  "agency": "Commercial",
  "area": "Central",
  "address": "Icon Village, Singapore",
  "availableLots": 275,
  "totalLots": 399,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-1pm",
        "rate": 3,
        "unit": "$3 per hr"
      },
      {
        "timeRange": "Aft 1pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 204,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2732,
  "lng": 103.8555,
  "mapPos": {
    "top": 85,
    "left": 58
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_iluma",
  "carParkId": "CSV_ILUMA",
  "name": "Iluma",
  "agency": "Commercial",
  "area": "Central",
  "address": "Iluma, Singapore",
  "availableLots": 84,
  "totalLots": 262,
  "lotStatus": "available",
  "baseRatePerHour": 1.07,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.07,
        "unit": "$1.07 for 1st hr; $0.37 for sub. 10 mins"
      },
      {
        "timeRange": "Mon-Thu",
        "rate": 1.25,
        "unit": "Aft 5pm: $2.50 per entry; Fri: $2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.25,
        "unit": "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 1.25,
        "unit": "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 117,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2616,
  "lng": 103.859,
  "mapPos": {
    "top": 90,
    "left": 59
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_income_at_raffles_former_hitachi_tower",
  "carParkId": "CSV_INCOME_AT_RAFFLE",
  "name": "Income At Raffles ( former Hitachi tower)",
  "agency": "Commercial",
  "area": "Central",
  "address": "Income At Raffles ( former Hitachi tower), Singapore",
  "availableLots": 135,
  "totalLots": 322,
  "lotStatus": "available",
  "baseRatePerHour": 5.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7.30am-5.59pm",
        "rate": 5.5,
        "unit": "$2.75 per ½ hr"
      },
      {
        "timeRange": "6pm to 7.29am",
        "rate": 3.3,
        "unit": "$3.30 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7.30am-12.59pm",
        "rate": 5.5,
        "unit": "$2.75 per ½ hr"
      },
      {
        "timeRange": "1.00pm-7.29am",
        "rate": 3.3,
        "unit": "$3.30 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7.30am-7.29am",
        "rate": 3.3,
        "unit": "$3.30 per entry."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 87,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2896,
  "lng": 103.854,
  "mapPos": {
    "top": 77,
    "left": 58
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_inter_continental_singapore_hotel",
  "carParkId": "CSV_INTER_CONTINENTA",
  "name": "Inter-continental Singapore Hotel",
  "agency": "Commercial",
  "area": "Central",
  "address": "Inter-continental Singapore Hotel, Singapore",
  "availableLots": 90,
  "totalLots": 450,
  "lotStatus": "available",
  "baseRatePerHour": 1.07,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.07,
        "unit": "$1.07 for 1st hr; $0.37 for sub. 10mins"
      },
      {
        "timeRange": "Mon-Thu",
        "rate": 1.25,
        "unit": "Aft 5pm: $2.50 per entry. Fri: $2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.25,
        "unit": "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 1.25,
        "unit": "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 75,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.28,
  "lng": 103.85,
  "mapPos": {
    "top": 82,
    "left": 57
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_international_plaza",
  "carParkId": "CSV_INTERNATIONAL_PL",
  "name": "International Plaza",
  "agency": "Commercial",
  "area": "Central",
  "address": "International Plaza, Singapore",
  "availableLots": 84,
  "totalLots": 262,
  "lotStatus": "available",
  "baseRatePerHour": 4.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 4.4,
        "unit": "$2.20 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 4.4,
        "unit": "$2.20 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 177,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2616,
  "lng": 103.859,
  "mapPos": {
    "top": 90,
    "left": 59
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_keck_seng_tower",
  "carParkId": "CSV_KECK_SENG_TOWER",
  "name": "Keck Seng Tower",
  "agency": "Commercial",
  "area": "Central",
  "address": "Keck Seng Tower, Singapore",
  "availableLots": 150,
  "totalLots": 416,
  "lotStatus": "available",
  "baseRatePerHour": 5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 5,
        "unit": "$2.50 per ½ hr"
      },
      {
        "timeRange": "6pm-10pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-2pm",
        "rate": 5,
        "unit": "$2.50 per ½ hr"
      },
      {
        "timeRange": "2pm-10pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-2pm",
        "rate": 5,
        "unit": "$2.50 per ½ hr"
      },
      {
        "timeRange": "2pm-10pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 201,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2888,
  "lng": 103.837,
  "mapPos": {
    "top": 78,
    "left": 54
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_keppel_bay_tower_harbourfront_tower_one",
  "carParkId": "CSV_KEPPEL_BAY_TOWER",
  "name": "Keppel Bay Tower / Harbourfront Tower One",
  "agency": "Commercial",
  "area": "Central",
  "address": "Keppel Bay Tower / Harbourfront Tower One, Singapore",
  "availableLots": 83,
  "totalLots": 218,
  "lotStatus": "available",
  "baseRatePerHour": 2.1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-7pm",
        "rate": 2.1,
        "unit": "$1.05 per ½ hr"
      },
      {
        "timeRange": "7pm-1am",
        "rate": 3.1,
        "unit": "$3.10 per entry"
      },
      {
        "timeRange": "Aft 1am",
        "rate": 3.1,
        "unit": "$3.10 per hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-1pm",
        "rate": 2.1,
        "unit": "$1.05 per ½ hr"
      },
      {
        "timeRange": "1pm-6pm",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr; $0.60 for sub. ½ hr"
      },
      {
        "timeRange": "6pm-1am",
        "rate": 2.4,
        "unit": "$2.40 per entry"
      },
      {
        "timeRange": "Aft 1am",
        "rate": 3.1,
        "unit": "$3.10 per hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-6pm",
        "rate": 1.2,
        "unit": "$1.20 for 1st hr; $0.60 for sub. ½ hr"
      },
      {
        "timeRange": "6pm-1am",
        "rate": 2.4,
        "unit": "$2.40 per entry"
      },
      {
        "timeRange": "Aft 1am",
        "rate": 3.1,
        "unit": "$3.10 per hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 153,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2824,
  "lng": 103.851,
  "mapPos": {
    "top": 81,
    "left": 57
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_keypoint",
  "carParkId": "CSV_KEYPOINT",
  "name": "Keypoint",
  "agency": "Commercial",
  "area": "Central",
  "address": "Keypoint, Singapore",
  "availableLots": 58,
  "totalLots": 253,
  "lotStatus": "available",
  "baseRatePerHour": 2.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 2.2,
        "unit": "$1.10 for ½ hr"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 2,
        "unit": "$2 per entry (close at midnight)"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 2.2,
        "unit": "$1.10 for ½ hr"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 2,
        "unit": "$2 per entry (close at midnight)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 78,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2804,
  "lng": 103.8585,
  "mapPos": {
    "top": 82,
    "left": 59
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_landmark_village_hotel",
  "carParkId": "CSV_LANDMARK_VILLAGE",
  "name": "Landmark Village Hotel",
  "agency": "Commercial",
  "area": "Central",
  "address": "Landmark Village Hotel, Singapore",
  "availableLots": 188,
  "totalLots": 470,
  "lotStatus": "available",
  "baseRatePerHour": 1.9,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.9,
        "unit": "$1.90 for 1st hr; $1.07 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.9,
        "unit": "$1.90 for 1st hr; $1.07 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 195,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.296,
  "lng": 103.84,
  "mapPos": {
    "top": 75,
    "left": 55
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_liang_court",
  "carParkId": "CSV_LIANG_COURT",
  "name": "Liang Court",
  "agency": "Commercial",
  "area": "Central",
  "address": "Liang Court, Singapore",
  "availableLots": 316,
  "totalLots": 494,
  "lotStatus": "available",
  "baseRatePerHour": 1.07,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 1.07,
        "unit": "$1.07 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-1pm",
        "rate": 1.07,
        "unit": "$1.07 per hr"
      },
      {
        "timeRange": "Aft 1pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 129,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2792,
  "lng": 103.833,
  "mapPos": {
    "top": 82,
    "left": 53
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_marina_bay_financial_centre_tower_1_2_3_marina_bay_link_mall",
  "carParkId": "CSV_MARINA_BAY_FINAN",
  "name": "Marina Bay Financial Centre Tower 1, 2 ,3 & Marina Bay Link Mall",
  "agency": "Commercial",
  "area": "Central",
  "address": "Marina Bay Financial Centre Tower 1, 2 ,3 & Marina Bay Link Mall, Singapore",
  "availableLots": 58,
  "totalLots": 165,
  "lotStatus": "available",
  "baseRatePerHour": 1.07,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-6pm",
        "rate": 1.07,
        "unit": "$1.07 per 10 mins"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 0.8,
        "unit": "$3.21 for 1st 4hrs; $0.27 for sub. 10 mins"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 0.8,
        "unit": "$3.21 for 1st 4hrs; $0.27 for sub. 10 mins"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 0.8,
        "unit": "$3.21 for 1st 4hrs; $0.27 for sub. 10 mins"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 150,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.282,
  "lng": 103.8425,
  "mapPos": {
    "top": 81,
    "left": 55
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_merchant_square",
  "carParkId": "CSV_MERCHANT_SQUARE",
  "name": "Merchant Square",
  "agency": "Commercial",
  "area": "Central",
  "address": "Merchant Square, Singapore",
  "availableLots": 169,
  "totalLots": 375,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 2,
        "unit": "$2 for 1st ½ hr; $1 for sub. hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 150,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.29,
  "lng": 103.8625,
  "mapPos": {
    "top": 77,
    "left": 60
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_millenia_singapore",
  "carParkId": "CSV_MILLENIA_SINGAPO",
  "name": "Millenia Singapore",
  "agency": "Commercial",
  "area": "Central",
  "address": "Millenia Singapore, Singapore",
  "availableLots": 135,
  "totalLots": 237,
  "lotStatus": "available",
  "baseRatePerHour": 3.3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3.3,
        "unit": "$3.30 for 1st hr; $1.10 for sub.½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.1,
        "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 1.1,
        "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 162,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2916,
  "lng": 103.8465,
  "mapPos": {
    "top": 77,
    "left": 56
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_millenia_walk_basement_car_park",
  "carParkId": "CSV_MILLENIA_WALK_BA",
  "name": "Millenia Walk (Basement Car Park)",
  "agency": "Commercial",
  "area": "Central",
  "address": "Millenia Walk (Basement Car Park), Singapore",
  "availableLots": 240,
  "totalLots": 480,
  "lotStatus": "available",
  "baseRatePerHour": 3.3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 3.3,
        "unit": "$3.30 for 1st hr; $1.10 for sub.½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.2,
        "unit": "$2.20 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.1,
        "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 1.1,
        "unit": "$2.20 for 1st 2hrs; $1.10 for sub. hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 135,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.264,
  "lng": 103.86,
  "mapPos": {
    "top": 89,
    "left": 59
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_millenia_walk_surface_parking_l1",
  "carParkId": "CSV_MILLENIA_WALK_SU",
  "name": "Millenia Walk (Surface parking @ L1)",
  "agency": "Commercial",
  "area": "Central",
  "address": "Millenia Walk (Surface parking @ L1), Singapore",
  "availableLots": 81,
  "totalLots": 353,
  "lotStatus": "available",
  "baseRatePerHour": 4.28,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 4.28,
        "unit": "$4.28 for 1st hr; $1.605 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.14,
        "unit": "$4.28 for 1st 2hrs; $1.605 for sub. hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 2.14,
        "unit": "$4.28 for 1st 2hrs; $1.605 for sub. hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 2.14,
        "unit": "$4.28 for 1st 2hrs; $1.605 for sub. hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 168,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2604,
  "lng": 103.8335,
  "mapPos": {
    "top": 91,
    "left": 53
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_neil_road_off_street",
  "carParkId": "CSV_NEIL_ROAD_OFF_ST",
  "name": "Neil Road Off-Street",
  "agency": "Commercial",
  "area": "Central",
  "address": "Neil Road Off-Street, Singapore",
  "availableLots": 110,
  "totalLots": 315,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 2,
        "unit": "$1.00 per 30 mins (Per Minute Charging)"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1,
        "unit": "$0.50 per 30 mins (Per Minute Charging)"
      }
    ],
    "saturday": [
      {
        "timeRange": "0700-1700",
        "rate": 2,
        "unit": "$1.00 per 30 mins"
      },
      {
        "timeRange": "1700-0700",
        "rate": 1,
        "unit": "$0.50 per 30 mins (Per Minute Charging)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 1,
        "unit": "$0.50 per 30 mins (Per Minute Charging)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 60,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.262,
  "lng": 103.8675,
  "mapPos": {
    "top": 90,
    "left": 61
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_north_bridge_centre",
  "carParkId": "CSV_NORTH_BRIDGE_CEN",
  "name": "North Bridge Centre",
  "agency": "Commercial",
  "area": "Central",
  "address": "North Bridge Centre, Singapore",
  "availableLots": 64,
  "totalLots": 255,
  "lotStatus": "available",
  "baseRatePerHour": 2.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2.6,
        "unit": "$1.30 per ½ hr"
      },
      {
        "timeRange": "5pm-11pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 180,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.294,
  "lng": 103.8475,
  "mapPos": {
    "top": 75,
    "left": 56
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_ocbc_centre",
  "carParkId": "CSV_OCBC_CENTRE",
  "name": "OCBC centre",
  "agency": "Commercial",
  "area": "Central",
  "address": "OCBC centre, Singapore",
  "availableLots": 54,
  "totalLots": 206,
  "lotStatus": "available",
  "baseRatePerHour": 4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 4,
        "unit": "$4 per hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 201,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2808,
  "lng": 103.867,
  "mapPos": {
    "top": 81,
    "left": 61
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_one_raffles_quay",
  "carParkId": "CSV_ONE_RAFFLES_QUAY",
  "name": "One Raffles Quay",
  "agency": "Commercial",
  "area": "Central",
  "address": "One Raffles Quay, Singapore",
  "availableLots": 194,
  "totalLots": 381,
  "lotStatus": "available",
  "baseRatePerHour": 1.07,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-6pm",
        "rate": 1.07,
        "unit": "$1.07 per 10mins"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 0.8,
        "unit": "$3.21 for 1st 4hrs; $0.27 per sub. 10 mins"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 0.8,
        "unit": "$3.21 for 1st 4hrs; $0.27 per sub. 10 mins"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 0.8,
        "unit": "$3.21 for 1st 4hrs; $0.27 per sub. 10 mins"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 156,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2908,
  "lng": 103.8295,
  "mapPos": {
    "top": 77,
    "left": 52
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_oub_centre",
  "carParkId": "CSV_OUB_CENTRE",
  "name": "OUB Centre",
  "agency": "Commercial",
  "area": "Central",
  "address": "OUB Centre, Singapore",
  "availableLots": 103,
  "totalLots": 313,
  "lotStatus": "available",
  "baseRatePerHour": 5.24,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 5.24,
        "unit": "$2.62 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 5.24,
        "unit": "$2.62 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-5pm",
        "rate": 5.24,
        "unit": "$2.62 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 138,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2884,
  "lng": 103.8285,
  "mapPos": {
    "top": 78,
    "left": 52
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_oue_bayfront_formerly_overseas_union_house",
  "carParkId": "CSV_OUE_BAYFRONT_FOR",
  "name": "OUE Bayfront (Formerly Overseas Union House)",
  "agency": "Commercial",
  "area": "Central",
  "address": "OUE Bayfront (Formerly Overseas Union House), Singapore",
  "availableLots": 100,
  "totalLots": 358,
  "lotStatus": "available",
  "baseRatePerHour": 0.86,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5.59pm",
        "rate": 0.86,
        "unit": "$0.86 per 10mins block"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-2.59pm",
        "rate": 3.21,
        "unit": "$0.86 per 10mins block. 3pm-11.59am $3.21 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 93,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2744,
  "lng": 103.831,
  "mapPos": {
    "top": 84,
    "left": 53
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_parklane_shopping_mall",
  "carParkId": "CSV_PARKLANE_SHOPPIN",
  "name": "Parklane Shopping Mall",
  "agency": "Commercial",
  "area": "Central",
  "address": "Parklane Shopping Mall, Singapore",
  "availableLots": 77,
  "totalLots": 174,
  "lotStatus": "available",
  "baseRatePerHour": 2.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-7pm",
        "rate": 2.5,
        "unit": "$2.50 for 1st hr; $1.25 for sub. ½ hr"
      },
      {
        "timeRange": "7pm-12am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-7pm",
        "rate": 2.5,
        "unit": "$2.50 for 1st hr; $1.25 for sub. ½ hr"
      },
      {
        "timeRange": "7pm-12am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-12am",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 69,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2632,
  "lng": 103.843,
  "mapPos": {
    "top": 89,
    "left": 55
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_pearl_s_centre",
  "carParkId": "CSV_PEARL_S_CENTRE",
  "name": "Pearl's Centre",
  "agency": "Commercial",
  "area": "Central",
  "address": "Pearl's Centre, Singapore",
  "availableLots": 102,
  "totalLots": 185,
  "lotStatus": "available",
  "baseRatePerHour": 2.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8.30am-5pm",
        "rate": 2.4,
        "unit": "$1.20 per ½ hr (max $22.90)"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8.30am-5pm",
        "rate": 2.4,
        "unit": "$1.20 per ½ hr (max $22.90)"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 150,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.298,
  "lng": 103.8325,
  "mapPos": {
    "top": 74,
    "left": 53
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_peninsular_plaza",
  "carParkId": "CSV_PENINSULAR_PLAZA",
  "name": "Peninsular Plaza",
  "agency": "Commercial",
  "area": "Central",
  "address": "Peninsular Plaza, Singapore",
  "availableLots": 186,
  "totalLots": 379,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "Season Parking Only"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1.2,
        "unit": "Season Parking Only"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.2,
        "unit": "Season Parking Only"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 1.2,
        "unit": "Season Parking Only"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 144,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2972,
  "lng": 103.8655,
  "mapPos": {
    "top": 74,
    "left": 60
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_people_s_park_centre",
  "carParkId": "CSV_PEOPLE_S_PARK_CE",
  "name": "People's Park Centre",
  "agency": "Commercial",
  "area": "Central",
  "address": "People's Park Centre, Singapore",
  "availableLots": 141,
  "totalLots": 414,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-5pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 159,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2752,
  "lng": 103.848,
  "mapPos": {
    "top": 84,
    "left": 56
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_pomo_fomerly_paradiz_centre",
  "carParkId": "CSV_POMO_FOMERLY_PAR",
  "name": "PoMo (Fomerly Paradiz Centre)",
  "agency": "Commercial",
  "area": "Central",
  "address": "PoMo (Fomerly Paradiz Centre), Singapore",
  "availableLots": 181,
  "totalLots": 292,
  "lotStatus": "available",
  "baseRatePerHour": 2.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2.5,
        "unit": "$1.25 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.95,
        "unit": "$2.95 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2.5,
        "unit": "$1.25 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.95,
        "unit": "$2.95 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.95,
        "unit": "$2.95 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 147,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2656,
  "lng": 103.844,
  "mapPos": {
    "top": 88,
    "left": 55
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_pwc_building",
  "carParkId": "CSV_PWC_BUILDING",
  "name": "PWC Building",
  "agency": "Commercial",
  "area": "Central",
  "address": "PWC Building, Singapore",
  "availableLots": 144,
  "totalLots": 240,
  "lotStatus": "available",
  "baseRatePerHour": 4.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 4.4,
        "unit": "$2.20 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 45,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.292,
  "lng": 103.855,
  "mapPos": {
    "top": 76,
    "left": 58
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_republic_plaza",
  "carParkId": "CSV_REPUBLIC_PLAZA",
  "name": "Republic Plaza",
  "agency": "Commercial",
  "area": "Central",
  "address": "Republic Plaza, Singapore",
  "availableLots": 165,
  "totalLots": 374,
  "lotStatus": "available",
  "baseRatePerHour": 6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 6,
        "unit": "$3 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 6,
        "unit": "$3 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 159,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2832,
  "lng": 103.868,
  "mapPos": {
    "top": 80,
    "left": 61
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_robertson_walk",
  "carParkId": "CSV_ROBERTSON_WALK",
  "name": "Robertson Walk",
  "agency": "Commercial",
  "area": "Central",
  "address": "Robertson Walk, Singapore",
  "availableLots": 173,
  "totalLots": 467,
  "lotStatus": "available",
  "baseRatePerHour": 1.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-6pm",
        "rate": 1.5,
        "unit": "$1.50 for 1st hr or part thereof; $0.50 for sub. ½ hr or part thereof."
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-6pm",
        "rate": 1.5,
        "unit": "$1.50 for 1st hr or part thereof; $0.50 for sub. ½ hr or part thereof."
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 4,
        "unit": "$4 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 72,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2956,
  "lng": 103.8315,
  "mapPos": {
    "top": 75,
    "left": 53
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_robinson_77_formerly_sia_building",
  "carParkId": "CSV_ROBINSON_77_FORM",
  "name": "Robinson 77 (Formerly SIA Building)",
  "agency": "Commercial",
  "area": "Central",
  "address": "Robinson 77 (Formerly SIA Building), Singapore",
  "availableLots": 95,
  "totalLots": 182,
  "lotStatus": "available",
  "baseRatePerHour": 4.8,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 4.8,
        "unit": "$2.4 per ½ hr"
      },
      {
        "timeRange": "5pm-11pm",
        "rate": 2.4,
        "unit": "$2.4 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 4.8,
        "unit": "$2.4 per ½ hr"
      },
      {
        "timeRange": "5pm-11pm",
        "rate": 2.4,
        "unit": "$2.4 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.4,
        "unit": "$2.4 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 177,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2776,
  "lng": 103.849,
  "mapPos": {
    "top": 83,
    "left": 57
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_robinson_centre",
  "carParkId": "CSV_ROBINSON_CENTRE",
  "name": "Robinson Centre",
  "agency": "Commercial",
  "area": "Central",
  "address": "Robinson Centre, Singapore",
  "availableLots": 275,
  "totalLots": 399,
  "lotStatus": "available",
  "baseRatePerHour": 4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 4,
        "unit": "$2 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 4,
        "unit": "$2 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-5pm",
        "rate": 4,
        "unit": "$2 per ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 174,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2932,
  "lng": 103.8305,
  "mapPos": {
    "top": 76,
    "left": 52
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_school_of_the_arts_singapore_sota",
  "carParkId": "CSV_SCHOOL_OF_THE_AR",
  "name": "School of the Arts, Singapore (SOTA)",
  "agency": "Commercial",
  "area": "Central",
  "address": "School of the Arts, Singapore (SOTA), Singapore",
  "availableLots": 150,
  "totalLots": 326,
  "lotStatus": "available",
  "baseRatePerHour": 2.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7.00am-5.59pm",
        "rate": 2.5,
        "unit": "$2.50 per hr"
      },
      {
        "timeRange": "6pm-2am (the next day)",
        "rate": 5,
        "unit": "$5 per entry. 2.01am-6.59am: $5 (additional flat fee for overnight parking)"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5.59pm",
        "rate": 2.5,
        "unit": "$2.50 per hr. 6pm-2am (the next day): $5 per entry"
      },
      {
        "timeRange": "2.01am-6.59am",
        "rate": 5,
        "unit": "$5 (additional flat fee for overnight parking)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-5.59pm",
        "rate": 2.5,
        "unit": "$2.50 per hr. 6pm-2am (the next day): $5 per entry"
      },
      {
        "timeRange": "2.01am-6.59am",
        "rate": 5,
        "unit": "$5 (additional flat fee for overnight parking)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 141,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2968,
  "lng": 103.857,
  "mapPos": {
    "top": 74,
    "left": 58
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_sgx_centre",
  "carParkId": "CSV_SGX_CENTRE",
  "name": "SGX Centre",
  "agency": "Commercial",
  "area": "Central",
  "address": "SGX Centre, Singapore",
  "availableLots": 241,
  "totalLots": 349,
  "lotStatus": "available",
  "baseRatePerHour": 5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 5,
        "unit": "$2.50 per ½ hr"
      },
      {
        "timeRange": "5pm-10pm",
        "rate": 3,
        "unit": "$3 per entry (The car park closed at 10pm daily)"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-10pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-10pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 174,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2932,
  "lng": 103.8305,
  "mapPos": {
    "top": 76,
    "left": 52
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_shenton_house",
  "carParkId": "CSV_SHENTON_HOUSE",
  "name": "Shenton House",
  "agency": "Commercial",
  "area": "Central",
  "address": "Shenton House, Singapore",
  "availableLots": 344,
  "totalLots": 499,
  "lotStatus": "available",
  "baseRatePerHour": 6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5.30pm",
        "rate": 6,
        "unit": "$3 per ½ hr"
      },
      {
        "timeRange": "Aft 5.30pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5.30pm",
        "rate": 6,
        "unit": "$3 per ½ hr"
      },
      {
        "timeRange": "Aft 5.30pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 114,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2932,
  "lng": 103.8305,
  "mapPos": {
    "top": 76,
    "left": 52
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_sim_lim_square",
  "carParkId": "CSV_SIM_LIM_SQUARE",
  "name": "Sim Lim Square",
  "agency": "Commercial",
  "area": "Central",
  "address": "Sim Lim Square, Singapore",
  "availableLots": 229,
  "totalLots": 478,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "3",
        "rate": 3,
        "unit": "30am-6pm: $0.05 per min"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2,
        "unit": "$2 per entry (1st hr Free parking from 6pm-10pm daily inclusive of PH)"
      }
    ],
    "saturday": [
      {
        "timeRange": "3",
        "rate": 3,
        "unit": "30am-6pm: $0.05 per min"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2,
        "unit": "$2 per entry (1st hr Free parking from 6pm-10pm daily inclusive of PH)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "3",
        "rate": 3,
        "unit": "30am-6pm: $0.05 per min"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2,
        "unit": "$2 per entry (1st hr Free parking from 6pm-10pm daily inclusive of PH)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 93,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2904,
  "lng": 103.871,
  "mapPos": {
    "top": 77,
    "left": 62
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_sim_lim_tower",
  "carParkId": "CSV_SIM_LIM_TOWER",
  "name": "Sim Lim Tower",
  "agency": "Commercial",
  "area": "Central",
  "address": "Sim Lim Tower, Singapore",
  "availableLots": 114,
  "totalLots": 190,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-6pm",
        "rate": 3,
        "unit": "$1.50 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 165,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.292,
  "lng": 103.855,
  "mapPos": {
    "top": 76,
    "left": 58
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_singapore_general_hospital_carpark_c_e_g_i",
  "carParkId": "CSV_SINGAPORE_GENERA",
  "name": "Singapore General Hospital (Carpark C, E, G & I)",
  "agency": "Commercial",
  "area": "Central",
  "address": "Singapore General Hospital (Carpark C, E, G & I), Singapore",
  "availableLots": 169,
  "totalLots": 375,
  "lotStatus": "available",
  "baseRatePerHour": 2.16,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-9.59pm",
        "rate": 2.16,
        "unit": "$0.036 per min/$2.16 per hr"
      },
      {
        "timeRange": "10pm-6.59am",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-9.59pm",
        "rate": 2.16,
        "unit": "$0.036 per min/$2.16 per hr"
      },
      {
        "timeRange": "10pm-6.59am",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-9.59pm",
        "rate": 1.08,
        "unit": "$0.018 per min/$1.08 per hr"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 120,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.27,
  "lng": 103.8375,
  "mapPos": {
    "top": 86,
    "left": 54
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_singapore_general_hospital_multi_storey_carpark_h",
  "carParkId": "CSV_SINGAPORE_GENERA",
  "name": "Singapore General Hospital (Multi-Storey Carpark H)",
  "agency": "Commercial",
  "area": "Central",
  "address": "Singapore General Hospital (Multi-Storey Carpark H), Singapore",
  "availableLots": 130,
  "totalLots": 277,
  "lotStatus": "available",
  "baseRatePerHour": 1.08,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-9.59pm",
        "rate": 1.08,
        "unit": "$0.018 per min/$1.08 per hr"
      },
      {
        "timeRange": "10pm-6.59am",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-9.59pm",
        "rate": 1.08,
        "unit": "$0.018 per min/$1.08 per hr"
      },
      {
        "timeRange": "10pm-6.59am",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 132,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2636,
  "lng": 103.8515,
  "mapPos": {
    "top": 89,
    "left": 57
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_singapore_land_tower",
  "carParkId": "CSV_SINGAPORE_LAND_T",
  "name": "Singapore Land Tower",
  "agency": "Commercial",
  "area": "Central",
  "address": "Singapore Land Tower, Singapore",
  "availableLots": 160,
  "totalLots": 286,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "For Tenants only"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "For Tenants only"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "For Tenants only"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 201,
  "distanceKm": 1.4,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2648,
  "lng": 103.827,
  "mapPos": {
    "top": 89,
    "left": 52
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_six_battery_road",
  "carParkId": "CSV_SIX_BATTERY_ROAD",
  "name": "Six Battery Road",
  "agency": "Commercial",
  "area": "Central",
  "address": "Six Battery Road, Singapore",
  "availableLots": 210,
  "totalLots": 429,
  "lotStatus": "available",
  "baseRatePerHour": 6.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 6.2,
        "unit": "$3.10 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3.7,
        "unit": "$3.70 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 6.2,
        "unit": "$3.10 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3.7,
        "unit": "$3.70 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3.7,
        "unit": "$3.70 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 204,
  "distanceKm": 1.7,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2972,
  "lng": 103.8655,
  "mapPos": {
    "top": 74,
    "left": 60
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_sunshine_plaza",
  "carParkId": "CSV_SUNSHINE_PLAZA",
  "name": "Sunshine Plaza",
  "agency": "Commercial",
  "area": "Central",
  "address": "Sunshine Plaza, Singapore",
  "availableLots": 279,
  "totalLots": 443,
  "lotStatus": "available",
  "baseRatePerHour": 2.14,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2.14,
        "unit": "$1.07 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2.14,
        "unit": "$1.07 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-6pm",
        "rate": 2.14,
        "unit": "$1.07 per ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 48,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2924,
  "lng": 103.8635,
  "mapPos": {
    "top": 76,
    "left": 60
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_swissotel_the_stamford_hotel",
  "carParkId": "CSV_SWISSOTEL_THE_ST",
  "name": "Swissotel The Stamford Hotel",
  "agency": "Commercial",
  "area": "Central",
  "address": "Swissotel The Stamford Hotel, Singapore",
  "availableLots": 124,
  "totalLots": 194,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2,
        "unit": "$2 for 1st hr; $0.50 for sub. 15mins (Car park at Raffles City Shopping Centre)"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1,
        "unit": "$2 for 1st 2hrs; $0.30 for sub. 15mins"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 1,
        "unit": "$2 for 1st 2hrs; $0.30 for sub. 15mins"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 219,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2992,
  "lng": 103.858,
  "mapPos": {
    "top": 73,
    "left": 59
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_tanjong_katong_complex",
  "carParkId": "CSV_TANJONG_KATONG_C",
  "name": "Tanjong Katong Complex",
  "agency": "Commercial",
  "area": "Central",
  "address": "Tanjong Katong Complex, Singapore",
  "availableLots": 101,
  "totalLots": 225,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.2,
        "unit": "HDB coupon parking"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1.2,
        "unit": "HDB coupon parking"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.2,
        "unit": "HDB coupon parking"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 1.2,
        "unit": "HDB coupon parking"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 120,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.27,
  "lng": 103.8375,
  "mapPos": {
    "top": 86,
    "left": 54
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "commercial"
},
  {
  "id": "csv_the_adelphi",
  "carParkId": "CSV_THE_ADELPHI",
  "name": "The Adelphi",
  "agency": "Commercial",
  "area": "Central",
  "address": "The Adelphi, Singapore",
  "availableLots": 271,
  "totalLots": 398,
  "lotStatus": "available",
  "baseRatePerHour": 2.4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-5pm",
        "rate": 2.4,
        "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "5pm-1am",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-5pm",
        "rate": 2.4,
        "unit": "$2.40 for 1st hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "5pm-1am",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-1am",
        "rate": 3.21,
        "unit": "$3.21 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 213,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2664,
  "lng": 103.861,
  "mapPos": {
    "top": 88,
    "left": 59
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_the_concourse",
  "carParkId": "CSV_THE_CONCOURSE",
  "name": "The Concourse",
  "agency": "Commercial",
  "area": "Central",
  "address": "The Concourse, Singapore",
  "availableLots": 305,
  "totalLots": 448,
  "lotStatus": "available",
  "baseRatePerHour": 2.14,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.14,
        "unit": "$2.14 for 1st hr; $1.07 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 2.14,
        "unit": "$2.14 for 1st hr; $1.07 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 1.07,
        "unit": "$1.07 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 63,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2864,
  "lng": 103.836,
  "mapPos": {
    "top": 79,
    "left": 54
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_the_corporate_office",
  "carParkId": "CSV_THE_CORPORATE_OF",
  "name": "The Corporate Office",
  "agency": "Commercial",
  "area": "Central",
  "address": "The Corporate Office, Singapore",
  "availableLots": 44,
  "totalLots": 202,
  "lotStatus": "available",
  "baseRatePerHour": 4,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-5pm",
        "rate": 4,
        "unit": "$4 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-5pm",
        "rate": 4,
        "unit": "$4 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-5pm",
        "rate": 4,
        "unit": "$4 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 117,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2936,
  "lng": 103.839,
  "mapPos": {
    "top": 76,
    "left": 54
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "commercial"
},
  {
  "id": "csv_the_esplanade",
  "carParkId": "CSV_THE_ESPLANADE",
  "name": "The Esplanade",
  "agency": "Commercial",
  "area": "Central",
  "address": "The Esplanade, Singapore",
  "availableLots": 204,
  "totalLots": 340,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-6pm",
        "rate": 2,
        "unit": "$2 per hr ($1.50 per ½ hr at Waterfront car park daily) 12pm-2pm $2 per entry"
      },
      {
        "timeRange": "6pm-10pm",
        "rate": 6,
        "unit": "$6 per entry"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 2,
        "unit": "$2 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-6pm",
        "rate": 2,
        "unit": "$2 per hr ($1.50 per ½ hr at Waterfront car park daily)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-6pm",
        "rate": 2,
        "unit": "$2 per hr ($1.50 per ½ hr at Waterfront car park daily)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 135,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.272,
  "lng": 103.83,
  "mapPos": {
    "top": 85,
    "left": 52
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_ue_square",
  "carParkId": "CSV_UE_SQUARE",
  "name": "UE Square",
  "agency": "Commercial",
  "area": "Central",
  "address": "UE Square, Singapore",
  "availableLots": 256,
  "totalLots": 483,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 2,
        "unit": "$2.00 for 1st hr; $1 for sub. hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-1pm",
        "rate": 2,
        "unit": "$2.00 for 1st hr; $1 for sub. hr"
      },
      {
        "timeRange": "Aft 11pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 138,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2644,
  "lng": 103.8685,
  "mapPos": {
    "top": 89,
    "left": 61
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "commercial"
},
  {
  "id": "csv_uob_plaza",
  "carParkId": "CSV_UOB_PLAZA",
  "name": "UOB Plaza",
  "agency": "Commercial",
  "area": "Central",
  "address": "UOB Plaza, Singapore",
  "availableLots": 237,
  "totalLots": 348,
  "lotStatus": "available",
  "baseRatePerHour": 5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am-6pm",
        "rate": 5,
        "unit": "$2.50 per ½ hr"
      },
      {
        "timeRange": "6pm-12am",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 3.5,
        "unit": "$3.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7am-12am",
        "rate": 3.5,
        "unit": "$3.50 per entry. Aft 12am $3.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am-12am",
        "rate": 3.5,
        "unit": "$3.50 per entry. Aft 12am $3.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 183,
  "distanceKm": 2.6,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.2864,
  "lng": 103.836,
  "mapPos": {
    "top": 79,
    "left": 54
  },
  "operator": "South & CBD",
  "erpZone": "CBD Core",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "commercial"
},
  {
  "id": "csv_27_west_coast_highway",
  "carParkId": "CSV_27_WEST_COAST_HI",
  "name": "27 West Coast Highway",
  "agency": "Commercial",
  "area": "West",
  "address": "27 West Coast Highway, Singapore",
  "availableLots": 269,
  "totalLots": 441,
  "lotStatus": "available",
  "baseRatePerHour": 1.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "0000-0700",
        "rate": 1.5,
        "unit": "$0.75 / 30 mins (Capped at $4.28)"
      },
      {
        "timeRange": "0700-2000",
        "rate": 1.5,
        "unit": "$0.75 / 30 mins (Capped at $4.28)"
      }
    ],
    "saturday": [
      {
        "timeRange": "0000-0700",
        "rate": 1.5,
        "unit": "$0.75 / 30 mins (Capped at $4.28)"
      },
      {
        "timeRange": "0700-2000",
        "rate": 1.5,
        "unit": "$0.75 / 30 mins (Capped at $4.28)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "0000-0700",
        "rate": 1.5,
        "unit": "$0.75 / 30 mins (Capped at $4.28)"
      },
      {
        "timeRange": "0700-2000",
        "rate": 1.5,
        "unit": "$0.75 / 30 mins (Capped at $4.28)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 186,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3308,
  "lng": 103.7675,
  "mapPos": {
    "top": 59,
    "left": 38
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_alexandra_retail_centre",
  "carParkId": "CSV_ALEXANDRA_RETAIL",
  "name": "Alexandra Retail Centre",
  "agency": "Commercial",
  "area": "West",
  "address": "Alexandra Retail Centre, Singapore",
  "availableLots": 225,
  "totalLots": 432,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7am to 6pm",
        "rate": 2,
        "unit": "$2/hr or part thereof."
      },
      {
        "timeRange": "6pm to 12mn",
        "rate": 2.4,
        "unit": "$2.40/entry; 12 mn to 7am: $2.40/hr or part thereof."
      }
    ],
    "saturday": [
      {
        "timeRange": "7am to 10am",
        "rate": 2,
        "unit": "$2/hr or part thereof; 10am to 12mn: $2.40/entry; 12 mn to 7am: $2.40/hr or part thereof."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7am to 12mn",
        "rate": 2.4,
        "unit": "$2.40/entry; 12 mn to 7am: $2.40/hr or part thereof."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 147,
  "distanceKm": 2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3496,
  "lng": 103.767,
  "mapPos": {
    "top": 50,
    "left": 38
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_anchorpoint_shopping_centre",
  "carParkId": "CSV_ANCHORPOINT_SHOP",
  "name": "Anchorpoint Shopping Centre",
  "agency": "Commercial",
  "area": "West",
  "address": "Anchorpoint Shopping Centre, Singapore",
  "availableLots": 138,
  "totalLots": 460,
  "lotStatus": "available",
  "baseRatePerHour": 1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6.59pm",
        "rate": 1,
        "unit": "$1 for 1st ½ hr or part thereof; $2 for sub hr or part thereof."
      },
      {
        "timeRange": "7pm-7.59am",
        "rate": 2.5,
        "unit": "$2.50 per entry."
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-6.59pm",
        "rate": 1,
        "unit": "$1 for 1st ½ hr or part thereof; $2 for sub hr or part thereof."
      },
      {
        "timeRange": "7pm-7.59am",
        "rate": 2.5,
        "unit": "$2.50 per entry."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-6.59pm",
        "rate": 1,
        "unit": "$1 for 1st ½ hr or part thereof; $2 for sub hr or part thereof."
      },
      {
        "timeRange": "7pm-7.59am",
        "rate": 2.5,
        "unit": "$2.50 per entry."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 135,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.34,
  "lng": 103.763,
  "mapPos": {
    "top": 55,
    "left": 37
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_bukit_timah_plaza_multi_storey_car_park",
  "carParkId": "CSV_BUKIT_TIMAH_PLAZ",
  "name": "Bukit Timah Plaza (Multi-Storey Car Park)",
  "agency": "Commercial",
  "area": "West",
  "address": "Bukit Timah Plaza (Multi-Storey Car Park), Singapore",
  "availableLots": 129,
  "totalLots": 235,
  "lotStatus": "available",
  "baseRatePerHour": 1.28,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "7.30am-5pm",
        "rate": 1.28,
        "unit": "$1.28 per hr"
      },
      {
        "timeRange": "5pm-12am",
        "rate": 2.25,
        "unit": "$2.25 per entry"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 2.25,
        "unit": "$2.25 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "7.30am-5pm",
        "rate": 1.28,
        "unit": "$1.28 per hr"
      },
      {
        "timeRange": "5pm-12am",
        "rate": 2.25,
        "unit": "$2.25 per entry"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 2.25,
        "unit": "$2.25 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "7.30am-5pm",
        "rate": 1.28,
        "unit": "$1.28 per hr"
      },
      {
        "timeRange": "5pm-12am",
        "rate": 2.25,
        "unit": "$2.25 per entry"
      },
      {
        "timeRange": "Aft 12am",
        "rate": 2.25,
        "unit": "$2.25 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 180,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.33,
  "lng": 103.7505,
  "mapPos": {
    "top": 59,
    "left": 34
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_bukit_timah_shopping_centre",
  "carParkId": "CSV_BUKIT_TIMAH_SHOP",
  "name": "Bukit Timah Shopping Centre",
  "agency": "Commercial",
  "area": "West",
  "address": "Bukit Timah Shopping Centre, Singapore",
  "availableLots": 163,
  "totalLots": 465,
  "lotStatus": "available",
  "baseRatePerHour": 1.25,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.25,
        "unit": "$1.25 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.1,
        "unit": "$2.10 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.25,
        "unit": "$1.25 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.1,
        "unit": "$2.10 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.25,
        "unit": "$1.25 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 2.1,
        "unit": "$2.10 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 150,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.334,
  "lng": 103.7355,
  "mapPos": {
    "top": 57,
    "left": 31
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_coronation_shopping_plaza",
  "carParkId": "CSV_CORONATION_SHOPP",
  "name": "Coronation Shopping Plaza",
  "agency": "Commercial",
  "area": "West",
  "address": "Coronation Shopping Plaza, Singapore",
  "availableLots": 90,
  "totalLots": 180,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily(7.01am-7am)",
        "rate": 2,
        "unit": "$2 per hr."
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily(7.01am-7am)",
        "rate": 2,
        "unit": "$2 per hr."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily(7.01am-7am)",
        "rate": 2,
        "unit": "$2 per hr."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 45,
  "distanceKm": 0.8,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.336,
  "lng": 103.728,
  "mapPos": {
    "top": 56,
    "left": 29
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 2,
  "category": "mall"
},
  {
  "id": "csv_holland_road_shopping_centre",
  "carParkId": "CSV_HOLLAND_ROAD_SHO",
  "name": "Holland Road Shopping Centre",
  "agency": "Commercial",
  "area": "West",
  "address": "Holland Road Shopping Centre, Singapore",
  "availableLots": 160,
  "totalLots": 373,
  "lotStatus": "available",
  "baseRatePerHour": 3.1,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "12am-8.59pm",
        "rate": 3.1,
        "unit": "$1.55 per ½ hr"
      },
      {
        "timeRange": "Aft 9pm",
        "rate": 3.25,
        "unit": "$3.25 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "12am-8.59pm",
        "rate": 3.1,
        "unit": "$1.55 per ½ hr"
      },
      {
        "timeRange": "Aft 9pm",
        "rate": 3.25,
        "unit": "$3.25 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "12am-8.59pm",
        "rate": 3.1,
        "unit": "$1.55 per ½ hr"
      },
      {
        "timeRange": "Aft 9pm",
        "rate": 3.25,
        "unit": "$3.25 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 48,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3284,
  "lng": 103.7665,
  "mapPos": {
    "top": 60,
    "left": 38
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_ikea_alexandra",
  "carParkId": "CSV_IKEA_ALEXANDRA",
  "name": "IKEA (Alexandra)",
  "agency": "Commercial",
  "area": "West",
  "address": "IKEA (Alexandra), Singapore",
  "availableLots": 91,
  "totalLots": 221,
  "lotStatus": "available",
  "baseRatePerHour": 3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 3,
        "unit": "$0.05 per min, $1.50 per 30 Mins (subsequently charged on a per minute basis)"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 3,
        "unit": "$0.05 per min, $1.50 per 30 Mins (subsequently charged on a per minute basis)"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 3,
        "unit": "$0.05 per min, $1.50 per 30 Mins (subsequently charged on a per minute basis)"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 186,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3148,
  "lng": 103.7275,
  "mapPos": {
    "top": 66,
    "left": 29
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_jcube",
  "carParkId": "CSV_JCUBE",
  "name": "JCube",
  "agency": "Commercial",
  "area": "West",
  "address": "JCube, Singapore",
  "availableLots": 193,
  "totalLots": 471,
  "lotStatus": "available",
  "baseRatePerHour": 1.3,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "3.30am-5.59pm",
        "rate": 1.3,
        "unit": "$1.30 for 1st hr; sub 15 mins or part thereof: $0.30. *Free 2 Hour Parking from 12 - 2pm daily (Monday - Friday) from now to 15 Oct 2015."
      },
      {
        "timeRange": "6pm-3.29am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "3.30am-5.59pm",
        "rate": 1.3,
        "unit": "$1.30 for 1st hr; sub 15 mins or part thereof: $0.30. *Free 2 Hour Parking from 12 - 2pm daily (Monday - Friday) from now to 15 Oct 2015."
      },
      {
        "timeRange": "6pm-3.29am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "3.30am-5.59pm",
        "rate": 1.3,
        "unit": "$1.30 for 1st hr; sub 15 mins or part thereof: $0.30. *Free 2 Hour Parking from 12 - 2pm daily (Monday - Friday) from now to 15 Oct 2015."
      },
      {
        "timeRange": "6pm-3.29am",
        "rate": 2.5,
        "unit": "$2.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 156,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3348,
  "lng": 103.7525,
  "mapPos": {
    "top": 57,
    "left": 35
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_junction_10",
  "carParkId": "CSV_JUNCTION_10",
  "name": "Junction 10",
  "agency": "Commercial",
  "area": "West",
  "address": "Junction 10, Singapore",
  "availableLots": 87,
  "totalLots": 263,
  "lotStatus": "available",
  "baseRatePerHour": 1.25,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.25,
        "unit": "$1.25 for 1st hr; $0.65 for sub. hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.25,
        "unit": "$1.25 for 1st hr; $0.65 for sub. hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.25,
        "unit": "$1.25 for 1st hr; $0.65 for sub. hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 78,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3404,
  "lng": 103.7215,
  "mapPos": {
    "top": 54,
    "left": 28
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_jurong_theatre",
  "carParkId": "CSV_JURONG_THEATRE",
  "name": "Jurong Theatre",
  "agency": "Commercial",
  "area": "West",
  "address": "Jurong Theatre, Singapore",
  "availableLots": 234,
  "totalLots": 434,
  "lotStatus": "available",
  "baseRatePerHour": 1.6,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-8.59pm",
        "rate": 1.6,
        "unit": "$1.60 per hr"
      },
      {
        "timeRange": "Aft 9pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-8.59pm",
        "rate": 1.6,
        "unit": "$1.60 per hr"
      },
      {
        "timeRange": "Aft 9pm",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 219,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3432,
  "lng": 103.731,
  "mapPos": {
    "top": 53,
    "left": 30
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_lot_1_shopping_centre",
  "carParkId": "CSV_LOT_1_SHOPPING_C",
  "name": "Lot 1 Shopping Centre",
  "agency": "Commercial",
  "area": "West",
  "address": "Lot 1 Shopping Centre, Singapore",
  "availableLots": 147,
  "totalLots": 241,
  "lotStatus": "available",
  "baseRatePerHour": 1.07,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "12am-5.59pm",
        "rate": 1.07,
        "unit": "$1.07 for 1st hr; $0.32 for sub. 15 mins."
      },
      {
        "timeRange": "Mon-Thurs, 6pm-11.59pm",
        "rate": 2.14,
        "unit": "$2.14 per entry. Fri & Eve of PH, 6pm-2.59am: $2.14 per entry."
      }
    ],
    "saturday": [
      {
        "timeRange": "3am-5.59pm",
        "rate": 2.14,
        "unit": "$2.14 for 1st 2-hrs; $0.32 for sub. 15 mins"
      },
      {
        "timeRange": "6pm-2.59am",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "3am-5.59pm",
        "rate": 2.14,
        "unit": "$2.14 for 1st 2-hrs; $0.32 for sub. 15 mins"
      },
      {
        "timeRange": "6pm-11.59am",
        "rate": 2.14,
        "unit": "$2.14 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 156,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3508,
  "lng": 103.7425,
  "mapPos": {
    "top": 50,
    "left": 32
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
  {
  "id": "csv_queensway_shopping_centre",
  "carParkId": "CSV_QUEENSWAY_SHOPPI",
  "name": "Queensway Shopping Centre",
  "agency": "Commercial",
  "area": "West",
  "address": "Queensway Shopping Centre, Singapore",
  "availableLots": 101,
  "totalLots": 225,
  "lotStatus": "available",
  "baseRatePerHour": 2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-6pm",
        "rate": 2,
        "unit": "$2 for 1st 1½hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.3,
        "unit": "$2.30 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-6pm",
        "rate": 1.5,
        "unit": "$1.50 for 1st 1hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.3,
        "unit": "$2.30 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-6pm",
        "rate": 2,
        "unit": "$2 for 1st 1½hr; $1.20 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 6pm",
        "rate": 2.3,
        "unit": "$2.30 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 90,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.342,
  "lng": 103.7555,
  "mapPos": {
    "top": 54,
    "left": 35
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_savoy_theatre",
  "carParkId": "CSV_SAVOY_THEATRE",
  "name": "Savoy Theatre",
  "agency": "Commercial",
  "area": "West",
  "address": "Savoy Theatre, Singapore",
  "availableLots": 278,
  "totalLots": 487,
  "lotStatus": "available",
  "baseRatePerHour": 1.2,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.2,
        "unit": "$1.20 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3.00 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-5pm",
        "rate": 1.2,
        "unit": "$1.20 per hr"
      },
      {
        "timeRange": "Aft 5pm",
        "rate": 3,
        "unit": "$3.00 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Sun & PH",
        "rate": 3,
        "unit": "$3.00 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 102,
  "distanceKm": 3.5,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3436,
  "lng": 103.7395,
  "mapPos": {
    "top": 53,
    "left": 32
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_serene_centre",
  "carParkId": "CSV_SERENE_CENTRE",
  "name": "Serene Centre",
  "agency": "Commercial",
  "area": "West",
  "address": "Serene Centre, Singapore",
  "availableLots": 93,
  "totalLots": 403,
  "lotStatus": "available",
  "baseRatePerHour": 1.53,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "8am-10pm",
        "rate": 1.53,
        "unit": "$1.53 for 1st hr; $1.53 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 1.53,
        "unit": "$1.53 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "8am-10pm",
        "rate": 1.53,
        "unit": "$1.53 for 1st hr; $1.53 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 1.53,
        "unit": "$1.53 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "8am-10pm",
        "rate": 1.53,
        "unit": "$1.53 for 1st hr; $1.53 for sub. ½ hr"
      },
      {
        "timeRange": "Aft 10pm",
        "rate": 1.53,
        "unit": "$1.53 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 198,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3324,
  "lng": 103.7515,
  "mapPos": {
    "top": 58,
    "left": 34
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_the_metropolis",
  "carParkId": "CSV_THE_METROPOLIS",
  "name": "The Metropolis",
  "agency": "Commercial",
  "area": "West",
  "address": "The Metropolis, Singapore",
  "availableLots": 203,
  "totalLots": 473,
  "lotStatus": "available",
  "baseRatePerHour": 2.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "6am-6pm",
        "rate": 2.5,
        "unit": "$2.50 for 1st hr, sub $1.25 per 1/2 hr"
      },
      {
        "timeRange": "Time period 1",
        "rate": 2.5,
        "unit": "6pm-12am: $2.50 per entry; Time period 2: 12am-6am: $2.50 per entry"
      }
    ],
    "saturday": [
      {
        "timeRange": "6am-6pm",
        "rate": 2.5,
        "unit": "$2.50 for 1st hr, sub $1.25 per 1/2 hr"
      },
      {
        "timeRange": "Time period 1",
        "rate": 2.5,
        "unit": "6pm-12am: $2.50 per entry; Time period 2: 12am-6am: $2.50 per entry"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "6am-6pm",
        "rate": 2.5,
        "unit": "$2.50 for 1st hr, sub $1.25 per 1/2 hr"
      },
      {
        "timeRange": "Time period 1",
        "rate": 2.5,
        "unit": "6pm-12am: $2.50 per entry; Time period 2: 12am-6am: $2.50 per entry"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 78,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3484,
  "lng": 103.7415,
  "mapPos": {
    "top": 51,
    "left": 32
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_turf_city",
  "carParkId": "CSV_TURF_CITY",
  "name": "Turf City",
  "agency": "Commercial",
  "area": "West",
  "address": "Turf City, Singapore",
  "availableLots": 121,
  "totalLots": 274,
  "lotStatus": "available",
  "baseRatePerHour": 0,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 0,
        "unit": "Free parking"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 0,
        "unit": "Free parking"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 0,
        "unit": "Free parking"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.3,
  "reviewCount": 99,
  "distanceKm": 3.2,
  "hasEV": true,
  "hasFastEV": true,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3352,
  "lng": 103.761,
  "mapPos": {
    "top": 57,
    "left": 37
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 4,
  "category": "mall"
},
  {
  "id": "csv_valley_point",
  "carParkId": "CSV_VALLEY_POINT",
  "name": "Valley Point",
  "agency": "Commercial",
  "area": "West",
  "address": "Valley Point, Singapore",
  "availableLots": 79,
  "totalLots": 175,
  "lotStatus": "available",
  "baseRatePerHour": 1.5,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1.5,
        "unit": "$1.50 for 1st hr; $0.80 for sub. ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1.5,
        "unit": "$1.50 for 1st hr; $0.80 for sub. ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1.5,
        "unit": "$1.50 for 1st hr; $0.80 for sub. ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 150,
  "distanceKm": 2.3,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.342,
  "lng": 103.7555,
  "mapPos": {
    "top": 54,
    "left": 35
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_west_coast_plaza_ginza_plaza",
  "carParkId": "CSV_WEST_COAST_PLAZA",
  "name": "West Coast Plaza (Ginza Plaza)",
  "agency": "Commercial",
  "area": "West",
  "address": "West Coast Plaza (Ginza Plaza), Singapore",
  "availableLots": 239,
  "totalLots": 391,
  "lotStatus": "available",
  "baseRatePerHour": 1.25,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Day (07:00 - 18:00)",
        "rate": 1.25,
        "unit": "$1.25 for 1st hr; $1.00 for sub. ½ hr"
      },
      {
        "timeRange": "Evening (18:00 - 07:00)",
        "rate": 1.25,
        "unit": "$1.25 for 1st hr; $1.00 for sub. ½ hr"
      }
    ],
    "saturday": [
      {
        "timeRange": "Saturday",
        "rate": 1.5,
        "unit": "$1.50 for 1st hr; $1.00 for sub. ½ hr"
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Saturday",
        "rate": 1.5,
        "unit": "$1.50 for 1st hr; $1.00 for sub. ½ hr"
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 66,
  "distanceKm": 2.9,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3308,
  "lng": 103.7675,
  "mapPos": {
    "top": 59,
    "left": 38
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 3,
  "category": "mall"
},
  {
  "id": "csv_yew_tee_point",
  "carParkId": "CSV_YEW_TEE_POINT",
  "name": "Yew Tee Point",
  "agency": "Commercial",
  "area": "West",
  "address": "Yew Tee Point, Singapore",
  "availableLots": 122,
  "totalLots": 193,
  "lotStatus": "available",
  "baseRatePerHour": 1.18,
  "dayRates": {
    "weekday": [
      {
        "timeRange": "Daily",
        "rate": 1.18,
        "unit": "$1.18 for 1st hr; $0.64 for sub. ½ hr or part thereof."
      }
    ],
    "saturday": [
      {
        "timeRange": "Daily",
        "rate": 1.18,
        "unit": "$1.18 for 1st hr; $0.64 for sub. ½ hr or part thereof."
      }
    ],
    "sundayHoliday": [
      {
        "timeRange": "Daily",
        "rate": 1.18,
        "unit": "$1.18 for 1st hr; $0.64 for sub. ½ hr or part thereof."
      }
    ]
  },
  "gracePeriodMins": 10,
  "heightLimitM": 2,
  "rating": 4.6,
  "reviewCount": 168,
  "distanceKm": 1.1,
  "hasEV": true,
  "hasFastEV": false,
  "evChargers": [
    {
      "type": "Type 2 22kW AC (SP Mobility)",
      "available": 2,
      "total": 4,
      "powerKw": 22,
      "pricePerKwh": 0.52
    }
  ],
  "amenities": [
    "Sheltered",
    "Autopay IU",
    "CCTV 24/7",
    "Lift Access"
  ],
  "lat": 1.3444,
  "lng": 103.7565,
  "mapPos": {
    "top": 53,
    "left": 36
  },
  "operator": "West",
  "erpZone": "Rest of Singapore",
  "cctvSecurity": true,
  "covered": true,
  "disabledLots": 5,
  "category": "mall"
},
];
