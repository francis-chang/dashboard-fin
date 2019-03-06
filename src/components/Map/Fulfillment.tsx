import React from "react";
import { FulfillmentContainer } from "../ComponentStyles";
import FulfillCargo from "./FulfillCargo";
import FulfillmentList from "./FulfillmentList";

const Fulfillment: React.FC = () => {
    return (
        <FulfillmentContainer>
            <FulfillCargo />
            <FulfillmentList />
        </FulfillmentContainer>
    );
};

export default Fulfillment;
