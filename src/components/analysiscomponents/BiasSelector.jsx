import React from 'react';
import StackedBarUltraDeluxe from '../biascomponents/StackedBarUltraDeluxe';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';

const fakedata=[
{
    izquierda:0.2,
    centro:0.2,
    derecha:0.6
},
{
    conservador:0.2,
    neutral:0.5,
    liberal:0.3
},
{
    noOfensivo:0.2,
    ofensivo:0.8
},
{
    igualdad:0.3,
    neutral:0.3,
    libertad:0.4
},
{
    noSensacionalista:0.8,
    sensacionalista:0.2,
},
]

function BiasSelector({data}) {
    const [state, setState] = React.useState({
        IzDe: true,
        PrCo: false,
        LbEc: false,
        Sens: false,
        Ofen: false,
        Gene: false
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };
    return (
        <div className='bias-selector-wrapper'>
            <div className="bias-switches">
                <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">Sesgos a evaluar</FormLabel>
                    <FormGroup row={true} sx={{color:'#284b63c7'}}>
                        <FormControlLabel
                            
                            control={
                                <Switch checked={state.IzDe} onChange={handleChange} name="IzDe" />
                            }
                            label="Izquierda-Derecha"
                        />
                        <FormControlLabel
                            control={
                                <Switch checked={state.PrCo} onChange={handleChange} name="PrCo" />
                            }
                            label="Progresista-Conservador"
                        />
                        <FormControlLabel
                            control={
                                <Switch checked={state.LbEc} onChange={handleChange} name="LbEc" />
                            }
                            label="Libertad Económica"
                        />
                        <FormControlLabel
                            control={
                                <Switch checked={state.Sens} onChange={handleChange} name="Sens" />
                            }
                            label="Sensacionalismo"
                        />
                        <FormControlLabel
                            control={
                                <Switch checked={state.Ofen} onChange={handleChange} name="Ofen" />
                            }
                            label="Lenguaje ofensivo"
                        />
                        <FormControlLabel
                            control={
                                <Switch checked={state.Gene} onChange={handleChange} name="Gene" />
                            }
                            label="Sesgo de género"
                        />
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>
            </div>
            <Divider sx={{margin:'10px 0'}}/>
            <div className="selected-bias">
                <div className="bias-block" style={{display: state.IzDe ? 'block':'none'}}>
                    <div className="bias-label" > Sesgo de Izquierda o Derecha </div>
                    <StackedBarUltraDeluxe 
                        color={0}
                        labels={['Izquierda','Centro','Derecha']} 
                        bias={[data.sesgoIzquierdaDerecha.izquierda,data.sesgoIzquierdaDerecha.neutral,data.sesgoIzquierdaDerecha.derecha]}
                    />
                </div>
                <div className="bias-block" style={{display: state.PrCo ? 'block':'none'}}>
                    <div className="bias-label"> Sesgo Conservador-Progresista </div>
                    <StackedBarUltraDeluxe 
                        color={1}
                        labels={['Progresista','Neutral','Conservador']} 
                        bias={[data.sesgoConservadorProgresista.conservador,data.sesgoConservadorProgresista.neutral,data.sesgoConservadorProgresista.liberal]}
                    />
                </div>
                <div className="bias-block" style={{display: state.LbEc ? 'block':'none'}}>
                    <div className="bias-label"> Libertad Ecónomica </div>
                    <StackedBarUltraDeluxe 
                        color={2}
                        labels={['Igualdad','Neutral','Libertad']} 
                        bias={[data.sesgoLibertadEconomica.igualdad,data.sesgoLibertadEconomica.neutral,data.sesgoLibertadEconomica.libertad]}
                    />
                </div>
                <div className="bias-block" style={{display: state.Sens ? 'block':'none'}}>
                    <div className="bias-label"> Lenguaje sensacionalista </div>
                    <StackedBarUltraDeluxe 
                        color={4}
                        labels={['No Sensacionalista','Sensacionalista']} 
                        bias={[data.sesgoSensacionalismo.noSensacionalista,data.sesgoSensacionalismo.sensacionalista]}
                    />
                </div>
                <div className="bias-block" style={{display: state.Gene ? 'block':'none'}}>
                    <div className="bias-label"> Sesgo de género </div>
                    <StackedBarUltraDeluxe 
                        color={5}
                        labels={['Masculino','Neutro','Femenino']} 
                        bias={[data.sesgoGenero.masculino,data.sesgoGenero.desconocido,data.sesgoGenero.femenino]}
                    />
                </div>
                <div className="bias-block" style={{display: state.Ofen ? 'block':'none'}}>
                    <div className="bias-label"> Lenguaje Ofensivo </div>
                    <StackedBarUltraDeluxe 
                        color={6}
                        labels={['No Ofensivo','Ofensivo']} 
                        bias={[data.sesgoLenguajeOfensivo.noOfensivo,data.sesgoLenguajeOfensivo.ofensivo]}
                    />
                </div>
            </div>

        </div>
    );
}

export default BiasSelector;