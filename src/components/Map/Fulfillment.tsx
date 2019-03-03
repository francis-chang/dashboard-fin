import React from "react";
import { FulfillmentCargo, FulfillmentContainer } from "../ComponentStyles";
import FulfillmentList from "./FulfillmentList";

const Fulfillment: React.FC = () => {
    return (
        <FulfillmentContainer>
            <FulfillmentCargo />
            <FulfillmentList />
        </FulfillmentContainer>
    );
};

export default Fulfillment;
