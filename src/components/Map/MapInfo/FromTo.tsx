import React, { useContext } from "react";
import {
    MapInfoArriveContainer,
    MapInfoArriveDepartContainer,
    MapInfoArriveLeft,
    MapInfoArriveLeftAbbr,
    MapInfoArriveLeftTime,
    MapInfoArriveLeftTitle,
    MapInfoArriveRight,
    MapInfoArriveRightAirport
} from "../../ComponentStyles";
import { MapContext } from "../MapContext";

const FromTo: React.FC = () => {
    const { currentShipment, date } = useContext(MapContext);

    const options = {
        hour12: true,
        hour: "numeric",
        minute: "numeric"
    };

    const computeArriveTime = () => {
        if (currentShipment && date) {
            let progressTime = Math.floor(
                currentShipment.flightDuration * currentShipment.progress
            );
            let arrival = new Date(date);
            arrival.setMinutes(arrival.getMinutes() - progressTime);
            return arrival.toLocaleString("en-US", options);
        }
        return "";
    };

    const computeDepartTime = () => {
        if (currentShipment && date) {
            let progressTime = Math.floor(
                currentShipment.flightDuration * (1 - currentShipment.progress)
            );
            let arrival = new Date(date);
            arrival.setMinutes(arrival.getMinutes() + progressTime);
            return arrival.toLocaleString("en-US", options);
        }
        return "";
    };

    return (
        <MapInfoArriveDepartContainer>
            <MapInfoArriveContainer>
                <MapInfoArriveLeft>
                    <MapInfoArriveLeftTitle>Depart</MapInfoArriveLeftTitle>
                    <MapInfoArriveLeftAbbr>
                        {currentShipment && currentShipment.from.abbr}
                    </MapInfoArriveLeftAbbr>
                    <MapInfoArriveLeftTime>
                        {computeArriveTime()}
                    </MapInfoArriveLeftTime>
                </MapInfoArriveLeft>
                <MapInfoArriveRight>
                    <MapInfoArriveRightAirport>
                        {currentShipment && currentShipment.from.airport}
                    </MapInfoArriveRightAirport>
                    <div>{currentShipment && currentShipment.from.city}</div>
                    <div>
                        {currentShipment &&
                            `${currentShipment.from.lnglat[1]}°N, ${Math.abs(
                                currentShipment.from.lnglat[0]
                            )}°W`}
                    </div>
                </MapInfoArriveRight>
            </MapInfoArriveContainer>
            <MapInfoArriveContainer>
                <MapInfoArriveLeft>
                    <MapInfoArriveLeftTitle>Arrive</MapInfoArriveLeftTitle>
                    <MapInfoArriveLeftAbbr>
                        {currentShipment && currentShipment.to.abbr}
                    </MapInfoArriveLeftAbbr>
                    <MapInfoArriveLeftTime>
                        {currentShipment &&
                        currentShipment.eta === "canceled" ? (
                            <div style={{ color: "#ff5050" }}>CANCELED</div>
                        ) : (
                            computeDepartTime()
                        )}
                    </MapInfoArriveLeftTime>
                </MapInfoArriveLeft>
                <MapInfoArriveRight>
                    <MapInfoArriveRightAirport>
                        {currentShipment && currentShipment.to.airport}
                    </MapInfoArriveRightAirport>
                    <div>{currentShipment && currentShipment.to.city}</div>
                    <div>
                        {currentShipment &&
                            `${currentShipment.to.lnglat[1]}°N, ${Math.abs(
                                currentShipment.to.lnglat[0]
                            )}°W`}
                    </div>
                </MapInfoArriveRight>
            </MapInfoArriveContainer>
        </MapInfoArriveDepartContainer>
        // <FromToContainer>
        //     <From>
        //         <MapInfoTitle>Departing</MapInfoTitle>
        //         <MapInfoCoordinate>
        //             <FromToAbbr>
        //                 {currentShipment && currentShipment.from.abbr}
        //             </FromToAbbr>
        //             <FromToAirport>
        //                 {currentShipment && currentShipment.from.airport}
        //             </FromToAirport>

        //             <FromToCity>
        //                 {currentShipment && currentShipment.from.city}
        //             </FromToCity>
        //             <FromToLngLat>
        //                 {currentShipment &&
        //                     `${currentShipment.from.lnglat[1]}°N, ${Math.abs(
        //                         currentShipment.from.lnglat[0]
        //                     )}°W`}
        //             </FromToLngLat>
        //         </MapInfoCoordinate>
        //     </From>
        //     <From>
        //         <MapInfoTitle>Arriving</MapInfoTitle>
        //         <MapInfoCoordinate>
        //             <FromToAbbr>
        //                 {currentShipment && currentShipment.to.abbr}
        //             </FromToAbbr>
        //             <FromToAirport>
        //                 {currentShipment && currentShipment.to.airport}
        //             </FromToAirport>

        //             <FromToCity>
        //                 {currentShipment && currentShipment.to.city}
        //             </FromToCity>
        //             <FromToLngLat>
        //                 {currentShipment &&
        //                     `${currentShipment.to.lnglat[1]}°N, ${Math.abs(
        //                         currentShipment.to.lnglat[0]
        //                     )}°W`}
        //             </FromToLngLat>
        //         </MapInfoCoordinate>
        //     </From>
        // </FromToContainer>
    );
};

export default FromTo;
