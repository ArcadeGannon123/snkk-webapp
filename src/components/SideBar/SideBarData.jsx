import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Noticias Recientes',
    path: '/news',
    icon: <BiIcons.BiNews />,
    cName: 'nav-text'
  },
  {
    title: 'Credibilidad de los medios',
    path: '/reliability',
    icon: <FaIcons.FaHandHoldingHeart />,
    cName: 'nav-text'
  }
  
];