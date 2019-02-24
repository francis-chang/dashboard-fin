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
    }
];

export const SHIPMENTDATA = [
    {
        name: "FLEX-7DJ43",
        id: "tNO6KHlKFv",
        from: DESTINATIONLIST[1],
        to: DESTINATIONLIST[5],
        descr: "LAX/JFK",
        progress: 0.4,
        flightDuration: 320,
        flightInitialSpeed: 340,
        eta: "on time"
    },
    {
        name: "AAPL-247D3",
        id: "8Gu11LV3D5",
        from: DESTINATIONLIST[1],
        to: DESTINATIONLIST[2],
        descr: "LAX/ORD",
        progress: 0.7,
        flightDuration: 245,
        flightInitialSpeed: 340,
        eta: "delayed"
    },
    {
        name: "MINERVA-227JD",
        id: "QA7NVuLzgB",
        from: DESTINATIONLIST[6],
        to: DESTINATIONLIST[0],
        descr: "SEA/ATL",
        progress: 0.2,
        flightDuration: 280,
        flightInitialSpeed: 310,
        eta: "on time"
    },
    {
        name: "EVERGREEN-VX347",
        id: "ju4j5tQ7De",
        from: DESTINATIONLIST[5],
        to: DESTINATIONLIST[2],
        descr: "JFK/ORD",
        progress: 0.4,
        flightDuration: 175,
        flightInitialSpeed: 350,
        eta: "on time"
    },
    {
        name: "MSFT-785GT",
        id: "77rZUdtLoY",
        from: DESTINATIONLIST[5],
        to: DESTINATIONLIST[4],
        descr: "JFK/DEN",
        progress: 0,
        flightDuration: 295,
        flightInitialSpeed: 310,
        eta: "on time"
    },
    {
        name: "PALANTIR-D7554",
        id: "lNtJq1lJkR",
        from: DESTINATIONLIST[3],
        to: DESTINATIONLIST[2],
        descr: "DEN/ORD",
        progress: 0,
        flightDuration: 145,
        flightInitialSpeed: 0,
        eta: "canceled"
    }
];
