import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components'
import BiasBar from '../components/BiasBar'

function Reliability({data}) {

    return (
        <MediaContainer>  
          <div className='media-logo'>
            <a href={`https://${data.url}`} target="_blank" rel="noreferrer noopener">
              <img src={`https://logo.clearbit.com/${data.url}`} alt=''/>
              {data.nombre.replace('www.','')}
            </a> 
          </div>   
          <div className="media-data">
            <div className="media-rep">
              <div className="title">
                Reputación del medio:
              </div>
              <MediaStart variant={100 - (data.metricas ? data.metricas.confiabilidad : 0)*100/5}>
                <div className="stars">
                  <div className="out-stars">
                    <AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                  </div>                  
                  <div className="fill-stars">
                    <div className="blank" />
                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                  </div>
                </div>
              </MediaStart>
            </div> 
            <div className="media-bias">
              <div className="title">
                Sesgo del medio:
              </div>
              <div className="bias">
                <BiasBar data={{bias: data.metricas ? data.metricas.sesgo : 0.5, labelL: 'Anti-Archia', labelR: 'Pro-Archia'}}/>
              </div>
            </div>
          </div>     
       
  
        </MediaContainer>
    );
}

export default Reliability;

const MediaStart = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  .stars{
    display:flex;
    justify-content:center;
    font-size:1.5em;
  }

  .out-stars{
    z-index:10;
    
  }
  .blank{    
    position:absolute;
    background-color:white;
    height:100%;
    width:${(props) => props.variant}%;
    right:0;
    z-index:5;
  }
  .fill-stars{
    position:absolute;    
    z-index:1;
  }

`

const MediaContainer = styled.div`
  display: grid;
  align-items:center;
  grid-template-columns:30% auto;
  margin:10px;
  border: 1px solid grey;
  border-radius: 10px;

  @media screen and (max-width: 750px) {
    display:flex;
    flex-direction: column;
    align-items:center;
  }


  .media-logo a{
    margin: 10px;
    display:flex;
    flex-direction: column;
    align-items:center;
    text-decoration:none;
    color:black;
    font-size: 1.2vw;
    img{
      height:100px;
      background-color:black;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 1000px) {
      
      font-size: 1.8vw;
    }
    @media screen and (max-width: 750px) {
      font-size: 4vw;
    }
  }
  .media-data{
    padding-right: 20px;
    @media screen and (max-width: 750px) {
      padding-right:0;
      width:90%;
    }
    
  }

  .media-bias .bias{
    @media screen and (max-width: 500px) {
      padding: 30px 0;
    }
  }

`
