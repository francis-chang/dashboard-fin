import React from "react";
import {
    FulfillmentListContainer,
    FulfillmentListing
} from "../ComponentStyles";

const FulfillmentList: React.FC = () => {
    return (
        <FulfillmentListContainer>
            <FulfillmentListing>AT WAREHOUSE</FulfillmentListing>
            <FulfillmentListing>
                cargo transported from warehouse to sfo
            </FulfillmentListing>
        </FulfillmentListContainer>
    );
};

export default FulfillmentList;
