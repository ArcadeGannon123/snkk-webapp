import React from 'react';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import StackedBarUltraDeluxe from '../../components/biascomponents/StackedBarUltraDeluxe';


function AnalysisReport({data,title='Análisis'}) {
    return (
        <div>
            <div className="subtitle-bar" style={{fontSize:'1.3rem'}}>
                <NewspaperIcon/>
                {title}                                    
            </div>            
            <div className='analysis-report'>
                <div className="bias-block" style={{gridColumn:'1/3'}}>
                    <div className="bias-label"> Sesgo de Izquierda o Derecha </div>
                    <StackedBarUltraDeluxe
                        color={0}
                        labels={['Izquierda','Centro','Derecha']} 
                        bias={[ data?.izquierdaDerecha?.izquierda,
                                data?.izquierdaDerecha?.neutral,
                                data?.izquierdaDerecha?.derecha]}                    
                    />
                </div>
                
                <div className="bias-block">
                    <div className="bias-label"> Sesgo Conservador o Progresista </div>
                    <StackedBarUltraDeluxe
                        color={1}
                        labels={['liberal','Neutral','Conservador']} 
                        bias={[ data?.conservadorProgresista?.liberal,
                                data?.conservadorProgresista?.neutral,
                                data?.conservadorProgresista?.conservador]}                    
                    />
                </div>  
                <div className="bias-block">
                    <div className="bias-label"> Sesgo en libertad económica </div>
                    <StackedBarUltraDeluxe
                        color={2}
                        labels={['Igualdad','Neutral','Libertad']} 
                        bias={[ data?.libertadEconomica?.igualdad,
                                data?.libertadEconomica?.neutral,
                                data?.libertadEconomica?.libertad]}                    
                    />
                </div>  
                {data.sentimiento && (
                <div className="bias-block">
                    <div className="bias-label"> Sentimiento de la noticia </div>
                    <StackedBarUltraDeluxe
                        color={3}
                        labels={['Negativo','Neutral','Positivo']} 
                        bias={[ data?.sentimiento?.negativo,
                                data?.sentimiento?.neutral,
                                data?.sentimiento?.positivo]}                    
                    />
                </div>  )}
                <div className="bias-block">
                <div className="bias-label"> ¿Es una noticia sensacionalista? </div>
                    <StackedBarUltraDeluxe
                        color={4}
                        labels={['No sensacionalista','Sensacionalista']} 
                        bias={[ data?.sensacionalismo?.noSensacionalista,
                                data?.sensacionalismo?.sensacionalista]}                    
                    />
                </div>
                
                {data.genero && (
                <div className="bias-block">
                    <div className="bias-label"> Sesgo de género </div>
                    <StackedBarUltraDeluxe
                        color={5}
                        labels={['Masculino','Desconocido','Femenino']} 
                        bias={[ data?.genero?.masculino,
                                data?.genero?.desconocido,
                                data?.genero?.femenino]}                    
                    />
                </div>  )}

                
                <div className="bias-block">
                    <div className="bias-label"> Presencia de lenguaje ofensivo </div>
                    <StackedBarUltraDeluxe
                        color={6}
                        labels={['No ofensivo','Ofensivo']} 
                        bias={[ data?.lenguajeOfensivo?.noOfensivo,
                                data?.lenguajeOfensivo?.ofensivo]}                    
                    />
                </div>
                

                


            </div>
        </div>
    );
}

export default AnalysisReport;