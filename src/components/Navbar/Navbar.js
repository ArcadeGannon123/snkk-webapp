import React, { useState } from "react";
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

  return (
    <Container>
      <Wrapper>

        <LogoContainer>
          <img src={require('../images/icon3.png')} alt='icon'/>
        </LogoContainer>

        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <Menu open={showMobileMenu}>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} to='/'>
              <div>
                Home
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} to='/news'>
              <div>
                Noticias
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} to='/extension'>
              <div>
                Extensión
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} to='/about'>
              <div>
                Nosotros
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} to='/contact'>
              <div>
                Contacto
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} to='/sesion'>
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
