import React from 'react';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TvIcon from '@mui/icons-material/Tv';
import HelpIcon from '@mui/icons-material/Help';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import RuleIcon from '@mui/icons-material/Rule';
import ThreePIcon from '@mui/icons-material/ThreeP';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import SearchIcon from '@mui/icons-material/Search';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TwitterIcon from '@mui/icons-material/Twitter';
import PublicIcon from '@mui/icons-material/Public';

export const SidebarDataPages = [
  {
    title: 'Búsqueda',
    title2:'Búsqueda',
    path: '/search',
    icon: <SearchIcon />,
    cName: 'nav-text'
  },
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
    title: 'Actualidad',
    title2: 'Actualidad',
    path: '/actualidad',
    icon: <PublicIcon />,
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
    title: 'Análisis de twitter',
    title2: 'Twitter',
    path: '/twitter',
    icon: <TwitterIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Gráfico de sesgos',
    title2: 'Gráfico',
    path: '/medios/analisis',
    icon: <ScatterPlotIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Columnas de Opinión',
    title2: 'Columnas',
    path: '/opiniones',
    icon: <ThreePIcon />,
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
    path: '/historial',
    icon: <AnalyticsIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Noticias Favoritas',
    title2: 'Favoritos',
    path: '/favoritos',
    icon: <FavoriteIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Ver más tarde',
    title2: 'Pendientes',
    path: '/pendientes',
    icon: <WatchLaterIcon />,
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
  },
  {
    title: 'Feedback',
    title2: 'Feedback',
    path: '/feedback',
    icon: <TroubleshootIcon />,
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
