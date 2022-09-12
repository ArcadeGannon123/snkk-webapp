import React from 'react';
import Reliability from './Reliability';
import styled from 'styled-components';

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
                {data.length ===0 ? <p>Cargando</p> : data.map((articulo) => (<Reliability key={articulo.id} data={articulo}/>))}
              </div>
                 
            </Medios>
        </div>
    );
}

export default ReliabilityList;

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
  }




`