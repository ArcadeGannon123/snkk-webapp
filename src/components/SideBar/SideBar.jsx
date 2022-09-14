import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

function SideBar() {

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)



  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <BaseSideBar variant = {color ? 'True':'False'} >
      <IconContext.Provider value={{ size: 20, color: '#000000'}}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} style={{ display: sidebar ? 'none' : 'block'}}/>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}  >
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiOutlineClose/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
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

export default SideBar;

const BaseSideBar = styled.div`
position: sticky;
top: 65px;
.navbar {
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
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
  height: 95px;
  
  
}

.nav-text a {
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 5px 0 30px;
  border-top-right-radius: 50px; 
  border-bottom-right-radius: 50px;
}

.nav-text a:hover {
  background-color: #84b9b9;
  color:white;
}

.nav-menu-items {
  width: 100%;
  padding-left:0;
}

.navbar-toggle {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

span {
  margin-left: 16px;
  font-size: 100%;
}

`
