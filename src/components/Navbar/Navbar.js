import React, { useState, useEffect } from "react";
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
import User from '../User';
import {NavLink} from 'react-router-dom';
/*
import {
  FaBattleNet,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
} from "react-icons/fa";*/
//import { IconContext } from "react-icons";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const _setShowMobileMenu = (showMobileMenu) =>{
    setShowMobileMenu(!showMobileMenu)
  }

  useEffect(() => {
  }, [showMobileMenu]);



  return (
    <Container>
      <Wrapper>

        <LogoContainer>
          <NavLink to='/'>
            <img src={require('../images/icon3.png')} alt='icon'/>
          </NavLink>
        </LogoContainer>

        <MobileIcon onClick={() => _setShowMobileMenu(showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <Menu open={showMobileMenu}>
          <div className="mobile-menu-user">
            <User data={{ username:"Usuario no registrado" }}/>
          </div>          
          <MenuItem>
            <MenuItemLink onClick={() => _setShowMobileMenu(showMobileMenu)} to='/'>
              <div>
                Home
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => _setShowMobileMenu(showMobileMenu)} to='/news'>
              <div>
                Noticias
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => _setShowMobileMenu(showMobileMenu)} to='/extension'>
              <div>
                Extensión
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => _setShowMobileMenu(showMobileMenu)} to='/about'>
              <div>
                Nosotros
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => _setShowMobileMenu(showMobileMenu)} to='/contact'>
              <div>
                Contacto
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => _setShowMobileMenu(showMobileMenu)} to='/sesion'>
              <div>
                Iniciar sesión
              </div>
            </MenuItemLink>
          </MenuItem>
        </Menu>

      </Wrapper>
    </Container>
  );
};

export default Navbar;
