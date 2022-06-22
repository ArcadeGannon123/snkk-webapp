import React from 'react';
import ArticleLine from './ArticleLine';
import styled from 'styled-components';
import {BsSearch} from "react-icons/bs";

function ArticleLineList({data}) {
    return (
        <>

            <Head>
                <h1 className='title'>Noticias Recientes</h1>
                <hr/>
            </Head>

            <ArticlesLine>  
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
                     
              {data.length ===0 ? <p>Cargando</p> : data.map((articulo) => (<ArticleLine key={articulo.id} data={articulo}/>))}
            </ArticlesLine>

        </>
    );
}

export default ArticleLineList;


const Head = styled.div`
  margin: 2em;
  h1{
    font-size: 2em;

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
