"use client"

import { MapProvider } from "../location.provider";
import { GoogleMap } from "@react-google-maps/api";
import { GoogleMapComponentInterface } from "./google-map.component.interface";

const GoogleMapComponent = (params: GoogleMapComponentInterface) => {
    const defaultMapContainerStyle = {
        width: "100%",
        height: "316px",
    };
    
    return (
        <MapProvider>
            <div className="w-full">
                <GoogleMap mapContainerStyle={defaultMapContainerStyle}></GoogleMap>
            </div>
        </MapProvider>
    );
}

export default GoogleMapComponent;