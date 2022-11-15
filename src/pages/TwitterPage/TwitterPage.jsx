import React,{useState, useEffect} from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import FirstNews from '../../components/NewsComponents/FirstNews';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RowNews from '../../components/NewsComponents/RowNews';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Cookies from 'universal-cookie';
import Button from '@mui/material/Button';
import BarChartIcon from '@mui/icons-material/BarChart';
import {Adsense} from '@ctrl/react-adsense';
import LinearProgress from '@mui/material/LinearProgress';
import './TwitterPage.css'
import ComboBox from '../../components/TwitterComponents/ComboBox';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmptyArea from '../../components/UtilsComponents/EmptyArea';
import LoadingArea from '../../components/UtilsComponents/LoadingArea';
import { Switch } from '@mui/material';

const Partidos =[
    'Unión Demócrata Independiente',
    'Renovación Nacional',
    'Partido Socialista de Chile',
    'Partido Demócrata Cristiano',
    'Unión Demócrata Independiente2',
    'Renovación Nacional2',
    'Partido Socialista de Chile2',
    'Partido Demócrata Cristiano2'
]

function TwitterPage(props) {
    
    const cookies = new Cookies();
    const userData = cookies.get('userData');

    const [medios,setMedios]= useState(null);
    const [partidos,setPartidos]= useState(Partidos);

    
    const [selectedmedios,setSelectedmedios]= useState('');
    const [selectedpartido,setSelectedpartido]= useState('');
    
    const [medio,setMedio]= useState(null);
    const [topics,setTopics]= useState(['Todos']);
    const [value, setValue] = useState(0);

    const getMedios = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/medio/confiabilidad-medios';  
        await axios.get(url)
        .then(res => {     
            const _medios =   res.data.map(media => media.medio)                           
            setMedios(_medios)        
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setMedio(medios[newValue]);
    };

    const selectedTab = (tab) =>{
        switch(tab){
            case 0:
                return (
                    medios ?                     
                    medios.length !== 0 ? 
                    <>
                    <div className="sub-text" style={{marginBottom:'10px'}}>{'Seleccione un medio de comunicación:'}</div>
                    <div className="selection-box">
                        <ComboBox key='medios' label={'Medio'} options={medios} setSelection={setSelectedmedios}/>
                    </div>
                    </>
                    :
                    <EmptyArea />
                    :
                    <LoadingArea />
                );
            default:
                return (
                    partidos ?                     
                    partidos.length !== 0 ? 
                    <>
                    <div className="sub-text" style={{marginBottom:'10px'}}>{'Seleccione un partido político:'}</div>
                    <div className="selection-box">
                        <ComboBox key='partidos' label={'Partido político'} options={partidos} setSelection={setSelectedpartido}/>
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

            </div>
        </>
    );
}

export default TwitterPage;
