import React, { useEffect, useState } from "react";
import List from "../components/Map/List";
import Map from "../components/Map/Map";
import { MapContext } from "../components/Map/MapContext";
import { DashboardPlacement, ShipmentGrid } from "./ContainerStyles";

const ShipmentContainer: React.FC = () => {
    const [currentShipment, setCurrentShipment] = useState(null);
    const [date, setDate] = useState<Date | null>(null);

    useEffect(() => {
        if (!date) {
            setDate(new Date());
        }
        console.log(currentShipment);
    });

    return (
        <DashboardPlacement>
            <ShipmentGrid>
                <MapContext.Provider
                    value={{ currentShipment, setCurrentShipment, date }}
                >
                    <Map />
                    <List />
                </MapContext.Provider>
            </ShipmentGrid>
        </DashboardPlacement>
    );
};

export default ShipmentContainer;
