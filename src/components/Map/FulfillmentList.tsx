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
    const [times, setTimes] = useState<number[]>([]);

    const [dates, setDates] = useState<Date[]>([]);

    const [timesSet, setTimesSet] = useState(false);

    const [datesSet, setDatesSet] = useState(false);

    const calcTimes = () => {
        if (currentShipment && date) {
            const orderPlaced = Math.floor(Math.random() * 4320 + 2880);
            const paid = Math.floor(Math.random() * 1440 + 1440);
            const transported = Math.floor(Math.random() * 300 + 300);
            const weighed = Math.floor(Math.random() * 120 + 180);
            const delivered = Math.floor(Math.random() * 460 + 240);

            const times = [orderPlaced, paid, transported, weighed, delivered];
            setTimes(times);
            setTimesSet(true);
        }
    };

    const calcDates = () => {
        if (date) {
            const dates = times.map((time, i) => {
                const nowDate = new Date(date);
                const timeDate = nowDate.getMinutes();
                if (i === times.length - 1) {
                    nowDate.setMinutes(timeDate + time);
                } else {
                    nowDate.setMinutes(timeDate - time);
                }
                return nowDate;
            });
            setDates(dates);
            setDatesSet(true);
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

        if (currentShipment && timesSet) {
            calcDates();
        }

        if (timesSet) {
        }

        if (datesSet) {
            console.log(dates);
        }
    }, [currentShipment, timesSet, datesSet]);
    return (
        <FulfillmentListContainer>
            {dates.map(date => (
                <FulfillmentListing key={date.toISOString()}>
                    {date.toLocaleString("en-US", fulfilloptions)}
                </FulfillmentListing>
            ))}
        </FulfillmentListContainer>
    );
};

export default FulfillmentList;
