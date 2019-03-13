import * as React from "react";
import styled from "styled-components";
import { FullfillmentButtons } from "./FulfillmentButtons";
import { FulfillmentInfo } from "./FulfillmentInfo";
import { MapContext } from "./MapContext";

interface Props {}
const datesMaxMin = [];

const FulfillmentContainer = styled.div`
    width: 70%;
    height: 22rem;
    display: flex;
`;

const FulfillmentCargo = styled.div`
    width: 30%;
    height: 22rem;
    display: flex;
    flex-direction: column;
    background-color: red;
`;

export const FullfillmentList: React.FC<Props> = () => {
    const { currentShipment, date } = React.useContext(MapContext);

    const [times, setTimes] = React.useState<FinalTime[]>([]);

    const [currentTime, setCurrentTime] = React.useState<FinalTime | null>(
        null
    );

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
            <FulfillmentCargo>hi</FulfillmentCargo>
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
