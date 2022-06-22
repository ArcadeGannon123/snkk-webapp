import React from 'react'
import styled from 'styled-components'
import Dot from './Dot';





function ArticleLine({data}) {

  const bias_color ={
    'U-P': '#2e64a0',
    'P': '#9dc8eb',
    'Centro': '#96659e',
    'C': '#cb9a98',
    'U-C': '#ca0800',
    '0':'#000'
  }
  const check_bias ={
    1.0: 'U-P',
    0.8: 'P',
    0.4: 'Centro',
    0.2: 'C',
    0.0: 'U-C',
  }

  return (
    <Articulo>
        <Dot data={{ bias:check_bias[data.bias], style:{backgroundColor:bias_color[check_bias[data.bias]]} }} />
        <div className='news-data'>
          <h2>{data['medio'] ? data['medio'].name : "MEDIO"}</h2>

          <h1>{data.title}</h1>
          <img className='article-img-mobile' src={data.urlToImage} alt='imagen'/>
          <div className='author-date'>{data.author} - {data.published_date}</div>
          
          <p>{data.content}</p>
          <div className='news-link-ref'>
           <a href={data.url} target="_blank" rel="noreferrer noopener">Ir a la noticia</a>
          </div>
          
          
        </div>
      
        <img className='article-img-desk' src={data.urlToImage} alt='imagen'/>
       
        
    </Articulo>
  )
}

export default ArticleLine

const Articulo = styled.div`
  display:grid;
  grid-template-columns: 10% 70% 20%;
  background-color: #ffffff;
  position:relative;
  padding: 0.4em 0;
  margin: 0.4em 0;
  border: 1px solid #87868083;
  border-radius: 10px;

  h1{
    font-size:1.2em;
    font-weight:bold;
  }
  a{
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }

  .news-link-ref{
    text-align:right;
    margin-right:1em;
  }





  h2{
    color: #669495;
    font-size:1em;
  }
  img{
    margin: 1em;
    display: block;
    max-width:90%;
    margin-left: auto;
    margin-right: auto;
    border-radius:10px;
  }
  .article-img-mobile{
      display:none
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    .article-img-desk{
      display:none
    }
    .article-img-mobile{
      display:block;
      max-width:550px;
    }
    .news-data{
      margin: 0 1em 0 1em;
    }
  }
  @media screen and (max-width: 750px) {
    .article-img-mobile{
      max-width:90%;
    }
  }

`
