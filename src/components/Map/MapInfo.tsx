import React from "react";
import { MapInfoContainer } from "../ComponentStyles";
import Odometer from "./MapInfo/Odometer";

const MapInfo: React.FC = () => {
    return (
        <MapInfoContainer>
            <Odometer />
        </MapInfoContainer>
    );
};

export default MapInfo;
