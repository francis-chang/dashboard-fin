import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { animated, useSpring } from "react-spring";
import {
    NavBarSelection,
    NavBarTitle,
    NavBarTitleBar,
    NavBarTitleContainer,
    NavBarTitleExit,
    SlidingNavBar
} from "../ComponentStyles";
import NavBarDropdown from "./NavBarDropdown";

library.add(faTimes);

const HomeNav: React.FC<PropsForOpenNav> = ({ isOpen, setClick }) => {
    const animateHomeNav = useSpring({
        position: "absolute",
        top: "0rem",
        transform: isOpen ? "translateX(4.3rem)" : "translateX(-13.7rem)",
        height: "100%",
        overflow: "hidden",
        zIndex: isOpen ? 0 : 2
    });

    return (
        <animated.div style={animateHomeNav}>
            <SlidingNavBar>
                <NavBarTitleContainer>
                    <NavBarTitleBar>
                        <NavBarTitle>HOME</NavBarTitle>
                        <NavBarTitleExit onClick={() => setClick(false)}>
                            <FontAwesomeIcon icon="times" />
                        </NavBarTitleExit>
                    </NavBarTitleBar>
                </NavBarTitleContainer>

                <NavBarDropdown text="Lorem Ipsum" />
                <NavBarSelection>Dolor sit Amet</NavBarSelection>
                <NavBarDropdown text="Consectetur Adipiscing" />
                <NavBarSelection>Log out</NavBarSelection>
            </SlidingNavBar>
        </animated.div>
    );
};

export default HomeNav;
