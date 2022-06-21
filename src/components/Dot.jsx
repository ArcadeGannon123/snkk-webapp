import React from 'react';
import styled from 'styled-components'

function Dot({data}) {
    return (
        <Point>
            <span className='point' style={data.style}>
            <div>{data.bias}</div>
            </span>
    
        </Point>
    );
}

export default Dot;

const Point = styled.div`
    .point {
        height: 50px;
        width: 50px;
        color: #ffffff;
        border-radius: 50%;
        display: inline-block;
        text-align: center;
        font-size:1em;
        margin: auto;
        display:block;
        position: relative;

        
    }

    .point div{
        position:relative;
        top:1.4em;
        font-size:0.8em;
    }

`