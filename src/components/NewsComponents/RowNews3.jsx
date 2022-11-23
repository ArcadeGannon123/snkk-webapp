import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ValidationDialog from '../../components/ValidationDialog';
import Badget2 from '../../components/Badget2';
import './RowNews3.css';

function RowNews3({data}) {
 

    return (
        <div className='row-news-wrapper'>
            <div className="row-image-container">
                <img src={data.urlToImage} alt='' />
            </div>
            <div className="row-info">
                <div className="row-media">
                    <span>{data.medio.replace('www.','').replace(/\.(cl|com|org)/,'')}</span>
                    <span style={{fontWeight:300}}>{data.fecha.split('T')[0]}</span>
                </div>
                <div className="row-title">
                    {data.titular}
                </div>  
                <div style={{display:'flex',gap:'0.5rem', alignItems:'center'}}>
                    <Avatar alt={data.nombreUsuario} src="" />
                    {data.nombreUsuario}
                    <Badget2 nivel={data.medalla}/>
                </div>            
            </div>
            <div className="validation-options">
                <span>
                    <Button   href={data.url} target="_blank" rel="noreferrer noopener" variant="outlined" startIcon={<ArrowForwardIcon />}>
                        Ir a la noticia
                    </Button> 
                </span>
                <span>
                    <ValidationDialog data={data}/>
                </span>
            </div>
        </div>
    );
}

export default RowNews3;
