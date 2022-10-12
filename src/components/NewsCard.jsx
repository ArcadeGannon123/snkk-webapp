import React from 'react';
import StackedBar from './StackedBar';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Cookies from 'universal-cookie';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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




function NewsCard({data}) {

    const handleClick = () =>{
        const cookies = new Cookies();
        cookies.set('data',data,{path:'/'});
        window.location.href = './detalles/'+data.title;
    }

    return (
        <FeedMainBase>
            <div className="main-media">
                <span>{data.medio.nombre.replace('www.','')}</span>
                <span style={{fontWeight:300}}>{data.fechaAnalisis.split('T')[0]}</span>
            </div>
            <div className="main-image">                
                <img src={data.urlToImage} alt='' />
                <div className="image-data">
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
                <div className="main-title">
                    {data.title}
                </div>
                <div className="main-periodista">
                    {fakenews.periodista.nombre} | {data.published_date.split('T')[0]}
                </div>
                <div className="media-bias">
                    <StackedBar data={data.sesgoIzquierdaDerecha} />
                </div>             
                <div className="main-buttom" style={{display:'flex',justifyContent:'space-around'}}>
                    <Button  onClick={handleClick} variant="outlined" startIcon={<AnalyticsIcon />}>
                        Detalles
                    </Button>    
                    <Button  href={data.url} target="_blank" rel="noreferrer noopener" variant="outlined" endIcon={<ArrowForwardIcon />}>
                        Ir a la noticia
                    </Button>  
                </div>                           
            </div>
        </FeedMainBase>
    );
}

export default NewsCard;

const FeedMainBase = styled.div`
position:relative;
padding: 10px;

.main-button{
}

.main-image{
    position:relative;
    background-color:black;
    
}
.main-image .visits{
    position: absolute;
    
}

.main-image .image-data{
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
    padding: 0 0.5rem;
    position:relative;
}
.main-media{
    font-size: 1.1rem;
    display:flex;
    justify-content:space-between;
}
.main-title{
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Monserrat', sans-serif;
    margin: 0.5rem 0;
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
    margin: 10px 0;
}


`