import * as React from "react";
import styled from "styled-components";
import { MapContext } from "./MapContext";

const FulfillmentCargoContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FulfillmentItemContainer = styled.div`
    width: 90%;
    margin: 0.3rem 0rem;
    background-color: #182a34;
    display: flex;
    padding: 0.5rem 0.5rem;
    border-radius: 4px;
`;

const FulfillmentItemCount = styled.div`
    font-size: 2.5rem;
    border-radius: 4px;
    background-color: #dce8ef;
    color: #182a34;
    text-align: center;
    padding: 0.5rem 0.5rem;
`;

interface Props {}

export const FullfillmentCargo: React.FC<Props> = () => {
    const { currentShipment } = React.useContext(MapContext);

    React.useEffect(() => {
        if (currentShipment) {
        }
    }, [currentShipment]);

    return (
        <FulfillmentCargoContainer>
            {currentShipment &&
                currentShipment.items.map(item => {
                    return (
                        <FulfillmentItemContainer>
                            <FulfillmentItemCount>
                                {item.count}
                            </FulfillmentItemCount>{" "}
                            {item.id} | {item.name}
                        </FulfillmentItemContainer>
                    );
                })}
        </FulfillmentCargoContainer>
    );
};
