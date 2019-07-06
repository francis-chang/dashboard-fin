import { Router } from "@reach/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import { Global, Grid } from "./ContainerStyles";
import FinanceContainer from "./FinanceContainer";
import Route from "./Route";
import ShipmentContainer from "./ShipmentContainer";

const Container: React.FC = () => {
    const [listener, setListener] = useState(false);
    const [notInResolution, setNotInResolution] = useState(false);

    useEffect(() => {
        if (!listener) {
            if (
                document.body.clientWidth < 1500 ||
                document.body.clientWidth > 2000
            ) {
                setNotInResolution(true);
            }
            if (
                document.body.clientWidth <= 2000 &&
                document.body.clientWidth >= 1700
            ) {
                setNotInResolution(false);
            }
            window.addEventListener("resize", () => {
                if (
                    document.body.clientWidth < 1500 ||
                    document.body.clientWidth > 2000
                ) {
                    setNotInResolution(true);
                }
                if (
                    document.body.clientWidth <= 2000 &&
                    document.body.clientWidth >= 1500
                ) {
                    setNotInResolution(false);
                }
            });

            setListener(true);
        }
    });

    const ResoMessage = styled.div`
        position: absolute;
        display: flex;
        top: 0;
        left: 50%;
        justify-content: center;
        font-size: 2rem;
        z-index: 20;
        width: 800px;
        margin-left: -400px;
        background-color: #ff5050;
        text-align: center;

        padding: 1rem 0rem;
        color: #eef3f7;
    `;

    return (
        <Grid>
            <Global />
            <NavBar />
            {notInResolution && (
                <ResoMessage>
                    This site is not responsive <br />
                    The best width resolution is between 1500px and 2000px{" "}
                    <br />
                    Be sure to resize to a good resolution and REFRESH the page
                    <br />
                </ResoMessage>
            )}
            <Router>
                <Route path="/tracking" component={ShipmentContainer} />
                <Route path="/finance" component={FinanceContainer} />
            </Router>
        </Grid>
    );
};

export default Container;
