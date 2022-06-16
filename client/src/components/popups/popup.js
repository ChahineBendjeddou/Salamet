import React, { useEffect } from 'react'
import './popup.css'
import "../../routes/AddPost/add.css"
import './addImage.css'
import ambulance from '../../assets/ambulance.jpg'
import addImg from './addImage'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 450,
    },
  },
};

const names = [
  'Car',
  'multiple car',
  'Truck',
  'Multiple Trucks',
  'Heavey weight',
  'Multiple heavy weight',
  'Light weight',
  'Multiple light weight',
  'motocycle',
  'bicycle',
  'Person',
  'People',
  'Object',
 
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


function Popup({ closePopup }) {

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  }

  useEffect(() => {
    addImg()
  }, [])

  // return (props.trigger) ? (
  return (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => closePopup(false)}> X </button>

        <div className="form">
          <form>
            <h1>REPORT AN ACCIDENT</h1>
            <label>
              <img
                src={ambulance}
                id='image'
                alt=""
                className="addImg" />
            </label>
            <label>Phone number</label>
            <input type="text" id='phone' name='phone' required placeholder="Phone number"></input>
            <label>Description</label>
            <textarea placeholder="Add a description"></textarea>

                <FormControl 
                 sx={{ m: 1,
                       width: 'auto',
                       color: "white" }} >
                <InputLabel id="demo-multiple-chip-label">Type</InputLabel>

                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={
                  <OutlinedInput 
                    id="select-multiple-chip"
                    label="Chip" 
                    sx={{background:"white"}} />}
                  renderValue={(selected) => (
                    <Box 
                    sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, color:"white" }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >

                  {names.map((name) => (

                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}

                </Select>
              </FormControl>

            <input id="fileInput" accept="image/*" type="file" style={{ display: "none" }} />
            <div className="images" id='images'>
              <div className="pic" >add Picture</div>
            </div>
            <button className="button" >SEND</button>
          </form>
        </div>
      </div>

    </div>
  )
  // : "";

}


export default Popup;