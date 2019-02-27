import { axisLeft } from "d3-axis";
import { scaleLinear } from "d3-scale";
import { select } from "d3-selection";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AltitudeContainer } from "../../ComponentStyles";
import { MapContext } from "../MapContext";

const Altitude: React.FC = () => {
    const { currentShipment } = useContext(MapContext);
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

        if (drawnChart && selection && height) {
            let y = scaleLinear()
                .domain([0, 100])
                .range([height - 30, 5]);
            selection
                .select(".alt-rect-inner")
                .attr("height", 0)
                .attr("y", y(0));
            update();
        }
    });

    const update = () => {
        if (selection && currentShipment && height) {
            let y = scaleLinear()
                .domain([0, 100])
                .range([height - 30, 5]);
            const ran = Math.floor(Math.random() * 50 + 40);
            selection
                .select(".alt-rect-inner")
                .transition()
                .duration(750)
                .attr("y", y(ran))
                .attr("height", `${height - 30 - y(ran)}`)
                .on("end", () => {
                    setTimeout(update, Math.floor(Math.random() * 3000 + 2000));
                });
        }
    };

    const drawChart = () => {
        if (selection && width && height) {
            let y = scaleLinear()
                .domain([0, 100])
                .range([height - 30, 5]);

            selection
                .append("rect")
                .attr("transform", `translate(0, 10)`)
                .attr("class", "alt-rect-outer")
                .attr("x", `${width / 2}`)
                .attr("y", y(100))
                .attr("width", 30)
                .attr("height", y(0));

            selection
                .append("rect")
                .attr("transform", `translate(0, 10)`)
                .attr("class", "alt-rect-inner")
                .attr("x", `${width / 2 + 5}`)
                .attr("y", y(47))
                .attr("width", 20)
                .attr("height", `${height - 30 - y(47)}`);

            const axisSelection = select(axisRef.current).attr(
                "transform",
                `translate(${width / 2}, 10)`
            );

            const yAxis = axisLeft(y)
                .ticks(5)
                .tickSize(15);

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
