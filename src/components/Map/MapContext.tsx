import { createContext } from "react";

type MapContextType = {
    currentShipment: any;
    setCurrentShipment: (shipment: any) => void;
    date: Date | null;
};

export const MapContext = createContext<MapContextType>({
    currentShipment: null,
    setCurrentShipment: () => {},
    date: null
});
