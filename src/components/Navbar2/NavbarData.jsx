import React from 'react';
import {FaHandHoldingHeart,FaJournalWhills} from 'react-icons/fa';
import {BiNews} from 'react-icons/bi';

export const NavbarDataNav = [
  {
    title: 'Home',
    path: '/',
    icon: <BiNews />,
    cName: 'nav-text'
  },
  {
    title: 'Análisis',
    path: '/recientes',
    icon: <FaHandHoldingHeart />,
    cName: 'nav-text'
  }
  
];