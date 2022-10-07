import React, {useState, useContext} from 'react';
import StackedBar from '../components/StackedBar';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { UserContext } from '../components/UserContext';
import {NavLink} from 'react-router-dom';
import { WindowSharp } from '@mui/icons-material';
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




function FeedMain({data}) {

    const clickHandler = () => {
        const cookies = new Cookies();
        cookies.set('newsData',{data:data},{path:'/'});
        window.location.href = './news'
      }

    return (
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
                <div className="media-bias">
                    <StackedBar data={data.sesgoIzquierdaDerecha} />
                </div>
                <div className="main-buttom">
                    <Button  onClick={clickHandler}  variant="outlined" startIcon={<AnalyticsIcon />}>
                        Detalles
                    </Button>    
                    <Button  sx={{position:'absolute',right:1}} href={data.url} target="_blank" rel="noreferrer noopener" variant="outlined" startIcon={<ArrowForwardIcon />}>
                        Ir a la noticia
                    </Button>  
                </div>
                            
            </div>
        </FeedMainBase>
    );
}

export default FeedMain;

const FeedMainBase = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;

.main-button{
    position:relative;
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