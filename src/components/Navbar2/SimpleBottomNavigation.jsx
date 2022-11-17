import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { NavbarDataNav } from './NavbarData';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {

  return (
    <Box sx={{ position:'fixed',bottom:0 ,width:'100%',zIndex:'100'}}>
      <BottomNavigation
        sx={{backgroundColor:'#0f0f0f'}}
        showLabels
      >
        {NavbarDataNav.map((item,i)=>(
            <BottomNavigationAction component={Link} to={item.path} sx={{color:'white'}} key={i} label={item.title} icon={item.icon} />
        ))}
      </BottomNavigation>
    </Box>
  );
}