import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Comentarios from '../../components/comments/Comentarios';
import {Link,useNavigate,useLocation} from 'react-router-dom';
import NewsHeader from '../../components/NewsComponents/NewsHeader';
import './DetailsStyles.css';
import AnalysisReport from '../../components/analysiscomponents/AnalysisReport';
import ForumIcon from '@mui/icons-material/Forum';
import NewsReport from '../../components/analysiscomponents/NewsReport';
import Chip from '@mui/material/Chip';

const keywords = [
    'key',
    'key',
    'key',
    'key',
    'key',
    'key',
    'key',
    'key',
    'key'
]

function DetailsPage(props) {

    const data = useLocation().state;

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
      };

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Navbar />      
            <div className='front-page'>
                <div className="return-bar" style={{fontSize:'1.3rem',pointer:'cursor'}} onClick={goBack}>
                    <span>
                        <ArrowBackIcon/>
                        Volver   
                    </span>                                              
                </div> 
                <div className="body-container">                
                    <NewsHeader data={data}/>
                </div>
                <div className="news-keywords">
                    <div className="sub-text">Palabras clave:</div>
                    <div className='list-keywords'>
                        {keywords.map((key,i)=> <Chip key={i} label={key} />)}
                    </div>
                </div>
                <div className="news-summary">
                    <div className="sub-text">Resumen:</div>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                <NewsReport data={data}/>
                <div className="subtitle-bar" style={{fontSize:'1.3rem'}}>
                    <ForumIcon/>
                    Comentarios                                     
                </div>
                <div className="comments-section">
                    <Comentarios urlNoticia={data.url}/>
                </div>
            </div>  
        </>
        
    );
}

export default DetailsPage;
