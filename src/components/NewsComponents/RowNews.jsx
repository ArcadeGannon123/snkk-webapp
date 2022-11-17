import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Cookies from 'universal-cookie';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';
import StackedBarUltraDeluxe from '../biascomponents/StackedBarUltraDeluxe';
import './RowNews.css';
import Addto from './Addto';
import {Link} from 'react-router-dom';

function RowNews({data}) {

    const cookies = new Cookies();

    return (
        <div className='row-news-wrapper'>
            <div className="row-image-container">
                <img src={data.urlToImage} alt='' />
            </div>
            <div className="row-info">
                <div className="row-media">
                    <span>{data.medio.nombre.replace('www.','').replace(/\.(cl|com|org)/,'')}</span>
                </div>
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
            </div>
            <div className="row-actions-buttons">
                {cookies.get('userData') && <Addto urlNoticia={data.url}/>}
                <span>
                    <Link                            
                        to={'/detalles/'+data.id}
                    >   
                        <Button variant='outlined' sx={{width:'100%'}} startIcon={<AnalyticsIcon />}>                                                    
                                Detalles
                        </Button>                    
                    </Link>
                    <Button  variant='outlined' href={data.url} target="_blank" rel="noreferrer noopener" endIcon={<ArrowForwardIcon />}>
                        Ir a la noticia
                    </Button>  
                </span>
            </div>
        </div>
    );
}

export default RowNews;

const FeedMainBase = styled.div`
display:grid;
grid-template-columns: 25% auto 25%;

.options{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
}

.main-button{
    display:flex;
    

}

.main-image{
    display:flex;
    align-items:center;
}

.main-image img{
    width:100%;    
    object-fit: cover;    
    aspect-ratio: 16/9;
}
.main-data{
    padding-left:20px;
}
.main-media{
    font-size: 0.9rem;
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