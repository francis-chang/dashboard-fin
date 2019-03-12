declare module "randomstring";

/*
    PROP TYPINGS FOR NAVIGATION
*/

interface PropsForOpenNav {
    isOpen: boolean;
    setClick: (b: boolean) => void;
}

interface PropsForNavDropdown {
    text: string;
    isNavOut: boolean;
}

/*
    PROP TYPINGS FOR LIST AND LISTING
*/

interface PropsForListing {
    shipment: Shipment;
}

interface PropsForFilterList {
    setMouseClicked: (b: boolean) => void;
}

interface PropsForMapInfo {
    projection: GeoProjection;
}

interface PropsForLocation {
    projection: GeoProjection;
}

/*
    TYPINGS FOR D3 SELECTIONS
*/

type SVGSelection = Selection<SVGSVGElement | null, {}, null, undefined> | null;
type D3SVGTextSelection = Selection<SVGTextElement, {}, null, undefined> | null;
type SVGGeoPath = GeoPath<any, GeoPermissibleObjects> | null;

/*
    SHIPMENT TYPES
*/

interface Destination {
    airport: string;
    abbr: string;
    city: string;
    lnglat: number[];
}

type Shipment = {
    name: string;
    id: string;
    from: Destination;
    to: Destination;
    progress: number;
    flightDuration: number;
    eta: string;
    cargoWeight: string;
    fulfillments: Fulfillment;
};

type Fulfillment = { description: string; minutes: number; depart: boolean }[];

interface FinalDate {
    date: Date;
    dates: datesObj[];
}

type FinalDates = FinalDate[];

type timesObj = {
    descr: string;
    time: number;
};

type datesObj = {
    descr: string;
    date: Date;
};

interface Task {
    description: string;
    time: Date;
}

interface FinalTime {
    date: Date;
    tasks: Task[];
}
