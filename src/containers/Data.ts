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

const fulfillments = [
    [
        {
            description: "Order placed",
            minutes: 10000,
            depart: true
        },
        {
            description: "Order Check and weight",
            minutes: 5000,
            depart: true
        },
        {
            description: "order paid",
            minutes: 3000,
            depart: true
        },
        {
            description: "cargo brought to airport",
            minutes: 1000,
            depart: true
        },
        {
            description: "cargo depart",
            minutes: 0,
            depart: true
        },
        {
            description: "cargo arrive",
            minutes: 0,
            depart: false
        },
        {
            description: "cargo qa",
            minutes: 250,
            depart: false
        },
        {
            description: "cargo delivery",
            minutes: 1000,
            depart: false
        }
    ]
];

const fulfillmentLAXJFK = [
    {
        description:
            "Order placed by LIMA and ready for inspection by at LIMA facility",
        minutes: 10000,
        depart: true
    },
    {
        description:
            "Los Angeles Rep. Matt Grevers(N979I3) met with LIMA. Transport weighed in at 1549.23kg. Shipment priced at 4293.23",
        minutes: 5000,
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
            "Transport picked up by Los Angeles Rep. Caeleb Dressel(F7C6RU) and brought to LAX",
        minutes: 1000,
        depart: true
    },
    {
        description: "Flight departs LAX for JFK. Flight time - 5h 25m",
        minutes: 0,
        depart: true
    },
    {
        description: "Flight on schedule to arrive",
        minutes: 0,
        depart: false
    },
    {
        description:
            "Transport on schedule for QA check by New York Rep. Daiya Seto(2OBOQT) ",
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
        minutes: 10000,
        depart: true
    },
    {
        description:
            "Los Angeles Rep. Michael Phelps(N979I3) met with OSCAR. Transport weighed in at 2003.41kg. Shipment priced at 5410.11",
        minutes: 5000,
        depart: true
    },
    {
        description:
            "OSCAR has paid order in full. Transport scheduled for pickup in several hours",
        minutes: 3000,
        depart: true
    },
    {
        description:
            "Transport picked up by Los Angeles Rep. Sun Yang(F7C6RU) and brought to LAX",
        minutes: 1000,
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
            "Transport on schedule for QA check by New York Rep. Cody Miller(2OBOQT) ",
        minutes: 250,
        depart: false
    },
    {
        description: "Transport on schedule for delivery to OSCAR warehouse",
        minutes: 1000,
        depart: false
    }
];

const fulfillmentSEAATL = [
    {
        description:
            "Order placed by ROMEO and ready for inspection by at ROMEO facility",
        minutes: 10000,
        depart: true
    },
    {
        description:
            "Seattle Rep. Ryan Held(N979I3) met with ROMEO. Transport weighed in at 1892.11kg. Shipment priced at 3992.04",
        minutes: 5000,
        depart: true
    },
    {
        description:
            "ROMEO has paid order in full. Transport scheduled for pickup in several hours",
        minutes: 3000,
        depart: true
    },
    {
        description:
            "Transport picked up by Seattle Rep. Ippei Watanabe(F7C6RU) and brought to SEA",
        minutes: 1000,
        depart: true
    },
    {
        description: "Flight departs SEA for ATL. Flight time - 4h 45m",
        minutes: 0,
        depart: true
    },
    {
        description: "Flight on schedule to arrive",
        minutes: 0,
        depart: false
    },
    {
        description:
            "Transport on schedule for QA check by Atlanta Rep. Ryan Murphy(2OBOQT) ",
        minutes: 250,
        depart: false
    },
    {
        description: "Transport on schedule for delivery to ROMEO warehouse",
        minutes: 1000,
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
        fulfillments: fulfillments[0]
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
        fulfillments: fulfillments[0]
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
        fulfillments: fulfillments[0]
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
        fulfillments: fulfillments[0]
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
        fulfillments: fulfillments[0]
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
        fulfillments: fulfillments[0]
    }
];
