import React, { useContext, useState } from "react";
import { animated, useSpring } from "react-spring";
import {
    InfoOnGrid,
    ListAndInfoOnGrid,
    ListBody,
    ListBodyInner,
    ListOnGrid,
    ListTitle
} from "../ComponentStyles";
import FilterList from "./FilterList";
import Listing from "./Listing";
import { MapContext } from "./MapContext";

const ListAndInfo: React.FC = () => {
    const [mouseHover, setmouseHover] = useState(false);
    const [mouseClicked, setMouseClicked] = useState(false);

    const animateListTitle = useSpring({
        width: "100%",
        transform:
            mouseHover || mouseClicked
                ? "translateX(0rem)"
                : "translateX(-8.1rem)",
        color: mouseClicked ? "#ffb366" : "#eef3f7",
        overflow: "hidden"
    });

    const animateFilterBody = useSpring({
        position: "absolute",
        width: "100%",
        top: "3.3rem",
        left: "0px",
        bottom: mouseClicked ? "0%" : "100%",
        zIndex: 10,
        backgroundColor: "rgba(33,55,70,0.8)",
        overflow: "hidden"
    });

    const { filteredShipments } = useContext(MapContext);
    return (
        <ListAndInfoOnGrid>
            <ListOnGrid>
                <ListTitle
                    onMouseOver={() => setmouseHover(true)}
                    onMouseOut={() => setmouseHover(false)}
                    onClick={() => setMouseClicked(!mouseClicked)}
                >
                    <animated.div style={animateListTitle}>
                        FILTER SHIPMENTS
                    </animated.div>
                </ListTitle>
                <animated.div style={animateFilterBody}>
                    <FilterList setMouseClicked={setMouseClicked} />
                </animated.div>

                <ListBody>
                    <ListBodyInner>
                        {filteredShipments.map(shipment => (
                            <Listing key={shipment.id} shipment={shipment} />
                        ))}
                    </ListBodyInner>
                </ListBody>
            </ListOnGrid>
            <InfoOnGrid>
                <ListTitle>INFO</ListTitle>
            </InfoOnGrid>
        </ListAndInfoOnGrid>
    );
};

export default ListAndInfo;
