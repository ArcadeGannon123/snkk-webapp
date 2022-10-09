import React from 'react';
import {FaHandHoldingHeart,FaJournalWhills} from 'react-icons/fa';
import {BiNews} from 'react-icons/bi';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import TvIcon from '@mui/icons-material/Tv';
import HelpIcon from '@mui/icons-material/Help';

export const SidebarDataPages = [
  {
    title: 'Populares',
    path: '/populares',
    icon: <TrendingUpIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Noticias Recientes',
    path: '/recientes',
    icon: <NewspaperIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Medios de comunicación',
    path: '/reliability',
    icon: <TvIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Periodistas',
    path: '/periodistas',
    icon: <PeopleIcon />,
    cName: 'nav-text'
  }
  
];
export const SidebarDataDash = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Noticias analizadas',
    path: '/reliability',
    icon: <AnalyticsIcon />,
    cName: 'nav-text'
  }
  
];

export const SidebarDataOther = [
  {
    title: 'Ayuda',
    path: '/Ayuda',
    icon: <HelpIcon />,
    cName: 'nav-text'
  }
  
];

export const SidebarDataColumnOther = [
  {
    title: 'Ayuda',
    path: '/Ayuda',
    icon: <HelpIcon />,
    cName: 'nav-text'
  }
  
];

export const SidebarDataColumnDash = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Noticias analizadas',
    path: '/reliability',
    icon: <AnalyticsIcon />,
    cName: 'nav-text'
  }
  
];


export const SidebarDataColumnPages = [
  {
    title: 'Populares',
    path: '/populares',
    icon: <TrendingUpIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Recientes',
    path: '/recientes',
    icon: <NewspaperIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Medios',
    path: '/reliability',
    icon: <TvIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Periodistas',
    path: '/periodistas',
    icon: <PeopleIcon />,
    cName: 'nav-text'
  }
  
];