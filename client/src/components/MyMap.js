import React, { useState, useEffect } from 'react'
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import './MyMap.css'
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Routing from "./Routing";
import citiesData from './data.json';


function GetIcon(_iconSize, forecast) {

    return L.icon({
        iconUrl: require("../Static/Icons/" + forecast + ".png"),
        iconSize: [_iconSize]
    })
}

const useStyles = makeStyles(theme => ({
    inputRoot: {
      color: "blue",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      }
    },
  }));

export default function MyMap() {
    const classes = useStyles();
    const position = [36.4667, 2.8167]

    const [cities, setCities] = useState([]);
    const [sourceCity, setSourceCity] = useState({});
    const [destinationCity, setDestinationCity] = useState({});
    
  
    useEffect(() => {
      citiesData.map((eachCity) => 
          setCities( cities => [ ...cities, eachCity ] )
      )   
    }, []);

    const locations = [
        { "name": "car", "position": [36.4667, 2.8167], "size": 30, "forecast": "fire" },
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
        <div className="leaflet-container">
             <div className="container">        
        <Autocomplete
          id="combo-box-demo"
          options={cities}
          onChange={(event, value) => setSourceCity(value)}          
          classes={classes}
          size='small'          
          PaperComponent={({ children }) => (
            <Paper style={{ background: "blue" }} elevation={10}>{children}</Paper>
          )}          
          getOptionLabel={(option) => `${option.city}, ${option.country}`}
          inputRoot={{borderColor: "white"}}
          style={{ width: 300, paddingBottom: '5%' }}
          renderInput={(params) => <TextField 
            {...params} 
            color="secondary" 
            label="Source" 
            variant="outlined" 
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
          }
        />
        <Autocomplete
          id="combo-box-demo1"
          classes={classes}
          onChange={(event, value) => setDestinationCity(value)}          
          options={cities}
          size='small'
          PaperComponent={({ children }) => (
            <Paper style={{ background: "blue" }} elevation={10}>{children}</Paper>
          )} 
          getOptionLabel={(option) => `${option.city}, ${option.country}`}
          style={{ width: 300, paddingBottom: '5%' }}          
          renderInput={(params) => <TextField 
            {...params} 
            color="secondary" 
            label="Destination" 
            variant="outlined" 
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
          }
        />
    </div>
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
                            <h1 className='h1'>Accident</h1>
                            {location.name} - {location.forecast}

                            <p className='p'>Description of the accident how did it happen the causes number of death</p>
                            <div className='photo'>
                            <img className="imgs" src={require('../assets/car.jpg')} />
                            </div>
                        </Popup>
                    </Marker>
                ))}
       <Routing sourceCity={sourceCity} destinationCity={destinationCity}/>       
  </MapContainer>
        </div>
    )
}
