import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styled from 'styled-components';
import dataset from '../data/dataset';
import ReliabilityList from '../components/ReliabilityList';
import SideBar from '../components/SideBar/SideBar';
import {
  BsSearch
} from "react-icons/bs";


function ReliPage() {
    return (
        <>
            <Navbar />
            <FrontPage>
                <Menu>
                    <SideBar />
                </Menu>
                <div className='news-list'>
                  <ReliabilityList data={dataset} />
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
    );
}

export default ReliPage;


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
  background-color:#fff;
  .news-list{
    border:1px solid #87868083;
    margin:1em;
    background-color:#fff;
  }


`


