import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import StackedBar from '../components/StackedBar';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function DetailsMediaPage({titulo}) {

    const cookies = new Cookies();
    const data = cookies.get('data');    
    const user = cookies.get('userData');
    const lastpage = cookies.get('lastpage');

    const visita = async () =>{
        const url = 'https://api-news-feria-2022.herokuapp.com/noticia/visualizacion';
        const body = {"url":data.url};
        await axios.post(url,body,{
            headers: {
                'Authorization': `Bearer ${user.token}`
            }}).then(console.log('ooo'))
        .catch(err => console.log(err))
    }
    useEffect(() => {        
        visita(); 
    }, []);

    const [periodista, setPeriodista] = useState('');

    const handleChange = (event) => {
        setPeriodista(event.target.value);
    };

    return (
        <>   
            <Titulo >
                <span style={{fontSize:'1.3rem'}}>
                    <NewspaperIcon/>
                    {titulo} 
                </span>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Periodista</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={periodista}
                            label="Periodista"
                            onChange={handleChange}
                        >
                        <MenuItem value={10}>Rubith Morales Painepi</MenuItem>
                        <MenuItem value={20}>Rubith Morales Painepi</MenuItem>
                        <MenuItem value={30}>Rubith Morales Painepi</MenuItem>
                        </Select>
                    </FormControl>
                </Box>                                    
            </Titulo>
            <Analysis>
                <div className="media-bias" style={{gridColumn:'1/3'}}>
                    <div className="bias-label"> Sesgo de Izquierda o Derecha </div>
                    <StackedBar data={data.sesgoIzquierdaDerecha} />
                </div>
                <div className="media-bias">
                    <div className="bias-label"> Presencia de lenguaje ofensivo </div>
                    <StackedBar data={data.sesgoLenguajeOfensivo} />
                </div>
                <div className="media-bias">
                    <div className="bias-label"> ¿Es una noticia sensacionalista? </div>
                    <StackedBar data={data.sesgoSensacionalismo} />
                </div>
                <div className="media-bias">
                    <div className="bias-label"> Sesgo Conservador o Progresista </div>
                    <StackedBar data={data.sesgoConservadorProgresista} />
                </div>   
                <div className="media-bias">
                    <div className="bias-label"> Sesgo en libertad económica </div>
                    <StackedBar data={data.sesgoLibertadEconomica} />
                </div>  
            </Analysis>  
        </>
        
    );
}

export default DetailsMediaPage;
const Titulo = styled.div`
padding: 10px;    
margin: 10px 0;
background-color:white;
display: flex;
justify-content: space-between;
span{
    font-size:2rem;
    font-weight:300;
    color:#284b63c7;
    display:flex;
    align-items:center;
    gap:10px;
}

`

const CommentSection = styled.div`
height:500px;
background-color:white;
`

const Analysis = styled.div`

display:grid;
grid-template-columns: 1fr 1fr;
gap:1rem;
.report{
    grid-column:4/5;
    background-color:white;
    font-size:1.1rem;
    color:#284b63c7;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
}
.report .number{
    font-size:2rem;
}

.media-bias .bias-label{
    font-size:1.1rem;
    color:#284b63c7;
}
.media-bias{
    padding: 0.8rem;     
    background-color:white;
    
}

`

const FeedMainBase = styled.div`
display:grid;
grid-template-columns: 1fr 3fr;

.main-button{
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;

}

.main-image{
    position:relative;
    background-color:black;
    
}

.main-image .topic{
    position: absolute;
    height:100%;
    width:100%;
    left: 0px;
    top: 0px;
}

.main-image img{
    width:100%;    
    height:100%;
    object-fit: cover;   
    aspect-ratio: 16/9;
    mask-image: linear-gradient(180deg, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
}
.main-data{
    padding-left:20px;
    position:relative;
    height:100%;
    display:grid;
    justify-content:space-between;
}
.main-media{
    font-size: 1.1rem;
    display:flex;
    justify-content:space-between;
}
.main-title{
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Monserrat', sans-serif;
    margin: 10px 0;
}
.main-periodista{
    font-size: 1rem;
    font-weight: 300;
    margin: 10px 0;
}


`


const FrontPage = styled.div`
padding-top:50px;
display: grid;
grid-template-columns: 60%;
align-items:center;
justify-content:center;
background-color: #f4f4f9;

.titular{
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0.3rem 0;
}
.image-container img{
    width:80%;
}
.image-container{
    display:flex;
    justify-content:center;

}


.news-container{
    background-color: white;
    padding: 20px;
}

.title{
    padding: 10px;
    margin: 0.8rem 0;
    font-size:2rem;
    font-weight:300;
    background-color:white;
    color:#284b63c7;
    display:flex;
    align-items:center;
    gap:10px;
}


`