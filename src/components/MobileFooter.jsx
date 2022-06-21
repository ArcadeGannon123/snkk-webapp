import React from 'react';
import { SidebarData } from './SideBar/SideBarData';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MobileFooter() {
    return (
        <BaseFooter>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} className='button-mobile-footer'>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
        </BaseFooter>
    );
}

export default MobileFooter;

const BaseFooter = styled.footer`
    background: linear-gradient(180deg, rgba(49,49,50,1) 0%, rgba(49,49,50,1) 35%, rgba(102,148,149,1) 100%);
    display:none;
    justify-content:space-around;
    position:fixed;
    width:100%;
    height:10vh;
    bottom:0px;
    background-color: #000;
    z-index:11;

    @media screen and (max-width: 960px) {
        display:flex;
    }


    .button-mobile-footer{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        svg {
            font-size: 5vh;
        }
        span{
            margin-left:0;
        }
    
    }
    .nav-text {
        height: 100%;
        padding-left:0;
    }
    
    .nav-text a {
        color: #f5f5f5;
        width: 100%;
        height: 100%;
        font-size:60%;
        border-radius: 4px;
        text-align:center;
        
    }
    
    .nav-text a:hover {
        background-color: #669495;
    }
      
    .nav-text a:hover {
        background-color: #669495;
    }
    


`