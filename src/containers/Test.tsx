import React from "react";
const duration = 2000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
};

const transitionStyles: any = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 }
};

const Fade = ({ in: inProp }: { in: any }) => <div>FUCK THIS</div>;

export default Fade;
