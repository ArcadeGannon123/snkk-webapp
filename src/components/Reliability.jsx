import React from 'react';
import styled from 'styled-components'

function Reliability({data}) {
    
    return (
        <Articulo>  
          <div className='media-name'>
            {data.nombre}
          </div>        
          <a href={`https://${data.url}`} target="_blank" rel="noreferrer noopener">
            <img src={`https://logo.clearbit.com/${data.url}`} alt=''/>
          </a>     
          
          
          <span>Sesgo promedio del medio:</span>
          <div className='data-rel'>{data.bias}</div>
  
            
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



  .media-name{
    position:relative;
    color: #669495;
    text-align:center;
    font-size: 1em;
    font-weight:bold;
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
