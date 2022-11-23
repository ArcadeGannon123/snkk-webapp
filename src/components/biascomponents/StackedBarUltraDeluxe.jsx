import React from 'react';
import Chip from '@mui/material/Chip';

function StackedBarUltraDeluxe({labels,bias,color=0}) {
    const bgColor = [
        ['#3C6E71','#D9D9D9','#284B63'],  
        ['#4a4e69','#D9D9D9','#004e98'], 
        ['#00afb9ba','#D9D9D9','#1985a1'],
        ['#9e2a2bba','#D9D9D9','#a4c3b2'], 
        ['#f8ecbeba','#970a82c8'],
        ['#00beccba','#eee4e1','#9097fbba'],        
        ['#c0c0c0ba','#403d39ba'],
    ]
    const textColor = [
        ['#fff','#284b63','#fff'],
        ['#fff','#284b63','#fff'],
        ['#fff','#284b63','#fff'],
        ['#fff','#284b63','#fff'],
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


