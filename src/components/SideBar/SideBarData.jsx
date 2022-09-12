import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Noticias Recientes',
    path: '/noticias',
    icon: <BiIcons.BiNews />,
    cName: 'nav-text'
  },
  {
    title: 'Confiabilidad de los medios',
    path: '/reliability',
    icon: <FaIcons.FaHandHoldingHeart />,
    cName: 'nav-text'
  }
  
];