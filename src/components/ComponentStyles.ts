import styled from "styled-components";

/*
    #182a34 - DARKEST PRUSSIAN BLUE
    #203746 - DARK PRUSSIAN BLUE
    #284557 - PRUSSIAN BLUE
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
`;

/*
    List Styles
*/

export const ListAndInfoOnGrid = styled.div`
    grid-row-start: 1;
    grid-column-start: 2;
    display: flex;
    flex-direction: column;
`;

export const ListOnGrid = styled.div`
    height: 60%;
    max-height: 60%;
    background-color: #182a34;
    color: #eef3f7;
    display: flex;
    flex-direction: column;
`;

export const ListTitle = styled.div`
    background-color: #203746;
    width: 100%;
    border-bottom: 0.3rem solid #dce8ef;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 2.3rem;
    box-sizing: border-box;
`;

export const ListBody = styled.div`
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
`;

/*
    Listing Styles
*/

export const ListingBody = styled.div`
    height: 5rem;
    width: 100%;
    display: flex;
    padding: 0.3rem 1rem;
    box-sizing: border-box;
    border-bottom: 0.5px solid #203746;
    align-items: center;
`;

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
    Info Styles
*/
export const InfoOnGrid = styled.div`
    height: 40%;
    background-color: #182a34;
    color: #eef3f7;
`;
