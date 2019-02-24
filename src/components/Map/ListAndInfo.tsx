import React, { useContext } from "react";
import { SHIPMENTDATA } from "../../containers/Data";
import {
    InfoOnGrid,
    ListAndInfoOnGrid,
    ListBody,
    ListOnGrid,
    ListTitle
} from "../ComponentStyles";
import Listing from "./Listing";
import { MapContext } from "./MapContext";

const ListAndInfo: React.FC = () => {
    const { currentShipment, setCurrentShipment } = useContext(MapContext);
    return (
        <ListAndInfoOnGrid>
            <ListOnGrid>
                <ListTitle>SHIPMENTS</ListTitle>

                <ListBody>
                    {SHIPMENTDATA.map(shipment => (
                        <Listing key={shipment.id} shipment={shipment} />
                    ))}
                </ListBody>
            </ListOnGrid>
            <InfoOnGrid>
                <ListTitle>INFO</ListTitle>
            </InfoOnGrid>
        </ListAndInfoOnGrid>
    );
};

export default ListAndInfo;
