import React from 'react';
import styled from 'styled-components'

function BiasBar({data}) {
    const check_bias = (bias) =>{
        if(bias <= 0.2){
            return 'Anti-Archia'
        }else if(bias <=0.4){
            return 'Semi-Anti-Archia'
        }else if(bias <=0.6){
            return 'Neutral'
        }else if(bias <=0.8){
            return 'Semi-Pro-Archia'
        }else{
            return 'Pro-Archia'
        }
    }




    return (
        <BiasContainer>
            <div className="bias-label">
                {data.labelL}
            </div>
            <div className="bias-bar" >
                {data.bias !== -1 ?                    
                <BiasCircle variant={data.bias*100}><div className="circle"/></BiasCircle>
                :
                <></>
                }
            </div>
            <div className="bias-label">
                {data.labelR}
            </div>
        </BiasContainer>
    );
}

export default BiasBar;

const BiasCircle = styled.div`
    position:relative;
    height:8px;
    width:8px;
    left:${(props) => props.variant > 100 ? 100 : props.variant}%;
    .circle{        
        height:100%;
        position:relative;
        right:50%;    
        background-color: white;
        border: 1px solid #669495;
        border-radius:50%;
    }
`


const BiasContainer = styled.div`
padding: 15px 0;
height:20px;
display:flex;
justify-content:flex-end;
align-items:center;
.bias-label{
    font-size: 0.8em;
    font-weight:500;
    width:25%;
    text-align:center;
}
.bias-bar{
    width:40%;
    height:10px;
    margin: 0 10px;
    border-radius:50px;
    border: 1px solid #669495;
    background: linear-gradient(90deg, rgba(102,148,149,1) 0%, rgba(144,216,218,1) 48%, rgba(102,148,149,1) 100%);

}
`