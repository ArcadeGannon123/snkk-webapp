import React,{useEffect,useState,useContext} from 'react'
import styled from 'styled-components'
import BiasBar from './BiasBar'
import logo from '../images/blankpointlogo.ico';
import { UserContext } from '../components/UserContext';
import {NavLink} from 'react-router-dom';

/*
    url:"",
    title:"",
    urlToImage:"",
    sesgoIA:{
      archia:"",
      sesgo:""
    },
    periodista:{
      nombre:"",
      bias:""
    },
    medio:{
      url:"",
      nombre:"",
      metricas:{
        sesgo:"",
        confiabilidad:""
      }
    }
  */



function ArticleLine({data,flag}) {

  const {topics,setTopics} = useContext(UserContext);
  const topicos = () => {
    setTopics(data.url)
  }

  return (
    <Articulo>
      
      <NewsContainer>    
        <div className='news-data'>
          <div className="media">      
            <img className='media-logo' src={data['medio'] ? `https://logo.clearbit.com/${data['medio'].url}` : logo} alt=''/>     
            <h2>{data['medio'] ? (data['medio'].name ? data['medio'].name : data['medio'].url ).replace('www.','') : "MEDIO"}</h2>
          </div>

          <h1 className='headline'>{data.title}</h1>
          <img className='article-img-mobile' src={data.urlToImage} alt='imagen'/>
          <div className='author-date'>{data.author ? data.author : data['medio'] ? data['medio'].url.replace('www.','') : ""} - {data.published_date}</div>
          
          <p>{data.content}</p>
          <div className='news-link-ref'>
            {flag ?
            <NavLink to='/topicos' onClick={() => {topicos()}}>Ver noticias similares</NavLink>
            :
            <></>
            }
            <a href={data.url} target="_blank" rel="noreferrer noopener">Ir a la noticia</a>
          </div>               
        </div>
        <img className='article-img-desk' src={data.urlToImage} alt='imagen'/>
      </NewsContainer>
      <AnalysisContainer >
        <h1>Análisis de la noticia <hr/></h1>
        <div className="analysis">
          <div className="bias-container">
            <div className="bias-news">
              <div className="title">
                Sesgo de la noticia
              </div>
              <BiasBar data={{bias : data.sesgoIA ? data.sesgoIA.archia : -1, labelL: 'Pro-Archia', labelR: 'Anti-Archia'}}/>
              <BiasBar data={{bias : data.sesgoIA ? data.sesgoIA.sesgo : -1, labelL: 'Conservador', labelR: 'Progresista'}}/>
            </div>
            <div className="bias-periodista">
              <div className="title">
                  Sesgo de los periodista/s
              </div>
              {data.sesgosPeriodistas ?
                data.sesgosPeriodistas.map((periodista) => (
                  <>   
                    <div className="periodista">
                      {periodista.nombre}
                    </div>               
                    <BiasBar data={{bias : periodista.archia, labelL: 'Pro-Archia', labelR: 'Anti-Archia'}}/>
                    <BiasBar data={{bias : periodista.sesgo, labelL: 'Conservador', labelR: 'Progresista'}}/>
                  </>
                ))
               :
               <>
               </>
              }
            </div>         
          </div>
          <div className="language-container">
            <div className="language">
              <div className="title">Uso del lenguaje</div>
              <div className="language-bias">
                {data.hate_speech}
              </div>
            </div>
            <div className="fake-news">
              <div className="title">¿Posible noticia falsa?</div>
              {data.reportesFalsedad ===1 ?
              <div className="language-bias">
                {data.reportesFalsedad} vez reportado.
              </div>
              :
              <div className="language-bias">
                {data.reportesFalsedad} veces reportado.
              </div>
              } 
              
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
  @media screen and (max-width: 680px) {
    display:flex;
    flex-direction:column;
  }
  .bias-container{  
    
    padding: 0 10px;
    .title{
      color: #669495;
    } 
    .periodista{
      font-size:15px;
      padding-left: 10px;
    }
  }
  .language-container{
    padding: 0 10px;
    .language-bias{
      color:black;
      width:100px;
      height:100px;
      border-radius:50%;
      background: radial-gradient(circle, rgba(102,148,149,1) 0%, rgba(177,253,255,1) 0%, rgba(127,184,185,1) 100%);
      text-shadow: 0 0 2px #669495;     
      display:flex;
      align-items:center;
      justify-content:center;
      text-align:center;
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
    display:flex;
    justify-content:flex-end;
    text-align:right;
    margin-right:1em;
    gap:20px;
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