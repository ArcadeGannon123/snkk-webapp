import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import ListSubheader from '@mui/material/ListSubheader';
import { Diversity1Outlined } from '@mui/icons-material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function MultipleSelectCheckmarks({label,options,selection,setSelection}) {

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelection(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: '70%', m:'10px 0' }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selection}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        > 

          <ListSubheader>Izquierda Derecha</ListSubheader>
            <MenuItem key={'izquierda'} value={'izquierda'} >
              <Checkbox checked={selection.indexOf('izquierda') > -1} />
              <ListItemText primary={'izquierda'} />
            </MenuItem>  
            <MenuItem key={'centro'} value={'centro'} >
              <Checkbox checked={selection.indexOf('centro') > -1} />
              <ListItemText primary={'centro'} />
            </MenuItem>  
            <MenuItem key={'derecha'} value={'derecha'} >
              <Checkbox checked={selection.indexOf('derecha') > -1} />
              <ListItemText primary={'derecha'} />
            </MenuItem> 
          <ListSubheader>Conservador Progresista</ListSubheader>
            <MenuItem key={'conservador'} value={'conservador'} >
              <Checkbox checked={selection.indexOf('conservador') > -1} />
              <ListItemText primary={'conservador'} />
            </MenuItem>               
            <MenuItem key={'neutral'} value={'neutral'} >
              <Checkbox checked={selection.indexOf('neutral') > -1} />
              <ListItemText primary={'neutral'} />
            </MenuItem>  
            <MenuItem key={'progresista'} value={'progresista'} >
              <Checkbox checked={selection.indexOf('progresista') > -1} />
              <ListItemText primary={'progresista'} />
            </MenuItem> 
          <ListSubheader>Sesgo Ecónomico</ListSubheader>
            <MenuItem key={'igualdad'} value={'igualdad'} >
              <Checkbox checked={selection.indexOf('igualdad') > -1} />
              <ListItemText primary={'igualdad'} />
            </MenuItem>               
            <MenuItem key={'neutro'} value={'neutro'} >
              <Checkbox checked={selection.indexOf('neutro') > -1} />
              <ListItemText primary={'neutro'} />
            </MenuItem>  
            <MenuItem key={'libertad'} value={'libertad'} >
              <Checkbox checked={selection.indexOf('libertad') > -1} />
              <ListItemText primary={'libertad'} />
            </MenuItem> 
          <ListSubheader>Sensacionalismo</ListSubheader>
            <MenuItem key={'no sensacionalista'} value={'no sensacionalista'} >
              <Checkbox checked={selection.indexOf('no sensacionalista') > -1} />
              <ListItemText primary={'no sensacionalista'} />
            </MenuItem>               
            <MenuItem key={'sensacionalista'} value={'sensacionalista'} >
              <Checkbox checked={selection.indexOf('sensacionalista') > -1} />
              <ListItemText primary={'sensacionalista'} />
            </MenuItem> 
          <ListSubheader>Lenguaje ofensivo</ListSubheader>
            <MenuItem key={'no ofensivo'} value={'no ofensivo'} >
              <Checkbox checked={selection.indexOf('no ofensivo') > -1} />
              <ListItemText primary={'no ofensivo'} />
            </MenuItem>               
            <MenuItem key={'ofensivo'} value={'ofensivo'} >
              <Checkbox checked={selection.indexOf('ofensivo') > -1} />
              <ListItemText primary={'ofensivo'} />
            </MenuItem> 
          
        </Select>
      </FormControl>
    </div>
  );
}