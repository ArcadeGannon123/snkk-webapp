import React from 'react';
import styled from 'styled-components'
//import Dot from './Dot';

function Reliability({data}) {
/*
  const bias_color ={
    'U-P': '#2e64a0',
    'P': '#9dc8eb',
    'Centro': '#96659e',
    'C': '#cb9a98',
    'U-C': '#ca0800',
    '0':'#000'
  }

  const check_bias = (bias) =>{
    console.log(bias);
    if(bias < 0.2){
      return 'U-C'
    }else if(bias <0.4){
      return 'C'
    }else if(bias <0.6){
      return 'Centro'
    }else if(bias <0.8){
      return 'P'
    }else{
      return 'U-P'
    }

  }
    */
    return (
        <Articulo>  
          <div className='media-name'>
            <a href={`https://${data.url}`} target="_blank" rel="noreferrer noopener">
              {data.nombre}
            </a> 
          </div>        
          <a href={`https://${data.url}`} target="_blank" rel="noreferrer noopener">
            <img src={`https://logo.clearbit.com/${data.url}`} alt=''/>
          </a>     
          
          
          <span>Confiabilidad del medio:</span>
          <div className='reliability'>
            {data.bias}
          </div>
             
        

  
            
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

  .reliability{
    text-align:center;
    font-size:2em;
    color:#669495;
  }


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
