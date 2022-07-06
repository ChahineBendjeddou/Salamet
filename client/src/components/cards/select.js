import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [state, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <Box
    sx={{ minWidth: 120, maxWidth:510, bgcolor: '#212121', }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"  sx={{ color: 'white'}}>State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="State"
          onChange={handleChange}
        >
          <MenuItem value={16}>Algeria</MenuItem>
          <MenuItem value={9}>Blida</MenuItem>
          <MenuItem value={6}>Bejaia</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
