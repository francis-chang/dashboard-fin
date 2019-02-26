import React, { useContext, useState } from "react";
import { animated, useSpring } from "react-spring";
import { ListBody, ListOnGrid, ListTitle } from "../ComponentStyles";
import FilterList from "./FilterList";
import Listing from "./Listing";
import { MapContext } from "./MapContext";

const List: React.FC = () => {
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
        width: "100%",
        top: "0px",
        left: "0px",
        height: mouseClicked ? "5rem" : "0%",
        overflow: "hidden"
    });

    const { filteredShipments, setCurrentShipment } = useContext(MapContext);

    const setMouseAndNullCurrent = () => {
        setMouseClicked(!mouseClicked);
        setCurrentShipment(null);
    };

    return (
        <ListOnGrid>
            <ListTitle
                onMouseOver={() => setmouseHover(true)}
                onMouseOut={() => setmouseHover(false)}
                onClick={setMouseAndNullCurrent}
            >
                <animated.div style={animateListTitle}>
                    FILTER SHIPMENTS
                </animated.div>
            </ListTitle>

            <ListBody>
                <animated.div style={animateFilterBody}>
                    <FilterList setMouseClicked={setMouseClicked} />
                </animated.div>

                {filteredShipments.map(shipment => (
                    <Listing key={shipment.id} shipment={shipment} />
                ))}
            </ListBody>
        </ListOnGrid>
    );
};

export default List;
