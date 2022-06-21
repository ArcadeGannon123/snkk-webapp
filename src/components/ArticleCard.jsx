import React from 'react'
import styled from 'styled-components'



function ArticleCard({data}) {

  const bias_color ={
    'far-left': '#2e64a0',
    'lean-left': '#9dc8eb',
    'center': '#96659e',
    'lean-right': '#cb9a98',
    'far-right': '#ca0800',
  }

  return (
    <Articulo>
        <div className='bias-fact'>
          <span className='point' style={{backgroundColor:bias_color[data.bias]}}>
            <div>{data.bias}</div>
          </span>
        </div>
        <img src={data.urlToLogo} alt=''/>
        <h2>{data.source.name}</h2>

        <h1>{data.title}</h1>

        <div className='author-date'>{data.author} - {data.publishedAt}</div>


        <a href={data.url} target="_blank" rel="noreferrer noopener">Ir a la noticia</a> 

        
    </Articulo>
  )
}

export default ArticleCard


const Articulo = styled.div`
  background-color: #ffffff;
  position:relative;
  padding: 1em;
  border: 1px solid #878680;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .point {
    height: 70px;
    width: 70px;
    color: #ffffff;
    border-radius: 50%;
    margin: 0.1em;
    display: inline-block;
    text-align: center;
    font-size:1em;
    margin: auto;
    display:block;

    
  }

  .point div{
    position:relative;
    top:1.5em;
  }

  a{
    position:absolute;
    bottom:1em;
    right:1em;
  }
  .bias-fact{
    margin:0.1em;

  }


  h2{
    color: #669495;
  }
  img{
    margin: 1em;
    display: block;
    max-width:90%;
    margin-left: auto;
    margin-right: auto;
  }
  .author-date{
    margin: 1.5em 0;
  }
  p{
    margin: 1em;
  }
  button{
    margin: 5px 20px;
    border-radius: 8px;
    padding: 10px 24px;
    background-color: #ffffff;
    border: 1px solid #3B413A;
    position:absolute;
    bottom:0;
    right:0;
  }

`
