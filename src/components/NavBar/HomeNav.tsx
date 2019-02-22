import React from "react";
import { animated, useSpring } from "react-spring";
import { SlidingNavBar } from "../ComponentStyles";

const HomeNav: React.FC<PropsForOpenNav> = ({ isOpen }) => {
    const animateHomeNav = useSpring({
        position: "absolute",
        top: "0rem",
        left: "5.5rem",
        width: isOpen ? "15rem" : "0%",
        height: "100%",
        overflow: "hidden",
        zIndex: isOpen ? 0 : 2
    });

    return (
        <animated.div style={animateHomeNav}>
            <SlidingNavBar>Home</SlidingNavBar>
        </animated.div>
    );
};

export default HomeNav;
