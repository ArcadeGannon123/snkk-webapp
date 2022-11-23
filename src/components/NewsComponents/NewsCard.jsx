import React from 'react';
import StackedBar from '../StackedBar';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Cookies from 'universal-cookie';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './NewsCard.css';
import Addto from './Addto';
import {Link} from 'react-router-dom';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';
import StackedBarUltraDeluxe from '../biascomponents/StackedBarUltraDeluxe';
function NewsCard({data}) {

    const cookies = new Cookies();
    return (
        <div className='card-wrapper'>
            <div className="row-media">
                <span>{data.medio.nombre.replace('www.','').replace(/\.(cl|com|org)/,'')}</span>
                <span >
                    {cookies.get('userData') && <Addto urlNoticia={data.url}/>}
                </span>
            </div>
            <div className="row-image-container">
                <img src={data.urlToImage} alt='' />
            </div>
            <div className="row-info">
                <div className="row-title">
                    {data.title}
                </div>
                <div className="row-author">
                    <div className="row-icon-text">                        
                        <PersonIcon />
                        {data.periodista.hasOwnProperty( "0" ) ? data.periodista[0].nombre: ''} 
                    </div>
                    <div className="row-icon-text">
                        <AccessTimeFilledIcon />
                        {data.published_date.split('T')[0]}
                    </div>
                </div>
                <div className="row-bias">                    
                    <div className='sub-text' >Analizado el {data.fechaAnalisis.split('T')[0]}</div>
                    <StackedBarUltraDeluxe 
                        labels={['Izquierda','Centro','Derecha']} 
                        bias={[
                            data.sesgoIzquierdaDerecha.izquierda,
                            data.sesgoIzquierdaDerecha.neutral,
                            data.sesgoIzquierdaDerecha.derecha
                        ]}
                    />
                </div>  
                <div className="card-actions-buttons">
                    <Link                            
                        to={'/detalles/'+data.id}
                    >   
                        <Button variant='outlined' sx={{width:'100%',fontSize:'0.7rem'}} startIcon={<AnalyticsIcon />}>                                                    
                                Detalles
                        </Button>                    
                    </Link>
                    <Button sx={{fontSize:'0.7rem'}} variant='outlined' href={data.url} target="_blank" rel="noreferrer noopener" endIcon={<ArrowForwardIcon />}>
                        Ir a la noticia
                    </Button>  
                </div>                          
            </div>
        </div>
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