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
        name: "shipmentOne",
        id: "COOL-1234",
        from: DESTINATIONLIST[1],
        to: DESTINATIONLIST[5],
        descr: "LAX/JFK",
        progress: 0.4,
        flightDuration: 320,
        flightInitialSpeed: 340
    },
    {
        name: "shipmentTwo",
        id: "COOL-2345",
        from: DESTINATIONLIST[1],
        to: DESTINATIONLIST[2],
        descr: "LAX/ORD",
        progress: 0.7,
        flightDuration: 245,
        flightInitialSpeed: 340
    },
    {
        name: "shipmentThree",
        id: "COOL-3456",
        from: DESTINATIONLIST[6],
        to: DESTINATIONLIST[0],
        descr: "SEA/ATL",
        progress: 0.2,
        flightDuration: 280,
        flightInitialSpeed: 310
    },
    {
        name: "shipmentFour",
        id: "COOL-4567",
        from: DESTINATIONLIST[5],
        to: DESTINATIONLIST[2],
        descr: "JFK/ORD",
        progress: 0.4,
        flightDuration: 175,
        flightInitialSpeed: 350
    },
    {
        name: "shipmentFive",
        id: "COOL-5678",
        from: DESTINATIONLIST[5],
        to: DESTINATIONLIST[4],
        descr: "JFK/DEN",
        progress: 0,
        flightDuration: 295,
        flightInitialSpeed: 310
    },
    {
        name: "shipmentSix",
        id: "COOL-6789",
        from: DESTINATIONLIST[3],
        to: DESTINATIONLIST[2],
        descr: "DEN/ORD",
        progress: 0,
        flightDuration: 145,
        flightInitialSpeed: 0
    }
];
