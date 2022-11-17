import React from 'react';
import {FaHandHoldingHeart,FaJournalWhills} from 'react-icons/fa';
import {BiNews} from 'react-icons/bi';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import HelpIcon from '@mui/icons-material/Help';

export const NavbarDataNav = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Noticias',
    path: '/recientes',
    icon: <BarChartIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Analizar',
    path: '/analize',
    icon: <FaHandHoldingHeart />,
    cName: 'nav-text'
  },
  {
    title: 'Correo',
    path: '/subscribeMail',
    icon: <FaHandHoldingHeart />,
    cName: 'nav-text'
  },
  {
    title: 'Ayuda',
    path: '/Ayuda',
    icon: <HelpIcon />,
    cName: 'nav-text'
  }
  
];