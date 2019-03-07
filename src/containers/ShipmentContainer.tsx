import React, { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
import Fulfillment from "../components/Map/Fulfillment";
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

    const [visible, setVisible] = useState(true);

    const containerTransition = useTransition(visible, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    useEffect(() => {
        if (!date) {
            setDate(new Date());
        }
    });

    return (
        <DashboardPlacement>
            {containerTransition.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div style={props}>
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
                                    <Fulfillment />
                                </MapContext.Provider>
                            </ShipmentGrid>
                        </animated.div>
                    )
            )}
        </DashboardPlacement>
    );
};

export default ShipmentContainer;
