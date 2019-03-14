import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styled from "styled-components";
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

    const ListingETA = styled.div`
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const ListingETAName = styled.div`
        text-transform: uppercase;
        font-size: 1.2rem;
        color: ${shipment.eta == "on time"
            ? "#b9d0df"
            : shipment.eta == "delayed"
            ? "#ffb366"
            : "#ff5050"};
    `;

    const ListingETATime = styled.div`
        font-size: 1.2rem;
    `;

    const ListingBody = styled.div`
        cursor: pointer;
        width: 90%;
        margin: 0 auto;
        display: flex;
        border-bottom: 2px solid #eef3f7;
        padding-top: 2rem;
        color: #eef3f7;

        ${(currentShipment && currentShipment.id !== shipment.id) ||
        !currentShipment
            ? "background-color: #182a34;"
            : "background-color: #203746;"}

        &:hover {
            background-color: #203746;
            transition-duration: 250ms;
        }
    `;

    const Title = styled.div`
        width: 40%;
        display: flex;
        flex-direction: column;
        padding-bottom: 0.2rem;
        padding-left: 0.5rem;
    `;

    const TitleName = styled.div`
        font-size: 1.5rem;
    `;

    const TitleID = styled.div`
        color: #b9d0df;
        font-size: 1rem;
    `;

    const DirectionContainer = styled.div`
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const Direction = styled.div`
        padding: 0rem 0.5rem;
        text-transform: uppercase;
        font-size: 1.5rem;
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

            let eta = new Date(date);
            eta.setMinutes(eta.getMinutes() + remainingFlightMinutes);

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
            <Title>
                <TitleID>{shipment.id}</TitleID>
                <TitleName>{shipment.name}</TitleName>
            </Title>

            <DirectionContainer>
                <Direction>{shipment.from.abbr}</Direction>
                <FontAwesomeIcon icon="plane" />
                <Direction>{shipment.to.abbr}</Direction>
            </DirectionContainer>

            <ListingETA>
                <ListingETAName>{shipment.eta}</ListingETAName>
                <ListingETATime>
                    {findETA(shipment.flightDuration, shipment.progress)}
                </ListingETATime>
            </ListingETA>

            {/* <ListingTitle>
                <ListingTitleName>{shipment.name}</ListingTitleName>
                <ListingTitleID>{shipment.id}</ListingTitleID>
            </ListingTitle>
            <ListingFromTo>
                <ListingFrom>{shipment.from.abbr}</ListingFrom>
                <FontAwesomeIcon icon="plane" />
                <ListingFrom></ListingFrom>
            </ListingFromTo>
            <ListingETA>
                <ListingETAStatus>{shipment.eta}</ListingETAStatus>
                <div>{findETA(shipment.flightDuration, shipment.progress)}</div>
            </ListingETA> */}
        </ListingBody>
    );
};

export default Listing;
