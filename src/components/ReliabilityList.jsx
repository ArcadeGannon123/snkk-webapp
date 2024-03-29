import React from 'react';
import Reliability from './Reliability';
import styled from 'styled-components';
import { Puff } from 'react-loading-icons';

function ReliabilityList({data}) {
    return (
        <div>
            <Head>
              <h1>Confiabilidad de los medios</h1>       
              <hr/>        
            </Head>
            <Medios>
              <div className="news-filter-mobile">  
              </div>
              <div className='media-list'>
                {data.length ===0 ? <LoadingIcon><Puff stroke='#669495' /></LoadingIcon> : data.map((articulo) => (<Reliability key={articulo.id} data={articulo}/>))}
              </div>
                 
            </Medios>
        </div>
    );
}

export default ReliabilityList;

const LoadingIcon = styled.div`
  display:flex;
  justify-content:center;
`


const Head = styled.div`
  padding: 10px;
  margin-top: 10px; 
  h1{
    font-size: 20px;

  }

`

const Medios = styled.div`
  .media-list{
    margin:auto;
    padding: 0 50px;
    @media screen and (max-width: 500px) {
      padding: 0 10px;
    }
  }




`