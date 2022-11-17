import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar from '../../components/Navbar2/Navbar';
import {Link, useLocation} from 'react-router-dom';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AnalysisReport from '../../components/analysiscomponents/AnalysisReport';

function OpinionsPageDetails(props) {
    const datos = useLocation().state;
    return (
        <>   
            <Navbar />                
            <div className='front-page'>
                <div className="return-bar" style={{fontSize:'1.3rem'}}>
                    <Link style={{textDecoration: 'none'}} to='/opiniones'>
                        <ArrowBackIcon/>
                        Volver 
                    </Link>                                                          
                </div>   
                <div className="body-container">
                    <div className="column-title">
                        {datos.titulo}
                    </div>
                    <div className="column-info">
                        <div className="c-pseudo">
                            {datos.pseudonimo}
                        </div>
                        <div className="c-date">
                            <AccessTimeFilledIcon />
                            {datos.fecha.split('T')[0]}
                        </div>
                    </div>
                    <p className="column-body">
                        {datos.texto}
                    </p>
                    
                </div>
                <AnalysisReport 
                    data={{
                        izquierdaDerecha: {
                            izquierda:datos?.sesgos?.sesgoIzquierdaDerecha?.izquierda,
                            neutral:datos?.sesgos?.sesgoIzquierdaDerecha?.neutral,
                            derecha:datos?.sesgos?.sesgoIzquierdaDerecha?.derecha
                        },
                        lenguajeOfensivo: {
                            noOfensivo:datos?.sesgos?.sesgoLenguajeOfensivo?.noOfensivo,
                            ofensivo:datos?.sesgos?.sesgoLenguajeOfensivo?.ofensivo
                        },
                        sensacionalismo: {
                            noSensacionalista:datos?.sesgos?.sesgoSensacionalismo?.noSensacionalista,
                            sensacionalista:datos?.sesgos?.sesgoSensacionalismo?.sensacionalista
                        },
                        conservadorProgresista: {
                            liberal:datos?.sesgos?.sesgoConservadorProgresista?.liberal,
                            neutral:datos?.sesgos?.sesgoConservadorProgresista?.neutral,
                            conservador:datos?.sesgos?.sesgoConservadorProgresista?.conservador
                        },
                        libertadEconomica: {
                            igualdad:datos?.sesgos?.sesgoLibertadEconomica?.igualdad,
                            neutral:datos?.sesgos?.sesgoLibertadEconomica?.neutral,
                            libertad:datos?.sesgos?.sesgoLibertadEconomica?.libertad
                        },
                        genero: {
                            masculino:datos?.sesgos?.sesgoGenero?.masculino,
                            desconocido:datos?.sesgos?.sesgoGenero?.desconocido,
                            femenino:datos?.sesgos?.sesgoGenero?.femenino
                        }
                    }}
                />
            </div>
        </>
    );
}

export default OpinionsPageDetails;