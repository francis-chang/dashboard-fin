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

interface Task {
    description: string;
    time: Date;
}

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

    const [times, setTimes] = React.useState<Task[] | null>(null);

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
            setTimes(fulfillments);
        }
    };

    React.useEffect(() => {
        if (!times) {
            calcTimes();
        }
    });

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
        <FulfillmentContainer>
            <FullfillmentButtons />
            <FulfillmentInfo />
        </FulfillmentContainer>
    );
};
