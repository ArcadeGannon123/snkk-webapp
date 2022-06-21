import React from 'react'
import styled from 'styled-components'
import Dot from './Dot';





function ArticleLine({data}) {

  const bias_color ={
    'far-left': '#2e64a0',
    'lean-left': '#9dc8eb',
    'center': '#96659e',
    'lean-right': '#cb9a98',
    'far-right': '#ca0800',
    '0':'#000'
  }

  return (
    <Articulo>
        <Dot data={{ bias:data.bias, style:{backgroundColor:bias_color[data.bias]} }} />
        <div className='news-data'>
          <h2>{data['medio'] ? data['medio'].name : ""}</h2>

          <h1>{data.title}</h1>
          
          <div className='author-date'>{data.author} - {data.published_date}</div>
          
          <p>{data.content}</p>
          <div className='news-link-ref'>
           <a href={data.url} target="_blank" rel="noreferrer noopener">Ir a la noticia</a>
          </div>
          
          
        </div>
        
        <img src={data.urlToImage} alt='imagen'/>
       
        
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


`
