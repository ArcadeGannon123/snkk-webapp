import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BarChart from '../components/BarChart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Cookies from 'universal-cookie';
import DashScore from '../components/DashScore';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './TopicsAnalysis.css';

function TopicDetails(props) {

    const cookies = new Cookies();
    const params = useParams();
    const lastpage = cookies.get('lastpage');

    const [dataTopico,setDataTopico]= useState(null);

    const getDataTopico = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/noticia/sesgo-topico?topico='+params.topic;

        await axios.get(url)
        .then(res => {                                
            setDataTopico(res.data)
        
        })
        .catch(err => {
            console.log(err)
        })
    }


    useEffect(() => { 
        getDataTopico();
    }, []);


    return (
        <>   
            <Navbar />            
            <div className='front-page'>
            {dataTopico ?<>
                <div className="return-bar" style={{fontSize:'1.3rem'}}>
                    <a style={{textDecoration: 'none'}} href={lastpage}>
                        <ArrowBackIcon/>
                        Volver 
                    </a>                                                          
                </div>
                <div className="topic-header">
                    <div className="topic-title" style={{fontSize:'2.5rem'}}>
                        {params.topic}
                    </div> 
                    <DashScore data={{title:'Noticias totales',score:dataTopico.total}}/>   
                </div>
                <div className="subtitle-bar" style={{fontSize:'1.3rem'}}>
                    <NewspaperIcon/>
                    Sesgo del tópico                                     
                </div>
                <div className='topic-chart'>                 
                    <div className="topic-bias">                     
                        <BarChart datos={dataTopico?.sesgos?.izquierdaDerecha} title='Sesgo de Izquierda o Derecha ' label='Cantidad de noticias' />                                              
                    </div>
                    <div className="topic-bias">
                        <BarChart datos={dataTopico?.sesgos?.lenguajeOfensivo} title='Presencia de lenguaje ofensivo' label='Cantidad de noticias' /> 
                    </div>
                    <div className="topic-bias">
                        <BarChart datos={dataTopico?.sesgos?.sensacionalismo} title='¿Es una noticia sensacionalista? ' label='Cantidad de noticias'/> 
                    </div>
                    <div className="topic-bias">
                        <BarChart datos={dataTopico?.sesgos?.conservadorProgresista} title='Sesgo Conservador o Progresista' label='Cantidad de noticias'/> 
                    </div> 
                    <div className="topic-bias" >
                        <BarChart datos={dataTopico?.sesgos?.libertadEconomica} title='Sesgo en libertad económica' label='Cantidad de noticias'/> 
                    </div>                    
                </div>
            </>:<></>}   
            </div>             
        </>
        
    );
}

export default TopicDetails;

const CommentSection = styled.div`
height:500px;
background-color:white;
`

const Analysis = styled.div`

display:grid;
grid-template-columns: 1fr 1fr;
gap:1rem;
.report{
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
grid-template-columns: 3fr 1fr;
gap:1rem;

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
    mask-image: linear-gradient(180deg, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
}
.main-data{
    padding-left:20px;
    position:relative;
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