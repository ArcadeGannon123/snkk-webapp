import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarDataPages,SidebarDataDash,SidebarDataOther } from './SideBarData';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import {
  UserContainerMobile
} from "./Narbar.elements";
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import User from '../user/User';

function SideBar({sidebar}) {

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
        <UserContainerMobile>
          {cookies.get('userData') ? 
          <>  
          {!cookies.get('userData')?.premium ?
          <Button component={Link} to="/suscripcion" variant="outlined" >Suscribirse</Button>  
          :
          <></>} 
          <div style={{  borderLeft: '1px solid #ffffff37',height: '100%'}}></div>         
          <User />
          </>
          :
          <Button sx={{height:'100%'}} component={Link} to="/login" variant="outlined" startIcon={<AccountCircleIcon />}>
            Acceder
          </Button>
          }
        </UserContainerMobile>
        <nav className='nav-menu active' >
          <ul className='nav-menu-items' >      

            {cookies.get('userData') ? <>
            <li className='category'>
              Actividad
              <hr/>
            </li>      
            {SidebarDataDash.map((item, index) => {
              return (
                item.title === 'Feedback' ?
                cookies.get('userData').premium &&
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div className='side-item-icon'>
                      {item.icon}
                    </div>                   
                    <span>{item.title}</span>
                  </Link>
                </li>
                :
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

            </>:<></>}

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

export default SideBar;

const BaseSideBar = styled.div`
width:300px;
padding: 10px 0;

@media screen and (max-width: 700px) {
    width:100%;
  }


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
  padding-bottom:100px;
  
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
