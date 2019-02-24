import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faArrowCircleDown,
    faArrowCircleUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import {
    NavBarSelectionDrop,
    NavBarSelectionWDropDown
} from "../ComponentStyles";

library.add(faArrowCircleDown, faArrowCircleUp);

const NavBarDropdown: React.FC<PropsForNavDropdown> = ({ text, isNavOut }) => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (!isNavOut) {
            setOpen(false);
        }
    }, [isNavOut]);

    const animateDropdown = useSpring({
        height: isOpen ? "12rem" : "0rem",
        overflow: "hidden"
    });
    return (
        <>
            <NavBarSelectionWDropDown onClick={() => setOpen(!isOpen)}>
                <div className="dropdown-text">{text}</div>
                <FontAwesomeIcon
                    className="arrow-down"
                    style={{ paddingRight: "1.5rem" }}
                    icon={isOpen ? "arrow-circle-up" : "arrow-circle-down"}
                />
            </NavBarSelectionWDropDown>
            <animated.div style={animateDropdown}>
                <NavBarSelectionDrop>Lima Oscar Romeo</NavBarSelectionDrop>
                <NavBarSelectionDrop>Echo Mike</NavBarSelectionDrop>
                <NavBarSelectionDrop>India Papa</NavBarSelectionDrop>
                <NavBarSelectionDrop>Sierra Uniform Mike</NavBarSelectionDrop>
            </animated.div>
        </>
    );
};

export default NavBarDropdown;
