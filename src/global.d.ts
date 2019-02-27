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
    descr: string;
    progress: number;
    flightDuration: number;
    flightInitialSpeed: number;
    eta: string;
};
