import React from "react";
import styled from "styled-components";

const NavBarOnGrid = styled.div`
    grid-column-start: 1;
    background-color: #373745;
`;

const NavBar: React.FC = () => {
    return <NavBarOnGrid />;
};

export default NavBar;
