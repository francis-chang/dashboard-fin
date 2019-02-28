import React, { useContext } from "react";
import {
    From,
    FromToAbbr,
    FromToAirport,
    FromToCity,
    FromToContainer,
    FromToLngLat,
    MapInfoCoordinate,
    MapInfoTitle
} from "../../ComponentStyles";
import { MapContext } from "../MapContext";

const FromTo: React.FC = () => {
    const { currentShipment } = useContext(MapContext);

    return (
        <FromToContainer>
            <From>
                <MapInfoTitle>Departing</MapInfoTitle>
                <MapInfoCoordinate>
                    <FromToAbbr>
                        {currentShipment && currentShipment.from.abbr}
                    </FromToAbbr>
                    <FromToAirport>
                        {currentShipment && currentShipment.from.airport}
                    </FromToAirport>

                    <FromToCity>
                        {currentShipment && currentShipment.from.city}
                    </FromToCity>
                    <FromToLngLat>
                        {currentShipment &&
                            `${currentShipment.from.lnglat[1]}°N, ${Math.abs(
                                currentShipment.from.lnglat[0]
                            )}°W`}
                    </FromToLngLat>
                </MapInfoCoordinate>
            </From>
            <From>
                <MapInfoTitle>Arriving</MapInfoTitle>
                <MapInfoCoordinate>
                    <FromToAbbr>
                        {currentShipment && currentShipment.to.abbr}
                    </FromToAbbr>
                    <FromToAirport>
                        {currentShipment && currentShipment.to.airport}
                    </FromToAirport>

                    <FromToCity>
                        {currentShipment && currentShipment.to.city}
                    </FromToCity>
                    <FromToLngLat>
                        {currentShipment &&
                            `${currentShipment.to.lnglat[1]}°N, ${Math.abs(
                                currentShipment.to.lnglat[0]
                            )}°W`}
                    </FromToLngLat>
                </MapInfoCoordinate>
            </From>
        </FromToContainer>
    );
};

export default FromTo;
