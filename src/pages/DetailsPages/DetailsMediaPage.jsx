import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Cookies from 'universal-cookie';
import Typography from '@mui/material/Typography';
import TextRating from '../../components/Rating';
import AnalysisSelector from '../../components/analysiscomponents/AnalysisSelector';


function DetailsMediaPage(props) {

    const cookies = new Cookies();
    const medioData = cookies.get('medioData');
    const lastpage = cookies.get('lastpage');



    return (
        <>   
            <Navbar />              
            <div className='front-page'>
                <div className="return-bar" style={{fontSize:'1.3rem'}}>
                    <a style={{textDecoration: 'none'}} href={lastpage}>
                        <ArrowBackIcon/>
                        Volver 
                    </a>                                                          
                </div>                            
                <div className='header-media-container'>
                    <div className="media-info">
                        <div className="media-image">
                            <img src={`https://logo.clearbit.com/${medioData.medio}`} alt='medio' />
                        </div>
                        <div className="media-data">
                            <div className='media-name'>
                                {medioData.medio.replace('www.','').replace('/\.\w+/','')}
                            </div>
                            <div className="media-rating">
                                <Typography variant="body2" color="text.secondary">
                                    Rating:
                                </Typography>
                                <TextRating rating={medioData.confiabilidad}/>   
                            </div>     
                        </div>  
                    </div>                      
                    <div className="media-actions">
                        <Button href={'https://'+medioData.medio} target="_blank" rel="noreferrer noopener" variant="outlined" startIcon={<ArrowForwardIcon />}>
                            Ir al sítio
                        </Button>    
                    </div>                       
                </div> 
                < AnalysisSelector medio = {medioData.medio} />
            </div>
        </>
        
    );
}

export default DetailsMediaPage;
