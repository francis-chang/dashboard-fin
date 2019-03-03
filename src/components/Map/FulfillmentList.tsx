import React, { useContext, useEffect, useState } from "react";
import {
    FulfillmentListContainer,
    FulfillmentListing
} from "../ComponentStyles";
import { MapContext } from "./MapContext";

const options = {
    hour12: true,
    hour: "numeric",
    minute: "numeric"
};

var fulfilloptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: true,
    hour: "numeric",
    minute: "numeric"
};

const FulfillmentList: React.FC = () => {
    const { currentShipment, date } = useContext(MapContext);
    const [orderPlacedTime, setOrderPlacedTime] = useState<Date | null>(null);
    const [paidTime, setPaidTime] = useState<Date | null>(null);
    const [
        cargoTransportedTime,
        setCargoTransportedTime
    ] = useState<Date | null>(null);
    const [weighedTime, setWeighedTime] = useState<Date | null>(null);
    const [departedTime, setDepartedTime] = useState<Date | null>(null);
    const [arrivalTime, setArrivalTime] = useState<Date | null>(null);
    const [deliveredTime, setDeliveredTime] = useState<Date | null>(null);

    const [timesSet, setTimesSet] = useState(false);

    const calcTimes = () => {
        if (currentShipment && date) {
            const nowDate = new Date(date);
            const orderPlaced = Math.floor(Math.random() * 4320 + 2880);
            const paid = Math.floor(Math.random() * 1440 + 1440);
            const transported = Math.floor(Math.random() * 300 + 300);
            const weighed = Math.floor(Math.random() * 120 + 180);
            const delivered = Math.floor(Math.random() * 460 + 240);

            const nowMinutes = nowDate.getMinutes();
            nowDate.setMinutes(nowMinutes - orderPlaced);
            setOrderPlacedTime(nowDate);

            setTimesSet(true);
        }
    };

    const computeArriveTime = () => {
        if (currentShipment && date) {
            let progressTime = Math.floor(
                currentShipment.flightDuration * currentShipment.progress
            );
            let arrival = new Date(date);
            arrival.setMinutes(arrival.getMinutes() - progressTime);
            return arrival.toLocaleString("en-US", options);
        }
        return "";
    };

    const computeDepartTime = () => {
        if (currentShipment && date) {
            let progressTime = Math.floor(
                currentShipment.flightDuration * (1 - currentShipment.progress)
            );
            let arrival = new Date(date);
            arrival.setMinutes(arrival.getMinutes() + progressTime);
            return arrival.toLocaleString("en-US", options);
        }
        return "";
    };

    useEffect(() => {
        if (currentShipment && date) {
            calcTimes();
        }
    }, [currentShipment]);
    return (
        <FulfillmentListContainer>
            <FulfillmentListing>AT WAREHOUSE</FulfillmentListing>
            <FulfillmentListing>
                {orderPlacedTime &&
                    orderPlacedTime.toLocaleDateString("en-US", fulfilloptions)}
            </FulfillmentListing>
        </FulfillmentListContainer>
    );
};

export default FulfillmentList;
