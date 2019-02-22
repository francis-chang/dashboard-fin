import styled from "styled-components";

/*
    NAVBAR
*/

export const NavBarOnGrid = styled.div`
    grid-column-start: 1;
    background-color: #182a34;
`;

export const TopNavigation = styled.div`
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    &:hover {
        background-color: #284557;
        transition-duration: 250ms;
    }
`;

//NavigationButton-active is in Global Style

/*
    HOME NAV BAR
*/

export const SlidingNavBar = styled.div`
    width: 100%;
    height: 100%;
    background-color: #203746;
`;
