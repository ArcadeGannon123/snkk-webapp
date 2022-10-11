import React from 'react';
import StackedBar from '../components/StackedBar';
import TextRating from '../components/Rating';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Cookies from 'universal-cookie';

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



function RowMedia({data}) {

    const handleClick = () =>{
        const cookies = new Cookies();
        cookies.set('data',data,{path:'/'});
        window.location.href = './detalles/'+data.title;
    }


    return (
        <FeedMainBase>
            
            <div className="main-image">
                <img src={`https://logo.clearbit.com/${data.medio.nombre}`} alt='' />
            </div>
            <div className="main-data">
                <div className="main-media">
                    <span>{data.medio.nombre.replace('www.','')}</span>
                </div>     
                <div className="rating">
                    <TextRating/>
                </div>    
            </div>
            <div className="options">                    
                <Button   href={data.url} target="_blank" rel="noreferrer noopener" variant="outlined" startIcon={<ArrowForwardIcon />}>
                    Ir al sítio
                </Button> 
                <Button onClick={handleClick} variant="outlined" startIcon={<AnalyticsIcon />}>
                    Detalles
                </Button>  
            </div>
        </FeedMainBase>
    );
}

export default RowMedia;

const FeedMainBase = styled.div`
display:grid;


.options{
    display:flex;
    align-items:center;
    justify-content:space-around;
}

.main-button{
    display:flex;
    

}

.main-image{
    display:flex;
    align-items:center; 
    background-color:#284b63c7;
    padding:1rem;
}

.main-image img{
    width:100%;    
    object-fit: cover;
}
.main-data{
    padding-left:20px;
}
.main-media{
    font-size: 1rem;
    display:flex;
    justify-content:space-between;
}
.main-title{
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Monserrat', sans-serif;
    margin: 0.3rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
            line-clamp: 2; 
    -webkit-box-orient: vertical;
}
.main-periodista{
    font-size: 1rem;
    font-weight: 300;
    margin: 0.3rem 0;
}


`