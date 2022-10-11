import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function FormDialog() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function Selection(){
    return(
      <Box sx={{ minWidth: 120, padding:'0.5rem 0'}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sesgo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Sesgo"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    )
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} startIcon={<QueryStatsIcon/>}>        
        Evaluar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Evaluar</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{fontWeight:'500'}}>
            indique su percepción del sesgo para los siguientes campos:
          </DialogContentText>
          <DialogContentText >
            Sesgo Izquierda-Derecha:
          </DialogContentText>
          {Selection()}
          <DialogContentText >
            Presencia de lenguaje ofensivo:
          </DialogContentText>
          {Selection()}
          <DialogContentText >
            ¿Es una noticia sensacionalista?:
          </DialogContentText>
          {Selection()}
          <DialogContentText >
            Sesgo conservador o progresista:
          </DialogContentText>
          {Selection()}
          <DialogContentText >
            Sesgo en libertad económica:
          </DialogContentText>
          {Selection()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}