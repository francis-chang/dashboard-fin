import React from "react";
import Map from "../components/Map/Map";
import { DashboardPlacement, ShipmentGrid } from "./ContainerStyles";

const ShipmentContainer: React.FC = () => {
    return (
        <DashboardPlacement>
            <ShipmentGrid>
                <Map />
            </ShipmentGrid>
        </DashboardPlacement>
    );
};

export default ShipmentContainer;
