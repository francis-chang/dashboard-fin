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
    /*
        Translates the sliding navigation
        Math: 
        SlidingNavBar is 18 rem
        NavBar is 4.3rem via grid styles
        18 - 4.3 = 13.7
    */
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
                    <NavBarTitleBar onClick={() => setClick(false)}>
                        <NavBarTitle>HOME</NavBarTitle>
                        <NavBarTitleExit className="nav-exit">
                            <FontAwesomeIcon icon="times" />
                        </NavBarTitleExit>
                    </NavBarTitleBar>
                </NavBarTitleContainer>

                <NavBarDropdown text="Lorem Ipsum" isNavOut={isOpen} />
                <NavBarSelection>Dolor sit Amet</NavBarSelection>
                <NavBarDropdown
                    text="Consectetur Adipiscing"
                    isNavOut={isOpen}
                />
                <NavBarSelection>Log out</NavBarSelection>
            </SlidingNavBar>
        </animated.div>
    );
};

export default HomeNav;
