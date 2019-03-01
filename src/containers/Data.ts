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

export const SHIPMENTDATA = [
    {
        name: "FLEX-7DJ43",
        id: "tNO6KHlKFv",
        from: DESTINATIONLIST[1],
        to: DESTINATIONLIST[5],
        progress: 0.4,
        flightDuration: 320,
        eta: "on time"
    },
    {
        name: "AAPL-247D3",
        id: "Gu11LV3D58",
        from: DESTINATIONLIST[1],
        to: DESTINATIONLIST[2],
        progress: 0.7,
        flightDuration: 245,
        eta: "delayed"
    },
    {
        name: "MINERVA-227JD",
        id: "QA7NVuLzgB",
        from: DESTINATIONLIST[6],
        to: DESTINATIONLIST[0],
        progress: 0.2,
        flightDuration: 280,
        eta: "on time"
    },
    {
        name: "EVERGREEN-VX347",
        id: "ju4j5tQ7De",
        from: DESTINATIONLIST[5],
        to: DESTINATIONLIST[2],
        progress: 0.4,
        flightDuration: 175,
        eta: "on time"
    },
    {
        name: "MSFT-785GT",
        id: "rZUdtLoY77",
        from: DESTINATIONLIST[5],
        to: DESTINATIONLIST[4],
        progress: 0,
        flightDuration: 295,
        eta: "on time"
    },
    {
        name: "PALANTIR-D7554",
        id: "lNtJq1lJkR",
        from: DESTINATIONLIST[3],
        to: DESTINATIONLIST[2],
        progress: 0,
        flightDuration: 145,
        eta: "canceled"
    },
    {
        name: "OKAFOR-YG691",
        id: "as23094",
        from: DESTINATIONLIST[6],
        to: DESTINATIONLIST[9],
        flightDuration: 340,
        progress: 0.4,
        eta: "delayed"
    },
    {
        name: "SPECTRAL-GT2345",
        id: "asdf239084",
        from: DESTINATIONLIST[7],
        to: DESTINATIONLIST[8],
        flightDuration: 325,
        progress: 0.2,
        eta: "on time"
    },
    {
        name: "FLEXBOX-AS23409",
        id: "asdf2039482",
        from: DESTINATIONLIST[7],
        to: DESTINATIONLIST[10],
        flightDuration: 300,
        progress: 0.1,
        eta: "on time"
    }
];
