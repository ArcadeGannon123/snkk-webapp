import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Cookies from 'universal-cookie';
import FormDialog from '../components/DragDialog';




function RowNews2({data}) {

    const handleClick = () =>{
        const cookies = new Cookies();
        cookies.set('data',data,{path:'/'});
        window.location.href = './detalles/'+data.title;
    }


    return (
        <FeedMainBase>
            <div className="main-image">
                <img src={data.urlToImage} alt='' />
            </div>
            <div className="main-data">
                <div className="main-media">
                    <span>{data.medio.nombre.replace('www.','')}</span>
                    <span style={{fontWeight:300}}>{data.fechaAnalisis.split('T')[0]}</span>
                </div>
                <div className="main-title">
                    {data.title}
                </div>
                <div className="main-periodista">
                    {data.periodista.hasOwnProperty( "0" ) ? data.periodista[0].nombre: ''}  | {data.published_date.split('T')[0]}
                </div>              
            </div>
            <div className="options">
                    
                <Button   href={data.url} target="_blank" rel="noreferrer noopener" variant="outlined" startIcon={<ArrowForwardIcon />}>
                    Ir a la noticia
                </Button> 
                <FormDialog datos={data}/>
            </div>
        </FeedMainBase>
    );
}

export default RowNews2;

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