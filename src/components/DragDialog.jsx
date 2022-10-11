import React,{useState} from 'react';
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
import Cookies from 'universal-cookie';

export default function FormDialog({id}) {

  const cookies = new Cookies();
  
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const sesgos={
    sesgo1:['izquierda','Centro','Derecha'],
    sesgo2:['No ofensivo','Ofensivo'],
    sesgo3:['No sensacionalista','Sensacionalista'],
    sesgo4:['Conservador','Neutral','Progresista'],
    sesgo5:['Libertad','Neutral','Igualdad']
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend= () => {
    const send={
      sesgo1:sesgo1,
      sesgo2:sesgo2,
      sesgo3:sesgo3,
      sesgo4:sesgo4,
      sesgo5:sesgo5,
    }
    console.log(send);
    setOpen(false);  
    setDisabled(true);
    cookies.set(id,{flag:true},{path:'/'});
  };

  const [sesgo1, setSesgo1] = useState('');
  const [sesgo2, setSesgo2] = useState('');
  const [sesgo3, setSesgo3] = useState('');
  const [sesgo4, setSesgo4] = useState('');
  const [sesgo5, setSesgo5] = useState('');

  function Selection(index,sesgos,value){
    const select = (event) =>{
      if (index === 1){
        setSesgo1(event.target.value)
      }
      else if (index === 2){
        setSesgo2(event.target.value)
      }
      else if (index === 3){
        setSesgo3(event.target.value)
      }
      else if (index === 4){
        setSesgo4(event.target.value)
      }
      else{
        setSesgo5(event.target.value)
      }
    }

    return(
      <Box sx={{ minWidth: 120, padding:'0.5rem 0'}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sesgo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Sesgo"
            onChange={select}
          >
            {sesgos.map((sesgo) => (

            <MenuItem value={sesgo}>{sesgo}</MenuItem>

            ))}
          </Select>
        </FormControl>
      </Box>
    )
  }


  return (
    <div>
      {!cookies.get(id) ?
      <Button variant="outlined" onClick={handleClickOpen} startIcon={<QueryStatsIcon/>}>        
        Evaluar
      </Button>
      :
      <Button disabled variant="outlined" startIcon={<QueryStatsIcon/>}>        
        Evaluar
      </Button>
      }
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Evaluar</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{fontWeight:'500'}}>
            indique su percepción del sesgo para los siguientes campos:
          </DialogContentText>
          <DialogContentText >
            Sesgo Izquierda-Derecha:
          </DialogContentText>
          {Selection(1,sesgos.sesgo1,sesgo1)}
          <DialogContentText >
            Presencia de lenguaje ofensivo:
          </DialogContentText>
          {Selection(2,sesgos.sesgo2,sesgo2)}
          <DialogContentText >
            ¿Es una noticia sensacionalista?:
          </DialogContentText>
          {Selection(3,sesgos.sesgo3,sesgo3)}
          <DialogContentText >
            Sesgo conservador o progresista:
          </DialogContentText>
          {Selection(4,sesgos.sesgo4,sesgo4)}
          <DialogContentText >
            Sesgo en libertad económica:
          </DialogContentText>
          {Selection(5,sesgos.sesgo5,sesgo5)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSend}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}