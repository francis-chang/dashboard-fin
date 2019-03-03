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
    const { currentShipment, setCurrentShipment } = useContext(MapContext);

    return (
        <MapInfoContainer>
            <FromTo />
            {currentShipment && currentShipment.eta !== "canceled" && (
                <Odometer />
            )}
            {currentShipment && currentShipment.eta !== "canceled" && (
                <Altitude />
            )}
            <Location projection={projection} />

            <FromToExit onClick={() => setCurrentShipment(null)}>
                <MapInfoTitleExit className="map-info-exit">
                    <FontAwesomeIcon icon="times" />
                </MapInfoTitleExit>
            </FromToExit>
        </MapInfoContainer>
    );
};

export default MapInfo;
