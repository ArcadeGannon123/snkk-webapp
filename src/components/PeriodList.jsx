import React from 'react';
import Period from './Period';
import styled from 'styled-components';
import { Puff } from 'react-loading-icons';

function PeriodList({data}) {
    return (
        <div>
            {console.log(data)}
            <Head>
              <h1>Sesgo de periodistas</h1>       
              <hr/>        
            </Head>
            <Medios>
              <div className='media-list'>
                {data.length ===0 ? <LoadingIcon><Puff stroke='#669495' /></LoadingIcon> : data.map((articulo) => (<Period key={articulo.id} data={articulo}/>))}
              </div>
                 
            </Medios>
        </div>
    );
}

export default PeriodList;

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
    display:grid;
    grid-template-columns: 40% 40%;
    @media screen and (max-width: 830px) {
      display:flex;
      flex-wrap: wrap;
    }
  }




`