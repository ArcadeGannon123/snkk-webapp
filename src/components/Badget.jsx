import React,{useState,useEffect} from 'react';
import Chip from '@mui/material/Chip';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Button from '@mui/material/Button';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Cookies from 'universal-cookie';
import axios from 'axios';

const Nivel=[
    'Novato',
    'Bronce',
    'Plata',
    'Oro',
    'diamante'
]
const Color=[
    'white',
    '#FFEBCD',
    '#C0C0C0',
    '#FFD700'
]

const subirNivel = [
    10,100,1000,5000
]


function Badget() {
    const cookies = new Cookies();
    
    const [badget,setBadget]= useState(null);
    const [creditos,setCreditos]= useState(null);
    const [trans,setTrans]= useState(false);

    const buyBadget = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/usuario/comprar';
        const token = cookies.get('userData').token;
        
        console.log(url)
        await axios.get(url,{},{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {                               
            console.log(res.data)           
        })
        .catch(err => {
            setTrans(true)
            console.log(err)
        })
    }


    const getCreditos = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/usuario/credito';
        const token = cookies.get('userData').token;
        
        console.log(url)
        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {                               
            setCreditos(res.data)           
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getBadget = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/usuario/nivel-medalla';
        const token = cookies.get('userData').token;
        
        console.log(url)
        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {                              
            setBadget(res.data)           
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getBadget();
        getCreditos();
    }, []);

    const handleClick = () => {
        buyBadget();
    }

    return (
        <div style={{display:'flex',gap:'10px', alignItems:'center'}}>
            <Chip icon={<MilitaryTechIcon />} sx={{backgroundColor:Color[badget]}} label={Nivel[badget]} variant="outlined" />
            
            
            {!trans ?
            <Button onClick={handleClick} variant="outlined" startIcon={<KeyboardDoubleArrowUpIcon />}>
                Subir de nivel {'-'+subirNivel[badget]+' Créditos'}
            </Button> 
            :
            <Button onClick={handleClick} color='error' variant="outlined" startIcon={<KeyboardDoubleArrowUpIcon />}>
                Créditos insuficientes {'-'+subirNivel[badget]+' Créditos'}
            </Button>        
            }
                
             
            <span style={{color:'#284b63c7'}}>{creditos} Créditos totales</span>
        </div>
    );
}

export default Badget;