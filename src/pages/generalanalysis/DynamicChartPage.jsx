import React from 'react';
import QuadrantChart from '../../components/charts/QuadrantChart';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import Navbar from '../../components/Navbar2/Navbar';
import MultipleSelectCheckmarks from '../../components/searchcomponents/MultipleSelectCheckmarks';
import BasicSelect from '../../components/searchcomponents/BasicSelect';
import axios from 'axios';
import MissField from '../../components/UtilsComponents/MissField';
import EmptyArea from '../../components/UtilsComponents/EmptyArea';
import LoadingArea from '../../components/UtilsComponents/LoadingArea';
import './DynamicChartPage.css';

const sesgos = [
    'Conservador Progresista',
    'Izquierda Derecha',
    'Lenguaje Ofensivo',
    'Libertad Económica',
    'Sensacionalismo'
]
const isesgos = [         
    'conservadorProgresista',
    'izquierdaDerecha',
    'lenguajeOfensivo',
    'libertadEconomica',
    'sensacionalismo'
]   
const labels = [
    ['Progresista','Conservador'],
    ['Izquierda','Derecha'],
    ['No Ofensivo','Ofensivo'],
    ['Igualdad','Libertad'],
    ['No Sensacionalista','Sensacionalista'],
]

function DynamicChartPage(props) {
    const [xaxis, setXaxis] = React.useState('');
    const [yaxis, setYaxis] = React.useState('');
    const [selectedmedia, setSelectedmedia] = React.useState([]);
    const [media, setMedia] = React.useState(null);

    const [medios, setMedios] = React.useState(null); 

    const getBiases = async () => {        
        const url='https://api-news-feria-2022.herokuapp.com/medio/sesgo-todos'
        await axios.get(url)
        .then(res => {  
            const _medios = res.data.map((medio)=>(medio.nombre));
            console.log(_medios)
            setMedia(_medios)
            setMedios(res.data);
        
        })
        .catch(err => {
            console.log(err)
        })
    }


    React.useEffect(() => {  
        getBiases();
    }, []);

    const getSelectedBias = (media,axis,label) => {
        
        const sesgos = medios.filter((medio) => (medio.nombre === media))[0].sesgos;
        var score;
        
        switch(axis){
            case 0:
                score= sesgos.conservadorProgresista.conservador - sesgos.conservadorProgresista.liberal;
                break;
            case 1:
                score= sesgos.izquierdaDerecha.derecha - sesgos.izquierdaDerecha.izquierda;
                break;
            case 2:
                score= sesgos.lenguajeOfensivo.ofensivo - sesgos.lenguajeOfensivo.noOfensivo;
                break;
            case 3:
                score= sesgos.libertadEconomica.libertad - sesgos.libertadEconomica.igualdad;
                break;
            default:
                score= sesgos.sensacionalismo.sensacionalista - sesgos.sensacionalismo.noSensacionalista;
                break;
        }
        return score;

    }

    return (
        <>
            <Navbar /> 
            <div className='front-page' >
                <div className="main-title" >
                    <span>
                        <ScatterPlotIcon fontSize='large' />
                        Gráfico de medios
                    </span>
                </div> 
                
                <div className="dynamic-chart-container">                    
                {media ?                     
                media.length !== 0 ? <>
                    <div className="bias-chart-options">                          
                        <div className="bias-chart-media">
                            <div className="sub-text">Medios de comunicación</div>
                            <MultipleSelectCheckmarks label='Medio' options={media} selection={selectedmedia} setSelection={setSelectedmedia}/>
                            
                        </div>
                        <div className="bias-chart-axis">
                            <span>
                                <div className="sub-text">Eje X</div>
                                <BasicSelect label='sesgo' options={sesgos} selection={xaxis} setSelection={setXaxis}/>
                            </span>
                            <span>
                                <div className="sub-text">Eje Y</div>
                                <BasicSelect label='sesgo' options={sesgos} selection={yaxis} setSelection={setYaxis}/>
                            </span>
                        </div>
                    </div>
                    <div className="dynamic-bias-chart">
                        {xaxis !== '' && yaxis !== '' && selectedmedia.length !== 0 ? (
                        <QuadrantChart
                            medios={selectedmedia}
                            selectedbias = {
                                selectedmedia.map((media)=> (                                    
                                    [
                                        getSelectedBias(media,xaxis),
                                        getSelectedBias(media,yaxis)
                                    ]
                                ))
                            }
                            xlabels= {labels[xaxis]}
                            ylabels= {labels[yaxis]}
                        />
                        ):
                        <MissField />
                        }
                    </div>  
                    </> 
                    :
                    <EmptyArea />
                    :
                    <LoadingArea />
                    }                   
                </div>                              
            </div>
            
        </>
    );
}

export default DynamicChartPage;

const medios = [
    {
        nombre:'www.lacuarta.com',
        sesgos:{
            conservadorProgresista:{
                conservador: 0,
                liberal: 0,
                neutral: 1
            },
            izquierdaDerecha:{
                derecha: 0,
                izquierda: 0.2857142857142857,
                neutral: 0.7142857142857143
            },
            lenguajeOfensivo:{
                noOfensivo: 0.9285714285714286,
                ofensivo: 0.07142857142857142
            },
            libertadEconomica:{
                igualdad: 0.07142857142857142,
                libertad: 0.21428571428571427,
                neutral: 0.7142857142857143
            },
            sensacionalismo:{
                noSensacionalista: 0.7142857142857143,
                sensacionalista: 0.2857142857142857
            }
        }
    },
    {
        nombre:'www.latercera.com',
        sesgos:{
            conservadorProgresista:{
                conservador: 1,
                liberal: 0,
                neutral: 0
            },
            izquierdaDerecha:{
                derecha: 0.2857142857142857,
                izquierda: 0,
                neutral: 0.7142857142857143
            },
            lenguajeOfensivo:{
                noOfensivo: 0.07142857142857142,
                ofensivo: 0.9285714285714286
            },
            libertadEconomica:{
                igualdad: 0.21428571428571427,
                libertad: 0.07142857142857142,
                neutral: 0.7142857142857143
            },
            sensacionalismo:{
                noSensacionalista: 0.2857142857142857,
                sensacionalista: 0.7142857142857143 
            }
        }
    },
    {
        nombre:'www.emol.com',
        sesgos:{
            conservadorProgresista:{
                conservador: 0.6,
                liberal: 0.4,
                neutral: 0
            },
            izquierdaDerecha:{
                derecha: 0.25,
                izquierda: 0,
                neutral: 0.75
            },
            lenguajeOfensivo:{
                noOfensivo: 0.1,
                ofensivo: 0.9
            },
            libertadEconomica:{
                igualdad: 0.3,
                libertad: 0.1,
                neutral: 0.6
            },
            sensacionalismo:{
                noSensacionalista: 0.3,
                sensacionalista: 0.7
            }
        }
    }

]