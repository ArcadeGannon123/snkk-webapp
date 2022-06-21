import React,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import styled from 'styled-components';
import ArticleLineList from '../components/ArticleLineList';
import axios from 'axios';

import SideBar from '../components/SideBar/SideBar';
import {
  BsSearch
} from "react-icons/bs";

function NewsPage() {

  const [data,setData]= useState([]);



  useEffect(() => {
    const url='https://api-news-feria-2022.herokuapp.com/noticia/listado-noticias'
    //const url='https://newsapi.org/v2/top-headlines?country=ar&apiKey=42bbcbe72851462e986657adf46c37a9'
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
          <ArticleLineList data={data} />
        </div>        
        <Filter>
          <div className='search'>            
            <input type="text" placeholder="Search.."/>
            <BsSearch/>
          </div>
          <h1>Tags</h1>
          <div className='tags'>            
            <div>far-left</div>
            <div>lean-left</div>
            <div>center</div>
            <div>lean-right</div>
            <div>far-right</div>
          </div>
        </Filter>
      </FrontPage>
      
    </>
  )
}

export default NewsPage

const Menu = styled.div`
  position:relative;

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
  .tags{
    display:flex;
    margin: 1em 0;
    cursor: pointer;
    div{
      padding:2px;
      border: 1px solid #878680;
      margin: 2px;
      background-color:#fff;
      border-radius:25px;
      font-size:0.9em;
    }
    div:hover{
      background-color: #999B95;
      transition: 0.5s all ease;
    }
  }

`

const FrontPage = styled.div`
  display: grid;
  grid-template-columns: 17% 60% 23%;
  gap: 1em;
  .news-list{
    border:1px solid #87868083;
    margin:1em;
    background-color:#fff;
  }
  





`


