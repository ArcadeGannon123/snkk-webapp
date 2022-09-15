import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components'
import BiasBar from '../components/BiasBar'

function Period({data}) {

    return (
        <MediaContainer>  
          <div className="nombre">
            {data.nombre}
          </div>           
          <div className="media-bias">
            <div className="title">
              Sesgo detectado:
            </div>
            <div className="bias">
              <BiasBar data={{bias: data.archia, labelL: 'Pro-Archia', labelR: 'Anti-Archia'}}/>
              <BiasBar data={{bias: data.sesgo, labelL: 'Conservador', labelR: 'Progresista'}}/>
            </div>
          </div>   
       
  
        </MediaContainer>
    );
}

export default Period;

const MediaContainer = styled.div`
  display: flex;
  align-items:center;
  flex-direction:column;
  margin:10px 40px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  width: 90%;
  .nombre{
    font-size:1.4vw;
    text-align:center;
    @media screen and (max-width: 830px) {
      font-size:3vw;
    }
  }

  .media-bias{
    width:100%;

  }

`
