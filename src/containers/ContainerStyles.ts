import styled, { createGlobalStyle } from "styled-components";

/*
    #182a34 - DARKEST PRUSSIAN BLUE
    #203746 - DARK PRUSSIAN BLUE
    #284557 - PRUSSIAN BLUE
    #49779c - MEDIUM BLUE
    #b9d0df - SKY BLUE
    #dce8ef - OFF WHITE BLUE
    #eef3f7 - ICE WHITE
    

    #ff5050 - NEGATIVE RED

    #ffb366 - WARNING ORANGE
    
    #00cc66 - POSITIVE GREEN
*/

/*
    GLOBAL STYLES
*/

export const Global = createGlobalStyle`

/* appear - on page load */
.fade-appear {
    opacity: 0;
    z-index: 1;
}
.fade-appear.fade-appear-active {
  opacity: 1;
  transition: opacity 300ms linear;
}

/* enter */
.fade-enter {
  opacity: 0;
  z-index: 1;
}
.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms linear 300ms;
}

/* exit */
.fade-exit {
    opacity: 1;
}
.fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 300ms linear;
}
.fade-exit-done {
  opacity: 0;
}


    @font-face {
        font-family: Chivo;
        src: url('./assets/fonts/Chivo/Chivo-Regular.ttf');
    }

    @font-face {
        font-family: Rubik;
        src: url('./assets/fonts/Rubik-Regular.ttf');
    }
    
    body{
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: Chivo;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
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
    }

    .states{
        fill: #dce8ef;
        stroke-width: 1.5px;
        stroke: #203746;
        stroke-dasharray: 1250;
        stroke-dashoffset: 1250;
        animation: dash 2s linear forwards
    }

    @keyframes dash{
        to{
            stroke-dashoffset: 0;
        }
    }

    .flight-path{
        fill: none;
        stroke: #49779c;
        stroke-width: 2px;
        stroke-dasharray: 5 2;
    }

    .shipment-circle{
        fill: #ffb366;
        cursor: pointer;
    }

    .shipment-circle-canceled{
        fill: #ff5050;
        cursor: pointer;
    }

    .flight-traveled{
        fill: none;
        stroke: #182a34;
        stroke-width: 3px;
        stroke-linecap: round;
    }
    
    .flight-canceled{
        fill: none;
        stroke-width: 3px;
        stroke-linecap: round;
        stroke: #ff5050;
        opacity: 0.5;
    }

    .odom-background{
        fill: none;
        stroke: #182a34;
        stroke-width: 3px;
        shape-rendering: auto;
    }

    .odom-foreground {
        fill: #182a34;
        shape-rendering: auto;
    }

    .odom-label{
        font-size: 2.2rem;
        fill: #182a34;
        text-anchor: middle;
    }

    .y-axis{
        color: #182a34;
        font-size: .8rem;
    }
    
    .alt-rect-outer{
        fill: none;
        stroke: #182a34;
        stroke-width: 3px;
    }

    .alt-rect-inner{
        fill: #182a34;
    }

    .map-info-exit {
        color: #182a34;
        &:hover {
            transform: rotate(90deg);
            color: #ff5050;
            transition-duration: 350ms;
        }
    }
    
`;

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
    grid-template-columns: 60vw auto;
    grid-template-rows: 36vw auto;
    width: 100%;
    height: 100%;
`;
