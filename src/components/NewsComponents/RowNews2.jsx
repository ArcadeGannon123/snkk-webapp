import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormDialog from '../DragDialog';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';




function RowNews2({data}) {

    return (
        <div className='row-news-wrapper'>
            <div className="row-image-container">
                <img src={data.urlToImage} alt='' />
            </div>
            <div className="row-info">
                <div className="row-media">
                    <span>{data.medio.nombre.replace('www.','').replace(/\.(cl|com|org)/,'')}</span>
                    <span style={{fontWeight:300}}>{data.fechaAnalisis.split('T')[0]}</span>
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
            </div>
            <div className="validation-options">
                <span>
                    <Button   href={data.url} target="_blank" rel="noreferrer noopener" variant="outlined" startIcon={<ArrowForwardIcon />}>
                        Ir a la noticia
                    </Button> 
                </span>
                <span>
                    <FormDialog datos={data}/>
                </span>
            </div>
        </div>
    );
}

export default RowNews2;
