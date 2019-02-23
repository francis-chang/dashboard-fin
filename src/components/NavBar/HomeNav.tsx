import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { animated, useSpring } from "react-spring";
import {
    NavBarTitle,
    NavBarTitleBar,
    NavBarTitleExit,
    SlidingNavBar
} from "../ComponentStyles";

library.add(faTimes);

const HomeNav: React.FC<PropsForOpenNav> = ({ isOpen }) => {
    const animateHomeNav = useSpring({
        position: "absolute",
        top: "0rem",
        left: "4.3rem",
        width: isOpen ? "15rem" : "0%",
        height: "100%",
        overflow: "hidden",
        zIndex: isOpen ? 0 : 2
    });

    return (
        <animated.div style={animateHomeNav}>
            <SlidingNavBar>
                <NavBarTitleBar>
                    <NavBarTitle>Home</NavBarTitle>
                    <NavBarTitleExit>
                        <FontAwesomeIcon icon="times" />
                    </NavBarTitleExit>
                </NavBarTitleBar>
            </SlidingNavBar>
        </animated.div>
    );
};

export default HomeNav;
