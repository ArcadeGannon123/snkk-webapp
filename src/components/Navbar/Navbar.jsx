import React, { useState, useEffect, useContext } from "react";
import logo from '../../images/blankpointlogo.png';
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Narbar.elements";
import {
  FaBars,
  FaTimes
} from "react-icons/fa";
import {NavLink} from 'react-router-dom';
import { UserContext } from '../UserContext';
import User from '../User';
import axios from 'axios';
import Cookies from 'universal-cookie';

const Navbar = () => {

  const cookies = new Cookies();

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  const {token,setToken} = useContext(UserContext); 

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const _setShowMobileMenu = (showMobileMenu) =>{
    setShowMobileMenu(!showMobileMenu)
  }

  useEffect(() => {
  }, [showMobileMenu]);




  return (
    <Container variant = {color ? 'True':'False'} >
      <Wrapper>
        <LogoContainer variant = {color ? 'True':'False'}>
          <NavLink to='/' className='link' >
            <div className="logo">
              <img src={logo} alt=''/>
              <div >BlankPoint</div>
            </div>
          </NavLink>
        </LogoContainer>

        <MobileIcon variant = {color ? 'True':'False'} onClick={() => _setShowMobileMenu(showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <Menu open={showMobileMenu} variant = {color ? 'True':'False'}>  
          {cookies.get('userData') ?
          <NavLink className="icon-login" to='/login' >
              <User />
          </NavLink>  
          :<></>}
            
          <MenuItem>
            <MenuItemLink variant = {color ? 'True':'False'} onClick={() => _setShowMobileMenu(showMobileMenu)} to='/'>
              <div>
                Home
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink variant = {color ? 'True':'False'} onClick={() => _setShowMobileMenu(showMobileMenu)} to='/recientes'>
              <div>
                Noticias
              </div>
            </MenuItemLink>
          </MenuItem>

          <MenuItem>
            <MenuItemLink variant = {color ? 'True':'False'}  onClick={() => _setShowMobileMenu(showMobileMenu)} to='/register'>
              <div>
                Registrarse
              </div>
            </MenuItemLink>
          </MenuItem>
          {!cookies.get('userData') ?
          <MenuItem>
            <MenuItemLink variant = {color ? 'True':'False'}  onClick={() => _setShowMobileMenu(showMobileMenu)} to='/login'>
              <div>
                iniciar sesión
              </div>
            </MenuItemLink>
          </MenuItem>
          :
          <NavLink className="user-bar" to='/login'>
            <User />
          </NavLink>
          }        
          
          
        </Menu>

      </Wrapper>
    </Container>
  );
};

export default Navbar;

