import React from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from 'react-router-dom';

function ColumnRow({datos}) {
    return (            
        <div className='column-wrapper'>
            <div className="column-data">
                <Link style={{textDecoration: 'none'}}
                    to={'/opiniones/detalles'}
                    state= {datos}
                >
                    <div className="column-title title-hover">
                        {datos.titulo}
                    </div>
                </Link>
                <div className="column-info">
                    <div className="c-icon-text">                        
                        <PersonIcon />
                        {datos.pseudonimo}
                    </div>
                    <div className="c-icon-text">
                        <AccessTimeFilledIcon />
                        {datos.fecha.split('T')[0]}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ColumnRow;