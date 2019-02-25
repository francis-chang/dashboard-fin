import { createContext } from "react";

type MapContextType = {
    currentShipment: any;
    setCurrentShipment: (shipment: any) => void;
    date: Date | null;
    shipments: Shipment[];
    setShipments: (shipments: any) => void;
    filteredShipments: Shipment[];
};

export const MapContext = createContext<MapContextType>({
    currentShipment: null,
    setCurrentShipment: () => {},
    date: null,
    shipments: [],
    setShipments: () => {},
    filteredShipments: []
});
