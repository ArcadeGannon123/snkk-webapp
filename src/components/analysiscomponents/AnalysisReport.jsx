import React from 'react';
import StackedBar from '../../components/StackedBar';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import StackedBarUltraDeluxe from '../../components/biascomponents/StackedBarUltraDeluxe';


function AnalysisReport({data}) {
    return (
        <div>
            <div className="subtitle-bar" style={{fontSize:'1.3rem'}}>
                <NewspaperIcon/>
                Análisis                                    
            </div>            
            <div className='analysis-report'>
                <div className="bias-block" style={{gridColumn:'1/3'}}>
                    <div className="bias-label"> Sesgo de Izquierda o Derecha </div>
                    <StackedBarUltraDeluxe
                        labels={['Izquierda','Centro','Derecha']} 
                        bias={[ data.sesgos.izquierdaDerecha.izquierda,
                                data.sesgos.izquierdaDerecha.neutral,
                                data.sesgos.izquierdaDerecha.derecha]}                    
                    />
                </div>
                
                <div className="bias-block">
                    <div className="bias-label"> Presencia de lenguaje ofensivo </div>
                    <StackedBarUltraDeluxe
                        labels={['No ofensivo','Ofensivo']} 
                        bias={[ data.sesgos.lenguajeOfensivo.noOfensivo,
                                data.sesgos.lenguajeOfensivo.ofensivo]}                    
                    />
                </div>
                
                <div className="bias-block">
                    <div className="bias-label"> ¿Es una noticia sensacionalista? </div>
                    <StackedBarUltraDeluxe
                        labels={['No sensacionalista','Sensacionalista']} 
                        bias={[ data.sesgos.sensacionalismo.noSensacionalista,
                                data.sesgos.sensacionalismo.sensacionalista]}                    
                    />
                </div>
                
                <div className="bias-block">
                    <div className="bias-label"> Sesgo Conservador o Progresista </div>
                    <StackedBarUltraDeluxe
                        labels={['liberal','Neutral','Conservador']} 
                        bias={[ data.sesgos.conservadorProgresista.liberal,
                                data.sesgos.conservadorProgresista.neutral,
                                data.sesgos.conservadorProgresista.conservador]}                    
                    />
                </div>  
                
                <div className="bias-block">
                    <div className="bias-label"> Sesgo en libertad económica </div>
                    <StackedBarUltraDeluxe
                        labels={['Igualdad','Neutral','Libertad']} 
                        bias={[ data.sesgos.libertadEconomica.igualdad,
                                data.sesgos.libertadEconomica.neutral,
                                data.sesgos.libertadEconomica.libertad]}                    
                    />
                </div>  
            </div>
        </div>
    );
}

export default AnalysisReport;