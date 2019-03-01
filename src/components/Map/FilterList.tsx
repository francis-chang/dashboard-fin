import React, { useContext, useState } from "react";
import {
    FilterButtonContainer,
    FilterContainer,
    FilterETAContainer,
    FilterInput,
    FilterInputContainer,
    FilterInputTitle,
    FilterOkayButton,
    FilterResetButton,
    FilterResetContainer
} from "../ComponentStyles";
import { MapContext } from "./MapContext";

const FilterList: React.FC<PropsForFilterList> = ({ setMouseClicked }) => {
    const {
        shipments,
        setShipments,
        setCurrentShipment,
        filteredShipments
    } = useContext(MapContext);
    const [inputSearch, setInputSearch] = useState("");
    const [searchBYETA, setSearchBYETA] = useState(false);

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
        const filteredShipmentsList = filteredShipments.filter(shipment => {
            if (shipment.eta === "on time") {
                return true;
            }
            return false;
        });
        setShipments(filteredShipmentsList);
    };

    const filterCanceled = () => {
        const filteredShipmentsList = filteredShipments.filter(shipment => {
            if (shipment.eta === "canceled") {
                return true;
            }
            return false;
        });
        setShipments(filteredShipmentsList);
    };

    const filterDelayed = () => {
        const filteredShipmentsList = filteredShipments.filter(shipment => {
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
            <FilterETAContainer>
                <FilterInputTitle>ETA: </FilterInputTitle>
                <FilterButtonContainer onClick={filterOnTime}>
                    on time
                </FilterButtonContainer>
                <FilterButtonContainer onClick={filterDelayed}>
                    delayed
                </FilterButtonContainer>
                <FilterButtonContainer onClick={filterCanceled}>
                    canceled
                </FilterButtonContainer>
            </FilterETAContainer>
            <FilterResetContainer>
                <FilterResetButton onClick={reset}>reset</FilterResetButton>

                <FilterOkayButton onClick={() => setMouseClicked(false)}>
                    okay
                </FilterOkayButton>
            </FilterResetContainer>
        </FilterContainer>
    );
};

export default FilterList;
