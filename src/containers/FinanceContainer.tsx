import React from "react";
import { DashboardPlacement } from "./ContainerStyles";
import Fade from "./Test";

const FinanceContainer: React.FC = () => {
    return (
        <DashboardPlacement>
            <Fade in={true} />
        </DashboardPlacement>
    );
};

export default FinanceContainer;
