import * as React from "react";
import styled from "styled-components";

interface Props {}

const FullfillmentButtonsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 10rem;
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
`;

export const FullfillmentButtons: React.FC<Props> = () => {
    return (
        <FullfillmentButtonsContainer>
            <CurrentETAButton>CURRENT</CurrentETAButton>
            <History>History goes here</History>
            <CurrentETAButton>ETA</CurrentETAButton>
        </FullfillmentButtonsContainer>
    );
};
