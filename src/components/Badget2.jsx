import React from 'react';
import Chip from '@mui/material/Chip';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const Nivel=[
    'Novato',
    'Bronce',
    'Plata',
    'Oro',
    'diamante'
]
const Color=[
    'white',
    '#FFEBCD',
    '#C0C0C0',
    '#FFD700',
    '#AFDDFF'
]

function Badget2({nivel}) {

    return (
        <div style={{display:'flex',gap:'10px', alignItems:'center'}}>
            <Chip icon={<MilitaryTechIcon />} sx={{backgroundColor:Color[nivel]}} label={Nivel[nivel]} variant="outlined" />
        </div>
    );
}

export default Badget2;