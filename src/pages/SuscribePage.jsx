import React,{useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import axios from 'axios';
import Cookies from 'universal-cookie';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';



const Topicos = ['Todos','topico2','topico3','hello','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3']


function SuscribePage(props) {

    const cookies = new Cookies();

    const [externalURL,setExternalURL]= useState('');

    const openLink =()=>{
        window.open(externalURL);
    }

    const handleClick = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/pago/urlPago';
        const token = cookies.get('userData').token;
        
        console.log(url)
        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {                                
            setExternalURL(res.data)        
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {     
        if (externalURL !== ''){
            openLink();
        }
    }, [externalURL]);


    return (
        <>            
            <Navbar />            
            <FrontPage>   
                <div className="title">
                    <span>
                        Obtén acceso ilimitado a BlankPoint.
                    </span>                                   
                </div>
                <div className="suscribe-container">
                    <SuscribeBox>
                        <div className="text main-text">
                            Suscripción Mensual
                        </div>
                        <hr/>
                        <div className="text price">
                            1.000 CLP
                        </div>
                        <hr/>
                        <div className="benefits">
                            <div className="text">
                                Beneficios:
                            </div>

                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ChevronRightIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Acceso ilimitado a BlankPoint"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ChevronRightIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Experiencia en la plataforma sin publicidad"
                                    />
                                </ListItem>
                            </List>
                        </div>
                        <div className="suscribe-button">
                            <Button onClick={handleClick} variant="contained">Seleccionar</Button>
                        </div>
                    </SuscribeBox>
                
                </div>
                
            </FrontPage>
        </>
    );
}

export default SuscribePage;

const SuscribeBox = styled.div`
display: grid;
justify-content:center;
width: 400px;
border-radius:30px;
border: 1px solid #284b6347;
padding:1rem;

.suscribe-button{
    display:grid;
    justify-content:center;
}

.benefits .text{
    text-align:left;
    font-size: 1.5rem;
}

.text{
    font-size:2rem;
    font-weight:300;
    color:#284b63c7;
    text-align:center;
}

.main-text{
    
}
.price{
}

`

const FrontPage = styled.div`
padding-top:60px;
display: grid;
grid-template-columns: 65%;
align-items:center;
justify-content:center;
background-color: #f4f4f9;

.suscribe-container{
    display:grid;
    justify-content:center;
    background-color: white;
    padding: 20px;
}


.feed-rest-news{    
    display:grid;
    grid-template-columns: 3fr 1fr;
}


.news-container .header{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:20px;
}
.news-container .sub-header{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:10px;
}
.title span{
    font-size:2rem;
    font-weight:300;
    color:#284b63c7;
    display:flex;
    align-items:center;
    gap:10px;
}
.title{
    
    padding: 10px;    
    margin-bottom: 10px;
    background-color:white;
    display: flex;
    justify-content: center;
}


`
