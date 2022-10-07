import React from 'react';
import {FaHandHoldingHeart,FaJournalWhills} from 'react-icons/fa';
import {BiNews} from 'react-icons/bi';

export const SidebarDataPages = [
  {
    title: 'Populares',
    path: '/populares',
    icon: <BiNews />,
    cName: 'nav-text'
  },
  {
    title: 'Noticias Recientes',
    path: '/recientes',
    icon: <BiNews />,
    cName: 'nav-text'
  },
  {
    title: 'Confiabilidad de los medios',
    path: '/reliability',
    icon: <FaHandHoldingHeart />,
    cName: 'nav-text'
  },
  {
    title: 'Periodistas',
    path: '/periodistas',
    icon: <FaJournalWhills />,
    cName: 'nav-text'
  }
  
];
export const SidebarDataDash = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <BiNews />,
    cName: 'nav-text'
  },
  {
    title: 'Noticias analizadas',
    path: '/reliability',
    icon: <FaHandHoldingHeart />,
    cName: 'nav-text'
  }
  
];

export const SidebarDataOther = [
  {
    title: 'Ayuda',
    path: '/Ayuda',
    icon: <BiNews />,
    cName: 'nav-text'
  }
  
];