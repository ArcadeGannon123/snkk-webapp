import React from 'react';
import Chip from '@mui/material/Chip';

function StackedBarUltraDeluxe({labels,bias,color=0}) {
    const bgColor = [
        ['#083e77ab','#f4d35eab','#f95738ab'],  
        ['#f72585','#ffb3c6','#3a0ca3'], 
        ['#00afb9','#fdfcdc','#80b918'],
        ['#9e2a2b','#efd3d7','#d9ed92'], 
        ['#f8ecbe','#970a81'],
        ['#00becc','#fffbb0','#9097fb'],        
        ['#c0c0c0','#403d39'],
    ]
    const textColor = [
        ['#fff','#284b63','#fff'],
        ['#fff','#284b63','#fff'],
        ['#fff','#284b63','#fff'],
        ['#fff','#284b63','#284b63'],
        ['#284b63','#fff','#fff'],
        ['#fff','#284b63','#fff'],
        ['#284b63','#fff','#fff']    
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
                <div className='sb-bias' key={i} style={{backgroundColor:bgColor[color][i],color:textColor[color][i]}} data-aos="flip-up" data-aos-delay={((i+1)*50).toString()} data-aos-once='true'>

                    {Math.round(sesgo*100) !== 0 ? Math.round(sesgo*100)+'%':''}
                </div>
                ))}

            </div>
            <div className="sb-labels">
                {labels.map((label,i)=>(
                <Chip label={label} className="sb-label" key={i} sx={{backgroundColor:bgColor[color][i],color:textColor[color][i]}} />
                ))}                
            </div>
        </div>
    );
}

export default StackedBarUltraDeluxe;


