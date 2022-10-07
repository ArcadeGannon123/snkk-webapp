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
    path: '/reliability',
    icon: <FaHandHoldingHeart />,
    cName: 'nav-text'
  },
  {
    title: 'Metodología',
    path: '/periodistas',
    icon: <FaJournalWhills />,
    cName: 'nav-text'
  }
  
];