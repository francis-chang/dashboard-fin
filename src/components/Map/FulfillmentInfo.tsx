import * as React from "react";
import styled from "styled-components";

const FulfillmentInfoContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const DateContainer = styled.div`
    font-size: 2.5rem;
    text-transform: uppercase;
    color: #eef3f7;
    padding-bottom: 0.2rem;
    border-bottom: 4px solid #eef3f7;
    margin-bottom: 1rem;
`;

const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
`;

const Time = styled.div<{ complete: boolean }>`
    font-size: 2.2rem;
    color: ${p => (p.complete ? "#182a34" : "#eef3f7")};
    padding: 0.2rem 0.5rem;
    width: 11rem;
    min-width: 11rem;
    text-align: center;
    background-color: ${p => (p.complete ? "#00cc66" : "#182a34")};
    border-radius: 4px;
`;

const Description = styled.div`
    font-size: 1.5rem;
    color: #eef3f7;
    padding-left: 1rem;
`;

const options = {
    hour12: true,
    hour: "numeric",
    minute: "numeric"
};

const fulloptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

interface Props {
    currentTime: FinalTime | null;
}

export const FulfillmentInfo: React.FC<Props> = ({ currentTime }) => {
    const [appear, setAppear] = React.useState(true);

    const isComplete = (t: Date) => {
        const nowDate = new Date();
        if (t.getTime() < nowDate.getTime()) {
            return true;
        }
        return false;
    };

    return (
        <FulfillmentInfoContainer>
            {currentTime && (
                <DateContainer>
                    {currentTime.date.toLocaleString("en-US", fulloptions)}
                </DateContainer>
            )}

            {currentTime &&
                currentTime.tasks.map(task => (
                    <TaskContainer key={task.time.toISOString()}>
                        <Time complete={isComplete(task.time)}>
                            {task.time.toLocaleString("en-US", options)}
                        </Time>
                        <Description>{task.description}</Description>
                    </TaskContainer>
                ))}
        </FulfillmentInfoContainer>
    );
};
