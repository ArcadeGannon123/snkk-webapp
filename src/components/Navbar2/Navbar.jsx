import React, { useState, useEffect, useContext } from "react";
import logo from '../../images/blankpointlogo4.png';
import {
  SideBarContainer,
  SideBarContainer2,
  FaBarsContainer,
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
  UserContainer,
  BottomBarContainer
} from "./Narbar.elements";
import {
  FaBars,
  FaTimes
} from "react-icons/fa";
import {NavLink, Link} from 'react-router-dom';
import { UserContext } from '../UserContext';
import User from '../user/User';
import SideBar from './SideBar';
import SideBar2 from './SideBar2';
import { NavbarDataNav } from './NavbarData';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Cookies from 'universal-cookie';
import SimpleBottomNavigation from "./SimpleBottomNavigation";


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

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    _setShowMobileMenu(showMobileMenu)
  };



  return (
    <>
    {sidebar ?
    <SideBarContainer>
      <SideBar sidebar={sidebar} />
    </SideBarContainer>   
    :
    <SideBarContainer2 >
      <SideBar2 sidebar={sidebar} />
    </SideBarContainer2> 
    
    }
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
        
        <Menu open={showMobileMenu} variant = {color ? 'True':'False'}> 
          {NavbarDataNav.map((item, index) => {
            return(
              <div style={{display: item.title === 'Analizar' || item.title === 'Correo' ?
                          cookies.get('userData')?.premium ? 'block' : 'none' : 'block' }}>
              <MenuItem key={index} >
                <MenuItemLink variant = {color ? 'True':'False'} onClick={() => _setShowMobileMenu(showMobileMenu)} to={item.path}>
                    {item.title}
                </MenuItemLink>
              </MenuItem>
              </div>
            );
          })}    
        </Menu>
          
        {/*<MobileIcon variant = {color ? 'True':'False'} onClick={() => _setShowMobileMenu(showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>*/}
        <UserContainer>
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
        </UserContainer>
      </Wrapper>
    </Container>
    <BottomBarContainer>
      <SimpleBottomNavigation/>
    </BottomBarContainer>
     
    </>
  );
};

export default Navbar;

