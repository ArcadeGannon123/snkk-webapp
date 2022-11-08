import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar2/Navbar';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BiasSelector from '../../components/BiasSelector';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import TextRating from '../../components/Rating';
import AnalysisSelector from '../../components/analysiscomponents/AnalysisSelector';

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


function DetailsMediaPage(props) {

    const cookies = new Cookies();
    const medioData = cookies.get('medioData');
    const lastpage = cookies.get('lastpage');



    return (
        <>   
            <Navbar />                
            <div className='front-page'>
                <div className="return-bar" style={{fontSize:'1.3rem'}}>
                    <a style={{textDecoration: 'none'}} href={lastpage}>
                        <ArrowBackIcon/>
                        Volver 
                    </a>                                                          
                </div>                            
                <div className='header-media-container'>
                    <div className="media-info">
                        <div className="media-image">
                            <img src={`https://logo.clearbit.com/${medioData.medio}`} alt='medio' />
                        </div>
                        <div className="media-data">
                            <div className='media-name'>
                                {medioData.medio.replace('www.','').replace('/\.\w+/','')}
                            </div>
                            <div className="media-rating">
                                <Typography variant="body2" color="text.secondary">
                                    Rating:
                                </Typography>
                                <TextRating rating={medioData.confiabilidad}/>   
                            </div>     
                        </div>  
                    </div>                      
                    <div className="media-actions">
                        <Button href={'https://'+medioData.medio} target="_blank" rel="noreferrer noopener" variant="outlined" startIcon={<ArrowForwardIcon />}>
                            Ir al sítio
                        </Button>    
                    </div>                       
                </div> 
                < AnalysisSelector medio = {medioData.medio} />
            </div>
        </>
        
    );
}

export default DetailsMediaPage;
