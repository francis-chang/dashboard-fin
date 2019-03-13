import * as React from "react";
import styled from "styled-components";

const FulfillmentInfoContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const Date = styled.div`
    font-size: 2.5rem;
    text-transform: uppercase;
    color: #b9d0df;
    padding-bottom: 0.2rem;
    border-bottom: 4px solid #b9d0df;
    margin-bottom: 1rem;
`;

const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
`;

const Time = styled.div`
    font-size: 2.2rem;
    color: #eef3f7;
    padding: 0.2rem 0.5rem;
    width: 11rem;
    min-width: 11rem;
`;

const Description = styled.div`
    font-size: 1.5rem;
    color: #eef3f7;
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

    return (
        <FulfillmentInfoContainer>
            {currentTime && (
                <Date>
                    {currentTime.date.toLocaleString("en-US", fulloptions)}
                </Date>
            )}

            {currentTime &&
                currentTime.tasks.map(task => (
                    <TaskContainer key={task.time.toISOString()}>
                        <Time>
                            {task.time.toLocaleString("en-US", options)}
                        </Time>
                        <Description>{task.description}</Description>
                    </TaskContainer>
                ))}
        </FulfillmentInfoContainer>
    );
};
