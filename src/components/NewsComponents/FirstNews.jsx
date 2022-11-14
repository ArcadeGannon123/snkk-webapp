import React from 'react';
import Button from '@mui/material/Button';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Cookies from 'universal-cookie';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StackedBarUltraDeluxe from '../biascomponents/StackedBarUltraDeluxe';
import './FirstNews.css';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';
import Addto from './Addto';


function FirstNews({data}) {
    
    const cookies = new Cookies();

    const handleClick = () =>{
        cookies.set('data',data,{path:'/'});
        window.location.href = './detalles/'+data.title;
    }

    return (
        <div className='first-news-wrapper'>
            <div className="fn-image-container">
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
                <div className="fn-bias">                    
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
                <div className="fn-actions-buttons"> 
                    <Button disableElevation variant="outlined" onClick={handleClick} startIcon={<AnalyticsIcon />}>
                        Detalles
                    </Button>    
                    <Button disableElevation variant="outlined" href={data.url} target="_blank" rel="noreferrer noopener" endIcon={<ArrowForwardIcon />}>
                        Ir a la noticia
                    </Button> 
                </div>                            
            </div>
        </div>
    );
}

export default FirstNews;
