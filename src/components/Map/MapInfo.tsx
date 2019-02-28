import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import {
    FromToExit,
    MapInfoContainer,
    MapInfoTitleExit
} from "../ComponentStyles";
import { MapContext } from "./MapContext";
import Altitude from "./MapInfo/Altitude";
import FromTo from "./MapInfo/FromTo";
import Location from "./MapInfo/Location";
import Odometer from "./MapInfo/Odometer";

library.add(faTimes);

const MapInfo: React.FC<PropsForMapInfo> = ({ projection }) => {
    const { setCurrentShipment } = useContext(MapContext);

    return (
        <MapInfoContainer>
            <Odometer />
            <Altitude />
            <Location projection={projection} />
            <FromTo />
            <FromToExit onClick={() => setCurrentShipment(null)}>
                <MapInfoTitleExit className="map-info-exit">
                    <FontAwesomeIcon icon="times" />
                </MapInfoTitleExit>
            </FromToExit>
        </MapInfoContainer>
    );
};

export default MapInfo;
