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
    const [times, setTimes] = useState<timesObj[]>([]);

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
            const depart =
                currentShipment.flightDuration * currentShipment.progress;
            const arrival =
                currentShipment.flightDuration * (1 - currentShipment.progress);
            const delivered = Math.floor(Math.random() * 460 + 240);

            // const times = [
            //     orderPlaced,
            //     paid,
            //     transported,
            //     weighed,
            //     depart,
            //     arrival,
            //     delivered
            // ];

            const times: timesObj[] = [
                {
                    descr: "Order Placed",
                    time: orderPlaced
                },
                {
                    descr: "paid",
                    time: paid
                },

                {
                    descr: "transported",
                    time: transported
                },

                {
                    descr: "weighed",
                    time: weighed
                },

                {
                    descr: "depart",
                    time: depart
                },

                {
                    descr: "arrival",
                    time: arrival
                },

                {
                    descr: "delivered",
                    time: delivered
                }
            ];
            setTimes(times);
            setTimesSet(true);
        }
    };

    const calcDates = () => {
        if (date) {
            const dates = times.map((time, i) => {
                let nowDate = new Date(date);

                if (time.descr === "delivered") {
                    nowDate = computeDepartTime();
                    const timeDate = nowDate.getMinutes();
                    nowDate.setMinutes(timeDate + time.time);
                } else if (time.descr === "arrival") {
                    return computeArriveTime();
                } else if (time.descr === "depart") {
                    return computeDepartTime();
                } else {
                    nowDate = computeArriveTime();
                    const timeDate = nowDate.getMinutes();
                    nowDate.setMinutes(timeDate - time.time);
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
                currentShipment.flightDuration * (1 - currentShipment.progress)
            );
            let arrival = new Date(date);
            arrival.setMinutes(arrival.getMinutes() + progressTime);
            return arrival;
        }
        return new Date();
    };

    const computeDepartTime = () => {
        if (currentShipment && date) {
            let progressTime = Math.floor(
                currentShipment.flightDuration * currentShipment.progress
            );
            let depart = new Date(date);
            depart.setMinutes(depart.getMinutes() - progressTime);
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
                        {date.dates.map((fulfill, i) => (
                            <FulfillmentDateListing key={i}>
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
