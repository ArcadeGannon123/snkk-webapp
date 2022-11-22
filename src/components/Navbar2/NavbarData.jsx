import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import HelpIcon from '@mui/icons-material/Help';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import EmailIcon from '@mui/icons-material/Email';
import NewspaperIcon from '@mui/icons-material/Newspaper';

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
    icon: <NewspaperIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Analizar',
    path: '/analize',
    icon: <StackedBarChartIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Correo',
    path: '/subscribeMail',
    icon: <EmailIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Ayuda',
    path: '/Ayuda',
    icon: <HelpIcon />,
    cName: 'nav-text'
  }
  
];