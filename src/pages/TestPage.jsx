import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import StackedBar from '../components/StackedBar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/*
const data={
    "id": "633fab77c861d648b77693ef",
    "url": "https://www.emol.com/noticias/Nacional/2022/06/21/1064706/liberan-chileno-secuestrado-en-haiti.html",
    "title": "Liberan a misionero chileno secuestrado en Haití: Está en buen estado de salud y junto a familiares",
    "urlToImage": "https://static.emol.cl/emol50/Fotos/2022/06/21/file_20220621164007.jpg",
    "published_date": "2022-01-21T03:00:00",
    "fechaAnalisis": "2022-10-07T04:30:47.479",
    "cantidadSesgosReportados": 0,
    "reportesFalsedad": 0,
    "numeroReportes": 0,
    "medio": null,
    "sesgoConservadorProgresista": {
      "conservador": 0.1871309112115986,
      "liberal": 0.7449884192131123,
      "neutral": 0.06788066957528913
    },
    "sesgoIzquierdaDerecha": {
      "extremaIzquierda": 0.2,
      "izquierda": 0.1,
      "neutral": 0.05,
      "derecha": 0.35,
      "extremaDerecha": 0.3
    },
    "sesgoLenguajeOfensivo": {
      "noOfensivo": 0.0011693576532331067,
      "ofensivo": 0.998830642346767
    },
    "sesgoSensacionalismo": {
      "noSensacionalista": 0.9995580314412656,
      "pocoSensacionalista": null,
      "sensacionalista": 0.0004419685587343249
    }
  }*/
  const fakenews={
    fecha: '06 agosto 2022',
    fechaAnalisis: '06 agosto 2022',
    url:"https://www.lacuarta.com/cronica/noticia/daniela-vega-mando-un-mensaje-de-apoyo-a-emilia-schneider-tras-los-polemicos-comentarios-que-emitio-gonzalo-de-la-carrera/LAUHC75MORFQPECWMHFCUGWHEI/",
    title:"Daniela Vega mandó un mensaje de apoyo a Emilia Schneider tras los polémicos comentarios que emitió Gonzalo de la Carrera",
    urlToImage:"https://www.latercera.com/resizer/yZvHXuAKiacRx4yJ-9ikIXq8Zdk=/168x0:1428x840/1023x682/cloudfront-us-east-1.images.arcpublishing.com/copesa/WCIJ6VU4HBFTTF4YY7FFJFAPK4.jpeg",
    topic: '',
    sesgoIA:{
      archia:"0.5",
      sesgo:"0.5"
    },
    periodista:{
      nombre:"Rubith Morales Painepi",
      bias:"0.5"
    },
    medio:{
      url:"lacuarta.com",
      nombre:"La Cuarta",
      metricas:{
        sesgo:"0.5",
        confiabilidad:"0.5"
      }
    }}


function TestPage({data}) {
    return (
        <>            
            <Navbar />            
            <FrontPage>
                <div className="title" style={{fontSize:'1.3rem'}}>
                    <a style={{textDecoration: 'none'}} href='/recientes'>
                        <ArrowBackIcon/>
                        Volver 
                    </a>
                                                          
                </div>
                <div className="news-container">
                    <FeedMainBase>
                        <div className="main-image">
                            <img src={data.urlToImage} alt='' />
                            <div className="topic">
                                <Stack sx={{position:'absolute',bottom:0, margin:'10px'}} direction="row" spacing={2}>
                                    <a href=''>
                                        <Avatar>
                                            <FacebookIcon />
                                        </Avatar>
                                    </a>
                                    <a href=''>
                                        <Avatar>
                                            <TwitterIcon />
                                        </Avatar>
                                    </a>                       
                                </Stack>
                            </div>
                        </div>
                        <div className="main-data">
                            <div className="main-media">
                                <span>{fakenews.medio.nombre}</span>
                                <span style={{fontWeight:300}}>{data.fechaAnalisis}</span>
                            </div>
                            <div className="main-title">
                                {data.title}
                            </div>
                            <div className="main-periodista">
                                {fakenews.periodista.nombre} | {data.published_date}
                            </div>  
                            <div className="main-buttom">
                                <Button href={data.url} target="_blank" rel="noreferrer noopener" variant="outlined" startIcon={<ArrowForwardIcon />}>
                                    Ir a la noticia
                                </Button>    
                            </div>                     
                                        
                        </div>
                        
                    </FeedMainBase>      
                </div>
                <div className="title" style={{fontSize:'1.3rem'}}>
                    <NewspaperIcon/>
                    Análisis                                     
                </div>
                <Analysis>
                    <div className="media-bias">
                        <div className="bias-label"> Sesgo de Izquierda o Derecha </div>
                        <StackedBar data={data.sesgoIzquierdaDerecha} />
                    </div>
                    <div className="report fakenews">
                        <span>Nº de visitas</span>
                        <span className='number'>{data.numeroReportes}</span>
                    </div>
                    <div className="media-bias">
                        <div className="bias-label"> Presencia de lenguaje ofensivo </div>
                        <StackedBar data={data.sesgoLenguajeOfensivo} />
                    </div>
                    <div className="report fakenews">
                        <span>Nº de veces analizada por usuarios</span>
                        <span className='number'>{data.cantidadSesgosReportados}</span>
                    </div>
                    <div className="media-bias">
                        <div className="bias-label"> ¿Es una noticia sensacionalista? </div>
                        <StackedBar data={data.sesgoSensacionalismo} />
                    </div>
                    <div className="report fakenews">
                        <span>Nº de veces resportada como noticia falsa</span>
                        <span className='number'>{data.cantidadSesgosReportados}</span>
                    </div>
                    <div className="media-bias">
                        <div className="bias-label"> Sesgo Conservador o Progresista </div>
                        <StackedBar data={data.sesgoConservadorProgresista} />
                    </div>    
                </Analysis>
                <div className="title">
                    <NewspaperIcon/>
                    Comentarios                                     
                </div>
                <CommentSection>

                </CommentSection>
            </FrontPage>  
        </>
    );
}

export default TestPage;

const CommentSection = styled.div`
height:500px;
background-color:white;
`

const Analysis = styled.div`

display:grid;
grid-template-columns: repeat(4,1fr);
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
    grid-column: 1/4;
    padding: 0.8rem;     
    background-color:white;
    
}

`

const FeedMainBase = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;

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