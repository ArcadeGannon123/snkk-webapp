import React from 'react';
import styled from 'styled-components';

function DashScore({data}) {
    return (
        <Dscore> 
            <div className="d-text d-title">
                {data.title}
            </div>
            <div className="d-text d-value">
                {data.score}
            </div>
        </Dscore>
    );
}

export default DashScore;

const Dscore = styled.div`  
display:grid;
justify-content:center;
align-items:center; 
background-color:white;
position:relative;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
height:100%;
.d-text{
    
    color:#284b63c7;
    text-align:center;
    font-weight:300;
    font-size:1.3rem;
}
.d-title{
}
.d-value{
    font-size:2rem;
    font-weight: 600;
    color: #669495;
    padding-bottom:1.3rem;
}
`