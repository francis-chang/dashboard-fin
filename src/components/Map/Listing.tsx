import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styled from "styled-components";
import {
    ListingETA,
    ListingFrom,
    ListingFromTo,
    ListingTitle,
    ListingTitleID,
    ListingTitleName
} from "../ComponentStyles";
import { MapContext } from "./MapContext";

library.add(faPlane);

const Listing: React.FC<PropsForListing> = ({ shipment }) => {
    const { setCurrentShipment, date, currentShipment } = useContext(
        MapContext
    );
    const ListingETAStatus = styled.div`
        text-transform: uppercase;
        font-size: 1.2rem;
        color: ${shipment.eta == "on time"
            ? "#00cc66"
            : shipment.eta == "delayed"
            ? "#ffb366"
            : "#ff5050"};
    `;

    const ListingBody = styled.div`
        cursor: pointer;
        height: 5rem;
        width: 100%;
        display: flex;
        padding: 0.3rem 1rem;
        box-sizing: border-box;
        border-top: ${currentShipment && currentShipment.id === shipment.id
            ? "3px solid #49779c"
            : "3px solid transparent"};
        border-bottom: ${currentShipment && currentShipment.id === shipment.id
            ? "3px solid #49779c"
            : "3px solid #203746"};
        align-items: center;

        ${(currentShipment && currentShipment.id !== shipment.id) ||
        !currentShipment
            ? "background-color: #182a34;"
            : "background-color: #203746;"}

        ${((currentShipment && currentShipment.id !== shipment.id) ||
            !currentShipment) &&
            "&:hover {background-color: #203746;}"}
    `;

    const findETA = (flightDuration: number, progress: number) => {
        if (date) {
            const options = {
                hour12: true,
                hour: "numeric",
                minute: "numeric",
                day: "numeric",
                month: "numeric"
            };
            const remainingFlightMinutes = Math.floor(
                flightDuration * (1 - progress)
            );
            const hours = Math.floor(remainingFlightMinutes / 60);
            const minutes = remainingFlightMinutes % 60;

            let eta = new Date(date);
            eta.setHours(eta.getHours() + hours);
            eta.setMinutes(eta.getMinutes() + minutes);

            return eta.toLocaleString("en-US", options);
        }
    };

    const onClickListing = () => {
        if (currentShipment && currentShipment.id === shipment.id) {
            setCurrentShipment(null);
        } else {
            setCurrentShipment(shipment);
        }
    };

    return (
        <ListingBody onClick={onClickListing}>
            <ListingTitle>
                <ListingTitleName>{shipment.name}</ListingTitleName>
                <ListingTitleID>{shipment.id}</ListingTitleID>
            </ListingTitle>
            <ListingFromTo>
                <ListingFrom>{shipment.from.abbr}</ListingFrom>
                <FontAwesomeIcon icon="plane" />
                <ListingFrom>{shipment.to.abbr}</ListingFrom>
            </ListingFromTo>
            <ListingETA>
                <ListingETAStatus>{shipment.eta}</ListingETAStatus>
                <div>{findETA(shipment.flightDuration, shipment.progress)}</div>
            </ListingETA>
        </ListingBody>
    );
};

export default Listing;
