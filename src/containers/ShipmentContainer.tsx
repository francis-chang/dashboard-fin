import React from "react";
import { DashboardPlacement, ShipmentGrid } from "./ContainerStyles";

const ShipmentContainer: React.FC = () => {
    return (
        <DashboardPlacement>
            <ShipmentGrid />
            This is the shipment grid
        </DashboardPlacement>
    );
};

export default ShipmentContainer;
