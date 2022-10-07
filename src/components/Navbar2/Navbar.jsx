import React, { useState, useEffect, useContext } from "react";
import logo from '../../images/blankpointlogo4.png';
import {
  SideBarContainer,
  FaBarsContainer,
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
import {NavLink, Link} from 'react-router-dom';
import { UserContext } from '../UserContext';
import User from '../User';
import SideBar from './SideBar';
import { NavbarDataNav } from './NavbarData';



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

  const {token,setToken} = useContext(UserContext); 

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const _setShowMobileMenu = (showMobileMenu) =>{
    setShowMobileMenu(!showMobileMenu)
  }

  useEffect(() => {
  }, [showMobileMenu]);

  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);



  return (
    <>
    
    <SideBarContainer>          
      <SideBar sidebar={sidebar} />
    </SideBarContainer>   
    <Container variant = {color ? 'True':'False'} >
      <Wrapper>
        <FaBarsContainer>
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} style={{color:'white'}}/>
          </Link>
        </FaBarsContainer>
        <LogoContainer variant = {color ? 'True':'False'}>
          <NavLink to='/' className='link'  >
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
          {NavbarDataNav.map((item, index) => {
            return(
              <MenuItem key={index}>
                <MenuItemLink variant = {color ? 'True':'False'} onClick={() => _setShowMobileMenu(showMobileMenu)} to={item.path}>
                  <div>
                    {item.title}
                  </div>
                </MenuItemLink>
              </MenuItem>
            );
          })}    
        </Menu>
        <User />

      </Wrapper>
    </Container>
     
    </>
  );
};

export default Navbar;

