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
    background: #669495;
    display:none;
    justify-content:space-around;
    position:fixed;
    width:100%;
    height:65px;
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
        align-items:center;
        svg {
            font-size: 30px;
        }
        span{
            margin-left:0;
        }
    
    }
    .nav-text {
        height: 90%;
        padding-left:0;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    
    .nav-text a {
        color: #f5f5f5;
        width: 100%;
        height: 100%;
        font-size:60%;
        border-radius: 4px;
        text-align:center;
        text-decoration: none;
        
    }

    .nav-text a:hover {
        background-color: #669495;
    }
    


`