import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faArrowCircleLeft,
    faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import {
    FilterButton,
    ListBody,
    ListOnGrid,
    ListTitle,
    ListTitleTitle
} from "../ComponentStyles";
import FilterList from "./FilterList";
import Listing from "./Listing";
import { MapContext } from "./MapContext";

library.add(faArrowCircleLeft, faArrowCircleRight);
const List: React.FC = () => {
    const [mouseHover, setmouseHover] = useState(false);
    const [mouseClicked, setMouseClicked] = useState(false);
    const listBodyRef = useRef<HTMLDivElement | null>(null);

    const animateListTitle = useSpring({
        width: "100%",
        transform:
            mouseHover || mouseClicked
                ? "translateX(0rem)"
                : "translateX(-8.1rem)",
        color: mouseClicked ? "#ffb366" : "#eef3f7",
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
    });

    const animateFilterBody = useSpring({
        width: "100%",
        top: "0px",
        left: "0px",
        height: mouseClicked ? "25rem" : "0%",
        overflow: "hidden"
    });

    const { filteredShipments, setCurrentShipment } = useContext(MapContext);

    const setMouseAndNullCurrent = () => {
        setMouseClicked(!mouseClicked);
        setCurrentShipment(null);
        if (listBodyRef.current) {
            listBodyRef.current.scrollTop = 0;
        }
    };

    return (
        <ListOnGrid>
            <ListTitle>
                <ListTitleTitle>Shipments</ListTitleTitle>
                <FilterButton onClick={setMouseAndNullCurrent}>
                    Filter
                </FilterButton>
            </ListTitle>
            {/* <ListTitle
                onMouseOver={() => setmouseHover(true)}
                onMouseOut={() => setmouseHover(false)}
                onClick={setMouseAndNullCurrent}
            >
                <animated.div style={animateListTitle}>
                    FILTER SHIPMENTS{" "}
                    <ListTitleArrow>
                        <FontAwesomeIcon
                            icon={
                                mouseClicked
                                    ? "arrow-circle-left"
                                    : "arrow-circle-right"
                            }
                            size="xs"
                        />
                    </ListTitleArrow>
                </animated.div>
            </ListTitle> */}

            <ListBody ref={listBodyRef}>
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
