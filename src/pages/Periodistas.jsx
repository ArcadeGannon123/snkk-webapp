import React,{useState, useEffect, useContext} from 'react';
import Navbar from '../components/Navbar/Navbar';
import styled from 'styled-components';
import MobileFooter from '../components/MobileFooter';
import PeriodList from '../components/PeriodList';
import SideBar from '../components/SideBar/SideBar';
import axios from 'axios';
import { UserContext } from '../components/UserContext';

function Periodistas() {
    
  const {token,setToken} = useContext(UserContext);
  const {point,setPoint} = useContext(UserContext);
  const [data,setData]= useState([]);

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


  useEffect(() => {
    const url='https://api-news-feria-2022.herokuapp.com/periodista/sesgo-periodistas'
    const getData = async () => {
      const response = await axios.get(url,{
        headers: {
            'Authorization': `Bearer ${token}`
        }})
      setData(response.data)
    }
    getData();
    puntaje();
  }, []);



  return (
      <>
          <Navbar />
          <FrontPage>
              <Menu>
                  <SideBar />
              </Menu>
              <div className='news-list'>
                <PeriodList data={data} />
              </div>
          </FrontPage>
          <div className='footer-mobile'>
            <MobileFooter/>
          </div>
      </>
  );
}

export default Periodistas;



const Menu = styled.div`
  position:relative;
  @media screen and (max-width: 960px) {
    display:none;
  }
  

`


const FrontPage = styled.div`
  padding-top:65px;
  display: grid;
  grid-template-columns: 20% 60% auto;
  gap: 1em;
  .news-list{
    margin:1em;
    background-color:#fff;
  }
  @media screen and (max-width: 1250px) {
    grid-template-columns: 20% 80%;
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    margin-bottom:10vh;


  }
  





`


