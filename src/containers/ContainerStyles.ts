import styled, { createGlobalStyle } from "styled-components";

/*
    GLOBAL STYLES
*/

export const Global = createGlobalStyle`

    @font-face {
        font-family: Chivo;
        src: url('./assets/fonts/Chivo/Chivo-Regular.ttf');
    }
    body{
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: Chivo;
        -webkit-font-smoothing: antialiased;
    }

    .navigationButton-active{
        background-color: #b9d0df;
        color: #284557;
    }
    .navigationButton-non{
        color: #dce8ef;

        &:hover {
            background-color: #284557;
            transition-duration: 250ms;
        }
    }`;

/*
    PARENT GRID
*/

export const Grid = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 4.3rem auto;
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

export const ShipmentGrid = styled.div`
    display: grid;
    grid-template-columns: 65vw auto;
    grid-template-rows: 34vw auto;
    width: 100%;
    height: 100%;
`;
