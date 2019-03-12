import React from "react";
import { FulfillmentContainer } from "../ComponentStyles";
import { FullfillmentList } from "./FullfillmentList";

const Fulfillment: React.FC = () => {
    return (
        <FulfillmentContainer>
            <FullfillmentList />
        </FulfillmentContainer>
    );
};

export default Fulfillment;
