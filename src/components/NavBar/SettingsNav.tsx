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

const SettingsNav: React.FC<PropsForOpenNav> = ({ isOpen, setClick }) => {
    const animateSettingsNav = useSpring({
        position: "absolute",
        top: "0rem",
        transform: isOpen ? "translateX(4.3rem)" : "translateX(-13.7rem)",
        height: "100%",
        overflow: "hidden",
        zIndex: isOpen ? 0 : 2
    });

    return (
        <animated.div style={animateSettingsNav}>
            <SlidingNavBar>
                <NavBarTitleContainer>
                    <NavBarTitleBar>
                        <NavBarTitle>SETTINGS</NavBarTitle>
                        <NavBarTitleExit onClick={() => setClick(false)}>
                            <FontAwesomeIcon icon="times" />
                        </NavBarTitleExit>
                    </NavBarTitleBar>
                </NavBarTitleContainer>

                <NavBarDropdown text="Sed do Eiusmod" isNavOut={isOpen} />
                <NavBarSelection>Change Password</NavBarSelection>
                <NavBarSelection>Billing and Payment</NavBarSelection>
                <NavBarSelection>History</NavBarSelection>
                <NavBarSelection>Advanced Settings</NavBarSelection>
            </SlidingNavBar>
        </animated.div>
    );
};

export default SettingsNav;
