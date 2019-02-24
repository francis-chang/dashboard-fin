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
