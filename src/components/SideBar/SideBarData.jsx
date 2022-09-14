import React from 'react';
import {FaHandHoldingHeart} from 'react-icons/fa';
import {BiNews} from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Noticias Recientes',
    path: '/noticias',
    icon: <BiNews />,
    cName: 'nav-text'
  },
  {
    title: 'Confiabilidad de los medios',
    path: '/reliability',
    icon: <FaHandHoldingHeart />,
    cName: 'nav-text'
  }
  
];

