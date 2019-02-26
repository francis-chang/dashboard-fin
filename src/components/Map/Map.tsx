import { easeLinear } from "d3-ease";
import { json } from "d3-fetch";
import { geoAlbers, geoPath, GeoProjection } from "d3-geo";
import { event, select } from "d3-selection";
import "d3-transition";
import { zoom, zoomIdentity } from "d3-zoom";
import React, { useContext, useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import { feature } from "topojson";
import { MapOnGrid } from "../ComponentStyles";
import { MapContext } from "./MapContext";

const Map: React.FC = () => {
    /**
     *
     */
    const {
        shipments,
        filteredShipments,
        setCurrentShipment,
        currentShipment
    } = useContext(MapContext);
    /*
        mapRef is used to apppend the map
        svgContainerRef is used to calculate width and height
    */
    const mapRef = useRef<SVGSVGElement>(null);
    const svgContainerRef = useRef<SVGSVGElement>(null);

    /*
        mapSelection is the d3 selection of mapRef
        usMap is the json object of the us map
        //maybe its not performant to put the whole json in state
        mapDrawn is used for state rendering to check if map is rendered
        shipmentsDrawn is used for stateful rendering to chick if shipments have been drawn
    */
    const [mapSelection, setMapSelection] = useState<SVGSelection>(null);
    const [usMap, setMap] = useState<any>(null);
    const [mapDrawn, setMapDrawn] = useState(false);
    const [shipmentsDrawn, setShipmentsDrawn] = useState(false);

    // a conditional to track if a shipment needs to be followed
    // no need for this to be a state
    let follow: boolean = false;

    /*
        projection and paths
        path was not working with used with useState
        so thus I just used a property 
    */
    const projection: GeoProjection = geoAlbers();
    let path: SVGGeoPath = null;

    let currentCoordinates: number[] | null = null;

    async function fetchMap() {
        const mapRequest = json("assets/us.json");
        try {
            const result = await mapRequest;
            setMap(result);
        } catch (err) {
            throw err;
        }
    }

    useEffect(() => {
        /**
         * If the element is not selected by d3 nor if there is the Map Object
         * select the selection and store it in state
         * fetch the map and store that in state as well
         */
        if (!mapSelection && !usMap) {
            setMapSelection(select(mapRef.current));
            fetchMap();
        }
        /**
         * if there is a reference to the svg and if a geoPath is not yet projected
         * figure out the dimensions needed, and set that with projection and scale
         * then set the property "path" with the geoPath
         */
        if (!path && svgContainerRef.current) {
            const width = svgContainerRef.current.getBoundingClientRect().width;
            const height = svgContainerRef.current.getBoundingClientRect()
                .height;
            const scale = 1.2 * width;
            projection.translate([width / 2, height / 2]).scale(scale);
            const projectedPath = geoPath().projection(projection);
            path = projectedPath;
        }
        /**
         * finally draw the map once path is available
         * at the end of drawMap function,
         * it will set the mapDrawn to true to prevent rerenders
         */
        if (!mapDrawn && path) {
            drawMap();
        }

        if (!shipmentsDrawn) {
            drawShipments();
        }
        filterDrawnShipments();
        zoomToCurrentShipment();
    });

    const drawMap = () => {
        if (mapSelection && usMap && path) {
            const states: any = feature(usMap, usMap.objects.states);
            const stateFeatures = states["features"];

            mapSelection
                .selectAll("states")
                .data(stateFeatures)
                .enter()
                .append("path")
                .attr("class", "states")
                .attr("d", path);

            setMapDrawn(true);
        }
    };

    const zoomed = (): void => {
        const translate = `translate(${event.transform.x}, ${
            event.transform.y
        })`;
        const scale = `scale(${event.transform.k}, ${event.transform.k})`;
        const transformStr = `${translate} ${scale}`;
        mapSelection!.attr("transform", transformStr);
    };
    const zBehavior = zoom().on("zoom", zoomed);

    const transform = () => {
        if (currentCoordinates && svgContainerRef.current) {
            const width = svgContainerRef.current.getBoundingClientRect().width;
            const height = svgContainerRef.current.getBoundingClientRect()
                .height;
            return zoomIdentity
                .translate(width / 2, (height * 0.6) / 2)
                .scale(4)
                .translate(-currentCoordinates[0], -currentCoordinates[1]);
        }
        return zoomIdentity.scale(1);
    };

    const zoomToCurrentShipment = () => {
        if (currentShipment && mapSelection) {
            let currentNode = mapSelection
                .select(`.${currentShipment.id}`)
                .attr("transform");
            let leftIndex = currentNode.indexOf(",");
            let x = +currentNode.slice(10, leftIndex);
            let y = +currentNode.slice(leftIndex + 1, currentNode.length - 1);
            currentCoordinates = [x, y];
            follow = true;
            mapSelection
                .transition()
                .duration(1000)
                .call(zBehavior.transform as any, transform)
                .on("end", () => {
                    mapSelection.call(followShipment);
                });
        } else if (mapSelection) {
            mapSelection
                .transition()
                .duration(1000)
                .call(zBehavior.transform as any, transform);
        }
    };

    const followShipment = () => {
        if (currentShipment && mapSelection && follow) {
            let currentNode = mapSelection
                .select(`.${currentShipment.id}`)
                .attr("transform");
            let leftIndex = currentNode.indexOf(",");
            let x = +currentNode.slice(10, leftIndex);
            let y = +currentNode.slice(leftIndex + 1, currentNode.length - 1);
            currentCoordinates = [x, y];
            mapSelection
                .transition()
                .delay(3000)
                .duration(100)
                .call(zBehavior.transform as any, transform)
                .on("end", () => {
                    if (follow && currentCoordinates) {
                        mapSelection.call(followShipment);
                    }
                });
        }
    };

    const getFlightPath = (from: number[], to: number[]) => {
        return {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    geometry: {
                        type: "LineString",
                        coordinates: [from, to]
                    },
                    properties: {}
                }
            ]
        };
    };

    function translateAlong(path: SVGPathElement, prog: number, id: string) {
        return function() {
            var l = path.getTotalLength();
            return function(t: number) {
                var calc = t * (1 - prog) + prog;
                var p = path.getPointAtLength(calc * l);
                // setCoordinates({ ...currentCoordinates, [id]: [p.x, p.y] });
                return `translate(${p.x}, ${p.y})`;
            };
        };
    }

    const filterDrawnShipments = () => {
        if (mapSelection && usMap && !currentShipment) {
            shipments.forEach((shipment, i) => {
                let contains = false;
                filteredShipments.forEach(filShipment => {
                    if (shipment.id === filShipment.id) {
                        contains = true;
                    }
                });
                if (!contains) {
                    mapSelection
                        .select(`.flight-path${i}`)
                        .attr("opacity", "0.15");
                    mapSelection
                        .select(`.flight-traveled${i}`)
                        .attr("opacity", "0.15");
                    mapSelection
                        .select(`.${shipment.id}`)
                        .attr("opacity", "0.15");
                } else {
                    mapSelection
                        .select(`.flight-path${i}`)
                        .attr("opacity", "1");
                    mapSelection
                        .select(`.flight-traveled${i}`)
                        .attr("opacity", "1");
                    mapSelection.select(`.${shipment.id}`).attr("opacity", "1");
                }
            });
        } else if (mapSelection && usMap && currentShipment) {
            shipments.forEach((shipment, i) => {
                if (shipment.id !== currentShipment.id) {
                    mapSelection
                        .select(`.flight-path${i}`)
                        .attr("opacity", "0.15");
                    mapSelection
                        .select(`.flight-traveled${i}`)
                        .attr("opacity", "0.15");
                    mapSelection
                        .select(`.${shipment.id}`)
                        .attr("opacity", "0.15");
                } else {
                    mapSelection
                        .select(`.flight-path${i}`)
                        .attr("opacity", "1");
                    mapSelection
                        .select(`.flight-traveled${i}`)
                        .attr("opacity", "1");
                    mapSelection.select(`.${shipment.id}`).attr("opacity", "1");
                }
            });
        }
    };

    const drawShipments = () => {
        if (mapSelection && usMap) {
            shipments.map((shipment, i) => {
                let pathFeatures = getFlightPath(
                    shipment.from.lnglat,
                    shipment.to.lnglat
                ).features;

                let flightPath = mapSelection
                    .selectAll(`.flight-path${i}`)
                    .data(pathFeatures)
                    .enter()
                    .append("path")
                    .attr("class", `flight-path flight-path${i}`)
                    .attr("d", path as any);

                let totalLength = flightPath.node().getTotalLength();
                let lengthTraveled = totalLength * shipment.progress;
                let lengthToBeTraveled = totalLength - lengthTraveled;

                let remaining = 1 - shipment.progress;
                let minRemaining = remaining * shipment.flightDuration;
                let msRemaining = Math.floor(minRemaining * 60000);

                let flightTraveled = mapSelection
                    .selectAll(`flight-traveled${i}`)
                    .data(pathFeatures)
                    .enter()
                    .append("path")
                    .attr("class", `flight-traveled flight-traveled${i}`)
                    .attr(
                        "stroke-dasharray",
                        `${lengthTraveled} ${lengthToBeTraveled + 10}`
                    )
                    .transition()
                    .duration(msRemaining)
                    .ease(easeLinear)
                    .attr("stroke-dasharray", `${totalLength} 0`)
                    .attr("d", path as any);

                let circle = mapSelection
                    .append("circle")
                    .attr("class", `shipment-circle ${shipment.id}`)
                    .attr("r", "5px")
                    .on("click", () => {
                        setCurrentShipment(shipment);
                    });

                circle
                    .transition()
                    .duration(msRemaining)
                    .ease(easeLinear)
                    .attrTween(
                        "transform",
                        translateAlong(
                            flightPath.node(),
                            shipment.progress,
                            shipment.id
                        )
                    );
            });

            setShipmentsDrawn(true);
        }
    };

    const animateInfo = useSpring({
        width: "100%",
        height: currentShipment ? "40%" : "0%",
        position: "absolute",
        left: "0rem",
        bottom: "0rem",
        backgroundColor: "#182a34",
        opacity: 0.7
    });

    return (
        <MapOnGrid>
            <svg width="100%" height="100%" ref={svgContainerRef}>
                <g ref={mapRef} />
            </svg>

            <animated.div style={animateInfo} />
        </MapOnGrid>
    );
};

export default Map;
