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
    TYPINGS FOR D3 SELECTIONS
*/

type SVGSelection = Selection<SVGSVGElement | null, {}, null, undefined> | null;
type SVGGeoPath = GeoPath<any, GeoPermissibleObjects> | null;
