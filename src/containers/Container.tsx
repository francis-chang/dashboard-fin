import { Router } from "@reach/router";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Global, Grid } from "./ContainerStyles";
import FinanceContainer from "./FinanceContainer";
import Route from "./Route";
import ShipmentContainer from "./ShipmentContainer";

const Container: React.FC = () => {
    return (
        <Grid>
            <Global />
            <NavBar />
            <Router>
                <Route component={ShipmentContainer} path={"/tracking"} />
                <Route component={FinanceContainer} path={"/finance"} />
            </Router>
        </Grid>
    );
};

export default Container;
