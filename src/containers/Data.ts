export const DESTINATIONLIST = [
    {
        airport: "Hartsfield-Jackson Atlanta International",
        abbr: "ATL",
        city: "Atlanta, GA",
        lnglat: [-84.4277, 33.6407]
    },
    {
        airport: "Los Angeles International",
        abbr: "LAX",
        city: "Los Angeles, CA",
        lnglat: [-118.4085, 33.9416]
    },
    {
        airport: "O`Hare International",
        abbr: "ORD",
        city: "Chicago, IL",
        lnglat: [-87.9073, 41.9742]
    },
    {
        airport: "Dallas/Fort Worth International",
        abbr: "DFW",
        city: "DFW Airport, TX",
        lnglat: [-97.0403, 32.8998]
    },
    {
        airport: "Denver International",
        abbr: "DEN",
        city: "Denver, CO",
        lnglat: [-104.6737, 39.8561]
    },
    {
        airport: "John F. Kennedy International ",
        abbr: "JFK",
        city: "Queens, NY",
        lnglat: [-73.7781, 40.6413]
    },
    {
        airport: "Seattle-Tacoma International",
        abbr: "SEA",
        city: "Seattle, WA",
        lnglat: [-122.3088, 47.4502]
    },
    {
        airport: "San Francisco International",
        abbr: "SFO",
        city: "San Mateo County, CA",
        lnglat: [-122.4194, 37.7749]
    },
    {
        airport: "Miami International",
        abbr: "MIA",
        city: "Miami, FL",
        lnglat: [-80.2871, 25.7959]
    },
    {
        airport: "Orlando International",
        abbr: "MCO",
        city: "Orlando, FL",
        lnglat: [-81.3081, 28.4312]
    },
    {
        airport: "Ronald Reagan Washington National",
        abbr: "DCA",
        city: "Arlington, VA",
        lnglat: [-77.4565, 38.9531]
    }
];

const fulfillmentLAXJFK = [
    {
        description:
            "Order placed by LIMA and ready for inspection by at LIMA facility",
        minutes: 12547,
        depart: true
    },
    {
        description:
            "Los Angeles Rep. Matt Grevers (N979I3) met with LIMA. Transport weighed in at 1549.23kg. Shipment priced at $4293.23",
        minutes: 7000,
        depart: true
    },
    {
        description:
            "LIMA has paid order in full. Transport scheduled for pickup in several hours",
        minutes: 3000,
        depart: true
    },
    {
        description:
            "Transport picked up by Los Angeles Rep. Caeleb Dressel (F7C6RU) and brought to LAX",
        minutes: 1000,
        depart: true
    },
    {
        description: "Flight departs LAX for JFK. Flight time - 5h 25m",
        minutes: 0,
        depart: true
    },
    {
        description: "Flight on schedule to arrive to JFK",
        minutes: 0,
        depart: false
    },
    {
        description:
            "Transport on schedule for QA check by New York Rep. Daiya Seto (2OBOQT) ",
        minutes: 250,
        depart: false
    },
    {
        description: "Transport on schedule for delivery to LIMA warehouse",
        minutes: 1000,
        depart: false
    }
];

const fulfillmentLAXORD = [
    {
        description:
            "Order placed by OSCAR and ready for inspection by at OSCAR facility",
        minutes: 8546,
        depart: true
    },
    {
        description:
            "Los Angeles Rep. Michael Phelps (N979I3) met with OSCAR. Transport weighed in at 2003.41kg. Shipment priced at $5410.11",
        minutes: 4855,
        depart: true
    },
    {
        description:
            "OSCAR has paid order in full. Transport scheduled for pickup in several hours",
        minutes: 3846,
        depart: true
    },
    {
        description:
            "Transport picked up by Los Angeles Rep. Sun Yang (F7C6RU) and brought to LAX",
        minutes: 800,
        depart: true
    },
    {
        description: "Flight departs LAX for ORD. Flight time - 4h 5m",
        minutes: 0,
        depart: true
    },
    {
        description: "Flight delayed to arrive. Flight time - 4h 50m",
        minutes: 0,
        depart: false
    },
    {
        description:
            "Transport on schedule for QA check by New York Rep. Cody Miller (2OBOQT) ",
        minutes: 250,
        depart: false
    },
    {
        description: "Transport on schedule for delivery to OSCAR warehouse",
        minutes: 1440,
        depart: false
    }
];

const fulfillmentSEAATL = [
    {
        description:
            "Order placed by ROMEO and ready for inspection by at ROMEO facility",
        minutes: 7800,
        depart: true
    },
    {
        description:
            "Seattle Rep. Ryan Held (N979I3) met with ROMEO. Transport weighed in at 1892.11kg. Shipment priced at $3992.04",
        minutes: 4896,
        depart: true
    },
    {
        description:
            "ROMEO has paid order in full. Transport scheduled for pickup in several hours",
        minutes: 4100,
        depart: true
    },
    {
        description:
            "Transport picked up by Seattle Rep. Ippei Watanabe (F7C6RU) and brought to SEA",
        minutes: 1440,
        depart: true
    },
    {
        description: "Flight departs SEA for ATL. Flight time - 4h 45m",
        minutes: 0,
        depart: true
    },
    {
        description: "Flight on schedule to arrive at ATL",
        minutes: 0,
        depart: false
    },
    {
        description:
            "Transport on schedule for QA check by Atlanta Rep. Ryan Murphy (2OBOQT) ",
        minutes: 360,
        depart: false
    },
    {
        description: "Transport on schedule for delivery to ROMEO warehouse",
        minutes: 2500,
        depart: false
    }
];

const fulfillmentJFKORD = [
    {
        description:
            "Order placed by ECHO and ready for inspection by at ECHO facility",
        minutes: 9687,
        depart: true
    },
    {
        description:
            "Seattle Rep. Michael Andrew (N979I3) met with ECHO. Transport weighed in at 1822.11kg. Shipment priced at $3887.23",
        minutes: 6657,
        depart: true
    },
    {
        description:
            "ECHO has paid order in full. Transport scheduled for pickup in several hours",
        minutes: 3500,
        depart: true
    },
    {
        description:
            "Transport picked up by New York Rep. Lilly King (F7C6RU) and brought to JFK",
        minutes: 1200,
        depart: true
    },
    {
        description: "Flight departs JFK for ORD. Flight time - 2h 55m",
        minutes: 0,
        depart: true
    },
    {
        description: "Flight on schedule to arrive at ORD",
        minutes: 0,
        depart: false
    },
    {
        description:
            "Transport on schedule for QA check by Chicago Rep. Amanda Beard (2OBOQT) ",
        minutes: 199,
        depart: false
    },
    {
        description: "Transport on schedule for delivery to ECHO warehouse",
        minutes: 720,
        depart: false
    }
];

const fulfillmentJFKDEN = [
    {
        description:
            "Order placed by MIKE and ready for inspection by at MIKE facility",
        minutes: 7368,
        depart: true
    },
    {
        description:
            "Seattle Rep. Katie Ledecky (N979I3) met with MIKE. Transport weighed in at 3103.14kg. Shipment priced at $5182.20",
        minutes: 6457,
        depart: true
    },
    {
        description:
            "MIKE has paid order in full. Transport scheduled for pickup in several hours",
        minutes: 3100,
        depart: true
    },
    {
        description:
            "Transport picked up by New York Rep. Adam Peaty (F7C6RU) and brought to SEA",
        minutes: 1200,
        depart: true
    },
    {
        description: "Flight departs JFK for DEN. Flight time - 4h 45m",
        minutes: 0,
        depart: true
    },
    {
        description: "Flight on schedule to arrive at DEN",
        minutes: 0,
        depart: false
    },
    {
        description:
            "Transport on schedule for QA check by Denver Rep. Ryan Lochte (2OBOQT) ",
        minutes: 350,
        depart: false
    },
    {
        description: "Transport on schedule for delivery to MIKE warehouse",
        minutes: 1720,
        depart: false
    }
];

const fulfillmentDFW = [
    {
        description:
            "Order placed by INDIA and ready for inspection by at INDIA facility",
        minutes: 8459,
        depart: true
    },
    {
        description:
            "Dallas Rep. Zhang Lin (N979I3) met with INDIA. Transport weighed in at 3501.31kg. Shipment priced at $6125.64",
        minutes: 6100,
        depart: true
    },
    {
        description:
            "INDIA failed to pay the agreed payment schedule. Will alot 24 hours grace period. ",
        minutes: 3450,
        depart: true
    },
    {
        description:
            "INDIA has called to confirm a cancelation. Order Canceled.",
        minutes: 1540,
        depart: true
    }
];

const fulfillmentSEAMCO = [
    {
        description:
            "Order placed by PAPA and ready for inspection by at PAPA facility",
        minutes: 7851,
        depart: true
    },
    {
        description:
            "Seattle Rep. Missy Franklin (N979I3) met with PAPA. Transport weighed in at 1250.22kg. Shipment priced at $2500.14",
        minutes: 6111,
        depart: true
    },
    {
        description:
            "PAPA has paid order in full. Transport scheduled for pickup in several hours",
        minutes: 2987,
        depart: true
    },
    {
        description:
            "Transport picked up by Seattle Rep. Missy Franklin (N979I3) and brought to SEA",
        minutes: 1120,
        depart: true
    },
    {
        description: "Flight departs SEA for MCO. Flight time - 5h 25m",
        minutes: 0,
        depart: true
    },
    {
        description: "Flight on schedule to arrive at MCO",
        minutes: 0,
        depart: false
    },
    {
        description:
            "Transport on schedule for QA check by Orlando Rep. Ryan Murphy (2OBOQT) ",
        minutes: 350,
        depart: false
    },
    {
        description: "Transport on schedule for delivery to PAPA warehouse",
        minutes: 1200,
        depart: false
    }
];

const fulfillmentSFOMIA = [
    {
        description:
            "Order placed by SIERRA and ready for inspection by at SIERRA facility",
        minutes: 7624,
        depart: true
    },
    {
        description:
            "Seattle Rep. Kathleen Baker (N979I3) met with SIERRA. Transport weighed in at 2858.59kg. Shipment priced at $4100.23",
        minutes: 6000,
        depart: true
    },
    {
        description:
            "SIERRA has paid order in full. Transport scheduled for pickup in several hours",
        minutes: 4200,
        depart: true
    },
    {
        description:
            "Transport picked up by San Francisco Rep. Kathleen Baker (N979I3) and brought to SFO",
        minutes: 852,
        depart: true
    },
    {
        description: "Flight departs SFO for MIA. Flight time - 5h 25m",
        minutes: 0,
        depart: true
    },
    {
        description: "Flight on schedule to arrive at MIA",
        minutes: 0,
        depart: false
    },
    {
        description:
            "Transport on schedule for QA check by Miami Rep. Paul Biedermann (2OBOQT) ",
        minutes: 180,
        depart: false
    },
    {
        description: "Transport on schedule for delivery to SIERRA warehouse",
        minutes: 1200,
        depart: false
    }
];

const fulfillmentSFODCA = [
    {
        description:
            "Order placed by UNIFORM and ready for inspection by at UNIFORM facility",
        minutes: 1440,
        depart: true
    },
    {
        description:
            "Seattle Rep. Blake Pieroni (N979I3) met with UNIFORM. Transport weighed in at 2345.22kg. Shipment priced at $3634.17",
        minutes: 6547,
        depart: true
    },
    {
        description:
            "UNIFORM has paid order in full. Transport scheduled for pickup in several hours",
        minutes: 3400,
        depart: true
    },
    {
        description:
            "Transport picked up by Seattle Rep. Zachary Apple (N979I3) and brought to SEA",
        minutes: 1390,
        depart: true
    },
    {
        description: "Flight departs SFO for DCA. Flight time - 5h 10m",
        minutes: 0,
        depart: true
    },
    {
        description: "Flight on schedule to arrive at DCA",
        minutes: 0,
        depart: false
    },
    {
        description:
            "Transport on schedule for QA check by Washington DC Rep. Zane Grothe(2OBOQT) ",
        minutes: 400,
        depart: false
    },
    {
        description: "Transport on schedule for delivery to UNIFORM warehouse",
        minutes: 2511,
        depart: false
    }
];

export const SHIPMENTDATA = [
    {
        name: "LIMA-7DJ43",
        id: "tNO6K-HlKFv",
        from: DESTINATIONLIST[1],
        to: DESTINATIONLIST[5],
        progress: 0.4,
        flightDuration: 320,
        eta: "on time",
        cargoWeight: "450.52kg",
        fulfillments: fulfillmentLAXJFK
    },
    {
        name: "OSCAR-247D3",
        id: "Gu11L-V3D58",
        from: DESTINATIONLIST[1],
        to: DESTINATIONLIST[2],
        progress: 0.7,
        flightDuration: 245,
        eta: "delayed",
        cargoWeight: "390.81kg",
        fulfillments: fulfillmentLAXORD
    },
    {
        id: "QA7NV-uLzgB",
        name: "ROMEO-227JD",
        from: DESTINATIONLIST[6],
        to: DESTINATIONLIST[0],
        progress: 0.2,
        flightDuration: 280,
        eta: "on time",
        cargoWeight: "381.52kg",
        fulfillments: fulfillmentSEAATL
    },
    {
        name: "ECHO-VX347",
        id: "ju4j5-tQ7De",
        from: DESTINATIONLIST[5],
        to: DESTINATIONLIST[2],
        progress: 0.4,
        flightDuration: 175,
        eta: "on time",
        cargoWeight: "271.54kg",
        fulfillments: fulfillmentJFKORD
    },
    {
        name: "MIKE-785GT",
        id: "rZUdt-LoY77",
        from: DESTINATIONLIST[5],
        to: DESTINATIONLIST[4],
        progress: 0,
        flightDuration: 295,
        eta: "on time",
        cargoWeight: "421.65kg",
        fulfillments: fulfillmentJFKDEN
    },
    {
        name: "INDIA-D7554",
        id: "lNtJq-1lJkR",
        from: DESTINATIONLIST[3],
        to: DESTINATIONLIST[3],
        progress: 1,
        flightDuration: 145,
        eta: "canceled",
        cargoWeight: "234.63kg",
        fulfillments: fulfillmentDFW
    },
    {
        name: "PAPA-YG691",
        id: "t6EZm-rGebX",
        from: DESTINATIONLIST[6],
        to: DESTINATIONLIST[9],
        flightDuration: 340,
        progress: 1,
        eta: "delayed",
        cargoWeight: "81.24kg",
        fulfillments: fulfillmentSEAMCO
    },
    {
        name: "SIERRA-GT2345",
        id: "YrRMd-XO4gD",
        from: DESTINATIONLIST[7],
        to: DESTINATIONLIST[8],
        flightDuration: 325,
        progress: 0.2,
        eta: "on time",
        cargoWeight: "189.92kg",
        fulfillments: fulfillmentSFOMIA
    },
    {
        name: "UNIFORM-AS23409",
        id: "rmT3F-LI31J",
        from: DESTINATIONLIST[7],
        to: DESTINATIONLIST[10],
        flightDuration: 300,
        progress: 0.1,
        eta: "on time",
        cargoWeight: "340.31kg",
        fulfillments: fulfillmentSFODCA
    }
];
