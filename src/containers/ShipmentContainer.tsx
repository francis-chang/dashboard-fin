import React, { useEffect, useState } from "react";
import List from "../components/Map/List";
import Map from "../components/Map/Map";
import { MapContext } from "../components/Map/MapContext";
import { DashboardPlacement, ShipmentGrid } from "./ContainerStyles";
import { SHIPMENTDATA } from "./Data";

const ShipmentContainer: React.FC = () => {
    const [currentShipment, setCurrentShipment] = useState(null);
    const [date, setDate] = useState<Date | null>(null);
    const [filteredShipments, setShipments] = useState<Shipment[]>(
        SHIPMENTDATA
    );
    const shipments = SHIPMENTDATA.slice();

    useEffect(() => {
        if (!date) {
            setDate(new Date());
        }
    });

    return (
        <DashboardPlacement>
            <ShipmentGrid>
                <MapContext.Provider
                    value={{
                        currentShipment,
                        setCurrentShipment,
                        date,
                        shipments,
                        setShipments,
                        filteredShipments
                    }}
                >
                    <Map />
                    <List />
                </MapContext.Provider>
            </ShipmentGrid>
        </DashboardPlacement>
    );
};

export default ShipmentContainer;
