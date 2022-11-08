import React from 'react';
import Chip from '@mui/material/Chip';

function StackedBarUltraDeluxe({labels,bias}) {

    const bgColor = [
        '#083e77ab',
        '#f4d35eab',
        '#f95738ab'
    ]
    const textColor = [
        '#fff',
        '#284b63',
        '#fff'
    ]

    return (
        <div className="stacked-bar-container">       
            <div className='stacked-bar-wrapper' style={{
                display:'grid',
                width:'100%',
                gridTemplateColumns: bias.length === 2 ? 
                                    `${Math.round(bias[0]*100)}% ${Math.round(bias[1]*100)}%` : 
                                    `${Math.round(bias[0]*100)}% ${Math.round(bias[1]*100)}% ${Math.round(bias[2]*100)}%`,
            }}>

                {bias.map((sesgo,i)=>(
                <div className='sb-bias' key={i} style={{backgroundColor:bgColor[i],color:textColor[i]}} data-aos="flip-up" data-aos-delay={((i+1)*50).toString()} data-aos-once='true'>
                    {Math.round(sesgo*100)}%
                </div>
                ))}

            </div>
            <div className="sb-labels">
                {labels.map((label,i)=>(
                <Chip label={label} className="sb-label" key={i} sx={{backgroundColor:bgColor[i],color:textColor[i]}} />
                ))}                
            </div>
        </div>
    );
}

export default StackedBarUltraDeluxe;