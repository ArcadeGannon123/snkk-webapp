import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({label,options,selection,setSelection}) {

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 , mb:'10px'}}>
      <FormControl fullWidth variant="filled">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selection}
          label={label}
          onChange={handleChange}
        >
        {options.map((option,i)=>(
          <MenuItem key={i} value={i}>{option}</MenuItem>
        ))}
        </Select>
      </FormControl>
    </Box>
  );
}