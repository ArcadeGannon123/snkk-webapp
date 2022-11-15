import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({label,options,setSelection}) {

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: '50%' }}
      renderInput={(params) => <TextField {...params} label={label} />}     
      onChange={(event, value) => setSelection(value)}
    />
  );
}
