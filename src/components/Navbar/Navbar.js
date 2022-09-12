import React, { useState, useEffect } from "react";
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

const Navbar = () => {

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)


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
          <NavLink to='/' className='link'>
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
          <MenuItem>
            <MenuItemLink variant = {color ? 'True':'False'} onClick={() => _setShowMobileMenu(showMobileMenu)} to='/'>
              <div>
                Home
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink variant = {color ? 'True':'False'} onClick={() => _setShowMobileMenu(showMobileMenu)} to='/noticias'>
              <div>
                Noticias
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink variant = {color ? 'True':'False'} onClick={() => _setShowMobileMenu(showMobileMenu)} to='/DevPage'>
              <div>
                ¿Quienes somos?
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink variant = {color ? 'True':'False'}  onClick={() => _setShowMobileMenu(showMobileMenu)} to='/Contact'>
              <div>
                Contacto
              </div>
            </MenuItemLink>
          </MenuItem>
          
          
        </Menu>

      </Wrapper>
    </Container>
  );
};

export default Navbar;
