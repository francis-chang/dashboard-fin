import * as React from "react";
import styled from "styled-components";
import { FullfillmentButtons } from "./FulfillmentButtons";
import { FullfillmentCargo } from "./FulfillmentCargo";
import { FulfillmentInfo } from "./FulfillmentInfo";
import { MapContext } from "./MapContext";

interface Props {}
const datesMaxMin = [];

const FulfillmentContainer = styled.div`
    width: 55%;
    padding-right: 3rem;
    height: 22rem;
    display: flex;
`;

const NonSelectedShipment = styled.div`
    width: 80%;
    height: 40%;
    margin: 0.5rem 0.5rem;
    padding: 0.5rem 0.5rem;
    background-color: #182a34;
    border-radius: 4px;
    font-size: 2.5rem;
    color: #eef3f7;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    align-items: center;
`;

const fulloptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: true,
    hour: "numeric",
    minute: "numeric"
};

export const FullfillmentList: React.FC<Props> = () => {
    const { currentShipment, date } = React.useContext(MapContext);

    const [times, setTimes] = React.useState<FinalTime[]>([]);

    const [currentTime, setCurrentTime] = React.useState<FinalTime | null>(
        null
    );

    const [firstCurrent, setFirstCurrent] = React.useState(false);

    const calcTimes = () => {
        if (currentShipment) {
            const departingTime = calcDepartTime();
            const arrivingTime = calcArriveTime();

            const fulfillments = currentShipment.fulfillments.map(
                fulfillment => {
                    if (fulfillment.depart) {
                        const time = new Date(departingTime);

                        time.setMinutes(
                            time.getMinutes() - fulfillment.minutes
                        );
                        return { description: fulfillment.description, time };
                    } else {
                        const time = new Date(arrivingTime);

                        time.setMinutes(
                            time.getMinutes() + fulfillment.minutes
                        );
                        return { description: fulfillment.description, time };
                    }
                }
            );

            let finalTimes: FinalTime[] = [];
            fulfillments.forEach(fulfillment => {
                let dateDNE = true;
                finalTimes.forEach(time => {
                    if (time.date.getDate() === fulfillment.time.getDate()) {
                        dateDNE = false;
                        time.tasks.push(fulfillment);
                    }
                });
                if (dateDNE) {
                    finalTimes.push({
                        date: fulfillment.time,
                        tasks: [fulfillment]
                    });
                }
            });
            setTimes(finalTimes);
        }
    };

    React.useEffect(() => {
        calcTimes();
        setCurrentTime(null);
    }, [currentShipment]);

    const calcDepartTime = () => {
        if (date && currentShipment) {
            const depart = new Date(date);

            const minutes =
                currentShipment.flightDuration * currentShipment.progress;
            depart.setMinutes(depart.getMinutes() - minutes);
            return depart;
        }
        return new Date();
    };

    const calcArriveTime = () => {
        if (date && currentShipment) {
            const arrive = new Date(date);

            const minutes =
                currentShipment.flightDuration * (1 - currentShipment.progress);
            arrive.setMinutes(arrive.getMinutes() + minutes);
            return arrive;
        }
        return new Date();
    };

    return (
        <>
            {!currentShipment && (
                <NonSelectedShipment>
                    Select a Shipment to view cargo and fulfillment information
                </NonSelectedShipment>
            )}
            <FullfillmentCargo />
            <FulfillmentContainer>
                {currentShipment && (
                    <>
                        <FullfillmentButtons
                            times={times}
                            setCurrentTime={setCurrentTime}
                            currentTime={currentTime}
                        />
                        {currentTime && (
                            <FulfillmentInfo currentTime={currentTime} />
                        )}
                    </>
                )}
            </FulfillmentContainer>
        </>
    );
};
