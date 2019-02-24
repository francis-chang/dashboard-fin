import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styled from "styled-components";
import {
    ListingBody,
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
    const ListingETAStatus = styled.div`
        text-transform: uppercase;
        font-size: 1.2rem;
        color: ${shipment.eta == "on time"
            ? "#00cc66"
            : shipment.eta == "delayed"
            ? "#ffb366"
            : "#ff5050"};
    `;

    const { setCurrentShipment, date } = useContext(MapContext);

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

    return (
        <ListingBody onClick={() => setCurrentShipment(shipment)}>
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
