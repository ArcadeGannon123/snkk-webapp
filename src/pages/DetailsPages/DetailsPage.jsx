import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import DashScore from '../../components/DashScore'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Cookies from 'universal-cookie';
import AlignItemsList from '../../components/ActivityList';
import Comentarios from '../../components/comments/Comentarios';
import {Link} from 'react-router-dom';
import NewsHeader from '../../components/NewsComponents/NewsHeader';
import './DetailsStyles.css';
import AnalysisReport from '../../components/analysiscomponents/AnalysisReport';
import ForumIcon from '@mui/icons-material/Forum';
import ListAltIcon from '@mui/icons-material/ListAlt';

function DetailsPage(props) {

    const cookies = new Cookies();
    const data = cookies.get('data');    
    const user = cookies.get('userData');
    const lastpage = cookies.get('lastpage');
    
    return (
        <>
            <Navbar />       
            {console.log(data)}     
            <div className='front-page'>
                <div className="return-bar" style={{fontSize:'1.3rem'}}>
                    <Link style={{textDecoration: 'none'}} to={lastpage}>
                        <ArrowBackIcon/>
                        Volver 
                    </Link>                                                          
                </div> 
                <div className="body-container">                
                    <NewsHeader data={data}/>
                </div>
                <div className='dash-score'>
                    <DashScore data={{title:'Nº de visitas',score:data.visualizaciones}}/>
                    <DashScore data={{title:'Nº de veces analizada por usuarios',score:data.numeroAnalisis}}/>
                    <DashScore data={{title:'Nº de veces resportada como noticia falsa',score:data.reportesFalsedad}}/>
                </div>
                <AnalysisReport 
                    data={{
                        izquierdaDerecha: {
                            izquierda:data.sesgoIzquierdaDerecha.izquierda,
                            neutral:data.sesgoIzquierdaDerecha.neutral,
                            derecha:data.sesgoIzquierdaDerecha.derecha
                        },
                        lenguajeOfensivo: {
                            noOfensivo:data.sesgoLenguajeOfensivo.noOfensivo,
                            ofensivo:data.sesgoLenguajeOfensivo.ofensivo
                        },
                        sensacionalismo: {
                            noSensacionalista:data.sesgoSensacionalismo.noSensacionalista,
                            sensacionalista:data.sesgoSensacionalismo.sensacionalista
                        },
                        conservadorProgresista: {
                            liberal:data.sesgoConservadorProgresista.liberal,
                            neutral:data.sesgoConservadorProgresista.neutral,
                            conservador:data.sesgoConservadorProgresista.conservador
                        },
                        libertadEconomica: {
                            igualdad:data.sesgoLibertadEconomica.igualdad,
                            neutral:data.sesgoLibertadEconomica.neutral,
                            libertad:data.sesgoLibertadEconomica.libertad
                        },
                        sentimiento: {
                            negativo:data.sesgoSentimiento.negativo,
                            neutral:data.sesgoSentimiento.neutral,
                            positivo:data.sesgoSentimiento.positivo
                        },
                        genero: {
                            masculino:data.sesgoGenero.masculino,
                            desconocido:data.sesgoGenero.desconocido,
                            femenino:data.sesgoGenero.femenino
                        }
                    }}
                />
                <div className="subtitle-bar" style={{fontSize:'1.3rem'}}>
                    <ListAltIcon/>
                    Actividades                                     
                </div>
                <div className="activity-container">
                    <AlignItemsList data={data.eventos}/>
                </div>
                <div className="subtitle-bar" style={{fontSize:'1.3rem'}}>
                    <ForumIcon/>
                    Comentarios                                     
                </div>
                <div className="comments-section">
                    <Comentarios />
                </div>
            </div>  
        </>
        
    );
}

export default DetailsPage;
