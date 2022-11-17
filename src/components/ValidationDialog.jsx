import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Cookies from 'universal-cookie';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Badget2 from '../components/Badget2';
import axios from 'axios';

export default function ValidationDialog({data}) {

  const cookies = new Cookies();
  
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const checkBias = (index,bias) => {

    if (index === 1){
      if(bias === 0.25){
        return 'Izquierda'
      }else if(bias === 0.5){
        return 'Centro'
      }else{
        return 'Derecha'
      }
    }else if (index === 2){
      if(bias === 1){
        return 'Sensacionalista'
      }else{
        return 'No Sensacionalista'
      }
    }if (index === 3){
      if(bias === 0){
        return 'Progresista'
      }else if(bias === 0.5){
        return 'Neutral'
      }else{
        return 'Concervador'
      }
    }if (index === 4){
      if(bias === 0){
        return 'Igualdad'
      }else if(bias === 0.5){
        return 'Neutral'
      }else{
        return 'Libertad'
      }
    }else{
      return bias;
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendValidation = async (validacion) => {
    const token = cookies.get('userData').token;
    const url ='https://api-news-feria-2022.herokuapp.com/validar/reporte' ;

    await axios.post(
      url,
      {
          url: data.url,
          validacion: validacion,
          idUsuario: data.idUsuario
      },
      {
      headers: {
          'Authorization': `Bearer ${token}`
      },
      })
      .then(result => {
          console.log(result.data);
          alert("Validación enviada correctamente!");
      })
      .catch(error => {
          console.log(error);
          alert("No se pudo enviar la validación. Intente nuevamente");
      })


  };
  const handleValidar = () => {
    sendValidation(true);


  };
  const handleRechazar = () => {
    sendValidation(false)


  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} startIcon={<QueryStatsIcon/>}>        
        Validar
      </Button>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>           
          <div style={{display:'flex',gap:'0.5rem', alignItems:'center'}}>
              <Avatar alt={data.nombreUsuario} src="" />
              {data.nombreUsuario}
              <Badget2 nivel={data.medalla}/>
          </div> 
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{fontWeight:'500'}}>
            El usuario {data.nombreUsuario} envió los siguientes sesgos:
          </DialogContentText>
          <DialogContentText >
            Sesgo Izquierda-Derecha:
          </DialogContentText>
          <div style={{display:'flex',justifyContent:'center', margin:'0.5rem 0'}}>
            <Chip label={checkBias(1,data.izquierdaDerecha)} color="primary" variant="outlined" />            
          </div>
          <DialogContentText >
            ¿Es una noticia sensacionalista?:
          </DialogContentText>          
          <div style={{display:'flex',justifyContent:'center', margin:'0.5rem 0'}}>
            <Chip label={checkBias(2,data.sensacionalismo)} color="primary" variant="outlined" />            
          </div>
          <DialogContentText >
            Sesgo conservador o progresista:
          </DialogContentText>
          
          <div style={{display:'flex',justifyContent:'center', margin:'0.5rem 0'}}>
            <Chip label={checkBias(3,data.conservadorProgresista)} color="primary" variant="outlined" />            
          </div>
          <DialogContentText >
            Sesgo en libertad económica:
          </DialogContentText>          
          <div style={{display:'flex',justifyContent:'center', margin:'0.5rem 0'}}>
            <Chip label={checkBias(4,data.economia)} color="primary" variant="outlined" />            
          </div>
          <DialogContentText >
            Motivo:
          </DialogContentText>          
          <div style={{display:'flex',justifyContent:'center', margin:'0.5rem 0'}}>
            {
              data.motivo === null
              ? <Chip label={checkBias(5,'No hay motivo')} color="primary" variant="outlined" />
              : <div style={{color: '#2196f3', textAlign: 'center'}}>
                  {checkBias(5, data.motivo)}
                </div>
            }
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleRechazar}>Rechazar</Button>          
          <Button onClick={handleValidar}>Validar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}