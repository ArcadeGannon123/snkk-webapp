import React from 'react';
import Reliability from './Reliability';
import styled from 'styled-components';
import {BsSearch} from "react-icons/bs";

function ReliabilityList({data}) {
    return (
        <div>
            <Head>
              <h1>Confianza percibida de los medios comunicación</h1>       
              <hr/>        
            </Head>
            <Medios>
              <div className="news-filter-mobile">
                <div className='mobile-search'>            
                  <input type="text" placeholder="Search.."/>
                  <BsSearch/>
                </div>
                <div className='mobile-tags'>  
                  <div>Todos</div>                         
                  <div>Ultra-Progresista</div>
                  <div>Progresista</div>
                  <div>Centro</div>
                  <div>Conservador</div>
                  <div>Ultra-Conservador</div>
                </div>
                <hr/>
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
  margin: 2em;
  h1{
    font-size: 2em;

  }

`

const Medios = styled.div`

  .media-list{
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    gap: 1em;
    margin: 0 4em 0 2em;
    @media screen and (max-width: 800px) {
      grid-template-columns: 50% 50%;
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: 100%;
    }
  }



  .news-filter-mobile{
    margin: 0 2em 0 2em;
    display:none;
    @media screen and (max-width: 1250px) {
      display:block
    }
  }
  .mobile-search input{
    margin-right:1em;
  }
  .mobile-tags{
    display:flex;
    margin: 1em 0;
    flex-wrap: wrap;
    cursor: pointer;
    div{
      padding:2px;
      border: 1px solid #878680;
      margin: 2px;
      background-color:#fff;
      border-radius:10px;
      font-size:0.9em;
    }
    div:hover{
      background-color: #999B95;
      transition: 0.5s all ease;
    }
  }



`