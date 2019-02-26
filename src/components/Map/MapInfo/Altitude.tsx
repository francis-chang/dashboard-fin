import { axisLeft } from "d3-axis";
import { scaleLinear } from "d3-scale";
import { select } from "d3-selection";
import React, { useEffect, useRef, useState } from "react";
import { AltitudeContainer } from "../../ComponentStyles";

const Altitude: React.FC = () => {
    const axisRef = useRef<SVGGElement | null>(null);
    const chartRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<SVGSVGElement | null>(null);

    const [selection, setSelection] = useState<SVGSelection>(null);
    const [drawnChart, setDrawn] = useState(false);
    const [width, setWidth] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);

    useEffect(() => {
        if (!selection && containerRef.current) {
            setSelection(select(chartRef.current));
            setWidth(containerRef.current.getBoundingClientRect().width);
            const mapOnGrid = document.getElementById("mapOnGrid");
            if (mapOnGrid) {
                const boundHeight =
                    mapOnGrid.getBoundingClientRect().height * 0.4;
                setHeight(boundHeight);
            }
        }
        if (!drawnChart) {
            drawChart();
        }
    });

    const drawChart = () => {
        if (selection && width && height) {
            selection
                .append("rect")
                .attr("class", "alt-rect-outer")
                .attr("x", `${width / 2}`)
                .attr("y", 10)
                .attr("width", 50)
                .attr("height", `${height - 20}`);

            let y = scaleLinear()
                .domain([0, 100])
                .range([height - 30, 5]);

            selection
                .append("rect")
                .attr("class", "alt-rect-inner")
                .attr("x", `${width / 2 + 5.5}`)
                .attr("y", y(100))
                .attr("width", 39)
                .attr("height", `${height - y(100)}`);

            const axisSelection = select(axisRef.current).attr(
                "transform",
                `translate(${width / 2}, 10)`
            );

            const yAxis = axisLeft(y);

            //@ts-ignore
            axisSelection.call(yAxis).attr("class", "y-axis");

            setDrawn(true);
        }
    };

    return (
        <AltitudeContainer>
            <svg ref={containerRef} width="100%" height="100%">
                <g ref={axisRef} />
                <g ref={chartRef} />
            </svg>
        </AltitudeContainer>
    );
};

export default Altitude;
