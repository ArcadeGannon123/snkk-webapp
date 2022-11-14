import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar from '../../components/Navbar2/Navbar';
import {Link, useLocation} from 'react-router-dom';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

function OpinionsPageDetails(props) {
    const datos = useLocation().state;
    return (
        <>   
            <Navbar />                
            <div className='front-page'>
                <div className="return-bar" style={{fontSize:'1.3rem'}}>
                    <Link style={{textDecoration: 'none'}} to='/opiniones'>
                        <ArrowBackIcon/>
                        Volver 
                    </Link>                                                          
                </div>   
                <div className="body-container">
                    <div className="column-title">
                        {datos.titulo}
                    </div>
                    <div className="column-info">
                        <div className="c-pseudo">
                            {datos.pseudo}
                        </div>
                        <div className="c-date">
                            <AccessTimeFilledIcon />
                            {datos.fecha}
                        </div>
                    </div>
                    <p className="column-body">
                        {datos.body}
                    </p>
                </div>
            </div>
        </>
    );
}

export default OpinionsPageDetails;