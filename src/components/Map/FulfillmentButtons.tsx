import * as React from "react";
import styled from "styled-components";
import { MapContext } from "./MapContext";

interface Props {
    times: FinalTime[];
    setCurrentTime: (t: FinalTime) => void;
}

const FullfillmentButtonsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 10rem;
    min-width: 10rem;
    max-width: 10rem;
    align-items: center;
`;
const CurrentETAButton = styled.div`
    width: 5rem;
    padding: 0.2rem 0.5rem;
    color: #fff;
    margin: 0.5rem 0rem;
    background-color: red;
`;
const History = styled.div`
    width: 5rem;
    padding: 0.2rem 0.5rem;
    height: 8rem;
    margin: 0.5rem 0rem;
    background-color: red;
    display: flex;
    flex-direction: column;
`;

const dateoptions = {
    // weekday: "long",
    // year: "numeric",
    month: "long",
    day: "numeric"
};

export const FullfillmentButtons: React.FC<Props> = ({
    times,
    setCurrentTime
}) => {
    const { currentShipment } = React.useContext(MapContext);
    const setToCurrent = () => {
        const current = new Date();
        times.forEach(time => {
            if (time.date.getDate() === current.getDate()) {
                setCurrentTime(time);
            }
        });
    };
    React.useEffect(() => {}, [currentShipment]);

    return (
        <FullfillmentButtonsContainer>
            <CurrentETAButton onClick={setToCurrent}>CURRENT</CurrentETAButton>
            <History>
                {times.map(time => (
                    <div
                        key={time.date.toISOString()}
                        onClick={() => setCurrentTime(time)}
                    >
                        {time.date.toLocaleString("en-US", dateoptions)}
                    </div>
                ))}
            </History>
            <CurrentETAButton>ETA</CurrentETAButton>
        </FullfillmentButtonsContainer>
    );
};
