import React,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import MobileFooter from '../components/MobileFooter';
import styled from 'styled-components';
import ArticleLineList from '../components/ArticleLineList';
import axios from 'axios';
import BiasBar from '../components/BiasBar'

//import data from '../data/dataset';

import SideBar from '../components/SideBar/SideBar';
function NewsPage() {
  
  const [data,setData]= useState([]);
  const [media,setMedia]= useState([]);


  useEffect(() => {
    const url1='https://api-news-feria-2022.herokuapp.com/noticia/listado-noticias'
    const url2='https://api-news-feria-2022.herokuapp.com/medio/confiabilidad-medios'
    //const url='https://newsapi.org/v2/top-headlines?country=ar&apiKey=42bbcbe72851462e986657adf46c37a9'
    const getData = async (url) => {
      const response = await axios.get(url)
      setData(response.data)
    }
    const getMedia = async (url) => {
      const response = await axios.get(url)
      setMedia(response.data)
    }
    getData(url1);
    getMedia(url2);
  }, []);
  

  return (
    <>
      <Navbar />
      <FrontPage>
        <Menu>
          <SideBar />
        </Menu>
        <NewsList> 
          <ArticleLineList data={data} />
        </NewsList>        
        <Filter>        
          <TopicsContainer> 
            <h1>Tópicos</h1>
            <hr/>
            <div className='topics'> 
              <div>Todos</div>                       
              <div>Ultra-Progresista</div>
              <div>Progresista</div>
              <div>Centro</div>
              <div>Conservador</div>
              <div>Ultra-Conservador</div>
            </div>
          </TopicsContainer>
          <MediaContainer>
            <h1>Sesgo de los medios de comunicación</h1>   
            <hr/>         
            {media.map((medio) => (
              <div className="media">
                <div className="media-logo">
                  <img src={`https://logo.clearbit.com/${medio.url}`} alt=''/>                  
                  <h1>{medio.nombre}</h1>
                </div>
                <div className="bias-container">
                  <BiasBar data={{bias : medio.metricas ? medio.metricas.sesgo : -1, labelL: 'Anti-Archia', labelR: 'Pro-Archia'}}/>
                </div>            
              </div>
            ))}
            
          </MediaContainer>        

        </Filter>
      </FrontPage>
      <div className='footer-mobile'>
        <MobileFooter/>
      </div>
      
      
    </>
  )
}

export default NewsPage 


const MediaContainer = styled.div`
border-radius:10px;
border: 1px solid #87868083;
padding: 20px;
margin-top: 10px;
h1{
  font-size: 20px;
}
hr{
  margin: 10px 0;
}
.media{
  height: 50px;
  margin-bottom: 50px;
  .media-logo{
    display:flex;
    margin: auto;
    align-items: center;
    gap:10px;
    img{
      height:40px;      
      background-color:black;
    }
  }
}
`

const TopicsContainer = styled.div`
border-radius:10px;
border: 1px solid #87868083;
padding: 20px;

h1{
  font-size:20px;
}
hr{
  margin: 10px 0;
}
.topics{
  display:flex;
  flex-wrap: wrap;
  gap:5px;
  cursor: pointer;
  div{
    padding: 0 10px;
    border: 1px solid #878680;
    background-color:#fff;
    border-radius: 5px;
    font-size:0.9em;
  }
  div:hover{
    background-color: #e1f1f1;
    transition: 0.1s all ease; 
  }
}
`

const Menu = styled.div`
  position:relative;
  @media screen and (max-width: 960px) {
    display:none;
  }
  

`
const NewsList = styled.div`
  margin:1em;
  background-color:#fff;
`
const Filter = styled.div`
  margin-top: 50px;
  padding: 1em;
  @media screen and (max-width: 1250px) {
    display:none;
  }

`

const FrontPage = styled.div`
  padding-top:65px;
  display: grid;
  grid-template-columns: 20% 50% 25%;
  @media screen and (max-width: 1480px) {
    grid-template-columns: 20% 50% 30%;
  }

  @media screen and (max-width: 1250px) {
    grid-template-columns: 20% 80%;
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    margin-bottom:10vh;


  }
  





`


