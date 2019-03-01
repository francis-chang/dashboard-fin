import { select } from "d3-selection";
import React, { useContext, useEffect, useState } from "react";
import {
    CargoInfo,
    LocationAndCargoContainer,
    LocationContainer,
    MapInfoCoordinate,
    MapInfoTitle
} from "../../ComponentStyles";
import { MapContext } from "../MapContext";

const Location: React.FC<PropsForLocation> = ({ projection }) => {
    const { currentShipment } = useContext(MapContext);

    const [lng, setLng] = useState<string | null>(null);
    const [lat, setLat] = useState<string | null>(null);
    const [timeout, setTO] = useState<any>(null);

    useEffect(() => {
        if (timeout) {
            clearTimeout(timeout);
            setTO(null);
        }

        if (currentShipment) {
            updateLocation();
            let to = setTimeout(updateLocation, 3000);
            setTO(to);
        }
        return function cleanup() {
            clearTimeout(timeout);
        };
    });

    const updateLocation = () => {
        if (currentShipment) {
            const transform = select(`.${currentShipment.id}`).attr(
                "transform"
            );

            let leftIndex = transform.indexOf(",");
            let x = +transform.slice(10, leftIndex);
            let y = +transform.slice(leftIndex + 1, transform.length - 1);

            let coords = projection.invert([x, y]);
            let lngitude = `${Math.abs(coords[1].toFixed(3))}°N`;
            let latitude = `${Math.abs(coords[0].toFixed(3))}°W`;
            setLng(lngitude);
            setLat(latitude);
        }
    };

    return (
        <LocationAndCargoContainer>
            <LocationContainer>
                <MapInfoTitle>coordinates</MapInfoTitle>
                <MapInfoCoordinate>{lng}</MapInfoCoordinate>
                <MapInfoCoordinate>{lat}</MapInfoCoordinate>
            </LocationContainer>
            <CargoInfo>
                <MapInfoTitle>Cargo weight</MapInfoTitle>
                <MapInfoCoordinate>
                    {currentShipment && currentShipment.cargoWeight}
                </MapInfoCoordinate>
            </CargoInfo>
        </LocationAndCargoContainer>
    );
};

export default Location;
