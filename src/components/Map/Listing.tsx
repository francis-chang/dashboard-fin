import React from "react";
import { ListingBody } from "../ComponentStyles";

const Listing: React.FC<PropsForListing> = ({ shipment }) => {
    return <ListingBody>{shipment.descr}</ListingBody>;
};

export default Listing;
