import * as React from "react";
import styled from "styled-components";

const FulfillmentInfoContainer = styled.div`
    width: 70%;
    height: 100%;
`;

const options = {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric"
};

interface Props {
    currentTime: FinalTime | null;
}

export const FulfillmentInfo: React.FC<Props> = ({ currentTime }) => {
    return (
        <FulfillmentInfoContainer>
            {
                <ul>
                    {currentTime &&
                        currentTime.tasks.map(task => (
                            <li key={task.time.toISOString()}>
                                {task.description} |{" "}
                                {task.time.toLocaleString("en-US", options)}{" "}
                            </li>
                        ))}
                </ul>
            }
        </FulfillmentInfoContainer>
    );
};
