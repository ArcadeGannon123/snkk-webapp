import React,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import styled from 'styled-components';
import MobileFooter from '../components/MobileFooter';
import ReliabilityList from '../components/ReliabilityList';
import SideBar from '../components/SideBar/SideBar';
import {
  BsSearch
} from "react-icons/bs";
import axios from 'axios';

//import data from '../data/dataset2';


function ReliPage() {
    
    const [data,setData]= useState([]);
    useEffect(() => {
      const url='https://api-news-feria-2022.herokuapp.com/medio/confiabilidad-medios'
      const getData = async () => {
        const response = await axios.get(url)
        setData(response.data)
      }
      getData();
    }, []);

  

    return (
        <>
            <Navbar />
            <FrontPage>
                <Menu>
                    <SideBar />
                </Menu>
                <div className='news-list'>
                  <ReliabilityList data={data.reverse()} />
                </div>
            </FrontPage>
            <div className='footer-mobile'>
              <MobileFooter/>
            </div>
        </>
    );
}

export default ReliPage;



const Menu = styled.div`
  position:relative;
  @media screen and (max-width: 960px) {
    display:none;
  }
  

`

const Filter = styled.div`
  margin-top:1em;
  padding: 1em;
  .search{
    margin: 1em 0;
    svg {
        margin: 0 0.5em;
      }
    input{
      height:100%;
    }
  }
  
  @media screen and (max-width: 1250px) {
    display:none;
  }

`

const FrontPage = styled.div`
  padding-top:65px;
  display: grid;
  grid-template-columns: 23% 60% auto;
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


