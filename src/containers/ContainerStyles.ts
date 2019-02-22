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
    background-color: #eee;
    height: 100%;
`;

/*
    SHIPMENT CONTAINER STYLES
*/

export const ShipmentGrid = styled.div``;
