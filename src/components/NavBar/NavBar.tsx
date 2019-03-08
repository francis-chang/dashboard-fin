import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faChartBar,
    faCog,
    faGlobeAmericas,
    faHome
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    MidNavigation,
    NavBarOnGrid,
    NavigationButton,
    NavigationButtonDash,
    TopNavigation
} from "../ComponentStyles";
import HomeNav from "./HomeNav";
import SettingsNav from "./SettingsNav";

library.add(faCog, faHome, faGlobeAmericas, faChartBar);

const NavBar: React.FC = () => {
    /*
       Keeping the "open" of navigations stateful as a boolean
    */

    const [isHomeOpen, setHomeClick] = useState(false);
    const [isSettingsOpen, setSettingsClick] = useState(false);

    /*
        Augmented versions of the state handlers to account for
        the openness of other navigation bars
    */

    const toggleHomeClick = () => {
        if (isSettingsOpen) {
            setSettingsClick(!isSettingsOpen);
        }
        setHomeClick(!isHomeOpen);
    };

    const toggleSettingsClick = () => {
        if (isHomeOpen) {
            setHomeClick(!isHomeOpen);
        }
        setSettingsClick(!isSettingsOpen);
    };

    /*
        Deals with the active style of links
    */

    const isActive = ({ isCurrent }: { isCurrent: boolean }) => {
        return isCurrent
            ? { className: "navigationButton-active" }
            : { className: "navigationButton-non" };
    };

    return (
        <>
            <NavBarOnGrid>
                <TopNavigation>
                    <NavigationButton onClick={toggleHomeClick}>
                        <FontAwesomeIcon icon="home" />
                    </NavigationButton>
                    <NavigationButton onClick={toggleSettingsClick}>
                        <FontAwesomeIcon icon="cog" />
                    </NavigationButton>
                </TopNavigation>
                <MidNavigation>
                    <Link to="/tracking">
                        <NavigationButtonDash>
                            <FontAwesomeIcon icon="globe-americas" />
                        </NavigationButtonDash>
                    </Link>
                    <Link to="/finance">
                        <NavigationButtonDash>
                            <FontAwesomeIcon icon="chart-bar" />
                        </NavigationButtonDash>
                    </Link>
                </MidNavigation>
            </NavBarOnGrid>
            <HomeNav isOpen={isHomeOpen} setClick={setHomeClick} />
            <SettingsNav isOpen={isSettingsOpen} setClick={setSettingsClick} />
        </>
    );
};

export default NavBar;
