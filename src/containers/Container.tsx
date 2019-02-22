import { Router } from "@reach/router";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Route from "./Route";
import ShipmentContainer from "./ShipmentContainer";

const Global = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-size: 16px;
    }
`;

const Grid = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 5rem auto;
`;

const Container: React.FC = () => {
    return (
        <Grid>
            <Global />
            <NavBar />
            <Router>
                <Route component={ShipmentContainer} path={"/tracking"} />
            </Router>
        </Grid>
    );
};

export default Container;
