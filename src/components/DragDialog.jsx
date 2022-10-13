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
import axios from 'axios';

export default function FormDialog({datos}) {

  const cookies = new Cookies();
  
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  
  const [sesgo1, setSesgo1] = useState(null);
  const [sesgo2, setSesgo2] = useState(null);
  const [sesgo3, setSesgo3] = useState(null);
  const [sesgo4, setSesgo4] = useState(null);

  const [pro, setPro] = useState(null);
  const [econo, setEcono] = useState(null);
  const [sensa, setSensa] = useState(null);
  const [izqder, setIzqder] = useState(null);

  const handlePercibido = () => {    
    const token = cookies.get('userData').token;
    function sendBias(urltab, token) {
        let url = 'https://api-news-feria-2022.herokuapp.com/noticia/sesgo-percibido-usuario';
        axios.post(
            url,
            {
                url: urltab,
                pro: pro,
                econo: econo,
                sensa: sensa,
                izqder: izqder
            },
            {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        .then(result => {
            console.log(result.data);
            alert("Sesgos enviados correctamente!");
        })
        .catch(error => {
            console.log(error);
            alert("No se pudieron enviar los sesgos. Intente nuevamente");
        })
    }
    sendBias(datos.url, token);
  } 

  const sesgos={
    sesgo1:['izquierda','Centro','Derecha'],
    sesgo2:['No sensacionalista','Sensacionalista'],
    sesgo3:['Conservador','Neutral','Progresista'],
    sesgo4:['Libertad','Neutral','Igualdad']
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend= () => {
    handlePercibido()
    setOpen(false);  
    setDisabled(true);
    cookies.set(datos.id,{flag:true},{path:'/'});
  };

  function Selection(index,sesgos,value){

    const select = (event) =>{

      const value = event.target.value;
      if (index === 1){
        setSesgo1(value)
        if (value === 'izquierda'){
          setIzqder(0.25)
        }else if (value === 'Centro'){
          setIzqder(0.5)
        }if (value === 'Derecha'){
          setIzqder(0.75)
        }          
      }
      else if (index === 2){
        setSesgo2(value)
        if (value === 'No sensacionalista'){
          setSensa(1.0)
        }else{
          setSensa(0.0)
        }
      }
      else if (index === 3){
        setSesgo3(value)
        if (value === 'Conservador'){
          setPro(1.0)
        }else if (value === 'Neutral'){
          setPro(0.5)
        }else{
          setPro(0.0)
        } 
      }
      else{
        setSesgo4(value)
        if (value === 'Libertad'){
          setEcono(1.0)
        }else if (value === 'Neutral'){
          setEcono(0.5)
        }else{
          setEcono(0.0)
        } 
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
      {!cookies.get(datos.id)|| true ?
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
            ¿Es una noticia sensacionalista?:
          </DialogContentText>
          {Selection(2,sesgos.sesgo2,sesgo2)}
          <DialogContentText >
            Sesgo conservador o progresista:
          </DialogContentText>
          {Selection(3,sesgos.sesgo3,sesgo3)}
          <DialogContentText >
            Sesgo en libertad económica:
          </DialogContentText>
          {Selection(4,sesgos.sesgo4,sesgo4)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSend}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}