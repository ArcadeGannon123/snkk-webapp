import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Cookies from 'universal-cookie';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StackedBarUltraDeluxe from '../biascomponents/StackedBarUltraDeluxe';
import './FirstNews.css';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';
import Addto from './Addto';


function NewsHeader({data}) {
    
    const cookies = new Cookies();

    return (
        <div className='first-news-wrapper'>
            <div className="fn-image-container display-desk">
                <img src={data.urlToImage} alt='' />
            </div>
            <div className="fn-info">
                <div className="fn-header">
                    <span>{data.medio.nombre.replace('www.','').replace(/\.(cl|com|org)/,'')}</span>
                    {cookies.get('userData') && <Addto urlNoticia={data.url}/>}
                </div>
                <div className="fn-title">
                    {data.title}
                </div>
                <div className="fn-image-container display-mobile">
                    <img src={data.urlToImage} alt='' />
                </div>
                <div className="fn-author">
                    <div className="fn-icon-text">                        
                        <PersonIcon />
                        {data.periodista.hasOwnProperty( "0" ) ? data.periodista[0].nombre: ''} 
                    </div>
                    <div className="fn-icon-text">
                        <AccessTimeFilledIcon />
                        {data.published_date.split('T')[0]}
                    </div>
                </div>
                <div className="header-actions-buttons"> 
                    <Button disableElevation variant="outlined" href={data.url} target="_blank" rel="noreferrer noopener" endIcon={<ArrowForwardIcon />}>
                        Ir a la noticia
                    </Button> 
                </div>                            
            </div>
        </div>
    );
}

export default NewsHeader;
