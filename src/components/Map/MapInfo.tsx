import React from "react";
import { MapInfoContainer } from "../ComponentStyles";
import Altitude from "./MapInfo/Altitude";
import Location from "./MapInfo/Location";
import Odometer from "./MapInfo/Odometer";

const MapInfo: React.FC<PropsForMapInfo> = ({ projection }) => {
    return (
        <MapInfoContainer>
            <Odometer />
            <Altitude />
            <Location projection={projection} />
        </MapInfoContainer>
    );
};

export default MapInfo;
