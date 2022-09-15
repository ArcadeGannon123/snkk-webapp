import React,{useState, useEffect, useContext} from 'react';
import Navbar from '../components/Navbar/Navbar';
import MobileFooter from '../components/MobileFooter';
import styled from 'styled-components';
import ArticleLineList from '../components/ArticleLineList';
import axios from 'axios';
import BiasBar from '../components/BiasBar'
import { UserContext } from '../components/UserContext';

//import data from '../data/dataset';

import SideBar from '../components/SideBar/SideBar';
function Topics() {
  
  const {token,setToken} = useContext(UserContext); 
  const {point,setPoint} = useContext(UserContext);
  const {topics, setTopics} = useContext(UserContext);
  const [data,setData]= useState([]);
  const [media,setMedia]= useState([]);

  const puntaje = async () =>{    
    const url='https://api-news-feria-2022.herokuapp.com/usuario/recompensa';
    await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    }).then(res => {
       setPoint(res.data)
    
    }).catch(err => {
        console.log(err)
    })
    
  }

  const enviarDatos = async () =>{

    const url='https://api-news-feria-2022.herokuapp.com/noticia/recomendaciones'
    await axios.post(url, {url:topics}, {
      headers: {
          'Authorization': `Bearer ${token}`
      },
    }).then(res => {
        console.log(res)
        setData(res.data)
    
    }).catch(err => {
        console.log(err)
    })
      
}


  useEffect(() => {
    const url2='https://api-news-feria-2022.herokuapp.com/medio/confiabilidad-medios'
    //const url='https://newsapi.org/v2/top-headlines?country=ar&apiKey=42bbcbe72851462e986657adf46c37a9'
    /*
    const getData = async (url) => {
      const response = await axios.get(url,{
        headers: {
            'Authorization': `Bearer ${token}`
        }})
      setData(response.data)
    }*/
    const getMedia = async (url) => {
      const response = await axios.get(url,{
        headers: {
            'Authorization': `Bearer ${token}`
        }})
      setMedia(response.data)
    }
    //getData(url1);
    enviarDatos();
    getMedia(url2);
    puntaje();
  }, []);
  

  return (
    <>
      <Navbar />
      <FrontPage>
        <Menu>
          <SideBar />
        </Menu>
        <NewsList> 
          <ArticleLineList data={data} title={'Noticias Similares'} flag={false} />
        </NewsList>        
        <Filter>
          <MediaContainer>
            <h1>Sesgo de los medios de comunicación</h1>   
            <hr/>         
            {media.map((medio) => (
              <div className="media">
                <div className="media-logo">
                  <img src={`https://logo.clearbit.com/${medio.url}`} alt=''/>                  
                  <h1>{medio.nombre.replace('www.','')}</h1>
                </div>
                <div className="bias-container">
                  <BiasBar data={{bias : medio.metricas ? medio.metricas.sesgo : -1, labelL: 'Conservador', labelR: 'Progresista'}}/>
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

export default Topics 


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


