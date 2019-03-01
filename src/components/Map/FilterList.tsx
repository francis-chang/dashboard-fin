import React, { useContext, useState } from "react";
import {
    FilterButtonContainer,
    FilterContainer,
    FilterInput,
    FilterInputContainer,
    FilterInputTitle
} from "../ComponentStyles";
import { MapContext } from "./MapContext";

const FilterList: React.FC<PropsForFilterList> = ({ setMouseClicked }) => {
    const { shipments, setShipments, setCurrentShipment } = useContext(
        MapContext
    );
    const [inputSearch, setInputSearch] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchString = e.target.value.toLowerCase();
        setInputSearch(searchString);
        const filteredShipmentsList = shipments.filter(shipment => {
            if (
                shipment.from.abbr.toLowerCase().includes(searchString) ||
                shipment.to.abbr.toLowerCase().includes(searchString) ||
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
        setCurrentShipment(null);
    };

    return (
        <FilterContainer>
            <FilterInputContainer>
                <FilterInputTitle>SEARCH</FilterInputTitle>
                <FilterInput value={inputSearch} onChange={onChange} />
            </FilterInputContainer>
            <FilterButtonContainer onClick={filterOnTime}>
                only on time
            </FilterButtonContainer>
            <FilterButtonContainer onClick={filterDelayed}>
                only delayed
            </FilterButtonContainer>
            <FilterButtonContainer onClick={filterCanceled}>
                only canceled
            </FilterButtonContainer>
            <FilterButtonContainer onClick={reset}>reset</FilterButtonContainer>

            <button onClick={() => setMouseClicked(false)}>okay</button>
        </FilterContainer>
    );
};

export default FilterList;
