import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import NavBar from "../components/NavBar/NavBar";
import { Global, Grid } from "./ContainerStyles";
import FinanceContainer from "./FinanceContainer";
// import Route from "./Route";
import ShipmentContainer from "./ShipmentContainer";

const Container: React.FC = () => {
    const [visible, setVisible] = useState(true);

    const containerTransition = useTransition(visible, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    return (
        <BrowserRouter>
            <Grid>
                <Global />
                <NavBar />
                {containerTransition.map(
                    ({ item, key, props }) =>
                        item && (
                            <animated.div style={props}>
                                <Switch>
                                    <Route
                                        path="/tracking"
                                        component={ShipmentContainer}
                                    />
                                    <Route
                                        path="/finance"
                                        component={FinanceContainer}
                                    />
                                </Switch>
                            </animated.div>
                        )
                )}
            </Grid>
        </BrowserRouter>
    );
};

export default Container;
