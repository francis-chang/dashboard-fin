import { easeElastic } from "d3-ease";
import { interpolate } from "d3-interpolate";
import { select } from "d3-selection";
import { arc, Arc, DefaultArcObject } from "d3-shape";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
    MapInfoOdom,
    MapInfoOdomContainer,
    MapInfoTitle
} from "../../ComponentStyles";
import { MapContext } from "../MapContext";

let data = {
    previous: 0,
    value: 0,
    size: 490,
    update: () => {
        // MAX: 350 MIN: 330
        return Math.floor(Math.random() * 20 + 320);
    }
};

const Odometer: React.FC = () => {
    const odometerRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<SVGSVGElement | null>(null);

    const { currentShipment } = useContext(MapContext);

    const [odomSelection, setSelection] = useState<SVGSelection>(null);
    const [odomDrawn, setOdomDrawn] = useState(false);
    const [width, setWidth] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);
    const [label, setLabel] = useState<D3SVGTextSelection>(null);

    let arcGenerator: Arc<any, DefaultArcObject> | null = null;
    let outerArcGenerator: Arc<any, DefaultArcObject> | null = null;

    useEffect(() => {
        if (!odomSelection) {
            setSelection(select(odometerRef.current));
            if (containerRef.current) {
                setWidth(containerRef.current.getBoundingClientRect().width);

                const mapOnGrid = document.getElementById("mapOnGrid");
                if (mapOnGrid) {
                    setHeight(mapOnGrid.getBoundingClientRect().height * 0.35);
                }
            }
        }

        if (width && height) {
            arcGenerator = arc()
                .innerRadius((height - 80) / 2)
                .outerRadius((height - 40) / 2)
                .startAngle(0)
                .endAngle(function(d: any) {
                    return (d.value / d.size) * (Math.PI * 2);
                });

            outerArcGenerator = arc()
                .innerRadius((height - 90) / 2)
                .outerRadius((height - 30) / 2)
                .startAngle(0)
                .endAngle(Math.PI * 2);
        }

        if (!odomDrawn) {
            drawOdometer();
        }

        if (odomDrawn && currentShipment) {
            data.value = 0;
            data.previous = 0;
            if (currentShipment.eta !== "canceled") {
                update();
            }
        }
        if (odomDrawn && !currentShipment) {
            data.value = 0;
            data.previous = 0;
        }
    });

    const arcTween = (b: any) => {
        var i = interpolate({ value: b.previous }, b);

        return function(t: number) {
            if (arcGenerator) {
                return arcGenerator(i(t));
            }
        };
    };

    const update = () => {
        if (currentShipment && label) {
            data.previous = data.value;
            data.value = data.update();
            odomSelection
                .select(".odom-foreground")
                .transition()
                .ease(easeElastic)
                .duration(2000)
                .attrTween("d", () => arcTween(data) as any)
                .on("end", () =>
                    setTimeout(update, Math.floor(Math.random() * 3000 + 2000))
                );

            label.text(`${data.value}`);
        }
    };

    const drawOdometer = () => {
        if (odomSelection && width && height && !odomDrawn) {
            odomSelection
                .attr("transform", `translate(${width / 2}, ${height / 2})`)
                .datum(data)
                .append("path")
                .attr("class", "odom-background")
                .attr("d", outerArcGenerator as any);

            const label = odomSelection
                .append("text")
                .attr("class", "odom-label")
                .attr("dy", ".35em");
            label.text(`${data.value}`);

            const path = odomSelection
                .append("path")
                .attr("class", "odom-foreground")
                .attr("d", arcGenerator as any);

            setOdomDrawn(true);
            setLabel(label);
        }
    };

    return (
        <MapInfoOdomContainer>
            <MapInfoTitle>Flight Speed-knots</MapInfoTitle>
            <MapInfoOdom>
                <svg ref={containerRef} width="100%" height="100%">
                    <g ref={odometerRef} />
                </svg>
            </MapInfoOdom>
        </MapInfoOdomContainer>
    );
};

export default Odometer;
