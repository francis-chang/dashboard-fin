import styled, { createGlobalStyle } from "styled-components";

/*
    GLOBAL STYLES
*/

export const Global = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-size: 16px;
    }

    .navigationButton-active{
        background-color: #284557;
        color: #ffb366;
    }
    .navigationButton-non{
        color: #dce8ef;
    }
`;

/*
    PARENT GRID
*/

export const Grid = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 5.5rem auto;
`;

/*
    UNIVERSAL DASHBOARD PLACEMENT
*/

export const DashboardPlacement = styled.div`
    grid-column-start: 2;
    background-color: #eef3f7;
    height: 100%;
`;

/*
    SHIPMENT CONTAINER STYLES
*/

export const ShipmentGrid = styled.div``;
