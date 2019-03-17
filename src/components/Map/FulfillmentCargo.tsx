import * as React from "react";
import styled from "styled-components";
import { MapContext } from "./MapContext";

const FulfillmentCargoContainer = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FulfillmentMiddle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    justify-content: space-between;
    height: 100%;
    width: 55%;
`;

const FulfillmentTitle = styled.div`
    color: #eef3f7;
    font-size: 1.7rem;
    height: 30%;
`;

const FulfillmentID = styled.div`
    color: #b9d0df;
    font-size: 1rem;
    height: 30%;
`;

const FulfillmentWeights = styled.div`
    width: 55%;
    height: 100%;
    text-align: center;
    border-radius: 4px;
    background-color: #ffb366;
    margin-right: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FulfillmentSpecsContainer = styled.div`
    display: flex;
    align-items: center;
    height: 45%;
`;
const FulfillmentItemContainer = styled.div`
    width: 95%;
    margin: 0.3rem 0rem;
    background-color: #182a34;
    display: flex;
    padding: 1rem 0.5rem;
    border-radius: 4px;
    justify-content: space-around;
    align-items: center;
`;

const FulfillmentItemCount = styled.div`
    height: 75%;
    font-size: 1.5rem;
    border-radius: 4px;
    background-color: #dce8ef;
    color: #182a34;
    text-align: center;
    display: flex;
    align-items: center;
    font-family: Rubik;
    width: 10%;
    display: flex;
    justify-content: center;
`;

const Totals = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Total = styled.div`
    width: 100%;
    color: #eef3f7;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    padding: 0.2rem 0rem;
    border-bottom: 1px solid #eef3f7;
    margin: 0.2rem 0rem;
`;

const TotalHover = styled.div``;

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
                        <FulfillmentItemContainer key={item.id}>
                            <FulfillmentItemCount>
                                {item.count}
                            </FulfillmentItemCount>
                            <FulfillmentMiddle>
                                <FulfillmentTitle>{item.name}</FulfillmentTitle>
                                {/* <FulfillmentID>{item.id}</FulfillmentID> */}
                                <FulfillmentSpecsContainer>
                                    <FulfillmentWeights>
                                        {item.v}
                                    </FulfillmentWeights>
                                    <FulfillmentWeights>
                                        {item.w}
                                    </FulfillmentWeights>
                                </FulfillmentSpecsContainer>
                            </FulfillmentMiddle>
                            <Totals>
                                <Total>{item.tv}</Total>
                                <Total>{item.tw}</Total>
                            </Totals>
                        </FulfillmentItemContainer>
                    );
                })}
        </FulfillmentCargoContainer>
    );
};
