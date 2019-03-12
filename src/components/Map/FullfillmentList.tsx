import * as React from "react";
import styled from "styled-components";
import { FullfillmentButtons } from "./FulfillmentButtons";
import { FulfillmentInfo } from "./FulfillmentInfo";
import { MapContext } from "./MapContext";

interface Props {}

const FulfillmentContainer = styled.div`
    width: 70%;
    height: 22rem;
    display: flex;
`;

export const FullfillmentList: React.FC<Props> = () => {
    const { currentShipment } = React.useContext(MapContext);

    return (
        <FulfillmentContainer>
            <FullfillmentButtons />
            <FulfillmentInfo />
        </FulfillmentContainer>
    );
};
