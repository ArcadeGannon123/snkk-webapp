import React from 'react';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BiasSelector from './BiasSelector';



function FeedbackReport({data}) {
    return (
        <div>
            <div className="subtitle-bar" style={{fontSize:'1.3rem'}}>
                <NewspaperIcon/>
                Análisis   
            </div>
            <div className="bias-selector-container">
                <BiasSelector data={data} />
            </div>
        </div>
    );
}

export default FeedbackReport;