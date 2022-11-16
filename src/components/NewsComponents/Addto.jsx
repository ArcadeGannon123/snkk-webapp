import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Tooltip from '@mui/material/Tooltip';
import SimpleSnackbar from './SimpleSnackBar';


function Addto({urlNoticia}) {
    
    const cookies = new Cookies();
    const userData = cookies.get('userData');

    const [laterstate,setLaterstate]= React.useState(null);
    const [favstate,setFavstate]= React.useState(null);
    const [click,setClick]= React.useState(false);
    const [open, setOpen] = React.useState(false);    
    const [message, setMessage] = React.useState(''); 

    const handleAddto = async (option) => {   
        const url= option === 0 ? 
            'https://api-news-feria-2022.herokuapp.com/noticia/agregar-interes':
            'https://api-news-feria-2022.herokuapp.com/favorito/agregar'
        const body = {url:urlNoticia};
        const token = userData.token;
        setClick(true)

        await axios.post(url,body,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data)
            if (option === 0 ){
                setLaterstate(true);
                setMessage('Noticia añadida a tu lista de pendientes');
                setOpen(true);
            }else{
                setFavstate(true); 
                setMessage('Noticia añadida a tus favoritos');
                setOpen(true);
            }  
            setClick(false); 
        }).catch(err => {
            console.log(err);
            setMessage('Algo falló, intente nuevamente');
            setClick(false);
        });
    }
    const handleRemove = async (option) => {   
        const url= option === 0 ? 
            'https://api-news-feria-2022.herokuapp.com/noticia/quitar-interes':
            'https://api-news-feria-2022.herokuapp.com/favorito/quitar'
        const body = {url:urlNoticia}
        const token = userData.token;
        setClick(true)

        await axios.post(url,body,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            if (option === 0 ){
                setLaterstate(false);
                setMessage('Noticia eliminada de tu lista de pendientes');
                setOpen(true);
            }else{
                setFavstate(false); 
                setMessage('Noticia eliminada de tus favoritos');
                setOpen(true);
            }  
            setClick(false); 
        })
        .catch(err => {
            console.log(err);
            setMessage('Algo falló, intente nuevamente');
            setClick(false); 
        });
    }

    const getState = async (option) => {  
        const url= option === 0 ? 
            'https://api-news-feria-2022.herokuapp.com/noticia/interes-revisar':
            'https://api-news-feria-2022.herokuapp.com/favorito/revisar'
        const body = {url:urlNoticia}
        const token = userData.token;
        await axios.post(url,body,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            option === 0 ? setLaterstate(res.data) : setFavstate(res.data);            
        }).catch(err => console.log(err));
    }

    React.useEffect(() => {
        if (userData){
            getState(0)
            getState(1)
        }
    }, []);

    return (        
        <>
            <ButtonGroup
                size="small" 
                disableElevation
                aria-label="Disabled elevation buttons"            
            >
            {laterstate !== null && favstate !== null &&(<>
                <Button disabled={click} variant={laterstate ? "contained" :"outlined"} onClick={()=>{laterstate ? handleRemove(0) : handleAddto(0)}}><Tooltip title="Ver más tarde"><WatchLaterIcon/></Tooltip></Button>
                <Button disabled={click} variant={favstate ? "contained" :"outlined"} onClick={()=>{favstate ? handleRemove(1) : handleAddto(1)}}><Tooltip title="Añadir a favoritos"><FavoriteIcon/></Tooltip></Button>
            </>)}
            </ButtonGroup>
            <SimpleSnackbar open={open} setOpen={setOpen} message={message}/>
        </>
    );
}

export default Addto;