import React from 'react';
import styled from 'styled-components';

function DashScore({data}) {
    return (
        <Dscore> 
            <div className="text title">
                {data.title}
            </div>
            <div className="text value">
                {data.score}
            </div>
        </Dscore>
    );
}

export default DashScore;

const Dscore = styled.div`
display:grid;
align-items: center;
justify-content:center;    
background-color:white;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
.text{
    text-align:center;
}
.value{
    font-size:50px;
    font-weight: 600;
    color: #669495;
}
`