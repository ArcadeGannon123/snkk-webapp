import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AnalysisReport from './AnalysisReport';
import BiasPerDays from './BiasPerDays';
import axios from 'axios';
import PPselector from './PPselector';

function AnalysisSelector({medio}) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [data,setData]= useState(null);
    const [bpd,setBpd]= useState(null);
    const [periodistas,setPeriodistas]= useState(null);
    const [sentimiento,setSentimiento]= useState(null);

    const getSentimiento= async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/sentimiento/partidos?medio='+medio; 
        await axios.get(url)
        .then(res => {                                
            setSentimiento(res.data)        
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getCambioBias= async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/medio/sesgo-por-dia-acumulado'; 
        const body={
            url:medio,
            dias:30
        };    
        await axios.post(url,body)
        .then(res => {                                
            setBpd(res.data)        
        })
        .catch(err => {
            console.log(err)
        })
    }
    const getData = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/medio/sesgo'; 
        const body={url:medio};    
        await axios.post(url,body)
        .then(res => {                             
            setData(res.data)        
        })
        .catch(err => {
            console.log(err)
        })
    }
    const getPeriodista = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/periodista/medio'; 
        const body={url:medio};     
        await axios.post(url,body)
        .then(res => {                            
            setPeriodistas(res.data)      
        })
        .catch(err => {
            console.log(err)
        })
    }    
    useEffect(() => {  
        getData();
        getPeriodista();        
        getCambioBias();
        getSentimiento();
    }, []);


    const selectedTab = (tab) =>{
        switch(tab){
            case 0:
                return data ? <AnalysisReport data={data.sesgos}/>: <></>;
            case 1:
                return bpd ? <BiasPerDays data={bpd}/>:<></>;
            case 2:
                return sentimiento ? <PPselector data={sentimiento}/>:<></>;
            default:
                return <></>;
        }
    }

    return (
        <>
            <Box sx={{ width: '100%', bgcolor: 'background.paper'}}>
                <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" >
                    <Tab label="Sesgo promedio" />
                    <Tab label="Sesgo de los ultimos dias" />
                    <Tab label="Partidos políticos" />
                    <Tab label="Periodistas" />
                </Tabs>
            </Box> 
            {selectedTab(value)}
            
        </>
    );
}

export default AnalysisSelector;