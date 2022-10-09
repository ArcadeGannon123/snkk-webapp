import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarDataPages,SidebarDataDash,SidebarDataOther } from './SideBarData';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

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


  return (
    <BaseSideBar variant = {color ? 'True':'False'} >
      <IconContext.Provider value={{ size: 20, color: '#ffffff'}}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}  >
          <ul className='nav-menu-items' >      
            <li className='category'>
              Actividad
              <hr/>
            </li>      
            {SidebarDataDash.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div className='side-item-icon'>
                      {item.icon}
                    </div>                   
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className='category'>
              Análisis
              <hr/>
            </li>  
            {SidebarDataPages.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div className='side-item-icon'>
                      {item.icon}
                    </div>                   
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className='category'>
              Otros
              <hr/>
            </li> 
            {SidebarDataOther.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div className='side-item-icon'>
                      {item.icon}
                    </div>                   
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}            
          </ul>
        </nav>
      </IconContext.Provider>
    </BaseSideBar>
  );
}

export default SideBar2;

const BaseSideBar = styled.div`
width:80px;
padding: 10px 0;
.category{
  padding: 5px 20px;
  color: white;
  hr{
    margin: 10px 0;
  }
}

.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color:blue;
}

.menu-bars {
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
  display: flex;
  align-items: center;
}

.nav-menu {
  
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  left: -100%;    
  transition: 850ms;
  
}

.nav-menu.active {
  left: 0;

  
}

.nav-text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px 8px 0px;
  list-style: none;
  height: 50px;
  
  
}

.nav-text a {
  text-decoration: none;
  color: #ffffff;
  font-size: 1em;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 5px 0 20px;
  border-top-right-radius: 50px; 
  border-bottom-right-radius: 50px;
}

.nav-text a:hover {
  background-color: #5a5a5a;
  color:white;
}

.nav-menu-items {
  width: 100%;
  padding-left:0;
}

.navbar-toggle {
  background-color:blue;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

span {
  margin-left: 16px;
  font-size: 100%;
}

`