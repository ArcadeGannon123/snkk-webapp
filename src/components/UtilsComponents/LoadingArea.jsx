import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingArea(props) {
    return (
        <div className='empty-message'>
            <div className="loading-icon">
                <CircularProgress />
            </div>
            <p className='text-message'>Cargando</p>
        </div>
    );
}

export default LoadingArea;