import React from 'react';
import Reliability from './Reliability';
import styled from 'styled-components';

function ReliabilityList({data}) {
    return (
        <div>
            <Head>
              <h1>Confianza percibida de los medios comunicación</h1>       
              <hr/>        
            </Head>
            <Medios>
              {data.length ===0 ? <p>Cargando</p> : data.map((articulo) => (<Reliability key={articulo.id} data={articulo}/>))}   
            </Medios>
        </div>
    );
}

export default ReliabilityList;

const Head = styled.div`
  margin: 2em;
  h1{
    font-size: 2em;

  }

`

const Medios = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  gap: 1em;
  margin: 4em;



`