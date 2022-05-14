import React from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Navbar from '../components/navbar/Navbar'


function GetIcon(_iconSize, forecast) {

    return L.icon({
        iconUrl: require("../Static/Icons/" + forecast + ".png"),
        iconSize: [_iconSize]
    })
}

export default function MyMap() {
    const position = [36.4667, 2.8167]


    const locations = [
        { "name": "north", "position": [36.4667, 2.8167], "size": 30, "forecast": "fire" },
        { "name": "north", "position": [36, 2], "size": 30, "forecast": "fire" },
        { "name": "north", "position": [36.5, 2.9], "size": 30, "forecast": "fire" },
        { "name": "north", "position": [35.4667, 2], "size": 30, "forecast": "fire" },
        { "name": "north", "position": [36.1, 2.8], "size": 30, "forecast": "fire" },
        { "name": "north", "position": [36.6, 3], "size": 30, "forecast": "fire" },
        { "name": "north", "position": [36.4675, 2.9167], "size": 30, "forecast": "fire" },
        { "name": "north", "position": [36.5, 2.5], "size": 30, "forecast": "fire" },
        { "name": "north", "position": [36.5667, 2.8267], "size": 30, "forecast": "fire" },
    ]

    return (
        <div>
            <Navbar />
            <MapContainer className="map"
                center={position}
                zoom={10}
                style={{ height: 1000, width: "100%" }}
            >
                <TileLayer
                    maxZoom={20}
                    attribution='© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    className='map-tiles'
                    url="https://api.mapbox.com/styles/v1/wafabeny/cl32tsqr2000714o6amv9t2up/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoid2FmYWJlbnkiLCJhIjoiY2wyZHV1YXBiMDV6MTNkbnl3MG1ncnRuYyJ9.A86o5y7Dd5kzSBdYExXuWA"
                /*url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"*/
                />
                {locations.map((location) => (
                    <Marker
                        position={location.position}
                        icon={GetIcon(location.size, location.forecast)}>
                        <Popup>
                            {location.name} - {location.forecast}
                        </Popup>
                    </Marker>
                ))}

            </MapContainer>
        </div>
    )
}
