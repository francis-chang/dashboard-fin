import React, { useContext, useEffect, useState } from "react";
import {
    FulfillmentDateList,
    FulfillmentDateListing,
    FulfillmentDateListingDate,
    FulfillmentDateListingETA,
    FulfillmentListContainer,
    FulfillmentListing,
    FulfillmentListText,
    FulfillmentListTitle,
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

    const [finalTimes, setFinalTimes] = useState<FinalDate[]>([]);

    const calcTimes = () => {
        if (currentShipment && date) {
            if (currentShipment.eta === "canceled") {
                const orderPlaced = Math.floor(Math.random() * 4320 + 2880);
                const nowDate = new Date(date);
                nowDate.setMinutes(nowDate.getMinutes() - orderPlaced);

                const orderCanceled = Math.floor(Math.random() * 1440 + 1440);
                const cancelDate = new Date(date);
                cancelDate.setMinutes(cancelDate.getMinutes() - orderCanceled);

                const canceledList: FinalDate[] = [
                    {
                        date: nowDate,
                        dates: [{ descr: "Order placed", date: nowDate }]
                    },
                    {
                        date: cancelDate,
                        dates: [{ descr: "order Canceled", date: cancelDate }]
                    }
                ];

                setFinalTimes(canceledList);
            } else {
                const orderPlaced = Math.floor(Math.random() * 4320 + 2880);
                const paid = Math.floor(Math.random() * 1440 + 1440);
                const transported = Math.floor(Math.random() * 300 + 300);
                const weighed = Math.floor(Math.random() * 120 + 180);
                const depart =
                    currentShipment.flightDuration * currentShipment.progress;
                const arrival =
                    currentShipment.flightDuration *
                    (1 - currentShipment.progress);
                const delivered = Math.floor(Math.random() * 460 + 240);

                const times: timesObj[] = [
                    {
                        descr: "Order Placed",
                        time: orderPlaced
                    },
                    {
                        descr: `Paid at $5.99 per unit totalling $${(
                            (Math.random() * 100 + 150) *
                            5.99
                        ).toFixed(2)}`,
                        time: paid
                    },

                    {
                        descr: `Transported from ${currentShipment.name.slice(
                            0,
                            currentShipment.name.indexOf("-")
                        )} facility to ${currentShipment.from.airport}`,
                        time: transported
                    },

                    {
                        descr: `Weighed in at ${currentShipment.cargoWeight}`,
                        time: weighed
                    },

                    {
                        descr: `Depart ${currentShipment.from.airport}`,
                        time: depart
                    },

                    {
                        descr: `Arrive ${currentShipment.to.airport}`,
                        time: arrival
                    },

                    {
                        descr: `Deliver to ${currentShipment.name.slice(
                            0,
                            currentShipment.name.indexOf("-")
                        )} Warehouse`,
                        time: delivered
                    }
                ];

                const dates = times.map((time, i) => {
                    let nowDate = new Date(date);

                    if (time.descr.indexOf("Deliver") > -1) {
                        nowDate = computeArriveTime();
                        const timeDate = nowDate.getMinutes();
                        nowDate.setMinutes(timeDate + time.time);
                    } else if (time.descr.indexOf("Arrive") > -1) {
                        return { descr: time.descr, date: computeArriveTime() };
                    } else if (time.descr.indexOf("Depart") > -1) {
                        return { descr: time.descr, date: computeDepartTime() };
                    } else {
                        nowDate = computeDepartTime();
                        const timeDate = nowDate.getMinutes();
                        nowDate.setMinutes(timeDate - time.time);
                    }
                    return { descr: time.descr, date: nowDate };
                });

                let finalDates: FinalDate[] = [];

                dates.map(date => {
                    let dateDNE = true;
                    finalDates.forEach(final => {
                        if (final.date.getDate() === date.date.getDate()) {
                            dateDNE = false;
                            final.dates.push(date);
                        }
                    });
                    if (dateDNE) {
                        finalDates.push({ date: date.date, dates: [date] });
                    }
                });

                setFinalTimes(finalDates);
            }
        }
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
    }, [currentShipment]);

    return (
        <FulfillmentListContainer>
            <FulfillmentListTitle>
                <FulfillmentListText>Tracking</FulfillmentListText>
            </FulfillmentListTitle>
            {!currentShipment ? (
                <div
                    style={{
                        color: "#eef3f7",
                        fontSize: "3rem",
                        textTransform: "uppercase",
                        textAlign: "center"
                    }}
                >
                    Select a shipment
                </div>
            ) : (
                <div
                    style={{
                        overflowY: "scroll",
                        maxHeight: "20rem",
                        width: "80%"
                    }}
                >
                    {finalTimes.map(date => (
                        <FulfillmentListing key={date.date.toISOString()}>
                            <FulfillmentTitle>
                                {date.date.toLocaleString("en-US", dateoptions)}
                            </FulfillmentTitle>
                            <FulfillmentDateList>
                                {date.dates.map((fulfill, i) => {
                                    if (fulfill.date > new Date()) {
                                        return (
                                            <FulfillmentDateListingETA key={i}>
                                                <FulfillmentDateListingDate>
                                                    {fulfill.date >
                                                        new Date() && `ETA `}
                                                    {fulfill.date.toLocaleString(
                                                        "en-US",
                                                        houroptions
                                                    )}
                                                </FulfillmentDateListingDate>
                                                {fulfill.descr}
                                            </FulfillmentDateListingETA>
                                        );
                                    } else {
                                        return (
                                            <FulfillmentDateListing key={i}>
                                                <FulfillmentDateListingDate>
                                                    {fulfill.date >
                                                        new Date() && `ETA `}
                                                    {fulfill.date.toLocaleString(
                                                        "en-US",
                                                        houroptions
                                                    )}
                                                </FulfillmentDateListingDate>
                                                {fulfill.descr}
                                            </FulfillmentDateListing>
                                        );
                                    }
                                })}
                            </FulfillmentDateList>
                        </FulfillmentListing>
                    ))}
                </div>
            )}
        </FulfillmentListContainer>
    );
};

export default FulfillmentList;
