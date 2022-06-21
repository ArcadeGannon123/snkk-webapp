import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import './SideBar.css';
import { IconContext } from 'react-icons';
import User from '../User';
import styled from 'styled-components';

function SideBar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <BaseSideBar>
      <IconContext.Provider value={{ size: 20, color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style={{ color: '#000' }}/>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose/>
              </Link>
            </li>
            <User data={{ username:"Usuario no registrado" }}/>


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
  top: 0;

`
