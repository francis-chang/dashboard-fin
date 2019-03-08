import { Router } from "@reach/router";
import React, { useState } from "react";
import { useTransition } from "react-spring";
import NavBar from "../components/NavBar/NavBar";
import { Global, Grid } from "./ContainerStyles";
import FinanceContainer from "./FinanceContainer";
import Route from "./Route";
import ShipmentContainer from "./ShipmentContainer";

const Container: React.FC = () => {
    const [visible, setVisible] = useState(true);

    const containerTransition = useTransition(visible, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    return (
        <Grid>
            <Global />
            <NavBar />

            <Router>
                <Route path="/tracking" component={ShipmentContainer} />
                <Route path="/finance" component={FinanceContainer} />
            </Router>
        </Grid>
    );
};

export default Container;
