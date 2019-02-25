import React, { useContext, useState } from "react";
import { MapContext } from "./MapContext";

const FilterList: React.FC<PropsForFilterList> = ({ setMouseClicked }) => {
    const { shipments, setShipments } = useContext(MapContext);
    const [inputSearch, setInputSearch] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchString = e.target.value.toLowerCase();
        setInputSearch(searchString);
        const filteredShipmentsList = shipments.filter(shipment => {
            if (
                shipment.descr.toLowerCase().includes(searchString) ||
                shipment.name.toLowerCase().includes(searchString) ||
                shipment.id.toLowerCase().includes(searchString)
            ) {
                return true;
            }
            return false;
        });

        setShipments(filteredShipmentsList);
    };

    const filterOnTime = () => {
        const filteredShipmentsList = shipments.filter(shipment => {
            if (shipment.eta === "on time") {
                return true;
            }
            return false;
        });
        setShipments(filteredShipmentsList);
    };

    const filterCanceled = () => {
        const filteredShipmentsList = shipments.filter(shipment => {
            if (shipment.eta === "canceled") {
                return true;
            }
            return false;
        });
        setShipments(filteredShipmentsList);
    };

    const filterDelayed = () => {
        const filteredShipmentsList = shipments.filter(shipment => {
            if (shipment.eta === "delayed") {
                return true;
            }
            return false;
        });
        setShipments(filteredShipmentsList);
    };

    const reset = () => {
        setInputSearch("");
        setShipments(shipments);
    };

    return (
        <div>
            <input value={inputSearch} onChange={onChange} />
            <button onClick={filterOnTime}>only on time</button>
            <button onClick={filterDelayed}>only delayed</button>
            <button onClick={filterCanceled}>only canceled</button>
            <button onClick={reset}>reset</button>

            <button onClick={() => setMouseClicked(false)}>okay</button>
        </div>
    );
};

export default FilterList;
