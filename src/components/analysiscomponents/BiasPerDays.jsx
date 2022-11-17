import React from 'react';
import { StackedBarChart } from '../charts/StackedBarChart';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BiasPerDays({data}) {

    const [days, setDays] = React.useState(5);

    const handleChange = (event) => {
        setDays(event.target.value);
    };

    return (
        <>       
        <div className="subtitle-bar" style={{fontSize:'1.3rem'}}>
            <NewspaperIcon/>
            Análisis   
            <div style={{display:'flex',flexGrow:1,justifyContent:'flex-end'}}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">últimos...</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={days}
                        label="últimos..."
                        onChange={handleChange}
                        >
                        <MenuItem value={5}>5 Días</MenuItem>
                        <MenuItem value={10}>10 Días</MenuItem>
                        <MenuItem value={15}>15 Días</MenuItem>
                        <MenuItem value={20}>20 Días</MenuItem>
                        <MenuItem value={25}>25 Días</MenuItem>
                        <MenuItem value={30}>30 Días</MenuItem>
                        </Select>
                    </FormControl>
                </Box> 
            </div>

                                
        </div>    
        <div className='bpd-report'>            
            <div className="stackedbar-chart">
                <StackedBarChart 
                    title='Sesgo Izquierda Derecha' 
                    labels={['Izquierda','Centro','Derecha']}
                    color='izder'
                    bias={[
                        data.sesgoIquierdaDerecha.map((sesgo)=>( parseFloat(sesgo.izquierda.toFixed(2)) )).slice(0,days),
                        data.sesgoIquierdaDerecha.map((sesgo)=>( parseFloat(sesgo.neutral.toFixed(2)) )).slice(0,days),
                        data.sesgoIquierdaDerecha.map((sesgo)=>( parseFloat(sesgo.derecha.toFixed(2)) )).slice(0,days),
                    ]} />
            </div>
            <div className="stackedbar-chart">
                <StackedBarChart 
                    title='Sesgo Conservador Progresista' 
                    labels={['Conservador','Neutral','Progresista']}
                    color='copr'
                    bias={[
                        data.sesgoConservadorProgresista.map((sesgo)=>( parseFloat(sesgo.conservador.toFixed(2)) )).slice(0,days),
                        data.sesgoConservadorProgresista.map((sesgo)=>( parseFloat(sesgo.neutral.toFixed(2)) )).slice(0,days),
                        data.sesgoConservadorProgresista.map((sesgo)=>( parseFloat(sesgo.liberal.toFixed(2)) )).slice(0,days),
                    ]} />
            </div>
            <div className="stackedbar-chart">
                <StackedBarChart 
                    title='Sesgo en Libertad Economica' 
                    labels={['Conservador','Neutral','Progresista']}
                    color='libe'
                    bias={[
                        data.sesgoLibertadEconomica.map((sesgo)=>( parseFloat(sesgo.igualdad.toFixed(2)) )).slice(0,days),
                        data.sesgoLibertadEconomica.map((sesgo)=>( parseFloat(sesgo.neutral.toFixed(2)) )).slice(0,days),
                        data.sesgoLibertadEconomica.map((sesgo)=>( parseFloat(sesgo.libertad.toFixed(2)) )).slice(0,days),
                    ]} />
            </div>
            <div className="stackedbar-chart">
                <StackedBarChart 
                    title='Sesgo Sensacionalista' 
                    labels={['No sensacionalista','sensacionalista']}
                    color='sens'
                    bias={[
                        data.sesgoSensacionalismo.map((sesgo)=>( parseFloat(sesgo.noSensacionalista.toFixed(2)) )).slice(0,days),
                        data.sesgoSensacionalismo.map((sesgo)=>( parseFloat(sesgo.sensacionalista.toFixed(2)) )).slice(0,days),
                    ]} />
            </div>
            <div className="stackedbar-chart">
                <StackedBarChart 
                    title='Lenguaje ofensivo' 
                    labels={['No Ofensivo','Ofensivo']}
                    color='ofen'
                    bias={[
                        data.sesgoLenguajeOfensivo.map((sesgo)=>( parseFloat(sesgo.noOfensivo.toFixed(2)) )).slice(0,days),
                        data.sesgoLenguajeOfensivo.map((sesgo)=>( parseFloat(sesgo.ofensivo.toFixed(2)) )).slice(0,days),
                    ]} />
            </div>
            
        </div>
        </>
    );
}

export default BiasPerDays;