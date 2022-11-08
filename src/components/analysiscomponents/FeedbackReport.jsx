import React from 'react';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BiasSelector from './BiasSelector';



function FeedbackReport(props) {
    return (
        <div>
            <div className="subtitle-bar" style={{fontSize:'1.3rem'}}>
                <NewspaperIcon/>
                Análisis   
            </div>
            <div className="bias-selector-container">
                <BiasSelector />
            </div>
        </div>
    );
}

export default FeedbackReport;