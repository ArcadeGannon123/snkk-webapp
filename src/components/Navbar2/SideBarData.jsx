import React from 'react';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TvIcon from '@mui/icons-material/Tv';
import HelpIcon from '@mui/icons-material/Help';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import RuleIcon from '@mui/icons-material/Rule';

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
    title: 'Historial del usuario',
    title2: 'Historial',
    path: '/analizados',
    icon: <AnalyticsIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Trabajos disponibles',
    title2: 'Trabajos',
    path: '/trabajos',
    icon: <QueryStatsIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Validaciones disponibles',
    title2: 'Validaciones',
    path: '/validaciones',
    icon: <RuleIcon />,
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
