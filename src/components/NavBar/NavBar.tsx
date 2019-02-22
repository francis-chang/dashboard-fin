import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
    NavBarOnGrid,
    NavigationButton,
    TopNavigation
} from "../ComponentStyles";
import HomeNav from "./HomeNav";
import SettingsNav from "./SettingsNav";

library.add(faCog, faHome);

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
            </NavBarOnGrid>
            <HomeNav isOpen={isHomeOpen} />
            <SettingsNav isOpen={isSettingsOpen} />
        </>
    );
};

export default NavBar;
