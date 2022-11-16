import React from 'react';
import './Utils.css';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';

function MissField(props) {
    return (
        <div className='miss-message'>
            <div className="scatter-icon">
                <ScatterPlotIcon fontSize='large'/>
            </div>
            <p className='text-message'>Ingrese los datos</p>
        </div>
    );
}

export default MissField;