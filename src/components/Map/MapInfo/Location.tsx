import { select } from "d3-selection";
import React, { useContext, useEffect, useState } from "react";
import { LocationContainer } from "../../ComponentStyles";
import { MapContext } from "../MapContext";

const Location: React.FC<PropsForLocation> = ({ projection }) => {
    const { currentShipment } = useContext(MapContext);

    const [transformStr, setTransformStr] = useState<string | null>(null);
    const [timeout, setTO] = useState<any>(null);

    useEffect(() => {
        if (timeout) {
            clearTimeout(timeout);
        }

        if (currentShipment) {
            updateLocation();
            let to = setTimeout(updateLocation, 3000);
            setTO(to);
        }
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
            let str = `${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`;

            setTransformStr(str);
        }
    };

    return <LocationContainer>{transformStr}</LocationContainer>;
};

export default Location;
