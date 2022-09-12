import React from 'react';
import ArticleLine from './ArticleLine';
import styled from 'styled-components';
import {BsSearch} from "react-icons/bs";
import { Puff } from 'react-loading-icons';


function ArticleLineList({data}) {
    return (
        <>

            <Head>
                <h1 className='title'>Noticias Recientes</h1>
                <hr/>
            </Head>

            <ArticlesLine>  
              <div className="news-filter-mobile">
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
              {data.length ===0 ? <LoadingIcon><Puff stroke='#669495' /></LoadingIcon> : data.map((articulo) => (<ArticleLine key={articulo.id} data={articulo}/>))}
            </ArticlesLine>

        </>
    );
}

export default ArticleLineList;


const LoadingIcon = styled.div`
  display:flex;
  justify-content:center;
`


const Head = styled.div`
  margin: 10px 20px;
  h1{
    font-size: 25px;

  }

`
const ArticlesLine = styled.div`

  margin: 2em 4em  ;

  @media screen and (max-width: 1250px) {
    margin: 2em 2em  ;
  }

  .news-filter-mobile{
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
