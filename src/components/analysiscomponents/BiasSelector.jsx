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

function BiasSelector(props) {
    const [state, setState] = React.useState({
        IzDe: true,
        PrCo: true,
        LbEc: true,
        Sens: true,
        Ofen: true,
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
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>
            </div>
            <Divider sx={{margin:'10px 0'}}/>
            <div className="selected-bias">
                <div className="bias-block" style={{display: state.IzDe ? 'block':'none'}}>
                    <div className="bias-label" > Sesgo de Izquierda o Derecha </div>
                    <StackedBarUltraDeluxe 
                        labels={['Izquierda','Centro','Derecha']} 
                        bias={[fakedata[0].izquierda,fakedata[0].centro,fakedata[0].derecha]}
                    />
                </div>
                <div className="bias-block" style={{display: state.PrCo ? 'block':'none'}}>
                    <div className="bias-label"> Sesgo Conservador-Progresista </div>
                    <StackedBarUltraDeluxe 
                        labels={['Progresista','Neutral','Conservador']} 
                        bias={[fakedata[1].conservador,fakedata[1].neutral,fakedata[1].liberal]}
                    />
                </div>
                <div className="bias-block" style={{display: state.Ofen ? 'block':'none'}}>
                    <div className="bias-label"> Lenguaje Ofensivo </div>
                    <StackedBarUltraDeluxe 
                        labels={['No Ofensivo','Ofensivo']} 
                        bias={[fakedata[2].noOfensivo,fakedata[2].ofensivo]}
                    />
                </div>
                <div className="bias-block" style={{display: state.LbEc ? 'block':'none'}}>
                    <div className="bias-label"> Libertad Ecónomica </div>
                    <StackedBarUltraDeluxe 
                        labels={['Igualdad','Neutral','Libertad']} 
                        bias={[fakedata[3].igualdad,fakedata[3].neutral,fakedata[3].libertad]}
                    />
                </div>
                <div className="bias-block" style={{display: state.Sens ? 'block':'none'}}>
                    <div className="bias-label"> Lenguaje sensacionalista </div>
                    <StackedBarUltraDeluxe 
                        labels={['No Sensacionalista','Sensacionalista']} 
                        bias={[fakedata[4].noSensacionalista,fakedata[4].sensacionalista]}
                    />
                </div>
            </div>

        </div>
    );
}

export default BiasSelector;