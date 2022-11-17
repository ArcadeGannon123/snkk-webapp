import React,{useState, useEffect} from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Cookies from 'universal-cookie';
import Button from '@mui/material/Button';
import './TwitterPage.css'
import ComboBox from '../../components/TwitterComponents/ComboBox';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmptyArea from '../../components/UtilsComponents/EmptyArea';
import LoadingArea from '../../components/UtilsComponents/LoadingArea';
import AnalysisReport from '../../components/analysiscomponents/AnalysisReport';



function TwitterPage(props) {
    
    const cookies = new Cookies();
    const userData = cookies.get('userData');

    const [biasmedios,setBiasmedios]= useState(null);
    const [biaspartidos,setBiaspartidos]= useState(null);

    const [medios,setMedios]= useState(null);
    const [partidos,setPartidos]= useState(null);
    
    const [selectedmedios,setSelectedmedios]= useState('');
    const [selectedpartido,setSelectedpartido]= useState('');
    const [datos, setDatos] = useState(null);
    
    const [value, setValue] = useState(0);

    const getMedios = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/twitter/medios';  
        await axios.get(url)
        .then(res => {       
            console.log(res.data.length)  
            if (res.data.length !== 0) {                               
                setBiasmedios(res.data);
                const _medios = res.data.map(medio => medio.medio);
                setMedios(_medios);
            }else{
                setBiasmedios([]);
                setMedios([]);
            }
            
        })
        .catch(err => {
            console.log(err)
        })
        .finnaly
    }
    const getPartidos = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/twitter/partidos';  
        await axios.get(url)
        .then(res => {          
            console.log(res.data.length)      
            if (res.data.length !== 0) {       
                setBiaspartidos(res.data)   
                const _partidos = res.data.partidos.map(partido => partido.partido);
                setPartidos(_partidos);
            }else{
                setBiaspartidos([]);
                setPartidos([]);
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleChange = (event, newValue) => {
        setDatos(null);
        setValue(newValue);
    };

    const handleSelection = () =>{
        if (value === 0) {
            const _datos = biasmedios.find(o => o.medio === selectedmedios);
            setDatos(_datos);
        }else{
            const _datos = biaspartidos.partidos.find(o => o.partido === selectedpartido);
            setDatos(_datos);
        }
        console.log(datos);
    }


    const selectedTab = (tab) =>{
        switch(tab){
            case 0:
                return (
                    biasmedios ?                     
                    biasmedios.length !== 0 ? 
                    <>
                    <div className="sub-text" style={{marginBottom:'10px'}}>{'Seleccione un medio de comunicación:'}</div>
                    <div className="selection-box">
                        <ComboBox key='medios' label={'Medio'} options={medios} setSelection={setSelectedmedios}/>
                        {selectedmedios !== '' && <Button onClick={handleSelection} variant="outlined" startIcon={<TwitterIcon/>}>Ver Análisis</Button>}
                    </div>
                    
                    </>
                    :
                    <EmptyArea />
                    :
                    <LoadingArea />
                );
            default:
                return (
                    biaspartidos ?                     
                    biaspartidos.length !== 0 ? 
                    <>
                    <div className="sub-text" style={{marginBottom:'10px'}}>{'Seleccione un partido político:'}</div>
                    <div className="selection-box">
                        <ComboBox key='partidos' label={'Partido político'} options={partidos} setSelection={setSelectedpartido}/>
                        {selectedpartido !== '' && <Button onClick={handleSelection} variant="outlined" startIcon={<TwitterIcon/>}>Ver Análisis</Button>}
                    </div>
                    </>
                    :
                    <EmptyArea />
                    :
                    <LoadingArea />
                )
        }
    }

    useEffect(() => {       
        getMedios();
        getPartidos();
    }, []);
  
    return (
        <>  
            <Navbar />          
            <div className='front-page'>
                <div className="main-title">
                    <span>
                        <TwitterIcon/>
                        Análisis de twitter
                    </span>                                     
                </div>        
                <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper', padding:'0 1rem'}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >                  
                        <Tab key='Twitter-de-medios' label='Medios de comunicación' />
                        <Tab key='Twitter-de-pp' label='Partidos políticos' />
                    </Tabs>
                </Box>                   
                <div className="body-container">
                    {selectedTab(value)}                
                </div>
                {datos && (
                <div className="selected-analysis">                    
                    <AnalysisReport 
                        data={{
                            izquierdaDerecha: {
                                izquierda:datos?.sesgoIzquierdaDerecha?.izquierda,
                                neutral:datos?.sesgoIzquierdaDerecha?.neutral,
                                derecha:datos?.sesgoIzquierdaDerecha?.derecha
                            },
                            lenguajeOfensivo: {
                                noOfensivo:datos?.sesgoLenguajeOfensivo?.noOfensivo,
                                ofensivo:datos?.sesgoLenguajeOfensivo?.ofensivo
                            },
                            sensacionalismo: {
                                noSensacionalista:datos?.sesgoSensacionalismo?.noSensacionalista,
                                sensacionalista:datos?.sesgoSensacionalismo?.sensacionalista
                            },
                            conservadorProgresista: {
                                liberal:datos?.sesgoConservadorProgresista?.liberal,
                                neutral:datos?.sesgoConservadorProgresista?.neutral,
                                conservador:datos?.sesgoConservadorProgresista?.conservador
                            },
                            libertadEconomica: {
                                igualdad:datos?.sesgoLibertadEconomica?.igualdad,
                                neutral:datos?.sesgoLibertadEconomica?.neutral,
                                libertad:datos?.sesgoLibertadEconomica?.libertad
                            }
                        }}
                    />
                </div>
                )}
            </div>
        </>
    );
}

export default TwitterPage;
