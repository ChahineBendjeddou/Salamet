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
import axios from 'axios'

const newData = citiesData.filter((city) => {
  return city.country === 'Algeria'

})


function GetIcon(_iconSize, forecast) {

  return L.icon({
    iconUrl: 'https://res.cloudinary.com/chahineyelpcamp/image/upload/v1655510027/Salamet/fire_syq9kq.png',//require("../Static/Icons/fire.png"),
    iconSize: [_iconSize]
  })
}

const useStyles = makeStyles(theme => ({
  inputRoot: {
    color: "white",
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

  const [accidents, setAccidents] = useState(async () => {
    await axios.get('/report/getAllAccidents', { withCredentials: true })
      .then(res => setAccidents(res.data))
      .catch(err => console.log(err))
  })

  console.log(Array.isArray(accidents))
  console.log(accidents)
  useEffect(() => {
    newData.map((eachCity) =>
      setCities(cities => [...cities, eachCity])
    )
  }, []);

  const locations = [
    { "type": "car", "position": [36.4667, 2.8167], 'createdAt': '2022-06-01' },
    { "type": "car", "position": [36, 2], 'createdAt': '2022-06-01' },
    { "type": "car", "position": [36.5, 2.9], 'createdAt': '2022-06-01' },
    { "type": "car", "position": [35.4667, 2], 'createdAt': '2022-06-01' },
    { "type": "car", "position": [36.1, 2.8], 'createdAt': '2022-06-01' },
    { "type": "car", "position": [36.6, 3], 'createdAt': '2022-06-01' },
    { "type": "car", "position": [36.4675, 2.9167], 'createdAt': '2022-06-01' },
    { "type": "car", "position": [36.5, 2.5], 'createdAt': '2022-06-01' },
    { "type": "car", "position": [36.5667, 2.8267], 'createdAt': '2022-06-01' },
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
            <Paper style={{ background: "white", color: "black" }} elevation={10}>{children}</Paper>
          )}
          getOptionLabel={(option) => `${option.city}, ${option.country}`}
          inputRoot={{ borderColor: "white", color: "white" }}
          style={{ width: 300, paddingBottom: '5%', color: "white" }}
          renderInput={(params) => <TextField
            {...params}
            color="white"
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
            <Paper style={{ background: "white", color: "black" }} elevation={10}>{children}</Paper>
          )}
          getOptionLabel={(option) => `${option.city}, ${option.country}`}
          style={{ width: 300, paddingBottom: '5%' }}
          renderInput={(params) => <TextField
            {...params}
            color="white"
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
            icon={GetIcon(30, '')}>
            <Popup>
              <h1 className='h1'>Accident</h1>
              <h3>{location.type} - {location.createdAt.slice(0, 10)}</h3>
              <p className='p'>Description of the accident how did it happen the causes number of death</p>
              <div className='photo'>
                <img className="imgs" src='https://res.cloudinary.com/chahineyelpcamp/image/upload/v1655509840/Salamet/car_neet3j.jpg' />{/*src={require('../assets/car.jpg')} */}
              </div>
            </Popup>
          </Marker>
        ))}
        {Array.isArray(accidents) && accidents.map((accident) => (
          <Marker
            position={accident.location}
            icon={GetIcon(30, '')}>
            <Popup>
              <h1 className='h1'>Accident</h1>
              <h3 >{accident.type} <br/> '{accident.createdAt.slice(0, 10)}'</h3>
              <p className='p'>{accident.description}</p>
              <div className='photo'>
                <img className="imgs" src={accident.images[0] ? accident.images[0].url : 'https://res.cloudinary.com/chahineyelpcamp/image/upload/v1655509840/Salamet/car_neet3j.jpg'} />{/*src={require('../assets/car.jpg')} */}
              </div>
            </Popup>
          </Marker>
        ))}
        <Routing sourceCity={sourceCity} destinationCity={destinationCity} />
      </MapContainer>
    </div>
  )
}
