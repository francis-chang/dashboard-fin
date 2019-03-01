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
    const [searchBYETA, setSearchBYETA] = useState("");
    const [searchShipments, setSearchShipments] = useState(shipments.slice());

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
        setSearchBYETA("");
        setShipments(filteredShipmentsList);
        setSearchShipments(filteredShipmentsList);
    };

    const filterOnTime = () => {
        const filteredShipmentsList = searchShipments.filter(shipment => {
            if (shipment.eta === "on time") {
                return true;
            }
            return false;
        });
        setShipments(filteredShipmentsList);
        setSearchBYETA("on time");
    };

    const filterCanceled = () => {
        const filteredShipmentsList = searchShipments.filter(shipment => {
            if (shipment.eta === "canceled") {
                return true;
            }
            return false;
        });
        setShipments(filteredShipmentsList);
        setSearchBYETA("canceled");
    };

    const filterDelayed = () => {
        const filteredShipmentsList = searchShipments.filter(shipment => {
            if (shipment.eta === "delayed") {
                return true;
            }
            return false;
        });
        setShipments(filteredShipmentsList);
        setSearchBYETA("delayed");
    };

    const reset = () => {
        setInputSearch("");
        setShipments(shipments);
        setSearchShipments(shipments);
        setSearchBYETA("");
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
                <FilterButtonContainer
                    onClick={filterOnTime}
                    isClicked={searchBYETA === "on time"}
                >
                    on time
                </FilterButtonContainer>
                <FilterButtonContainer
                    onClick={filterDelayed}
                    isClicked={searchBYETA === "delayed"}
                >
                    delayed
                </FilterButtonContainer>
                <FilterButtonContainer
                    onClick={filterCanceled}
                    isClicked={searchBYETA === "canceled"}
                >
                    canceled
                </FilterButtonContainer>
            </FilterETAContainer>
            <FilterResetContainer>
                <FilterResetButton onClick={reset}>reset</FilterResetButton>

                <FilterOkayButton onClick={() => setMouseClicked(false)}>
                    confirm
                </FilterOkayButton>
            </FilterResetContainer>
        </FilterContainer>
    );
};

export default FilterList;
