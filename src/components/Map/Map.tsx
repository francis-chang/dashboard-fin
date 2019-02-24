import { json } from "d3-fetch";
import { geoAlbers, geoPath, GeoProjection } from "d3-geo";
import { select } from "d3-selection";
import React, { useEffect, useRef, useState } from "react";
import { feature } from "topojson";
import { MapOnGrid } from "../ComponentStyles";

const Map: React.FC = () => {
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
    */
    const [mapSelection, setMapSelection] = useState<SVGSelection>(null);
    const [usMap, setMap] = useState<any>(null);
    const [mapDrawn, setMapDrawn] = useState(false);

    /*
        projection and paths
        path was not working with used with useState
        so thus I just used a property 
    */
    const projection: GeoProjection = geoAlbers();
    let path: SVGGeoPath = null;

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
        if (!mapSelection && !usMap) {
            setMapSelection(select(mapRef.current));
            fetchMap();
        }
        if (!path && svgContainerRef.current) {
            const width = svgContainerRef.current.getBoundingClientRect().width;
            const height = svgContainerRef.current.getBoundingClientRect()
                .height;
            const scale = 1.2 * width;
            projection.translate([width / 2, height / 2]).scale(scale);
            const projectedPath = geoPath().projection(projection);
            path = projectedPath;
        }
        if (!mapDrawn && path) {
            drawMap();
        }
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

    return (
        <MapOnGrid>
            <svg width="100%" height="100%" ref={svgContainerRef}>
                <g ref={mapRef} />
            </svg>
        </MapOnGrid>
    );
};

export default Map;
