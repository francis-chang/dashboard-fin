import React, { useContext, useEffect, useState } from "react";
import {
    FulfillmentDateList,
    FulfillmentDateListing,
    FulfillmentListContainer,
    FulfillmentListing,
    FulfillmentTitle
} from "../ComponentStyles";
import { MapContext } from "./MapContext";

const houroptions = {
    hour12: true,
    hour: "numeric",
    minute: "numeric"
};

const fulloptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: true,
    hour: "numeric",
    minute: "numeric"
};

const dateoptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

const FulfillmentList: React.FC = () => {
    const { currentShipment, date } = useContext(MapContext);
    const [times, setTimes] = useState<number[]>([]);

    const [dates, setDates] = useState<Date[]>([]);

    const [timesSet, setTimesSet] = useState(false);

    const [datesSet, setDatesSet] = useState(false);

    const [finalTimes, setFinalTimes] = useState<FinalDates>([]);

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
                let nowDate = new Date();

                if (i === times.length - 1) {
                    nowDate = computeDepartTime();
                    const timeDate = nowDate.getMinutes();
                    nowDate.setMinutes(timeDate + time);
                } else {
                    nowDate = computeArriveTime();
                    const timeDate = nowDate.getMinutes();
                    nowDate.setMinutes(timeDate - time);
                }
                return nowDate;
            });
            setDates(dates);
            setDatesSet(true);
        }
    };

    const setFinalDates = () => {
        let finalDates: FinalDates = [];

        dates.map(date => {
            let dateDNE = true;
            finalDates.forEach(final => {
                if (final.date.getDate() === date.getDate()) {
                    dateDNE = false;
                    final.dates.push(date);
                }
            });
            if (dateDNE) {
                finalDates.push({ date: date, dates: [date] });
            }
        });
        setFinalTimes(finalDates);
    };

    const computeArriveTime = () => {
        if (currentShipment && date) {
            let progressTime = Math.floor(
                currentShipment.flightDuration * currentShipment.progress
            );
            let arrival = new Date(date);
            arrival.setMinutes(arrival.getMinutes() - progressTime);
            return arrival;
        }

        return new Date();
    };

    const computeDepartTime = () => {
        if (currentShipment && date) {
            let progressTime = Math.floor(
                currentShipment.flightDuration * (1 - currentShipment.progress)
            );
            let depart = new Date(date);
            depart.setMinutes(depart.getMinutes() + progressTime);
            return depart;
        }
        return new Date();
    };

    useEffect(() => {
        if (currentShipment && date) {
            calcTimes();
        }

        if (currentShipment && timesSet) {
            calcDates();
        }

        if (datesSet) {
            setFinalDates();
        }
    }, [currentShipment, timesSet, datesSet]);
    return (
        <FulfillmentListContainer>
            {finalTimes.map(date => (
                <FulfillmentListing key={date.date.toISOString()}>
                    <FulfillmentTitle>
                        {date.date.toLocaleString("en-US", dateoptions)}
                    </FulfillmentTitle>
                    <FulfillmentDateList>
                        {date.dates.map(fulfill => (
                            <FulfillmentDateListing
                                key={fulfill.toLocaleDateString()}
                            >
                                {fulfill.toLocaleString("en-US", houroptions)}
                            </FulfillmentDateListing>
                        ))}
                    </FulfillmentDateList>
                </FulfillmentListing>
            ))}
        </FulfillmentListContainer>
    );
};

export default FulfillmentList;
