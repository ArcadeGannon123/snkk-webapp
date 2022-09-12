import React from 'react'
import styled from 'styled-components'
import BiasBar from './BiasBar'





function ArticleLine({data}) {

  const bias_color ={
    'U-P': '#2e64a0',
    'P': '#9dc8eb',
    'Centro': '#96659e',
    'C': '#cb9a98',
    'U-C': '#ca0800',
    '0':'#000'
  }


  const check_bias = (bias) =>{
    console.log(bias);
    if(bias < 0.2){
      return 'U-C'
    }else if(bias <0.4){
      return 'C'
    }else if(bias <0.6){
      return 'Centro'
    }else if(bias <0.8){
      return 'P'
    }else{
      return 'U-P'
    }

  }

  return (
    <Articulo>
      <NewsContainer>
        <div className='news-data'>
          <div className="media">      
            <img className='media-logo' src={`https://logo.clearbit.com/${data['medio'].url}`}/>     
            <h2>{data['medio'] ? (data['medio'].name ? data['medio'].name : data['medio'].url ) : "MEDIO"}</h2>
          </div>

          <h1 className='headline'>{data.title}</h1>
          <img className='article-img-mobile' src={data.urlToImage} alt='imagen'/>
          <div className='author-date'>{data.author ? data.author:data['medio'].url} - {data.published_date}</div>
          
          <p>{data.content}</p>
          <div className='news-link-ref'>
           <a href={data.url} target="_blank" rel="noreferrer noopener">Ir a la noticia</a>
          </div>               
        </div>
        <img className='article-img-desk' src={data.urlToImage} alt='imagen'/>
      </NewsContainer>
      <AnalysisContainer>
        <h1>Análisis de la noticia <hr/></h1>
        <div className="analysis">
          <div className="bias-container">
            <div className="bias-archia">
              <div className="title">
                Sesgo en base a igualdad social (Archia)
              </div>
              <BiasBar data={{bias:data.bias}}/>
            </div>
            <div className="bias-periodista">
              <div className="title">
                Sesgo del periodista
              </div>
              <BiasBar data={{bias:data.periodista.bias}}/>
            </div>         
          </div>
          <div className="language-container">
            <div className="title">Uso del lenguaje</div>
            <div className="language-bias">
              OFFENSIVO
            </div>
          </div>
        </div>
      </AnalysisContainer>
       
        
    </Articulo>
  )
}

export default ArticleLine

const AnalysisContainer = styled.div`

padding: 0 10px;

h1{
  font-size: 20px;
  display:flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  hr{
    flex-grow: 1;
  }
}

.analysis{
  display:grid;
  grid-template-columns:50% 50%;
  .bias-container{  
    
    padding: 0 10px; 
  }
  .language-container{
    padding: 0 10px;
    .language-bias{
      width:50px;
      height:50px;
      border-radius:50%;
      background: radial-gradient(circle, rgba(102,148,149,1) 0%, rgba(144,216,218,1) 48%, rgba(102,148,149,1) 100%); 
      text-shadow: 0 0 2px #669495;     
      display:flex;
      align-items:center;
      justify-content:center;
      margin: 0 auto;
    }
  }
}




`


const Articulo = styled.div`
  background-color: #ffffff;
  padding: 10px 0;
  margin: 10px 0;
  border: 1px solid #87868083;
  border-radius: 10px;

  
`

const NewsContainer = styled.div`
  display:grid;
  grid-template-columns: 75% 25%;  

  .news-data{
    padding-left:10px;
    .media{
      display:flex;
      align-items:center;
      padding: 5px 0;
      gap:10px;
      .media-logo{
        width: 30px;
        border-radius:50%;
        background-color:black;
      }
      h2{
        color: #669495;
        font-size:1em;
        margin: auto 0;
      }
    }
  }

  .headline{
    font-size:1.2em;
    font-weight:bold;
  }

  .news-link-ref{
    text-align:right;
    margin-right:1em;
    a{
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
    }
  }

  .article-img-desk{
    
    display: block;
    max-width:90%;
    margin: auto;
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