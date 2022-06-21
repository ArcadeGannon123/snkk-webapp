import React from 'react';
import Dot from './Dot';
import styled from 'styled-components'

function Reliability({data}) {
    
    const bias_color ={
        'far-left': '#2e64a0',
        'lean-left': '#9dc8eb',
        'center': '#96659e',
        'lean-right': '#cb9a98',
        'far-right': '#ca0800',
      }
 
    return (
        <Articulo>       
            
            <img src={data.urlToLogo} alt=''/>
            <h2>{data.source.name}</h2>
            <h3>Confiabilidad percibida:</h3>
            <div className='data-rel'>{data.reliability}</div>
            <h3>Sesgo promedio del medio:</h3>
            <Dot data={{ bias:data.bias, style:{backgroundColor:bias_color[data.bias]} }} />
    
            
        </Articulo>
    );
}

export default Reliability;

//box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
const Articulo = styled.div`
  background-color: #ffffff;
  position:relative;
  padding: 1em;
  border: 1px solid #878680;
  border-radius: 10px;

  h2{
    color: #669495;
  }
  img{
    margin: 1em;
    display: block;
    max-width:90%;
    margin-left: auto;
    margin-right: auto;
  }
  .data-rel{
    text-align:center;
    font-weight: bold;
    font-size: 2em;
    margin:0.2em;

  }


`
