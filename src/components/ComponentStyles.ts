import styled from "styled-components";

/*
    NAVBAR
*/

export const NavBarOnGrid = styled.div`
    grid-column-start: 1;
    background-color: #373745;
`;

export const TopNavigation = styled.div`
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const NavigationButton = styled.div`
    font-size: 2.2rem;
    color: #f1f1f4;
    cursor: pointer;
    margin: 1rem 0rem;
    text-align: center;
`;

/*
    HOME NAV BAR
*/

export const SlidingNavBar = styled.div`
    width: 90%;
    height: 100%;
    background-color: orange;
    border: 4px solid black;
`;
