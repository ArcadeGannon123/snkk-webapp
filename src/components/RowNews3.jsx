import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ValidationDialog from '../components/ValidationDialog';
import Badget2 from '../components/Badget2';

const data={
    "idUsuario": "6322265ffd973244ae1d8bf6",
    "fecha": "2022-10-13T00:59:14.913",
    "url": "https://www.cnnchile.com/elecciones2021/jose-antonio-kast-explico-dichos-dictadura-gay_20211213/",
    "urlToImage":"https://www.latercera.com/resizer/yZvHXuAKiacRx4yJ-9ikIXq8Zdk=/168x0:1428x840/1023x682/cloudfront-us-east-1.images.arcpublishing.com/copesa/WCIJ6VU4HBFTTF4YY7FFJFAPK4.jpeg",    
    "nombreUsuario": "Maku27",
    "titular": "Kast explicó sus dichos sobre la “dictadura gay”: “Es lo que hizo Pablo Simonetti al ningunear, insultar y dividir”",
    "medio": "www.cnnchile.com",
    "medalla": 1,
    "conservadorProgresista": 0.5,
    "sensacionalismo": 0.0,
    "izquierdaDerecha": 0.25,
    "economia": 1.0
}



function RowNews3({data}) {
 

    return (
        <FeedMainBase>
            {console.log(data)}
            <div className="main-image">
                <img src={data.urlToImage} alt='' />
            </div>
            <div className="main-data">
                <div className="main-media">
                    <span>{data.medio.replace('www.','')}</span>
                    <span style={{fontWeight:300}}>{data.fecha.split('T')[0]}</span>
                </div>
                <div className="main-title">
                    {data.titular}
                </div>  
                <div style={{display:'flex',gap:'0.5rem', alignItems:'center'}}>
                    <Avatar alt={data.nombreUsuario} src="" />
                    {data.nombreUsuario}
                    <Badget2 nivel={data.medalla}/>
                </div>            
            </div>
            <div className="options">
                <Button   href={data.url} target="_blank" rel="noreferrer noopener" variant="outlined" startIcon={<ArrowForwardIcon />}>
                    Ir a la noticia
                </Button> 
                <ValidationDialog data={data}/>
            </div>
        </FeedMainBase>
    );
}

export default RowNews3;

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