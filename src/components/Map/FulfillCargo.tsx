import { generate } from "randomstring";
import React, { useContext, useEffect, useState } from "react";
import { FulfillmentCargo, FulfillmentCargoListing } from "../ComponentStyles";
import { MapContext } from "./MapContext";

const FulfillCargo = () => {
    const { currentShipment } = useContext(MapContext);

    const [cargoList, setCargoList] = useState<
        { item: string; units: number }[] | null
    >(null);

    useEffect(() => {
        if (currentShipment) {
            generateList();
        }
    }, [currentShipment]);

    const generateList = () => {
        let cargoList: { item: string; units: number }[] = [];
        if (currentShipment) {
            const r = Math.floor(Math.random() * 3 + 3);

            for (var x = 0; x <= r; x++) {
                cargoList.push({
                    item: `${currentShipment.name.slice(
                        0,
                        currentShipment.name.indexOf("-")
                    )}-${generate(7)}`,
                    units: Math.floor(Math.random() * 150 + 40)
                });
            }
        }
        setCargoList(cargoList);
    };
    return (
        <FulfillmentCargo>
            {currentShipment &&
                cargoList &&
                cargoList.map(cargo => (
                    <FulfillmentCargoListing>{`${cargo.item} x ${
                        cargo.units
                    }`}</FulfillmentCargoListing>
                ))}
        </FulfillmentCargo>
    );
};

export default FulfillCargo;
