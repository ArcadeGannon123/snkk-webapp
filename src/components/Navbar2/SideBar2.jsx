import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarDataPages,SidebarDataDash,SidebarDataOther,SidebarDataColumnDash,SidebarDataColumnPages,SidebarDataColumnOther} from './SideBarData';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

function SideBar2({sidebar}) {

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  const cookies = new Cookies();

  return (
    <BaseSideBar variant = {color ? 'True':'False'} >
      <IconContext.Provider value={{ size: 20, color: '#ffffff'}}>

        {cookies.get('userData') ? <>
        <div className='category'>               
          <hr/>   
        </div>  
        {SidebarDataColumnDash.map((item, index) => {
          return (
            <div key={index} >
              <Link to={item.path} className={item.cName} >
                <div className='side-item-icon'>
                  {item.icon}
                </div>                      
                <span>{item.title}</span>               
              </Link>
            </div>
          );
        })}
        </>:<></>}
        <div className='category'>                 
          <hr/>   
        </div> 
        {SidebarDataColumnPages.map((item, index) => {
          return (
            <div key={index} >
              <Link to={item.path} className={item.cName} >
                <div className='side-item-icon'>
                  {item.icon}
                </div>                      
                <span>{item.title}</span>               
              </Link>
            </div>
          );
        })}        
        <div className='category'>       
          <hr/>   
        </div> 
        {SidebarDataColumnOther.map((item, index) => {
          return (
            <div key={index} >
              <Link to={item.path} className={item.cName} >
                <div className='side-item-icon'>
                  {item.icon}
                </div>                      
                <span>{item.title}</span>               
              </Link>
            </div>
          );
        })}
      </IconContext.Provider>
    </BaseSideBar>
  );
}

export default SideBar2;

const BaseSideBar = styled.div`
display:flex;
flex-direction:column;
width:80px;
gap:1rem;
padding: 10px 0;
.category{
  color:white;
  font-size:0.7rem;
  text-align:center;
}
.category hr{
  margin:0;
}
.nav-text{
  display:grid;
  text-align:center;
  justify-content:center;
  color:white;
  text-decoration:none;
  padding: 5px 0 ;
}
.nav-text span{
  font-size:0.7rem;
}


.nav-text .side-item-icon svg{
  font-size:2.3rem;
}
.nav-text:hover {
  background-color: #5a5a5a;
}

`
