import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

const FulfillmentInfoContainer = styled.div`
    width: 70%;
    height: 100%;
    background-color: green;
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
    const [appear, setAppear] = React.useState(true);
    return (
        <TransitionGroup
            key={currentTime ? currentTime.date.toISOString() : ""}
            timeout={300}
            classNames="fade"
        >
            <CSSTransition
                in={appear}
                appear={true}
                timeout={300}
                classNames="fade"
            >
                <FulfillmentInfoContainer>
                    {
                        <ul>
                            {currentTime &&
                                currentTime.tasks.map(task => (
                                    <li key={task.time.toISOString()}>
                                        {task.description} |{" "}
                                        {task.time.toLocaleString(
                                            "en-US",
                                            options
                                        )}{" "}
                                    </li>
                                ))}
                        </ul>
                    }
                </FulfillmentInfoContainer>
            </CSSTransition>
        </TransitionGroup>
    );
};
