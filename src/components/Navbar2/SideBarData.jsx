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
import TopicIcon from '@mui/icons-material/Topic';

export const SidebarDataPages = [
  {
    title: 'Populares',
    title2:'Populares',
    path: '/populares',
    icon: <TrendingUpIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Noticias Recientes',
    title2: 'Recientes',
    path: '/recientes',
    icon: <NewspaperIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Medios de comunicación',
    title2: 'Medios',
    path: '/medios',
    icon: <TvIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Tópicos',
    title2: 'Tópicos',
    path: '/topicos',
    icon: <TopicIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Periodistas',
    title2: 'Periodistas',
    path: '/periodistas',
    icon: <PeopleIcon />,
    cName: 'nav-text'
  }
  
];
export const SidebarDataDash = [
  {
    title: 'Dashboard',
    title2: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Noticias analizadas',
    title2: 'Noticias',
    path: '/reliability',
    icon: <AnalyticsIcon />,
    cName: 'nav-text'
  }
  
];

export const SidebarDataOther = [
  {
    title: 'Ayuda',
    title2: 'Ayuda',
    path: '/Ayuda',
    icon: <HelpIcon />,
    cName: 'nav-text'
  }
  
];
