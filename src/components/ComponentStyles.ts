import styled from "styled-components";

/*
    #182a34 - DARKEST PRUSSIAN BLUE
    #203746 - DARK PRUSSIAN BLUE
    #284557 - PRUSSIAN BLUE
    #49779c - MID BLUE 
    #b9d0df - SKY BLUE  
    #dce8ef - OFF WHITE BLUE
    #eef3f7 - ICE WHITE

    #ff5050 - NEGATIVE RED

    #ffb366 - WARNING ORANGE
    
    #00cc66 - POSITIVE GREEN
*/

/*
    NAVBAR
*/

export const NavBarOnGrid = styled.div`
    grid-column-start: 1;
    background-color: #182a34;
    z-index: 10;
`;

export const TopNavigation = styled.div`
    height: 10rem;
    display: flex;
    flex-direction: column;
`;

export const MidNavigation = styled.div`
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const NavigationButton = styled.div`
    font-size: 2.2rem;
    cursor: pointer;
    color: #dce8ef;
    padding: 1rem 0rem;
    text-align: center;

    &:hover {
        background-color: #284557;
        transition-duration: 250ms;
    }
`;

export const NavigationButtonDash = styled.div`
    font-size: 2.2rem;
    cursor: pointer;
    padding: 1rem 0rem;
    text-align: center;
`;

//NavigationButton-active is in Global Style

/*
    NAV BAR SLIDE OUT
*/

export const SlidingNavBar = styled.div`
    width: 18rem;
    height: 100%;
    background-color: #182a34;
    box-sizing: border-box;
    color: #dce8ef;
    user-select: none;
`;

export const NavBarTitleContainer = styled.div`
    width: 100%;
    border-bottom: 0.3rem solid #dce8ef;
    background-color: #203746;
`;

export const NavBarTitleBar = styled.div`
    padding: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &:hover > .nav-exit {
        transform: rotate(90deg);
        color: #ff5050;
        transition-duration: 350ms;
    }
`;

export const NavBarTitle = styled.div`
    text-align: center;
    font-size: 2.2rem;
`;

export const NavBarTitleExit = styled.div`
    font-size: 1.8rem;
    cursor: pointer;
    padding: 0.2rem;
`;

export const NavBarSelection = styled.div`
    font-size: 1.1rem;
    height: 3rem;
    display: flex;
    width: 100%;
    background-color: #182a34;
    /* border-bottom: 0.1rem solid #dce8ef; */
    align-items: center;
    padding-left: 0.7rem;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const NavBarSelectionWDropDown = styled.div`
    font-size: 1.1rem;
    height: 3rem;
    display: flex;
    width: 100%;
    background-color: #182a34;
    align-items: center;
    padding-left: 0.7rem;
    justify-content: space-between;
    cursor: pointer;

    &:hover > .arrow-down {
        color: #00cc66;
        transition-duration: 300ms;
    }

    &:hover > .dropdown-text {
        text-decoration: underline;
    }
`;

export const NavBarSelectionDrop = styled.div`
    font-size: 1rem;
    height: 3rem;
    width: 100%;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #203746;

    &:hover {
        text-decoration: underline;
    }
`;

/*
    Map Styles
*/

export const MapOnGrid = styled.div`
    grid-row-start: 1;
    grid-column-start: 1;
    background-color: #eef3f7;
    position: relative;
`;

/*
    List Styles
*/

export const ListOnGrid = styled.div`
    grid-row-start: 1;
    grid-column-start: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    background-color: #182a34;
    color: #eef3f7;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const ListTitle = styled.div`
    background-color: #203746;
    width: 100%;
    border-bottom: 0.3rem solid #dce8ef;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 2.3rem;
    min-height: 3.3rem;
    max-height: 3.3rem;
    box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;
    user-select: none;
`;

export const ListBody = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
`;

/*
    Listing Styles
*/

export const ListingTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export const ListingTitleName = styled.div`
    font-size: 1.5rem;
`;
export const ListingTitleID = styled.div`
    font-size: 1rem;
    color: #b9d0df;
`;

export const ListingFromTo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
`;

export const ListingFrom = styled.div`
    padding: 0.5rem;
    font-size: 1.3rem;
`;

export const ListingETA = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

/*
    Filter Styles
 */

export const FilterContainer = styled.div``;

export const FilterInputContainer = styled.div`
    width: 100%;
    display: flex;
`;
export const FilterInputTitle = styled.div`
    padding: 0rem 0.5rem;
    font-size: 1.5rem;
`;

export const FilterInput = styled.input`
    flex-grow: 1;
    background-color: #203746;
    border: none;
    user-select: none;
    color: white;
    font-size: 1.2rem;

    &:focus {
        outline-width: 0;
    }
`;

export const FilterButtonContainer = styled.div`
    width: 100%;
    cursor: pointer;
    font-size: 1.1rem;
    padding: 0.5rem 0.2rem;
`;

/*
    Info Styles
*/
export const InfoOnGrid = styled.div`
    height: 40%;
    background-color: #182a34;
    color: #eef3f7;
`;

/*
    Map info styles
*/

export const MapInfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const AltitudeContainer = styled.div`
    height: 100%;
    width: 17%;
`;

export const LocationContainer = styled.div`
    height: 100%;
    width: 30%;
`;

export const MapInfoOdom = styled.div`
    height: 100%;
    width: 100%;
`;
export const MapInfoOdomContainer = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MapInfoOdomTitle = styled.div`
    width: 100%;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: white;
    text-align: center;
`;

/*
    Fulfillment styles
*/

export const FulfillmentContainer = styled.div`
    grid-column: 1 / span 2;
    grid-row-start: 2;
    background-color: #284557;
`;
