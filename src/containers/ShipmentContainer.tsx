import React from "react";
import styled from "styled-components";

const ShipmentGridPlacement = styled.div`
    grid-column-start: 2;
    background-color: #eee;
    height: 100%;
`;

const ShipmentGrid = styled.div``;

const ShipmentContainer: React.FC = () => {
    return (
        <ShipmentGridPlacement>
            <ShipmentGrid />
            This is the shipment grid
        </ShipmentGridPlacement>
    );
};

export default ShipmentContainer;
