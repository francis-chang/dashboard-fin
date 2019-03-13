import * as React from "react";
import styled from "styled-components";
import { MapContext } from "./MapContext";

interface Props {
    times: FinalTime[];
    setCurrentTime: (t: FinalTime) => void;
    currentTime: FinalTime | null;
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
    border-radius: 4px;
    border: 2px solid #eef3f7;
    color: #eef3f7;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: #eef3f7;
        color: #182a34;
        transition-duration: 250ms;
    }
`;

const History = styled.div`
    width: 5rem;
    padding: 0.2rem 0.5rem;
    margin: 0.5rem 0rem;
    border: 2px solid white;
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
    setCurrentTime,
    currentTime
}) => {
    const { currentShipment } = React.useContext(MapContext);

    const HistoryButton = styled.div<{ matchDate: boolean }>`
        width: 7rem;
        padding: 0.3rem 0.3rem;
        border: 1px solid #eef3f7;
        background-color: ${p => (p.matchDate ? "#dce8ef" : "#284557")};
        color: ${p => (p.matchDate ? "#284557" : "#eef3f7")};
        text-align: center;
        cursor: pointer;
        font-size: 1.3rem;
        &:hover {
            background-color: #eef3f7;
            color: #182a34;
            transition-duration: 250ms;
        }
    `;
    const setToCurrent = () => {
        const current = new Date();
        times.forEach(time => {
            if (time.date.getDate() === current.getDate()) {
                setCurrentTime(time);
            }
        });
    };

    const setToETA = () => {
        setCurrentTime(times[times.length - 1]);
    };

    return (
        <FullfillmentButtonsContainer>
            <HistoryButton matchDate={false} onClick={setToCurrent}>
                CURRENT
            </HistoryButton>
            <HistoryButton matchDate={false} onClick={setToETA}>
                ETA
            </HistoryButton>
            {times.map(time => (
                <HistoryButton
                    key={time.date.toISOString()}
                    onClick={() => setCurrentTime(time)}
                    matchDate={
                        currentTime &&
                        currentTime.date.getDate() === time.date.getDate()
                            ? true
                            : false
                    }
                >
                    {time.date.toLocaleString("en-US", dateoptions)}
                </HistoryButton>
            ))}
        </FullfillmentButtonsContainer>
    );
};
