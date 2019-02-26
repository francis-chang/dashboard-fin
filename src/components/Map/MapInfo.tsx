import React from "react";
import { MapInfoContainer } from "../ComponentStyles";
import Altitude from "./MapInfo/Altitude";
import Odometer from "./MapInfo/Odometer";

const MapInfo: React.FC = () => {
    return (
        <MapInfoContainer>
            <Odometer />
            <Altitude />
        </MapInfoContainer>
    );
};

export default MapInfo;
