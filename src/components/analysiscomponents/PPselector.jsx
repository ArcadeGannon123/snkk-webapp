import React,{useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import Button from '@mui/material/Button';
import ComboBox from '../TwitterComponents/ComboBox';
import EmptyArea from '../UtilsComponents/EmptyArea';
import LoadingArea from '../UtilsComponents/LoadingArea';
import GroupsIcon from '@mui/icons-material/Groups';
import StackedBarUltraDeluxe from '../biascomponents/StackedBarUltraDeluxe';



function PPselector({data}) {
    
    const [partidos,setPartidos]= useState(null);
    
    const [selectedpartido,setSelectedpartido]= useState('');
    const [datos, setDatos] = useState(null);



    const handleSelection = () =>{
        const _datos = data[selectedpartido];
        setDatos(_datos);
    }

    const getPartidos =() =>{
        const _partidos = Object.keys(data);
        setPartidos(_partidos);
    }


    useEffect(() => {  
        getPartidos();
    }, []);
  
    return (
        <>  
            <div className="main-title" style={{marginTop:'10px'}}>
                <span>
                    <GroupsIcon/>
                    Sentimiento hacia partidos políticos
                </span>                                     
            </div>
            <div className="body-container">

            
            {partidos ?                     
            partidos.length !== 0 ? 
            <>
            <div className="sub-text" style={{marginBottom:'10px'}}>{'Seleccione un Partido político:'}</div>
            <div className="selection-box">
                <ComboBox key='Partidos' label={'Partidos'} options={partidos} setSelection={setSelectedpartido}/>
                {selectedpartido !== '' && <Button onClick={handleSelection} variant="outlined" >Ver sentimiento</Button>}
            </div>
            
            </>
            :
            <EmptyArea />
            :
            <LoadingArea />}
            {datos && (
            <div className="bias-block">
                <div className="bias-label"> Sentimiento del medio </div>
                <StackedBarUltraDeluxe
                    color={3}
                    labels={['Negativo','Neutral','Positivo']} 
                    bias={[ datos?.negativo,
                            datos?.neutral,
                            datos?.positivo]}                    
                />
            </div>  )}
            </div>
        </>
    );
}

export default PPselector;
